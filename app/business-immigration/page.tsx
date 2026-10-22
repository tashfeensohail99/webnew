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
 * Business and investment immigration.
 *
 * Two jobs. First, say plainly that the federal Start-Up Visa and the federal
 * Self-Employed Persons Program are not open to new applicants — because a great
 * deal of marketing is still selling both. Second, correct the belief that money
 * buys Canadian residence. It does not. What is left is provincial entrepreneur
 * streams, which require you to move and actually operate a business, and
 * business-owner work permits, which are temporary and are not permanent
 * residence.
 *
 * No figures, dates, thresholds or programme parameters on this page. Status and
 * numbers change; every one of them is linked to IRCC or the province instead.
 */
export const metadata: Metadata = {
  title: 'Business and Investment Immigration to Canada',
  description:
    'An honest map: the Start-Up Visa and Self-Employed Persons Program are closed to new applicants, what remains, and checking current status with IRCC.',
  alternates: { canonical: '/business-immigration' },
};

const PAGE = 'business-immigration';

const LANDSCAPE = [
  {
    icon: 'doc' as const,
    kicker: 'Federal · closed to new applicants',
    title: 'Start-Up Visa',
    body: 'IRCC has closed the Start-Up Visa to new applications. Files already in the system continue to be processed, and transitional arrangements have applied to some earlier commitment-certificate holders. Read the notice on the IRCC page before anyone quotes you a fee.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Federal · paused',
    title: 'Self-Employed Persons',
    body: 'The federal route for self-employed people in cultural activities and athletics is paused while IRCC works through a long-standing backlog. Check the IRCC page for its current status before anyone quotes you a fee for it.',
  },
  {
    icon: 'building' as const,
    kicker: 'Provincial',
    title: 'Provincial entrepreneur streams',
    body: 'Provinces run their own entrepreneur or business streams. Which exist, and what each requires, is set by the province and changes — but they share a premise: you move to that province and personally run the business.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Temporary',
    title: 'Work permits for business owners',
    body: 'Owners who will actively run a Canadian business generally come through the ordinary work-permit system, either with a labour market assessment or under a significant-benefit exemption. Whichever applies, it is a temporary permit — not permanent residence.',
  },
];

const STEPS = [
  {
    title: 'Establish what you actually want',
    body: 'Permanent residence, or the ability to run a business in Canada now? Those are different problems with different routes, and conflating them is where most money is wasted.',
  },
  {
    title: 'Pick the province before the programme',
    body: 'Business immigration is largely provincial. The sensible order is to decide where you would genuinely live and trade, then read that province’s stream — not to shop for the easiest-sounding criteria and reverse-engineer a location you have no intention of living in.',
  },
  {
    title: 'Test yourself against that stream in kind',
    body: 'Net worth, investment level, ownership share, sector restrictions, location within the province, language, management experience and whether the business must be new or may be a purchase. Every one of these varies by province and is published by that province.',
  },
  {
    title: 'Build a business plan that survives scrutiny',
    body: 'Not a template. A plan with a market you can evidence, costs that add up, and a role for you that a reviewer can believe. Where funds came from will be examined in detail — this is usually the heaviest documentary burden in the file.',
  },
  {
    title: 'Exploratory visit and the business performance agreement',
    body: 'Some provinces expect a visit, and several require you to sign an agreement committing to specific things: capital deployed, jobs created, your active involvement, and a timeframe. Whether either applies, and on what terms, is published by the province.',
  },
  {
    title: 'Operate the business, then seek nomination',
    body: 'Several entrepreneur streams are built this way: you arrive on a temporary work permit, run the business, meet the agreement, and only then are you considered for nomination. Where that is the design, residence is the end of the process, not the start — confirm the order on the provincial page.',
  },
];

