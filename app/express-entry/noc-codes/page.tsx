import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { OnThisPage } from '@/components/OnThisPage';
import { CompareTable } from '@/components/CompareTable';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection, Prose, ShortAnswer } from '@/components/ui';
import { SERVICE } from '@/lib/site';

/**
 * Express Entry: finding your NOC 2021 code and TEER category, for applicants in Pakistan.
 *
 * Written on the owner's instruction (approved 22 November 2026) from official pages read that
 * day: IRCC's "Find your NOC" page and its NOC table (page details 2025-06-27); the NOC 2021
 * Version 1.0 unit-group page on noc.esdc.gc.ca for every code in the table (lead statement,
 * main duties, exclusions, employment requirements and TEER read from each); Statistics Canada's
 * NOC 2021 Version 1.0 introduction (modified 2023-09-14); IRCC's FSW, CEC, FST, job offer and
 * category-based selection pages (all 2026-11-18); IRCC's high-wage occupations page (2026-10-16,
 * list in effect 3 November 2026); IRCC's supporting documents page (2026-04-23); ESDC's foreign
 * credential recognition page (2026-11-12); IRPR ss. 2, 73, 75, 87.1 and 87.2 and IRPA s. 40
 * (both current to 2026-10-29); and the Ministerial Instructions respecting the Express Entry
 * system (signed 17 November 2026, page 2026-11-18), ss. 1, 15.2 and 25.
 *
 * Figures printed: the work periods and look-back periods (IRPR ss. 75, 87.1, 87.2), 30 hours
 * (IRPR s. 73), the 100/70/50 points and 2x/1.5x/1.3x levels (Ministerial Instructions s. 15.2),
 * five years (IRPA s. 40(2)(a)) and 516 unit groups (Statistics Canada's classification). No
 * salaries, fees or processing times. The high-wage levels and the category lists are dated:
 * re-check both monthly, and when IRCC changes either.
 *
 * Our own suggestion, not IRCC's: the job-to-code pairings are likely starting points, not
 * determinations; and the reference-letter advice beyond "duties, dates and salary" (hours,
 * letterhead, signature, the employer's own words) is ours.
 */
export const metadata: Metadata = {
  title: 'Find Your NOC Code and TEER for Express Entry',
  description:
    'Which NOC 2021 code and TEER fit your job in Pakistan: 19 common jobs matched to official codes, how to match duties, and why it matters for Express Entry.',
  alternates: { canonical: '/express-entry/noc-codes' },
};

const PAGE = 'express-entry-noc-codes';
const CHECKED = '22 November 2026';
const a = 'font-semibold text-accent-500 link-underline';

/** A unit group's page on the official NOC 2021 Version 1.0 site, run by ESDC. */
const noc = (code: string) =>
  `https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=${code}&version=2021.0`;

const SRC = {
  findNoc: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/find-national-occupation-code.html',
  nocSite: 'https://noc.esdc.gc.ca/?GoCTemplateCulture=en-CA',
  statcan: 'https://www.statcan.gc.ca/en/subjects/standard/noc/2021/introductionV1',
  fsw: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
  cec: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html',
  fst: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-trades.html',
  irpr: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html',
  mi: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
  highWage: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/high-wage.html',
  categories: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
  jobOffer: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html',
  documents: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/common-supporting-documents.html',
  irpa40: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html',
  credentials: 'https://www.canada.ca/en/employment-social-development/programs/foreign-credential-recognition.html',
} as const;

function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className={a}>
      {children}
    </a>
  );
}

/** IRCC's own TEER descriptions, from its Find your NOC page. */
const TEERS: [string, string, boolean][] = [
  ['TEER 0', 'Management jobs.', true],
  ['TEER 1', 'A university degree.', true],
  ['TEER 2', 'A college diploma, 2 or more years of apprenticeship, or a supervisory job.', true],
  ['TEER 3', 'A college diploma, under 2 years of apprenticeship, or over 6 months’ on-the-job training.', true],
  ['TEER 4', 'A high school diploma or several weeks’ on-the-job training.', false],
  ['TEER 5', 'A short work demonstration and no formal education.', false],
];

type Job = { job: string; codes: [string, string][]; teer: string; licence: string; check: string };

/**
 * Each code, title and TEER checked on its NOC 2021 page and in IRCC's NOC table on
 * 22 November 2026. "Licence" restates the NOC page's employment requirements; "Not listed"
 * means the NOC names no licence. "Check this" uses the page's own duties and exclusions.
 */
