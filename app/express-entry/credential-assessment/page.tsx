import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { OnThisPage } from '@/components/OnThisPage';
import { CompareTable } from '@/components/CompareTable';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection, ShortAnswer, Prose } from '@/components/ui';
import { SERVICE } from '@/lib/site';

/**
 * Express Entry: the Educational Credential Assessment (ECA) for Pakistani degrees.
 *
 * Written on the owner's instruction on 22 November 2026, from official pages
 * read that day:
 * - IRCC: the ECA page (modified 16 Oct 2026), the FSW eligibility page
 *   (18 Nov 2026) and the Express Entry profile documents page.
 * - The law: IRPR SOR/2002-227 ss. 73, 75 and 78 (Justice Laws, current to
 *   29 Oct 2026) and the Ministerial Instructions respecting the Express Entry
 *   system, ss. 3, 11 and 17 (signed 17 Nov 2026, page modified 18 Nov 2026).
 *   The 5-year validity and every points figure on this page come from these.
 * - The designated organisations' own pages: WES's Required Documents tool
 *   (results for a BSc from the University of the Punjab and from LUMS, ECA for
 *   IRCC); ICAS's Pakistan requirements page; IQAS's country-specific ECA
 *   document requirements (PDF, October 2026), its Pakistan education guide and
 *   its immigration page; ICES's country-specific and ECA requirements pages;
 *   CES's wind-down page and FAQ; MCC's ECA page; PEBC's document evaluation page.
 * - HEC's degree attestation page and IBCC's attestation introduction.
 * Not read: CES's Pakistan page (blocked, and CES no longer takes new
 * applications); WES's degree equivalency preview (it asks for a name and email).
 *
 * No fees or processing times: each body publishes its own. MOFA attestation is
 * not mentioned because no page above asks for it.
 *
 * Our own suggestions, marked as such on the page: which body suits which
 * documents, and asking the body first when you hold a two-year bachelor's and
 * a two-year master's.
 */
export const metadata: Metadata = {
  title: 'ECA for Pakistani Degrees: HEC, WES and 2-Year BA',
  description:
    'Getting a Pakistani degree assessed for Express Entry: which ECA body to use, HEC attestation, the two-year BA or BSc question and the five-year validity.',
  alternates: { canonical: '/express-entry/credential-assessment' },
};

const PAGE = 'express-entry-eca';
const CHECKED = '22 November 2026';
const a = 'font-semibold text-accent-500 link-underline';

const SRC = {
  ircc: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html',
  fsw: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
  profileDocs: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents.html',
  irpr75: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/page-11.html',
  irpr78: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/page-12.html',
  mi: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
  wes: 'https://apps.wes.org/required-documents',
  icas: 'https://www.icascanada.ca/new/immigration-to-canada.aspx/document-detail.aspx?document=be9ed032-0d4e-4bc1-aa6b-af6ee26fa4d0',
  iqasDocs: 'https://www.alberta.ca/system/files/im-eca-required-documents.pdf',
  iqasGuide: 'https://www.alberta.ca/iqas-education-guide-pakistan',
  iqas: 'https://www.alberta.ca/iqas-immigration.aspx',
  icesCountry: 'https://www.bcit.ca/ices/country-specific-information/',
  icesDocs: 'https://www.bcit.ca/ices/eca/requirements/',
  ces: 'https://learn.utoronto.ca/ces',
  cesFaq: 'https://learn.utoronto.ca/comparative-education-service/faq',
  mcc: 'https://mcc.ca/credentials-and-services/services/educational-credential-assessment/',
  pebc: 'https://pebc.ca/pharmacists/document-evaluation/general-information/',
  hec: 'https://www.hec.gov.pk/english/services/students/DAS/Pages/Degree-Attestation.aspx',
  ibcc: 'https://ibcc.edu.pk/attestation/',
} as const;

function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className={a}>
      {children}
    </a>
  );
}