const FAQS = [
  {
    q: 'Can I still apply for Canada’s Start-Up Visa?',
    a: 'Not as a new applicant. IRCC has closed the Start-Up Visa to new applications. Files already in the system are still being processed, and time-limited transitional arrangements have applied to people who already held a commitment certificate — the dates and conditions for those are on the IRCC page and you should read them there. IRCC has signalled a replacement pilot, but until something is actually published there is nothing to apply to. Anyone offering to file a new Start-Up Visa application for you now, or to sell you a designated-organisation introduction for one, is selling something that does not exist.',
  },
  {
    q: 'What about the Self-Employed Persons Program?',
    a: 'It is not taking new applications and remains paused. It was in any case a narrow route for people with significant experience in cultural activities or athletics who intend to be self-employed in that field in Canada — never a general route for business owners, despite how it is often marketed. Read the current status on the IRCC page rather than from an agent.',
  },
  {
    q: 'How much do I need to invest to get Canadian permanent residence?',
    a: 'That question has no answer because the premise is wrong. Canada does not run a programme where a sum of money buys residence. Provincial entrepreneur streams do set minimum investment and net-worth levels, but meeting them entitles you to nothing on its own — you still have to move, operate the business, employ people, and meet the terms you signed before a nomination is considered. Anyone quoting you a price for Canadian residence is describing a product Canada does not sell.',
  },
  {
    q: 'Can I invest passively and let someone else run the business?',
    a: 'Not on these routes. Provincial entrepreneur streams are built around active, ongoing, day-to-day management by you, and the work-permit routes for business owners rest on the same principle. Silent partnerships, nominee arrangements and buy-a-share schemes are precisely what the streams are designed to exclude, and presenting one as active management is misrepresentation.',
  },
  {
    q: 'Is an “owner-operator” work permit a route to permanent residence?',
    a: 'First, a correction: “owner-operator” is not the name of a programme. There is no dedicated owner-operator stream — a business owner applies through the ordinary work-permit framework, with a labour market assessment or under an exemption, and IRCC publishes which categories exist and what each requires. Second, whichever route applies, it is a temporary work permit, not residence, and it does not convert on its own. What it can do is put you in Canada lawfully, running a real business, generating Canadian management experience and a trading record — which may support a later provincial or federal application on its own merits. Treat it as a first step that might lead somewhere, not as residence in instalments.',
  },
  {
    q: 'Which province is easiest for entrepreneurs?',
    a: 'We will not answer that, because the criteria change and because choosing a province you do not intend to live in is a bad plan that also reads badly. The better question is where your sector, your capital and your family situation actually fit. Each province publishes its own current requirements and those are the figures to rely on.',
  },
  {
    q: 'How much are the fees and the minimum investment?',
    a: 'We deliberately do not print those numbers. Investment minimums, net-worth thresholds, deposit requirements and government fees are set by each province and by IRCC, and they are revised. A figure that is correct today becomes a liability on a page you read a year from now. Read them at the source on the day you need them.',
  },
  {
    q: 'Can you guarantee a nomination or a permit?',
    a: 'No, and no one honestly can. Provincial nomination and federal permit decisions are made by governments, not by us. We publish a no-guarantee policy for that reason. What we can do is tell you before you spend money whether your capital, your experience and your willingness to relocate make this realistic.',
  },
];

