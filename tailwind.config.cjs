/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["'Montserrat', sans-serif"]
		},
		colors: {
			primary: '#b8c7cb',
			secondary: '#e7eff5',
			background: '#001821',
			highlight: '#0099ff',
		},
		extend: {},
	},
	plugins: [],
}
