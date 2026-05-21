// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://indraranuh.dev',
  integrations: [
    alpinejs({
      entrypoint: '/src/alpine/setup',
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
