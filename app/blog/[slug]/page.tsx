import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, Section, Callout, CTASection } from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';
import { POSTS, postBySlug, schemaDate } from '@/lib/blog';
import { site } from '@/lib/site';
import ExpressEntry2026 from '@/content/blog/express-entry-2026-so-far';
import OntarioHigherEarners from '@/content/blog/ontario-higher-earners-2026';
import Eb2NiwPakistan from '@/content/blog/eb2-niw-pakistan';
import MofaOnlineAttestation from '@/content/blog/mofa-online-attestation';
import AustriaRedWhiteRedCard from '@/content/blog/austria-red-white-red-card';
import StartUpDenmarkEligibility from '@/content/blog/start-up-denmark-eligibility';
import StartUpDenmarkPitchDeckVideo from '@/content/blog/start-up-denmark-pitch-deck-video';
import StartUpDenmarkExpertPanelScoring from '@/content/blog/start-up-denmark-expert-panel-scoring';
import StartUpDenmarkResidencePermitSiri from '@/content/blog/start-up-denmark-residence-permit-siri';
import StartUpDenmarkExtension from '@/content/blog/start-up-denmark-extension';
import ExpressEntryNovember2026CrsChange from '@/content/blog/express-entry-november-2026-crs-change';
import IeltsPteCoreCelpipPakistan from '@/content/blog/ielts-pte-core-celpip-pakistan';
import CanadaFinesUnauthorisedImmigrationAgents from '@/content/blog/canada-fines-unauthorised-immigration-agents';
import UkStudentVisaFunds30November2026 from '@/content/blog/uk-student-visa-funds-30-november-2026';
import UkGraduateVisa18Months2027 from '@/content/blog/uk-graduate-visa-18-months-2027';
import UsVisaRulesPakistan2026 from '@/content/blog/us-visa-rules-pakistan-2026';
import SchengenVisaRefusalsPakistan2025 from '@/content/blog/schengen-visa-refusals-pakistan-2025';
import DenmarkStudentRulesOctober2026 from '@/content/blog/denmark-student-rules-october-2026';
import DenmarkJobSeekerVisaGreenCard from '@/content/blog/denmark-job-seeker-visa-green-card';
import NovaScotiaNomineeProgram2026 from '@/content/blog/nova-scotia-nominee-program-2026';
import LmiaExemptWorkPermitCodes from '@/content/blog/lmia-exempt-work-permit-codes';
import FakeCanadaJobOffers2026 from '@/content/blog/fake-canada-job-offers-2026';
import ParentsToCanadaPgpPaused2026 from '@/content/blog/parents-to-canada-pgp-paused-2026';
import ItalyClickDays2027Pakistan from '@/content/blog/italy-click-days-2027-pakistan';

/** One line per post. A slug in lib/blog.ts without a body here is a build error, not a blank page. */
const BODIES: Record<string, ComponentType> = {
  'italy-click-days-2027-pakistan': ItalyClickDays2027Pakistan,
  'parents-to-canada-pgp-paused-2026': ParentsToCanadaPgpPaused2026,
  'fake-canada-job-offers-2026': FakeCanadaJobOffers2026,
  'lmia-exempt-work-permit-codes': LmiaExemptWorkPermitCodes,
  'nova-scotia-nominee-program-2026': NovaScotiaNomineeProgram2026,
  'denmark-job-seeker-visa-green-card': DenmarkJobSeekerVisaGreenCard,
  'denmark-student-rules-october-2026': DenmarkStudentRulesOctober2026,
  'schengen-visa-refusals-pakistan-2025': SchengenVisaRefusalsPakistan2025,
  'us-visa-rules-pakistan-2026': UsVisaRulesPakistan2026,
  'uk-graduate-visa-18-months-2027': UkGraduateVisa18Months2027,
  'uk-student-visa-funds-30-november-2026': UkStudentVisaFunds30November2026,
  'canada-fines-unauthorised-immigration-agents': CanadaFinesUnauthorisedImmigrationAgents,
  'ielts-pte-core-celpip-pakistan': IeltsPteCoreCelpipPakistan,
  'express-entry-november-2026-crs-change': ExpressEntryNovember2026CrsChange,
  'express-entry-2026-so-far': ExpressEntry2026,
  'ontario-higher-earners-2026': OntarioHigherEarners,
  'eb2-niw-pakistan': Eb2NiwPakistan,
  'mofa-online-attestation': MofaOnlineAttestation,
  'austria-red-white-red-card': AustriaRedWhiteRedCard,
  'start-up-denmark-eligibility': StartUpDenmarkEligibility,
  'start-up-denmark-pitch-deck-video': StartUpDenmarkPitchDeckVideo,
  'start-up-denmark-expert-panel-scoring': StartUpDenmarkExpertPanelScoring,
  'start-up-denmark-residence-permit-siri': StartUpDenmarkResidencePermitSiri,
  'start-up-denmark-extension': StartUpDenmarkExtension,
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
    datePublished: schemaDate(p.published),
    dateModified: schemaDate(p.updated ?? p.published),
    url,
    mainEntityOfPage: url,
    inLanguage: 'en',
    image: `${site.url}/opengraph-image`,
    // Name and url repeated here because Google asks for both on the author,
    // and the organisation itself sits in a separate JSON-LD block.
    author: { '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.name, url: site.url },
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
