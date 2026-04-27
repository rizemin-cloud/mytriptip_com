// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mytriptip.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        // Exclude hub pages that have noindex (no published articles yet).
        // Remove a hub from this list when its first article is published.
        const noindexPages = [
          'https://mytriptip.com/jeju/',
        ];
        return !noindexPages.includes(page);
      },
    }),
  ],
});
