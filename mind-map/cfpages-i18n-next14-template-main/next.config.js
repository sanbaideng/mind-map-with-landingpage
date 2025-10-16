const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.ai-random-generator.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // 删除 i18n 配置
  // 其他配置保持不变...
});

module.exports = nextConfig;
