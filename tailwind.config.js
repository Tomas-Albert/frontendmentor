/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {},
		colors: {
			darkGrey: "hsl(234, 29%, 20%)",
			charcoalGrey: "hsl(235, 18%, 26%)",
			grey: "hsl(231, 7%, 60%)",
			white: "hsl(0, 0%, 100%)",
			tomato: "hsl(4, 100%, 67%)",
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
		},
	},
	plugins: [],
};
