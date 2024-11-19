/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'0xProtoNerdFont': ['0xProtoNerdFont', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}