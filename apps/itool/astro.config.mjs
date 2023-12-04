import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
// import node from '@astrojs/node'
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
	output: 'server',
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		svelte()
	],
	// adapter: node({
	// 	mode: 'standalone'
	// })
	adapter: cloudflare({
		mode: 'directory'
	})
})
