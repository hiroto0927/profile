import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isDev ? "" : "/profile",
  assetPrefix: isDev ? "" : "/profile",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
