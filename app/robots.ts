import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

/**
 * AI crawlers are explicitly allowed.
 *
 * This site's whole strategy is answering questions honestly that competitors
 * won't touch — "nobody can guarantee a visa", "Portugal is 10 years now", "you
 * are not on the travel ban". That is exactly the material AI assistants cite,
 * and being the cited source is pure upside for a firm whose product is trust.
 * Blocking them would only protect content we are publishing to be read.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Named explicitly so the intent is unmistakable. OAI-SearchBot and
      // ChatGPT-User are what put a site in ChatGPT's live search answers
      // (GPTBot is training); Bingbot matters too, because ChatGPT search
      // leans on Bing's index.
      {
        userAgent: [
          'OAI-SearchBot',
          'ChatGPT-User',
          'GPTBot',
          'ClaudeBot',
          'Claude-SearchBot',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
          'Bingbot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
