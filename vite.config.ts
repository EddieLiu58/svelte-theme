import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from "vite-plugin-mkcert"
import { defineConfig } from 'vitest/config';
import fs from 'fs';

export default defineConfig({
	plugins: [sveltekit(),mkcert()],
	// server: {
	// 		https: {
	// 			key: fs.readFileSync(`./cert/key.pem`),
	// 			cert: fs.readFileSync(`./cert/cert.pem`)
	// 	},
	//   proxy: {
	// 		'/api': {
	// 			target: 'https://api.inovels.click',
	// 			rewrite: (path) => path.replace(/^\/api/, ''),
	// 			changeOrigin: true
	// 	},
	// 	'/prodApi': {
	// 		target: 'https://api.inovels.click',
	// 		rewrite: (path) => path.replace(/^\/api/, ''),
	// 		changeOrigin: true
	// }
	//   }
	// },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
