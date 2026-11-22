import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { OnThisPage } from '@/components/OnThisPage';
import { CompareTable } from '@/components/CompareTable';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection, Prose, ShortAnswer } from '@/components/ui';
import { SERVICE } from '@/lib/site';

/**
 * Visitor visa: proof of funds, bank statements and the cover letter, for
 * applicants in Pakistan.
 *
 * Written on 22 November 2026 from official pages read that day: IRCC's "How to
 * apply for a visitor visa" (page dated 2026-11-16) and "Eligibility" (2026-08-28)
 * pages; the IMM 5484 document checklist (05-2026 edition, landing page dated
 * 2026-05-13); the Abu Dhabi visa office's additional checklist IMM 5853
 * (04-2026), which carries instructions for residents of Pakistan applying
 * through the Islamabad, Lahore and Karachi centres; Guide 5256 (2026-03-31);
 * the letter-of-invitation page (2025-01-14); the operational instructions on
 * proof of funds (2014-04-25) and on eligibility considerations (2019-04-01);
 * IRCC's fraud-consequences page (2026-09-01), Help Centre answer 448
 * (2026-11-03) and officer-decision-notes page (2026-08-27); IRPA ss. 40 and 72
 * and IRPR s. 179 (Justice Canada, current to 2026-10-29); and two FBR pages on
 * NTN registration, Iris and the wealth statement (undated).
 *
 * No amounts at all. IRCC sets no minimum for visitors. The statement periods
 * on IRCC's general page and on the Abu Dhabi checklist differ and appear only
 * on those pages, so we link them rather than print them. The only figure is
 * from law: five years (IRPA s. 40(2)(a)). The Federal Court period in IRPA
 * s. 72 is linked, not printed: its entry in lib/facts.ts
 * (ca.refusal.jr-periods) is still flagged for review.
 *
 * Our own suggestion, not IRCC's: the explanations after each of IRCC's points
 * in "What do officers look for", the "Common problems" column, the cover-letter
 * outline, and the advice on explaining deposits and not adding money before
 * reapplying. FBR returns, property papers and business registration are kinds
 * of evidence people use; no IRCC page we read requires any particular
 * Pakistani document. Nothing here names the firm's people or promises an outcome.
 */
export const metadata: Metadata = {
  title: 'Canada Visit Visa: Bank Balance and Cover Letter',
  description:
    'There is no fixed bank balance for a Canada visit visa from Pakistan. What officers look for in your statements, the parked-funds risk and your cover letter.',
  alternates: { canonical: '/visitor-visa/bank-statement' },
};

const PAGE = 'visitor-visa-bank-statement';
const CHECKED = '22 November 2026';
const a = 'font-semibold text-accent-500 link-underline';

const SRC = {
  apply: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html',
  eligibility: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eligibility.html',
  imm5484: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/imm5484.html',
  abuDhabi: 'https://ircc.canada.ca/english/pdf/kits/forms/IMM5853E.pdf',
  guide5256:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5256-applying-visitor-visa-temporary-resident-visa.html',
  invitation: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/letter-invitation.html',
  oiFunds:
    'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/visitors/proof-funds-financial-support.html',
  oiEligibility:
    'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/visitors/eligibility-admissibility-considerations.html',
  fraud: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html',
  help448: 'https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=448&top=7',
  notes: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/officer-decision-notes.html',
  s40: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html',
  s72: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-72.html',
  r179: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-179.html',
  fbrRegister: 'https://www.fbr.gov.pk/categ/register-income-tax/51147/30846/71148',
  fbrReturn: 'https://www.fbr.gov.pk/categ/file-income-tax-return/51147/80860/71160',
} as const;

function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className={a}>
      {children}
    </a>
  );
}

