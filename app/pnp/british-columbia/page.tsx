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
 * BC PNP — structural page.
 *
 * Deliberately lists NO current streams, scores, cut-offs or criteria. BC revises
 * its stream set and its selection weighting regularly, and a page that names
 * today's streams is wrong within a year. What does not change is the shape of the
 * programme: registration into a pool, invitation, application, nomination — and
 * the province's underlying interest in who actually stays.
 */
export const metadata: Metadata = {
  title: 'British Columbia Provincial Nomination (BC PNP)',
  description:
    'How British Columbia selects immigrants: how registration, invitation and nomination work, and base versus Express Entry-aligned nomination.',
  alternates: { canonical: '/pnp/british-columbia' },
};

const PAGE = 'pnp-british-columbia';

const STREAM_KINDS = [
  {
    icon: 'building' as const,
    kicker: 'Employer-driven',
    title: 'A job offer from a B.C. employer',
    body: 'The most common shape of provincial nomination anywhere in Canada. An employer in the province offers you an indeterminate, full-time role, and the nomination rests on that offer being genuine and on the employer meeting the province’s own conditions.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Occupation-targeted',
    title: 'Priority occupations and sectors',
    body: 'Provinces periodically favour occupations they cannot staff locally — health care, skilled trades, early childhood education, technology roles. Which occupations qualify, and on what terms, is revised as the labour market moves.',
  },
  {
    icon: 'star' as const,
    kicker: 'Graduate',
    title: 'Graduates of B.C. institutions',
    body: 'Provinces generally want to retain people they have already educated. Categories aimed at recent graduates of eligible institutions in the province are a standing feature of most PNPs, though the conditions attached to them change.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Entrepreneur',
    title: 'Business and investment routes',
    body: 'Separate streams for people establishing or buying a business in the province, usually with a performance agreement and a work permit period before any nomination is issued. A different discipline entirely from the skilled-worker routes.',
  },
];

const SEQUENCE = [
  {
    title: 'You register, you do not apply',
    body: 'Most provincial nomination begins with a registration or expression of interest — a profile in an online system describing your work, education, language ability and connection to the province. A registration is not an application and creates no entitlement.',
  },
  {
    title: 'Your registration is scored and pooled',
    body: 'The province ranks registrations against each other on factors it has chosen to weight. You sit in a pool with everyone else who registered under the same category. Registrations expire; they do not sit there indefinitely.',
  },
  {
    title: 'The province issues invitations',
    body: 'Periodically B.C. draws from the pool and invites candidates to apply. Being in the pool is not selection. Many registrations expire without an invitation, and no one — us included — can tell you when or whether yours will be drawn.',
  },
  {
    title: 'You apply for nomination',
    body: 'An invitation opens a short, fixed window in which to file a complete application with evidence for everything you claimed. Documents you cannot produce in that window are the single most common reason an invitation is wasted.',
  },
  {
    title: 'B.C. nominates — or refuses',
    body: 'A nomination is the province telling IRCC it wants you. It is not permanent residence, and it does not bind IRCC on admissibility, security or medical grounds.',
  },
  {
    title: 'You apply to IRCC for permanent residence',
    body: 'The federal application is separate and is assessed separately. This is the second of two decisions, and the province has no authority over it.',
  },
];

const FAQS = [
  {
    q: 'Which BC PNP streams are open right now, and what are the requirements?',
    a: 'We deliberately do not list them here. British Columbia revises its categories, its scoring and its priority occupations as the provincial labour market changes, and a page listing today’s streams misleads whoever reads it next year. The province publishes what is open, and the criteria attached to it, on WelcomeBC. That is the only reliable source, and it should be read on the day you act on it.',
  },
  {
    q: 'What is the difference between a base nomination and an Express Entry-aligned one?',
    a: 'An Express Entry-aligned (sometimes called enhanced) nomination requires you to already be eligible for and in the federal Express Entry pool. The nomination adds points to your federal ranking score and you then apply to IRCC through Express Entry. A base nomination does not require Express Entry eligibility; you apply to IRCC through the ordinary provincial nominee route instead. The provincial requirements differ, and so does how the federal side is processed.',
  },
  {
    q: 'Does a nomination guarantee permanent residence?',
    a: 'No. A nomination is a provincial recommendation. IRCC makes the permanent residence decision independently and assesses admissibility, security, medical grounds and the honesty of what you have submitted. A nomination can be held and permanent residence still refused.',
  },
  {
    q: 'Do I need a job offer in British Columbia?',
    a: 'It depends on the category, and the categories change. As a general matter, a genuine offer from a B.C. employer strengthens most provincial applications considerably and is a hard requirement for some. Categories that require no offer exist in various provinces at various times, but they are usually narrow and competitive.',
  },
  {
    q: 'Can I get nominated by B.C. and then move to Ontario or Alberta?',
    a: 'You should not plan on it. Provincial nomination exists because a province wants the person to settle there, and provinces assess whether your intent to live in the province is genuine. Nominating on an intent you do not hold is a misrepresentation risk, and misrepresentation carries a bar on future applications. If you intend to live elsewhere, apply through a route that matches that intention.',
  },
  {
    q: 'Is British Columbia easier than other provinces?',
    a: 'No province is reliably "easier". Provinces adjust their selection as demand and their federal allocation change, so a province that looks accessible in one year can be substantially harder the next. Choosing a province by perceived ease rather than by where you actually have work, family or a credible plan is one of the more expensive mistakes we see.',
  },
  {
    q: 'Can you tell me my chances of being invited?',
    a: 'No, and be careful of anyone who does. Selection depends on who else registers, on the province’s priorities at the time and on an allocation the province does not control. We can tell you whether your profile is realistically competitive for a category and what would need to change — not what a future draw will do.',
  },
];

