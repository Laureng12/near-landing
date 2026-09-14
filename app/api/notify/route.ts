import { NextResponse } from "next/server"

/* The publishable key is safe to hold here - it is the browser-facing key by
   design, and the WaitlistSignup table is insert-only under RLS, so nothing
   can be read back with it. Keeping the call server-side means the key never
   reaches the client bundle at all. */
const SUPABASE_URL = "https://gnfwdjkdfihxecfmgbel.supabase.co"
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_AK_Svyi87TV2MbmxDFsasg_Uvy_eDJB"

const EMAIL = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/

export async function POST(request: Request) {
  let body: { email?: unknown; source?: unknown }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 })
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""
  const source = typeof body.source === "string" ? body.source.slice(0, 64) : null

  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: "That email does not look right." }, { status: 400 })
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/WaitlistSignup`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email, source }),
  })

  /* 23505 is the unique index on lower(email). Signing up twice is not an
     error the visitor needs to hear about. */
  if (!res.ok) {
    const detail = await res.text()
    if (res.status === 409 || detail.includes("23505")) {
      return NextResponse.json({ ok: true, already: true })
    }
    console.error("waitlist insert failed", res.status, detail)
    return NextResponse.json({ error: "Could not save that. Try again in a moment." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
