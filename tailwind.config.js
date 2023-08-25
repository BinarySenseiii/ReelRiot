/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fill, minmax(238px, 1fr))',
				backdrop: 'repeat(auto-fill, minmax(228px, 1fr))',
				'auto-fit-media': 'repeat(auto-fill, minmax(179px, 1fr))',
				'auto-fit-video': 'repeat(auto-fill, minmax(274px, 1fr))',
			},
		},
	},
	plugins: [],
}
