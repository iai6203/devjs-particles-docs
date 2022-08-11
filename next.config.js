const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
  },
  ...nextTranslate(),
}

module.exports = nextConfig
