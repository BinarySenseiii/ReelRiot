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
		],
	},
}

module.exports = nextConfig
