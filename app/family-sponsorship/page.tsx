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
  Icon,
} from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

/**
 * Family sponsorship — the family class.
 *
 * Deliberately structural: who may sponsor, who may be sponsored, what the
 * undertaking commits you to, and the inland/outland trade-off. No fee figures,
 * no income thresholds, no processing times — those move, and a stale number on
 * this page is worse than no number at all. Where an amount matters, we name the
 * source and link to it.
 */
export const metadata: Metadata = {
  title: 'Family Sponsorship to Canada',
  description:
    'Sponsoring a spouse, partner, child, parent or grandparent: who may sponsor, who may be sponsored, and what the undertaking really commits you to.',
  alternates: { canonical: '/family-sponsorship' },
};

const PAGE = 'family-sponsorship';

/* Who may be sponsored — the relationship categories, in kind. */
const WHO = [
  {
    icon: 'user' as const,
    kicker: 'Spouse or partner',
    title: 'Spouse, common-law or conjugal partner',
    body: 'A legally married spouse, a partner you’ve lived with in a conjugal relationship, or — narrowly — a conjugal partner you genuinely could not live with or marry.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Children',
    title: 'Dependent children',
    body: 'Your own dependent children, and in most cases the dependent children of a spouse or partner you’re sponsoring, included on the same application.',
  },
  {
    icon: 'building' as const,
    kicker: 'Parents & grandparents',
    title: 'Parents and grandparents',
    body: 'Sponsored through a separate, capped stream that opens by invitation — not by filing whenever you’re ready.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Narrow exceptions',
    title: 'Certain other relatives',
    body: 'Orphaned siblings, nieces, nephews and grandchildren under conditions, and — in tightly limited cases — one other relative. These are exceptions, not a general route.',
  },
];

/* The application sequence, stage by stage. */
const STEPS = [
  {
    title: 'Confirm you may sponsor',
    body: 'Status, age, residence and the bars below are checked first. If you can’t sponsor, nothing after this matters — so we settle it before you spend anything else.',
  },
  {
    title: 'Confirm the relationship qualifies',
    body: 'Family class is defined by relationship, not by affection. We check that yours sits inside a category IRCC recognises, and that it isn’t caught by an exclusion.',
  },
  {
    title: 'Build the relationship evidence',
    body: 'For spouses and partners, this is the whole case: how you met, how the relationship developed, how it’s lived now. Photographs alone don’t carry it.',
  },
  {
    title: 'File sponsor and applicant together',
    body: 'Two linked applications — your sponsorship and your relative’s permanent residence — assessed as one file. Government fees are paid to IRCC, not to us.',
  },
  {
    title: 'Medicals, biometrics, background checks',
    body: 'Your relative completes these when instructed. Admissibility — medical, criminal, security — is assessed on their side, independently of your eligibility.',
  },
  {
    title: 'Decision, or a request to explain',
    body: 'Officers may ask for more, or interview you. How a genuineness concern is answered matters — a careful, evidenced response gives the file its best chance; a casual one rarely does.',
  },
];

