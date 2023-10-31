/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    })
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextTranslate(nextConfig)
