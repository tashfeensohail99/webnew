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
 * Saskatchewan provincial nomination (SINP).
 *
 * Deliberately contains no stream names, no point thresholds, no fees and no
 * processing times. Provincial streams open, close and are rewritten without
 * notice; a page that lists them is worse than useless within a year. What is
 * durable is the shape of the programme and the intent-to-settle expectation,
 * which is also the thing Pakistani applicants are most often misled about.
 */
export const metadata: Metadata = {
  title: 'Saskatchewan Provincial Nomination (SINP)',
  description:
    'How the Saskatchewan Immigrant Nominee Program works: expression of interest and direct application, base versus enhanced nomination, and intent to settle.',
  alternates: { canonical: '/pnp/saskatchewan' },
};

const PAGE = 'pnp-saskatchewan';

const STREAM_KINDS = [
  {
    icon: 'building' as const,
    kicker: 'Employer-driven',
    title: 'A Saskatchewan employer needs you',
    body: 'The province supports a named employer filling a specific role they could not fill locally. Your file rests on that employer and that job existing and standing up to verification.',
  },
  {
    icon: 'doc' as const,
    kicker: 'In-demand occupation',
    title: 'Your occupation is short here',
    body: 'Some provincial routes select on occupation and skills without requiring a job offer at all. What counts as in demand is set by the province and revised as its labour market moves.',
  },
  {
    icon: 'star' as const,
    kicker: 'Graduate',
    title: 'You studied or worked in the province',
    body: 'Provinces reserve capacity for people already present — graduates of local institutions and people with provincial work history. Study or work in the province is one of the more concrete forms of connection a province can weigh.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Entrepreneur and farm',
    title: 'You will invest and operate',
    body: 'Business routes ask for capital, a viable plan, and personal management of the venture in the province. Provinces with an agricultural base have also run farm-owner routes at various times — whether any is open, and on what terms, is stated on the province’s own pages.',
  },
];

const SEQUENCE = [
  {
    title: 'Decide whether the province genuinely fits',
    body: 'Before anything is filed: does your occupation exist in Saskatchewan’s economy, and can you honestly say you intend to live there. If the answer to either is no, the rest of this is a waste of money.',
  },
  {
    title: 'Check what is open today',
    body: 'Provincial routes are opened, paused, capped and replaced. The province’s own programme page is the only reliable statement of what accepts submissions this week.',
  },
  {
    title: 'Enter the pool, or apply directly',
    body: 'Some routes run on an expression of interest — a scored profile that sits in a pool. Others accept a direct application. Which mechanism applies depends entirely on the route.',
  },
  {
    title: 'Selection, if it comes',
    body: 'From an expression-of-interest pool the province periodically selects candidates and invites them to apply. Sitting in a pool is not a nomination and confers nothing.',
  },
  {
    title: 'The provincial application',
    body: 'Now the real file: identity, education assessment, language results, work history evidence, settlement funds where required, and whatever the specific route demands. The province verifies, and does contact employers.',
  },
  {
    title: 'Nomination, then the federal decision',
    body: 'A nomination is the province saying yes. Permanent residence is a separate federal decision by IRCC on admissibility, medicals, security and the genuineness of what you filed. A nomination does not bind that officer.',
  },
];

