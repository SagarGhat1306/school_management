import type { NextConfig } from "next";
import { hostname } from "os";
import path from "path";

const nextConfig: NextConfig = {
  // Any existing config options

  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname), // <-- Add this line
    };
    return config;
  },

  images : {
    remotePatterns : [{hostname : 'images.pexels.com'}]
  }
};

export default nextConfig;
