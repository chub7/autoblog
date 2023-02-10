const configs = require('./configs.json');
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [configs.STRAPI_DOMAIN],
  }
}

module.exports = nextConfig