const STEPS: [string, string][] = [
  [
    'Check the checklist for your exact degree',
    'Each body publishes its own Pakistan requirements. WES builds yours from the university and degree you enter.',
  ],
  [
    'Make your CNIC and documents match',
    'HEC will not start an attestation unless the personal details on your CNIC and on all your educational documents are identical.',
  ],
  [
    'Get HEC attestation online (WES, ICAS, IQAS)',
    'Apply on HEC’s online portal for your degree and transcript (result cards or detailed marks certificates). Your university verifies the case, HEC reviews it, and you download the e-Attestation certificate.',
  ],
  [
    'Or have your university send records (ICES)',
    'ICES wants official records straight from the awarding university, by post or from a university email account, never handled by you.',
  ],
  [
    'Upload or send, with your reference number',
    'WES asks for the e-Attestation certificate and the attested documents in one PDF per credential. Some universities, such as LUMS, can send records to WES electronically.',
  ],
  [
    'Translate only what needs it',
    'ICAS asks for a word-for-word translation of any document not in English or French. ICES asks for a literal certified translation and contacts you if it needs one.',
  ],
];

const MISTAKES: [string, string][] = [
  [
    'A wrong institution or degree name',
    'WES says it may ask for more documents if what you enter is wrong. Name the university as your degree does. ICAS wants proof of any name change.',
  ],
  [
    'Missing mark sheets',
    'WES wants every university mark sheet showing paper titles, marks and the examination passed. IQAS wants every page, front and back, including stamps and barcodes.',
  ],
  [
    'An attestation HEC has not confirmed',
    'WES and IQAS accept HEC-attested documents only once HEC confirms the attestation on its website.',
  ],
  [
    'HEC copies sent to ICES',
    'ICES does not accept HEC-attested documents. It also lists Pakistani institutions whose credentials it will not assess.',
  ],
  [
    'An expired ECA',
    'IRCC refuses an application made with an ECA five or more years old. In the pool, the points stop when it expires.',
  ],
  [
    'Treating the ECA as a licence',
    'IRCC says an ECA does not guarantee a job in your field or a licence for a regulated profession. Licences come from the province or territory.',
  ],
];

const FAQS = [
  {
    q: 'Do I need an ECA for Express Entry if I studied in Pakistan?',
    a: 'For the Federal Skilled Worker Program, yes: a principal applicant with foreign education needs a completed credential and an ECA for immigration purposes. For the Canadian Experience Class or the Federal Skilled Trades Program, IRCC asks for one if you want points for education outside Canada.',
  },
  {
    q: 'Will my two-year BA or BSc count as a bachelor’s degree?',
    a: 'It counts, but not necessarily as a bachelor’s. IQAS’s education guide for Pakistan says a two-year pass BA, BCom or BSc generally compares to a two-year post-secondary diploma. Under IRCC’s points rules, a two-year credential earns fewer points than one of three years or more. The ECA report decides which applies to you.',
  },
  {
    q: 'Does WES need a sealed envelope from my Pakistani university?',
    a: 'Not for the two universities we checked on 22 November 2026, the University of the Punjab and LUMS. For a BSc from either, WES asked you to upload HEC’s e-Attestation certificate with the attested degree and mark sheets. LUMS can also send records electronically. Check WES’s Required Documents tool for your own university.',
  },
  {
    q: 'Do I need MOFA attestation for an ECA?',
    a: 'IRCC’s ECA page does not ask for MOFA attestation. On 22 November 2026, the Pakistan pages of WES, ICAS, IQAS and ICES did not ask for it either. They work from HEC attestation or, for ICES, records sent by the university.',
  },
  {
    q: 'How long is an ECA valid for Express Entry?',
    a: 'It must be less than five years old when you submit your profile and when you apply for permanent residence. This is set in the Immigration and Refugee Protection Regulations and the Express Entry Ministerial Instructions. IRCC refuses an application made with an expired ECA.',
  },
  {
    q: 'Can I still apply to CES at the University of Toronto?',
    a: 'No. CES stopped accepting new applications on 22 October 2026. Applications paid for before then are still being processed, and reports already issued keep their issue date.',
  },
  {
    q: 'Do I need to send my matric or FSc certificates?',
    a: 'Usually not. WES, ICAS and IQAS say school documents are not needed if you have a completed post-secondary credential. If your highest credential is a diploma, ICAS asks for IBCC-attested copies in an envelope sealed by IBCC.',
  },
];

