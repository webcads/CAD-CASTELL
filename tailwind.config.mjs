/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				body: "gray",				
				silver:"silver",
				secondary: "#2b2c30",
				secondary_dark: "#202020",
				brandingColor: "cyan",
				third:"#6ae8aa"
			  }
		},
	},
	plugins: [],
}
