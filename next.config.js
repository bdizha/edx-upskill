/* eslint-disable */

const path = require("path");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const config = {
  images: {
    loader: "custom",
    domains: ["res.cloudinary.com", "s3-eu-west-1.amazonaws.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  productionBrowserSourceMaps: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [];
  },
  experimental: {
    fallbackNodePolyfills: false,
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "node_modules", "@edx/brand/paragon"), // Include the package
    ],
  },
};

module.exports = () => {
  const plugins = [withPWA, withBundleAnalyzer];

  return {
    transpilePackages: ["@edx/paragon"],
    ...plugins.reduce((acc, plugin) => plugin(acc), config),
  };
};
