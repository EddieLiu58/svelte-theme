import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		svelte()
	],
	adapter: node({
		mode: 'standalone'
	})
})
