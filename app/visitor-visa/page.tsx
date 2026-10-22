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
 * The hub page for temporary visits to Canada.
 *
 * This page is deliberately CONCEPTUAL — it explains the shape of the temporary
 * resident regime (TRV vs eTA, Super Visa, business visitors, extensions) and
 * routes people to the applicant-facing pages. The Pakistan-specific visit-visa
 * page lives at /canada-visit-visa; refusals go to /canada-visa-refused.
 *
 * NO figures appear here on purpose: no fees, no processing times, no insurance
 * minimums, no approval or refusal rates. Every number a reader needs is named
 * and pointed at IRCC / Open Government. See lib/facts.ts.
 *
 * Do not reintroduce refusal-rate rankings ("the most refused category"). IRCC's
 * published data does not support that for visitor visas, and the ordering moves
 * year to year. Link the dataset instead.
 */
export const metadata: Metadata = {
  title: 'Visiting Canada',
  description:
    'Visitor visa or eTA, Super Visa, business visitors and extensions: how these routes work, and the one question underneath every application.',
  alternates: { canonical: '/visitor-visa' },
};

const PAGE = 'visitor-visa';

const ROUTES = [
  {
    icon: 'plane' as const,
    kicker: 'Visitor visa (TRV)',
    title: 'The route for Pakistani passport holders',
    body: 'A counterfoil placed in your passport before you travel. Pakistan is a visa-required country, so this is the route that applies to almost everyone reading this page.',
    href: '/canada-visit-visa',
    cta: 'Visit visa from Pakistan',
  },
  {
    icon: 'globe' as const,
    kicker: 'eTA',
    title: 'For visa-exempt nationalities only',
    body: 'An electronic authorisation linked to a passport, for citizens of visa-exempt countries flying to Canada. It is not a cheaper visitor visa — it is a different regime you either fall into or you don’t.',
  },
  {
    icon: 'user' as const,
    kicker: 'Super Visa',
    title: 'Parents and grandparents',
    body: 'A multiple-entry route for parents and grandparents of Canadian citizens and permanent residents, allowing a materially longer stay per entry than an ordinary visitor visa — with its own medical-insurance and host-income conditions.',
  },
  {
    icon: 'building' as const,
    kicker: 'Business visitor',
    title: 'Meetings, not employment',
    body: 'You may attend meetings, conferences, negotiations and after-sales work as a visitor. What you may not do is enter the Canadian labour market. That line is narrower than most people assume.',
  },
];

const REALITY = [
  [
    'Ties you are actually returning to',
    'Employment, a business you run, property, dependants, ongoing obligations. Not a list of assets — a reason your life continues in Pakistan.',
  ],
  [
    'A purpose that makes sense',
    'A specific, dated, evidenced reason to travel. “Tourism” with no itinerary and no history of travel is not a purpose; it is a gap.',
  ],
  [
    'Funds with a history',
    'Money that has been where it is for a while and can be traced to how you earned it. A balance that appeared last month reads as staged, whatever the amount.',
  ],
  [
    'A consistent story',
    'What you tell the officer must match your forms, your bank record, your employer’s letter and your host’s letter. Contradictions get read as misrepresentation, not as clerical error.',
  ],
];

