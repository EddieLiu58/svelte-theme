import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	output: 'server',
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		svelte(),
	],
	adapter: cloudflare({
		mode: "directory"
	})
})
