import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection } from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

/**
 * From Pakistan: biometrics.
 *
 * Built from IRCC's own biometrics pages (modified March and August 2026). The
 * three Pakistani visa application centres and the VFS link are the ones IRCC's
 * "where to give" page lists. No fee amounts: IRCC sets them and links are
 * where they stay current.
 */
export const metadata: Metadata = {
  title: 'Canada Biometrics in Pakistan: Where and How',
  description:
    'Biometrics for a Canadian application from Pakistan — who must give them, the Islamabad, Lahore and Karachi centres, the 30-day deadline and what to bring.',
  alternates: { canonical: '/canada-immigration-from-pakistan/biometrics' },
};

const PAGE = 'pakistan-biometrics';

const IRCC = {
  biometrics: 'https://www.canada.ca/en/immigration-refugees-citizenship/campaigns/biometrics.html',
  where: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics/where-to-give.html',
  when: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics/when-to-give.html',
  how: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics/how-to-give.html',
  /** The VAC site IRCC's "where to give" page links for all three Pakistani centres. */
  vac: 'https://www.vfsglobal.ca/Canada/Pakistan/',
} as const;

function Official({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
      {children}
    </a>
  );
}

const STEPS: [string, string][] = [
  ['Pay with your application', 'The biometrics fee is paid to IRCC when you apply. IRCC publishes the amount, including a capped amount for a family applying together.'],
  ['Get your instruction letter', 'IRCC then sends a biometric instruction letter (BIL). This is what lets the centre take your biometrics.'],
  ['Book within 30 days', 'You have 30 days from receiving the letter. IRCC’s advice is to book as soon as it arrives.'],
  ['Go with your letter and passport', 'Bring the BIL and your valid passport. Your fingerprints and photo are taken there and sent to IRCC.'],
];

const EXEMPT = [
  'Children under 14',
  'Applicants over 79 (there is no upper age limit for asylum claimants)',
  'Visitors who only need an eTA — Pakistani passport holders need a visa, so this rarely applies',
  'Anyone applying for a visit, study or work permit who already gave biometrics for a permanent residence application that is still in process',
  'Canadian citizens and existing permanent residents',
];

const FAQS = [
  {
    q: 'Where can I give biometrics in Pakistan?',
    a: 'At one of the three Canada visa application centres IRCC lists for Pakistan: Islamabad, Lahore and Karachi. Book through the centres’ website, which IRCC links from its “where to give your biometrics” page.',
  },
  {
    q: 'How long do I have to give my biometrics?',
    a: '30 days from receiving your biometric instruction letter. IRCC advises booking your appointment as soon as the letter arrives.',
  },
  {
    q: 'Do I have to pay for the appointment?',
    a: 'No. IRCC says appointments at visa application centres are free, and warns not to pay anyone for one. The biometrics fee itself is paid to IRCC with your application.',
  },
  {
    q: 'I gave biometrics for a visit visa before. Do I need to give them again?',
    a: 'For temporary residence — visiting, studying, working — you give biometrics once every 10 years, and IRCC cannot issue a visa or permit valid beyond 10 years from that date. For permanent residence, most applicants must give them again every time they apply.',
  },
  {
    q: 'Do my children and parents need to give biometrics?',
    a: 'Children under 14 are exempt, and so are applicants over 79 (except asylum claimants). Everyone else in the application aged 14 to 79 normally needs to give them.',
  },
  {
    q: 'I live in Dubai or Riyadh. Do I have to travel to Pakistan?',
    a: 'No. You give biometrics at a visa application centre, and you can use one where you live. IRCC’s “where to give your biometrics” page lists the centres by country.',
  },
  {
    q: 'Are biometrics the same as the fingerprints for a police certificate?',
    a: 'No. Fingerprints taken by the police for a police certificate are a separate thing. Biometrics are the fingerprints and photo IRCC takes for your application.',
  },
];

