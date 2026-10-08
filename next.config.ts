import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  async redirects() {
    return [
      {
        source: '/webinars',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/blog',
        permanent: true,
      },

      {
        source: '/about/faculty/vishwanath-akuthota',
        destination: '/vishwanathakuthota',
        permanent: true,
      },
      {
        source: '/about/faculty/saipramod',
        destination: '/about/faculty/sai-pramod',
        permanent: true,
      },
      {
        source: '/about/faculty/manikanta',
        destination: '/about/faculty/jayavardhan-reddy',
        permanent: true,
      },
      {
        source: '/programs/entry-level',
        destination: '/programs/ygp',
        permanent: true,
      },
      {
        source: '/programs/entry-level/ai',
        destination: '/programs/ygp',
        permanent: true,
      },
      {
        source: '/programs/entry-level/cyber-security',
        destination: '/programs/ygp',
        permanent: true,
      },
      {
        source: '/programs/entry-level/quantum-computing',
        destination: '/programs/ygp',
        permanent: true,
      },
      {
        source: '/programs/entry-level/blockchain',
        destination: '/programs/ygp',
        permanent: true,
      },
      {
        source: '/programs/ygp/ai',
        destination: '/programs/ygp',
        permanent: true,
      },
      {
        source: '/programs/ygp/cyber-security',
        destination: '/programs/ygp',
        permanent: true,
      },
      {
        source: '/programs/ygp/quantum-computing',
        destination: '/programs/ygp',
        permanent: true,
      },
      {
        source: '/programs/ygp/blockchain',
        destination: '/programs/ygp',
        permanent: true,
      },
      {
        source: '/programs/professional',
        destination: '/programs/pgp',
        permanent: true,
      },
      {
        source: '/programs/professional/ai',
        destination: '/programs/pgp',
        permanent: true,
      },
      {
        source: '/programs/professional/cyber-security',
        destination: '/programs/pgp',
        permanent: true,
      },
      {
        source: '/programs/professional/quantum-computing',
        destination: '/programs/pgp',
        permanent: true,
      },
      {
        source: '/programs/professional/blockchain',
        destination: '/programs/pgp',
        permanent: true,
      },
      {
        source: '/programs/pgp/ai',
        destination: '/programs/pgp',
        permanent: true,
      },
      {
        source: '/programs/pgp/cyber-security',
        destination: '/programs/pgp',
        permanent: true,
      },
      {
        source: '/programs/pgp/quantum-computing',
        destination: '/programs/pgp',
        permanent: true,
      },
      {
        source: '/programs/pgp/blockchain',
        destination: '/programs/pgp',
        permanent: true,
      },
      {
        source: '/schools/venture-building',
        destination: '/venture-building',
        permanent: true,
      },
      {
        source: '/programs/venture-building',
        destination: '/venture-building',
        permanent: true,
      },
      {
        source: '/programs/fde',
        destination: '/programs/advanced-management/fde',
        permanent: true,
      },
      {
        source: '/programs/Advanced-management',
        destination: '/programs/advanced-management',
        permanent: true,
      },
      {
        source: '/programs/Advanced-management/:path*',
        destination: '/programs/advanced-management/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

export default nextConfig;
