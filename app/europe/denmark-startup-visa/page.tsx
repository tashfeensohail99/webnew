import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { MidPagePrompt } from '@/components/MidPagePrompt';
import { OnThisPage } from '@/components/OnThisPage';
import { CompareTable } from '@/components/CompareTable';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PageHero, Section, SectionHeading, StatBand, Callout, FAQ, CTASection, Prose, Icon } from '@/components/ui';
import { SERVICE } from '@/lib/site';

/**
 * Start-up Denmark: the Danish residence and work permit for non-EU founders.
 *
 * Written on the owner's instruction on 17 November 2026, from the official
 * pages as they stood that day: the programme's own site (run by the Danish
 * Business Authority), the scheme's decree (BEK nr 969 af 15/06/2022, as
 * amended), SIRI's Start-up Denmark, self-support and accompanying-family pages
 * on nyidanmark.dk, and the Danish Embassy in Islamabad's residence-permit pages.
 *
 * The owner approved printing SIRI's figures (fee, funds, processing time) here,
 * an exception to the site's usual rule, on condition that each is dated and
 * linked to SIRI and re-checked monthly (roadmap R18). If you change a figure,
 * change the date beside it and the matching entry in lib/facts.ts.
 *
 * The firm confirmed it prepares Start-up Denmark applications. Nothing here
 * names a lawyer or claims a review, and nothing promises a panel approval.
 */
export const metadata: Metadata = {
  title: 'Start-up Denmark Visa from Pakistan: How It Works',
  description:
    'Denmark’s founder permit: who qualifies, the 15-page pitch deck and 5-minute video, the 3.5 panel score, SIRI’s fee and funds, and applying from Pakistan.',
  alternates: { canonical: '/europe/denmark-startup-visa' },
};

const PAGE = 'europe-denmark-startup';
const CHECKED = '17 November 2026';
const a = 'font-semibold text-accent-500 link-underline';

const SRC = {
  programme: 'https://startupdenmarkprogramme.dk/about-startup-denmark-programme',
  guide: 'https://startupdenmarkprogramme.dk/application-guide-startups',
  extension: 'https://startupdenmarkprogramme.dk/application-guide-extension',
  decree: 'https://www.retsinformation.dk/eli/lta/2022/969',
  siri: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark',
  selfSupport: 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Self-support---SIRI/',
  family: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Family/Accompanying-family-members/Accompanying-family---work',
  embassy: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/',
  embassyFee: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/application-fee/',
} as const;

function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className={a}>
      {children}
    </a>
  );
}

const GLANCE: [string, string][] = [
  ['What it is', 'A Danish residence and work permit for founders from outside the EU, EEA and Switzerland who will build an innovative, scalable business in Denmark.'],
  ['Who runs it', 'The Danish Business Authority runs the business assessment. SIRI, Denmark’s immigration agency for work permits, issues the permit.'],
  ['Who can apply', 'One founder, or a team of up to three. Each must own a significant share and actively run the company.'],
  ['What you send first', 'An online form on Virk, a pitch deck of at most 15 pages and a video pitch of at most 5 minutes, all in English.'],
  ['Pass mark', 'Three expert-panel members grade four criteria from 1 to 5. You need an average of at least 3.5.'],
  ['Annual limit', 'At most 75 permits a year under the scheme.'],
  ['SIRI fee', `DKK 3,060 (SIRI’s page, checked ${CHECKED}).`],
  ['Funds to show', `DKK 153,240 if you come alone (SIRI lists this at its 2025 level, checked ${CHECKED}).`],
  ['Permit length', 'Up to 2 years at first, then extensions of up to 3 years at a time.'],
];

const FUNDS: [string, string][] = [
  ['You alone', 'DKK 153,240'],
  ['You and your spouse or partner', 'DKK 306,480'],
  ['You, your spouse or partner, and one or more children', 'DKK 356,904'],
  ['You and one or more children, no spouse or partner', 'DKK 203,664'],
];

