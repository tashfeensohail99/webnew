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
 * Sponsoring parents and grandparents.
 *
 * The honest core of this page: this is the one family route where wanting it,
 * qualifying for it and being organised are not enough. You have to be selected
 * before you have an application at all. Most families who ask us about this end
 * up on the Super Visa, and they should hear that early rather than late.
 */
export const metadata: Metadata = {
  title: 'Sponsoring Parents and Grandparents for Canada',
  description:
    'How the parents and grandparents route works: the interest-to-sponsor pool, the invitation, the income test, the undertaking, and the Super Visa compared.',
  alternates: { canonical: '/family-sponsorship/parents-grandparents' },
};

const PAGE = 'family-sponsorship-parents-grandparents';

const CORE = [
  {
    icon: 'doc' as const,
    kicker: 'Step one',
    title: 'Interest to sponsor',
    body: 'Sponsorship runs through an interest-to-sponsor pool rather than an open application. A short online form declaring your intention is not the application — no documents are filed and no file is opened at that stage. Whether a new form can be submitted at all depends on what IRCC has open at the time.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Step two',
    title: 'Selection from the pool',
    body: 'IRCC selects from the pool of submitted forms and issues invitations to apply. Where IRCC has used random selection, being early, being well prepared or being represented does not improve your position. Check the current selection method on canada.ca.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Step three',
    title: 'The income test',
    body: 'An invited sponsor must show income at or above the minimum IRCC publishes, for each of a set number of consecutive tax years, evidenced by Canada Revenue Agency records rather than by employer letters or bank statements.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Step four',
    title: 'The undertaking',
    body: 'The sponsor signs a binding undertaking to provide for the sponsored person’s basic needs for a long fixed period. It survives divorce, job loss, estrangement and the sponsored person moving out.',
  },
];

const STEPS = [
  {
    title: 'IRCC decides whether there is an intake',
    body: 'There is no application to make until IRCC opens one. Intakes are irregular, they have been paused for extended periods, and there is no obligation on IRCC to run one in any given year. Confirm the current position on canada.ca before you plan around it.',
  },
  {
    title: 'An interest form goes into the pool',
    body: 'A brief online declaration of who you are and who you intend to sponsor. In some years IRCC has not accepted new forms at all and has instead invited from a pool submitted in an earlier year — so having a form in the pool and being able to submit one are separate questions.',
  },
  {
    title: 'You wait to be selected',
    body: 'Invitations go out to selected submissions. Many people in the pool are not invited in any given round, and some rounds do not happen. There is no queue position to check and nothing to chase.',
  },
  {
    title: 'An invitation arrives — or does not',
    body: 'An invitation is time-limited and comes to the email address on the interest form. This is the point at which a real application becomes possible.',
  },
  {
    title: 'Two applications, filed together',
    body: 'You apply to be approved as a sponsor and your parent or grandparent applies for permanent residence. The two go in as one package, not one after the other.',
  },
  {
    title: 'Assessment of both sides',
    body: 'IRCC assesses your income and eligibility as sponsor, and separately assesses your parent or grandparent for admissibility, including medical and security screening.',
  },
];