const JOBS: Job[] = [
  { job: 'Software engineer or developer', codes: [['21231', 'Software engineers and designers'], ['21232', 'Software developers and programmers']], teer: '1', licence: 'Only to practise as a P.Eng. (21231)', check: 'Designing and integrating systems fits 21231; mainly writing code, 21232; websites, 21234.' },
  { job: 'Chartered accountant (ACCA or CA)', codes: [['11100', 'Financial auditors and accountants']], teer: '1', licence: 'Yes, to be a CPA or do public accounting', check: 'Auditing, or running accounts and statements. Bookkeeping alone fits 12200 (TEER 2).' },
  { job: 'Bank officer (credit, loans, personal banking)', codes: [['63102', 'Financial sales representatives']], teer: '3', licence: 'Usually, to sell investments', check: 'Loan officer and personal banker are listed titles. Running a branch fits 10021.' },
  { job: 'Bank cashier or customer service officer', codes: [['64400', 'Customer services representatives - financial institutions']], teer: '4', licence: 'Not listed', check: 'Counter and account work. TEER 4 does not count for Express Entry.' },
  { job: 'Bank branch manager', codes: [['10021', 'Banking, credit and other investment managers']], teer: '0', licence: 'Not listed', check: 'You must plan, direct and evaluate a branch. The title alone is not enough.' },
  { job: 'Civil engineer', codes: [['21300', 'Civil engineers']], teer: '1', licence: 'Yes (P.Eng.)', check: 'Planning and designing projects. Technician work may fit 22300 (TEER 2).' },
  { job: 'Electrical engineer', codes: [['21310', 'Electrical and electronics engineers']], teer: '1', licence: 'Yes (P.Eng.)', check: 'Designing electrical systems. Technician work fits 22310; wiring is a trade.' },
  { job: 'Mechanical engineer', codes: [['21301', 'Mechanical engineers']], teer: '1', licence: 'Yes (P.Eng.)', check: 'Designing machines and systems. Technician work may fit 22301 (TEER 2).' },
  { job: 'Registered nurse', codes: [['31301', 'Registered nurses and registered psychiatric nurses']], teer: '1', licence: 'Yes, in every province', check: 'Practical nurses fit 32101 (TEER 2); nurse aides, 33102 (TEER 3).' },
  { job: 'Doctor (MBBS, general practice)', codes: [['31102', 'General practitioners and family physicians']], teer: '1', licence: 'Yes: exams and a provincial licence', check: 'Specialists fit 31100, or 31101 for surgery.' },
  { job: 'Pharmacist', codes: [['31120', 'Pharmacists']], teer: '1', licence: 'Yes, for community and hospital work', check: 'Industrial pharmacists, in research and quality control, share this code.' },
  { job: 'School teacher', codes: [['41220', 'Secondary school teachers'], ['41221', 'Elementary school and kindergarten teachers']], teer: '1', licence: 'Yes: a provincial teaching certificate', check: 'The level you taught decides. Teacher assistants fit 43100.' },
  { job: 'University lecturer', codes: [['41200', 'University professors and lecturers']], teer: '1', licence: 'Only in some fields', check: 'College teaching fits 41210; teaching assistants, 41201.' },
  { job: 'Sales manager', codes: [['60010', 'Corporate sales managers']], teer: '0', licence: 'Not listed', check: 'You must direct a sales department. Mainly selling fits 62100 or 64101.' },
  { job: 'HR officer', codes: [['12101', 'Human resources and recruitment officers']], teer: '2', licence: 'Not listed', check: 'Recruiting and staffing. Writing HR policy fits 11200 (TEER 1).' },
  { job: 'Electrician', codes: [['72200', 'Electricians (except industrial and power system)']], teer: '2', licence: 'Yes, in most provinces', check: 'Factory, plant or mine work fits 72201.' },
  { job: 'Welder', codes: [['72106', 'Welders and related machine operators']], teer: '2', licence: 'Only in Alberta', check: 'Manual welding, and running set-up welding machines.' },
  { job: 'Truck driver', codes: [['73300', 'Transport truck drivers']], teer: '3', licence: 'Yes: a Class 1 or 3 (A or D) licence', check: 'Heavy trucks and tractor-trailers. Delivery vans fit 75201 (TEER 5).' },
  { job: 'Chef or cook', codes: [['62200', 'Chefs'], ['63200', 'Cooks']], teer: '2 / 3', licence: 'Chefs: yes, or equivalent. Cooks: voluntary', check: 'Chefs plan menus and supervise. Kitchen helpers fit 65201 (TEER 5).' },
];

