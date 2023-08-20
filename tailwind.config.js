/** @type {import('tailwindcss').Config} */
export default {
	important: '#app',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				footer: '#2d3748',
				search: '#f7fafc'
			}
		}
	},
	plugins: []
};