const FAQS = [
  {
    q: 'Can you guarantee the sponsorship will be approved?',
    a: (
      <>
        No. An IRCC officer decides, and no consultant can overrule that. What we can do is tell you
        honestly whether your case is strong, fix what’s weak before it’s filed, and put the
        relationship evidence together properly.{' '}
        <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
          Read our no-guarantee policy
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How much income do I need to sponsor?',
    a: (
      <>
        It depends on who you’re sponsoring and how many people you’re already responsible for.
        Spousal and dependent-child sponsorships are treated differently from parent and grandparent
        sponsorships, which do carry an income requirement over several tax years. IRCC publishes the
        current figures and the tax years they’re measured against on its{' '}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html"
          className="font-semibold text-accent-500 link-underline"
          rel="noopener"
        >
          parent and grandparent sponsorship pages
        </a>
        — we confirm exactly which apply to you rather than print a number here that may already have
        changed.
      </>
    ),
  },
  {
    q: 'What does it cost?',
    a: (
      <>
        Two separate things: our professional fee, and the government fees paid to IRCC (not to us).
        IRCC publishes its current fees on{' '}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/fee-list.html"
          className="font-semibold text-accent-500 link-underline"
          rel="noopener"
        >
          its fee list
        </a>
        . Our own fees are set out on our{' '}
        <Link href="/fees" className="font-semibold text-accent-500 link-underline">
          fees page
        </Link>
        , and we itemise both, in writing, before you sign anything.
      </>
    ),
  },
  {
    q: 'How long does it take?',
    a: (
      <>
        It varies by category, by where your relative is, and by IRCC’s own workload. IRCC publishes
        and updates{' '}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
          className="font-semibold text-accent-500 link-underline"
          rel="noopener"
        >
          current processing times
        </a>
        . Anyone quoting you a fixed date is guessing.
      </>
    ),
  },
  {
    q: 'Does divorce end the undertaking?',
    a: 'No. This is the single most misunderstood point on this page. The undertaking is a commitment to the Government of Canada, not to your relative. A relationship ending, a marriage breaking down, or the sponsored person leaving Canada does not release you from it. It runs its full term.',
  },
  {
    q: 'My relative is already in Canada on a visitor visa — can I sponsor from inside?',
    a: 'Possibly, if they hold valid temporary status and you’re sponsoring a spouse or partner. That is the inland route, and it carries trade-offs — including a weaker position if the application is refused. We go through both routes with you before choosing.',
  },
  {
    q: 'Can I sponsor my brother, sister or adult relative?',
    a: 'Usually not. Siblings and adult relatives fall outside the family class except in narrow situations — an orphaned minor sibling, or the tightly limited “lonely Canadian” provision where you have no other qualifying relative anywhere. Most people who ask this do not qualify, and we’d rather say so than take a fee to find out.',
  },
  {
    q: 'I sponsored someone before and it went wrong. Can I sponsor again?',
    a: 'If you defaulted on a previous undertaking and haven’t cleared it, no — not until it’s resolved. The same applies to unpaid court-ordered support and certain debts owed to the Crown. This is worth checking honestly before you apply, not after a refusal.',
  },
];

export default function FamilySponsorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Family class"
        title={
          <>
            Sponsoring your family to <span className="text-gold-300">Canada</span>
          </>
        }
        subtitle={
          <>
            Spouse, partner, children, parents, grandparents. It is a well-established route — but
            it rests on a{' '}
            <strong className="font-semibold text-white">binding financial undertaking</strong> most
            people sign without understanding what they’ve agreed to.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk through your sponsorship — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHO MAY SPONSOR ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The sponsor" title="Who may sponsor" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                A sponsor must be a Canadian citizen, a permanent resident, or a person registered
                under the Indian Act, and must have reached the minimum age set in the regulations.
              </p>
              <p>
                Permanent residents must be living in Canada. Citizens living abroad may sponsor a
                spouse, partner or dependent child, but only if they satisfy the officer they will
                return to live in Canada once the sponsored person lands — sponsoring from abroad
                with no intention of coming back does not work.
              </p>
              <p>
                Being eligible is not the same as being suitable. Eligibility is checked from the
                day you file through to the day a decision is made, so something that changes
                mid-process can undo an application that started out fine.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="The bars" title="Who cannot sponsor" />
            <ul className="mt-6 space-y-4">
              {[
                [
                  'You’re in default on a previous undertaking',
                  'Or in default on court-ordered support payments, or on a debt owed to the Crown from an earlier immigration matter.',
                ],
                [
                  'You receive social assistance',
                  'Other than for reasons of disability. This is about the ability to support, not a judgement about you.',
                ],
                [
                  'You’re an undischarged bankrupt',
                  'The bar can lift once the bankruptcy is discharged.',
                ],
                [
                  'Certain criminal convictions',
                  'Offences of a sexual nature, serious violent offences, and offences causing bodily harm to a family member. Time elapsed, a pardon or a record suspension can lift this — it isn’t always permanent.',
                ],
                [
                  'You’re under a removal order or in detention',
                  'You cannot sponsor while your own status is being decided against you.',
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
            <p className="mt-6 text-sm text-ink-500 text-pretty">
              The full list, with its exceptions, is set out in the Immigration and Refugee
              Protection Regulations.
            </p>
          </div>
        </div>
      </Section>

      {/* ===================== WHO MAY BE SPONSORED ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The family class"
          title="Who may be sponsored"
          subtitle="Family class is defined by relationship. If yours isn’t on this list, sponsorship almost certainly isn’t your route — and we’ll say so early."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHO.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Who this route does not suit">
            <p>
              Brothers and sisters, adult children who are financially independent, aunts, uncles and
              cousins are not sponsorable in the ordinary case. Neither is a spouse you did not
              declare when you became a permanent resident yourself — an undeclared family member is
              excluded from being sponsored by you later, and that exclusion is hard to undo. If a
              relationship began mainly to obtain status, it fails on genuineness no matter how well
              the paperwork is presented. We would rather tell you this at the consultation than take
              a fee and file it.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE UNDERTAKING ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The part people skim"
          title="The undertaking is a real financial commitment"
          subtitle="It is a contract with the Government of Canada, and it is the reason a sponsorship should never be signed casually."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-ink-600 text-pretty leading-relaxed">
            <p>
              When you sponsor, you promise to provide for your relative’s basic needs — food,
              shelter, clothing, and the everyday requirements of living — so that they do not need
              to claim social assistance. If they do claim it, the province can recover what it paid
              from you, and you are in default until it is repaid.
            </p>
            <p>
              Default has consequences beyond the money: it bars you from sponsoring anyone else
              until it’s cleared. People who sponsor a spouse and then discover, years later, that
              they cannot sponsor a parent usually discover it this way.
            </p>
            <p>
              A spouse or partner also signs a separate agreement acknowledging their own
              responsibility to make reasonable efforts to support themselves. It does not reduce
              your undertaking.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card p-8">
              <p className="eyebrow">How long it lasts</p>
              <h3 className="mt-4 font-serif text-2xl text-balance">
                Length varies by relationship — sharply
              </h3>
              <div className="mt-4 space-y-3 text-ink-600 text-pretty">
                <p>
                  A spousal or partner undertaking runs for a defined period after your relative
                  becomes a permanent resident. An undertaking for a dependent child runs longer,
                  and for a young child it’s measured partly against the age they reach.
                </p>
                <p>
                  A parent or grandparent undertaking is the longest in the family class, by a wide
                  margin over the spousal one. That difference is the main reason parent sponsorship
                  deserves a serious conversation before you enter the pool, not after. Check the
                  current periods against the regulation below before you commit to one.
                </p>
                <p>
                  The exact periods are fixed in{' '}
                  <a
                    href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-132.html"
                    className="font-semibold text-accent-500 link-underline"
                    rel="noopener"
                  >
                    section 132 of the Immigration and Refugee Protection Regulations
                  </a>
                  . Quebec applies its own undertaking under a separate agreement with the federal
                  government, on its own terms.
                </p>
              </div>
            </div>

            <Callout title="Ending the relationship does not end the undertaking">
              <p>
                Divorce, separation, estrangement, or the sponsored person leaving Canada altogether
                — none of it releases you. The undertaking runs its full term regardless. Sign it
                knowing that.
              </p>
            </Callout>
          </div>
        </div>
      </Section>

      {/* ===================== INLAND VS OUTLAND ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Spousal applications"
          title="Inland or outland — the choice that matters most"
          subtitle="Both are routes to permanent residence. They differ in where your spouse must be, what they can do while they wait, and what happens if it’s refused."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Inland</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">Applying from inside Canada</h3>
            <div className="mt-4 space-y-3 text-ink-600 text-pretty">
              <p>
                Your spouse must already be in Canada with valid temporary status and must generally
                stay in Canada while the application is processed. Leaving can put re-entry at risk,
                since a temporary resident returning mid-application still has to satisfy an officer
                at the border.
              </p>
              <p>
                The advantage is that they’re with you, and they can apply for an open work permit
                while the application is in process, so the household need not live on one income.
              </p>
              <p>
                The disadvantage is decisive: a refused inland application carries no appeal to the
                Immigration Appeal Division. You’re left with judicial review or refiling.
              </p>
            </div>
          </div>

          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Outland</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">Applying from outside Canada</h3>
            <div className="mt-4 space-y-3 text-ink-600 text-pretty">
              <p>
                Processed through a visa office abroad. Despite the name, your spouse can often
                still visit or be in Canada during processing — outland is about which office decides,
                not about being forbidden from entering.
              </p>
              <p>
                The advantage is the safety net: a refused outland family-class application generally
                carries a right of appeal to the Immigration Appeal Division, which can hear evidence
                afresh.
              </p>
              <p>
                The disadvantage is separation, and no automatic open work permit tied to the
                application while your spouse is abroad.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-ink-600 text-pretty leading-relaxed">
          For most Pakistani applicants the question does not arise — the spouse is in Pakistan, so
          it’s an outland application, and the appeal right comes with it. Inland only becomes a real
          choice when your spouse is already in Canada on valid status. Where both are genuinely open,
          the honest trade is: being together sooner and working sooner, against giving up the
          strongest remedy available if the file goes wrong.
        </p>
      </Section>

      {/* ===================== PARENTS & GRANDPARENTS ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Parents and grandparents"
              title="You don’t apply — you ask to be considered"
            />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                Parent and grandparent sponsorship is capped, and it doesn’t work like the rest of
                the family class. You cannot simply file when you’re ready. IRCC opens an
                interest-to-sponsor step — a short form declaring you want to sponsor — during a
                defined window, and everyone who submits goes into a pool.
              </p>
              <p>
                Invitations are then issued from that pool. Only people who are invited may submit a
                full application. Submitting interest is not applying, and being in the pool is not a
                queue position you can rely on — in the years IRCC has drawn from an existing pool
                rather than opening a fresh one, people who never registered had no way in at all.
              </p>
              <p>
                This stream also carries an income requirement measured over several consecutive tax
                years and assessed against family size — a materially higher bar than spousal
                sponsorship. The figures and the tax years they are measured against are published
                by IRCC on its{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener"
                >
                  sponsor your parents and grandparents page
                </a>
                , and we confirm which apply to you rather than print a number here.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="The alternative" title="The super visa" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                Where sponsorship isn’t available or isn’t sensible, the super visa lets parents and
                grandparents visit for long, repeated stays on a multi-entry visa, with private
                medical insurance and a supporting commitment from the child or grandchild in
                Canada. The stay length, the minimum insurance coverage and the income the host must
                show are all set by IRCC and change — they are published on the{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/eligibility.html"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener"
                >
                  IRCC super visa eligibility page
                </a>
                .
              </p>
              <p>
                It is not permanent residence and it should not be sold as a step towards it. What it
                does offer is time together without taking on the long sponsorship undertaking, and
                without waiting on a draw that may not come.
              </p>
              <p>
                For many families it’s the more honest answer. We’ll tell you when we think it is.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== DEPENDENT CHILDREN ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Children" title="Dependent children" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                A child is a dependant if they’re under the age set in the regulations and unmarried
                and not in a common-law relationship. There is also a separate category with no age
                limit: a child of any age who has depended substantially on a parent’s financial
                support since before that age because of a physical or mental condition.
              </p>
              <p>
                Age is generally assessed by reference to a fixed lock-in date rather than the date a
                decision is made, which is intended to stop a child ageing out purely because
                processing took time. Which date applies to your file is worth confirming precisely —
                it is one of the few places where a small factual point changes the whole outcome.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="The trap" title="Declare every child, every time" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                Every family member must be declared and, where required, examined — including
                children who are not coming to Canada, children from a previous relationship, and
                children living with someone else.
              </p>
              <p>
                A family member who wasn’t declared and examined when you immigrated is generally
                excluded from ever being sponsored by you afterwards. This is the most common and
                most painful failure we see in this category, and it is usually not fraud — it is
                someone who assumed a child who wasn’t travelling didn’t need to be listed.
              </p>
              <p>
                Genetic testing is occasionally raised where documentary proof of a parent-child
                relationship is thin. It’s a last resort, at your cost, not a routine step.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== PROCESS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How it works"
          title="From first conversation to a decision"
          subtitle="Six stages. The first two can end it — deliberately, before you’ve paid a service fee."
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
        <p className="mt-10 max-w-3xl text-ink-600 text-pretty leading-relaxed">
          Government fees, income figures and processing times all change. IRCC publishes the current
          ones on{' '}
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship.html"
            className="font-semibold text-accent-500 link-underline"
            rel="noopener"
          >
            canada.ca
          </a>
          , and we confirm which apply to your file rather than quote a number here that may already
          be out of date.
        </p>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Refusals we’re asked to fix"
          title="What commonly goes wrong"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-ink-600 text-pretty leading-relaxed">
          <p>
            <strong className="font-semibold text-ink-900">Genuineness.</strong> The officer isn’t
            persuaded the relationship is real, or believes it was entered into primarily for status.
            Thin evidence, a very short courtship, a large unexplained gap in circumstances, or an
            arranged marriage documented only by a nikah nama and a photo album — these draw
            questions, and answering them badly is what turns a question into a refusal.
          </p>
          <p>
            <strong className="font-semibold text-ink-900">Undeclared family members.</strong>{' '}
            Covered above. It is the most avoidable failure in this category and one of the least
            fixable.
          </p>
          <p>
            <strong className="font-semibold text-ink-900">Misrepresentation.</strong> An
            inconsistency between what’s said now and what was said in an earlier visa application
            can be treated as misrepresentation, which carries a bar on entering Canada. Fix
            inconsistencies before filing, not after they’re noticed.
          </p>
          <p>
            <strong className="font-semibold text-ink-900">Sponsor eligibility changing.</strong>{' '}
            Eligibility is assessed continuously, not once at filing. A default, a bankruptcy, or a
            change in circumstances during processing can sink an application that was sound when it
            went in.
          </p>
          <p>
            <strong className="font-semibold text-ink-900">Admissibility on the other side.</strong>{' '}
            Medical or criminal inadmissibility is assessed against your relative independently of
            your eligibility. A perfect sponsorship does not cure it.
          </p>
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
        eyebrow="Find out where you stand"
        title="Before you sign an undertaking, understand it"
        subtitle="Tell us who you want to sponsor and we’ll tell you honestly whether the relationship qualifies, whether you’re eligible to sponsor, and what you’d be committing to."
        page={PAGE}
        waMessage="Hi, I’d like to sponsor a family member to Canada. Can you tell me if I qualify?"
      />
    </>
  );
}
