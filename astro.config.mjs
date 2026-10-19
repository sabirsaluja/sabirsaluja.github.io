// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hosted on GitHub Pages as a user site (repo: sabirsaluja.github.io). Canonical
// URLs, Open Graph image URLs, the sitemap, and robots.txt all derive from `site`.
// If a custom domain is added later, change this and add public/CNAME.
export default defineConfig({
  site: 'https://sabirsaluja.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
