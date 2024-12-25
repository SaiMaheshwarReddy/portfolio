import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // contentful assets
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  //temp
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
