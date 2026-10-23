import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection } from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

/**
 * From Pakistan: the immigration medical exam.
 *
 * Built from IRCC's own pages only — the medical exams page and its permanent-
 * and temporary-resident requirement pages (modified August 2026), and IRCC's
 * country list, which includes Pakistan (July 2026). We name no clinics:
 * IRCC's panel-physician search is the only list that counts, and a clinic
 * named on our page could leave the panel without our page knowing.
 *
 * Same evergreen rule as the rest of the site: no fees, no processing times.
 */
export const metadata: Metadata = {
  title: 'Canada Immigration Medical Exam in Pakistan',
  description:
    'Who needs a Canadian immigration medical exam from Pakistan, finding an IRCC panel physician, what to bring and how long results last — from IRCC’s rules.',
  alternates: { canonical: '/canada-immigration-from-pakistan/medical-exam' },
};

const PAGE = 'pakistan-medical-exam';

const IRCC = {
  panel: 'https://secure.cic.gc.ca/PanelPhysicianMedecinDesigne/en/Home',
  exams: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams.html',
  pr: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-permanent-residents.html',
  tr: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents.html',
  countries:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents/country-requirements.html',
} as const;

function Official({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
      {children}
    </a>
  );
}

const BRING = [
  'Identification — preferably your passport (a national ID card, or an original birth certificate for a child under 18, is also accepted)',
  'Your glasses or contact lenses, if you wear them',
  'Medical reports or test results for any current or past condition',
  'A list of the medicines you take',
  'The medical report form IRCC sent you, if you were instructed rather than going upfront',
  'Four recent photos — only if the clinic does not use eMedical; ask when you book',
  'Your vaccination record, if you have it (optional, but encouraged)',
];

const FAQS = [
  {
    q: 'Can my own doctor in Pakistan do the medical?',
    a: 'No. Only a panel physician on IRCC’s list can do an immigration medical exam. An exam done by anyone else does not count, however qualified the doctor. Find one through IRCC’s panel physician search.',
  },
  {
    q: 'Is Pakistan on IRCC’s medical exam list?',
    a: 'Yes. Pakistan is on IRCC’s list of countries and territories where a medical exam is required. If you have lived in or travelled to Pakistan for 6 months or more in a row in the year before coming to Canada, and you are staying longer than 6 months, you need one.',
  },
  {
    q: 'Do I need a medical exam for a Canada visit visa?',
    a: 'Usually not for a stay of 6 months or less, unless you will work somewhere public health must be protected, such as health care or child care. For a longer stay after living in Pakistan, yes. Parents and grandparents applying for a super visa always need one.',
  },
  {
    q: 'When should I do the medical for Express Entry?',
    a: 'Upfront: after you receive your invitation to apply and before you submit. Book directly with a panel physician, then upload the confirmation document the clinic gives you with your application.',
  },
  {
    q: 'How long is the medical valid?',
    a: 'Twelve months. If you have not become a permanent resident, or have not arrived in Canada, within that time, you may need another exam.',
  },
  {
    q: 'Do family members who aren’t coming with me need a medical?',
    a: 'For permanent residence, yes. IRCC requires a medical exam for your family members even if they are not coming to Canada with you.',
  },
  {
    q: 'Who pays, and is it refunded if I’m refused?',
    a: 'You pay the clinic at the appointment — the physician, the radiologist, and any further tests or specialists. Vaccines the clinic offers may cost extra. IRCC says these fees are not refunded if your application is refused.',
  },
];

