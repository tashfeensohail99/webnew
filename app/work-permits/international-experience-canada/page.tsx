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
 * International Experience Canada.
 *
 * This is a bad-news page, and it is meant to be. IEC runs on bilateral youth
 * mobility agreements, and Canada has no such agreement with Pakistan. The job
 * of the page is to say that clearly and early, explain the two narrow
 * exceptions honestly, and send the reader to routes that are actually open to
 * them — before they pay anyone for an "IEC visa" they cannot hold.
 */
export const metadata: Metadata = {
  title: 'International Experience Canada (IEC): Can Pakistani Citizens Apply?',
  description:
    'IEC runs on youth mobility agreements, and Canada has none with Pakistan. What that means, the two exceptions, and the work routes open to Pakistanis.',
  alternates: { canonical: '/work-permits/international-experience-canada' },
};

const PAGE = 'work-permits-iec';

const EXCEPTIONS = [
  {
    icon: 'globe' as const,
    kicker: 'Exception one',
    title: 'A second citizenship',
    body: 'IEC eligibility follows the passport, not where you live. A Pakistani citizen who also holds citizenship of a partner country can apply under that citizenship, with that passport, meeting that country’s arrangement in full. Dual nationality must be declared in the application.',
  },
  {
    icon: 'building' as const,
    kicker: 'Exception two',
    title: 'A Recognized Organization',
    body: 'IRCC approves a list of organisations that can support IEC participants, and some of them work with citizens of countries that have no agreement of their own. This is generally the only way into IEC without a partner-country passport. Which organisations are approved, and who each one will consider, is published by IRCC and changes.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Not an exception',
    title: 'Paying an agent',
    body: 'There is no fee that creates eligibility. An agreement between two governments either covers you or it does not. Anyone selling a Pakistani passport holder an “IEC visa” is selling something that cannot be delivered. A recognised organisation charging for its own placement programme is a different thing entirely — that is a place you have been selected for, not eligibility bought.',
  },
];

const OPEN_ROUTES = [
  {
    icon: 'permit' as const,
    kicker: 'With a Canadian employer',
    title: 'Employer-supported work permits',
    body: 'If a Canadian employer wants to hire you, the route usually runs through a labour market assessment — or, in defined cases, through an exemption from it.',
    href: '/work-permits/lmia',
    cta: 'How the employer route works',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Without a labour market test',
    title: 'LMIA-exempt categories',
    body: 'Intra-company transfers, treaty professionals and significant-benefit cases sit outside the assessment entirely. They are narrow, but they are open on merit rather than nationality.',
    href: '/work-permits/lmia-exempt',
    cta: 'See the exempt categories',
  },
  {
    icon: 'star' as const,
    kicker: 'Study, then work',
    title: 'Study permit to work permit',
    body: 'For younger applicants, studying in Canada and then working under a post-graduation permit is the route that most closely resembles what IEC offers people from partner countries.',
    href: '/study-in-canada/study-to-permanent-residence',
    cta: 'Study-to-residence pathway',
  },
  {
    icon: 'scale' as const,
    kicker: 'Permanent residence directly',
    title: 'Express Entry',
    body: 'Skilled applicants with credentials, language results and qualifying experience may be better served applying for permanent residence rather than chasing a temporary permit at all.',
    href: '/express-entry',
    cta: 'Express Entry explained',
  },
];

