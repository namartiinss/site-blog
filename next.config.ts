import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {

  reactStrictMode: true,
  swcMinify: true
};

export default withContentlayer(nextConfig);