/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  // Disable metadataBase warning in development
  experimental: {
    // Enable other experimental features as needed
  },
};

module.exports = nextConfig;
