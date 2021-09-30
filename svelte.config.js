import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svelte.md', '.md', '.svx'],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    mdsvex({
      extensions: ['.svelte.md', '.md', '.svx'],
      layout: {
        _: './src/routes/blog/layout.svelte'
      }
    }),
    preprocess({
      postcss: true,
      typescript: true
    })
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: netlify()
  }
};

export default config;
