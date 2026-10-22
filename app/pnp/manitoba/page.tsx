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
 * Manitoba Provincial Nominee Program (MPNP).
 *
 * Deliberately structural. Provincial streams open, close and are renamed
 * constantly, so this page describes the KINDS of stream a province runs and
 * how the nomination machinery works — and sends the reader to the province's
 * own programme page for what is actually open on the day they read it.
 */
export const metadata: Metadata = {
  title: 'Manitoba Provincial Nomination (MPNP)',
  description:
    'How Manitoba’s nomination works: the expression-of-interest pool, base versus Express Entry-aligned streams, and the weight it gives a genuine connection.',
  alternates: { canonical: '/pnp/manitoba' },
};

const PAGE = 'pnp-manitoba';

const STREAM_KINDS = [
  {
    icon: 'building' as const,
    kicker: 'Employer-driven',
    title: 'A Manitoba employer wants you',
    body: 'Streams built around a job offer from an employer in the province, usually with the employer taking on a role in supporting or verifying the offer. The province is testing the employer as much as the candidate.',
  },
  {
    icon: 'permit' as const,
    kicker: 'In-demand occupation',
    title: 'Skills the province is short of',
    body: 'Streams aimed at occupations the province has identified as under-supplied. Which occupations qualify is revised as the labour market moves, so it is never safe to plan around last year’s list.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Graduate',
    title: 'Studied in the province',
    body: 'Streams for people who completed a programme at a designated institution in the province and are working, interning or building a business there. Study followed by work in the province is one of the connections provinces tend to treat as substantial, though the criteria vary by stream.',
  },
  {
    icon: 'star' as const,
    kicker: 'Entrepreneur and farm investment',
    title: 'Bringing a business',
    body: 'Streams for people who will buy, start or operate a business — including agricultural operations, which matter more in Manitoba than in most provinces. These carry their own net-worth, business-plan and performance obligations.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Francophone',
    title: 'French-speaking candidates',
    body: 'Manitoba has an established French-speaking community, and provinces outside Quebec commonly run dedicated recruitment for francophone and bilingual candidates.',
  },
  {
    icon: 'user' as const,
    kicker: 'Connection-based',
    title: 'Family or prior ties',
    body: 'Streams and scoring that reward a close relative settled in the province, or previous work or study there. Manitoba has historically leaned on this more heavily than most provinces.',
  },
];

const STEPS = [
  {
    title: 'Check what is actually open',
    body: 'Read the province’s own programme pages on the day you are deciding. Streams are opened, paused, replaced and renamed, and a stream someone describes to you may no longer exist in that form.',
  },
  {
    title: 'Submit an expression of interest',
    body: 'Manitoba runs a points-ranked expression-of-interest pool. An EOI is a profile, not an application: you answer questions about work, language, education and your ties to Manitoba, and you are scored and placed in a pool. Profiles do not sit there indefinitely — Manitoba sets how long an EOI stays live, and publishes that on its own site.',
  },
  {
    title: 'Wait to be selected from the pool',
    body: 'The province draws from the pool periodically and issues invitations — Manitoba calls its invitation a Letter of Advice to Apply. You cannot make a draw happen, and nobody can tell you in advance where the line will fall.',
  },
  {
    title: 'File the provincial application',
    body: 'Only after an invitation do you file the full application to the province, with the evidence behind every point you claimed and, typically, a demonstration that you can establish yourself economically in Manitoba.',
  },
  {
    title: 'Receive a nomination, if approved',
    body: 'A nomination is the province’s decision, not a visa and not permanent residence. It is a certificate saying Manitoba wants you as a permanent resident.',
  },
  {
    title: 'Apply to IRCC for permanent residence',
    body: 'The federal decision is separate. IRCC assesses admissibility — medical, criminal, security, truthfulness of the file — and can refuse a nominated applicant. Two governments, two decisions, in this order.',
  },
];

