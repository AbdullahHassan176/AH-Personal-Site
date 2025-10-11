/** @type {import('next').NextConfig} */
const nextConfig = {
  // Azure Static Web Apps with Azure Functions
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
  // SEO and Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Note: Headers are not supported with static export
  // Security headers should be configured at the Azure Static Web Apps level
}

module.exports = nextConfig