const FAQS = [
  {
    q: 'Which Saskatchewan streams are open right now, and what do they require?',
    a: 'We do not publish that here on purpose. Provincial streams are opened, paused, capped and rewritten without much notice, and a list that is right today misleads whoever reads this page next year. The Government of Saskatchewan publishes what is open and what each route requires on its own SINP pages — read it there, on the day you need it.',
  },
  {
    q: 'What is the difference between an enhanced and a base nomination?',
    a: 'An enhanced nomination is aligned with the federal Express Entry system: you must already have a valid Express Entry profile, and the nomination attaches to it. A base nomination is not tied to Express Entry — the nomination leads to a paper-based permanent residence application filed directly with IRCC. The practical difference is which federal pathway carries you afterwards, and how the timelines behave.',
  },
  {
    q: 'Do I need a job offer from a Saskatchewan employer?',
    a: 'It depends entirely on the route. Some provincial routes are built around a named employer and cannot proceed without one. Others select on occupation, education and language with no job offer at all. Deciding this in the abstract is not possible — it turns on which routes are open and what your profile actually looks like.',
  },
  {
    q: 'What does "intent to settle" actually mean in practice?',
    a: 'A province nominates you because it expects you to live and work there. It can and does assess whether your stated intention is credible — your ties to the province, why you chose it, whether your occupation exists in its economy, and what your plans look like. This is assessed at the provincial stage, and a thin or generic answer is a common reason a file struggles.',
  },
  {
    q: 'Can I take the nomination and then move to Toronto or Vancouver?',
    a: 'Mobility rights under the Charter apply once you are a permanent resident, so nobody is legally confined to a province after landing. But that is a different question from whether your stated intention was genuine when you applied. Applying to a province you never intended to live in, in order to obtain a nomination, is misrepresentation — and misrepresentation carries a bar on future applications. We will not build a file on that basis.',
  },
  {
    q: 'Is Saskatchewan easier than Ontario or British Columbia?',
    a: 'That framing is how people lose money. Provinces select for their own labour markets, not on a shared difficulty scale, and a province that appears less competitive on paper is often more demanding about connection and genuine intent. The correct question is which province your occupation and history actually fit, not which one looks like a side door.',
  },
  {
    q: 'Does a nomination guarantee permanent residence?',
    a: 'No. A nomination is a provincial endorsement. Permanent residence is decided federally on admissibility, medicals, security, and the genuineness and completeness of the application. Nominations have been issued and permanent residence still refused. Anyone telling you a nomination settles the outcome is either mistaken or selling you something.',
  },
];

