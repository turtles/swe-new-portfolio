/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    output: 'export',
    reactStrictMode: true,
    images: { unoptimized: true },
}

module.exports = nextConfig
