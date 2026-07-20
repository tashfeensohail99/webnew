import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection } from '@/components/ui';
import { ClbConverter } from '@/components/tools/ClbConverter';
import { CLB_TABLES_VERIFIED_ON } from '@/lib/clb';

/**
 * The CLB converter.
 *
 * The smallest tool on the site and one of the most useful, because almost every
 * Canadian immigration requirement is expressed in CLB and almost every applicant
 * holds a test score in something else. It also carries the one point people most
 * often get wrong: your LOWEST ability is what gates you, not your average.
 */
export const metadata: Metadata = {
  title: 'Language Score to CLB Converter — IELTS, CELPIP, PTE, TEF, TCF',
  description:
    'Convert IELTS General Training, CELPIP, PTE Core, TEF Canada or TCF Canada scores to Canadian Language Benchmark levels, ability by ability.',
  alternates: { canonical: '/tools/clb-converter' },
};

const FAQS = [
  {
    q: 'Why does everything ask for CLB instead of my test score?',
    a: 'Because Canada has to compare people who sat different tests in different languages. The Canadian Language Benchmarks are the common scale, and its French equivalent is the NCLC. Every immigration requirement is written in those levels, so your test score has to be translated before it means anything.',
  },
  {
    q: 'Which of my four numbers matters most?',
    a: 'The lowest one, almost always. Programme requirements are usually expressed as a minimum in each of the four abilities, so a strong reading score does not compensate for weak writing. If you are trying to decide what to work on before a retake, work on your weakest ability.',
  },
  {
    q: 'I took the TEF and my certificate shows two different numbers.',
    a: 'It will. The test provider re-scored the TEF onto a scale out of 699 in 2019, but IRCC continued using the earlier scale for immigration purposes — the provider prints it as “Équivalence ancien score”. Use that one. Entering the score out of 699 will give you a badly wrong answer.',
  },
  {
    q: 'Is IELTS Academic accepted?',
    a: 'Not for Express Entry. IRCC accepts IELTS General Training. Submitting an Academic result is not a paperwork problem that gets corrected — it is a reason for refusal, so check which one you booked before you sit it.',
  },
  {
    q: 'Does a higher level always help?',
    a: 'Up to a point. The benchmarks used in immigration scoring stop counting above level 10, so a score beyond that does not add anything further. Below that, moving up a level in your weakest ability is usually the single most cost-effective thing most applicants can do.',
  },
];

export default function ClbConverterPage() {
  return (
    <>
      <PageHero
        eyebrow={`Free tool · tables checked ${CLB_TABLES_VERIFIED_ON}`}
        title={
          <>
            Your test score, <span className="text-gold-300">in the language Canada uses</span>
          </>
        }
        subtitle="Convert IELTS, CELPIP, PTE Core, TEF or TCF results into Canadian Language Benchmark levels — ability by ability, because that is how they are assessed."
      />

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <ClbConverter />
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="How to read it"
            title="The lowest number is the one that counts"
            subtitle="Requirements are written as a minimum in each of the four abilities. They are not averaged."
          />
          <div className="mt-8 space-y-4 leading-relaxed text-ink-600 text-pretty">
            <p>
              This catches people out constantly. Someone reads that a programme needs a
              certain level, sees that three of their four abilities clear it comfortably,
              and assumes they are fine. The fourth one decides it.
            </p>
            <p>
              It is also why language is usually the most improvable part of an application.
              You cannot change your age and you cannot quickly change your work history,
              but a focused retake on one weak ability is a real, available option — and it
              is generally the cheapest thing on the list.
            </p>
          </div>
          <div className="mt-8">
            <Callout title="One scale, two languages">
              English results convert to CLB and French results to NCLC. They are the same
              framework applied to different languages, and if you have taken tests in both,
              each is converted on its own scale.
            </Callout>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/tools/crs-calculator" className="btn btn-navy">
              Use these levels in the CRS calculator
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/express-entry" className="btn btn-ghost">
              How Express Entry works
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Before you rely on a level" />
          <div className="mt-10">
            <FAQ items={FAQS} />
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="A level is not a plan"
        title="Knowing your CLB is the easy part"
        subtitle="What matters is which route those levels actually open, and whether a retake would change the answer. That is worth a proper conversation."
        page="tool-clb"
        waMessage="Hi, I used the CLB converter on your site and I’d like to discuss my options."
      />
    </>
  );
}
