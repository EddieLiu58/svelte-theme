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
			},
			gridTemplateColumns: {
				fill: 'repeat(auto-fill, minmax(250px, 1fr))'
			}
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		}
	},
	plugins: []
};