const FAQS = [
  {
    q: 'Can I apply to sponsor my parents whenever I want?',
    a: 'No. Unlike spousal sponsorship, which you can file at any time, this route depends on IRCC running an intake — and even then, submitting the interest form is not an application. You need to be selected and invited before an application exists. IRCC has at times gone years without accepting new interest forms and has paused the program entirely, so the only reliable answer to "is it open right now" is the one on canada.ca.',
  },
  {
    q: 'Does applying earlier in the intake window help?',
    a: 'Where IRCC has selected randomly from the pool rather than on a first-come basis, submitting in the first hour carries no advantage over the last day. IRCC states the selection method for each intake on its own site — read it there. What is true in every version is that nobody sells "priority submission"; that is not a thing that exists.',
  },
  {
    q: 'What income do I need to show?',
    a: 'IRCC publishes the required minimum on canada.ca. It is set per family size and revised, so we do not print the figure here. What matters structurally is that it is assessed over consecutive tax years rather than as a snapshot, that the family-size count includes the people you are sponsoring and anyone you have already undertaken to support, and that it is proven from Canada Revenue Agency records — not from pay slips or a bank balance.',
  },
  {
    q: 'Can my spouse’s income be counted?',
    a: 'A spouse or common-law partner can be added as a co-signer, which brings their income into the calculation and makes them equally bound by the undertaking. It is not a formality — a co-signer takes on the same financial liability as the sponsor.',
  },
  {
    q: 'What does the undertaking actually commit me to?',
    a: 'You agree to provide basic needs — food, shelter, clothing and other everyday requirements — so that the sponsored person does not need social assistance. It runs for a fixed period set in the regulations, it starts when they become a permanent resident, and it cannot be cancelled. If they receive social assistance during that period, the province can recover it from you.',
  },
  {
    q: 'Is a Super Visa a step towards permanent residence?',
    a: 'No, and this is the most common misunderstanding we correct. A Super Visa is a visitor route. Time spent in Canada on one does not build towards permanent residence and does not improve later sponsorship prospects. It solves presence, not status.',
  },
  {
    q: 'My parent was refused a visitor visa before. Does that end the Super Visa option?',
    a: 'Not automatically, but it needs to be understood before reapplying rather than after. A refusal usually turns on the officer’s assessment of ties and intent to leave, and repeating the same application without addressing that reasoning tends to produce the same result. Ordering the officer’s notes is usually the sensible first step.',
  },
  {
    q: 'Can you get my parents invited faster?',
    a: 'No, and neither can anyone else. Selection is IRCC’s and no representative influences it — and in some periods there is no intake to be selected from at all. What we can do is make sure any interest form you submit is correct, that you understand the income position you would need to be in if invited, and that you have looked seriously at the Super Visa in the meantime.',
  },
];

