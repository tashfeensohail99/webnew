import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  Callout,
  FAQ,
  CTASection,
  Icon,
} from '@/components/ui';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { ReviewedBy } from '@/components/ReviewedBy';
import { SERVICE } from '@/lib/site';

/**
 * Europe is the page where honesty is worth the most, because this is where
 * Pakistani applicants are most heavily mis-sold: Portugal's "5 years to
 * citizenship" (now 10), Malta passports (ruled illegal), Spain's Golden Visa
 * (abolished), Hungary work permits (never available to Pakistanis), Caribbean
 * passports for Schengen (on an EU phase-out clock).
 *
 * Every one of those corrections costs a sale and buys the next ten. No
 * competitor will publish them, because their business depends on not doing so.
 *
 * All facts here are the 'primary' entries in lib/facts.ts. Nothing unverified
 * is stated. See lib/facts.ts for sources and dates.
 */
export const metadata: Metadata = {
  title: 'Europe & Schengen from Pakistan',
  description:
    'Schengen visitor visas, and the truth about European residence routes — including what has closed. Portugal now takes 10 years to citizenship, not 5.',
  alternates: { canonical: '/europe' },
};

const PAGE = 'europe';

const CLOSED: { icon: 'scale' | 'doc' | 'building' | 'globe'; term: string; def: string }[] = [
  {
    icon: 'scale',
    term: 'Malta passports',
    def: 'Ruled unlawful by the EU’s highest court in April 2025. That ended the last citizenship-by-investment scheme in the European Union. If anyone is still selling you a Maltese passport, walk away.',
  },
  {
    icon: 'doc',
    term: 'Spain’s Golden Visa',
    def: 'Abolished. It stopped accepting new applications on 3 April 2025.',
  },
  {
    icon: 'building',
    term: 'Hungary work permits',
    def: 'Hungary has not accepted guest worker permits since June 2026 — and Pakistan was never on its eligible list in the first place. It covered Armenia, Georgia and the Philippines. It is still advertised across Pakistan. It was never available to you.',
  },
  {
    icon: 'globe',
    term: 'Vanuatu passports',
    def: 'Vanuatu permanently lost Schengen visa-free access for every one of its passport holders in December 2024. People paid for that passport specifically to travel to Europe.',
  },
];

const HELP: { icon: 'plane' | 'permit' | 'refresh'; title: string; body: string }[] = [
  {
    icon: 'plane',
    title: 'Schengen visitor visas',
    body: 'The most common thing people actually need, and heavily refused for Pakistani applicants. One thing worth knowing before you start: you are supposed to apply to your main destination, not to whichever country is rumoured to be easiest. Picking the “easy” consulate is itself a refusal risk.',
  },
  {
    icon: 'permit',
    title: 'Portugal residence — with the real timeline',
    body: 'Still a genuine route to living in Europe. Just not a five-year one. If a ten-year path works for your family, we will tell you honestly what it costs and how long it takes.',
  },
  {
    icon: 'refresh',
    title: 'If you were refused',
    body: 'A Schengen refusal has its own appeal route and its own deadlines, and they differ by country. Send us the letter.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Someone quoted me Portuguese citizenship in five years. Is that right?',
    a: (
      <>
        Not any more. The law changed on 19 May 2026, and for Pakistani nationals naturalisation now
        takes ten years — counted from the day your first residence permit is issued. It applies the
        same way to the D7 and the Golden Visa. If someone is still quoting you five years today, you
        have learned something useful about them.
      </>
    ),
  },
  {
    q: 'An agent is selling me a Maltese or EU “investment passport”. Is it legitimate?',
    a: (
      <>
        No. Malta’s citizenship-by-investment scheme was ruled unlawful by the EU’s highest court in
        April 2025 — it was the last one in the European Union. There is no lawful EU
        passport-for-cash route left. Anyone still selling one is selling you a problem.
      </>
    ),
  },
  {
    q: 'Is a Caribbean passport a safe way to get visa-free access to Europe?',
    a: (
      <>
        It is on a clock. In June 2026 the European Commission wrote to all five Caribbean
        programmes demanding they phase the schemes out by 1 June 2028. Nobody can tell you exactly
        how that ends — but the EU already did exactly this to Vanuatu in 2024, permanently. If you
        are weighing six figures on a passport for European access, that timeline belongs in your
        decision, not in a footnote after you’ve paid.
      </>
    ),
  },
  {
    q: 'Which Schengen consulate is the easiest to get a visa from?',
    a: (
      <>
        That is the wrong question, and asking it can get you refused. You are required to apply to
        your main destination — the country where you will spend the most time. Choosing the
        “easy” consulate instead is itself a refusal risk, not a shortcut.
      </>
    ),
  },
  {
    q: 'Can you guarantee my Schengen visa?',
    a: (
      <>
        No — and neither can anyone else. A Schengen visa is decided by a visa officer, and no
        consultant can overrule that officer. What we can do is tell you honestly whether your case
        is strong, fix what is weak before it is filed, and tell you if we don’t think you’ll
        succeed — before you have paid us anything.
      </>
    ),
  },
];

