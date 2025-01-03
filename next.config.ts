import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spotlight.tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "vercel.com",
      },
    ],
  },
};

export default nextConfig;
