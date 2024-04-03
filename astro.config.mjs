import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { proseRemarkPlugin } from './prose-remark-plugin.mjs';
import { SITE_URL } from './src/utils/common-utils';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap(), vue(), tailwind({
    applyBaseStyles: false
  })],
  markdown: {
    remarkPlugins: [proseRemarkPlugin, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  routes: [
    {
      path: "/",
      component: () => import("./pages/index.astro"),
    },
    {
      path: "/about",
      component: () => import("./pages/about.astro"),
    },
  ],

});