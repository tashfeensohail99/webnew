import type { Metadata } from 'next';
import { PageHero, Section, SectionHeading, FeatureCard, Callout, CTASection, Icon } from '@/components/ui';

/**
 * The tools hub.
 *
 * Free tools are the one thing on an immigration site people actually come back
 * to, and they qualify a lead better than any brochure page can. Every tool here
 * ends the same way: an honest band, the specific weak points, and a WhatsApp
 * message pre-filled with the person's own answers so the rep starts informed.
 *
 * Deliberately NOT a wall of twenty calculators for programmes the firm doesn't
 * file. Each tool maps to something we actually handle.
 */
export const metadata: Metadata = {
  title: 'Free Immigration Tools & Eligibility Checkers',
  description:
    'Free, honest self-assessment tools: check whether you could work in Canada without a job offer, and what a visa officer would question about your visitor visa. No sign-up.',
  alternates: { canonical: '/tools' },
};

const TOOLS = [
  {
    href: '/tools/work-permit-eligibility',
    icon: 'permit' as const,
    kicker: 'Canada · Work permit',
    title: 'Work permit without a job offer',
    body: 'Six questions on what you own, run and could fund — and an honest read on whether the owner-operator route fits you at all.',
    cta: 'Check eligibility',
  },
  {
    href: '/tools/visit-visa-refusal-risk',
    icon: 'plane' as const,
    kicker: 'Canada · Visitor visa',
    title: 'Visit visa refusal-risk check',
    body: 'Finds the specific things an officer will question about your file — home ties, funds, travel history — before you pay the application fee.',
    cta: 'Find my weak points',
  },
];

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free · no sign-up"
        title={
          <>
            Tools that tell you the truth, <span className="text-gold-300">not what you want to hear</span>
          </>
        }
        subtitle="Quick self-assessments built around the cases we actually handle. They take about a minute, they cost nothing, and they will tell you when a route isn’t for you."
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="The tools"
          title="Start with the one that matches your situation"
          subtitle="Each ends with an indicative result and the option to send it straight to us — with your answers attached, so nobody makes you repeat yourself."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TOOLS.map((t) => (
            <FeatureCard
              key={t.href}
              href={t.href}
              cta={t.cta}
              icon={<Icon name={t.icon} />}
              kicker={t.kicker}
              title={t.title}
            >
              {t.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="How to read a result"
            title="An indicative band, never a decision"
          />
          <div className="mt-8 space-y-4 text-ink-600 text-pretty leading-relaxed">
            <p>
              These tools ask a handful of questions. A real assessment means someone qualified
              reading your actual documents — your business records, your bank history, your refusal
              letter. No questionnaire replaces that, and ours doesn’t pretend to.
            </p>
            <p>
              What they are genuinely good for is saving you time and money: finding out in sixty
              seconds whether a route is even worth a conversation, and which parts of your file are
              weak enough to fix first.
            </p>
          </div>
          <div className="mt-8">
            <Callout title="Why we built them to say no">
              A tool that tells everyone they qualify is a lead generator, not an assessment. Ours
              will tell you when a route doesn’t fit — because a refusal on your record costs you far
              more than a lost enquiry costs us.
            </Callout>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Beyond the tools"
        title="When you want a real answer on your actual file"
        subtitle="A paid consultation, credited to your fee if you go ahead. You leave knowing where you genuinely stand."
        page="tools-hub"
        waMessage="Hi, I’ve been using the tools on your site and I’d like to discuss my case."
      />
    </>
  );
}
