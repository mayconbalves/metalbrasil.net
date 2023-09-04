const withNextra = require('nextra')({
  theme: './theme.tsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withNextra(nextConfig)
