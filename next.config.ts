import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",

        port: "",
        pathname: "/images/",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
