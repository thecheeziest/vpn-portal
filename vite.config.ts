import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// @ts-ignore
export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': {
				target: 'http://10.10.0.96:8080/api/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			}
		},
	},
});