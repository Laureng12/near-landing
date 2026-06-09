import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
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
    ];
  },
};

export default nextConfig;
