/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'serverless',
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig

