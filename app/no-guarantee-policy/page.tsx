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

/**
 * The most important page on the site, and the one every competitor refuses to
 * write.
 *
 * It is linked from the footer of every page — so it must exist, and it must say
 * the thing plainly. Every immigration regulator prohibits guaranteeing outcomes;
 * the entire Pakistani market advertises the opposite. Stating the rule clearly,
 * and telling people how to check anyone who breaks it, is simultaneously the
 * legally required position, the strongest trust signal available, and a filter
 * that pushes unqualified traffic away before it reaches the sales team.
 *
 * Attack the CLAIM, never a named firm — naming competitors invites defamation
 * exposure and breaches legal-marketing rules, and it isn't necessary: the reader
 * does the identification themselves.
 */
export const metadata: Metadata = {
  title: 'Can Anyone Guarantee You a Visa? No.',
  description:
    'No consultant can guarantee a visa — not us, not anyone. Why the promise is always false, and how to check anyone who makes it.',
  alternates: { canonical: '/no-guarantee-policy' },
};

/* What we promise instead of a guarantee. */
const PROMISES = [
  {
    icon: 'shield' as const,
    title: 'We’ll tell you if your case is weak',
    body: 'Before you pay us. A weak application filed today is a refusal on your record that follows you into every future application, to every country.',
  },
  {
    icon: 'scale' as const,
    title: 'We’ll tell you not to apply, when that’s the answer',
    body: 'Even though it earns us less than taking the case would. The honest answer is the one we’re paid for.',
  },
  {
    icon: 'doc' as const,
    title: 'We’ll show you the rule, not our opinion of it',
    body: 'If we tell you something is required, we’ll point you at the government page that says so, so you can read it yourself.',
  },
  {
    icon: 'chat' as const,
    title: 'We’ll tell you what went wrong if it’s refused',
    body: 'Plainly, and in full — including if the mistake was ours.',
  },
];

/* The five questions you can put to any firm, this one included. */
const QUESTIONS = [
  'Who exactly will handle my file, and what is their name?',
  'What is their licence or registration number, and which body issued it?',
  'Where can I look that up myself?',
  'Can I come to your office?',
  'What is your fee, and what part of it goes to the government rather than to you?',
];

const FAQS = [
  {
    q: 'Do you offer a money-back or “approval or refund” guarantee?',
    a: 'No. Tying a fee to an approval we don’t control would be a promise we can’t honestly keep — and the phrasing is a warning sign whoever says it. We charge for the work and the judgement, not for an outcome that belongs to a visa officer.',
  },
  {
    q: 'If you can’t guarantee anything, what am I paying for?',
    a: 'An honest read of your case, the weaknesses fixed before it’s filed, and the file put in front of the officer properly. And the answer you most need: whether it’s worth applying at all — which you get before you owe us the full fee.',
  },
  {
    q: 'Everyone else advertises a 100% success rate. Why don’t you?',
    a: 'Because no honest firm can. Every immigration regulator prohibits guaranteeing outcomes, and no consultant can overrule the officer who decides. A published success rate is a marketing number, not a fact you can verify — so we don’t quote one.',
  },
  {
    q: 'What happens if my application is refused after you file it?',
    a: 'We tell you what went wrong, in full, including if the mistake was ours. Then we look honestly at whether reapplying, or the Federal Court, or simply stopping is the right next move — the same honest answer, refusal or not.',
  },
  {
    q: 'I’ve already paid someone who promised me a guarantee. What now?',
    a: 'It’s worth speaking to somebody about where you stand — whether or not that somebody is us. Bring what you signed and what you were told, and get a straight assessment before you spend anything more.',
  },
];

export default function NoGuaranteePage() {
  return (
    <>
      <PageHero
        eyebrow="Our position, in plain words"
        title="Can anyone guarantee you a visa?"
        subtitle="No. And that includes us. Your visa is decided by another country’s government — not by any consultant in Pakistan. Here is why the promise is always false, and exactly how to check anyone who makes it."
      />

      {/* ===================== WHY THE PROMISE IS FALSE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The truth of it"
          title="Why the promise is always false"
          subtitle="It isn’t a matter of how good a firm is. It’s a matter of who holds the decision."
        />
        <div className="mt-10 max-w-3xl space-y-5 text-lg text-ink-600">
          <p className="text-pretty">
            Your visa is decided by a visa officer employed by another country’s government. That
            officer does not know us, does not answer to us, and is not permitted to. There is no
            relationship, no arrangement, and no amount of money that changes their decision.
          </p>
          <p className="text-pretty">
            So when someone guarantees you a visa, only two things can be true. Either they are lying
            to you to take your fee — or they are planning to do something dishonest with your
            application, which is far worse, because{' '}
            <strong className="font-semibold text-ink-900">
              it is your name on it, and it is you who carries the consequences
            </strong>{' '}
            for years afterwards, not them.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <Callout title="No consultant can guarantee a visa — not us, not anyone.">
            A firm that promises one is either lying to take your fee, or planning to put something
            dishonest under your name. There is no honest version of the guarantee.
          </Callout>
        </div>
      </Section>

      {/* ===================== WHAT WE PROMISE INSTEAD ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What we promise instead"
          title="Four promises we can actually keep"
          subtitle="Every one of these is inside our control. A guaranteed outcome never is."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROMISES.map((p) => (
            <FeatureCard key={p.title} icon={<Icon name={p.icon} />} title={p.title}>
              {p.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== HOW TO CHECK ANYONE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How to check anyone — including us"
          title="Five questions. Ask every firm."
          subtitle="You don’t have to take our word for any of this. Put these to any firm you’re considering, this one included."
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2">
          {QUESTIONS.map((q, i) => (
            <li key={q} className="card flex gap-5 p-6 sm:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 font-serif text-lg text-ink-950">
                {i + 1}
              </span>
              <p className="self-center text-pretty text-ink-700">{q}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-3xl text-lg text-ink-600 text-pretty">
          A firm that answers all five plainly may still not be right for you. A firm that avoids any
          of them has told you what you need to know.
        </p>
        <Link
          href="/about/our-team"
          className="mt-6 inline-block font-semibold text-accent-500 link-underline"
        >
          See who we are, and check us →
        </Link>
      </Section>

      {/* ===================== PHRASES TO WALK AWAY FROM ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Warning signs"
          title="The phrases worth walking away from"
          subtitle="None of these are things an honest firm can offer. Hear them, and you’ve learned something about who you’re dealing with."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Guaranteed visa.',
            '100% success rate.',
            'Approval or your money back.',
            'We have contacts in the embassy.',
            'Pay after approval.',
            'We can get it done quietly.',
          ].map((phrase) => (
            <div
              key={phrase}
              className="card border-l-[3px] border-l-gold-500 px-5 py-4 font-serif text-lg text-ink-800"
            >
              “{phrase}”
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-lg text-ink-600 text-pretty">
          The last two are worth leaving the room over. And if you have already paid someone who
          promised you a guarantee, it is worth speaking to somebody about where you stand — whether
          or not that somebody is us.
        </p>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Straight answers"
          title="The questions this raises"
          subtitle="Honestly answered — the same stance you’ve just read, applied to the cases people ask about most."
        />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
      </Section>

      <CTASection
        eyebrow="Check us before you trust us"
        title="Ask us the five questions"
        subtitle="We would rather you checked. Ask, and then go and verify the answers for yourself."
        page="no-guarantee-policy"
        waMessage="Hi, I’d like to ask about your credentials and how you work."
      />
    </>
  );
}
