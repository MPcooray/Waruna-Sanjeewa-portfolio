import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/interviews", destination: "/training", permanent: true },
    ];
  },
};

export default nextConfig;
