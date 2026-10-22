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
 * Sponsoring dependent children.
 *
 * Two ideas do most of the work on this page. First: whether a child qualifies is
 * fixed by a date, not by the day an officer happens to look at the file — so delay
 * is the enemy. Second: a child who was never declared and examined on the parent's
 * own application can be barred from ever being sponsored by that parent. Both are
 * quiet, both are irreversible, and both are decided long before anyone applies.
 */
export const metadata: Metadata = {
  title: 'Sponsoring Dependent Children for Canada',
  description:
    'Who counts as a dependent child, how the age lock-in date works, dependants of dependants, and whether to include a child or sponsor them separately.',
  alternates: { canonical: '/family-sponsorship/dependent-children' },
};

const PAGE = 'family-sponsorship-dependent-children';

const QUALIFYING = [
  {
    icon: 'user' as const,
    kicker: 'The relationship',
    title: 'Your child, biological or adopted',
    body: 'The child must be your child — by birth, or through an adoption that Canadian law recognises. Step-children are the child of your spouse or partner, and are dealt with through that relationship, not yours.',
  },
  {
    icon: 'scale' as const,
    kicker: 'The age rule',
    title: 'Under the age set in the Regulations',
    body: 'There is an upper age in the definition of “dependent child”. It has been changed more than once, so we do not print it here — IRCC publishes the current figure and the date it applies from.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Marital status',
    title: 'Not a spouse or common-law partner',
    body: 'A child who is married or in a common-law relationship is not a dependent child, regardless of age. This condition must hold when the application is made and still hold when permanent residence is confirmed.',
  },
  {
    icon: 'doc' as const,
    kicker: 'The exception',
    title: 'Over-age, dependent by condition',
    body: 'A child over the age limit can still qualify if they have depended substantially on your financial support since before reaching that age, and cannot support themselves because of a physical or mental condition. This is evidence-heavy and assessed on its own facts.',
  },
];

const STEPS = [
  {
    title: 'Establish that you can sponsor',
    body: 'You must be a Canadian citizen, a permanent resident, or a person registered under the Indian Act, and old enough to give the undertaking. If you are a permanent resident, you generally have to be living in Canada.',
  },
  {
    title: 'Confirm the child still meets the definition',
    body: 'Age, marital status and — where relevant — the dependency-by-condition test. This is the step to get right before you spend anything, because it is the step that cannot be argued afterwards.',
  },
  {
    title: 'Assemble proof of the relationship',
    body: 'Birth registration, the child’s passport, and evidence of your parentage. Where the other parent is not travelling, custody or consent documentation matters, and is often what the file turns on.',
  },
  {
    title: 'File the sponsorship and the PR application together',
    body: 'Your undertaking and the child’s application for permanent residence go in as one complete package. The date IRCC receives that complete package is the date the age is fixed at.',
  },
  {
    title: 'Medicals, police and biometrics',
    body: 'The child is assessed for admissibility in their own right. Requirements differ by age, so check what applies to a child of that age rather than assuming the adult list.',
  },
  {
    title: 'Decision and landing',
    body: 'If approved, the child must still be unmarried and not in a common-law relationship when permanent residence is confirmed. Circumstances that change during processing can still end the application.',
  },
];

