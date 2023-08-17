/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/pw/**",
      },
    ],
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
};

module.exports = nextConfig;