/**
 * Points from the Ministerial Instructions, s. 15.2(1). Each code's level read from IRCC's
 * high-wage occupations page (list in effect 3 November 2026) on 22 November 2026.
 */
const HIGH_WAGE: [string, string, string][] = [
  ['At least 2 times the median wage', '100', '10021, 31102, 41200, 60010'],
  ['1.5 times, but under 2 times', '70', '21231, 21232, 21300, 21301, 21310, 31120, 31301, 41220, 41221'],
  ['1.3 times, but under 1.5 times', '50', '11100'],
  ['Not on the list', '0', '12101, 62200, 63102, 63200, 64400, 72106, 72200, 73300'],
];

const JOB_COLUMNS = ['Job in Pakistan', 'Likely NOC 2021 unit group', 'TEER', 'Licence in Canada', 'Check this'];

const FAQS = [
  {
    q: 'What is a NOC code?',
    a: 'It is the five-digit number of an occupation group in Canada’s National Occupational Classification. IRCC has used NOC 2021 Version 1.0 since 16 November 2022. The second digit is the TEER category.',
  },
  {
    q: 'Which TEER categories count for Express Entry?',
    a: 'The Federal Skilled Worker Program and the Canadian Experience Class count TEER 0, 1, 2 and 3. The Federal Skilled Trades Program counts named trade groups, all TEER 2 or 3. TEER 4 and 5 work counts for none of them.',
  },
  {
    q: 'Can I pick the NOC code that matches my job title?',
    a: 'No. The code follows what you did, not what you were called. You must have performed the actions in the lead statement and a substantial number of the main duties, including all essential duties.',
  },
  {
    q: 'Does a high salary in Pakistan put my job on the high-wage list?',
    a: 'No. IRCC sets each level from Canadian wage data for the whole NOC code, not from anyone’s salary. Job-offer points depend only on the code’s level.',
  },
  {
    q: 'What if my reference letters do not match my NOC code?',
    a: 'The work may not count, and a Federal Skilled Worker application that fails the minimum requirements is refused. A code your documents do not support can also be treated as misrepresentation, which carries a five-year bar.',
  },
  {
    q: 'Do I need a Canadian licence for my profession?',
    a: 'Yes, if your job is regulated where you will work, as doctors, nurses and engineers are. A provincial regulator issues the licence, separately from immigration.',
  },
];

