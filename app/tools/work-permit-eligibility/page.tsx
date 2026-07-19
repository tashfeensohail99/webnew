import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection } from '@/components/ui';
import { WorkPermitChecker } from '@/components/tools/WorkPermitChecker';
import { getWhatsAppChannel } from '@/lib/wa-channel';

/**
 * The qualifier for the firm's flagship route.
 *
 * Search intent here is a question, not a programme name — people ask "can I work
 * in Canada without a job offer", never "C11". The tool answers that question, and
 * the result hands the rep a lead that already contains the person's situation.
 */
export const metadata: Metadata = {
  title: 'Work in Canada Without a Job Offer — Eligibility Checker',
  description:
    'A free 60-second check: could you get a Canadian work permit without an employer sponsoring you? Honest, indicative result — no sign-up, no promises.',
  alternates: { canonical: '/tools/work-permit-eligibility' },
};

const FAQS = [
  {
    q: 'Do I really not need a job offer?',
    a: 'There are routes into Canada built around people who own or run a business, rather than people being hired by a Canadian employer. They are not a loophole and they are not easy — but they exist, and most agents in Pakistan don’t file them.',
  },
  {
    q: 'Is this checker a decision?',
    a: 'No. It is an indicative self-assessment based on six questions. A real assessment means a lawyer reading your actual documents. What the tool is good for is telling you quickly whether this is worth a conversation at all.',
  },
  {
    q: 'What happens after I get a result?',
    a: 'Nothing automatic. You can send the result to us on WhatsApp — it arrives with your answers attached, so we already understand your situation — or book a paid consultation. Either way you are under no obligation.',
  },
  {
    q: 'Does a previous refusal rule me out?',
    a: 'Not automatically, but it must be dealt with openly in the new application. Applications that quietly ignore an earlier refusal tend to collect a second one.',
  },
];

export default async function WorkPermitToolPage() {
  const { digits } = await getWhatsAppChannel();

  return (
    <>
      <PageHero
        eyebrow="Free tool · about 60 seconds"
        title={
          <>
            Could you work in Canada <span className="text-gold-300">without a job offer?</span>
          </>
        }
        subtitle="Six questions, an honest answer, and no sign-up. If this route doesn’t fit you, the tool will say so — that is the point of it."
      />

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <WorkPermitChecker digits={digits} />
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="What this route actually is"
            title="Built for people who run something"
            subtitle="Most Canadian work permits start with a Canadian employer. This one doesn’t — it starts with you already owning or operating a business."
          />
          <div className="mt-8 space-y-4 text-ink-600 text-pretty leading-relaxed">
            <p>
              The route is designed around an owner-operator: someone who runs a business, can fund
              an operation in Canada, and will actually run it rather than park money in it. That is
              why the checker asks about ownership, track record and funding rather than about
              points.
            </p>
            <p>
              It is genuinely demanding, and it is not right for everyone — which is exactly why we
              would rather you find that out from a free tool than from an invoice.
            </p>
          </div>
          <div className="mt-8">
            <Callout title="A score is not an outcome">
              No questionnaire — ours included — can tell you whether you will get a visa. A visa
              officer decides that. What a good assessment does is tell you honestly whether your
              case is worth building, and what would have to be true for it to work.{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                Our no-guarantee policy
              </Link>
              .
            </Callout>
          </div>
          <div className="mt-10">
            <Link href="/work-permit-canada" className="btn btn-navy">
              Read the full work-permit guide
              <span aria-hidden="true">→</span>
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
        eyebrow="When you want a real answer"
        title="A tool can’t read your documents. A lawyer can."
        subtitle="Bring your result to a consultation and we’ll tell you honestly whether this route is worth pursuing — before you pay for anything else."
        page="tool-work-permit"
        waMessage="Hi, I used the work-permit eligibility checker and I’d like to discuss my case."
      />
    </>
  );
}
