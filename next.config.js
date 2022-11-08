/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  staticPageGenerationTimeout: 60 * 2
};

module.exports = nextConfig;
