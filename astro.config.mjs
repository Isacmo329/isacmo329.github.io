// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: 独自ドメイン確定後に差し替える（sitemap・OGP・canonical に使われる）
  site: 'https://mitsukenn.github.io',
  integrations: [sitemap()],
});
