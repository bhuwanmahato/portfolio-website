/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/Pages/activationMessage.json",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "chrome-extension://lhefnnndgedibockdpbjhgobjlnenmcc",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "chrome-extension://pnooehjmfoolleebkoboieekgfgbhjmf",
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
