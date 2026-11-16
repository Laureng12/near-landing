// Regression tests for the waitlist notify route (app/api/notify/route.ts) — the
// one server handler with real failure paths (email validation, bad JSON, the
// Supabase insert + its dedup/error mapping). near-landing has no test framework,
// so this runs on bare `node` (npm test): it transpiles the real route with esbuild
// and loads it with a fake `next/server` + a fake `fetch`, so no network or Next
// runtime is needed.
//
// Run: `npm test`
import { build } from 'esbuild'
import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const here = dirname(fileURLToPath(import.meta.url))
const SRC = join(here, '..', 'app', 'api', 'notify', 'route.ts')

// Transpile the real route to CJS.
const out = await build({ entryPoints: [SRC], bundle: false, format: 'cjs', platform: 'node', write: false, logLevel: 'silent' })
const code = out.outputFiles[0].text

// Fake next/server — NextResponse.json(body, init?) → a plain object we can assert on.
const fakeNextServer = {
  NextResponse: { json: (body, init) => ({ _body: body, status: init?.status ?? 200 }) },
}
const mod = { exports: {} }
// eslint-disable-next-line no-new-func
new Function('require', 'module', 'exports', code)(
  (id) => (id === 'next/server' ? fakeNextServer : require(id)),
  mod,
  mod.exports,
)
const { POST } = mod.exports

// A minimal Request with the one method the handler uses.
const req = (bodyText, { badJson = false } = {}) => ({
  json: async () => {
    if (badJson) throw new Error('bad json')
    return JSON.parse(bodyText)
  },
})

let fetchImpl
globalThis.fetch = (...args) => fetchImpl(...args)
const supaOk = () => ({ ok: true, status: 200, text: async () => '' })
const supaConflict = () => ({ ok: false, status: 409, text: async () => '' })
const supaDupBody = () => ({ ok: false, status: 400, text: async () => 'duplicate key value violates unique constraint "23505"' })
const supaFail = () => ({ ok: false, status: 500, text: async () => 'boom' })

let passed = 0
const pass = (n) => { console.log('  ok -', n); passed++ }

// 1. valid email → inserts and returns ok; email normalized (trim + lowercase).
{
  let captured
  fetchImpl = async (_url, opts) => { captured = JSON.parse(opts.body); return supaOk() }
  const r = await POST(req('{"email":"  Alice@Example.COM  ","source":"hero"}'))
  assert.equal(r.status, 200)
  assert.deepEqual(r._body, { ok: true })
  assert.equal(captured.email, 'alice@example.com', 'email trimmed + lowercased')
  assert.equal(captured.source, 'hero')
  pass('valid email inserts; normalized')
}

// 2. invalid email → 400, never hits the DB.
{
  let called = false
  fetchImpl = async () => { called = true; return supaOk() }
  const r = await POST(req('{"email":"not-an-email"}'))
  assert.equal(r.status, 400)
  assert.equal(called, false, 'must not insert an invalid email')
  pass('invalid email → 400, no insert')
}

// 3. bad JSON body → 400.
{
  fetchImpl = async () => supaOk()
  const r = await POST(req('', { badJson: true }))
  assert.equal(r.status, 400)
  pass('bad JSON → 400')
}

// 4. duplicate signup (409) → treated as success, not an error the visitor sees.
{
  fetchImpl = async () => supaConflict()
  const r = await POST(req('{"email":"dup@example.com"}'))
  assert.equal(r.status, 200)
  assert.deepEqual(r._body, { ok: true, already: true })
  pass('409 dedup → ok/already')
}

// 5. unique-violation in the body (23505) → also treated as success.
{
  fetchImpl = async () => supaDupBody()
  const r = await POST(req('{"email":"dup2@example.com"}'))
  assert.equal(r.status, 200)
  assert.deepEqual(r._body, { ok: true, already: true })
  pass('23505 body → ok/already')
}

// 6. other DB failure → 502, generic message (no internal detail leaked).
{
  fetchImpl = async () => supaFail()
  const r = await POST(req('{"email":"x@example.com"}'))
  assert.equal(r.status, 502)
  assert.ok(!JSON.stringify(r._body).includes('boom'), 'must not leak the DB error detail')
  pass('other failure → 502, no leak')
}

// 7. over-length email (>254) → 400 even if the regex would pass.
{
  let called = false
  fetchImpl = async () => { called = true; return supaOk() }
  const long = 'a'.repeat(250) + '@example.com'
  const r = await POST(req(JSON.stringify({ email: long })))
  assert.equal(r.status, 400)
  assert.equal(called, false)
  pass('over-length email → 400')
}

// 8. source is truncated to 64 chars.
{
  let captured
  fetchImpl = async (_url, opts) => { captured = JSON.parse(opts.body); return supaOk() }
  await POST(req(JSON.stringify({ email: 'y@example.com', source: 'z'.repeat(100) })))
  assert.equal(captured.source.length, 64, 'source capped at 64')
  pass('source truncated to 64')
}

console.log(`\nnotify: all ${passed} checks passed.`)
