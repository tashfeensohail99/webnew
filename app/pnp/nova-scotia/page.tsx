import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  Callout,
  FAQ,
  CTASection,
  Prose,
  Icon,
} from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

/**
 * Nova Scotia Nominee Program (NSNP).
 *
 * Deliberately does NOT list current streams, criteria or figures. Provincial
 * stream frameworks get replaced wholesale, and both Nova Scotia and other
 * provinces have consolidated or rebuilt their nominee structures outright. A
 * page that lists them is stale within months and actively misleads. What does
 * not change is the shape: what the province is looking for, how nomination is
 * structured, and the settlement expectation behind it.
 */
export const metadata: Metadata = {
  title: 'Nova Scotia Provincial Nomination (NSNP)',
  description:
    'How the Nova Scotia Nominee Program works: expression of interest, Express Entry-aligned and base nomination, and the intent-to-settle expectation.',
  alternates: { canonical: '/pnp/nova-scotia' },
};

const PAGE = 'pnp-nova-scotia';

const STREAM_KINDS = [
  {
    icon: 'building' as const,
    kicker: 'Employer-driven',
    title: 'A Nova Scotia employer needs you',
    body: 'The province nominates because a local employer has a vacancy they could not fill. The offer, the employer’s standing and the genuineness of the role are all examined.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Occupation-driven',
    title: 'Your occupation is in demand',
    body: 'Some nominations run on occupation rather than on a named employer, where the province has identified a shortage. Which occupations qualify is revised as the labour market moves, sometimes without much notice.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Graduate',
    title: 'You studied in the province',
    body: 'Provinces commonly reserve capacity for people who studied at their own institutions, on the reasoning that they have already lived there and are more likely to stay.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Business',
    title: 'You will run or buy a business',
    body: 'Entrepreneur and self-employed categories nominate people who will operate a business in the province. These carry their own capital, ownership and residency conditions, and are a different exercise entirely from a skilled-worker file.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Francophone',
    title: 'You work in French',
    body: 'French-speaking capacity is a priority across Canada outside Quebec. Provinces run or prioritise categories for francophone and bilingual candidates.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Mobility',
    title: 'You are already working in Canada',
    body: 'Some categories are aimed at people already in Canada on a work permit, transitioning temporary status into permanent residence.',
  },
];

const STEPS = [
  {
    title: 'You check what is actually open',
    body: 'Streams open, close, pause and are replaced. Before anything else, read the province’s own programme pages for what exists on the day you are applying — not an agent’s summary, and not this page.',
  },
  {
    title: 'You submit an expression of interest',
    body: 'For most streams you first register a profile signalling interest and setting out your work history, education, language results and any Nova Scotia connection. An expression of interest is not an application and creates no entitlement.',
  },
  {
    title: 'The province draws from the pool',
    body: 'Nova Scotia periodically selects profiles for processing. Selection reflects provincial priorities, the occupations in demand at that moment, and how much federal allocation the province has left. Nobody outside government can predict a draw.',
  },
  {
    title: 'You file the nomination application',
    body: 'If invited, you submit the full application with evidence — employment records, credentials, language testing, identity documents, and whatever demonstrates your connection to and intent to live in Nova Scotia.',
  },
  {
    title: 'The province decides',
    body: 'A nomination certificate, if issued, is a provincial decision valid for a limited window. Refusal at this stage ends that attempt; it is not a federal decision and does not by itself bar you elsewhere.',
  },
  {
    title: 'IRCC decides permanent residence',
    body: 'Nomination is a recommendation, not an approval. IRCC runs its own assessment — admissibility, medicals, security, and the truthfulness of everything filed. A nomination does not survive a misrepresentation finding.',
  },
];

