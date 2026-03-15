import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		prerender: {
			handleHttpError: ({ path, message }) => {
				if (path === '/books') {
					console.log('Ignoring 404 for /books');
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
