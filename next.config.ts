import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // API Routes'un çalışması için kritik
    output: "standalone", 

    reactStrictMode: true,

    images: {
        // unoptimized: true satırı KALDIRILDI
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