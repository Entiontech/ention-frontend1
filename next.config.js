/** @type {import('next').NextConfig} */
const env = {};

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "picsum.photos",
      "rukminim1.flixcart.com",
      "media.graphassets.com",
      "efdwsxatehjhvmlqjcyc.supabase.co",
      'images.unsplash.com',
    ],
  },
  env,
};

module.exports = nextConfig;
