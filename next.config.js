/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_DOMAIN],
  },
};

module.exports = nextConfig;
