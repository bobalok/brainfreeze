/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    unoptimized: false,
    domains: [
      "https://drive.google.com",
      "https://cdn.pixabay.com",
      "images.unsplash.com",
      "https://www.tailwind-kit.com",
      "https://www.hyperui.dev",
      "https://th.bing.com",
      "https://mdbcdn.b-cdn.net",
      "www.google.com.bd",
      "https://media.gettyimages.com",
    ],
  },
});