const FAQS = [
  {
    q: 'Which Nova Scotia streams are open right now, and what are the criteria?',
    a: 'We deliberately do not publish that here. Nova Scotia has restructured and consolidated its nominee streams, and provinces across Canada revise, merge and close streams regularly. Any list we printed would eventually be wrong in a way that costs a reader money. The province publishes what is open, and its own criteria, on its official immigration site at liveinnovascotia.com — read it there on the day you need it.',
  },
  {
    q: 'Is a Nova Scotia nomination easier to get than one from a larger province?',
    a: 'That framing is the mistake. Each province nominates against its own labour market and its own allocation, and a smaller province does not mean a lower bar — it often means fewer nominations available and a narrower set of occupations that qualify. Choosing a province because it looks less competitive, rather than because you would actually live and work there, is one of the more expensive errors we see.',
  },
  {
    q: 'Do I have to actually live in Nova Scotia after landing?',
    a: 'A province nominates on the understanding that you intend to settle there. Once you are a permanent resident, mobility rights under Canadian law are a matter of federal status rather than provincial control — but that is not a loophole to plan around. Evidence that you never intended to settle in the province goes to the honesty of your application, and misrepresentation carries consequences that outlast any nomination.',
  },
  {
    q: 'What is the difference between an Express Entry-aligned nomination and a base one?',
    a: 'An Express Entry-aligned (enhanced) nomination requires you to already meet the criteria for one of the federal Express Entry programmes and to have a profile in that pool; the nomination then attaches to it and you apply federally through Express Entry. A base nomination sits outside Express Entry — you apply to IRCC through its separate non-Express Entry provincial nominee route instead, which has its own forms, document checklist and processing track. The evidentiary work is similar; the federal pathway afterwards is not. IRCC publishes the current requirements and submission method for both routes on canada.ca.',
  },
  {
    q: 'Do I need a job offer from a Nova Scotia employer?',
    a: 'It depends entirely on the stream, and that is precisely what shifts. Employer-driven categories obviously need one. Occupation-driven and Express Entry-aligned categories may not. Rather than guessing, check what is open and what it requires before you start collecting documents.',
  },
  {
    q: 'How is this different from the Atlantic Immigration Program?',
    a: 'The Atlantic Immigration Program is a separate federal route running across the four Atlantic provinces, built around designated employers rather than provincial nomination. If you are looking at Nova Scotia, both are worth understanding, because a candidate who does not fit one sometimes fits the other.',
  },
  {
    q: 'Can you guarantee me a Nova Scotia nomination?',
    a: 'No. Two governments make two separate decisions here and neither is ours. Anyone quoting you odds, a draw score, or a timeline for a provincial nomination is inventing them.',
  },
];

