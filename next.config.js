/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    unoptimized: true,
    domains: ["lh3.googleusercontent.com", "maps.googleapis.com"],
  },
};

module.exports = nextConfig;
