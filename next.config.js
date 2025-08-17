/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,       // Helps catch potential React bugs
  swcMinify: true,             // Use Next.js compiler for faster builds
  output: 'standalone',        // Optional: good for Vercel deployments
  // basePath: '',              // Uncomment if you host under a subpath
  // assetPrefix: '',           // Uncomment if you use a CDN for assets
}

module.exports = nextConfig
