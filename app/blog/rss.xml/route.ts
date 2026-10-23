import { sortedPosts } from '@/lib/blog';
import { site } from '@/lib/site';

/**
 * /blog/rss.xml — the posts as an RSS 2.0 feed, for feed readers and for the
 * search and AI crawlers that use feeds to find new pages quickly. Static:
 * rebuilt on each deploy, which is when posts are published.
 */
export const dynamic = 'force-static';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const posts = sortedPosts();
  const items = posts
    .map((p) => {
      const url = `${site.url}/blog/${p.slug}`;
      return [
        '    <item>',
        `      <title>${esc(p.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(`${p.published}T09:00:00Z`).toUTCString()}</pubDate>`,
        `      <category>${esc(p.topic)}</category>`,
        `      <description>${esc(p.description)}</description>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${esc(site.shortName)} blog</title>`,
    `    <link>${site.url}/blog</link>`,
    `    <atom:link href="${site.url}/blog/rss.xml" rel="self" type="application/rss+xml" />`,
    '    <description>Dated, sourced posts on what just changed in Canadian, US, UK and European immigration.</description>',
    '    <language>en</language>',
    posts[0] ? `    <lastBuildDate>${new Date(`${posts[0].updated ?? posts[0].published}T09:00:00Z`).toUTCString()}</lastBuildDate>` : '',
    items,
    '  </channel>',
    '</rss>',
  ]
    .filter(Boolean)
    .join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
