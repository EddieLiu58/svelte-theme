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
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		deps: {
			inline: [`@sveltejs/kit`],
		},
	}
});
