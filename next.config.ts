import type { NextConfig } from "next";

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
        value: "https://www.boopthere.com",
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
    /* BoopThere is the brand; boopthere.com is canonical.
       - boopthereitis.com (the tagline domain) sends everything there.
       - nearesttask.com sends only its marketing pages. Invite, shared-list,
         /join, /gather, /clip and /.well-known stay served on nearesttask.com,
         because links already sent and the app's universal links point there
         and must not redirect (Apple will not follow a redirect for the AASA). */
    const marketing = ["/", "/features", "/pricing", "/support", "/privacy", "/terms"]
    return [
      ...["boopthereitis.com", "www.boopthereitis.com"].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://www.boopthere.com/:path*",
        permanent: true,
      })),
      /* boopthere.com APEX → www, for the marketing pages ONLY (LINK-002).
         The app paths — /.well-known (AASA), /invite, /list, /clip, /v1/public —
         are deliberately NOT redirected here: they fall through to rewrites()
         and serve DIRECTLY on the apex, so iOS can fetch the association file on
         applinks:boopthere.com (Apple will not follow a redirect for the AASA).
         This replaces the Vercel domain-level apex→www 308, which caught the
         AASA too. Requires the apex domain to be assigned to the project (its
         project-level `redirect` removed) — redirects() never runs while the
         domain is a Vercel-level redirect. */
      ...marketing.map((path) => ({
        source: path,
        has: [{ type: "host" as const, value: "boopthere.com" }],
        destination: `https://www.boopthere.com${path}`,
        permanent: true,
      })),
      /* Off until www.boopthere.com serves the public production site.
         Turn on by setting BOOPTHERE_REDIRECT_NEAREST=1 in Vercel. */
      ...(process.env.BOOPTHERE_REDIRECT_NEAREST === "1" ? ["nearesttask.com", "www.nearesttask.com"] : []).flatMap((host) =>
        marketing.map((path) => ({
          source: path,
          has: [{ type: "host" as const, value: host }],
          destination: `https://www.boopthere.com${path}`,
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
        // The preview page's inline JS posts funnel events + write-back to the
        // public (token-as-capability) API via same-origin relative paths.
        source: "/v1/public/list/:path*",
        destination: "https://backend-one-xi.vercel.app/v1/public/list/:path*",
      },
    ];
  },
};

export default nextConfig;
