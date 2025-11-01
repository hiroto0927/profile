import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/profile",
  assetPrefix: "/profile",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