const FAQS = [
  {
    q: 'What exactly is the “age lock-in” date?',
    a: 'It is the date, set by the Regulations, at which the child’s age stops being reassessed. For most programs — including family-class sponsorship — that is the date the complete application is received, but some categories lock in earlier, so confirm which applies to your route. A child who met the age condition on that date continues to be treated as a dependent child even if they have a birthday while the file is being processed. What the lock-in does not do is preserve marital status — the child must still be unmarried and not in a common-law relationship when permanent residence is confirmed.',
  },
  {
    q: 'My child is close to the age limit. What should I do?',
    a: 'Move, and move on a complete application rather than a fast one. An incomplete package that is returned does not hold a date. It is a common way for families to lose a child from an application, and preparation is what reduces the risk — though no amount of preparation puts the date itself under your control.',
  },
  {
    q: 'What is the age limit?',
    a: 'We do not publish it here. The definition in the Immigration and Refugee Protection Regulations has been amended more than once in recent years, and which version applies depends on when the application was received. IRCC publishes the current rule and the transitional dates on its own site. Read it there, on the day you need it.',
  },
  {
    q: 'Can my child’s own child come too?',
    a: 'Yes, in principle. A dependent child of your dependent child is itself within the definition of a family member, so a grandchild can be included where the chain of dependency holds at each link. It has to hold at every link — if the middle generation no longer qualifies, the generation below usually falls with them.',
  },
  {
    q: 'Should I include my child on my own PR application or sponsor separately?',
    a: 'If you have not yet become a permanent resident, include them. Declaring and having every family member examined on your own application — accompanying or not — is what preserves the ability to sponsor them later. Sponsoring separately later is the route for children born or adopted after you landed, or for a child who was properly declared and examined but did not travel with you.',
  },
  {
    q: 'I did not declare a child on my own application. Can I sponsor them now?',
    a: 'This is serious and you should get advice from a licensed representative before you file anything. The Regulations exclude from the family class a person who was a non-accompanying family member on the sponsor’s own application and was not examined, subject to narrow exceptions set out in the Regulations themselves. The practical effect is usually a bar on sponsoring that person. Limited relief measures have existed at various times, and humanitarian and compassionate submissions are sometimes available, but neither is a route you should assume applies to you, and we cannot say in advance whether one will. Bring the actual file to a consultation.',
  },
  {
    q: 'Do I have to meet an income requirement?',
    a: 'Sponsoring your own dependent child does not generally attract the income test that applies to other family-class sponsorships — unless that child has dependent children of their own. You must still be eligible to sponsor at all: certain defaults, convictions and prior undertakings can bar you. We do not publish income figures here because they are revised. IRCC publishes the current income requirement and the full list of sponsorship bars on canada.ca, and the underlying rule sits in section 133 of the Immigration and Refugee Protection Regulations on the Justice Laws website.',
  },
  {
    q: 'How do adopted children work?',
    a: 'An adoption completed abroad is not automatically recognised for immigration. In substance the adoption has to be genuine, in the child’s best interests, to have created a real parent-child relationship and severed the previous legal one, and not to have been arranged primarily to obtain status in Canada. The province or territory you intend to live in has a role, and where both countries are party to the Hague Convention on intercountry adoption, that process must be followed. Where the adoptive parent is a Canadian citizen there is also a citizenship-grant route as an alternative to sponsorship — the two have different consequences, and the choice should be made deliberately.',
  },
  {
    q: 'The other parent will not consent. Does that stop the application?',
    a: 'It can. Where the other parent has custody or access rights, an officer will want to see that the child’s removal from the country is lawful — a custody order, a consent, or a court decision. Sponsoring a child out of a shared-custody situation without addressing this is one of the more predictable refusals we see.',
  },
];

