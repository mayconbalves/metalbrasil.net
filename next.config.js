const withMDX = require('@next/mdx')()
const withNextra = require('nextra')({
  theme: './theme.tsx'
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
  }
}

module.exports = withMDX(withNextra(nextConfig))
