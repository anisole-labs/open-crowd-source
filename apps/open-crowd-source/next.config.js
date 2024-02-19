const withMDX = require("@next/mdx")();
// const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  webpack: (config) => {
    config.resolve.alias["handlebars"] = "handlebars/dist/handlebars.js";
    return config;
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"]
};

module.exports = withMDX(nextConfig);
