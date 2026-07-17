import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  StatBand,
  Callout,
  FAQ,
  CTASection,
  Icon,
} from '@/components/ui';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { ReviewedBy } from '@/components/ReviewedBy';
import { site, SERVICE } from '@/lib/site';

/**
 * The flagship page — Canada's C11 work-permit route, the firm's most substantial service.
 *
 * The H1 deliberately does NOT say "C11". Nobody searches an IRCC exemption
 * code — buyers search their own situation ("without a job offer", "self
 * employed"), which is exactly how they describe themselves in our own recorded
 * questions. C11 is the answer they discover here, never the question they ask.
 */
export const metadata: Metadata = {
  title: 'Canada Work Permit Without a Job Offer (C11)',
  description:
    'If you own a business or are self-employed in Pakistan, you may not need a job offer or an LMIA to work in Canada. What the C11 route really requires — and who it is not for.',
  alternates: { canonical: '/work-permit-canada' },
};

const PAGE = 'work-permit-canada';

/* Who this route actually fits — the qualify-in profiles. */
const FITS = [
  {
    icon: 'building' as const,
    kicker: 'Business owners',
    title: 'You own or run a business',
    body: 'A registered business in Pakistan that you can prove you actually operate — not a name on paper.',
  },
  {
    icon: 'user' as const,
    kicker: 'Self-employed & senior',
    title: 'You’re self-employed or senior',
    body: 'A self-employed professional, or someone senior enough that a Canadian business case is genuinely credible.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Funds you can show',
    title: 'You have showable funds',
    body: 'Money in your own name that you can document — not borrowed for a photograph the week before filing.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Told “no”, wrongly',
    title: 'You were told to stop',
    body: 'You’ve been told “you need a job offer first” and stopped there — when this route needs no employer at all.',
  },
];

/* The stages, described honestly — process, not a promise of outcome. */
const STEPS = [
  {
    title: 'Honest assessment',
    body: 'We look at your business, your funds and your history and tell you plainly whether a C11 is realistic. If it isn’t, that’s where it ends — before you’ve paid a service fee.',
  },
  {
    title: 'Build the business case',
    body: 'A C11 lives or dies on the strength of its business case for Canada. We build a genuine plan around what you actually do — never a template.',
  },
  {
    title: 'Assemble the evidence',
    body: 'Proof you’ve run a business, and funds documented in your own name over the holding period your case requires. We tell you the exact figures for you.',
  },
  {
    title: 'Lawyer review',
    body: 'Before anything goes near IRCC, the file is reviewed by our lawyers. A C11 is an argument, not a form — so it’s argued by someone qualified to argue it.',
  },
  {
    title: 'File with IRCC',
    body: 'We submit the application and the business case together, and pay the government fees to IRCC on your behalf, itemised for you in advance.',
  },
  {
    title: 'Decision',
    body: 'The timeline depends on your case and IRCC. Anyone quoting you a fixed date is guessing — we’ll give you the honest picture, not a comfortable one.',
  },
];