export default function SaskatchewanPnpPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Provincial nomination"
        title={
          <>
            Saskatchewan nominates people it expects{' '}
            <span className="text-gold-300">to actually live there</span>
          </>
        }
        subtitle={
          <>
            The Saskatchewan Immigrant Nominee Program selects for one province’s labour market. This
            page explains how the programme is shaped and what it asks of you — not a list of streams
            that will be out of date before you read it.
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
          eyebrow="Start with the province, not the programme"
          title="What Saskatchewan is looking for"
        />
        <Prose>
          <p>
            Every provincial nominee programme exists for one reason: the province has labour and
            settlement needs that federal selection alone does not meet, so Ottawa lets it nominate a
            share of newcomers itself. Understanding what a particular province wants tells you more
            about your chances than any stream description will.
          </p>
          <p>
            Saskatchewan is a resource and agriculture province. Its economy rests on grain and
            oilseed farming and the industries around it, on mining — potash and uranium above all,
            with newer critical-mineral activity — on oil and gas, on food and machinery
            manufacturing, and on the trades, transport and health services that keep all of that
            running. Its population is concentrated in Saskatoon and Regina, but a great deal of its
            labour demand sits in smaller cities and rural communities.
          </p>
          <p>
            That shape has consequences. The province tends to favour occupations its employers
            genuinely cannot fill locally, skilled trades and licensed professions among them, and it
            gives real weight to connection — people who have studied there, worked there, or have
            close family there. It is not primarily a destination for corporate head-office or
            large-scale tech careers, and an applicant whose occupation has no obvious place in that
            economy is unlikely to be selected regardless of how strong their profile looks in the
            abstract.
          </p>
          <p>
            Settlement is a stated priority in its own right. Saskatchewan has spent decades trying to
            attract and, more importantly, retain newcomers, particularly outside its two largest
            cities. Retention is the metric it cares about. Your file is read with that in mind.
          </p>
        </Prose>
      </Section>

      {/* ===================== KINDS OF STREAM ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Categories, not a catalogue"
          title="The kinds of route a province runs"
          subtitle="These are the broad categories most provinces operate in some form. What Saskatchewan has open today, and on what terms, is published by the province — and changes."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STREAM_KINDS.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Why we will not list the current streams">
            <p>
              Provincial streams are among the fastest-moving parts of Canadian immigration. They are
              paused mid-year, capped without warning, renamed, merged and replaced outright — an
              entire province’s stream framework can be closed and rebuilt from one intake to the
              next. Any page that prints a list of streams and their criteria can be quietly wrong,
              and people make expensive decisions on the strength of it.
            </p>
            <p>
              So we describe the categories, which are durable, and send you to the source for the
              specifics, which are not. That is also how we work in a consultation: we check what is
              open on the day, rather than repeating what was open last year.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW SELECTION RUNS ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Two mechanisms"
              title="Expression of interest, or direct application"
            />
            <Prose>
              <p>
                Saskatchewan has run parts of its skilled-worker selection through an expression of
                interest, and provinces move routes between the two mechanisms — check the province’s
                own page for the route you are considering rather than relying on this description.
                Where an expression of interest applies, you build a profile, it is scored against the province’s own grid, and it
                sits in a pool. Periodically the province draws from that pool and issues invitations
                to apply. A profile in a pool is not an application and gives you no status — a great
                many people misunderstand this and assume they are in the system when they are merely
                waiting to be looked at.
              </p>
              <p>
                Other routes — employer-supported and business routes in particular — are filed
                directly, without a pool. Which mechanism governs your case depends on the route, and
                the province states it on the page for that route.
              </p>
              <p>
                The scoring grid, the minimum needed to enter a pool, and the scores at which
                invitations are issued all move. We do not reproduce them here for the same reason we
                do not list streams.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="Two nomination types" title="Enhanced and base" />
            <Prose>
              <p>
                <strong>Enhanced nomination</strong> is aligned with the federal Express Entry system.
                You must already hold a valid{' '}
                <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                  Express Entry
                </Link>{' '}
                profile; the nomination attaches to it and adds a substantial number of points to your
                federal ranking score. Permanent residence is then applied for through Express Entry.
              </p>
              <p>
                <strong>Base nomination</strong> is not connected to Express Entry. The province
                nominates you, and you file a paper-based permanent residence application with IRCC
                directly. It is open to people who do not qualify for any Express Entry programme,
                which is precisely why base routes exist — but the federal processing that follows
                behaves differently from the Express Entry stream.
              </p>
              <p>
                Working out which of the two is realistically available to you is usually the first
                useful thing an assessment produces. Our{' '}
                <Link
                  href="/tools/crs-calculator"
                  className="font-semibold text-accent-500 link-underline"
                >
                  CRS calculator
                </Link>{' '}
                gives you an indicative estimate of where you stand federally, which is one input to
                that question. It is an estimate, not a score IRCC has issued.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How a provincial file actually runs"
          subtitle="Two governments make two separate decisions. The province decides whether to nominate. IRCC decides whether to grant permanent residence."
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

      {/* ===================== INTENT TO SETTLE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The expectation nobody explains properly"
          title="Intent to settle is not a formality"
        />
        <Prose>
          <p>
            A province nominates because it expects to keep you. Every provincial programme therefore
            carries an expectation that you genuinely intend to live and work in that province, and
            the province assesses whether that intention is credible rather than simply asserted.
          </p>
          <p>
            What makes it credible is ordinary and specific: your occupation exists in that province’s
            economy; you have looked at where you would live and what you would do; you have family,
            study or work history there, or a concrete reason for choosing it. What makes it
            incredible is equally ordinary — a generic answer, an occupation with no local market, or
            an applicant who plainly picked the province off a list.
          </p>
          <p>
            Once you become a permanent resident, mobility rights under the Charter apply and nobody
            is legally confined to a province. That is a genuine legal fact and it is also how a
            particular kind of agent sells provincial nomination: apply anywhere, land, then move.
            Understand what that advice actually is. If your stated intention was false when you
            signed the application, that is misrepresentation, and the consequence is a bar on future
            applications — not a fine, not a delay, a bar. We do not build files on that basis, and we
            will tell you so plainly rather than take the fee.
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
            <strong>Choosing the province that looks easiest.</strong> The single most expensive
            mistake on this page. Provinces select for their own labour markets; a province that seems
            less competitive is frequently stricter about connection and intent. Picking one you have
            no relationship with, because someone said the bar is lower there, tends to produce either
            a refusal or a genuineness problem.
          </p>
          <p>
            <strong>Treating a pool profile as an application.</strong> An expression of interest is a
            scored entry in a queue. It grants nothing, guarantees nothing, and can sit indefinitely.
            People stop looking at other routes because they believe they are already in process.
          </p>
          <p>
            <strong>Job offers that do not survive verification.</strong> Provinces contact employers.
            An offer arranged through an intermediary, from an employer who cannot explain the role or
            who is not operating as described, fails at that point — and takes your file with it.
          </p>
          <p>
            <strong>Occupation coded to fit the route.</strong> Describing your work as something it
            was not, so that it matches an occupation the province wants, is a recurring source of
            misrepresentation findings. Your reference letters, payslips and duties have to match
            what you claimed.
          </p>
          <p>
            <strong>Assuming a nomination ends the matter.</strong> It does not. The federal decision
            on admissibility, medicals, security and genuineness is separate, and it can go against
            you after a province has said yes.
          </p>
          <p>
            <strong>Applying on last year’s criteria.</strong> Files are still being prepared against
            requirements that changed months earlier, usually because the applicant is working from an
            agent’s PDF rather than the province’s own page.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who Saskatchewan does not suit" />
        <div className="mt-8">
          <Callout title="If you have no intention of living in Saskatchewan, this is not your route">
            <p>
              This province is a poor fit for someone who chose it from a list because it appeared
              less competitive, who intends to relocate to Toronto or Vancouver on arrival, or whose
              occupation has no real presence in a resource, agriculture and trades economy. It is
              also a difficult fit for applicants who need a large urban labour market, or whose
              professional licensing has no provincial pathway.
            </p>
            <p>
              Provincial nomination is not a shortcut around federal selection either. If your profile
              is strong enough to be competitive federally, going through a province may add time and
              obligation for nothing. If your profile is weak, a nomination will not repair a
              fundamental problem — a documentation issue, an admissibility issue, or a{' '}
              <Link
                href="/canada-visa-refused"
                className="font-semibold text-accent-500 link-underline"
              >
                prior refusal
              </Link>{' '}
              that has not been properly understood — and it is worth resolving that first.
            </p>
            <p>
              We would rather tell you on the first call that this province is not your route than
              take a fee for a file that was never going to work. Two governments decide this, not us,
              which is why we publish a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>
              . If you want to compare provinces properly, start at our{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nominee overview
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
          title="Streams, criteria, scores and fees"
        />
        <Prose>
          <p>
            Which routes are open, what each requires, the points grid, the fees and the current
            processing behaviour all change — sometimes within a single year. We deliberately do not
            print those here, because a figure that is right today becomes a liability on a page you
            might read next year.
          </p>
          <p>
            The Government of Saskatchewan publishes the programme itself on{' '}
            <a
              href="https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              saskatchewan.ca
            </a>
            , and IRCC explains the federal side of provincial nomination on its{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              provincial nominees page
            </a>
            . Where the two appear to disagree, the province governs nomination and IRCC governs
            permanent residence. Read both at the source, on the day you need them.
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
        title="Find out whether Saskatchewan is honestly your route"
        subtitle="Tell us your occupation, your work history, your language results and any connection you have to the province. We will give you our honest assessment of whether provincial nomination fits — and, where there is one, point you at a province that suits your profile better. Sometimes the honest answer is that no provincial route fits."
        page={PAGE}
        waMessage="Hi, I’d like to know whether a Saskatchewan provincial nomination is realistic in my situation."
      />
    </>
  );
}
