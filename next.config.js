/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vashonbuild-com.nyc3.cdn.digitaloceanspaces.com',
        pathname: '/production/app/uploads/**',
        port: ''
      }
    ],
  },
};
