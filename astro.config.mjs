// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const BASE = process.env.PAGES_BASE || '/Market_Architects/';

// https://astro.build/config
export default defineConfig({
  site: 'https://techmore.github.io',
  base: BASE,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
