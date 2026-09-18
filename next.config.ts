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
        value: "https://www.nearesttask.com",
      },
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
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
        // Shared-list web preview — nearesttask.com/list/TOKEN renders the
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
