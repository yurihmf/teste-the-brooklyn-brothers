/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
    loader: "imgix",
    path: "",
  }
}

module.exports = nextConfig
