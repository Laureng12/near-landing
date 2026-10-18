# Deploying near-landing

This project serves the **BoopThere** marketing site (`www.boopthere.com`,
canonical) and `nearesttask.com` (marketing pages; universal-link paths stay
on nearesttask.com — see `next.config.ts`).

## How it deploys
**No git auto-deploy is configured.** Deploy to production manually:

```
cd near-landing
vercel --prod
```

(Requires the Vercel CLI logged in as a team member of the Vercel org.)
A plain `git push origin main` does NOT update the live site on its own.

## Domain note (2026-10 — IMPORTANT)
`boopthere.com` + `www.boopthere.com` were originally production domains on a
SEPARATE Vercel project named **"boopthere"**, so near-landing deploys did not
update them. They should live on **this** (near-landing) project so production
deploys keep them current. To fix in the Vercel dashboard:
1. "boopthere" project → Settings → Domains → remove `boopthere.com` + `www.boopthere.com`.
2. "near-landing" project → Settings → Domains → add both (apex → www).
3. Optionally enable Git auto-deploy for `main`.
Until that move is done, `boopthere.com` is held by a manual `vercel alias`
pointer and can revert if the "boopthere" project redeploys.
