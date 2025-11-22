import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  reactStrictMode: true,

  images: {
    unoptimized: true,  // ← Statik export için ZORUNLU
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