export default function PakistanBiometricsPage() {
  return (
    <>
      <PageHero
        eyebrow="From Pakistan · Biometrics"
        title={
          <>
            Biometrics for Canada,{' '}
            <span className="text-gold-300">in Islamabad, Lahore or Karachi.</span>
          </>
        }
        subtitle="Your fingerprints and photo, given in person at a visa application centre. Who must give them, the 30-day deadline, what to bring — and when you won’t need to give them again."
      >
        <a href={IRCC.vac} rel="noopener noreferrer" target="_blank" className="btn btn-gold">
          Book at a Pakistan centre
          <span aria-hidden="true">→</span>
        </a>
        <Link href="/canada-immigration-from-pakistan" className="btn btn-ghost">
          All the paperwork from Pakistan
        </Link>
      </PageHero>

      {/* ===================== HOW IT WORKS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps, one deadline"
          subtitle={
            <>
              From IRCC’s{' '}
              <Official href={IRCC.how}>how to give your biometrics</Official> and{' '}
              <Official href={IRCC.where}>where to give them</Official>.
            </>
          }
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="card p-7">
              <p className="font-serif text-4xl leading-none text-gold-600">{i + 1}</p>
              <p className="mt-4 font-serif text-xl">{t}</p>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ===================== WHERE ===================== */}
      <Section tone="alt">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Where, in Pakistan"
              title="Three visa application centres"
              subtitle="IRCC lists Canada visa application centres in Islamabad, Lahore and Karachi. Check the centre’s own site for its address, hours and services before you go."
            />
            <ul className="mt-8 flex flex-wrap gap-3">
              {['Islamabad', 'Lahore', 'Karachi'].map((c) => (
                <li key={c} className="rounded-full border border-gold-500/40 bg-paper px-5 py-2 font-serif text-xl">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-600 text-pretty">
              <Official href={IRCC.vac}>Book on the centres’ website</Official>. Living in the Gulf or
              elsewhere? Use a centre where you live —{' '}
              <Official href={IRCC.where}>IRCC lists them by country</Official>.
            </p>
          </div>
          <div className="lg:pt-14">
            <Callout title="Appointments are free">
              IRCC says booking a biometrics appointment costs nothing, and warns not to pay anyone for
              one. If an agent is charging you for “getting a slot”, that is not an IRCC charge.
            </Callout>
          </div>
        </div>
      </Section>

      {/* ===================== WHO ===================== */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who gives them" title="Almost everyone aged 14 to 79" />
            <p className="mt-6 text-ink-600 text-pretty">
              Biometrics are needed for visit visas, study and work permits, permanent residence, and
              extending your stay in Canada. IRCC’s exemptions that matter most for Pakistani applicants:
            </p>
            <ul className="mt-6 space-y-3">
              {EXEMPT.map((e) => (
                <li key={e} className="flex gap-3 text-ink-600 text-pretty">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="How long they last" title="Ten years — for temporary stays" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty">
              <p>
                For <strong className="text-ink-900">visit, study and work</strong> applications you give
                biometrics once every 10 years. IRCC cannot issue a visa or permit valid beyond 10 years
                from the date you gave them.
              </p>
              <p>
                For <strong className="text-ink-900">permanent residence</strong>, most applicants must give
                them again every time they apply — even if they gave them recently for a visit.
              </p>
              <p>
                <Official href={IRCC.when}>IRCC: when to give your biometrics</Official>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="Biometrics questions" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-ink-600 text-pretty">
          Also from Pakistan:{' '}
          <Link href="/canada-immigration-from-pakistan/police-certificate" className="font-semibold text-accent-500 link-underline">
            the police certificate
          </Link>{' '}
          and{' '}
          <Link href="/canada-immigration-from-pakistan/medical-exam" className="font-semibold text-accent-500 link-underline">
            the immigration medical exam
          </Link>
          .
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="October 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you book"
        title="Get the whole file right, not just the appointment"
        subtitle="Biometrics are one step. We’ll check the application they belong to — forms, documents, funds — before it goes in. No one can guarantee an outcome, and we won’t."
        page={PAGE}
        waMessage="Hi, I have a biometric instruction letter and would like help with my Canadian application."
      />
    </>
  );
}
