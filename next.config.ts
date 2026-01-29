import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/resources',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
