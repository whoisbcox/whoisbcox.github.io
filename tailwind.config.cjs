/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["'Montserrat', sans-serif"]
		},
		colors: {
			primary: '#B8C7CB',
			secondary: '#E7EFF5',
			background: '#001821',
			highlight: '#0099ff',
		},
		extend: {},
	},
	plugins: [],
}
