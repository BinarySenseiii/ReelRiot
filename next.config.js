/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'yts.mx',
			},

			{
				protocol: 'http',
				hostname: 'image.tmdb.org',
			},
			{
				protocol: 'https',
				hostname: 'otoa-website.s3.us-east-2.amazonaws.com',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
		],
	},
}

module.exports = nextConfig
