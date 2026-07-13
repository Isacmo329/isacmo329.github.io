// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: 本番ドメイン確定後に差し替える（sitemap・OGP・canonical に使われる）
  site: 'https://machino-ai.example.com',
  integrations: [sitemap()],
});
