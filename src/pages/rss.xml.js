import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '../data/site-config.ts';
import { sortItemsBypublishDateDesc } from '../utils/data-utils.ts';

export async function GET(context) {
    const posts = (await getCollection('blog')).sort(sortItemsBypublishDateDesc);
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: posts.map((item) => ({
            title: item.data.title,
            description: item.data.excerpt,
            link: `/blog/${item.slug}/`,
            pubpublishDate: item.data.publishDate.setUTCHours(0)
        }))
    });
}
