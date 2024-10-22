import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    dynamicIO: true,
    ppr: true,
    cacheLife: {
      frequent: {
        revalidate: 20,
        expire: 60,
      },
      default: {}
    }
  }
};

export default nextConfig;
