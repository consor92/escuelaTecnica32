/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // <<<--- AÑADÍ ESTO
  },
}

module.exports = nextConfig