export default function BusinessImmigrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Business and investment immigration"
        title={
          <>
            Money does not buy{' '}
            <span className="text-gold-300">Canadian residence</span>
          </>
        }
        subtitle={
          <>
            The federal Start-Up Visa is closed to new applicants and the federal Self-Employed
            Persons Program is paused. What remains is provincial entrepreneur streams and work
            permits for people who own and run a business — and both require you to move to Canada
            and actually operate it. Confirm the current status of any route on the IRCC page before
            you pay anyone.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk through your business — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE CLOSURE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Say the difficult thing first"
          title="The Start-Up Visa is closed to new applicants"
        />
        <Prose>
          <p>
            IRCC has closed the Start-Up Visa to new applications. Files already in the system
            continue to be processed, and time-limited transitional arrangements have applied to
            people who held a commitment certificate before the closure — the cut-off dates for those
            arrangements are published by IRCC and you should read them there rather than here. For a
            new applicant, there is no application to submit.
          </p>
          <p>
            This matters because the Start-Up Visa was, for years, heavily marketed in Pakistan, and a
            good deal of that marketing has not stopped. If someone
            is currently offering to introduce you to a designated organisation, arrange a letter of
            support, or file a Start-Up Visa application on your behalf, they are describing a
            transaction that cannot happen. The correct response is to stop, not to ask the price.
          </p>
          <p>
            IRCC has signalled that a replacement entrepreneur pilot is intended. We will not
            speculate about what it might require, when it might open, or whether it will open at
            all. If and when it does, the terms will be on the IRCC site before they are on ours.
          </p>
        </Prose>

        <div className="mt-10">
          <Callout title="The federal Self-Employed Persons Program is also not open">
            <p>
              The federal route for self-employed people in cultural activities and athletics is not
              accepting new applications and remains paused while IRCC works through a backlog. It
              was never a general business-owner route in any case, though it has often been sold as
              one.
            </p>
            <p>
              Both of these statuses are published by IRCC and both can change. Before you pay anyone
              anything for either route, open the government page yourself and read the notice at the
              top of it.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE LANDSCAPE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The landscape as it stands"
          title="What is closed, what is paused, what is open"
          subtitle="Two of the four routes people ask us about are not currently accepting applications. Knowing which is which saves most of the money that gets lost here."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LANDSCAPE.map((l) => (
            <FeatureCard key={l.title} icon={<Icon name={l.icon} />} kicker={l.kicker} title={l.title}>
              {l.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== INVESTMENT MYTH ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The central misunderstanding"
              title="Canada does not sell residence"
            />
            <Prose>
              <p>
                Some countries operate schemes where a qualifying investment produces residence more
                or less directly. Canada, at the federal level, does not. There is no Canadian
                programme in which you transfer a sum of money, wait, and receive status.
              </p>
              <p>
                What exists instead are provincial entrepreneur streams, and they are conditional
                almost all the way through. You commit capital, you relocate, you establish or buy a
                business, you manage it yourself, you employ Canadians, you meet the terms of a signed
                agreement — and only then is a nomination considered. The investment is a requirement,
                not the mechanism.
              </p>
              <p>
                This is why the honest version of the conversation is often uncomfortable. Many people
                who arrive with capital and a good business record are not looking to emigrate and run
                a shop in a small Canadian city. If that is you, the business routes are probably not
                your routes, and it is better to hear that in the first hour than after the fees.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading
              eyebrow="What provinces actually test"
              title="The recurring requirements"
              subtitle="These appear, in some form, in almost every provincial entrepreneur stream. The levels differ; the categories are stable."
            />
            <ul className="mt-6 space-y-4">
              {[
                ['Verifiable personal net worth', 'Not just a balance today — a documented, lawful history of how the money was accumulated.'],
                ['Traceable source of funds', 'Usually the heaviest part of the file. Gifts, informal lending and undocumented cash cause more refusals here than anywhere else.'],
                ['Business ownership and control', 'A meaningful ownership share and genuine decision-making authority, not a passive stake.'],
                ['Active day-to-day management', 'You, in the province, running the business. Remote ownership does not satisfy these streams.'],
                ['Jobs for Canadians', 'Most streams expect the business to create or maintain employment for citizens and permanent residents.'],
                ['Prior management experience', 'A track record of owning or senior-managing a business, evidenced rather than asserted.'],
                ['Language ability', 'A tested level in English or French, because you are expected to run a business in the local market.'],
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

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How a provincial entrepreneur file runs"
          title="The sequence, and where residence actually sits in it"
          subtitle="Note where nomination falls. In most provinces you arrive first, operate the business, and are nominated afterwards — not before."
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

        <div className="mt-12">
          <Prose>
          <p>
            Each province publishes its own criteria, and they diverge sharply — in sector rules,
            required location within the province, capital levels and whether you may buy an existing
            business. Individual streams also open, close, pause and are replaced, so treat the
            provincial government page as the only reliable statement of what exists today. Start
            from the provincial page for the place you would genuinely live:{' '}
            <Link href="/pnp/ontario" className="font-semibold text-accent-500 link-underline">
              Ontario
            </Link>
            ,{' '}
            <Link href="/pnp/british-columbia" className="font-semibold text-accent-500 link-underline">
              British Columbia
            </Link>
            ,{' '}
            <Link href="/pnp/alberta" className="font-semibold text-accent-500 link-underline">
              Alberta
            </Link>
            ,{' '}
            <Link href="/pnp/saskatchewan" className="font-semibold text-accent-500 link-underline">
              Saskatchewan
            </Link>
            ,{' '}
            <Link href="/pnp/manitoba" className="font-semibold text-accent-500 link-underline">
              Manitoba
            </Link>
            ,{' '}
            <Link href="/pnp/nova-scotia" className="font-semibold text-accent-500 link-underline">
              Nova Scotia
            </Link>
            ,{' '}
            <Link href="/pnp/new-brunswick" className="font-semibold text-accent-500 link-underline">
              New Brunswick
            </Link>
            ,{' '}
            <Link
              href="/pnp/prince-edward-island"
              className="font-semibold text-accent-500 link-underline"
            >
              Prince Edward Island
            </Link>{' '}
            and{' '}
            <Link
              href="/pnp/newfoundland-labrador"
              className="font-semibold text-accent-500 link-underline"
            >
              Newfoundland and Labrador
            </Link>
            . Quebec runs its own system entirely, outside the federal-provincial nominee framework —
            see{' '}
            <Link href="/quebec-immigration" className="font-semibold text-accent-500 link-underline">
              Quebec immigration
            </Link>
            . The{' '}
            <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
              PNP overview
            </Link>{' '}
            explains how nomination fits together with the federal side.
          </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== OWNER-OPERATOR ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The temporary route"
          title="Work permits for people who own the business"
        />
        <Prose>
          <p>
            If your aim is to be in Canada running a business now, rather than to obtain residence
            first, this is the route usually being described when someone says “owner-operator”. Be
            aware that “owner-operator” is not the name of a programme. There is no dedicated
            owner-operator immigration stream; there was once a distinct facilitated treatment for
            owner-operators within the labour market assessment process, and it was withdrawn. A
            business owner today applies through the ordinary work-permit framework — either with a
            labour market assessment, or under one of the exemptions, most commonly the one for work
            that brings a significant benefit to Canada. Which applies depends on the facts, and the
            categories and their conditions are published by IRCC.
          </p>
          <p>
            Two things about it are consistently misrepresented. First, it is a temporary permit. It
            is not permanent residence and it does not become permanent residence by the passage of
            time. What it can do is establish you in Canada with a real, trading, documented business
            — which may later support a provincial or federal application on its own merits.
          </p>
          <p>
            Second, the business has to be real. Officers assess whether the enterprise is genuine and
            viable, whether you actually control and run it, and what benefit it brings to Canada.
            Buying a dormant company to generate paperwork is a well-recognised pattern, it is
            expensive, and it risks a misrepresentation finding.
          </p>
          <p>
            The work-permit mechanics — including which permits require a Labour Market Impact
            Assessment and which do not — are set out on{' '}
            <Link
              href="/work-permit-canada"
              className="font-semibold text-accent-500 link-underline"
            >
              our Canadian work permit page
            </Link>
            , with the two mechanisms explained at{' '}
            <Link
              href="/work-permits/lmia"
              className="font-semibold text-accent-500 link-underline"
            >
              LMIA-based permits
            </Link>{' '}
            and{' '}
            <Link
              href="/work-permits/lmia-exempt"
              className="font-semibold text-accent-500 link-underline"
            >
              LMIA-exempt permits
            </Link>
            . If you already run a business abroad and want to open or staff a Canadian arm of it, an{' '}
            <Link
              href="/work-permits/intra-company-transfer"
              className="font-semibold text-accent-500 link-underline"
            >
              intra-company transfer
            </Link>{' '}
            is often the more accurate description of what you are trying to do.
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
            <strong>Paying for a closed programme.</strong> The Start-Up Visa is still being sold. So,
            in places, is the Self-Employed Persons Program. Check the government page for the notice
            at the top before any money moves.
          </p>
          <p>
            <strong>Source of funds that cannot be traced.</strong> The single most common reason
            business files fail. Property sold informally, business income kept outside the banking
            system, large family transfers with no paper behind them. The money may be entirely
            legitimate and still be undocumentable, and undocumentable is treated as unproven.
          </p>
          <p>
            <strong>A business plan bought off a shelf.</strong> Reviewers see the same templates
            repeatedly. A plan describing a market you have not researched, with costs that do not
            reconcile, signals that you do not intend to run the business.
          </p>
          <p>
            <strong>No intention to actually move.</strong> Streams are provincial and residence in
            that province is the point. Selecting a province purely because its criteria look lighter,
            while planning to live somewhere else, is visible in the file and undermines it.
          </p>
          <p>
            <strong>Treating the work permit as residence.</strong> People accept an owner-operator
            structure believing permanent residence follows automatically. It does not. Understand
            what you are buying before you commit capital to it.
          </p>
          <p>
            <strong>Nominee and silent-partner structures.</strong> Arrangements where you hold a
            share on paper while someone else runs the business are the exact thing these streams
            exclude. Presenting one as genuine ownership is misrepresentation, which carries a bar on
            future applications — see{' '}
            <Link
              href="/refusals/misrepresentation"
              className="font-semibold text-accent-500 link-underline"
            >
              what a misrepresentation finding means
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you are not going to move and run the business, this is not your route">
            <p>
              Business immigration does not suit passive investors, people who want status while
              keeping their life and enterprise in Pakistan, or anyone whose plan depends on someone
              else operating the Canadian business. Every open route here is built on personal, active
              management in a specific province.
            </p>
            <p>
              It also tends not to suit people whose wealth is real but cannot be documented to a
              government standard, people whose management experience is family-business seniority
              without records behind it, and people who are unwilling to spend an initial period in
              Canada on a temporary permit before any nomination is considered.
            </p>
            <p>
              And it is very often the wrong question. Many of the people who come to us asking about
              investment routes turn out to be better served by a skilled route:{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry
              </Link>{' '}
              if their profession and education fit, or a{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nominee
              </Link>{' '}
              stream if a specific province needs what they do. Those routes are usually far less
              demanding of capital, though they carry no more certainty of an outcome than any other.
              You can test the skilled side yourself with our{' '}
              <Link
                href="/tools/crs-calculator"
                className="font-semibold text-accent-500 link-underline"
              >
                CRS calculator
              </Link>
              .
            </p>
            <p>
              We would rather tell you on the first call that this does not fit than take a fee for a
              file that was never going to work. Nomination and permit decisions belong to governments,
              not to us, which is why we publish a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>{' '}
              and an open{' '}
              <Link href="/fees" className="font-semibold text-accent-500 link-underline">
                fee schedule
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
          title="Programme status, thresholds and fees"
        />
        <Prose>
          <p>
            Programme status changes — that is the whole lesson of this area. Investment minimums,
            net-worth thresholds, deposit requirements, sector rules, processing times, cut-off dates
            and government fees are set by each province and by IRCC and are revised. We deliberately
            publish none of those figures here, because a figure that is correct on the day it is
            written becomes a liability on a page you read a year later.
          </p>
          <p>
            IRCC publishes the current federal position, including its{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/immigration-measures-entrepreneurs.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              notice on immigration measures for entrepreneurs
            </a>{' '}
            and the status notices for the{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/start-visa.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Start-Up Visa
            </a>{' '}
            and the{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/self-employed.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Self-Employed Persons Program
            </a>
            . Which work-permit categories exist for business owners, and the conditions attached to
            each, are set out in the{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC program delivery instructions for foreign workers
            </a>
            . Each provincial entrepreneur stream — including whether it currently exists and is open
            — is published by that province’s own immigration authority, and the underlying legal
            framework sits in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
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
        eyebrow="Before you commit capital"
        title="Find out whether a business route is even the right question"
        subtitle="Tell us what you own, what you have run, whether your funds can be documented, and whether you would genuinely relocate. We will tell you honestly whether this fits — and if it does not, which route might."
        page={PAGE}
        waMessage="Hi, I’d like to understand whether a Canadian business or entrepreneur route is realistic in my situation."
      />
    </>
  );
}