export default function NovaScotiaPnpPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Provincial nomination"
        title={
          <>
            Nova Scotia nominates people who{' '}
            <span className="text-gold-300">intend to stay</span>
          </>
        }
        subtitle={
          <>
            The Nova Scotia Nominee Program exists to fill the province’s own labour needs and to
            hold on to the people it attracts. This page explains how nomination works structurally
            — and why we will not print a stream list that goes stale.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT THE PROVINCE WANTS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The province, plainly"
          title="What Nova Scotia is looking for"
        />
        <Prose>
          <p>
            Nova Scotia is a small Atlantic province with one substantial urban centre, Halifax, and
            a large rural and coastal remainder. Its economy leans on the ocean — fisheries and
            seafood processing, shipbuilding, ports and marine logistics — alongside healthcare,
            universities, agriculture and food production, tourism, natural resources, and a
            growing professional and technology sector concentrated around Halifax.
          </p>
          <p>
            Two facts about the province shape its immigration policy more than anything else. Its
            population skews older than the Canadian average, which puts sustained pressure on
            healthcare and on the trades. And historically it has struggled with out-migration:
            people arrive, and then leave for larger provinces. So Nova Scotia does not simply want
            arrivals. It wants people who will still be there years later.
          </p>
          <p>
            That single priority explains most of how the programme behaves. It explains why
            connections to the province matter — a job offer from a Nova Scotia employer, study at a
            Nova Scotian institution, family already settled there, prior work in the province. It
            explains why occupations tied to the province’s actual gaps are favoured over generally
            impressive résumés. And it explains why an application that reads as though the province
            is a convenient entry point rather than a destination tends not to succeed.
          </p>
        </Prose>
      </Section>

      {/* ===================== HOW NOMINATION WORKS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The mechanism"
          title="Two routes into permanent residence, and one decision that is not the province’s"
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Prose>
              <p>
                Provincial nomination is a shared jurisdiction. Under agreements with the federal
                government, provinces may nominate a limited number of candidates each year for
                permanent residence, against an allocation set federally. The province decides who to
                nominate. Only IRCC decides who becomes a permanent resident.
              </p>
              <p>
                Nova Scotia nominates through two structurally different mechanisms, and the
                distinction matters more than most applicants realise.
              </p>
            </Prose>
          </div>
          <div>
            <ul className="mt-6 space-y-4">
              {[
                [
                  'Enhanced (Express Entry-aligned)',
                  'You must already qualify for a federal Express Entry programme and have a profile in the pool. The nomination attaches to that profile and you complete the process federally through Express Entry.',
                ],
                [
                  'Base (non-Express Entry)',
                  'Nomination sits outside Express Entry. You apply to IRCC through the non-Express Entry provincial nominee route instead, on its own processing track and with its own document requirements. IRCC sets how that application is submitted — check its current instructions rather than assuming.',
                ],
                [
                  'Expression of interest first',
                  'Most streams now begin with a profile registered in a pool, from which the province periodically draws. Registering is not applying, and being in the pool confers nothing.',
                ],
                [
                  'Nomination is not approval',
                  'A nomination certificate is a provincial recommendation with a limited validity window. The federal decision is separate and independent.',
                ],
              ].map(([term, def]) => (
                <li key={term} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-serif text-lg text-ink-900">{term}</p>
                    <p className="mt-1 text-ink-600 text-pretty">{def}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Callout title="Why there is no stream list on this page">
            <p>
              Provincial streams are among the fastest-moving parts of Canadian immigration. Nova
              Scotia has consolidated its nominee streams outright, and other provinces have
              replaced their stream frameworks wholesale. Criteria, eligible occupations and even
              stream names change between the day a page is written and the day it is read.
            </p>
            <p>
              A page that lists streams is therefore worse than a page that does not, because it
              gives a reader confidence in something that may already be wrong. What is open today,
              and on what terms, lives on the province’s own site — and nowhere else is authoritative.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== KINDS OF STREAM ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Categories, not a catalogue"
          title="The kinds of stream provinces run"
          subtitle="These categories are stable even when the specific streams inside them are not. Use them to work out which conversation you are actually having, then check the province for what exists today."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STREAM_KINDS.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How a nomination file actually runs"
          subtitle="Two governments, in this order. Skipping ahead in your own planning is how people end up committed to a route that was never open to them."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-medium text-ink-950">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-xl text-ink-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-ink-600 text-pretty">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Province-shopping.</strong> Picking whichever province currently looks least
            competitive, with no connection to it and no intention of living there. Provinces assess
            intent to settle, and a file with no plausible link to Nova Scotia reads exactly as what
            it is. This is the single most common and most expensive error on this route.
          </p>
          <p>
            <strong>Preparing against criteria that have changed.</strong> Applicants spend months
            and money assembling documents for a stream that has since been narrowed, paused or
            replaced. Confirm what is open before you begin, not after.
          </p>
          <p>
            <strong>Treating an expression of interest as an application.</strong> A profile in a
            pool is a signal, not a claim. It creates no queue position you can rely on and no
            entitlement to be drawn.
          </p>
          <p>
            <strong>A job offer that will not withstand scrutiny.</strong> Employer-driven
            nominations turn on whether the employer, the vacancy and the terms are genuine. An offer
            arranged as paperwork rather than as real employment is liable to be refused, and paying
            for one can put your admissibility at risk as well.
          </p>
          <p>
            <strong>Assuming nomination equals permanent residence.</strong> IRCC assesses
            admissibility, medicals, security and the truthfulness of the file independently. A
            nomination does not insulate an application from any of that.
          </p>
          <p>
            <strong>Documents you did not write.</strong> Experience letters or offer letters
            produced by a third party, containing claims you cannot support, are misrepresentation
            whether or not you drafted them. The consequence lands on you and outlasts the file.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you would not actually live in Nova Scotia, do not apply to Nova Scotia">
            <p>
              A nominating province is choosing you on the expectation that you will settle there,
              work there and stay. If your real plan is Toronto, Calgary or Vancouver, and Nova
              Scotia is a means of entry, this is the wrong route — and it is not a clever one. It
              wastes time and money, it puts a settlement question into your file that you cannot answer
              honestly, and it is entirely avoidable.
            </p>
            <p>
              This route also tends not to suit people whose occupation is not among the province’s
              actual gaps, however strong their credentials; people with no connection at all to the
              province and no employer interest in them; and anyone who needs a decision on a fixed
              timetable, since provincial draws are not announced in advance and cannot be planned
              around.
            </p>
            <p>
              If your profile is competitive on its own merits, the federal route may be the more
              direct conversation —{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                see Express Entry
              </Link>
              . If your interest is genuinely Atlantic Canada, the{' '}
              <Link
                href="/atlantic-immigration-program"
                className="font-semibold text-accent-500 link-underline"
              >
                Atlantic Immigration Program
              </Link>{' '}
              works on a different mechanism and sometimes fits where nomination does not. We would
              rather say on the first call that this does not fit than take a fee for a file that was
              never going to work, which is why we publish a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Where the current details live"
          title="Streams, criteria, fees and draws"
        />
        <Prose>
          <p>
            Which streams are open, what each requires, what the province charges and when it draws
            from its pool all change — sometimes with little notice. We do not publish those figures
            here, because a number that is correct today is a liability on a page you might read next
            year.
          </p>
          <p>
            Nova Scotia publishes its own programme pages, submission guides and stream criteria at{' '}
            <a
              href="https://liveinnovascotia.com/nova-scotia-nominee-program"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              liveinnovascotia.com
            </a>
            , the Government of Nova Scotia’s official immigration site. The federal side — how
            nomination interacts with Express Entry and how the permanent residence application runs
            — is published by IRCC on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            . Read both at the source, on the day you need them.
          </p>
          <p>
            For how provincial nomination fits into the wider picture, see our{' '}
            <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
              overview of provincial nominee programmes
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="The questions people actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you commit to a province"
        title="Find out whether Nova Scotia is genuinely your route"
        subtitle="Tell us your occupation, your experience, your language results and whether you have any real connection to the province. We will tell you honestly whether nomination is realistic — and if it is not, which route might be."
        page={PAGE}
        waMessage="Hi, I’d like to understand whether a Nova Scotia provincial nomination is realistic in my situation."
      />
    </>
  );
}