const FAQS = [
  {
    q: 'What is the difference between a base nomination and an enhanced one?',
    a: 'An enhanced nomination goes to someone who already has a live Express Entry profile and meets the criteria of a federal Express Entry programme; the provincial nomination is attached to that profile and the permanent residence application then runs through Express Entry. A base nomination is for candidates who are not in Express Entry — the permanent residence application is filed as a paper-based provincial nominee application instead. Provinces run both, and the balance between them shifts. Which one is available to you depends on the stream and on whether you are Express Entry-eligible in the first place.',
  },
  {
    q: 'Does a nomination guarantee permanent residence?',
    a: 'No. A nomination is a provincial decision that carries real weight federally, but IRCC makes the permanent residence decision independently and assesses admissibility and the truthfulness of your file. Nominated applicants are sometimes refused. Anyone who tells you a nomination makes approval certain is selling something.',
  },
  {
    q: 'Which Manitoba streams are open right now, and what are the cut-offs?',
    a: 'We deliberately do not publish stream lists, point cut-offs or draw scores here. They change constantly and a figure that is right today becomes a liability on a page you might read next year. Manitoba publishes its open streams, its scoring grid and its draw results on its own site. Read them at the source, on the day.',
  },
  {
    q: 'Can I be nominated by Manitoba and then move to Toronto or Vancouver?',
    a: 'The nomination rests on a genuine intention to live and work in the nominating province. Provinces build their assessment around evidence of that intention, and misrepresenting it is misrepresentation like any other. Once you are a permanent resident, mobility rights apply — but the file you signed will have said you intended to settle in Manitoba, and a nomination obtained on a stated intention you never held is a serious problem, not a technicality.',
  },
  {
    q: 'I have no connection to Manitoba. Should I apply there because it looks easier?',
    a: 'This is one of the more expensive mistakes people make. Provinces that draw heavily on connection are precisely the provinces where a candidate with no tie scores poorly and waits indefinitely. Choosing a province by perceived ease, rather than by where you actually have family, an employer, study history or a realistic occupation, usually produces a profile that sits in a pool and is never drawn.',
  },
  {
    q: 'Do I need a job offer?',
    a: 'It depends entirely on the stream. Some provincial streams are built around an employer; others are not. What is consistent is that a job offer, where required, must be genuine and from an employer that can withstand verification — a purchased or arranged offer is fraud and carries a bar on future applications.',
  },
  {
    q: 'Does a nomination help my Express Entry score?',
    a: 'A provincial nomination attached to an Express Entry profile adds a large block of points under the Comprehensive Ranking System, which ranks a nominated candidate well above the general pool. IRCC publishes the current value on its own pages. Be careful with how this is described to you: a high ranking is not an automatic invitation. IRCC decides when rounds are held, which programme or category a round targets, and how many invitations it issues — so nobody can tell you which round you will be invited in, or that you will be invited at all. And this only applies to enhanced nominations, on a profile that is already Express Entry-eligible.',
  },
  {
    q: 'How long does a Manitoba nomination take?',
    a: 'We will not give you a timeline. The province publishes its own processing information and IRCC publishes federal processing times separately, and both move. Any adviser quoting you a confident total from Pakistan to landing is guessing.',
  },
];

