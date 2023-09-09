import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from "vite-plugin-mkcert"
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(),mkcert()],
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
