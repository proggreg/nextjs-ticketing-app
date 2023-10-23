/** @type {import('next').NextConfig} */
const nextConfig = {};
const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

module.exports = nextConfig;
module.exports = withVercelToolbar({
  // Next.js config options
});
