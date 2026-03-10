import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://thronesapi.com/**")],
  },
};

export default nextConfig;
