const path = require("path");
const { withRoutes } = require("nextjs-routes/next-config.cjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withRoutes(nextConfig);