export default function PakistanMedicalExamPage() {
  return (
    <>
      <PageHero
        eyebrow="From Pakistan · Medical exam"
        title={
          <>
            The medical exam for Canada,{' '}
            <span className="text-gold-300">done by the right doctor.</span>
          </>
        }
        subtitle="Only an IRCC panel physician can do it — not your own doctor. Who needs one from Pakistan, when to book it, what to bring, and how long the result lasts."
      >
        <a href={IRCC.panel} rel="noopener noreferrer" target="_blank" className="btn btn-gold">
          Find a panel physician
          <span aria-hidden="true">→</span>
        </a>
        <Link href="/canada-immigration-from-pakistan" className="btn btn-ghost">
          All the paperwork from Pakistan
        </Link>
      </PageHero>

      {/* ===================== WHO NEEDS ONE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Who needs one"
          title="Permanent residence: everyone. Temporary stays: it depends."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-7">
            <p className="font-serif text-2xl">Permanent residence</p>
            <p className="mt-3 text-ink-600 text-pretty">
              Everyone applying needs an immigration medical exam — and so do your family members,{' '}
              <strong className="text-ink-900">even if they are not coming with you</strong>.
            </p>
            <div className="mt-5">
              <Official href={IRCC.pr}>IRCC: permanent residents →</Official>
            </div>
          </div>
          <div className="card p-7">
            <p className="font-serif text-2xl">Visiting, studying or working</p>
            <ul className="mt-3 space-y-2 text-ink-600 text-pretty">
              <li>
                <strong className="text-ink-900">Staying longer than 6 months?</strong> You need one if you
                lived in or travelled to a listed country for 6 months or more in a row in the year before
                — and{' '}
                <Official href={IRCC.countries}>Pakistan is on IRCC’s list</Official>.
              </li>
              <li>
                <strong className="text-ink-900">Any length of stay</strong>, if you will work where public
                health must be protected — health care, clinical labs, schools, child care, in-home care.
              </li>
              <li>
                <strong className="text-ink-900">Super visa</strong> parents and grandparents always need one.
              </li>
            </ul>
            <div className="mt-5">
              <Official href={IRCC.tr}>IRCC: visitors, students and workers →</Official>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== WHEN ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="When to do it"
          title="Upfront, or when IRCC tells you"
          subtitle="Doing it at the wrong moment either wastes the result or delays your file. IRCC’s rule depends on the route."
        />
        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Express Entry', 'Upfront — after your invitation to apply, before you submit. Book directly with a panel physician and upload the clinic’s confirmation document with your application.'],
            ['Other permanent residence', 'Including sponsored spouses and children: wait for IRCC’s instructions after you submit a complete application, then do the exam within 30 days of receiving them. Missing that can lead to refusal.'],
            ['Visit, study or work', 'You can do it upfront, before you apply — or wait, and the visa office will tell you if you need one.'],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-gold-500/60 pl-5">
              <dt className="font-serif text-xl">{t}</dt>
              <dd className="mt-1.5 text-ink-600 text-pretty">{d}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 max-w-3xl text-ink-600 text-pretty">
          <strong className="text-ink-900">Results last 12 months.</strong> If you have not become a
          permanent resident, or arrived in Canada, within that time, you may need another exam — so
          don’t take it so early that it runs out before your decision.
        </p>
      </Section>

      {/* ===================== THE APPOINTMENT ===================== */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="At the clinic" title="What to bring" />
            <ul className="mt-8 space-y-3">
              {BRING.map((b) => (
                <li key={b} className="flex gap-3 text-ink-600 text-pretty">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 lg:pt-14">
            <Callout title="Only IRCC’s list counts">
              Use <Official href={IRCC.panel}>IRCC’s panel physician search</Official> and choose Pakistan.
              A clinic that is not on that list cannot do an immigration medical, however it advertises
              itself — and no clinic can “arrange” a result. The exam is a medical assessment; the
              decision is IRCC’s.
            </Callout>
            <div className="text-ink-600 text-pretty">
              <p>
                <strong className="text-ink-900">Afterwards</strong>, the clinic sends your results
                straight to IRCC and gives you a document confirming the exam — keep it. You can ask the
                clinic for a copy of your results; the reports and X-rays themselves become IRCC’s and are
                not returned.
              </p>
              <p className="mt-4">
                IRCC decides whether you get a standard or a streamlined exam; you cannot choose. If the
                exam finds inactive tuberculosis, you will be placed under medical surveillance after you
                arrive, so that you get the right treatment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="Medical exam questions" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-ink-600 text-pretty">
          Also from Pakistan:{' '}
          <Link href="/canada-immigration-from-pakistan/police-certificate" className="font-semibold text-accent-500 link-underline">
            the police certificate
          </Link>{' '}
          and{' '}
          <Link href="/canada-immigration-from-pakistan/biometrics" className="font-semibold text-accent-500 link-underline">
            giving biometrics
          </Link>
          . Already in Canada with a recent exam? IRCC has a{' '}
          <Official href={IRCC.exams}>temporary exemption</Official> for some people already living there.
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="October 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Getting the timing right"
        title="Not sure when to book your medical?"
        subtitle="Tell us your route and where your application stands. We’ll tell you whether you need a medical, when to book it so it doesn’t expire, and what else the file needs. No one can guarantee an outcome, and we won’t."
        page={PAGE}
        waMessage="Hi, I need advice on the immigration medical exam for my Canadian application."
      />
    </>
  );
}
