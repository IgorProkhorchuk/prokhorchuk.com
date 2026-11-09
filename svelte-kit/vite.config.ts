import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit({
		preprocess: vitePreprocess(),
		adapter: adapter({ fallback: '404.html' }),
		prerender: {
			handleHttpError: ({ path, message }) => {
				if (path === '/books') {
					console.log('Ignoring 404 for /books');
					return;
				}
				throw new Error(message);
			}
		}
	})]
});
