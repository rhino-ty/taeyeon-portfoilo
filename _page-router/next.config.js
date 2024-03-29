/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.notion.so", "s3.us-west-2.amazonaws.com", "images.unsplash.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
