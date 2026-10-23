import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section } from '@/components/ui';
import { sortedPosts } from '@/lib/blog';
import { site } from '@/lib/site';

/**
 * /blog — the dated layer of the site. See lib/blog.ts for what belongs in a
 * post and what belongs in a guide.
 */
export const metadata: Metadata = {
  title: 'Immigration Blog: Canada, USA & UK Updates',
  description:
    'Dated, sourced posts on what just changed in Canadian, US, UK and European immigration — and what it means if you are applying from Pakistan or the Gulf.',
  alternates: { canonical: '/blog', types: { 'application/rss+xml': '/blog/rss.xml' } },
};

const dateFmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const longDate = (iso: string) => dateFmt.format(new Date(`${iso}T00:00:00Z`));

export default function BlogIndexPage() {
  const posts = sortedPosts();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${site.url}/blog#blog`,
    name: `${site.shortName} blog`,
    url: `${site.url}/blog`,
    publisher: { '@id': `${site.url}/#organization` },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${site.url}/blog/${p.slug}`,
      datePublished: p.published,
      dateModified: p.updated ?? p.published,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Blog"
        title={
          <>
            What just changed, <span className="text-gold-300">and what it means for you.</span>
          </>
        }
        subtitle="Dated posts on new rules, draw results and policy changes — each written from the official source and linked to the guide that covers the route in full."
      >
        <Link href="/updates" className="btn btn-ghost">
          Watch our video updates
        </Link>
      </PageHero>

      <Section tone="paper">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="card group flex h-full flex-col p-7 transition-transform hover:-translate-y-0.5"
              >
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  <span className="rounded-full bg-gold-500/15 px-2.5 py-1 text-gold-600">{p.topic}</span>
                  <time dateTime={p.published}>{longDate(p.published)}</time>
                </p>
                <h2 className="mt-4 font-serif text-2xl leading-snug text-balance">{p.title}</h2>
                <p className="mt-3 text-ink-600 text-pretty">{p.description}</p>
                <span className="mt-auto pt-5 font-semibold text-accent-500">Read the post →</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-ink-500">
          Follow new posts by{' '}
          <a href="/blog/rss.xml" className="font-semibold text-accent-500 link-underline">
            RSS
          </a>
          .
        </p>
      </Section>
    </>
  );
}
