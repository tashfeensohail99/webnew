import { NextResponse, type NextRequest } from 'next/server';

/**
 * Counts AI visits (GEO plan G06, approved by the site owner on 17 Nov 2026).
 *
 * The site has no analytics, and Railway keeps HTTP logs only for the current
 * deployment, so there was no record of whether AI tools read or send visitors to
 * the site. This writes one JSON line to the server log when a page is requested by
 * a named AI or search crawler, or by a visitor who arrived from an AI tool.
 *
 * It records the page path, the tool's name and the kind of visit, nothing else:
 * no IP address, no user-agent string, no query string, no cookie. Nothing about the
 * visitor is stored, so the privacy page's promise still holds. It never changes
 * the response. scripts/geo-visits.mjs reads these lines out of the logs daily.
 *
 * Google's AI Overviews and AI Mode cannot be told apart from ordinary Google
 * search here; Search Console counts them inside its Web figures.
 */

const CRAWLERS: [string, RegExp][] = [
  ['OAI-SearchBot', /OAI-SearchBot/i],
  ['ChatGPT-User', /ChatGPT-User/i],
  ['GPTBot', /GPTBot/i],
  ['Claude-SearchBot', /Claude-SearchBot/i],
  ['Claude-User', /Claude-User/i],
  ['ClaudeBot', /ClaudeBot/i],
  ['Perplexity-User', /Perplexity-User/i],
  ['PerplexityBot', /PerplexityBot/i],
  ['Google-CloudVertexBot', /Google-CloudVertexBot/i],
  ['DuckAssistBot', /DuckAssistBot/i],
  ['MistralAI-User', /MistralAI-User/i],
  ['meta-externalagent', /meta-externalagent/i],
  ['Applebot', /Applebot/i],
  ['Amazonbot', /Amazonbot/i],
  ['Bytespider', /Bytespider/i],
  ['CCBot', /CCBot/i],
  ['bingbot', /bingbot/i],
  ['Googlebot', /Googlebot/i],
];

/** Hosts of AI tools that send visitors, matched against the Referer's host. */
const AI_REFERRERS: [string, RegExp][] = [
  ['ChatGPT', /(^|\.)chatgpt\.com$|(^|\.)chat\.openai\.com$/i],
  ['Perplexity', /(^|\.)perplexity\.ai$/i],
  ['Gemini', /^gemini\.google\.com$/i],
  // bing.com is left out: its visitors are mostly ordinary Bing search.
  ['Copilot', /^copilot\.microsoft\.com$/i],
  ['Claude', /(^|\.)claude\.ai$/i],
  ['DeepSeek', /(^|\.)deepseek\.com$/i],
  ['Grok', /(^|\.)grok\.com$/i],
  ['Meta AI', /(^|\.)meta\.ai$/i],
  ['You.com', /(^|\.)you\.com$/i],
];

/** ChatGPT and some other tools tag outbound links, so a visit can be counted even without a Referer. */
const AI_UTM: [string, RegExp][] = [
  ['ChatGPT', /^(chatgpt|openai)/i],
  ['Perplexity', /^perplexity/i],
  ['Gemini', /^gemini/i],
  ['Copilot', /^copilot/i],
  ['Claude', /^claude/i],
];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const ua = req.headers.get('user-agent') ?? '';
  const crawler = CRAWLERS.find(([, re]) => re.test(ua));
  if (crawler) {
    console.log(JSON.stringify({ geo: 'ai-visit', kind: 'crawler', tool: crawler[0], path }));
    return NextResponse.next();
  }

  let host = '';
  try {
    const ref = req.headers.get('referer');
    if (ref) host = new URL(ref).hostname;
  } catch {
    // A malformed Referer is simply not counted.
  }
  const fromRef = host ? AI_REFERRERS.find(([, re]) => re.test(host)) : undefined;
  const utm = req.nextUrl.searchParams.get('utm_source') ?? '';
  const tool = fromRef?.[0] ?? (utm ? AI_UTM.find(([, re]) => re.test(utm))?.[0] : undefined);
  if (tool) {
    console.log(JSON.stringify({ geo: 'ai-visit', kind: 'referral', tool, path }));
  }
  return NextResponse.next();
}

export const config = {
  // Pages and the text files crawlers read (robots.txt, llms.txt, sitemap.xml);
  // not Next's own assets, images or fonts.
  matcher: ['/((?!_next/|.*\\.(?:png|jpe?g|webp|avif|gif|svg|ico|js|css|map|woff2?|ttf|json|webmanifest)$).*)'],
};