export default function ParentsGrandparentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Family sponsorship"
        title={
          <>
            Sponsoring parents and grandparents{' '}
            <span className="text-gold-300">is not an application you can simply file</span>
          </>
        }
        subtitle={
          <>
            This route begins with an expression of interest and a selection you cannot influence.
            Being eligible, being organised and being represented do not get you invited. Here is
            how it actually works — and why so many families use the Super Visa instead.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== HOW IT WORKS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The route, plainly"
          title="An invitation first, an application second"
        />
        <Prose>
          <p>
            A Canadian citizen or permanent resident can sponsor a parent or grandparent for
            permanent residence. But unlike{' '}
            <Link href="/family-sponsorship/spouse-partner" className="font-semibold text-accent-500 link-underline">
              spousal sponsorship
            </Link>
            , which you can file whenever you are ready, this route runs through a controlled intake.
          </p>
          <p>
            Prospective sponsors submit a short interest-to-sponsor form, which goes into a pool.
            IRCC then selects from that pool and issues invitations to apply. Only an invited sponsor
            has an application to make. Everyone else in the pool has nothing to file, nothing to
            appeal and nothing to chase.
          </p>
          <p>
            Two things are worth understanding before you build a plan around this. First, being able
            to submit a <em>new</em> interest form is not a given: IRCC has gone long stretches
            without opening a new intake, has drawn invitations from a pool submitted in an earlier
            year, and has paused the program outright. Second, even a form in the pool is not a
            queue position. Check on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>{' '}
            what is actually open before you rely on this route.
          </p>
          <p>
            That structural fact governs everything else on this page. Demand for places has
            consistently exceeded what IRCC accepts, intakes do not run on a predictable schedule,
            and there is no version of this route where careful preparation secures you a place in
            it. What preparation does is put you in a position to respond properly if you are
            invited, and make sure you are not waiting on this route alone in the meantime.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE FOUR MOVING PARTS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What the route is made of"
          title="Four things that decide whether this works"
          subtitle="The first is outside your control entirely. The other three are worth understanding before you rely on them."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE.map((c) => (
            <FeatureCard key={c.title} icon={<Icon name={c.icon} />} kicker={c.kicker} title={c.title}>
              {c.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== INCOME AND UNDERTAKING ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The financial test"
              title="Income, measured across tax years"
            />
            <Prose>
              <p>
                Sponsoring a parent or grandparent carries a higher financial bar than sponsoring a
                spouse, and it is assessed differently. Rather than a snapshot of what you earn now,
                IRCC looks at your income across a set number of consecutive tax years and requires
                that each of them meets the minimum for your family size. How many years, and how
                much, are both published by IRCC and both have changed over time.
              </p>
              <p>
                Two consequences follow. First, the evidence is your Canada Revenue Agency record —
                what you actually declared — not an employer letter or a healthy bank balance. Second,
                the year you have a weak tax year is the year the route closes to you, regardless of
                what you earn today. People who have recently arrived, recently changed careers,
                recently started a business, or who work partly in cash are the ones most often caught
                by this.
              </p>
              <p>
                The family-size count is broader than people expect: it includes the parents or
                grandparents you are sponsoring, their dependants, your own dependants, and anyone you
                have previously undertaken to support. IRCC publishes the current minimum for each
                family size on its site — read it there rather than relying on a figure quoted
                anywhere else, including here.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="The commitment" title="What an undertaking really is" />
            <ul className="mt-6 space-y-4">
              {[
                ['It is a contract with the Crown', 'You promise the government that the sponsored person will not need social assistance. The province can recover from you anything they receive.'],
                ['It is long', 'The undertaking for a parent or grandparent runs far longer than for a spouse. The exact period is set in the regulations — read it before you sign, not after.'],
                ['It cannot be withdrawn', 'Once the sponsored person lands, the undertaking is fixed. It survives job loss, illness, divorce, estrangement and their moving out of your home.'],
                ['A co-signer is equally bound', 'Adding a spouse to strengthen the income does not divide the obligation. It doubles who is liable for it.'],
                ['Default has consequences', 'An unpaid sponsorship debt can bar you from sponsoring anyone else, including a spouse or child, until it is cleared.'],
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
          eyebrow="The sequence"
          title="From intake to decision"
          subtitle="Note where the waiting sits. Steps one to four can take years and produce nothing at all."
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

      {/* ===================== THE DECISION: PGP VS SUPER VISA ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The real decision"
          title="Sponsorship or Super Visa"
          subtitle="These are not competing applications. They answer different questions, and most families we speak to actually want the second one."
        />
        <Prose>
          <p>
            The Super Visa is a visitor route for parents and grandparents of Canadian citizens and
            permanent residents. It permits long, repeated stays on a single authorisation rather than
            the short visits a standard visitor visa contemplates. It requires a supporting invitation
            from the child or grandchild in Canada, evidence that they meet an income threshold, and
            private medical insurance meeting IRCC&rsquo;s minimum coverage amount and validity
            period. Those requirements, and the length of stay each entry allows, are set out on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/eligibility.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC&rsquo;s super visa eligibility page
            </a>
            . Unlike sponsorship, it does not depend on an intake — you can apply when you are ready.
          </p>
          <p>
            What it does not do is confer status. A Super Visa holder remains a visitor: no permanent
            residence, no path to citizenship, no provincial health coverage, no right to work, and no
            credit towards a future sponsorship. Time on a Super Visa does not accumulate into
            anything.
          </p>
          <p>
            So the honest way to frame the choice is by what the family actually needs. If the need is
            for a parent to be present — to spend long stretches with grandchildren, to be cared for,
            to be part of daily life — the Super Visa answers that, now, without depending on a
            selection you cannot influence. If the need is genuinely for status, with the permanence,
            the healthcare access and the eventual citizenship that come with it, only sponsorship
            delivers that, and you must accept that it may never become available to you.
          </p>
          <p>
            The two are not mutually exclusive. Submitting an interest form when an intake opens does
            not stop a parent visiting on a Super Visa, and for many families the sensible position is
            to do both: pursue presence now, and keep the status route open in case an invitation ever
            comes.
          </p>
        </Prose>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <FeatureCard
            icon={<Icon name="shield" />}
            kicker="Status, if you are selected"
            title="Parent and grandparent sponsorship"
            href="/family-sponsorship"
            cta="See all family routes"
          >
            Permanent residence, healthcare access and a path to citizenship — but gated behind an
            intake that may not open, a selection you cannot influence, an income test measured over
            past tax years, and a long binding undertaking.
          </FeatureCard>
          <FeatureCard
            icon={<Icon name="plane" />}
            kicker="Presence, available now"
            title="Super Visa"
            href="/visitor-visa/super-visa"
            cta="Read the Super Visa page"
          >
            Long, repeated visits on one authorisation, applied for whenever you are ready. Requires
            income evidence and private medical insurance. Confers no status, no work rights and no
            progress towards permanent residence.
          </FeatureCard>
        </div>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see"
        />
        <Prose>
          <p>
            <strong>Waiting on the pool and doing nothing else.</strong> Families spend years hoping
            for an invitation that may never arrive, while the parent ages out of comfortable travel
            and misses the years they wanted to be present for. The waiting is the cost, and it is
            rarely counted.
          </p>
          <p>
            <strong>Income that does not survive the look-back.</strong> A sponsor earning well today
            is refused because an earlier tax year in the assessed range fell short. By the time the
            invitation arrives, that year cannot be changed. If you intend to sponsor, your tax filings
            are the preparation.
          </p>
          <p>
            <strong>Under-counting family size.</strong> People calculate against their household as
            they picture it and forget that dependants of the sponsored parents, and anyone previously
            undertaken for, are counted too. The threshold they were measuring against was the wrong
            one.
          </p>
          <p>
            <strong>Signing the undertaking without reading it.</strong> Sponsors treat it as
            paperwork rather than a long, unbreakable financial liability — and discover its weight
            only when circumstances change.
          </p>
          <p>
            <strong>Treating the Super Visa as a stepping stone.</strong> It is not one, and applying
            for it while stating an intention to remain permanently undermines the visitor intent the
            officer is assessing. If the parent has been{' '}
            <Link href="/canada-visa-refused" className="font-semibold text-accent-500 link-underline">
              refused before
            </Link>
            , understanding the officer’s reasoning through{' '}
            <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
              GCMS notes
            </Link>{' '}
            matters more than reapplying quickly.
          </p>
          <p>
            <strong>Believing someone can influence selection.</strong> Nobody can. If you are being
            offered guaranteed selection, priority submission or an inside route, you are being sold
            something that does not exist.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you need your parents here soon, this is not your route">
            <p>
              This route does not suit a family with an urgent need — a parent in declining health, a
              new baby, a bereavement. There is no expedited path, no compassionate queue and no way
              to make an invitation arrive sooner. For urgency, the{' '}
              <Link href="/visitor-visa/super-visa" className="font-semibold text-accent-500 link-underline">
                Super Visa
              </Link>{' '}
              is the route that can actually respond. It also does not suit anyone who needs to start
              now regardless of policy: there have been periods with no intake at all, in which there
              was simply nothing to submit.
            </p>
            <p>
              It also does not suit sponsors whose recent tax years will not stand up to the
              look-back, sponsors who are not in a position to carry a long undertaking honestly, or
              sponsors who are themselves still on a temporary status and not yet permanent residents
              or citizens. And it does not suit anyone who needs certainty: the defining feature of
              this route is that meeting every requirement still does not entitle you to apply.
            </p>
            <p>
              We would rather tell you on the first call that the Super Visa is the better answer for
              your family than take a fee for a form that goes into a pool. Selection is IRCC’s and no
              representative influences it — which is why we publish a{' '}
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
          title="Intakes, income thresholds and undertaking periods"
        />
        <Prose>
          <p>
            Whether an intake is currently open, the minimum necessary income for each family size,
            the tax years assessed, the length of the undertaking and the fees payable all change, and
            some of them change without much notice. We deliberately do not print those figures here,
            because a number that is correct today becomes a liability on a page you might read next
            year.
          </p>
          <p>
            IRCC publishes the current position on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , including whether an interest-to-sponsor intake is open at all. The underlying
            obligations — sponsorship eligibility, the undertaking and its duration — sit in the{' '}
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
        <SectionHeading eyebrow="Straight answers" title="The questions families actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Presence now, or status later"
        title="Work out which route your family actually needs"
        subtitle="Tell us your status in Canada, your recent tax position and why you need your parents here. We will tell you honestly whether sponsorship is realistic for you — and whether the Super Visa answers the need better."
        page={PAGE}
        waMessage="Hi, I’d like to understand whether sponsoring my parents or a Super Visa is the better route for my family."
      />
    </>
  );
}