export default function CredentialAssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Express Entry · Federal Skilled Worker · From Pakistan"
        title={
          <>
            Your Pakistani degree,{' '}
            <span className="text-gold-300">assessed for Canada.</span>
          </>
        }
        subtitle="The Educational Credential Assessment decides whether your degree counts for Express Entry, and what it is worth. Which body to use, where HEC fits in, and what happens to a two-year BA or BSc."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a free consultation <span aria-hidden="true">→</span>
        </Link>
        <Link href="/express-entry/federal-skilled-worker" className="btn btn-ghost">
          The Federal Skilled Worker guide
        </Link>
      </PageHero>
      <ShortAnswer question="How do I get my Pakistani degree assessed for Canada, and will my two-year BA or BSc count?">
        You apply to an IRCC-designated organisation, such as WES, ICAS or IQAS, which work from your
        HEC-attested degree and mark sheets. A two-year BA or BSc still counts. IQAS’s Pakistan guide
        compares it to a two-year diploma, not a bachelor’s, which earns fewer points. Get the ECA before
        you create your Express Entry profile.
      </ShortAnswer>
      <OnThisPage path="/express-entry/credential-assessment" />

      {/* ===================== WHY IT MATTERS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Eligibility and points"
          title="Why does the ECA matter for Express Entry?"
          subtitle="An ECA checks that a foreign degree, diploma or certificate is genuine and says what it equals in Canada. IRCC uses it twice."
        />
        <Prose>
          <p>
            <strong>For eligibility.</strong> Under the Federal Skilled Worker Program, a principal
            applicant educated outside Canada must have a completed credential and an ECA “for
            immigration purposes”. Without it, you do not meet the program’s{' '}
            <Out href={SRC.fsw}>minimum requirements</Out>.
          </p>
          <p>
            <strong>For points.</strong> Education earns up to 25 Federal Skilled Worker selection
            points, under section 78 of the Regulations. It also earns Comprehensive Ranking System
            (CRS) points in the pool. Foreign education earns neither without an ECA. A spouse or
            partner coming with you can add CRS points for their education, again only with an ECA.
          </p>
          <p>
            IRCC asks for the ECA in two cases: you are applying under the Federal Skilled Worker
            Program, or you want points for education outside Canada. For the Canadian Experience Class
            or the Federal Skilled Trades Program, it is about points. See the{' '}
            <Link href="/express-entry/federal-skilled-worker" className={a}>
              Federal Skilled Worker guide
            </Link>{' '}
            and the{' '}
            <Link href="/express-entry" className={a}>
              Express Entry overview
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== WHICH BODY ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow={`Checked on ${CHECKED}`}
          title="Which organisation should assess a Pakistani degree?"
          subtitle="IRCC accepts an ECA from any organisation it has designated. What differs is how each one handles Pakistani documents."
        />
        <CompareTable
          caption={`IRCC-designated ECA organisations and what each asks for from Pakistan, as checked on ${CHECKED}`}
          columns={['Organisation', 'What it asks for from Pakistan', 'Worth knowing']}
          rows={[
            {
              label: <Out href={SRC.wes}>WES (World Education Services)</Out>,
              cells: [
                'Your degree and all mark sheets attested by HEC, uploaded with HEC’s e-Attestation certificate. Some universities, such as LUMS, can send records electronically instead.',
                'HEC must confirm the attestation on its website. A CNIC form is needed only for physical (stamp or ticket) attestations.',
              ],
            },
            {
              label: <Out href={SRC.icas}>ICAS (International Credential Assessment Service of Canada)</Out>,
              cells: [
                'HEC e-Attestation certificates for the degree and the transcript or marks certificates, which ICAS checks with HEC’s portal.',
                'HEC and IBCC need not fill in ICAS’s official records form. Diplomas go as IBCC-attested copies in an IBCC-sealed envelope.',
              ],
            },
            {
              label: <Out href={SRC.iqas}>IQAS (Government of Alberta)</Out>,
              cells: [
                'The degree and transcript attested by HEC, uploaded to the IQAS portal, with ID showing the CNIC or passport number HEC used.',
                'HEC must confirm the attestation on its website. Preston University graduates must also show where they studied.',
              ],
            },
            {
              label: <Out href={SRC.icesCountry}>ICES (British Columbia Institute of Technology)</Out>,
              cells: [
                'Official records sent straight from the awarding university, by post or from a university email account.',
                'Does not accept HEC-attested documents. It lists Pakistani institutions whose credentials it will not assess.',
              ],
            },
            {
              label: <Out href={SRC.ces}>CES (University of Toronto)</Out>,
              cells: [
                'Stopped taking new applications on 22 October 2026.',
                'IRCC still listed it on 22 November 2026. Reports already issued keep their issue date.',
              ],
            },
            {
              label: <Out href={SRC.mcc}>Medical Council of Canada</Out>,
              cells: [
                'Physicians (NOC 31100, 31101, 31102): an ECA of the medical degree, requested through physiciansapply.ca once the final degree is source-verified, or once the transcript is, with the degree also sent for verification.',
                'An ECA does not give the right to practise medicine.',
              ],
            },
            {
              label: <Out href={SRC.pebc}>Pharmacy Examining Board of Canada</Out>,
              cells: ['Pharmacists (NOC 31120) who need a licence to practise.', 'Apply through PEBC’s own document evaluation process.'],
            },
            {
              label: 'Canadian Architectural Certification Board',
              cells: [
                'Architects (NOC 21200) who need a licence to practise.',
                'IRCC still accepts a valid ECA from another body issued before 31 October 2024.',
              ],
            },
          ]}
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Callout title="Our suggestion">
            <p>
              If your degree is already e-attested by HEC, WES, ICAS and IQAS can all work from that
              attestation. If it is not, the HEC step comes first for those three. ICES is the one that
              needs your university to send records itself. Whichever you pick, run your exact
              university and degree through that body’s own checklist before you pay.
            </p>
          </Callout>
          <Callout title="Doctors, pharmacists and architects">
            <p>
              The Regulations say that where a professional body has been designated for your
              occupation, your ECA must come from it. IRCC has designated the Medical Council of Canada
              for physicians. It has designated the pharmacy and architecture boards for pharmacists and
              architects who need a licence to practise. Its <Out href={SRC.ircc}>ECA page</Out> has the
              details.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== PROCESS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="From Pakistan, step by step"
          title="How do you prepare Pakistani documents for an ECA?"
          subtitle="For most university degrees the work happens at HEC, not in a sealed envelope. These steps come from each body’s Pakistan page and from HEC."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="card p-7">
              <p className="font-serif text-4xl leading-none text-gold-600">{i + 1}</p>
              <p className="mt-4 font-serif text-xl">{t}</p>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Callout title="Where sealed envelopes still matter">
            <p>
              For a university degree, WES, ICAS and IQAS asked for no sealed envelope from the
              university on {CHECKED}. They rely on HEC’s attestation, which they check online. Sealed
              envelopes still apply to diplomas and school results sent by <Out href={SRC.ibcc}>IBCC</Out>{' '}
              or a board. ICES wants records bearing the university’s own seals and signatures.
            </p>
          </Callout>
          <Callout title="What about MOFA attestation?">
            <p>
              IRCC’s ECA page does not ask for MOFA attestation. On {CHECKED}, none of the Pakistan
              pages we read from WES, ICAS, IQAS or ICES asked for it either. Follow the body’s own page
              if that changes. When MOFA attestation is needed, and how its online system works, is in{' '}
              <Link href="/blog/mofa-online-attestation" className={a}>
                MOFA online attestation
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== TWO-YEAR DEGREE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The two-year degree question"
          title="Will a two-year BA or BSc count as a bachelor’s degree?"
          subtitle="It counts, but the law scores credentials by length, and the ECA decides which length yours is."
        />
        <Prose>
          <p>
            Both points systems separate a two-year post-secondary credential from one of three years or
            more. The Federal Skilled Worker points are in section 78 of the{' '}
            <Out href={SRC.irpr78}>Regulations</Out>. The CRS points are in section 11 of the{' '}
            <Out href={SRC.mi}>Express Entry Ministerial Instructions</Out>.
          </p>
          <p>
            Under section 78, a two-year credential earns 19 of the 25 education points, against 21 for
            three years or more and 23 for a master’s. In the CRS, a single applicant’s two-year credential
            earns 98 points, against 120 for three years or more.
          </p>
        </Prose>
        <CompareTable
          caption={`Education points by ECA result, from IRPR section 78 and the Express Entry Ministerial Instructions section 11, as checked on ${CHECKED}`}
          columns={['ECA result', 'FSW points (IRPR s. 78)', 'CRS points, single / with spouse (MI s. 11)']}
          rows={[
            { label: 'Two-year post-secondary credential', cells: ['19', '98 / 91'] },
            { label: 'Post-secondary credential of three years or more', cells: ['21', '120 / 112'] },
            { label: 'Two or more credentials, one of three years or more', cells: ['22', '128 / 119'] },
            { label: 'Master’s-level credential', cells: ['23', '135 / 126'] },
          ]}
        />
        <Prose>
          <p>
            <strong>What IQAS says.</strong> Its{' '}
            <Out href={SRC.iqasGuide}>education guide for Pakistan</Out> says a pass BA, BCom or BSc
            traditionally takes two years of full-time study. It generally compares to a two-year
            post-secondary diploma. A master’s taken after a pass bachelor’s, together with it, generally
            compares to a four-year bachelor’s. So does the newer four-year bachelor (honours). IQAS notes
            the guide is not an official assessment.
          </p>
          <p>
            <strong>What the others say.</strong> The Pakistan pages of WES, ICAS and ICES, as we read
            them on {CHECKED}, do not say how they assess a two-year degree. Only your report will.
          </p>
          <p>
            <strong>Our suggestion.</strong> If you hold a two-year bachelor’s and a two-year master’s,
            ask the body before you apply which credentials to send. IRCC says points for more than one
            credential need an ECA for each. WES’s checklist says a master’s holder need not submit the
            bachelor’s. Try both results in our{' '}
            <Link href="/tools/fsw-67-calculator" className={a}>
              FSW points calculator
            </Link>{' '}
            and{' '}
            <Link href="/tools/crs-calculator" className={a}>
              CRS calculator
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== VALIDITY AND TIMING ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Five years, checked twice"
          title="How long is an ECA valid, and when should you get it?"
          subtitle="The five-year limit is set in law, and IRCC applies it at two moments."
        />
        <Prose>
          <p>
            <strong>The law.</strong> Section 75(2)(e) of the{' '}
            <Out href={SRC.irpr75}>Regulations</Out> requires a Federal Skilled Worker’s ECA to be less
            than five years old on the date the application is made. Sections 3 and 11 of the Express
            Entry Ministerial Instructions apply the same limit to your profile. Once the ECA is five
            years old, its points stop.
          </p>
          <p>
            <strong>In practice.</strong> IRCC’s <Out href={SRC.ircc}>ECA page</Out> says the ECA must
            be valid both when you complete your profile and when you apply. An application with an
            expired ECA is refused. If you stay in the pool, keep it valid the whole time.
          </p>
          <p>
            <strong>Order of steps.</strong> IRCC lists the ECA report among the{' '}
            <Out href={SRC.profileDocs}>documents you need to create a profile</Out>. That applies if you
            use the Federal Skilled Worker Program or want points for foreign education. The profile asks
            for the report’s reference number, so the ECA comes first. HEC attestation, which depends on
            your university, comes before that. Fees and processing times are on each organisation’s own
            site. Still choosing a language test? See{' '}
            <Link href="/blog/ielts-pte-core-celpip-pakistan" className={a}>
              IELTS, PTE Core and CELPIP in Pakistan
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== MISTAKES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Avoidable delays"
          title="What mistakes hold up or sink an ECA?"
          subtitle="Each of these comes from a body’s own rules or IRCC’s ECA page."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MISTAKES.map(([t, d]) => (
            <div key={t} className="card p-7">
              <h3 className="font-serif text-xl text-ink-900">{t}</h3>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow={`Read on ${CHECKED}`}
          title="What do the official sources say?"
          subtitle={`Everything on this page comes from these pages, as they stood on ${CHECKED}.`}
        />
        <Prose>
          <ul>
            <li>
              IRCC, <Out href={SRC.ircc}>Educational credential assessment for Express Entry</Out> (modified
              16 October 2026)
            </li>
            <li>
              IRCC, <Out href={SRC.fsw}>Federal Skilled Worker Program eligibility</Out> (modified 18 November
              2026)
            </li>
            <li>
              IRCC, <Out href={SRC.profileDocs}>Documents for an Express Entry profile</Out>
            </li>
            <li>
              Immigration and Refugee Protection Regulations, <Out href={SRC.irpr75}>sections 73 and 75</Out>{' '}
              and <Out href={SRC.irpr78}>section 78</Out> (current to 29 October 2026)
            </li>
            <li>
              IRCC, <Out href={SRC.mi}>Ministerial Instructions respecting the Express Entry system</Out>,
              sections 3, 11 and 17 (modified 18 November 2026)
            </li>
            <li>
              WES, <Out href={SRC.wes}>Required Documents</Out> (results for a BSc from the University of the
              Punjab and from LUMS, ECA for IRCC)
            </li>
            <li>
              ICAS, <Out href={SRC.icas}>Pakistan document requirements</Out>
            </li>
            <li>
              IQAS, <Out href={SRC.iqasDocs}>ECA country-specific document requirements</Out> (October 2026),{' '}
              <Out href={SRC.iqasGuide}>International Education Guide: Pakistan</Out> and{' '}
              <Out href={SRC.iqas}>assessment for immigration</Out>
            </li>
            <li>
              ICES, <Out href={SRC.icesCountry}>country-specific information</Out> and{' '}
              <Out href={SRC.icesDocs}>ECA document requirements</Out>
            </li>
            <li>
              CES, <Out href={SRC.ces}>winding down notice</Out> and <Out href={SRC.cesFaq}>FAQ</Out>
            </li>
            <li>
              Medical Council of Canada, <Out href={SRC.mcc}>Educational Credential Assessment</Out>; Pharmacy
              Examining Board of Canada, <Out href={SRC.pebc}>document evaluation</Out>
            </li>
            <li>
              Higher Education Commission, <Out href={SRC.hec}>Degree Attestation</Out>; IBCC,{' '}
              <Out href={SRC.ibcc}>Attestation</Out>
            </li>
          </ul>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="What else do people ask about the ECA?" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="22 November 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you pay for an assessment"
        title="Check what your degree needs before you send it"
        subtitle="Tell us your university, your degree and how long it took. We will go through what the designated organisations ask for and how the result could affect your Express Entry profile. The assessment itself is the organisation’s decision."
        page={PAGE}
        service={SERVICE.WORK_PERMIT}
        targetCountry="Canada"
        waMessage="Hi, I’d like help with an ECA for my Pakistani degree."
      />
    </>
  );
}
