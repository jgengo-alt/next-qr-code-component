/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  assetPrefix: isProd ? '/next-qr-code-component/' : ''
}

module.exports = nextConfig
