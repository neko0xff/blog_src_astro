import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { proseRemarkPlugin } from './prose-remark-plugin.mjs';
import remarkMath from 'remark-math';
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkgraphviz from 'remark-graphviz';
import remarkMermaid from 'astro-diagram/remark-mermaid';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from "rehype-stringify";
import rehypeMermaid from "rehype-mermaid";
import rehypeGraphviz from "rehype-graphviz";
import redotStringify from "redot-stringify";
import rehypeRaw from 'rehype-raw';
import robotsTxt from 'astro-robots-txt';
import vue from "@astrojs/vue";
import icon from "astro-icon";
import { mermaid } from "./src/plugins/mermaid";

// https://astro.build/config
export default defineConfig({
  site: 'https://neko0xff-github-io.vercel.app',
  integrations: [
    mdx(),
    sitemap(),
    vue(),
    tailwind({
      applyBaseStyles: true
    }),
    robotsTxt({
      sitemap: [
        'https://neko0xff.github.io/sitemap-index.xml',
        'https://neko0xff-github-io.vercel.app/sitemap-index.xml'
      ]
    }),
    icon()
  ],
  markdown: {
    redotPlugins: [
      redotStringify,
    ],
    remarkPlugins: [
      proseRemarkPlugin,
      remarkMath,
      remarkParse,
      remarkRehype,
      remarkgraphviz,
      remarkMermaid,
      mermaid
    ],
    rehypePlugins: [
      rehypeRaw,
      rehypeKatex,
      //rehypeMermaid,
      rehypeStringify,
      rehypeGraphviz
    ],
    syntaxHighlight: false,
  },
  output: 'static'

});