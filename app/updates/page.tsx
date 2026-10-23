import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, CTASection } from '@/components/ui';
import { LiteYouTube } from '@/components/LiteYouTube';
import { SocialIcon } from '@/components/SocialIcon';
import { followersHeadline } from '@/components/SocialProof';
import { latestUpdates, type Video } from '@/lib/youtube';
import { site } from '@/lib/site';
import { sortedPosts } from '@/lib/blog';

/**
 * /updates — the channel's latest explainers and rule-change videos, on the site.
 *
 * Search engines and AI tools rarely credit a YouTube following to a website;
 * this page is the bridge. Each video is marked up as a VideoObject, dated, and
 * paired with the guide on this site that covers the same ground — so the
 * video brings the visit and the guide keeps it.
 *
 * Rebuilt from the feed at most hourly (ISR). Video titles carry the numbers of
 * their day — a draw cut-off, a quota — and are shown with their date for that
 * reason; the guides they link to stay evergreen and point to IRCC.
 */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Immigration Updates & Videos: Canada, USA, UK',
  description:
    'The latest Canada, USA, UK and Europe immigration updates from our YouTube channel — draw results, rule changes and explainers, each paired with our full guide.',
  alternates: { canonical: '/updates' },
};

const youtube = site.social.find((s) => s.icon === 'youtube')?.href ?? 'https://www.youtube.com';

/** The subjects the channel returns to, each with the guide that covers it in full. */
const TOPIC_GUIDES: [string, string, string][] = [
  ['/express-entry/draws', 'Express Entry draws', 'Every round and its CRS cut-off, read automatically from IRCC’s own data — and what a result does and doesn’t tell you.'],
  ['/pnp', 'Provincial nomination', 'Each province’s streams — Ontario, Alberta, BC and the rest — and when a nomination beats waiting for a draw.'],
  ['/work-permit-canada', 'The C11 work permit', 'Running your own business in Canada without a job offer or an LMIA, under IRCC’s own rules.'],
  ['/canada-visa-refused', 'Refusals and judicial review', 'Reading a refusal, getting the officer’s notes, and the routes forward — including Federal Court.'],
  ['/usa', 'The United States', 'Visitor visas, investor routes, and green-card routes such as the EB-2 National Interest Waiver.'],
  ['/europe', 'Europe and Schengen', 'Schengen visit visas, and an honest read on European residence routes — including the ones that have closed.'],
];

const dateFmt =new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Karachi' });

function VideoMeta({ v }: { v: Video }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
      <span className="rounded-full bg-gold-500/15 px-2.5 py-1 text-gold-600">{v.topic}</span>
      <time dateTime={v.published}>{dateFmt.format(new Date(v.published))}</time>
    </p>
  );
}

function GuideLink({ v }: { v: Video }) {
  return v.guide ? (
    <Link href={v.guide.href} className="font-semibold text-accent-500 link-underline">
      Read our {v.guide.label} →
    </Link>
  ) : null;
}

export default async function UpdatesPage() {
  const videos = await latestUpdates();
  const [latest, ...rest] = videos;

  const jsonLd = videos.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `${site.shortName} — latest immigration updates`,
        itemListElement: videos.map((v, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'VideoObject',
            name: v.title,
            description: v.summary,
            thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
            uploadDate: v.published,
            embedUrl: `https://www.youtube.com/embed/${v.id}`,
            url: v.url,
            publisher: { '@id': `${site.url}/#organization` },
          },
        })),
      }
    : null;

  return (
    <>
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ) : null}

      <PageHero
        eyebrow="Updates · from our YouTube channel"
        title={
          <>
            What’s changed, <span className="text-gold-300">explained.</span>
          </>
        }
        subtitle={`Draw results, new rules and plain-language explainers — the videos ${followersHeadline()} people follow us for, each paired with the guide on this site that covers it in full.`}
      >
        <a href={youtube} rel="me noopener" target="_blank" className="btn btn-gold">
          <SocialIcon name="youtube" className="h-5 w-5" />
          Subscribe on YouTube
        </a>
        <Link href="/book-consultation" className="btn btn-ghost">
          Ask about your case
        </Link>
      </PageHero>

      {latest ? (
        <>
          <Section tone="paper">
            <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <LiteYouTube id={latest.id} title={latest.title} />
              </div>
              <div className="lg:col-span-2">
                <p className="eyebrow">Latest</p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-balance">{latest.title}</h2>
                <div className="mt-4">
                  <VideoMeta v={latest} />
                </div>
                <p className="mt-5 text-ink-600 text-pretty">{latest.summary}</p>
                <div className="mt-6">
                  <GuideLink v={latest} />
                </div>
              </div>
            </div>
          </Section>

          {rest.length ? (
            <Section tone="alt">
              <SectionHeading
                eyebrow="Recent"
                title="More updates"
                subtitle="Each video is dated: rules move, and a number that was right on the day can be wrong a month later. The guides they link to point to IRCC’s current figures."
              />
              <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((v) => (
                  <li key={v.id} className="flex flex-col">
                    <LiteYouTube id={v.id} title={v.title} />
                    <div className="mt-5">
                      <VideoMeta v={v} />
                    </div>
                    <h3 className="mt-3 font-serif text-xl leading-snug text-balance">{v.title}</h3>
                    <div className="mt-auto pt-4 text-sm">
                      <GuideLink v={v} />
                    </div>
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}
        </>
      ) : (
        <Section tone="paper">
          <Callout title="The latest videos are on our channel">
            We couldn’t load the feed just now.{' '}
            <a href={youtube} rel="me noopener" target="_blank" className="font-semibold text-accent-500 link-underline">
              Watch them on YouTube
            </a>
            , or start with{' '}
            <Link href="/canada-immigration-from-pakistan" className="font-semibold text-accent-500 link-underline">
              how to immigrate to Canada from Pakistan
            </Link>
            .
          </Callout>
        </Section>
      )}

      {/* The written side of the same updates. */}
      <Section tone="paper">
        <SectionHeading eyebrow="In writing" title="From the blog" subtitle="Dated posts on the same changes, written from the official sources." />
        <ul className="mt-8 space-y-3">
          {sortedPosts().slice(0, 5).map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="font-serif text-xl link-underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* What the channel covers — and where each topic lives in full on the site. */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What we cover"
          title="The topics behind the videos"
          subtitle="A video is a quick update. The guide is the full picture — who a route suits, what it asks of you, and the official IRCC page for the current numbers."
        />
        <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOPIC_GUIDES.map(([href, title, body]) => (
            <li key={href} className="border-l-2 border-gold-500/60 pl-5">
              <Link href={href} className="font-serif text-xl link-underline">
                {title}
              </Link>
              <p className="mt-1.5 text-ink-600 text-pretty">{body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        title="Seen a video that fits your case?"
        subtitle={site.consult.promise}
        page="updates"
        waMessage="Hi, I watched one of your videos and would like to ask about my case."
      />
    </>
  );
}