const CRITERIA: [string, string][] = [
  ['How innovative is the business model?', 'The guide’s examples: a new product or service, new production processes, new technology, or a patent or other protection for the idea.'],
  ['How attractive is the market?', 'Who the customers are, how many of them there are, who you compete with, and why they would buy from you.'],
  ['How scalable is the business model?', 'How the company can grow well beyond its first customers and its first market, and what that growth depends on.'],
  ['What competencies and resources does the team possess?', 'Whether you, and any co-founders, have the experience, skills and resources to deliver the plan you have written.'],
];

const SCREENED: [string, string][] = [
  ['Not enough information', 'The pitch deck, video and form do not clearly answer what the requirements ask.'],
  ['The wrong kind of business', 'A small business with limited growth and employment potential, such as a restaurant, a shop or a small trading, import or export firm.'],
  ['Ownership', 'Not every applicant owns a significant share of the company.'],
  ['Too long', 'A pitch deck over 15 pages, or a video over 5 minutes.'],
  ['EU citizens listed as applicants', 'EU co-founders can be on the team, but only non-EU founders go in the form as applicants.'],
  ['Missing content', 'A required element is absent, for example no go-to-market strategy in the deck.'],
];

const FAQS = [
  {
    q: 'What is Start-up Denmark?',
    a: 'Start-up Denmark is a Danish scheme that gives a residence and work permit to founders from outside the EU, EEA and Switzerland who will build an innovative, scalable business in Denmark. An expert panel appointed by the Danish Business Authority must first approve the business plan. Only then can the founder apply to SIRI for the permit.',
  },
  {
    q: 'Can Pakistani citizens apply for Start-up Denmark?',
    a: 'Yes. The scheme is open to citizens of any country outside the EU, EEA and Switzerland, so Pakistani citizens can apply. You apply for the business assessment online, and once approved, you submit the residence permit application in person at the Gerry’s/VFS visa centre, as the Danish Embassy in Islamabad requires.',
  },
  {
    q: 'How much money do I need for Start-up Denmark?',
    a: 'SIRI asks you to prove you can support yourself and any family coming with you. On 17 November 2026 its page listed DKK 153,240 for one person, DKK 306,480 with a spouse or partner, and DKK 356,904 with a spouse or partner and children, all at the 2025 level. SIRI’s processing fee was DKK 3,060. The programme’s published requirements do not set a minimum investment, but the panel will judge whether you have the resources to carry out your plan.',
  },
  {
    q: 'How long does Start-up Denmark take?',
    a: 'The expert panel usually takes up to 6 weeks, but the programme says applications received after 13 November 2026 will not be processed before January 2027 and may take up to 8 weeks. After approval, SIRI’s normal processing time for the permit is 2 months, and up to 4 months if it needs more information.',
  },
  {
    q: 'Can a restaurant, shop or import-export business qualify?',
    a: 'Generally not. The programme says restaurants, retail shops and small trade, import or export businesses will generally be rejected before they reach the expert panel, and the scheme’s decree excludes them. The scheme is built for innovative businesses that can grow and create jobs.',
  },
  {
    q: 'Can my family come with me to Denmark?',
    a: 'Yes. Your spouse, registered or cohabiting partner, and children under 18 who live at home can apply as accompanying family. On 17 November 2026 SIRI listed their processing fee as DKK 3,080 and normal processing as 2 months. You must show you can support them; the amounts are on SIRI’s accompanying-family page.',
  },
  {
    q: 'Can I take a job in Denmark on a Start-up Denmark permit?',
    a: 'No. You may only work in the business your permit covers, apart from unpaid voluntary work. A salaried job, a new business or a sideline job each needs its own permit. The permit does not let you work in other Schengen countries.',
  },
  {
    q: 'What happens if the expert panel rejects my application?',
    a: 'You receive a written statement from the panel on all four criteria. You can then reapply with a substantially improved application, or appeal once to the Danish Business Authority, where panel members who have not seen your file reassess it. The result of the appeal is final.',
  },
  {
    q: 'Do I need an agent to apply for Start-up Denmark?',
    a: 'No. You can apply yourself: the business assessment is an online form, and the permit application goes to SIRI. The Danish Embassy in Islamabad warns applicants not to use agents who charge high prices for false documents. If you use an adviser, the idea, the numbers and the video must still be genuinely yours.',
  },
  {
    q: 'Does Start-up Denmark give permanent residence?',
    a: 'Not directly. It is a temporary permit of up to 2 years, which can be extended for up to 3 years at a time while the business keeps meeting the panel’s test. Permanent residence in Denmark has its own conditions, which SIRI sets and publishes separately.',
  },
];