/** IRCC's point first, then our explanation of why it matters. */
const LOOKS_FOR: [string, string, string][] = [
  [
    'History over time',
    'IRCC’s visitor page asks for months of account details, including balances, to understand your financial situation. Its officer guidance refers to statements that show accumulated savings.',
    'A balance on one day says nothing about how it got there.',
  ],
  [
    'Where large deposits came from',
    'IRCC’s officer guidance looks for savings that have accumulated, and for support that can be confirmed.',
    'A large credit just before you apply is not savings built up over time. Explain each one with its own paper, or the officer may doubt it is yours to spend.',
  ],
  [
    'Consistency with your income',
    'Officers ask about your job, your position and your salary.',
    'Salary credits should match your payslips and employer letter. Savings and property should fit what your tax return declares.',
  ],
  [
    'Proportion to the trip',
    'IRCC says the money you need depends on how long you stay, and whether you stay in a hotel or with friends or relatives.',
    'A plan that costs far more than your income could support invites doubt, however large the balance.',
  ],
  [
    'Proof the account is yours',
    'IRCC says your name and address on the statement show the account is yours. The bank’s name and contact details let IRCC contact the bank with questions.',
    'Use the account your income actually goes into.',
  ],
];

const OUTLINE: [string, string][] = [
  ['Who you are and what you are applying for', 'Your name, the visa you want, and anyone travelling with you.'],
  ['Why you are going', 'The purpose in a sentence or two: a family visit, tourism, a conference. Name the person or the event.'],
  ['The plan', 'Your dates, the cities you will visit and where you will stay. The dates should match your leave letter and any bookings.'],
  ['Who pays, and from what', 'Say who covers which costs and point to the documents that prove it. If someone else pays, say how you are related.'],
  ['Why you will come back', 'Your job and approved leave, your business, your family and your property in Pakistan, each with its evidence.'],
  ['Anything unusual', 'A large deposit, a gap in work or an earlier refusal by any country. Explain it plainly, with the document behind it.'],
];

const FAQS = [
  {
    q: 'Is there a minimum bank balance for a Canada visit visa from Pakistan?',
    a: 'No: as of 22 November 2026, IRCC publishes no minimum balance for visitors. It says the amount you need depends on how long you stay and whether you stay in a hotel or with friends or relatives. The officer judges whether your funds fit the trip, and whether your finances and ties fit a temporary visit.',
  },
  {
    q: 'How many months of bank statements should I send?',
    a: 'Follow the checklist IRCC gives you. IRCC’s general visitor page and its Abu Dhabi visa office checklist each suggest a period, and the two differ. Read both on the day you apply; a history that shows savings building up says more than one recent statement.',
  },
  {
    q: 'Can I use my father’s or brother’s bank statement?',
    a: 'Yes, if they are genuinely paying, and you never present their money as yours. IRCC’s officer guidance accepts family support that is sufficient, arranged and can be confirmed. The Abu Dhabi visa office checklist asks the payer for a signed letter explaining your relationship, their photo ID and a bank certificate.',
  },
  {
    q: 'I deposited a large amount recently. Will that get me refused?',
    a: 'Not by itself, if the money is genuinely yours and you can show where it came from. IRCC’s officer guidance looks for accumulated savings, so include the document behind the deposit and mention it in your cover letter. Borrowed money shown as your own savings is a misrepresentation risk under section 40 of the Immigration and Refugee Protection Act.',
  },
  {
    q: 'Do I need FBR tax returns for a visitor visa?',
    a: 'The IRCC visitor pages we read on 22 November 2026 do not ask for FBR returns by name. They can still help: a return and its wealth statement show what you have declared to the Federal Board of Revenue. If you include them, they should agree with your bank statements and property papers.',
  },
  {
    q: 'Is a cover letter required for a Canadian visitor visa?',
    a: 'IRCC’s checklists do not ask for a cover letter by that name, but they do ask about your purpose of travel and your plans. A short letter in your own words can explain the purpose, the plan, who pays, your ties and why you will return. Do not copy a template, and make sure every fact matches your forms.',
  },
  {
    q: 'Do my Urdu documents need to be translated?',
    a: 'Yes: IRCC’s Abu Dhabi visa office checklist says documents not in English or French need a certified translation. Guide 5256 adds that a translator not certified in Canada must provide an affidavit. Neither you nor a family member may do the translation.',
  },
  {
    q: 'Does an invitation letter replace proof of funds?',
    a: 'No: IRCC says a host’s letter should explain where you will stay and how you will pay for things. It also says the letter does not guarantee a visa. If your host is paying, say so, and include evidence of the host’s means if you can.',
  },
  {
    q: 'My visit visa was refused over funds. Should I reapply with a bigger balance?',
    a: 'Not before you know the officer’s reasons. Since 29 July 2025, IRCC has sent officer decision notes with most temporary resident refusals; if none came, request your GCMS notes. Fix the doubt the officer named, because a fresh lump sum can raise the same question again.',
  },
];

export default function VisitorVisaBankStatementPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit visa · Proof of funds"
        title={
          <>
            Bank statements for a Canada visit visa:{' '}
            <span className="text-gold-300">no fixed balance, but a story that adds up</span>
          </>
        }
        subtitle="IRCC sets no minimum balance for visitors. An officer asks whether you can pay for this trip, and whether your money, income and ties fit someone who will go home."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a free consultation <span aria-hidden="true">→</span>
        </Link>
        <Link href="/canada-visit-visa" className="btn btn-ghost">
          The full visit visa guide
        </Link>
      </PageHero>
      <ShortAnswer question="How much bank balance do I need for a Canada visit visa from Pakistan?">
        IRCC sets no minimum bank balance for a Canada visit visa. As of 22 November 2026, it says the
        amount depends on how long and where you stay. Officers judge whether your funds, income and ties
        fit a temporary trip. A cover letter should explain the trip, who pays and why you’ll return.
      </ShortAnswer>
      <OnThisPage path="/visitor-visa/bank-statement" />

      {/* ===================== NO MINIMUM ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The honest answer"
          title="Is there a minimum bank balance for a Canada visit visa?"
          subtitle={`No. Checked against IRCC’s own pages on ${CHECKED}.`}
        />
        <Prose>
          <p>
            IRCC publishes no minimum balance for a visitor visa. Its{' '}
            <Out href={SRC.eligibility}>eligibility page</Out> says you must have enough money for your
            stay. It adds that the amount depends on how long you will stay, and whether you stay in a
            hotel or with friends or relatives.
          </p>
          <p>
            IRCC’s instructions to its own officers say the same in other words. The{' '}
            <Out href={SRC.oiFunds}>proof-of-funds instructions</Out> ask for enough to cover all
            reasonable expenses during the stay. The{' '}
            <Out href={SRC.oiEligibility}>eligibility instructions</Out> say the amount depends on the type
            and the duration of the trip.
          </p>
          <p>
            So the test is fit, not size. The <Out href={SRC.imm5484}>document checklist (IMM 5484)</Out>{' '}
            asks for proof that you can support yourself and any family travelling with you. The
            Regulations then require the officer to be satisfied you will leave by the end of your
            authorised stay (<Out href={SRC.r179}>section 179(b)</Out>).
          </p>
          <p>
            Funds are one part of that judgement. The officer must also be convinced that ties such as a
            job, home, financial assets or family will take you back. Our{' '}
            <Link href="/canada-visit-visa" className={a}>Canada visit visa guide</Link> covers the whole
            test.
          </p>
        </Prose>
        <div className="mx-auto max-w-3xl">
          <Callout title="If someone quotes you a “required balance”">
            <p>
              Ask where IRCC publishes it. None of the official pages listed at the end of this guide set
              one on {CHECKED}. A figure that does not come from IRCC is a guess, and a guess is a poor
              reason to move money into your account.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHAT OFFICERS LOOK FOR ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Reading a statement the way an officer does"
          title="What do officers look for in your bank statements?"
          subtitle="Each point starts with what IRCC says. The line after it is our explanation of why it matters."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOOKS_FOR.map(([t, ircc, ours]) => (
            <div key={t} className="card p-7">
              <h3 className="font-serif text-xl text-ink-900">{t}</h3>
              <p className="mt-2 text-ink-600 text-pretty">{ircc}</p>
              <p className="mt-3 text-ink-900 text-pretty">{ours}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-ink-600 text-pretty">
          How many months should you send? IRCC’s <Out href={SRC.apply}>general visitor page</Out> and its{' '}
          <Out href={SRC.abuDhabi}>Abu Dhabi visa office checklist</Out> each suggest a period, and they
          differ. Follow the checklist IRCC gives you, and read both pages on the day you apply.
        </p>
      </Section>

      {/* ===================== PAKISTAN EVIDENCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Evidence from Pakistan"
          title="Which documents from Pakistan show your money and your ties?"
          subtitle="IRCC asks for proof of funds, but no IRCC page we read names a Pakistani document such as an FBR return. These are kinds of evidence people use, with what each can and cannot show."
        />
        <Prose>
          <p>
            Apply online and the IRCC portal gives you a personalised checklist: provide everything on
            it. IRCC’s <Out href={SRC.apply}>visitor page</Out> also recommends a bank statement, an
            employer letter, your travel history and an itinerary.
          </p>
          <p>
            IRCC’s <Out href={SRC.abuDhabi}>Abu Dhabi visa office checklist (IMM 5853, April 2026)</Out>{' '}
            has instructions for Pakistan residents applying through the Islamabad, Lahore or Karachi
            centres. Beyond bank statements, its proof-of-funds list names an employment letter,
            pay slips, proof of pension, business registration and investments.
          </p>
          <p>
            Tax records are a check on consistency. The Federal Board of Revenue uses an individual’s CNIC
            as the National Tax Number, and returns are filed online through{' '}
            <Out href={SRC.fbrRegister}>Iris</Out>. An online return includes a{' '}
            <Out href={SRC.fbrReturn}>wealth statement</Out> of assets and liabilities, which should agree
            with your bank and property papers.
          </p>
        </Prose>
        <CompareTable
          caption="Kinds of financial and ties evidence from Pakistan, what each shows a visa officer, and common problems"
          columns={['Evidence', 'What it shows the officer', 'Common problems']}
          rows={[
            {
              label: 'Personal bank statements',
              cells: [
                'Savings built up over time and regular income coming in. Your name and address show the account is yours.',
                'A recent lump sum with no explanation. An account your income does not normally go into. No bank contact details.',
              ],
            },
            {
              label: 'Bank certificate or balance letter',
              cells: [
                'The balance on the day it was issued, confirmed by the bank.',
                'It shows one day only, and says nothing on its own about history or source.',
              ],
            },
            {
              label: 'Salary slips and employer letter',
              cells: [
                'Your job, position, start date and salary. IRCC asks for the letter on letterhead, signed, with your manager’s contact details.',
                'Salary that does not match the bank credits. No mention of approved leave.',
              ],
            },
            {
              label: 'FBR income tax return and wealth statement',
              cells: [
                'The income, assets and liabilities you have declared to the Federal Board of Revenue.',
                'A balance or property far larger than the return declares. High claimed income with no return filed.',
              ],
            },
            {
              label: 'Property documents',
              cells: ['Assets you own in Pakistan, and a reason to return to them.', 'Property in a relative’s name presented as yours. Urdu papers with no translation.'],
            },
            {
              label: 'Business registration and business account',
              cells: [
                'That the business exists, that you own it, and how money moves through it.',
                'Business and personal money mixed with no explanation. Registration that does not name you.',
              ],
            },
            {
              label: 'A sponsor’s or host’s funds',
              cells: [
                'That someone else will pay, and can afford to.',
                'No signed letter explaining the relationship. The sponsor’s own money unexplained.',
              ],
            },
          ]}
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="card p-7">
            <h3 className="font-serif text-xl text-ink-900">Documents in Urdu</h3>
            <p className="mt-2 text-ink-600 text-pretty">
              The Abu Dhabi checklist says documents in a language other than English or French need a
              certified translation. <Out href={SRC.guide5256}>Guide 5256</Out> adds that a translator not
              certified in Canada must provide an affidavit. You and your family members may not translate
              your own documents.
            </p>
          </div>
          <Callout title="When someone else pays">
            <p>
              IRCC’s officer guidance accepts support from family or friends that is sufficient, arranged
              and can be confirmed. The Abu Dhabi checklist asks the person paying for a signed letter
              explaining your relationship. It also wants their photo ID and a bank certificate showing
              their funds, dated within the period it sets.
            </p>
            <p>
              A host’s <Out href={SRC.invitation}>invitation letter</Out> should say where you will stay and
              how you will pay for things. IRCC says it does not guarantee a visa. What makes one useful is
              in our{' '}
              <Link href="/visitor-visa/invitation-letter" className={a}>
                guide to invitation letters
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== ARRANGED STATEMENTS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The parked-funds trap"
          title="Why is a ‘bank statement arrangement’ so risky?"
          subtitle="Borrowed money shown as your own is not a weak application. It is a false one."
        />
        <Prose>
          <p>
            Some people are offered money to park in their account until the visa comes, or a statement
            prepared to order. Either way, the statement shows money that is not really yours to spend.
            That misstates the very fact the officer is assessing.
          </p>
          <p>
            Under <Out href={SRC.s40}>section 40</Out> of the Immigration and Refugee Protection Act,
            misrepresenting or withholding material facts, directly or indirectly, makes a person
            inadmissible. It applies where this induces or could induce an error. Under section 40(2)(a)
            that lasts five years, and IRCC’s <Out href={SRC.fraud}>fraud page</Out> adds that you could
            get a permanent record of fraud.
          </p>
          <p>
            You cannot pass the blame on. IRCC says you are responsible for everything in your application,
            even if a representative completes it. Its <Out href={SRC.help448}>Help Centre</Out> says
            representatives who advise false documents are breaking the law.
          </p>
          <p>
            The statement itself can be checked: IRCC says the bank’s contact details let it contact your
            bank with questions. The Abu Dhabi checklist warns that fraudulent documents will result in
            immediate refusal. How a finding works, including one caused by an agent, is in our{' '}
            <Link href="/refusals/misrepresentation" className={a}>
              misrepresentation guide
            </Link>
            .
          </p>
        </Prose>
        <div className="mx-auto max-w-3xl">
          <Callout title="A genuine lump sum is not the problem">
            <p>
              Money from selling a plot, a maturing deposit or a family gift is fine if it is real and
              explained. Show where it came from, keep the paper trail, and mention it in your cover letter.
              Unexplained money invites doubt; hidden borrowing can become misrepresentation.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== COVER LETTER ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Your own words"
          title="What should your cover letter say?"
          subtitle="IRCC’s checklists do not ask for a cover letter by that name. They do ask about your purpose of travel and your plans. A short letter is a clear place to explain them."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OUTLINE.map(([t, d], i) => (
            <li key={t} className="card p-7">
              <p className="font-serif text-4xl leading-none text-gold-600">{i + 1}</p>
              <p className="mt-4 font-serif text-xl">{t}</p>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </li>
          ))}
        </ol>
        <Prose>
          <p>
            This outline is our suggestion, not an IRCC form. Write the letter yourself, in plain English,
            and keep it short. <Out href={SRC.guide5256}>Guide 5256</Out> says the officer considers all the
            information and documents you provide, so every fact in the letter should match your forms.
          </p>
          <p>
            Do not copy a template. A letter that reads like everyone else’s tells the officer nothing about
            you. Do not claim what your documents do not show, or leave out a past refusal: the form asks
            about it.
          </p>
        </Prose>
      </Section>

      {/* ===================== AFTER A REFUSAL ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="After a refusal"
          title="What should you do after a refusal over funds?"
          subtitle="Find out what the officer doubted before you change anything."
        />
        <Prose>
          <p>
            Start with the reasons, not a new statement. IRCC says it now sends{' '}
            <Out href={SRC.notes}>officer decision notes</Out> with refusal letters for most temporary
            resident applications, including visitor visas, since 29 July 2025. Read the note for what the
            officer doubted: the amount, its source, your ties or the purpose.
          </p>
          <p>
            If no note came, or your refusal is older, you can request your GCMS notes, the officer’s
            record of the file. Our <Link href="/refusals/gcms-notes" className={a}>guide to GCMS notes</Link>{' '}
            explains when to order them. The <Link href="/canada-visa-refused" className={a}>visa refused guide</Link>{' '}
            sets out the options after that.
          </p>
          <p>
            Then fix the cause the officer named. If the doubt was where a deposit came from, document the
            source. Adding a fresh lump sum can raise the same question again.
          </p>
          <p>
            Thinking about Federal Court? <Out href={SRC.s72}>Section 72</Out> of the Act sets a short
            deadline that runs from when you learn of the decision. Ordering notes does not pause it.
          </p>
          <p>
            Before reapplying, our{' '}
            <Link href="/tools/visit-visa-refusal-risk" className={a}>
              refusal risk checker
            </Link>{' '}
            walks through the points officers question.
          </p>
        </Prose>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Read it at the source"
          title="What do the official sources say?"
          subtitle={`Everything on this page comes from these pages, as they stood on ${CHECKED}. Dates in brackets are each page’s own.`}
        />
        <Prose>
          <ul>
            <li>
              IRCC, <Out href={SRC.apply}>How to apply for a visitor visa</Out> (16 November 2026)
            </li>
            <li>
              IRCC, <Out href={SRC.eligibility}>Eligibility to apply for a visitor visa</Out> (28 August 2026)
            </li>
            <li>
              IRCC, <Out href={SRC.imm5484}>Document checklist for a temporary resident visa, IMM 5484</Out> (May
              2026 edition)
            </li>
            <li>
              IRCC, <Out href={SRC.abuDhabi}>Abu Dhabi visa office additional document checklist, IMM 5853</Out>{' '}
              (April 2026 edition)
            </li>
            <li>
              IRCC, <Out href={SRC.guide5256}>Guide 5256: applying for a visitor visa on paper</Out> (31 March 2026)
            </li>
            <li>
              IRCC, <Out href={SRC.invitation}>Letter of invitation</Out> (14 January 2025)
            </li>
            <li>
              IRCC operational instructions, <Out href={SRC.oiFunds}>Proof of funds / financial support</Out> (25
              April 2014)
            </li>
            <li>
              IRCC operational instructions,{' '}
              <Out href={SRC.oiEligibility}>Eligibility and admissibility considerations</Out> (1 April 2019)
            </li>
            <li>
              IRCC, <Out href={SRC.fraud}>Consequences of immigration and citizenship fraud</Out> (1 September
              2026)
            </li>
            <li>
              IRCC Help Centre, <Out href={SRC.help448}>False information on a representative’s advice</Out> (3
              November 2026)
            </li>
            <li>
              IRCC, <Out href={SRC.notes}>Officer decision notes</Out> (27 August 2026)
            </li>
            <li>
              Justice Canada, Immigration and Refugee Protection Act, <Out href={SRC.s40}>section 40</Out> and{' '}
              <Out href={SRC.s72}>section 72</Out>, and the Regulations, <Out href={SRC.r179}>section 179</Out>{' '}
              (current to 29 October 2026)
            </li>
            <li>
              Federal Board of Revenue, <Out href={SRC.fbrRegister}>Register for income tax</Out> and{' '}
              <Out href={SRC.fbrReturn}>File income tax return</Out> (undated)
            </li>
          </ul>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="What else do people ask about funds and cover letters?" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="22 November 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you apply"
        title="Have your bank evidence and cover letter checked first"
        subtitle="Tell us about the trip, who is paying and what your statements show. We will point out what an officer is likely to question, so you can deal with it before you file. No one can promise a visa, and we won’t."
        page={PAGE}
        service={SERVICE.VISIT_VISA}
        targetCountry="Canada"
        waMessage="Hi, I’d like help with the bank statements and cover letter for my Canadian visitor visa."
      />
    </>
  );
}
