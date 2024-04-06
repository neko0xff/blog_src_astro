import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { proseRemarkPlugin } from './prose-remark-plugin.mjs';
import remarkMath from 'remark-math';
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkgraphviz from 'remark-graphviz';
import rehypeKatex from 'rehype-katex';
//import rehypeMermaid from 'rehype-mermaid';
import rehypeStringify from "rehype-stringify";
import redotGraphviz from "redot-parse";
import redotStringify from "redot-stringify";
import robotsTxt from 'astro-robots-txt';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://neko0xff-github-io.vercel.app',
  integrations: [
    mdx(),
    sitemap(),
    vue(),
    tailwind({
      applyBaseStyles: false
    }),
    robotsTxt({
      sitemap: [
        'https://neko0xff.github.io/sitemap-index.xml',
        'https://neko0xff-github-io.vercel.app/sitemap-index.xml'
      ]
    }),
  ],
  markdown: {
    redotPlugins: [
      redotStringify,
      redotGraphviz
    ],
    remarkPlugins: [
      proseRemarkPlugin,
      remarkMath,
      remarkParse,
      remarkRehype,
      remarkgraphviz
    ],
    rehypePlugins: [
      rehypeKatex,
      //rehypeMermaid,
      rehypeStringify
    ],
    syntaxHighlight: false,
  },
  output: 'static'

});