/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "content.dashtoon.ai",
      },
      {
        protocol: "https",
        hostname: "pub-83c5db439b40468498f97946200806f7.r2.dev",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/Pages/activationMessage.json",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allows all origins
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
