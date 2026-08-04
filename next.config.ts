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
        source: '/programs/entry-level/ai',
        destination: '/programs/entry-level',
        permanent: true,
      },
      {
        source: '/programs/entry-level/cyber-security',
        destination: '/programs/entry-level',
        permanent: true,
      },
      {
        source: '/programs/entry-level/quantum-computing',
        destination: '/programs/entry-level',
        permanent: true,
      },
      {
        source: '/programs/entry-level/blockchain',
        destination: '/programs/entry-level',
        permanent: true,
      },
      {
        source: '/programs/professional/ai',
        destination: '/programs/professional',
        permanent: true,
      },
      {
        source: '/programs/professional/cyber-security',
        destination: '/programs/professional',
        permanent: true,
      },
      {
        source: '/programs/professional/quantum-computing',
        destination: '/programs/professional',
        permanent: true,
      },
      {
        source: '/programs/professional/blockchain',
        destination: '/programs/professional',
        permanent: true,
      },
      {
        source: '/schools/ai',
        destination: '#',
        permanent: true,
      },
      {
        source: '/schools/cyber',
        destination: '#',
        permanent: true,
      },
      {
        source: '/schools/quantum-computing',
        destination: '#',
        permanent: true,
      },
      {
        source: '/schools/blockchain',
        destination: '#',
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
        source: '/schools/esg',
        destination: '#',
        permanent: true,
      },
      {
        source: '/schools/datascience',
        destination: '#',
        permanent: true,
      },
      {
        source: '/schools/sustainability',
        destination: '#',
        permanent: true,
      },
      {
        source: '/schools/renewable-energy',
        destination: '#',
        permanent: true,
      },
      {
        source: '/schools/strategy',
        destination: '#',
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
