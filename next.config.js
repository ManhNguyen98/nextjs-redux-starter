/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