export default function ManitobaPnpPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Provincial nomination"
        title={
          <>
            Manitoba nominates people it believes{' '}
            <span className="text-gold-300">will actually stay</span>
          </>
        }
        subtitle={
          <>
            The Manitoba Provincial Nominee Program is not a shortcut to Canada. It is a province
            selecting workers, graduates and business owners it expects to build a life in Manitoba —
            and it weighs your connection to the province accordingly.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT MANITOBA WANTS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Start here"
          title="What Manitoba is looking for"
        />
        <Prose>
          <p>
            Every province nominates for its own reasons, and the reasons show up in who gets selected.
            Manitoba is a prairie province with a comparatively small population, one dominant urban
            centre in Winnipeg, and a set of rural and northern communities that struggle to hold on to
            working-age people. Its economy leans on agriculture and food processing, manufacturing —
            including aerospace, buses and agricultural equipment — transportation and logistics through
            Winnipeg’s rail and trucking corridors, mining in the north, and a large public health and
            education workforce.
          </p>
          <p>
            That produces a settlement priority as much as a labour one. Manitoba has run a nominee
            programme longer than most provinces and has consistently built it around retention: it
            would rather nominate someone with a reason to remain than a stronger candidate on paper who
            will leave for Toronto within a year. In practice that means demonstrable ties to the
            province — a close relative settled there, previous work or study in Manitoba, a Manitoba
            employer, or a business you are genuinely relocating — carry real weight in how the province
            selects.
          </p>
          <p>
            If you take one thing from this page, take that. The MPNP is not primarily a test of whether
            you are a good immigrant. It is a test of whether you are plausibly a{' '}
            <em>Manitoban</em>.
          </p>
        </Prose>
      </Section>

      {/* ===================== HOW NOMINATION WORKS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The machinery"
          title="How a provincial nomination actually works"
          subtitle="Two governments, two separate decisions. Understanding the split explains most of what confuses people about PNPs."
        />
        <Prose>
          <p>
            Under Canada’s immigration framework, most provinces and territories run a nominee programme
            and can nominate people for permanent residence. Not every one of them does — Quebec selects
            economic immigrants under its own separate system rather than by nomination, and IRCC lists
            which provinces and territories currently participate. A nomination is a provincial decision that says the
            province wants you. It is not a visa, not permanent residence, and not a guarantee — the
            federal government still assesses admissibility and still makes the final decision.
          </p>
          <p>
            Nominations come in two forms. An <strong>enhanced</strong> nomination attaches to a live
            Express Entry profile, and the permanent residence application then runs through the Express
            Entry system; the nomination adds a very large block of points to the candidate’s ranking. A{' '}
            <strong>base</strong> nomination is for candidates outside Express Entry, and the permanent
            residence application is filed directly as a provincial nominee application. Provinces run
            both, and how they divide their capacity between the two changes.
          </p>
          <p>
            Manitoba manages its intake through an expression-of-interest pool. You submit a profile, you
            are scored, and you sit in a ranked pool. The province draws from that pool and issues
            invitations — Manitoba’s term is a Letter of Advice to Apply. Only an invited candidate files
            a full application. This is why the honest answer to “when will I be selected” is that nobody
            knows: the province decides when it draws and how deep it goes.
          </p>
        </Prose>

        <div className="mt-10">
          <Callout title="Read the province’s own pages, not ours, for what is open">
            <p>
              Provincial streams are opened, suspended, replaced and renamed frequently, and provinces
              have on occasion repealed an entire stream framework at once and rebuilt it from scratch.
              Any page that lists streams and criteria is out of date within months, and acting on a
              stale list is how people waste a year. We describe the categories; the province publishes
              the current programme.
            </p>
            <p>
              Manitoba’s programme is published at{' '}
              <a
                href="https://immigratemanitoba.com/"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                immigratemanitoba.com
              </a>{' '}
              — including current streams, the scoring grid and draw results. The federal side of
              provincial nomination is explained by{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                IRCC
              </a>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== KINDS OF STREAM ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Categories, not a current list"
          title="The kinds of stream a province runs"
          subtitle="Names and criteria change. The underlying categories are stable, and knowing which one you plausibly fall into is the useful part."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STREAM_KINDS.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10">
          <Prose>
            <p>
              Not all of these exist in Manitoba at any given moment, and the ones that do exist may work
              differently from how they work in{' '}
              <Link href="/pnp/saskatchewan" className="font-semibold text-accent-500 link-underline">
                Saskatchewan
              </Link>{' '}
              or{' '}
              <Link href="/pnp/ontario" className="font-semibold text-accent-500 link-underline">
                Ontario
              </Link>
              . Use the categories to work out which conversation you are having, then check the
              province’s site for what is open.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How the process runs, in order"
          subtitle="You have no provincial application at all until the province invites you to file one."
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
            <strong>Applying to a stream that no longer exists.</strong> The single most common problem.
            Someone read a blog, or an agent quoted a stream from two years ago, and the file is built
            around criteria that have since been replaced. Provincial programmes move faster than the
            content written about them.
          </p>
          <p>
            <strong>Province-shopping.</strong> Choosing Manitoba because a forum said the score
            threshold was lower, with no relative there, no employer, no study history and no intention
            to stay. Connection-weighted programmes are exactly where an unconnected candidate scores
            worst. The profile sits in the pool and is never drawn.
          </p>
          <p>
            <strong>Points claimed but not evidenced.</strong> An expression of interest is self-declared.
            The full application is where every claim has to be documented. Points claimed for experience,
            language, relatives or education that cannot be evidenced to the province’s standard collapse
            at exactly the wrong moment.
          </p>
          <p>
            <strong>A relative who does not count as one.</strong> Relationship categories are defined
            precisely and the definitions differ by province and by stream. A cousin, a family friend or
            a relative who is not settled in the province in the way the programme requires may carry no
            weight at all.
          </p>
          <p>
            <strong>A purchased job offer.</strong> Where a stream requires an employer, that employer is
            verifiable and gets verified. An arranged offer from a business that cannot withstand scrutiny
            ends the file and, if it amounts to misrepresentation, bars you from applying again for a
            period set in law.
          </p>
          <p>
            <strong>Treating the nomination as the finish line.</strong> The federal application is a real
            assessment with its own refusal grounds. Medical inadmissibility, an undeclared prior refusal,
            or an inconsistency between what you told the province and what you told IRCC will end a
            nominated file.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you have no real link to Manitoba, this is probably not your route">
            <p>
              A nominating province is choosing residents. It expects a genuine intention to live and
              work there, and it builds its assessment around evidence of that intention. If you have
              never been to Manitoba, have no family there, no employer, no study history and no
              intention of remaining once you land, you are not the candidate the programme is designed
              to find — and saying otherwise on a form is misrepresentation, not strategy.
            </p>
            <p>
              It also tends not to suit people whose occupation is not connected to what the province’s
              economy actually needs, people whose language results are weak enough that no scoring grid
              will carry them, and people who need a decision on a fixed timetable — an
              expression-of-interest pool gives you no control over when, or whether, you are drawn.
            </p>
            <p>
              If you are a strong federal candidate, the honest first question is often whether{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry on its own
              </Link>{' '}
              is the better route, or whether a{' '}
              <Link
                href="/express-entry/category-based-draws"
                className="font-semibold text-accent-500 link-underline"
              >
                category-based draw
              </Link>{' '}
              fits your occupation. You can compare provinces on our{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nomination overview
              </Link>
              . And because neither the provincial nor the federal decision is ours to make, we publish a{' '}
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
          title="Streams, scores, fees and timelines"
        />
        <Prose>
          <p>
            We do not publish stream lists, points cut-offs, draw scores, fees or processing times on
            this page. Those are the details that change most often and that get repeated most carelessly
            elsewhere. A figure that is accurate this month is a trap on a page you read next year.
          </p>
          <p>
            Manitoba publishes its own programme, scoring and draw results at{' '}
            <a
              href="https://immigratemanitoba.com/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              immigratemanitoba.com
            </a>
            . IRCC publishes the federal side — how nominations work, fees and processing — on its{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              provincial nominees pages
            </a>
            . If you want a sense of where you stand federally before looking at any province, our{' '}
            <Link href="/tools/crs-calculator" className="font-semibold text-accent-500 link-underline">
              CRS calculator
            </Link>{' '}
            is a reasonable starting point.
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
        eyebrow="Before you pick a province"
        title="Find out whether Manitoba is a realistic route for you"
        subtitle="Tell us your occupation, your language results, and what — if anything — actually connects you to Manitoba. If the answer is nothing, we will say so, and tell you which route makes more sense."
        page={PAGE}
        waMessage="Hi, I’d like to know whether the Manitoba Provincial Nominee Program is realistic in my situation."
      />
    </>
  );
}
