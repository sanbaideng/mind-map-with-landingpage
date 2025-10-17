const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.ai-random-generator.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
});

module.exports = nextConfig;
