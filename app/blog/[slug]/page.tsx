import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, Section, Callout, CTASection } from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';
import { POSTS, postBySlug } from '@/lib/blog';
import { site } from '@/lib/site';
import ExpressEntry2026 from '@/content/blog/express-entry-2026-so-far';
import OntarioHigherEarners from '@/content/blog/ontario-higher-earners-2026';
import Eb2NiwPakistan from '@/content/blog/eb2-niw-pakistan';
import MofaOnlineAttestation from '@/content/blog/mofa-online-attestation';
import AustriaRedWhiteRedCard from '@/content/blog/austria-red-white-red-card';

/** One line per post. A slug in lib/blog.ts without a body here is a build error, not a blank page. */
const BODIES: Record<string, ComponentType> = {
  'express-entry-2026-so-far': ExpressEntry2026,
  'ontario-higher-earners-2026': OntarioHigherEarners,
  'eb2-niw-pakistan': Eb2NiwPakistan,
  'mofa-online-attestation': MofaOnlineAttestation,
  'austria-red-white-red-card': AustriaRedWhiteRedCard,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => {
    if (!BODIES[p.slug]) throw new Error(`Blog post "${p.slug}" has no body in app/blog/[slug]/page.tsx`);
    return { slug: p.slug };
  });
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = postBySlug((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}`, types: { 'application/rss+xml': '/blog/rss.xml' } },
    openGraph: {
      type: 'article',
      title: p.title,
      description: p.description,
      publishedTime: p.published,
      modifiedTime: p.updated ?? p.published,
      // Setting openGraph here replaces the site-wide object, which drops the
      // generated share image — so name it explicitly.
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
  };
}

const dateFmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const longDate = (iso: string) => dateFmt.format(new Date(`${iso}T00:00:00Z`));

export default async function BlogPostPage({ params }: Props) {
  const p = postBySlug((await params).slug);
  const Body = p && BODIES[p.slug];
  if (!p || !Body) notFound();

  const url = `${site.url}/blog/${p.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    datePublished: p.published,
    dateModified: p.updated ?? p.published,
    url,
    mainEntityOfPage: url,
    inLanguage: 'en',
    image: `${site.url}/opengraph-image`,
    author: { '@id': `${site.url}/#organization` },
    publisher: { '@id': `${site.url}/#organization` },
    isPartOf: { '@type': 'Blog', '@id': `${site.url}/blog#blog`, name: `${site.shortName} blog` },
    citation: p.sources.map((s) => s.href),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero eyebrow={`Blog · ${p.topic}`} title={p.title} subtitle={p.description}>
        <p className="text-sm text-ink-300">
          Published <time dateTime={p.published}>{longDate(p.published)}</time>
          {p.updated ? (
            <>
              {' '}· Facts re-checked <time dateTime={p.updated}>{longDate(p.updated)}</time>
            </>
          ) : null}
        </p>
      </PageHero>

      <Section tone="paper">
        <article className="prose-lux mx-auto max-w-3xl">
          <Body />
        </article>

        <div className="mx-auto mt-14 max-w-3xl space-y-10">
          <Callout title="The full picture">
            This post is dated: it describes things as they stood on {longDate(p.updated ?? p.published)}.
            For how the route works — who it suits, what it asks of you, and the official pages for
            today’s rules — read our{' '}
            <Link href={p.guide.href} className="font-semibold text-accent-500 link-underline">
              {p.guide.label}
            </Link>
            .
          </Callout>

          <div>
            <p className="eyebrow">Sources</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} rel="noopener noreferrer" target="_blank" className="text-ink-600 underline underline-offset-2 hover:text-ink-900">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ReviewedBy updated={longDate(p.updated ?? p.published)} />

          <p className="text-sm">
            <Link href="/blog" className="font-semibold text-accent-500 link-underline">
              ← All posts
            </Link>
          </p>
        </div>
      </Section>

      <CTASection
        title="Does this change anything for you?"
        subtitle={site.consult.promise}
        page={`blog-${p.slug}`}
        waMessage={`Hi, I read your post “${p.short}” and would like to ask about my case.`}
      />
    </>
  );
}
