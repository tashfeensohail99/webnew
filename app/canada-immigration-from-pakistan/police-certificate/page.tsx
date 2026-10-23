import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection } from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

/**
 * From Pakistan: the police certificate.
 *
 * Built from IRCC's own pages only — its Pakistan country page (modified
 * 4 September 2025) and its general who / when / how pages (February and
 * August 2026). The provincial links are the ones IRCC itself gives; we do not
 * describe a province's process beyond what IRCC says, because those portals
 * change and IRCC's page is where the change will show first.
 *
 * Same evergreen rule as the rest of the site: no fees, no processing times.
 */
export const metadata: Metadata = {
  title: 'Pakistan Police Certificate for Canada',
  description:
    'How to get a Pakistani police certificate for Canada — province by province, from inside Pakistan or abroad — following IRCC’s own instructions.',
  alternates: { canonical: '/canada-immigration-from-pakistan/police-certificate' },
};

const PAGE = 'pakistan-police-certificate';

const IRCC = {
  pakistan:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how/pakistan.html',
  when: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/when.html',
  how: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how.html',
} as const;

function Official({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
      {children}
    </a>
  );
}

/** The official service for each province, as IRCC's Pakistan page links it. */
const PROVINCES: { name: string; href: string; body: ReactNode }[] = [
  {
    name: 'Punjab',
    href: 'https://pkm.punjab.gov.pk/public/app/our_services?id=a',
    body: 'Through Police Khidmat Markaz (PKM), with offices in all 36 districts. IRCC notes you can apply at any PKM in Punjab, not only in the district the certificate is for — someone now in Lahore who used to live in Rawalpindi can apply in Lahore.',
  },
  {
    name: 'Islamabad',
    href: 'https://Islamabadpolice.gov.pk/character-certificate.php',
    body: 'Islamabad Capital Territory has its own character-certificate service through Islamabad Police.',
  },
  {
    name: 'Sindh',
    href: 'https://prvs.sindhpolice.gov.pk/site/addRequest',
    body: 'Requests go through Sindh Police’s own online request service.',
  },
  {
    name: 'Khyber Pakhtunkhwa',
    href: 'https://kppolice.gov.pk/detail.php?pid=52',
    body: 'Processed in person — IRCC says you may need to visit the office of the Senior Superintendent of Police (SSP). This includes the former FATA agencies: Khyber, Mohmand, Bajaur, Orakzai, Kurram, North and South Waziristan.',
  },
  {
    name: 'Balochistan',
    href: 'https://pkm.balochistanpolice.gov.pk',
    body: 'Through Balochistan Police’s own service, linked from IRCC’s Pakistan page.',
  },
];

const ABROAD = [
  'A completed application form (IRCC’s Pakistan page links it)',
  'Certified copies of your passport — every page that shows your legal stay',
  'A certified copy of your National Identity Card',
  'Three passport-size photographs',
  'The applicable fees',
];

const FAQS = [
  {
    q: 'Do I need a Pakistani police certificate for a Canadian visit visa?',
    a: 'Usually not. IRCC requires police certificates for permanent residence; for temporary residence it generally asks only if you have a criminal record, or if a particular programme’s checklist says so — International Experience Canada is one that usually does. Check the document checklist for the exact application you are making.',
  },
  {
    q: 'How recent does my police certificate have to be?',
    a: 'For the country you live in now, IRCC wants a certificate issued no more than 6 months before you submit your application. For any other country, it must have been issued after your last stay there of 6 months or more in a row since you turned 18. IRCC can ask for updated certificates later.',
  },
  {
    q: 'I live in the Gulf. Which police certificates do I need?',
    a: 'Usually two at least. One from Pakistan, which you can request through the nearest Pakistani embassy or consulate, or through a relative in Pakistan. And one from the Gulf country you live in now, because IRCC asks for a certificate from every country where you have spent 6 months or more in a row since age 18 — including where you are today.',
  },
  {
    q: 'Can a relative in Pakistan apply for me?',
    a: 'In some cases, yes. IRCC says a relative can apply with everything you would provide yourself, plus an affidavit on Rs 20 judicial stamp paper confirming they will receive the certificate for you, and an authority letter in their name to collect it. IRCC’s Pakistan page has samples of both.',
  },
  {
    q: 'Can the Canadian High Commission in Islamabad help me get it?',
    a: 'No. IRCC states plainly that the High Commission cannot help you obtain a police certificate. It comes from the Pakistani police, or from a Pakistani embassy or consulate if you are abroad.',
  },
  {
    q: 'Are the fingerprints for the police certificate the same as my biometrics?',
    a: 'No. Fingerprints taken by the police for a certificate are separate from the biometrics — fingerprints and a photo — that IRCC requires for the application itself, which you give at a visa application centre.',
  },
  {
    q: 'What if I can’t get a police certificate?',
    a: 'IRCC asks for proof that you requested one from the correct authorities, with a letter explaining what you did to get it. It warns that this is not guaranteed to be accepted, so start early rather than rely on it.',
  },
];

