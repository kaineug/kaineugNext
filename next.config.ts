import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    output: 'standalone',
};

export default nextConfig;