const FAQS = [
  {
    q: 'Can you guarantee me the work permit?',
    a: (
      <>
        No — and neither can anyone else. Your application is decided by an IRCC officer, and no
        consultant in Pakistan can overrule that. What we can do is tell you honestly whether your
        case is strong, fix what’s weak before it’s filed, and argue it properly.{' '}
        <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
          Read our no-guarantee policy
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Do I really not need a job offer?',
    a: 'Correct — the C11 is a route that needs no employer, no LMIA, and no job offer to chase. You are the applicant and, in effect, the employer. That does not make it easy: it is a real business case argued on “significant benefit” to Canada, with real money behind it.',
  },
  {
    q: 'Do I need an IELTS band?',
    a: 'The C11 does not carry a mandated IELTS band the way some routes do. That doesn’t make language irrelevant — a credible business case still has to hold together — but you are not shut out for missing a fixed score.',
  },
  {
    q: 'How much money do I need to show?',
    a: 'It depends on the business case you’re making. We won’t print an invented figure on a page you’d make a life decision from — we confirm the exact amount and how long it must sit in your own name once we’ve seen your case.',
  },
  {
    q: 'What does it cost?',
    a: 'Two separate things: our professional fee, and the government fees paid to IRCC (not to us). We itemise both, in writing, before you sign anything — no figure on this page substitutes for the quote we give you for your own file.',
  },
  {
    q: 'How long does it take?',
    a: 'It varies with your case and with IRCC processing, and we won’t pretend otherwise. Anyone quoting you a guaranteed date is guessing — we’ll give you a realistic range once we understand your file.',
  },
  {
    q: 'I’m a salaried employee looking for any job in Canada — is this for me?',
    a: 'Honestly, no. The C11 is built around your own business case, not around finding an employer to hire you. We’ll tell you that on the call rather than take your money, and point you to a route that does fit.',
  },
];

export default function WorkPermitPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · C11 work permit"
        title={
          <>
            Work in Canada without a{' '}
            <span className="text-gold-300">job offer or an LMIA</span>
          </>
        }
        subtitle={
          <>
            If you own a business or you’re self-employed in Pakistan, there is a legal route to work
            in Canada that needs no employer, no LMIA, and no IELTS band. It’s called a{' '}
            <strong className="font-semibold text-white">C11</strong> — and most agents never file
            one.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a consultation
          <span aria-hidden="true">→</span>
        </Link>
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.WORK_PERMIT,
            page: PAGE,
            targetCountry: 'Canada',
            message:
              'Hi, I’d like to apply for a Canada work permit without a job offer. I run my own business.',
          }}
        >
          Ask about your case
        </WhatsAppCta>
      </PageHero>

      <StatBand
        items={[
          {
            big: 'C11',
            label: 'the route',
            desc: 'No LMIA, no job offer, no IELTS band — a work permit argued on significant benefit to Canada.',
          },
          {
            big: 'Canada',
            label: 'office on the ground',
            desc: 'We have an office in Mississauga — not just a Pakistan shop filing a Canadian case blind.',
          },
          {
            big: `PKR ${site.consultFee.amount.toLocaleString()}`,
            label: 'consultation',
            desc: 'Credited to your fee if you proceed. You leave with an honest answer either way.',
          },
        ]}
      />

      {/* ===================== WHO IT FITS (qualify-in) ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Is this you?"
          title="Who the C11 route actually fits"
          subtitle="We qualify people out before we qualify them in. If you recognise yourself here, keep reading."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FITS.map((f) => (
            <FeatureCard key={f.title} icon={<Icon name={f.icon} />} kicker={f.kicker} title={f.title}>
              {f.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="And who it isn’t for">
            <p>
              If you’re a salaried employee looking for any job in Canada, this route is not for you —
              and we’ll say so on the call rather than take your money. A weak application filed today
              is a refusal on your record for years.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHAT A C11 IS ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The route, plainly"
              title="What a C11 actually is"
            />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                Most Canadian work permits need an employer to prove no Canadian could do the job — an
                LMIA. It’s slow, it’s expensive, and you can’t even start it without an employer who
                already wants you.
              </p>
              <p>
                The C11 skips that. It’s for someone who will bring{' '}
                <em className="not-italic font-semibold text-ink-900">significant benefit</em> to
                Canada — typically by starting or buying a business there. You are the applicant and,
                in effect, the employer. There’s no LMIA, and no job offer to chase.
              </p>
              <p>
                It is not a shortcut and it is not easy. It’s a real business case, argued properly,
                with real money behind it. That’s precisely why most agents don’t touch it.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="What you’ll need"
              title="What a strong file is built on"
            />
            <ul className="mt-6 space-y-4">
              {[
                ['A genuine business plan for Canada', 'Built around what you actually do — never a template pulled off a shelf.'],
                ['Funds in your own name', 'Documented over the holding period your case requires. We confirm the exact figure for you.'],
                ['Proof you’ve run a business', 'Real evidence you operate the business you claim — registration, dealings, history.'],
                ['A case that stands up', 'Everything above, assembled so it holds together as one argument to an officer.'],
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

      {/* ===================== HOW IT WORKS (numbered) ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How it works"
          title="From first conversation to a decision"
          subtitle="Six stages. The first one can end it — on purpose, before you’ve paid a service fee."
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

      {/* ===================== COST & TIME ===================== */}
      <Section tone="alt">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">What it costs</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">Two fees, both itemised in writing</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              Our professional fee is quoted for your own file — not a number pulled off a page you’d
              base a life decision on. Separately, government fees are paid to IRCC, not to us. We put
              both in front of you, in writing, before you sign anything.
            </p>
          </div>
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">How long it takes</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">A realistic range, never a promise</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              Timelines depend on your case and on IRCC processing. Anyone quoting you a fixed date is
              guessing — once we understand your file, we’ll give you an honest range rather than a
              comfortable one.
            </p>
          </div>
        </div>
      </Section>

      {/* ===================== WHY US ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Why file it with us"
          title="A C11 is an argument, not a form"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-ink-600 text-pretty leading-relaxed">
          <p>
            A C11 lives or dies on the strength of its business case — which is why it’s reviewed by
            our lawyers before it goes anywhere near IRCC, not filed by whoever answered the phone.
          </p>
          <p>
            We’ve filed these before. Some were approved and some were refused — and we’ll tell you
            what went wrong in the refusals, because you should know exactly what you’re buying before
            you buy it.
          </p>
        </div>
        <div className="mt-8">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Straight answers"
          title="The questions people actually ask"
        />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
      </Section>

      <CTASection
        eyebrow="Find out if you qualify"
        title="See whether a C11 is realistic for you"
        subtitle={`Tell us about your business and your funds and we’ll tell you honestly whether this route fits — and if it doesn’t, what does. A consultation is PKR ${site.consultFee.amount.toLocaleString()}, credited to your fee if you go ahead.`}
        page={PAGE}
        waMessage="Hi, I’d like to apply for a Canada work permit without a job offer. I run my own business."
      />
    </>
  );
}
