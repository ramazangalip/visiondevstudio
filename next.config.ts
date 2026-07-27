import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
    // API Routes'un çalışması için kritik
    output: "standalone", 

    reactStrictMode: true,

    turbopack: {
        root: path.resolve(__dirname),
    },

    images: {
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