/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
   dest: 'public',
   register: true,
   skipWaiting: true,
   disable: process.env.NODE_ENV === 'development',
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   reactStrictMode: false,
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));