export default function EuropePage() {
  return (
    <>
      <PageHero
        eyebrow="Europe & Schengen · from Pakistan"
        title={
          <>
            Europe and Schengen, told{' '}
            <span className="text-gold-300">straight.</span>
          </>
        }
        subtitle="More Pakistanis are mis-sold European routes than any other destination. Before we tell you what works, here is what doesn’t."
      >
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.VISIT_VISA,
            page: PAGE,
            targetCountry: 'Europe',
            message: 'Hi, I’d like to ask about a European / Schengen visa.',
          }}
        >
          Ask about Europe
        </WhatsAppCta>
        <Link href="/book-consultation" className="btn btn-ghost-light">
          Book a consultation
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ============ The Portugal correction — the single most valuable thing ============ */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Read this first"
          title="Portugal now takes 10 years to citizenship. Not 5."
          subtitle="It is the most repeated European myth sold in Pakistan — and the one that costs families the most when they find out too late."
        />
        <div className="mt-10">
          <Callout title="The law changed on 19 May 2026.">
            <p>
              For Pakistani nationals, naturalisation now requires{' '}
              <strong className="text-ink-900">ten years</strong> of residence, and the clock starts
              from the day your first residence permit is issued — not the day you apply.
            </p>
            <p className="mt-4">
              It applies the same way to the D7 and to the Golden Visa. Only applications already
              filed before 19 May 2026 keep the old terms.
            </p>
            <p className="mt-4">
              <strong className="text-ink-900">
                Most consultants in Pakistan are still selling the five-year story.
              </strong>{' '}
              Some don’t know. Some do. Either way, if someone quotes you five years for Portugal
              today, you have learned something useful about them.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ============================== What has closed ============================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Still advertised · no longer real"
          title="What has closed"
          subtitle="These routes are still marketed across Pakistan. None of them are available to you."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CLOSED.map((c) => (
            <FeatureCard key={c.term} icon={<Icon name={c.icon} />} kicker="No longer available" title={c.term}>
              {c.def}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* =========================== Caribbean — on a clock =========================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Buy with your eyes open"
          title="Caribbean passports are on a clock"
          subtitle="Antigua, Dominica, Grenada, St Kitts and St Lucia all sell citizenship. Almost every Pakistani buyer wants one for the same reason: visa-free travel to Europe."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <Callout title="A 2028 phase-out is already in motion.">
              <p>
                In June 2026 the European Commission wrote to all five demanding they{' '}
                <strong className="text-ink-900">phase these schemes out by 1 June 2028</strong>, with
                interim measures due this September and a review in December.
              </p>
              <p className="mt-4">
                Nobody can tell you exactly how that ends. But you already know the EU follows through
                — because it did it to Vanuatu in 2024, permanently, to everyone holding that
                passport. If you are considering six figures on a Caribbean passport for European
                access, that timeline belongs in your decision, not in a footnote after you’ve paid.
              </p>
            </Callout>
          </div>
          <aside className="card border-l-[3px] border-l-gold-500 p-7 lg:col-span-2">
            <p className="eyebrow">The precedent</p>
            <p className="mt-4 font-serif text-2xl leading-tight text-balance">
              The EU already did this once.
            </p>
            <p className="mt-3 text-ink-600 text-pretty">
              Vanuatu holders lost Schengen visa-free access in December 2024 — permanently, and all
              at once. That is the outcome the Caribbean programmes are now being pushed toward.
            </p>
          </aside>
        </div>
      </Section>

      {/* ============================= What we do help with ============================= */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What we actually help with"
          title="The routes that are still real"
          subtitle="Fewer than you were promised — but every one of them is honest, and we will tell you the true timeline before you commit."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {HELP.map((h) => (
            <FeatureCard key={h.title} icon={<Icon name={h.icon} />} title={h.title}>
              {h.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      {/* =================================== FAQ =================================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Straight answers"
          title="Questions worth asking before you pay"
          subtitle="The answers a salesperson on commission would rather you didn’t hear."
        />
        <div className="mt-10">
          <FAQ items={FAQ_ITEMS} />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you pay anyone"
        title="Been quoted a European route? Send us what you were told."
        subtitle="We will tell you whether it is real — even if the answer means we don’t get the work."
        page={PAGE}
        waMessage="Hi, I’d like to ask about a European / Schengen visa."
      />
    </>
  );
}
