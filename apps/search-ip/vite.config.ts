import { sveltekit } from '@sveltejs/kit';
import { defineConfig } from 'vitest/config';
const mode = process.env.APP_ENV // This now exists.

export default defineConfig({
	plugins: [sveltekit()],
	server: {
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		deps: {
			inline: [`@sveltejs/kit`],
		},
	}
});
