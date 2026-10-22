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
 * Newfoundland and Labrador Provincial Nominee Program (NLPNP).
 *
 * Deliberately does NOT enumerate current streams or their criteria. Provincial
 * stream frameworks are revised and sometimes replaced wholesale, so this page
 * teaches the KINDS of stream a province runs and sends the reader to gov.nl.ca
 * for what is open on the day they read it. Do not add stream names, fees,
 * processing times, points values or draw statistics to this file.
 */
export const metadata: Metadata = {
  title: 'Newfoundland and Labrador Provincial Nomination (NLPNP)',
  description:
    'How the Newfoundland and Labrador Nominee Program works: expression of interest, enhanced versus base nomination, and the intent-to-settle expectation.',
  alternates: { canonical: '/pnp/newfoundland-labrador' },
};

const PAGE = 'pnp-newfoundland-labrador';

const STREAM_KINDS = [
  {
    icon: 'building' as const,
    kicker: 'Employer-driven',
    title: 'A job offer from a provincial employer',
    body: 'The most common shape of provincial nomination anywhere in Canada. A named employer in the province offers you a genuine, ongoing role, and the province assesses both the offer and you. No offer means no application under this kind of stream.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Occupation-led',
    title: 'Work the province is short of',
    body: 'Some streams target occupations the province cannot fill locally — often health care, skilled trades, aquaculture and marine work, construction and technology. Which occupations count is a provincial decision and it moves.',
  },
  {
    icon: 'star' as const,
    kicker: 'Graduate',
    title: 'People who studied there and stayed',
    body: 'Provinces reserve pathways for graduates of their own institutions who are already working in the province on a post-graduation work permit. Retention of graduates is a stated policy goal in Atlantic Canada.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Entrepreneur',
    title: 'Starting or buying a business',
    body: 'Business categories expect you to own and actively run an operating business in the province — not to hold a passive investment. They are assessed on the business plan and on what you actually build afterwards.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Francophone',
    title: 'French-speaking applicants',
    body: 'French ability is treated as an asset in several federal and provincial routes. Where a province runs a francophone pathway, it usually sits alongside — not instead of — the ordinary streams.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Adjacent, not the same',
    title: 'Federal Atlantic and rural routes',
    body: 'Newfoundland and Labrador also participates in employer-designated federal routes that are not provincial nomination at all. They are a different legal mechanism with different obligations.',
  },
];

const STEPS = [
  {
    title: 'Work out whether you have a real connection',
    body: 'A job offer, a completed programme of study there, prior work in the province, or a business you genuinely intend to operate. Most nomination routes rest on one of these. Wanting to move is not, by itself, a connection.',
  },
  {
    title: 'Read what is open today, on the province’s own site',
    body: 'Provincial streams open, pause, close and get replaced. Whatever a third-party page told you last year — including this one — check the current position at gov.nl.ca before you commit money or notice period.',
  },
  {
    title: 'Register an expression of interest where one is required',
    body: 'The province operates an expression-of-interest model for parts of the programme: you register a profile, and the province invites candidates from that pool against its own prioritisation criteria rather than processing every registration in turn.',
  },
  {
    title: 'File the nomination application on invitation or directly',
    body: 'Depending on the stream, you either apply after an invitation or apply directly. This is where the employer documents, credentials, language results and settlement evidence are actually assessed.',
  },
  {
    title: 'Nomination — enhanced or base',
    body: 'An enhanced nomination attaches to an existing Express Entry profile. A base nomination does not, and leads to a paper-based permanent residence application to IRCC instead. Which one you receive depends on the stream you applied under.',
  },
  {
    title: 'Apply to IRCC for permanent residence',
    body: 'Nomination is a provincial decision. Permanent residence is a federal one. IRCC assesses admissibility, medicals, security and the genuineness of what you filed — and can refuse an applicant the province nominated.',
  },
];

