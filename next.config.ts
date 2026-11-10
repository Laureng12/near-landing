import type { NextConfig } from "next";

/* Brand-domain migration (audit B09). Flip the canonical marketing host to
   boopsie.app by setting BOOPSIE_CANONICAL=1 in Vercel — until then this file is
   byte-for-byte the previous boopthere.com behavior (safe to deploy before the
   domain is attached). When on:
     - canonical marketing host = www.boopsie.app;
     - boopsie.app apex → www (marketing only; app-paths + AASA serve on the apex);
     - boopthere.com + nearesttask.com MARKETING → www.boopsie.app, but their
       APP paths (/.well-known AASA, /f, /list, /refer, /gather, /join, /clip,
       /v1/public) keep serving via rewrites() so links already in the wild — and
       existing app builds that only know those hosts — never break. */
export const BOOPSIE_CANONICAL = process.env.BOOPSIE_CANONICAL === "1";
const CANON_APEX = BOOPSIE_CANONICAL ? "boopsie.app" : "boopthere.com";
const CANON = `https://www.${CANON_APEX}`;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    qualities: [75, 100],
  },
  async headers() {
    const securityHeaders = [
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline'",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com",
          "img-src 'self' data: blob:",
          "connect-src 'self' https://backend-one-xi.vercel.app",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          "frame-ancestors 'none'",
          "upgrade-insecure-requests",
        ].join("; "),
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value: "accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), usb=(), browsing-topics=()",
      },
      {
        key: "Cross-Origin-Opener-Policy",
        value: "same-origin",
      },
      {
        key: "Cross-Origin-Resource-Policy",
        value: "same-origin",
      },
      {
        key: "Access-Control-Allow-Origin",
        value: CANON,
      },
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    /* BoopThere is the brand; boopthere.com is canonical, and as of the 2026-10
       routing move it is the domain NEW links mint (referral, SMS join, share
       footers). App paths — /.well-known (AASA), /invite, /join, /gather, /list,
       /f, /clip, /refer, /v1/public — are served on boopthere.com (native Next
       pages for /join + /gather; rewrites to the backend for the rest) and must
       NOT redirect (Apple will not follow a redirect for the AASA).
       - boopthereitis.com (the tagline domain) sends everything to boopthere.com.
       - nearesttask.com keeps serving the SAME app paths for legacy links already
         in the wild (the app's inbound deep-link handler still accepts that host);
         its marketing pages redirect to boopthere.com when BOOPTHERE_REDIRECT_NEAREST=1. */
    const marketing = ["/", "/features", "/pricing", "/support", "/privacy", "/terms"]

    /* Legacy hosts whose MARKETING pages redirect to the canonical www host. Their
       APP paths are deliberately NOT redirected (they fall through to rewrites() and
       serve directly — Apple won't follow an AASA redirect, and in-the-wild links
       must keep working). When BOOPSIE_CANONICAL is on, boopthere.com + nearesttask
       both become legacy; when off, only nearesttask (gated as before). */
    const legacyMarketingHosts = BOOPSIE_CANONICAL
      ? ["boopthere.com", "www.boopthere.com", "nearesttask.com", "www.nearesttask.com"]
      : (process.env.BOOPTHERE_REDIRECT_NEAREST === "1" ? ["nearesttask.com", "www.nearesttask.com"] : [])

    return [
      /* Tagline domain → canonical (all paths; it serves no app-paths of its own). */
      ...["boopthereitis.com", "www.boopthereitis.com"].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: `${CANON}/:path*`,
        permanent: true,
      })),
      /* Canonical APEX → www, for the marketing pages ONLY (LINK-002).
         The app paths — /.well-known (AASA), /invite, /list, /clip, /v1/public —
         are deliberately NOT redirected here: they fall through to rewrites()
         and serve DIRECTLY on the apex, so iOS can fetch the association file on
         applinks:<apex> (Apple will not follow a redirect for the AASA).
         Requires the apex domain to be assigned to the project (its project-level
         `redirect` removed) — redirects() never runs while the domain is a
         Vercel-level redirect. */
      ...marketing.map((path) => ({
        source: path,
        has: [{ type: "host" as const, value: CANON_APEX }],
        destination: `${CANON}${path}`,
        permanent: true,
      })),
      /* Legacy hosts' MARKETING → canonical (app-paths excluded — see above). */
      ...legacyMarketingHosts.flatMap((host) =>
        marketing.map((path) => ({
          source: path,
          has: [{ type: "host" as const, value: host }],
          destination: `${CANON}${path}`,
          permanent: true,
        }))
      ),
    ]
  },
  async rewrites() {
    return [
      {
        source: "/.well-known/:path*",
        destination: "https://backend-one-xi.vercel.app/.well-known/:path*",
      },
      {
        source: "/invite/:code",
        destination: "https://backend-one-xi.vercel.app/invite/:code",
      },
      {
        source: "/clip",
        destination: "https://backend-one-xi.vercel.app/clip",
      },
      {
        // Shared-list web preview — /list/TOKEN (either domain) renders the
        // backend's server-side list page for recipients without the app.
        source: "/list/:token",
        destination: "https://backend-one-xi.vercel.app/list/:token",
      },
      {
        // Meal/recipe share preview — /f/TOKEN renders the backend's server-side
        // share page for recipients without the app (same pattern as /list). Its
        // inline JS posts funnel/write-back to /v1/public/list/* (rewritten below).
        source: "/f/:token",
        destination: "https://backend-one-xi.vercel.app/f/:token",
      },
      {
        // The preview page's inline JS posts funnel events + write-back to the
        // public (token-as-capability) API via same-origin relative paths.
        source: "/v1/public/list/:path*",
        destination: "https://backend-one-xi.vercel.app/v1/public/list/:path*",
      },
    ];
  },
};

export default nextConfig;