const FAQS = [
  {
    q: 'Do I need a visitor visa or an eTA?',
    a: 'If you hold a Pakistani passport, you need a visitor visa. An eTA is only for citizens of visa-exempt countries, and mostly only when flying. You apply for one or the other, never both. If you hold a second nationality, that can change the answer, and it is worth checking before you file anything.',
  },
  {
    q: 'Why is the visitor visa refused so often?',
    a: 'Because it is decided on a prediction, not a checklist. The officer has to be satisfied you will leave at the end of your authorised stay, and if they are not satisfied, they refuse. Nothing in the application forces them to be satisfied — which is why complete, honest, well-evidenced files still get refused, and why anyone promising you an approval is selling something they don’t own.',
  },
  {
    q: 'Does wanting to immigrate later ruin my visitor application?',
    a: 'Not by itself. Canadian law recognises dual intent: wanting permanent residence eventually does not disqualify you from temporary status, provided the officer is satisfied you will leave at the end of the stay you are asking for. What does damage a case is concealing the intention and being caught, or asking to visit when what you actually want is to stay.',
  },
  {
    q: 'How much money do I need to show?',
    a: 'There is no published figure to hit, and we won’t invent one. What matters is that the funds are proportionate to the trip you have described, that they are yours, and that they have a traceable history. A large balance with no explanation hurts more than a modest one that clearly came from your salary.',
  },
  {
    q: 'What does it cost and how long does it take?',
    a: 'Two separate things: the government fee paid to IRCC, and our professional fee. Both the fee schedule and the current processing times are published by IRCC and both change, so we point you at the source rather than print a number here that may be wrong by the time you read it — see the IRCC fee list at canada.ca/en/immigration-refugees-citizenship/services/application/fees.html and the processing-times tool at canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html. Our own fee is quoted in writing for your file before you commit.',
  },
  {
    q: 'Can I work or study on a visitor visa?',
    a: 'No. A visitor is not authorised to work, and study is limited to short courses under the rules in force. Business visitors are an exception only in a narrow sense — you may conduct business here for a foreign employer, but you may not take up employment in Canada. If the real plan is to work, the visitor route is the wrong application and filing it can damage the right one.',
  },
  {
    q: 'My visitor visa was refused. Can I just apply again?',
    a: 'You can, but reapplying with the same file usually produces the same result. The useful first step is understanding what the officer actually decided — the refusal letter, and where appropriate the officer’s notes — and then deciding honestly whether a stronger reapplication or a challenge to the decision is the better route.',
  },
];

