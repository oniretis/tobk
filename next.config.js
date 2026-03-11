const createNextIntlPlugin = require("next-intl/plugin");



const withNextIntl = createNextIntlPlugin();



/** @type {import('next').NextConfig} */

const nextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {

    remotePatterns: [

      {

        protocol: "https",

        hostname: "cdn.sanity.io",

      },

    ],

  },

};



module.exports = withNextIntl(nextConfig);

