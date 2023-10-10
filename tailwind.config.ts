import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
		colors: {
			bg1: "#f8f9fb",
			bg2: "#fff",
			theme_black: "#0d0c1e",
			theme_blue: "#4c73ff",
		},
		screens: {
			xs: { max: "480px" },
			sm: { max: "768px" },
			tablet: { min: '481px', max: "768px" },
			md: "796px",
		},
	},
	plugins: [],
};
export default config;