export default function DenmarkStartupVisaPage() {
  return (
    <>
      <PageHero
        eyebrow="Europe · Denmark · For founders"
        title={
          <>
            Start-up Denmark from Pakistan:{' '}
            <span className="text-gold-300">a permit for founders, not investors</span>
          </>
        }
        subtitle={
          <>
            Start-up Denmark gives a residence and work permit to founders from outside the EU who will
            build an innovative, scalable company in Denmark. You need two approvals, in order: an
            expert panel must score your business plan at 3.5 or more out of 5, and then SIRI must grant
            the permit. At most 75 permits are granted a year.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a free consultation
          <span aria-hidden="true">→</span>
        </Link>
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.WORK_PERMIT,
            page: PAGE,
            targetCountry: 'Denmark',
            message: 'Hi, I’d like to ask about Start-up Denmark.',
          }}
        >
          Ask about Start-up Denmark
        </WhatsAppCta>
      </PageHero>

      <OnThisPage path="/europe/denmark-startup-visa" />

      {/* ===================== AT A GLANCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow={`Checked against the official pages on ${CHECKED}`}
          title="Start-up Denmark at a glance"
          subtitle="The short version, for anyone deciding whether to read on. Every figure is linked to its source further down."
        />
        <dl className="mt-10 divide-y divide-rule overflow-hidden rounded-2xl border border-rule bg-paper">
          {GLANCE.map(([term, def]) => (
            <div key={term} className="grid gap-1 px-6 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
              <dt className="font-semibold text-ink-900">{term}</dt>
              <dd className="text-ink-600 text-pretty">{def}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <Callout title="Applying now? Expect to wait until January.">
            <p>
              The programme’s site says that, because of the Christmas holidays and an exceptionally
              high number of applications, everything received after 13 November 2026 will be
              processed no earlier than January 2027, may take up to 8 weeks, and cannot be expedited.
              Check the notice on the{' '}
              <Out href={SRC.guide}>programme’s application guide</Out> before you plan dates around
              it.
            </p>
          </Callout>
        </div>
      </Section>

      <StatBand
        items={[
          { big: '75', label: 'Permits a year', desc: 'The most residence permits Denmark grants under the scheme in a year, under its decree and SIRI’s page.' },
          { big: '3.5', label: 'Average score to pass', desc: 'Three panel members each grade four criteria from 1 to 5. Your average must be at least 3.5.' },
          { big: '15 + 5', label: 'Pages and minutes', desc: 'A pitch deck of at most 15 pages and a video pitch of at most 5 minutes, both in English.' },
        ]}
      />

      {/* ===================== TWO APPROVALS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How the process runs"
          title="Two approvals, in this order"
          subtitle="You cannot apply for the permit until the expert panel has approved the business. The two bodies test different things."
        />
        <CompareTable
          caption="The two Start-up Denmark approvals compared"
          columns={['', 'Stage 1: the business', 'Stage 2: the permit']}
          rows={[
            {
              label: 'Who decides',
              cells: [
                'An expert panel appointed by the Danish Business Authority, after the programme’s secretariat screens the application',
                'SIRI, the Danish Agency for International Recruitment and Integration',
              ],
            },
            {
              label: 'What you send',
              cells: [
                'An online form on Virk, a pitch deck (PDF, at most 15 pages) and a video pitch (at most 5 minutes)',
                'The online application form, the fee receipt, every page of your passport, the panel’s approval, proof of funds and proof you own the company',
              ],
            },
            {
              label: 'What is tested',
              cells: [
                'Innovation, market attractiveness, scalability, and the team’s competencies and resources',
                'That you own and actively run the company, can support yourself, and meet the general permit rules',
              ],
            },
            {
              label: 'Fee',
              cells: ['None is listed in the programme’s application guide', `DKK 3,060 (checked ${CHECKED})`],
            },
            {
              label: 'Usual time',
              cells: [
                'Usually up to 6 weeks; applications received after 13 November 2026 wait until January 2027',
                'Normally 2 months, up to 4 if SIRI needs more information',
              ],
            },
            {
              label: 'What you get',
              cells: ['An approval letter that lets you apply to SIRI', 'A residence and work permit of up to 2 years'],
            },
          ]}
        />
      </Section>

      {/* ===================== WHO CAN APPLY ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Eligibility"
          title="Who can apply for Start-up Denmark?"
          subtitle="Four tests decide whether your application reaches the panel at all. They come from the programme’s guide and the scheme’s decree."
        />
        <Prose>
          <p>
            <strong>Your nationality.</strong> The scheme is for citizens of countries outside the EU,
            the EEA and Switzerland, which includes Pakistan. EU citizens do not need it, because they
            can already live and work in Denmark.
          </p>
          <p>
            <strong>Your team.</strong> You can apply alone or as a team of up to three non-EU founders.
            An EU citizen can be part of the team behind the company, but only the non-EU founders are
            listed as applicants.
          </p>
          <p>
            <strong>Your ownership and role.</strong> Each applicant must own a significant share of the
            company, take an active part in running it, and be necessary to setting it up. A purely
            financial interest does not count: an investor or shareholder who will not run the business
            cannot get a permit this way, and SIRI adds that holding companies are excluded.
          </p>
          <p>
            <strong>Your type of business.</strong> The scheme is for innovative companies that can grow
            and create jobs. The programme says restaurants, retail shops and small trade, import or
            export businesses will generally be rejected before the panel sees them, and the scheme’s{' '}
            <Out href={SRC.decree}>decree</Out> excludes them.
          </p>
          <p>
            We go through each test, with examples of ideas that do and do not fit, in{' '}
            <Link href="/blog/start-up-denmark-eligibility" className={a}>
              who qualifies for Start-up Denmark
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== PANEL ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The expert panel"
          title="How does the expert panel score an application?"
          subtitle="Three members of an independent panel grade four questions from 1 to 5. To be approved you need an average of at least 3.5."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {CRITERIA.map(([q, d], i) => (
            <div key={q} className="card flex gap-5 p-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 font-serif text-lg text-ink-950">
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl text-ink-900">{q}</h3>
                <p className="mt-2 text-ink-600 text-pretty">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Prose>
            <p>
              The four questions are the programme’s own; the notes under each are our summary of what
              its guide asks you to show. If the panel rejects the plan, you receive a written statement
              on all four criteria. You can then reapply with a substantially improved application, or
              appeal once, in which case panel members who have not seen your file reassess it and their
              decision stands. Before you apply, the secretariat screens the application, and one that
              misses a requirement is rejected without reaching the panel.
            </p>
            <p>
              How the 3.5 works in practice, and how to choose between appealing and reapplying, is in{' '}
              <Link href="/blog/start-up-denmark-expert-panel-scoring" className={a}>
                how the Start-up Denmark panel scores you
              </Link>
              .
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== PITCH DECK + VIDEO ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What you submit"
          title="What goes in the pitch deck and the video?"
          subtitle="Both must be in English. The deck must stand on its own; the video adds detail and shows who you are."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="card p-7">
            <p className="eyebrow">Pitch deck · PDF · at most 15 pages</p>
            <ul className="mt-5 space-y-3 text-ink-600">
              {[
                ['Market analysis', 'the market you will enter, your competitors and your customers'],
                ['Sales or go-to-market strategy', 'price, distribution, marketing and how you will win customers'],
                ['Why Denmark', 'what Denmark offers your company, or the relations you already have there'],
                ['The start-up phase', 'the steps you will take first, with an overall budget for them'],
                ['Documentation', 'patents, funding, written partnership declarations or other proof, inside the deck'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
                  <span>
                    <strong className="text-ink-900">{t}:</strong> {d}.
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <p className="eyebrow">Video pitch · at most 5 minutes</p>
            <ul className="mt-5 space-y-3 text-ink-600">
              {[
                ['Your position in the market', 'the commercial potential'],
                ['Scaling potential', 'how the company can grow'],
                ['Why it is innovative', 'a new product, process or technology, or a patent'],
                ['Why you can run it', 'the team, its skills and its experience'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
                  <span>
                    <strong className="text-ink-900">{t}:</strong> {d}.
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink-600 text-pretty">
              The programme asks for you, presenting the idea clearly in your own words. A video that
              reads the deck aloud wastes the five minutes.
            </p>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-ink-600 text-pretty">
          A page-by-page structure that maps the deck to the four scoring questions is in{' '}
          <Link href="/blog/start-up-denmark-pitch-deck-video" className={a}>
            the Start-up Denmark pitch deck and video
          </Link>
          . You submit everything through the online form linked from the{' '}
          <Out href={SRC.guide}>programme’s application guide</Out>.
        </p>
      </Section>

      {/* ===================== SIRI PERMIT ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow={`SIRI’s figures, checked ${CHECKED}`}
          title="How do you get the residence permit from SIRI?"
          subtitle="Once the panel approves you, you apply to SIRI. Its fee, funds and processing times change, so each one here is dated."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ol className="space-y-5">
              {[
                ['Create a case order ID', 'on SIRI’s Start-up Denmark page. It ties your fee to your case.'],
                ['Pay the fee', `DKK 3,060, as listed on ${CHECKED}.`],
                ['Gather the documents', 'the fee receipt, a copy of every passport page, the panel’s approval, proof of funds and proof that you own the company. Some may need translating.'],
                ['Fill in the online application form', 'and sign it. If you have no Danish MitID, SIRI lets you attach a signed declaration instead.'],
                ['Have your biometrics taken', 'your photo and fingerprints, within 14 days of submitting. From Pakistan, ask the visa centre to confirm where and when yours will be taken.'],
                ['Wait for the decision', 'normally 2 months, and up to 4 if SIRI needs more information.'],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500 font-serif text-ink-950">
                    {i + 1}
                  </span>
                  <p className="text-ink-600 text-pretty">
                    <strong className="text-ink-900">{t}</strong> — {d}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-2">
            <div className="card p-7">
              <p className="eyebrow">Funds SIRI asks you to show</p>
              <table className="mt-4 w-full text-left text-sm">
                <caption className="sr-only">Self-support amounts for Start-up Denmark, as listed by SIRI on {CHECKED}</caption>
                <tbody className="divide-y divide-rule">
                  {FUNDS.map(([who, amt]) => (
                    <tr key={who}>
                      <th scope="row" className="py-3 pr-4 font-medium text-ink-900">{who}</th>
                      <td className="whitespace-nowrap py-3 text-right tabular-nums text-ink-600">{amt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-sm text-ink-500 text-pretty">
                SIRI lists these at the 2025 level on its{' '}
                <Out href={SRC.selfSupport}>self-support page</Out>, as checked on {CHECKED}. A bank
                statement in your name is the usual proof. Cryptocurrency is not accepted; it must be
                exchanged into money first.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-ink-600 text-pretty">
          Two smaller rules catch people out. The permit cannot run past the date three months before
          your passport expires, so renew a short passport first. And your residence card is posted to
          your registered Danish address, so your name must be on the letterbox. The full walk-through,
          including the figures for family who follow later, is in{' '}
          <Link href="/blog/start-up-denmark-residence-permit-siri" className={a}>
            the Start-up Denmark residence permit
          </Link>
          , and SIRI’s own page is{' '}
          <Out href={SRC.siri}>Start-up Denmark on New to Denmark</Out>.
        </p>
      </Section>

      <MidPagePrompt kind="general" />

      {/* ===================== LIVING ON THE PERMIT ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The rules once you arrive"
          title="What can you do in Denmark on the permit?"
          subtitle="The permit is tied to one business, and to you living in Denmark. Breaking these rules can end it."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Work', 'Only in the business the permit covers, plus unpaid voluntary work. A job, a new business or a sideline job needs its own permit.'],
            ['Travel', 'You can spend up to 90 days in any 180 in other Schengen countries, but you cannot work there.'],
            ['Time abroad', 'Keep a Danish address. More than 6 months in a row outside Denmark makes the permit lapse, unless SIRI agrees to an exception in advance.'],
            ['Public benefits', 'Receiving benefits under the Active Social Policy Act can lead SIRI to revoke the permit.'],
            ['Changing the business', 'If the business changes significantly, or you start a different one, you need a new permit.'],
            ['Danish lessons', 'Free from age 18 with a registered address, though work-permit holders pay a deposit they can lose if they do not pass modules in time.'],
          ].map(([t, d]) => (
            <div key={t} className="card p-7">
              <h3 className="font-serif text-xl text-ink-900">{t}</h3>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Callout title="Bringing your family">
            <p>
              Your spouse, registered or cohabiting partner, and children under 18 who live at home can
              apply as accompanying family. On {CHECKED}, SIRI’s{' '}
              <Out href={SRC.family}>accompanying-family page</Out> listed their processing fee as DKK
              3,080 and normal processing as 2 months, up to 3. You must show, with a bank statement,
              that you can support them.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== EXTENSION ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="After two years"
          title="How do you extend the permit after two years?"
          subtitle="The extension is a second panel test of how the business has actually done, then a second SIRI application."
        />
        <Prose>
          <p>
            You first send the expert panel a progress report through an online template, with
            documents such as your latest financial statement, your number of employees, evidence of
            customers and any investment. A panel member compares it with your original plan. The
            company must be registered with a CVR number and must not be in compulsory dissolution or
            bankruptcy. If the report is unclear, you may be called to a recorded interview of about 45
            minutes, with a government official observing. A rejection can be appealed once.
          </p>
          <p>
            The panel’s approval is not the extension itself: you then apply to SIRI, no earlier than
            three months before your permit expires. You can apply to SIRI while still waiting for the
            panel, and if you apply in time you can stay while SIRI decides. Extensions run for up to 3
            years at a time. What to keep from your first day in Denmark so the progress report is easy
            to write is in{' '}
            <Link href="/blog/start-up-denmark-extension" className={a}>
              extending a Start-up Denmark permit
            </Link>
            , and the programme’s rules are in its <Out href={SRC.extension}>extension guide</Out>.
          </p>
        </Prose>
      </Section>

      {/* ===================== FROM PAKISTAN ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="From Lahore, Islamabad or Karachi"
          title="How do you apply from Pakistan?"
          subtitle="The business assessment is online. The permit application is made in person."
        />
        <Prose>
          <p>
            The Danish Embassy in Islamabad says every residence-permit application from Pakistan,
            including work permits, must be submitted in person at the Gerry’s/VFS visa centre, and its{' '}
            <Out href={SRC.embassyFee}>fee page</Out> names centres in Islamabad, Lahore and Karachi. You
            pay SIRI’s fee to the Danish authorities, and the visa centre charges its own service fee on
            top. The embassy forwards the application to Denmark for a decision.
          </p>
          <p>
            The same <Out href={SRC.embassy}>embassy page</Out> carries a blunt warning: applicants should
            not contact agents, because agents charge high prices for false documents, which usually
            lead to a refusal. That warning is worth taking literally. Start-up Denmark asks for your own
            business, your own ownership and your own video in your own words. No adviser can supply
            those, and anyone offering a ready-made business plan or a “guaranteed approval” is selling
            exactly what the panel is trained to spot.
          </p>
          <p>
            For proof of funds, use money in an account in your own name, with a statement showing the
            currency, the date it was issued and you as the owner. If your funds are spread across family
            accounts, or held in cryptocurrency, move them well before you apply.
          </p>
        </Prose>
      </Section>

      {/* ===================== SCREENED OUT ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Before the panel sees it"
          title="Why are applications screened out?"
          subtitle="The programme’s secretariat rejects an application without sending it to the panel for any of these reasons. All of them are avoidable."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SCREENED.map(([t, d]) => (
            <div key={t} className="card p-7">
              <h3 className="font-serif text-xl text-ink-900">{t}</h3>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===================== HOW WE HELP ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Working with us"
          title="How we help with Start-up Denmark"
          subtitle="We prepare Start-up Denmark applications for founders in Pakistan. What we do, and what we cannot do, is below."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="card p-7">
            <p className="eyebrow">What we do</p>
            <ul className="mt-5 space-y-3 text-ink-600">
              {[
                'Test your idea against the four tests and four scoring questions before you spend money on it, and tell you plainly if it is likely to be screened out.',
                'Help you structure the business plan and the 15-page pitch deck, so every required element is there and each scoring question is answered.',
                'Help you prepare for the video pitch, which must be you, in your own words.',
                'Prepare the SIRI permit file, including proof of funds and ownership, and the in-person submission in Pakistan.',
                'Help with the extension when the two years are up.',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <Callout title="What no one can do for you">
            <p>
              The panel decides whether your business is approved, and SIRI decides whether you get a
              permit. No consultant can influence either, and no one can honestly promise an approval,
              which is why we publish a{' '}
              <Link href="/no-guarantee-policy" className={a}>
                no-guarantee policy
              </Link>
              .
            </p>
            <p>
              The idea, the numbers and the ambition have to be yours. If your business is a restaurant,
              a shop or a trading firm, or you want residence without running a company, we will tell
              you on the first call that this scheme does not fit, and look at what might. Our{' '}
              <Link href="/europe" className={a}>
                Europe page
              </Link>{' '}
              covers the other routes.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="Questions about Start-up Denmark" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Read it at the source"
          title="Official sources"
          subtitle={`Everything on this page comes from these pages, as they stood on ${CHECKED}. Where we print a figure, check it here on the day you need it.`}
        />
        <Prose>
          <ul>
            <li>
              Danish Business Authority, <Out href={SRC.programme}>About the Startup Denmark programme</Out>
            </li>
            <li>
              Danish Business Authority, <Out href={SRC.guide}>Application guide for startups</Out>
            </li>
            <li>
              Danish Business Authority, <Out href={SRC.extension}>Application guide for extension</Out>
            </li>
            <li>
              Retsinformation, <Out href={SRC.decree}>the Startup Denmark decree, BEK nr 969 af 15/06/2022 (in Danish)</Out>
            </li>
            <li>
              SIRI, <Out href={SRC.siri}>Start-up Denmark residence and work permit</Out>
            </li>
            <li>
              SIRI, <Out href={SRC.selfSupport}>Self-support requirements</Out>
            </li>
            <li>
              SIRI, <Out href={SRC.family}>Accompanying family members</Out>
            </li>
            <li>
              Embassy of Denmark in Pakistan, <Out href={SRC.embassy}>Residence permit</Out> and{' '}
              <Out href={SRC.embassyFee}>application fee</Out>
            </li>
          </ul>
        </Prose>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated={CHECKED} />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you spend on a pitch deck"
        title="Find out whether your idea fits Start-up Denmark"
        subtitle="Tell us what the business does, who owns it and where it will grow. We will tell you honestly whether it is likely to reach the panel, and what the application would involve."
        page={PAGE}
        targetCountry="Denmark"
        waMessage="Hi, I’d like to know whether my business idea fits Start-up Denmark."
      />
    </>
  );
}