const FAQS = [
  {
    q: 'Which NLPNP streams are open right now, and what are the criteria?',
    a: 'We deliberately do not list them here. Provincial stream frameworks are revised and sometimes replaced entirely, and a page that names streams becomes actively misleading the moment one closes. The Office of Immigration and Multiculturalism publishes what is open, and the criteria for each, on gov.nl.ca. Read it there on the day you need it.',
  },
  {
    q: 'What is the difference between an enhanced and a base nomination?',
    a: 'An enhanced nomination is issued under a stream aligned with Express Entry and is applied to an existing Express Entry profile, after which you apply for permanent residence through that system. A base nomination sits outside Express Entry and leads to a separate application to IRCC. The practical difference is which federal process you then enter, and how the paperwork and timelines run.',
  },
  {
    q: 'Do I need a job offer?',
    a: 'For employer-driven streams, yes — a genuine, ongoing offer from an employer in the province is the foundation of the application. Graduate and business categories work differently. Whether any stream exists at a given time that needs no offer at all is a question to answer against the province’s current programme page, not against a general assumption.',
  },
  {
    q: 'Can I get nominated by Newfoundland and Labrador and then move to Toronto?',
    a: 'The nomination is granted on the basis that you intend to live and work in the province. Presenting an intention you do not hold is misrepresentation, with consequences that outlast the application. Beyond the legal point, arriving somewhere you never meant to stay tends to unravel — the job goes, the employer relationship goes, and the file becomes much harder to defend.',
  },
  {
    q: 'Is a smaller province an easier way in?',
    a: 'It is a common assumption and an expensive one. Provinces nominate against their own labour needs and their own settlement priorities, and an application with no credible reason for choosing that province is weak on its face. Choose the province where the work and the connection actually are.',
  },
  {
    q: 'Does a provincial nomination guarantee permanent residence?',
    a: 'No. Nomination and permanent residence are two decisions by two governments. IRCC assesses admissibility, medical and security requirements, and the accuracy of what you submitted, and it can refuse a nominated applicant. Nobody can honestly promise you the federal outcome.',
  },
  {
    q: 'How long does nomination take and what does it cost?',
    a: 'Both change, and both are published by the province and by IRCC on their own sites. We will not print figures here that you might rely on a year from now. Ask us what your file is likely to involve, and read the current numbers at the source.',
  },
];

export default function NewfoundlandLabradorPnpPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Provincial nomination"
        title={
          <>
            Newfoundland and Labrador wants people who{' '}
            <span className="text-gold-300">intend to stay</span>
          </>
        }
        subtitle={
          <>
            The NLPNP is a settlement programme before it is an immigration shortcut. Here is how
            provincial nomination works structurally — and why picking a province you have no
            connection to is one of the more costly mistakes we see.
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
          title="What Newfoundland and Labrador is actually looking for"
        />
        <Prose>
          <p>
            Newfoundland and Labrador is Canada’s easternmost province: an island and a large
            mainland territory, with most of the population concentrated around St. John’s and a
            scatter of smaller communities along the coast. It is not a large labour market, and it
            does not behave like one.
          </p>
          <p>
            Its economy has historically rested on fisheries and aquaculture, offshore oil and gas,
            mining, and the public sector — with health care, skilled trades, construction and a
            growing technology and ocean-science sector drawing on immigration alongside them. Like
            the rest of Atlantic Canada, it has faced an ageing population and out-migration of
            younger workers, which is the policy problem provincial nomination exists to help with.
          </p>
          <p>
            That context explains the selection logic. The province is not simply looking for strong
            candidates in the abstract; it is looking for people who will fill a role its own labour
            market cannot fill, and then remain. Retention is the point. An applicant who looks
            excellent on paper but has no credible reason to still be in Newfoundland and Labrador
            years later is not what the programme is designed to select.
          </p>
        </Prose>
      </Section>

      {/* ===================== KINDS OF STREAM ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Categories, not a stream list"
          title="The kinds of stream a province runs"
          subtitle="We describe the shapes rather than naming streams. Provincial frameworks are revised and replaced; a list here would be wrong before you read it."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STREAM_KINDS.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Check the province’s own page before you rely on anything">
            <p>
              Streams open, pause, close and are replaced — sometimes with little notice, sometimes
              wholesale. Any third-party page listing current criteria, including this one, should be
              treated as background rather than authority. The Government of Newfoundland and Labrador
              publishes the{' '}
              <a
                href="https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/overview/"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                current NLPNP programme details
              </a>
              , and IRCC publishes the federal side on its{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                provincial nominees pages
              </a>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW IT RUNS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="How a provincial nomination actually runs"
          subtitle="Two governments, in this order. The province nominates; only the federal government grants permanent residence."
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

      {/* ===================== EOI + ENHANCED VS BASE ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Expression of interest"
              title="A pool, not a queue"
            />
            <Prose>
              <p>
                Newfoundland and Labrador operates an expression-of-interest model for parts of its
                programme. You register a profile describing your work, education, language ability
                and connection to the province, and you enter a pool. The province then invites
                candidates from that pool against prioritisation criteria it sets and can revise.
              </p>
              <p>
                Two consequences follow, and both matter. First, registering is not applying —
                nothing is assessed until you are invited and file the actual application. Second,
                there is no fixed waiting order, so nobody can tell you when your turn arrives.
                Anyone who quotes you a date for an invitation is guessing.
              </p>
              <p>
                Not every route runs through the pool. Some are filed directly. Which applies to you
                depends on the stream, which is again a question for the province’s current page.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading
              eyebrow="Enhanced or base"
              title="Two nominations, two federal paths"
            />
            <ul className="mt-6 space-y-4">
              {[
                ['Enhanced nomination', 'Issued under a stream aligned with Express Entry, and applied to an existing Express Entry profile. Your permanent residence application then runs through that system.'],
                ['A nomination is not an invitation', 'Accepting an enhanced nomination adds points to your Express Entry ranking, which materially improves your position. It does not, by itself, produce an invitation to apply. Invitations are issued by IRCC in rounds it schedules and designs — including rounds limited to provincial nominees — on criteria it publishes and can change. Anyone telling you a nominee is automatically invited at the next round is describing something that does not exist.'],
                ['Base nomination', 'Issued outside Express Entry. It leads to a separate permanent residence application to IRCC, on a different process and a different timeline.'],
                ['You must already qualify', 'An enhanced nomination presupposes a valid Express Entry profile. If you are not eligible for a federal Express Entry programme, an enhanced stream is not available to you.'],
                ['Nomination is not the decision', 'Either way, IRCC makes the permanent residence decision independently — admissibility, medicals, security and the genuineness of the file.'],
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
            <p className="mt-6 text-ink-600 text-pretty">
              If you are unsure whether you have a viable Express Entry profile at all, start with{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                how Express Entry works
              </Link>{' '}
              before you think about which province to approach.
            </p>
          </div>
        </div>
      </Section>

      {/* ===================== INTENT TO SETTLE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The expectation nobody reads carefully"
          title="Genuine intent to live in the province"
        />
        <Prose>
          <p>
            A province nominates you because it expects you to live there. That expectation is not
            decorative. It is assessed — through your ties, your employment, your explanation of why
            this province, and the plausibility of the whole picture — and a nomination given on a
            stated intention you do not hold is obtained by misrepresentation.
          </p>
          <p>
            Permanent residence, once granted, carries mobility rights under the Charter, and this
            is where people convince themselves the intent requirement is theoretical. It is not.
            What is assessed is whether the intention you stated was genuine when you stated it. A
            file that shows you were arranging a life elsewhere the entire time is a file with a
            problem, and a misrepresentation finding carries a bar on applying again — the length of
            that bar, and how it is applied, is set out by IRCC on its own{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              provincial nominee and inadmissibility pages
            </a>
            .
          </p>
          <p>
            The practical version of this is simpler than the legal one. If you cannot explain to a
            friend why you want to live in Newfoundland and Labrador — the work, the community, the
            people already there — you will not explain it convincingly to an officer either.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Province shopping.</strong> Choosing a province because someone described it as
            the easy door. It produces an application with no coherent reason for the choice, and the
            weakness is visible to the person assessing it.
          </p>
          <p>
            <strong>Relying on a stream that has changed.</strong> Building a plan around criteria
            copied from a blog, an agent’s brochure or an old forum post. Provincial frameworks are
            revised, and applicants discover this after resigning from a job.
          </p>
          <p>
            <strong>A job offer that does not hold up.</strong> An offer arranged for the purpose of
            an application, from an employer who cannot demonstrate a real ongoing role, fails on the
            provincial side and can taint the federal one.
          </p>
          <p>
            <strong>Treating a pool registration as an application.</strong> Registering an
            expression of interest and then waiting, on the assumption that something is in progress.
            Nothing is being assessed until an invitation arrives.
          </p>
          <p>
            <strong>Documents someone else prepared.</strong> Experience letters or credentials
            arranged by a third party, containing claims you cannot support, are misrepresentation
            whether or not you wrote them. The consequence lands on you, not the agent.
          </p>
          <p>
            <strong>Assuming nomination ends the process.</strong> The federal application is a
            separate assessment with its own requirements, and people are refused after nomination —
            usually on admissibility, medical or documentary grounds they did not anticipate.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you have no connection to the province, this is the wrong door">
            <p>
              Provincial nomination is not a general-purpose alternative for people who do not
              qualify federally. It suits applicants with a real link to Newfoundland and Labrador —
              an employer there, study completed there, prior work there, a business they genuinely
              intend to run there, or close family already settled. Without one of those, most
              streams have no entry point for you at all.
            </p>
            <p>
              It also tends not to suit applicants who want a large-city labour market, a wide choice
              of employers in their field, or an established community of their own from home. Those
              are legitimate priorities, and pretending otherwise to win a nomination sets up a move
              that does not last. Nor does it suit anyone whose plan depends on arriving and
              relocating — that plan is a misrepresentation risk, not a strategy.
            </p>
            <p>
              If Express Entry on your own merits is realistic, that is usually the cleaner route.
              Check where you stand with our{' '}
              <Link href="/tools/crs-calculator" className="font-semibold text-accent-500 link-underline">
                CRS calculator
              </Link>
              , compare the other provinces on our{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nomination overview
              </Link>
              , and note that Newfoundland and Labrador also participates in the{' '}
              <Link
                href="/atlantic-immigration-program"
                className="font-semibold text-accent-500 link-underline"
              >
                Atlantic Immigration Program
              </Link>{' '}
              and in federal{' '}
              <Link
                href="/rural-community-immigration"
                className="font-semibold text-accent-500 link-underline"
              >
                rural community immigration
              </Link>{' '}
              routes — both employer-designated federal mechanisms rather than provincial nomination.
              Which communities and employers are designated under them is set federally and
              changes, so check the current designations at the source before planning around one.
            </p>
            <p>
              We would rather tell you on the first call that this does not fit than take a fee for a
              file that was never going to work — which is why we publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where the current details live"
          title="Streams, criteria, fees and timelines"
        />
        <Prose>
          <p>
            Everything that changes — which streams are open, what each requires, prioritisation
            criteria, fees and processing times — is published by the two governments that decide it.
            We do not reproduce those figures here, because a number that is correct today is a
            liability on a page you might read next year.
          </p>
          <p>
            The Office of Immigration and Multiculturalism publishes the{' '}
            <a
              href="https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/overview/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              NLPNP programme pages
            </a>{' '}
            for the provincial side, and IRCC publishes the federal side under{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              provincial nominees
            </a>
            . Read the figures at the source, on the day you need them.
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="The questions people actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you choose a province"
        title="Find out whether Newfoundland and Labrador is the right province for your file"
        subtitle="Tell us your occupation, your experience, and whether you have any real connection to the province — an employer, study, family. We will tell you honestly whether provincial nomination fits, and if it does not, which route might."
        page={PAGE}
        waMessage="Hi, I’d like to know whether the Newfoundland and Labrador provincial nominee route is realistic in my situation."
      />
    </>
  );
}