export default function VisitorVisaPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · temporary visits"
        title={
          <>
            Visiting Canada, and the one question{' '}
            <span className="text-gold-300">underneath every application</span>
          </>
        }
        subtitle={
          <>
            Visitor visa, eTA, Super Visa, business visitor, extension — different names for the
            same regime. Every one of them turns on whether an officer believes you will{' '}
            <strong className="font-semibold text-white">leave at the end of your stay</strong>.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE ROUTES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Which route is yours"
          title="Four ways people visit Canada"
          subtitle="Most confusion at the start of a visit application is people applying under the wrong heading. These are the headings."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ROUTES.map((r) => (
            <FeatureCard
              key={r.title}
              icon={<Icon name={r.icon} />}
              kicker={r.kicker}
              title={r.title}
              href={r.href}
              cta={r.cta}
            >
              {r.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== THE REAL TEST ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The real test" title="Will you leave when you’re supposed to?" />
            <Prose>
              <p>
                Canadian regulations require an officer to be satisfied that a temporary resident
                will leave Canada by the end of the period authorised for their stay. That is the
                whole decision. Everything else — the bank statements, the invitation letter, the
                hotel booking — exists only as evidence pointing at that one prediction.
              </p>
              <p>
                It is worth being precise about the burden. The officer does not have to prove you
                will overstay. You have to satisfy them that you won’t. A file that is merely not
                suspicious is not the same as a file that is convincing, and that gap is where most
                refusals live.
              </p>
              <p>
                The law also recognises what people call dual intent: wanting to become a permanent
                resident one day does not, on its own, bar you from temporary status. What matters
                is whether the officer believes you will comply with the temporary status you are
                asking for right now.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What actually persuades" title="What a strong visit file rests on" />
            <ul className="mt-6 space-y-4">
              {REALITY.map(([term, def]) => (
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

      {/* ===================== HONESTY ABOUT REFUSALS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Said plainly"
          title="Visitor applications are refused often, and the reason is structural"
          subtitle="We would rather you heard this from us than discovered it after paying."
        />
        <Prose>
          <p>
            Refusal is a common outcome on this route, and the reason is structural, not personal.
            Permanent-residence streams like Express Entry are largely scored: the criteria are
            published, and you meet them or you don’t. A visitor application is not scored at all.
            It is judged on an officer’s assessment of your intentions under the temporary resident
            rules, and it carries no appeal to the Immigration Appeal Division — only judicial
            review in the Federal Court. IRCC publishes its own approval and refusal figures, which
            move year to year; if you want the current picture, read it from the source rather than
            from a consultant’s website, including ours.{' '}
            <a
              href="https://open.canada.ca/data/en/dataset/adad3e30-2872-4a4d-a5a5-b3ca1e2ce29d"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-500 link-underline"
            >
              IRCC temporary residence data on the Open Government portal
            </a>
            .
          </p>
          <p>
            That subjectivity cuts both ways. It means a genuine applicant with a thin travel
            history can be refused. It also means a case that was refused once can succeed later on
            better evidence, or be overturned where the decision was unreasonable. What it never
            means is that anyone can guarantee you an outcome.{' '}
            <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
              Read our no-guarantee policy
            </Link>
            .
          </p>
          <p>
            One practical consequence: a weak application filed today sits on your immigration
            record for years and has to be declared on everything you file afterwards. Applying
            early and badly is more expensive than waiting and applying properly.
          </p>
        </Prose>
      </Section>

      {/* ===================== ONCE YOU'RE IN CANADA ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="After you arrive"
          title="Status, extensions and the visitor record"
          subtitle="The visa gets you to the border. What happens after that is a separate set of rules people routinely miss."
        />
        <Prose>
          <p>
            A visitor visa is travel permission, not status. The officer at the port of entry
            decides how long you may stay, and that period — not the expiry date printed on the visa
            — is what governs you. If nothing is stamped or issued, a default period applies; if the
            officer writes a shorter date, the shorter date wins.
          </p>
          <p>
            To stay beyond that period you apply, from inside Canada and before your status expires,
            for a{' '}
            <em className="not-italic font-semibold text-ink-900">visitor record</em> — a document
            that extends your stay and states its new end date. It is not a visa and it does not let
            you re-enter Canada; if you leave, you need valid travel permission to come back.
          </p>
          <p>
            Applying before expiry matters. Do it in time and you generally keep lawful status while
            the application is pending. Miss the date and you are out of status, with a restoration
            process that is time-limited and considerably less forgiving. The default length of stay,
            the restoration deadline and the fees are all set by IRCC and change, so confirm them at
            the source before you rely on them —{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/extend-stay.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-500 link-underline"
            >
              IRCC guidance on extending your stay as a visitor
            </a>
            .
          </p>
        </Prose>

        <div className="mt-10">
          <Callout title="Where the visitor route is the wrong application">
            <p>
              If your actual plan is to work in Canada, to study a full programme, or to remain
              permanently, the visitor route is not a way in and we will tell you so rather than
              file it. Officers read intent, and a visit application made by someone who plainly
              intends to stay is both likely to fail and likely to make the correct application
              harder later. If that is you, look at{' '}
              <Link href="/work-permit-canada" className="font-semibold text-accent-500 link-underline">
                work permits
              </Link>{' '}
              instead, or{' '}
              <Link href="/book-consultation" className="font-semibold text-accent-500 link-underline">
                book a consultation
              </Link>{' '}
              and we will tell you which application actually fits.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== REFUSED ALREADY ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Already refused" title="If you’ve had a refusal" />
        <Prose>
          <p>
            A refusal is not a verdict on you and it is not the end of the route — but reapplying
            with the same file rarely changes anything. The first step is finding out what the
            officer actually decided and why, and then choosing honestly between a stronger
            reapplication and challenging the decision itself.
          </p>
          <p>
            <Link
              href="/canada-visa-refused"
              className="font-semibold text-accent-500 link-underline"
            >
              What to do after a Canadian visa refusal
            </Link>
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
        eyebrow="Before you file"
        title="Find out whether your visit application is worth filing"
        subtitle="Tell us why you’re travelling, what you can evidence and what your history looks like, and we’ll tell you honestly how your case reads to an officer — including when the answer is to wait."
        page={PAGE}
        waMessage="Hi, I’d like to apply for a Canada visitor visa. Can you assess my case?"
      />
    </>
  );
}
