module.exports = {
	content: [
		'./index.html',
		'src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'emerald', 'cmyk', 'dark', 'night', 'synthwave', 'retro', 'cyberpunk']
	}
}
