import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
const mode = process.env.APP_ENV // This now exists.

export default defineConfig({
	mode: mode, // This will set the mode, to avoid confusions.
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': {
				target: 'https://api.inovels.click',
				rewrite: (path) => path.replace(/^\/api/, ''),
				changeOrigin: true
		},
		'/svelte-theme/api': {
			target: 'https://api.inovels.click',
			rewrite: (path) => path.replace(/^\/api/, ''),
			changeOrigin: true
		},
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