export default function BritishColumbiaPnpPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Provincial nomination"
        title={
          <>
            British Columbia nominates people it expects{' '}
            <span className="text-gold-300">to stay</span>
          </>
        }
        subtitle={
          <>
            The BC PNP is the province choosing workers and business owners it needs, then asking
            IRCC to grant them permanent residence. Here is how that selection works structurally —
            and why the streams themselves are the one thing we will not list for you.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT BC WANTS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The province’s interest"
          title="What British Columbia is actually selecting for"
        />
        <Prose>
          <p>
            Every provincial nominee programme exists for one reason: a province has economic gaps
            it cannot fill from its own population, and immigration is the instrument it uses to
            fill them. Provincial selection is therefore narrower and more purposeful than federal
            selection. Express Entry asks whether you are likely to succeed anywhere in Canada. A
            province asks whether you are likely to fill a specific need there, and stay.
          </p>
          <p>
            British Columbia’s economy is concentrated on the Pacific coast and shaped by it: ports
            and trade, resource industries and forestry, a substantial technology and film sector
            around Vancouver, tourism, and — as in every province — health care, skilled trades and
            care work that cannot be staffed locally. The province is also unusually lopsided
            demographically. A large share of the population sits in Metro Vancouver, while smaller
            interior, northern and island communities carry serious labour shortages and an ageing
            population.
          </p>
          <p>
            That lopsidedness shapes provincial policy. Provinces in this position generally try to
            direct nomination towards regions outside the largest metro area, and to occupations
            that keep public services and construction running. If your plan is to arrive in
            Vancouver because it is the city you have heard of, understand that you are aiming at
            the most contested part of the province’s intake.
          </p>
          <p>
            There is also a cost dimension worth saying plainly. Housing in and around Vancouver is
            among the most expensive in Canada. A wage that reads well from Lahore can be tight
            there once rent is paid. That is a settlement question, not an immigration question, but
            it is the one people underestimate most.
          </p>
        </Prose>
      </Section>

      {/* ===================== KINDS OF STREAM ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Categories, not a stream list"
          title="The kinds of stream a province runs"
          subtitle="These are the recurring shapes of provincial nomination. Which of them B.C. is operating today, under what names and on what criteria, is for the province’s own site to tell you."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STREAM_KINDS.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Why we will not print a stream list">
            <p>
              Provincial streams open, close, are renamed and are replaced. Ontario replaced its
              entire stream framework outright, and every province adjusts its criteria and its
              priority occupations as its labour market and its federal allocation move. A page that
              lists streams is a page that quietly becomes false.
            </p>
            <p>
              So read the current categories at the source, on the day you need them, and treat any
              consultant, agent or website quoting you fixed stream criteria from memory as someone
              working from stale information.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW SELECTION RUNS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="Registration, invitation, nomination — then a separate federal decision"
          subtitle="This shape holds even as the categories inside it change."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SEQUENCE.map((s, i) => (
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

      {/* ===================== BASE VS ENHANCED ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Two ways a nomination travels"
              title="Base and Express Entry-aligned nomination"
            />
            <Prose>
              <p>
                A provincial nomination can reach IRCC by two different roads, and the choice is not
                cosmetic — it changes what you must qualify for and how the federal stage runs.
              </p>
              <p>
                An <strong>Express Entry-aligned</strong> nomination (the province’s enhanced option)
                requires you to be eligible for, and in, the federal Express Entry pool in your own
                right. A provincial nomination adds points to your Comprehensive Ranking System
                score. How many, and what that means in practice, is set by IRCC and published on
                its{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/comprehensive-ranking-system.html"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Comprehensive Ranking System pages
                </a>
                . A nominated candidate ranks materially higher than they otherwise would, but an
                invitation to apply still depends on how IRCC runs its rounds — which is a federal
                decision, not a provincial one, and not something anyone can promise you in advance.
              </p>
              <p>
                A <strong>base</strong> nomination does not require Express Entry eligibility. You
                apply to IRCC through the ordinary provincial nominee route instead. It is the route
                for people whose profile does not meet a federal economic programme’s own criteria,
                and it is generally processed on a different and slower footing.
              </p>
              <p>
                If you are unsure whether you are even eligible for Express Entry, work that out
                first — it determines which door is open to you. Our{' '}
                <Link href="/tools/crs-calculator" className="font-semibold text-accent-500 link-underline">
                  CRS calculator
                </Link>{' '}
                and the{' '}
                <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                  Express Entry overview
                </Link>{' '}
                are the place to start.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What the province weighs" title="Factors that recur in provincial scoring" />
            <ul className="mt-6 space-y-4">
              {[
                ['A genuine B.C. job offer', 'Whether a real employer in the province wants you for a real role, and on what terms.'],
                ['Occupation and skill level', 'Whether your occupation sits among those the province is currently short of.'],
                ['Where in the province', 'Regions outside the largest metropolitan area are commonly weighted more favourably.'],
                ['Language ability', 'Tested ability in English or French, at the level the category requires.'],
                ['Education and experience', 'Credentials assessed against Canadian standards, and verifiable work history.'],
                ['Ties and intent to settle', 'Prior study, work, family or residence in the province, and a credible plan to live there.'],
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
      </Section>

      {/* ===================== INTENT ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The expectation people ignore"
          title="Intent to settle in British Columbia is a real requirement"
        />
        <Prose>
          <p>
            A province nominates you because it expects you to live there. That expectation is not
            decorative. Provinces assess whether your stated intention is credible, and they look at
            the same things anyone would: whether you have worked, studied or lived there, whether
            you have family or an employer there, whether you can support yourself while you settle,
            and whether your plan for the first year makes sense.
          </p>
          <p>
            Once you hold permanent residence, mobility rights under the Charter apply and no
            province can police where you live. That fact is widely repeated in agent marketing as
            though it were a strategy. It is not. Signing a declaration of intent you do not hold is
            a misrepresentation — an untrue statement made to obtain a benefit — and misrepresentation
            findings carry a bar on applying to Canada again. The risk is not that someone tracks
            your address after landing. The risk is what happens at the file.
          </p>
          <p>
            The practical version of this is simpler than the legal one. Pick the province where you
            actually have something — an employer, a qualification, family, an occupation the place
            genuinely needs. A file built on a real connection is stronger at every stage than one
            built on a guess about which province is easiest this year.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who British Columbia does not suit" />
        <div className="mt-8">
          <Callout title="If you have no connection to B.C., this is probably the wrong province">
            <p>
              Provincial nomination is not a shortcut around federal selection. It suits people with
              a specific reason to be in a specific place. If you have never been to British
              Columbia, have no employer there, no qualification from there and no family there, and
              you are considering it purely because it appeared in a list of options, you are in the
              weakest possible position — and you are competing against people with all of those
              things.
            </p>
            <p>
              It also tends not to suit people whose occupation is well supplied in the province, and
              people whose budget assumes a Metro Vancouver wage will stretch the way it would in a
              cheaper Canadian city. Entrepreneur routes are their own discipline and are not a
              softer alternative to the skilled-worker ones — they involve capital at risk, a
              performance agreement, and a work permit period before any nomination.
            </p>
            <p>
              If your profile is genuinely strong on its own, a federal route may be the more direct
              conversation. If it is not, a province where you actually have a connection is a better
              file than a province chosen from a table.{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                Compare provincial programmes
              </Link>{' '}
              before you commit. Two separate decisions sit between you and permanent residence, and
              neither is ours to make — which is why we publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the current details live" title="Streams, criteria, scores and fees" />
        <Prose>
          <p>
            Open categories, eligibility criteria, registration scoring, draw results and provincial
            fees all change, and we do not reproduce them here. Read them at source on the day you
            act.
          </p>
          <p>
            British Columbia publishes its programme on{' '}
            <a
              href="https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              WelcomeBC
            </a>
            , the province’s own immigration site. IRCC explains the federal side of provincial
            nomination — how a nomination is used, and what the permanent residence application
            requires — on its{' '}
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
        eyebrow="Before you register anywhere"
        title="Work out whether British Columbia is the right province for your file"
        subtitle="Tell us your occupation, your experience, your language results and what — if anything — connects you to B.C. We will tell you honestly whether a provincial route fits, and which province it should be."
        page={PAGE}
        waMessage="Hi, I’d like to understand whether the BC PNP is realistic in my situation."
      />
    </>
  );
}
