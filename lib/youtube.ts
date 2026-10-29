/**
 * The firm's latest YouTube uploads, read from the channel's public RSS feed.
 *
 * Feeds /updates. The feed is the channel's own record — no API key, no quota —
 * and it only carries the newest ~15 uploads, which is exactly the window an
 * "updates" page should show.
 *
 * Not everything on the channel belongs on the site. Discount offers, meet-up
 * announcements and "visa approved" celebration posts are dropped: the first two
 * date in days (as do "apply early" seasonal pushes), and the third is outcome marketing the rest of the site
 * deliberately avoids (see /no-guarantee-policy). What stays is the explainers
 * and rule-change videos people search for.
 */

export const CHANNEL_ID = 'UC7yaY91cb22ZPnBPJyGBNBg';
const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

/** Promotions, events and approval posts — not updates. */
const NOT_AN_UPDATE = /\bOFF\b|discount|meet-?up|we[’']?re coming|approv|celebrate|apply early/i;

export type Video = {
  id: string;
  title: string;
  /** First line of the video's own description, emoji stripped. */
  summary: string;
  url: string;
  published: string;
  topic: string;
  /** The site guide this video belongs with, if there is one. */
  guide?: { href: string; label: string };
};

/** Most specific first — the first match wins. */
const TOPICS: [RegExp, string, Video['guide']?][] = [
  [/c-?11/i, 'Canada', { href: '/work-permit-canada', label: 'C11 work permit guide' }],
  [/\bdraws?\b|\binvites?\b|invitations to apply/i, 'Canada', { href: '/express-entry/draws', label: 'Express Entry draws tracker' }],
  [/express entry|\bcrs\b/i, 'Canada', { href: '/express-entry', label: 'Express Entry guide' }],
  [/ontario/i, 'Canada', { href: '/pnp/ontario', label: 'Ontario PNP guide' }],
  [/refus|judicial review/i, 'Canada', { href: '/canada-visa-refused', label: 'visa refusal guide' }],
  [/\bniw\b|green card|\beb-?\d/i, 'USA', { href: '/usa', label: 'USA guide' }],
  // Case-sensitive on purpose: "US"/"UK" as words, not the "us" in "contact us".
  [/\bUSA?\b|\bU\.S\.|United States|America/, 'USA', { href: '/usa', label: 'USA guide' }],
  [/\bUK\b|United Kingdom|Britain/, 'UK', { href: '/uk', label: 'UK guide' }],
  [/europe|schengen|italy|spain|france|germany|portugal|austria/i, 'Europe', { href: '/europe', label: 'Europe guide' }],
  [/canada/i, 'Canada', { href: '/canada-immigration-from-pakistan', label: 'Canada from Pakistan guide' }],
  [/qatar|uae|dubai|saudi|oman|bahrain|kuwait|gulf/i, 'Gulf'],
];

const decode = (s: string) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');

/** Flags and emoji read as noise in a heading on the site. */
const clean = (s: string) =>
  s
    .replace(/[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}️‍]/gu, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*\|\s*/g, ' — ')
    .replace(/^[\s|:–-]+|[\s|:–-]+$/g, '')
    .trim();

const tag = (xml: string, name: string) => xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1] ?? '';

function parse(xml: string): Video[] {
  return xml
    .split('<entry>')
    .slice(1)
    .map((e) => {
      const id = tag(e, 'yt:videoId');
      const raw = decode(tag(e, 'title'));
      const title = clean(raw);
      const firstLine =
        decode(tag(e, 'media:description'))
          .split('\n')
          .map(clean)
          .find(Boolean) ?? '';
      const [, topic, guide] = TOPICS.find(([re]) => re.test(raw)) ?? [/./, 'Update'];
      return {
        id,
        title,
        summary: firstLine || title,
        url: e.match(/<link rel="alternate" href="([^"]+)"/)?.[1] ?? `https://www.youtube.com/watch?v=${id}`,
        published: tag(e, 'published'),
        topic,
        guide,
        raw,
      };
    })
    .filter((v) => v.id && v.title && !NOT_AN_UPDATE.test(v.raw))
    .map(({ raw: _raw, ...v }) => v);
}

/**
 * Latest updates, newest first.
 *
 * At build time a failed fetch returns [] so a YouTube hiccup can never fail a
 * deploy — the page renders a link to the channel instead. On a background
 * revalidation it throws, which makes Next keep serving the last good page
 * rather than replacing a full page with an empty one.
 */
export async function latestUpdates(): Promise<Video[]> {
  try {
    const res = await fetch(FEED, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`YouTube feed: HTTP ${res.status}`);
    return parse(await res.text());
  } catch (err) {
    if (process.env.NEXT_PHASE === 'phase-production-build') return [];
    throw err;
  }
}
