import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
const mode = process.env.APP_ENV // This now exists.

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
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