const FAQS = [
  {
    q: 'Can a Pakistani passport holder apply for IEC?',
    a: 'Not through the ordinary route. IEC operates under bilateral youth mobility agreements between Canada and specific partner countries, and Canada does not have one with Pakistan. Without a partner-country passport, there is no pool for you to enter and no profile for you to create. The only openings are a second citizenship of a partner country, or support from an IRCC-recognised organisation.',
  },
  {
    q: 'AI search results and agents told me Pakistan is eligible. Why do you say otherwise?',
    a: 'Because IEC has a genuine but very narrow exception — the recognised-organisation route — summaries frequently flatten it into “Pakistan is eligible”. It is not the same thing. The ordinary IEC application, the one people mean when they say working holiday, requires a passport from a partner country. Check the partner list on IRCC’s own site before you pay anyone anything.',
  },
  {
    q: 'What is a Recognized Organization and how is it different?',
    a: 'It is an organisation IRCC has approved to support IEC participants, typically running structured internship or exchange placements. You are selected by the organisation first, under its own criteria, and its documentation then supports your work permit application. You cannot approach IRCC directly and ask to be treated as a partner-country citizen. Places are limited, and each organisation sets its own criteria — including which nationalities and which kinds of placement it handles. IRCC publishes the list of recognised organisations; check it, and the organisation’s own terms, before assuming you qualify.',
  },
  {
    q: 'I hold Pakistani citizenship and citizenship of a partner country. What applies?',
    a: 'You would apply under the partner-country citizenship, using that country’s valid passport, and you must satisfy that specific arrangement — its age range, its conditions, and its rules on repeat participation. Dual citizenship has to be declared. What does not work is holding one passport and applying under a different country’s arrangement.',
  },
  {
    q: 'Which countries does Canada have youth mobility agreements with?',
    a: 'The list changes as arrangements are signed, amended, paused or closed for a season, so we deliberately do not reproduce it here — a list on a consultancy page is out of date the moment something moves. IRCC publishes the current partner countries and territories on its own site, and that is the only version worth relying on.',
  },
  {
    q: 'Is the IEC working holiday the same as a Canadian work visa?',
    a: 'It results in a work permit, but the eligibility logic is completely different. Ordinary work permits turn on an employer, an occupation or an exemption category. IEC turns on nationality and age. That is precisely why it is closed to most of the world — it is a reciprocal arrangement, not a skills assessment.',
  },
  {
    q: 'Can you help me get onto IEC anyway?',
    a: 'No, and we will tell you that on the first call rather than take a fee to explore it. What we can do is look at whether an employer-supported permit, a study route or permanent residence is realistic for you, and say plainly if none of them is.',
  },
];

