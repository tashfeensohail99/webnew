import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection } from '@/components/ui';
import { VisitVisaRiskChecker } from '@/components/tools/VisitVisaRiskChecker';
import { getWhatsAppChannel } from '@/lib/wa-channel';

/**
 * The visit-visa self-check.
 *
 * Deliberately finds weak points instead of flattering the reader. The most
 * valuable thing this page can do is stop someone filing a weak application that
 * puts a refusal on their record — and the second most valuable is bridging the
 * already-refused into the refusal practice.
 */
export const metadata: Metadata = {
  title: 'Canada Visit Visa — Refusal Risk Checker',
  description:
    'A free 60-second check of the things a visa officer actually questions on a Canadian visitor visa. Honest weak points, no sign-up, no promises.',
  alternates: { canonical: '/tools/visit-visa-refusal-risk' },
};

const FAQS = [
  {
    q: 'Why does it look for weak points instead of giving me a score?',
    a: 'Because weak points are what get people refused. A reassuring score would be pleasant and useless. Knowing that, say, your funds look freshly deposited is something you can actually fix before you apply.',
  },
  {
    q: 'Does a high risk result mean I shouldn’t apply?',
    a: 'It means you shouldn’t apply yet, in that shape. A refusal stays on your record and makes every future application harder — so fixing the file first is almost always cheaper than filing twice.',
  },
  {
    q: 'I was refused before. Is that the end of it?',
    a: 'No. But you need to know the officer’s actual reasons, which are in your GCMS notes, before re-applying. Guessing at the reason is how people collect a second refusal.',
  },
  {
    q: 'Is this legal advice?',
    a: 'No. It is an indicative self-assessment from six questions. Real assessment means someone qualified reading your documents.',
  },
];

export default async function VisitVisaToolPage() {
  const { digits } = await getWhatsAppChannel();

  return (
    <>
      <PageHero
        eyebrow="Free tool · about 60 seconds"
        title={
          <>
            What would a visa officer <span className="text-gold-300">question about your file?</span>
          </>
        }
        subtitle="The Canadian visitor visa is the most commonly refused. This check looks for the specific weak points that cause it — honestly, and before you spend the application fee."
      />

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <VisitVisaRiskChecker digits={digits} />
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="What the officer is really asking"
            title="One question sits underneath all of it"
            subtitle="Everything in your application is evidence for or against a single thing: will this person leave Canada when they are supposed to?"
          />
          <div className="mt-8 space-y-4 text-ink-600 text-pretty leading-relaxed">
            <p>
              Officers are not looking for a reason to say no. They are looking for enough to be
              satisfied you are a genuine visitor who will go home. Almost every refusal we read
              comes down to that question being left unanswered — not to a rule being broken.
            </p>
            <p>
              Most people assemble documents. The applications that get approved build an argument
              the officer can follow, and put the evidence exactly where the doubt is.
            </p>
          </div>
          <div className="mt-8">
            <Callout title="A refusal is expensive in a way the fee isn’t">
              The application fee is the small cost. The real cost is the refusal sitting on your
              record, which every future officer — Canadian or otherwise — will see. That is why we
              would rather tell you to wait than take your money today.
            </Callout>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/canada-visit-visa" className="btn btn-navy">
              Read the visit-visa guide
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/canada-visa-refused" className="btn btn-ghost">
              Already refused? Start here
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Before you use it" />
          <div className="mt-10">
            <FAQ items={FAQS} />
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Fix it before you file it"
        title="Know what’s weak before an officer tells you"
        subtitle="Bring your result to a consultation and we’ll tell you honestly whether to file now, fix first, or not at all."
        page="tool-visit-visa"
        waMessage="Hi, I used the visit-visa risk checker and I’d like to talk through my case."
      />
    </>
  );
}