export default function PakistanPoliceCertificatePage() {
  return (
    <>
      <PageHero
        eyebrow="From Pakistan · Police certificate"
        title={
          <>
            A police certificate from Pakistan,{' '}
            <span className="text-gold-300">the way IRCC asks for it.</span>
          </>
        }
        subtitle="IRCC calls it a Police Character Certificate or Police Clearance Certificate. Who needs one, how recent it must be, and how to get it in each province — or from the Gulf."
      >
        <a href={IRCC.pakistan} rel="noopener noreferrer" target="_blank" className="btn btn-gold">
          IRCC’s Pakistan instructions
          <span aria-hidden="true">→</span>
        </a>
        <Link href="/canada-immigration-from-pakistan" className="btn btn-ghost">
          All the paperwork from Pakistan
        </Link>
      </PageHero>

      {/* ===================== WHO AND WHEN ===================== */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who needs one" title="Permanent residence: yes. Visits: usually not." />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty">
              <p>
                IRCC requires police certificates for <strong className="text-ink-900">permanent
                residence</strong>, from you and, depending on the programme, from family members aged
                18 or older.
              </p>
              <p>
                For <strong className="text-ink-900">temporary residence</strong> — visiting, studying,
                working — it generally asks only if you have a criminal record, or where a programme’s
                checklist requires one.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Which countries, how recent" title="Every country of 6 months or more since 18" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty">
              <p>
                <strong className="text-ink-900">Where you live now:</strong> issued no more than 6 months
                before you submit your application.
              </p>
              <p>
                <strong className="text-ink-900">Anywhere else</strong> you spent 6 months or more in a row
                since turning 18: issued after your last such stay there. Time before 18, and time in
                Canada, needs no certificate.
              </p>
              <p>
                In Express Entry the window is short — IRCC gives 60 days to submit police certificates and
                advises starting as soon as you are in the pool.{' '}
                <Official href={IRCC.when}>IRCC: when to get a police certificate</Official>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== BY PROVINCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Living in Pakistan"
          title="Where to apply, province by province"
          subtitle="Each province runs its own service. These are the official links IRCC gives on its Pakistan page; the certificate is then couriered to you or collected from the office where you applied."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROVINCES.map((p) => (
            <li key={p.name} className="card flex flex-col p-7">
              <p className="font-serif text-2xl">{p.name}</p>
              <p className="mt-3 text-ink-600 text-pretty">{p.body}</p>
              <div className="mt-auto pt-5">
                <Official href={p.href}>Official {p.name} service →</Official>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm text-ink-500 text-pretty">
          Not a Pakistani citizen but lived in Pakistan? IRCC directs you to the local district office of
          the Senior Superintendent of Police, Police Security Branch — or, if you have left, to the
          nearest Pakistani embassy or consulate.
        </p>
      </Section>

      {/* ===================== ABROAD ===================== */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Living abroad"
              title="From the Gulf or anywhere else"
              subtitle="Apply through your nearest Pakistani embassy or consulate. IRCC lists what to bring:"
            />
            <ul className="mt-8 space-y-3">
              {ABROAD.map((b) => (
                <li key={b} className="flex gap-3 text-ink-600 text-pretty">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pt-14">
            <Callout title="A relative in Pakistan can sometimes apply for you">
              They need everything in the list, plus an affidavit on Rs 20 judicial stamp paper saying
              they will receive the certificate for you, and an authority letter in their name to collect
              it. IRCC’s <Official href={IRCC.pakistan}>Pakistan page</Official> has samples of both.
              <span className="mt-4 block">
                And remember the second certificate: if you have lived in the Gulf country for 6 months or
                more, you need one from there too.
              </span>
            </Callout>
          </div>
        </div>
      </Section>

      {/* ===================== TRIPS ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Before you file" title="Four things that catch people out" />
        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {[
            ['Police fingerprints are not biometrics', 'Fingerprints taken for the certificate are separate from the biometrics IRCC needs for your application, which you give at a visa application centre.'],
            ['The High Commission can’t help', 'IRCC says the Canadian High Commission in Islamabad cannot help you get a police certificate. It comes from Pakistani authorities only.'],
            ['Issued too early', 'A certificate from your current country older than 6 months on the day you submit is out of date. Time the request to your application.'],
            ['Not in English or French', 'Send a copy of the original and a certified translation into English or French.'],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-gold-500/60 pl-5">
              <dt className="font-serif text-xl">{t}</dt>
              <dd className="mt-1.5 text-ink-600 text-pretty">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="Police certificate questions" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-ink-600 text-pretty">
          Also from Pakistan:{' '}
          <Link href="/canada-immigration-from-pakistan/medical-exam" className="font-semibold text-accent-500 link-underline">
            the immigration medical exam
          </Link>{' '}
          and{' '}
          <Link href="/canada-immigration-from-pakistan/biometrics" className="font-semibold text-accent-500 link-underline">
            giving biometrics
          </Link>
          .
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="October 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Getting your file together"
        title="Have your documents checked before you submit"
        subtitle="Bring your police certificates, passport and the rest of your file. We’ll tell you what is missing, what is out of date, and what an officer is likely to query. No one can guarantee an outcome, and we won’t."
        page={PAGE}
        waMessage="Hi, I need help with my police certificates for a Canadian application."
      />
    </>
  );
}
