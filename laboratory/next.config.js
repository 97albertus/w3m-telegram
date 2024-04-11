/** @type {import('next').NextConfig} */

// Only required within the scope of this monorepo
const nextConfig = {
  // transpilePackages: ['@97albertus/modal-ui', '@97albertus/modal-core'],
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'export'
}

module.exports = nextConfig
