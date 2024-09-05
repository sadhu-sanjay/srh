/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: `rgba(var(--primary), <alpha-value>)`,
				accent: `rgba(var(--accent), <alpha-value>)`,
				"secondary-accent": `rgba(var(--secondary-accent), <alpha-value>)`
			}	
		},
	},
	plugins: [],
}
