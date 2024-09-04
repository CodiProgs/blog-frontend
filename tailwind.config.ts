import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				bg: 'rgba(var(--bg))',
				bg_soft: 'rgba(var(--bg-soft))',
				fg: 'rgba(var(--fg))',
				fg_soft: 'rgba(var(--fg-soft))',
				primary: 'rgba(var(--primary))',
				icon: 'rgba(var(--icon))',
				gray: {
					100: '#F5F5F5',
					200: '#E5E5E5',
					300: '#D4D4D4',
					400: '#A3A3A3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717'
				}
			}
		}
	},
	mode: 'jit',
	plugins: []
}
export default config
