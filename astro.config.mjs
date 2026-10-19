// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(phase 6): confirm the custom domain. Canonical URLs, Open Graph
// image URLs, the sitemap, and robots.txt are all derived from `site`.
export default defineConfig({
  site: 'https://sabirsaluja.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