export default function DependentChildrenPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Family sponsorship"
        title={
          <>
            Sponsoring a dependent child is{' '}
            <span className="text-gold-300">a race against a date</span>
          </>
        }
        subtitle={
          <>
            Whether a child qualifies is fixed at a date set by the Regulations — usually the day a
            complete application is received, not the day an officer opens the file. Understanding
            which date governs your route, and declaring every child on your own application in the
            first place, avoids a large share of the problems we see on these files.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHO QUALIFIES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The definition"
          title="Who counts as a dependent child"
          subtitle="“Dependent child” is a defined term in the Immigration and Refugee Protection Regulations. It is narrower than the ordinary meaning of the word, and it is tested at a specific moment."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUALIFYING.map((q) => (
            <FeatureCard key={q.title} icon={<Icon name={q.icon} />} kicker={q.kicker} title={q.title}>
              {q.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-12">
          <Prose>
            <p>
              Note what the definition does not require. It does not require the child to live with
              you, and for a child under the age limit it does not require you to prove that you have
              been supporting them. Financial dependency only becomes a live question for the
              over-age exception. Conversely, a child you support entirely but who has married is not
              a dependent child — the marital-status condition has no exception attached to it.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== THE LOCK-IN ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The rule that decides most files"
              title="Why the date of receipt matters more than anything else"
            />
            <Prose>
              <p>
                Children have birthdays while applications sit in processing. If eligibility were
                assessed at the moment of decision, every delay in the system would cost families a
                child. So the Regulations fix the age at a point in time rather than at the moment
                of decision.
              </p>
              <p>
                Which point in time depends on the program. For most programs, including family-class
                sponsorship, it is the date the complete application is received. But the Regulations
                set out a list of category-specific lock-in dates — a provincial nomination, for
                example, can lock the age at the date the province receives the nomination
                application, which is earlier. Check which one governs your route before you rely on
                a date.
              </p>
              <p>
                That is the whole of the age lock-in. A child who was within the age limit on the
                relevant lock-in date stays within it, however long the file takes afterwards. A
                child who was over it on that date does not come back into range because of anything
                that happens later.
              </p>
              <p>
                Two consequences follow, and they are the reason this page exists. First, the word{' '}
                <em>complete</em> is doing real work — a package returned as incomplete does not hold
                a date, and a family that thought it had filed in time may find it has not. Second,
                the lock-in freezes age and nothing else. Marital status is assessed on the ongoing
                basis: a child who marries during processing ceases to qualify.
              </p>
              <p>
                The current age figure, the list of lock-in dates by category, and the transitional
                rules governing which version of the definition applies to which application are
                published by{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/age-limit-requirements-dependent-children.html"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  IRCC
                </a>
                . The definition itself sits in the{' '}
                <a
                  href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Immigration and Refugee Protection Regulations
                </a>
                .
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What is frozen, what is not" title="Read this carefully" />
            <ul className="mt-6 space-y-4">
              {[
                ['Age — frozen', 'Fixed at the lock-in date that applies to your program. Later birthdays do not remove the child.'],
                ['Marital status — not frozen', 'Must hold at the lock-in date and still hold when permanent residence is confirmed.'],
                ['Completeness — the trap', 'An application returned as incomplete has not been received. There is no date to rely on.'],
                ['Over-age dependency — evidenced', 'For the physical or mental condition exception, the dependency must have begun before the age limit was reached.'],
                ['Grandchildren — chain of dependency', 'A dependent child of a dependent child can be included, but only while each link in the chain still qualifies.'],
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

      {/* ===================== INCLUDE OR SPONSOR ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Two different things"
          title="Including a child on your own application vs sponsoring them later"
        />
        <Prose>
          <p>
            If you have not yet become a permanent resident, your children are not sponsored — they
            are included on your own application as family members, whether or not they intend to
            travel with you. That applies to an{' '}
            <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
              Express Entry
            </Link>{' '}
            application, a{' '}
            <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
              provincial nomination
            </Link>
            , or any other route to permanent residence. Every family member is declared and
            examined, accompanying or not.
          </p>
          <p>
            Sponsorship is the separate mechanism you use once you already hold status: you give an
            undertaking, and the child applies for permanent residence under the family class. It is
            the route for a child born or adopted after you landed, and for a child who was properly
            declared and examined on your own application but did not travel at the time.
          </p>
          <p>
            The reason the distinction is worth understanding before you are in it is that the first
            stage governs the second. Subject to narrow exceptions in the Regulations, a child who
            was a non-accompanying family member on your application and was not examined is excluded
            from the family class in relation to you. In practice that usually bars sponsoring them,
            and the fact that the omission was innocent does not by itself lift the bar. Whether one
            of the exceptions reaches your facts is a question for a licensed representative looking
            at the actual file.
          </p>
        </Prose>

        <div className="mt-10">
          <Callout title="Declare every child, every time, even the ones not coming">
            <p>
              This is among the most damaging errors we see in family immigration files, and it is
              usually made in good faith. A child from an earlier marriage who will stay with
              their mother. A child born between the medical examination and the flight. A child the
              parent did not know about at the time. An agent who advised that leaving a name off
              would make the file simpler.
            </p>
            <p>
              The Regulations do not generally weigh the reason. If the child was a non-accompanying
              family member and was not examined, the sponsorship route to reunite is normally
              closed, subject to the narrow exceptions the Regulations themselves set out. Where the
              omission was deliberate, there may be misrepresentation on top of it, which carries its
              own bar on future applications — IRCC publishes the current period and consequences.
            </p>
            <p>
              Relief measures have existed at different times, and humanitarian and compassionate
              submissions are sometimes possible, but neither is something to plan around. If this
              has already happened in your family, bring the actual file to a consultation rather
              than a summary of it — the outcome depends on precisely what was declared, when, and on
              which form.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How a sponsorship application runs"
          subtitle="The undertaking and the child’s permanent residence application move together as one package."
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

      {/* ===================== ADOPTION ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Adopted children"
          title="An adoption abroad is not automatically an adoption for immigration"
        />
        <Prose>
          <p>
            Families are often surprised by this. A completed adoption under the law of another
            country establishes a relationship there; it does not by itself establish that the child
            is your child for Canadian immigration purposes. The assessment is substantive.
          </p>
          <p>
            In broad terms, an officer looks for an adoption that is in the child’s best interests,
            that has created a genuine parent-child relationship, that has severed the pre-existing
            legal parent-child relationship, and that was not entered into primarily to obtain status
            in Canada. Adoptions arranged to move a relative’s child are a recognised pattern and are
            examined closely.
          </p>
          <p>
            The province or territory where you intend to live has a role in the process, and where
            both countries are party to the Hague Convention on intercountry adoption, that framework
            has to be followed rather than worked around. Adoptions of adults are treated differently
            again, and are narrower.
          </p>
          <p>
            Where the adoptive parent is a Canadian citizen, there is also a direct citizenship-grant
            route as an alternative to sponsoring the child for permanent residence. The two paths
            have different requirements and different long-term consequences for the child, including
            for the child’s own ability to pass citizenship on. That choice should be made
            deliberately at the start, not discovered halfway through.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see"
        />
        <Prose>
          <p>
            <strong>Filing an incomplete package against a deadline.</strong> The family knows the
            child is close to the age limit, rushes, and the package comes back. Nothing was
            received, so no date was held. Preparing the package properly is what gives the lock-in
            a chance to hold; rushing an incomplete one does not.
          </p>
          <p>
            <strong>A child who marries during processing.</strong> The age was locked; the marital
            status was not. This is avoidable if the family understands the condition before the
            wedding rather than after.
          </p>
          <p>
            <strong>Custody and the other parent.</strong> Removing a child from Pakistan where
            another parent holds rights over them requires documentation that satisfies an officer.
            Applications proceed on the assumption it can be sorted out later, and it often cannot.
          </p>
          <p>
            <strong>Over-age dependency claimed without medical evidence.</strong> The exception is
            not a general hardship provision. It requires a physical or mental condition, and
            substantial financial dependency that began before the age limit was reached, both
            evidenced.
          </p>
          <p>
            <strong>Documents that do not agree with each other.</strong> Birth registrations issued
            long after the birth, names spelled differently across passport, NADRA record and school
            documents, a father’s name recorded inconsistently. These are ordinary in Pakistan and
            unremarkable to an officer if explained up front, and corrosive if left to be discovered.
          </p>
          <p>
            <strong>Advice to leave a child off the form.</strong> Whoever gave it will not be there
            when the consequence arrives. See the section above; this one is not recoverable in the
            ordinary way.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="When this route is not available to you" />
        <div className="mt-8">
          <Callout title="Some situations cannot be fixed by applying anyway">
            <p>
              If your child was already over the age limit before you were in a position to file,
              this route is closed, and no filing strategy reopens it. If your child is married or in
              a common-law relationship, they are not a dependent child, whatever their age and
              whatever your support. If your child was a non-accompanying family member on your own
              application and was not examined, sponsorship is barred.
            </p>
            <p>
              An over-age adult child who is simply unemployed, studying, or financially reliant on
              you does not meet the exception — that provision is about a physical or mental
              condition, not about need. In several of these situations the realistic conversation is
              a different one: a{' '}
              <Link href="/study-in-canada/study-permit" className="font-semibold text-accent-500 link-underline">
                study permit
              </Link>{' '}
              in the young adult’s own right, a{' '}
              <Link href="/work-permit-canada" className="font-semibold text-accent-500 link-underline">
                work route
              </Link>
              , or their own permanent residence application. Sometimes there is no route at all, and
              we will say so.
            </p>
            <p>
              We would rather tell you on the first call that a route is closed than take a fee for a
              file that was never going to work. The decision is not ours to make, which is why we
              publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>
              . Related reading:{' '}
              <Link href="/family-sponsorship/spouse-partner" className="font-semibold text-accent-500 link-underline">
                sponsoring a spouse or partner
              </Link>{' '}
              and{' '}
              <Link href="/family-sponsorship" className="font-semibold text-accent-500 link-underline">
                family sponsorship generally
              </Link>
              .
            </p>
          </Callout>
        </div>
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
        eyebrow="Before a birthday decides it"
        title="Check where your child stands against the definition"
        subtitle="Tell us your child’s age, marital status, and whether they were declared on any previous application you made. We will tell you honestly whether this route is open — and if it is not, what else might be."
        page={PAGE}
        waMessage="Hi, I’d like to check whether I can sponsor my child for Canada."
      />
    </>
  );
}
