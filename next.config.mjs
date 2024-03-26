/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.**.com'
      },
      {
        protocol: 'https',
        hostname: '**.**.org'
      },
      {
        protocol: 'https',
        hostname: '**.**.cloud'
      },
    ],
  },
};

export default nextConfig;