export default function IecPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · International Experience Canada"
        title={
          <>
            IEC is closed to{' '}
            <span className="text-gold-300">Pakistani passport holders</span>
          </>
        }
        subtitle={
          <>
            International Experience Canada runs on bilateral youth mobility agreements, and Canada
            does not have one with Pakistan. This page exists so you do not spend money on a route
            you cannot use — and so you know which routes you can.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE ANSWER, FIRST ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The answer, before anything else"
          title="Why nationality decides this one"
        />
        <Prose>
          <p>
            Most Canadian work routes assess something about you — your employer, your occupation,
            your credentials, your experience. IEC does not work that way. It is a reciprocal
            arrangement: Canada signs a youth mobility agreement with another country, that country’s
            young people can work in Canada, and Canadian young people can work there in return.
          </p>
          <p>
            Because it is reciprocal, eligibility begins and ends with the passport you hold. Canada
            maintains agreements with a set list of partner countries and territories — published and
            revised by IRCC — and Pakistan is not among them. There is no application, appeal or fee
            that changes that. It is a decision made between two governments, not a criterion you can
            meet.
          </p>
          <p>
            This matters because IEC is widely written about in a way that makes it sound open to
            everyone. It is a genuinely good arrangement — an open work permit, no employer required,
            no labour market assessment. That is exactly why it is worth being clear that, for a
            Pakistani passport holder without a second nationality, it is not available.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE EXCEPTIONS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Being precise, not discouraging"
          title="The two narrow exceptions — and the one that is not"
          subtitle="Both real exceptions are genuine. Neither is a way of applying as a Pakistani passport holder in the ordinary sense."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {EXCEPTIONS.map((e) => (
            <FeatureCard key={e.title} icon={<Icon name={e.icon} />} kicker={e.kicker} title={e.title}>
              {e.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="What the Recognized Organization route actually involves">
            <p>
              A recognised organisation is approved by IRCC to support IEC participants. Some of them
              run placement, internship and exchange programmes that are open to citizens of
              countries with no agreement of their own. What each organisation offers, and which
              nationalities and fields it will consider, differs from one organisation to the next and
              is set by that organisation — so the only reliable answer comes from IRCC’s published
              list and from the organisation itself.
            </p>
            <p>
              The important structural point is the order of events. You are accepted by the
              organisation first, under its own criteria and within its own capacity, and its letter
              of support is then included in a work permit application to IRCC. You cannot instruct a
              consultant to place you with one. If a place does not exist, the route does not exist
              either.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW IEC RUNS, FOR CONTEXT ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="For context"
          title="How the ordinary route runs, for those it covers"
          subtitle="Worth understanding, because it explains why the eligibility gate sits where it does."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Citizenship check',
              body: 'The applicant holds a valid passport from a country with a current agreement, and falls within the age range that agreement sets. This is the gate everything else sits behind.',
            },
            {
              title: 'Profile and pool',
              body: 'They create a profile and enter a pool for their country and category — working holiday, young professional, or international co-op, depending on what their agreement includes.',
            },
            {
              title: 'Invitation and application',
              body: 'Invitations are issued from the pool. An invited applicant then files a work permit application with the usual admissibility, police and medical requirements.',
            },
            {
              title: 'Permit at entry',
              body: 'If approved, the permit is issued on arrival. A working holiday permit is open — no named employer — which is what makes the category so sought after.',
            },
          ].map((s, i) => (
            <li key={s.title} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-medium text-ink-950">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-xl text-ink-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-ink-600 text-pretty">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Prose>
            <p>
              Age ranges, category names, permit lengths, participation limits and the partner list
              itself are set agreement by agreement and revised over time. IRCC publishes the current
              position on{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec/eligibility.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                its IEC eligibility page
              </a>
              , including the list of{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec/recognized-organizations.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                recognised organisations
              </a>
              . Read those at the source rather than trusting any summary, including this one, on the
              day you need the detail.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="How people lose money on this route from Pakistan"
        />
        <Prose>
          <p>
            <strong>Paying for an “IEC visa”.</strong> The most common one. Because IEC is genuinely
            attractive and genuinely well known, it is an easy thing to sell. There is no product to
            deliver, and no application was ever filed.
          </p>
          <p>
            <strong>Trusting an AI summary or a forum post.</strong> The recognised-organisation
            exception is real, so a search result can point to something technically accurate while
            leaving the reader with a completely wrong impression of what is available to them.
          </p>
          <p>
            <strong>Applying under a passport you do not hold.</strong> A residence permit, a work
            visa or long residence in a partner country is not citizenship of it. Only a passport from
            a partner country opens the ordinary route.
          </p>
          <p>
            <strong>Being sold a fake partner-country connection.</strong> Anything that involves
            documents suggesting a nationality or status you do not have risks a finding of
            misrepresentation, and the consequences of such a finding follow you long after the agent
            is gone. If you are worried you have already signed something like this,{' '}
            <Link
              href="/refusals/misrepresentation"
              className="font-semibold text-accent-500 link-underline"
            >
              read this before you file anything else
            </Link>
            .
          </p>
          <p>
            <strong>Waiting for the list to change.</strong> Agreements are negotiated between
            governments on their own timetable, with no public schedule. Building a plan around
            Pakistan being added is not a plan.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you hold only a Pakistani passport, this is not your route">
            <p>
              We are not softening this. Without citizenship of a partner country, or a place with a
              recognised organisation that you have secured on your own merits, IEC is not available
              to you and no amount of professional help changes that. There is nothing for us to
              charge you for here.
            </p>
            <p>
              It also does not suit people outside the age range their agreement sets, people looking
              for a permanent outcome rather than a temporary one, or people who assume a working
              holiday permit converts into residence by itself. It does not — it is a temporary
              permit, and any move to permanent residence is a separate application on separate
              grounds.
            </p>
            <p>
              What we would rather do is spend the consultation on a route that is actually open to
              you.{' '}
              <Link href="/work-permit-canada" className="font-semibold text-accent-500 link-underline">
                Start with the Canadian work permit overview
              </Link>
              , and see our{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>{' '}
              for how we handle outcomes we cannot control.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHAT IS OPEN ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where to look instead"
          title="Routes that are open to Pakistani applicants"
          subtitle="These assess your circumstances rather than your nationality. That is the difference that matters."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {OPEN_ROUTES.map((r) => (
            <FeatureCard
              key={r.title}
              href={r.href}
              cta={r.cta}
              icon={<Icon name={r.icon} />}
              kicker={r.kicker}
              title={r.title}
            >
              {r.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10">
          <Prose>
            <p>
              If you are not sure which of these fits, the{' '}
              <Link
                href="/tools/work-permit-eligibility"
                className="font-semibold text-accent-500 link-underline"
              >
                work permit eligibility tool
              </Link>{' '}
              is a reasonable starting point, and the{' '}
              <Link href="/tools/crs-calculator" className="font-semibold text-accent-500 link-underline">
                CRS calculator
              </Link>{' '}
              will tell you quickly whether Express Entry is worth serious attention in your case.
            </p>
          </Prose>
        </div>
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
        eyebrow="Before you pay anyone"
        title="If IEC is closed to you, find out what is not"
        subtitle="Tell us your age, education, work history and whether you hold any second citizenship. We will tell you plainly whether IEC is even a question in your case — and which Canadian route is worth your money instead."
        page={PAGE}
        waMessage="Hi, I’d like to know whether International Experience Canada applies to me, and what my alternatives are."
      />
    </>
  );
}
