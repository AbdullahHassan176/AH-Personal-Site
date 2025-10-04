/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Azure Static Web Apps
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['storage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/uxpilot-auth.appspot.com/**',
      },
    ],
  },
  // Note: Headers are not supported with static export
  // Security headers should be configured at the Azure Static Web Apps level
}

module.exports = nextConfig