export default function NocCodesPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Express Entry · NOC 2021"
        title={
          <>
            Your job title doesn’t decide your NOC code.{' '}
            <span className="text-gold-300">Your duties do.</span>
          </>
        }
        subtitle="The five-digit code decides which Express Entry programme you can use, whether your work earns points, and which category draws you fit. Here are 19 common jobs in Pakistan matched to their likely codes."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a free consultation <span aria-hidden="true">→</span>
        </Link>
        <Link href="/express-entry" className="btn btn-ghost">
          The Express Entry guide
        </Link>
      </PageHero>
      <ShortAnswer question="Which NOC code is my job in Pakistan, and why does it matter?">
        Your NOC code is the NOC 2021 unit group whose lead statement and main duties match the work
        you did, whatever your job title. It matters because only TEER 0 to 3 work counts for the
        Federal Skilled Worker Program and the Canadian Experience Class. The code also decides
        job-offer points and category draws.
      </ShortAnswer>
      <OnThisPage path="/express-entry/noc-codes" />

      {/* ===================== NOC AND TEER ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="NOC 2021, in plain terms" title="What are NOC codes and TEER categories?" />
        <Prose>
          <p>
            The National Occupational Classification (NOC) is Canada’s list of occupations, kept by ESDC
            and Statistics Canada. IRCC has used NOC 2021 Version 1.0 since 16 November 2022, its{' '}
            <Out href={SRC.findNoc}>Find your NOC page</Out> says. Four-digit codes are from the old NOC
            2016.
          </p>
          <p>
            Each occupation group, called a unit group, has a five-digit code, and{' '}
            <Out href={SRC.statcan}>Statistics Canada</Out> counts 516. The first digit is the field of
            work; the second is the TEER. So 21231 is TEER 1, and 73300 is TEER 3.
          </p>
          <p>
            TEER stands for training, education, experience and responsibilities. It describes what the
            occupation usually needs, not what you studied, as below.
          </p>
        </Prose>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEERS.map(([t, d, counts]) => (
            <li key={t} className="card p-6">
              <p className="font-serif text-2xl text-ink-900">{t}</p>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
              <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.12em] ${counts ? 'text-gold-600' : 'text-ink-500'}`}>
                {counts ? 'Counts for FSW and CEC' : 'Not for Express Entry'}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ===================== THE TABLE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow={`19 common jobs, checked ${CHECKED}`}
          title="Which NOC code is my job in Pakistan?"
          subtitle="Each code links to its official NOC page. Where Canada requires a licence, getting it is a separate step from immigration."
        />
        <div className="not-prose mt-10 rounded-2xl border border-rule bg-paper">
          <table role="table" className="block w-full text-left text-sm sm:table">
            <caption className="sr-only">
              Common jobs in Pakistan with their likely NOC 2021 code, official title, TEER category,
              Canadian licensing note and what to check, as of {CHECKED}
            </caption>
            <thead role="rowgroup" className="hidden border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500 sm:table-header-group">
              <tr role="row">
                {JOB_COLUMNS.map((c) => (
                  <th key={c} role="columnheader" scope="col" className="px-4 py-3 font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody role="rowgroup" className="block divide-y divide-rule sm:table-row-group">
              {JOBS.map((r) => (
                <tr key={r.job} role="row" className="block px-4 py-4 sm:table-row sm:p-0">
                  <th role="rowheader" scope="row" className="block font-semibold text-ink-900 sm:table-cell sm:px-4 sm:py-3 sm:align-top">
                    {r.job}
                  </th>
                  {[
                    r.codes.map(([code, title], i) => (
                      <span key={code} className="block">
                        {i > 0 ? 'or ' : ''}
                        <Out href={noc(code)}>{code}</Out> {title}
                      </span>
                    )),
                    r.teer,
                    r.licence,
                    r.check,
                  ].map((cell, j) => (
                    <td key={j} role="cell" className="mt-3 block text-ink-600 sm:mt-0 sm:table-cell sm:px-4 sm:py-3 sm:align-top">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-gold-600 sm:hidden">
                        {JOB_COLUMNS[j + 1]}
                      </span>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 max-w-3xl text-ink-600 text-pretty">
          For regulated professions the code is only half of it: the licence is a separate, provincial process. See the posts for{' '}
          <Link href="/blog/pakistani-nurses-canada" className="font-semibold text-accent-500 link-underline">
            nurses
          </Link>
          ,{' '}
          <Link href="/blog/pakistani-doctors-canada" className="font-semibold text-accent-500 link-underline">
            doctors
          </Link>
          ,{' '}
          <Link href="/blog/pakistani-teachers-canada" className="font-semibold text-accent-500 link-underline">
            teachers
          </Link>
          {' '}and{' '}
          <Link href="/blog/pakistani-engineers-canada" className="font-semibold text-accent-500 link-underline">
            engineers
          </Link>
          {' '}trained in Pakistan.
        </p>

        <div className="mt-8">
          <Callout title="Check this: the duties decide the code">
            <p>
              These are starting points, not answers. Compare the code’s lead statement and main duties
              with your daily work. If they describe a different job, your code is different. Licences
              come from the <Out href={SRC.credentials}>regulator where you will work</Out>.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW TO CHOOSE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Five checks, in order"
          title="How do you choose the right NOC code?"
          subtitle="IRCC’s method, and the test in the Regulations: the lead statement first, then most of the main duties."
        />
        <ol className="mt-10 space-y-5">
          {[
            ['List your real duties', 'for each job, week to week. Ignore your job title for now.'],
            ['Search the NOC site', 'choosing NOC 2021 Version 1.0, by job title or code.'],
            ['Read the lead statement', 'the paragraph at the top. The law requires you to have performed its actions.'],
            ['Compare the main duties', 'you need a substantial number, including all essential duties.'],
            ['Read the exclusions', 'they name the nearby codes for similar work. Then repeat for every job.'],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500 font-serif text-ink-950">
                {i + 1}
              </span>
              <p className="text-ink-600 text-pretty">
                <strong className="text-ink-900">{t}</strong>: {d}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-ink-600 text-pretty">
          A “senior” or “lead” title rarely changes the code: Statistics Canada generally classifies
          supervisors with their workers. Start on ESDC’s <Out href={SRC.nocSite}>NOC search</Out>.
        </p>
      </Section>

      {/* ===================== WHY IT MATTERS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Eligibility"
          title="Why does your NOC code matter for Express Entry?"
          subtitle="The TEER decides whether your work counts. The duties are what an officer checks."
        />
        <Prose>
          <p>
            The <Link href="/express-entry/federal-skilled-worker" className={a}>Federal Skilled Worker Program</Link>{' '}
            is the route for work done outside Canada. Under{' '}
            <Out href={SRC.irpr}>section 75 of the Regulations</Out>, you need one continuous year of
            full-time work, or the part-time equivalent, within the last 10 years. It must be in TEER 0
            to 3, in the code you name as your primary occupation.
          </p>
          <p>
            The Canadian Experience Class uses the same TEER levels, for a year of work in Canada within
            the last 3 years. The Federal Skilled Trades Program needs two years in one trade within the
            last 5 years, and defines its trades by NOC group.
          </p>
          <p>
            Full-time means at least 30 hours a week. A Federal Skilled Worker application that fails
            these minimum requirements is refused.
          </p>
        </Prose>
        <CompareTable
          caption="How the three Express Entry programmes use the NOC code, under the Regulations as read on 22 November 2026"
          columns={['', 'Federal Skilled Worker', 'Canadian Experience Class', 'Federal Skilled Trades']}
          rows={[
            {
              label: 'Codes that count',
              cells: [
                'TEER 0, 1, 2 or 3',
                'TEER 0, 1, 2 or 3',
                'Major Groups 72 (not 726), 73, 82, 83, 92 and 93 (not 932), Minor Group 6320, Unit Group 62200',
              ],
            },
            {
              label: 'Work needed',
              cells: ['One continuous year, in your primary occupation', 'One year, in Canada', 'Two years, in one trade'],
            },
            { label: 'Within', cells: ['The last 10 years', 'The last 3 years', 'The last 5 years'] },
            {
              label: 'Duties test',
              cells: [
                'Lead statement, and a substantial number of main duties',
                'The same',
                'The same, plus the NOC’s employment requirements',
              ],
            },
            {
              label: 'From our table',
              cells: ['Every job except bank cashier', 'The same, for work in Canada', 'Electrician, welder, truck driver, chef, cook'],
            },
          ]}
        />
      </Section>

      {/* ===================== CRS AND CATEGORIES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Points and draws"
          title="How does your NOC code affect CRS points and category draws?"
          subtitle="The code decides whether your work earns points, what a job offer is worth, and which category rounds you fit."
        />
        <Prose>
          <p>
            Under the <Out href={SRC.mi}>Ministerial Instructions</Out>, work outside Canada earns CRS
            points only in TEER 0 to 3. Your profile must give the five-digit code for each job, and the
            same duties test applies.
          </p>
          <p>
            A qualifying job offer must be in TEER 0 to 3, or a skilled trade. Since 3 November 2026, it
            earns points only if its code is on IRCC’s{' '}
            <Out href={SRC.highWage}>high-wage occupations list</Out>. IRCC says the level belongs to the
            code, not to your salary.
          </p>
        </Prose>
        <div role="region" aria-label="Job-offer CRS points by the code’s high-wage level" tabIndex={0} className="not-prose mt-8 overflow-x-auto rounded-2xl border border-rule bg-paper">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Job-offer CRS points by the code’s high-wage level, with the codes from this page’s table,
              as of {CHECKED}
            </caption>
            <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Code’s level on IRCC’s list</th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">Job-offer points</th>
                <th scope="col" className="px-4 py-3 font-semibold">Codes from our table</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {HIGH_WAGE.map(([level, points, codes]) => (
                <tr key={level}>
                  <th scope="row" className="px-4 py-3 align-top font-medium text-ink-900">{level}</th>
                  <td className="whitespace-nowrap px-4 py-3 text-right align-top tabular-nums text-ink-600">{points}</td>
                  <td className="px-4 py-3 align-top tabular-nums text-ink-600">{codes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Prose>
          <p>
            What changed on 3 November is in{' '}
            <Link href="/blog/express-entry-november-2026-crs-change" className={a}>
              our post on the CRS change
            </Link>
            . To see your own score, use the <Link href="/tools/crs-calculator" className={a}>CRS calculator</Link>.
          </p>
          <p>
            Occupation categories are lists of NOC codes too. IRCC’s{' '}
            <Out href={SRC.categories}>category page</Out> says your experience must be in a single
            listed occupation, and sets how recent it must be.
          </p>
          <p>
            On {CHECKED}, the lists included civil, mechanical and electrical engineers, nurses, family
            doctors, pharmacists, school teachers, electricians and welders. Software engineers and
            developers, truck drivers, chefs and cooks were on none. Lists change: see{' '}
            <Link href="/express-entry/category-based-draws" className={a}>
              how category-based draws work
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== MISTAKES AND LETTERS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where files go wrong"
          title="Which NOC mistakes put an application at risk?"
          subtitle="Most start with a code chosen for what it unlocks, not for the work done."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ['Choosing by title', 'ESDC notes that Canadian job titles can differ from other countries’. “Officer” or “manager” in Pakistan may be a different job in Canada.'],
            ['Inflating to a higher TEER', 'Listing an HR officer as 11200, or a bookkeeper as 11100. If your letters do not show those duties, the work does not count.'],
            ['Codes that do not line up', 'Your profile, reference letters and any job offer must describe the same work. IRCC asks for the offer’s NOC code too.'],
            ['An old NOC 2016 code', 'Four-digit codes are out of date. Use the five-digit NOC 2021 code for every job.'],
          ].map(([t, d]) => (
            <div key={t} className="card p-7">
              <h3 className="font-serif text-xl text-ink-900">{t}</h3>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Callout title="Why a mismatch is serious">
            <p>
              A code your documents do not support can be treated as misrepresentation. Under{' '}
              <Out href={SRC.irpa40}>section 40 of IRPA</Out>, that makes you inadmissible for five
              years, with no permanent residence application in that time. Read{' '}
              <Link href="/refusals/misrepresentation" className={a}>
                our misrepresentation guide
              </Link>
              .
            </p>
          </Callout>
        </div>
        <div className="mt-10 max-w-3xl">
          <h3 className="font-serif text-2xl text-ink-900">What must your reference letters show?</h3>
          <div className="mt-4 space-y-4 text-ink-600 text-pretty">
            <p>
              IRCC’s <Out href={SRC.documents}>supporting documents page</Out> lists employer reference
              letters with your job duties, dates and salary. The duties are what an officer compares
              with your code.
            </p>
            <p>
              Our suggestion: ask for a signed letter on letterhead, with a contact name, your weekly
              hours and the dates of each role. The duties should be in the employer’s own words. A
              letter copied from the NOC text proves little.
            </p>
          </div>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Read it at the source"
          title="What do the official sources say?"
          subtitle={`We read these pages on ${CHECKED}. Each code in the table also links to its NOC page.`}
        />
        <Prose>
          <ul>
            <li>IRCC, <Out href={SRC.findNoc}>Find your NOC</Out> (dated 27 June 2025)</li>
            <li>ESDC, <Out href={SRC.nocSite}>NOC 2021 Version 1.0</Out></li>
            <li>Statistics Canada, <Out href={SRC.statcan}>NOC 2021 introduction</Out> (14 September 2023)</li>
            <li>
              IRCC, <Out href={SRC.fsw}>Federal Skilled Worker</Out>, <Out href={SRC.cec}>Canadian Experience Class</Out>{' '}
              and <Out href={SRC.fst}>Federal Skilled Trades</Out> (18 November 2026)
            </li>
            <li>Regulations, <Out href={SRC.irpr}>sections 73, 75, 87.1 and 87.2</Out> (current to 29 October 2026)</li>
            <li>IRCC, <Out href={SRC.mi}>Ministerial Instructions for Express Entry</Out> (signed 17 November 2026)</li>
            <li>IRCC, <Out href={SRC.highWage}>High-wage occupations</Out> (list in effect from 3 November 2026)</li>
            <li>IRCC, <Out href={SRC.categories}>Category-based selection</Out> and <Out href={SRC.jobOffer}>Job offer</Out> (18 November 2026)</li>
            <li>IRCC, <Out href={SRC.documents}>Supporting documents</Out> (23 April 2026)</li>
            <li>IRPA, <Out href={SRC.irpa40}>section 40</Out> (current to 29 October 2026)</li>
            <li>ESDC, <Out href={SRC.credentials}>Foreign credential recognition</Out> (12 November 2026)</li>
          </ul>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="What else do people ask about NOC codes?" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated={CHECKED} />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you build your profile"
        title="Get your NOC codes checked against your duties"
        subtitle="Send us your job titles and what you did in each role. We will tell you which codes fit and what your letters need to show. No one can guarantee an invitation, and we won’t."
        page={PAGE}
        service={SERVICE.WORK_PERMIT}
        targetCountry="Canada"
        waMessage="Hi, I’d like help choosing the right NOC code for my Express Entry profile."
      />
    </>
  );
}
