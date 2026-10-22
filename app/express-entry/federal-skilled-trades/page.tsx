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

export const metadata: Metadata = {
  title: 'Federal Skilled Trades Program',
  description:
    'The Express Entry stream for qualified tradespeople: the certificate or job offer, the trade experience, the split language test, and why it is least used.',
  alternates: { canonical: '/express-entry/federal-skilled-trades' },
};

const PAGE = 'express-entry-federal-skilled-trades';

const FITS = [
  {
    icon: 'permit' as const,
    kicker: 'A real trade',
    title: 'You work in a listed trade',
    body: 'Construction, electrical, mechanical, industrial, transport, natural resources, processing and manufacturing supervision, and certain food trades — chefs, cooks, bakers and butchers among them. IRCC publishes the definitive list of eligible occupation groups.',
  },
  {
    icon: 'building' as const,
    kicker: 'Hands on the tools',
    title: 'You have done the work yourself',
    body: 'Recent full-time experience in the trade, performing its main duties independently. Supervising a site without ever having practised the trade does not count.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Certificate or offer',
    title: 'A province will certify you, or an employer will hire you',
    body: 'You need one of the two. Everything else in this programme depends on which of those two doors you can actually open.',
  },
  {
    icon: 'chat' as const,
    kicker: 'Spoken English first',
    title: 'You can hold a conversation on site',
    body: 'The language bar here is lower than the other Express Entry programmes, and it is split — the speaking and listening standard is the harder one to meet.',
  },
];

const STEPS = [
  {
    title: 'Confirm the trade',
    body: 'We check your actual duties against the occupational classification the programme uses. Job titles in Pakistan rarely match Canadian ones, and the duties are what decide it — not what your card says.',
  },
  {
    title: 'Pick your door: certificate or offer',
    body: 'Either a province or territory certifies you in the trade, or a Canadian employer makes you a qualifying offer. We work out which is realistic for you before you spend money chasing either.',
  },
  {
    title: 'Language testing',
    body: 'An approved test, with results reported in all four abilities. We tell you the current thresholds for your case and where your weak ability is likely to be.',
  },
  {
    title: 'Certification, if that is your route',
    body: 'Provinces run their own trade certification — assessment of your experience, sometimes a challenge exam, sometimes a period of work in Canada first. This is usually the long pole in the tent.',
  },
  {
    title: 'Build the evidence',
    body: 'Employment letters that describe duties rather than titles, proof of hours, credentials, and settlement funds where they are required. Weak reference letters refuse more trades files than weak trades do.',
  },
  {
    title: 'Profile, pool and decision',
    body: 'You enter the Express Entry pool and wait to be invited. Whether and when that happens is IRCC’s call, not ours, and we will not put a date on it.',
  },
];

const FAQS = [
  {
    q: 'Do I need a job offer?',
    a: 'Not necessarily — you need either a qualifying Canadian job offer or a certificate of qualification issued by a Canadian province or territory. One or the other. Most applicants outside Canada find the job offer easier to picture and the certificate harder to obtain, which is exactly why this programme stays small.',
  },
  {
    q: 'Can I get a provincial certificate of qualification from Pakistan?',
    a: 'Sometimes, and sometimes not. Each province sets its own process for assessing a foreign-trained tradesperson, and some require you to write a challenge exam or work in the trade in Canada before they will certify you. It has to be checked province by province, for your trade, before you rely on it.',
  },
  {
    q: 'Is the English requirement really lower?',
    a: 'It is lower than the Federal Skilled Worker Program, yes — but it is set separately for each ability rather than as one overall score, and the speaking and listening standard is higher than the reading and writing one. A candidate with a strong academic reading score and weak spoken English can fail here while passing elsewhere. IRCC publishes the current thresholds on its site.',
  },
  {
    q: 'Does a trade diploma count instead of experience?',
    a: 'No. This programme is built on work experience in the trade, done by you, recently. Education can help your ranking score once you are in the pool, but it does not substitute for having practised the trade.',
  },
  {
    q: 'How many people actually come through this programme?',
    a: 'Comparatively few. It is the narrowest of the three federal Express Entry programmes, and rounds of invitations aimed at it alone are occasional rather than routine. Many tradespeople who do get invited come in through other paths — category-based rounds aimed at trade occupations, or a provincial nomination. IRCC publishes the full record of rounds of invitations on canada.ca, so you can check the pattern yourself rather than take our word for it.',
  },
  {
    q: 'What will it cost me?',
    a: 'Two separate things: our professional fee, and government fees paid to IRCC (not to us). Provincial certification and language testing carry their own charges as well. Government fees change, so we do not print them here — IRCC publishes its current fee list on canada.ca. Our own fees are set out on our fees page and itemised in writing before you sign anything.',
  },
  {
    q: 'How long does it take?',
    a: 'It depends on your case, on the province if you go the certification route, and on IRCC. Anyone quoting you a fixed date is guessing. We will give you an honest range once we have seen your file.',
  },
  {
    q: 'Can you guarantee it?',
    a: 'No — and neither can anyone else. An IRCC officer decides your application, and no consultant can overrule that. What we can do is tell you plainly whether your case is worth filing.',
  },
];

export default function FederalSkilledTradesPage() {
  return (
    <>
      <PageHero
        eyebrow="Express Entry · Federal Skilled Trades"
        title={
          <>
            The Express Entry stream for{' '}
            <span className="text-gold-300">people who work with their hands</span>
          </>
        }
        subtitle={
          <>
            Built for qualified tradespeople rather than graduates. The language bar is lower than
            the other federal programmes — but it turns on something most applicants outside Canada
            cannot produce: a provincial certificate of qualification, or a Canadian job offer.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHO IT FITS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Is this you?"
          title="Who the trades stream is built for"
          subtitle="Four things have to be true at once. If one of them isn’t, this is not your route — and we would rather say so now."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FITS.map((f) => (
            <FeatureCard key={f.title} icon={<Icon name={f.icon} />} kicker={f.kicker} title={f.title}>
              {f.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== THE TWO DOORS ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Door one" title="A certificate of qualification" />
            <Prose>
              <p>
                Trades in Canada are regulated primarily by the provinces and territories. A
                certificate of qualification is that authority’s formal statement that you are
                qualified to practise your trade there — it is issued by the body that governs the
                trade in a province or territory, or in some cases by a federal authority, and the
                immigration programme simply recognises it.
              </p>
              <p>
                That means the process, the paperwork and the standard differ by province and by
                trade. Some assess your foreign experience on paper. Some require you to sit a
                challenge exam. Some expect a period of supervised work in Canada before they will
                certify you at all — which is a genuine obstacle if you have never been to Canada.
              </p>
              <p>
                It is worth knowing that some trades are compulsory — you may not legally work in
                them without certification — while others are voluntary. Which is which depends on
                the province.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="Door two" title="A qualifying job offer" />
            <Prose>
              <p>
                The alternative is a genuine offer of full-time employment in your skilled trade
                from a Canadian employer, of a specified minimum duration, and supported in the way
                the regulations require. In practice that usually means a labour market impact
                assessment behind it, or an equivalent employer-specific work permit position.
              </p>
              <p>
                An offer has to be real. An email saying “we’ll hire you” is not an offer for these
                purposes, and paying an agent for a letter is how people end up with a
                misrepresentation finding on their file — a far worse outcome than a refusal.
              </p>
              <p>
                You also still have to meet the trade’s ordinary employment requirements in Canada,
                apart from holding the certificate itself.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      {/* ===================== LANGUAGE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The language test"
          title="Lower overall — but split, and not where you expect"
        />
        <Prose>
          <p>
            The trades programme sets a lower language standard than the Federal Skilled Worker
            Program, which is the single reason most tradespeople look at it. But it is not one
            number. The minister sets a threshold for each of the four abilities, and speaking and
            listening are held to a higher standard than reading and writing.
          </p>
          <p>
            The logic is obvious once you see it: on a Canadian work site you have to understand a
            spoken safety instruction, not read an essay. The practical consequence is that
            applicants who have prepared for an academic-style test — strong on reading, weak on
            speaking — can fail this programme while comfortably clearing others.
          </p>
          <p>
            The current thresholds are published by IRCC and change from time to time. We confirm
            them for your file rather than printing a number here that may be out of date by the
            time you read it. See{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-trades.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-500 link-underline"
            >
              IRCC’s Federal Skilled Trades page
            </a>{' '}
            for the official requirements.
          </p>
        </Prose>
      </Section>

      {/* ===================== HOW IT WORKS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How it works"
          title="From trade check to a decision"
          subtitle="Six stages. The second one is where most enquiries stop — deliberately, and early."
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

      {/* ===================== THE HONEST PART ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The honest part"
          title="This is the narrowest of the three federal programmes"
        />
        <Prose>
          <p>
            Express Entry manages three federal programmes: skilled workers, Canadian experience,
            and skilled trades. The trades stream is the narrowest of the three in practice, and it
            is worth understanding why before you build a plan around it. IRCC publishes every round
            of invitations, including which programme or category each round targeted — you can{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-500 link-underline"
            >
              read the official record of rounds of invitations
            </a>{' '}
            and judge the pattern for yourself.
          </p>
          <p>
            The bottleneck is not the language test and it is not the experience requirement. It is
            the certificate-or-offer condition. Provincial certification is designed around people
            who are already in Canada and can be assessed, examined or supervised there. A
            qualifying job offer requires a Canadian employer willing to go through a formal hiring
            process for someone abroad. Most tradespeople in Pakistan can produce neither, so they
            never enter the pool under this programme at all.
          </p>
          <p>
            There is a second reason. Even candidates who qualify are ranked alongside everyone else
            in the pool, and rounds of invitations aimed specifically at the trades stream are
            occasional rather than routine. Alongside them IRCC also runs category-based rounds
            targeting trade occupations, and the provinces run their own nomination streams for
            tradespeople — in our experience those are the routes that more often carry a trades
            candidate through. Which rounds have actually been held, and under what selection, is a
            matter of public record on the IRCC page linked above.
          </p>
          <p>
            None of that makes it a bad route. It makes it a narrow one. If you are already working
            in Canada on a permit in your trade, or you have a real employer relationship, it can be
            the cleanest path available to you. If you are sitting in Lahore with fifteen years on
            the tools and no Canadian connection, it usually is not the right first move — and we
            will say so.
          </p>
        </Prose>

        <div className="mt-10">
          <Callout title="Who should not pursue this route">
            <p>
              If you have no Canadian job offer and no realistic path to provincial certification,
              this programme is closed to you today, regardless of how skilled you are. It is also
              not for supervisors and managers who have never practised the trade themselves, for
              helpers and labourers whose duties fall outside the listed occupations, or for anyone
              whose plan depends on buying a job-offer letter. We will tell you this on the call and
              point you at whatever actually fits — often a{' '}
              <Link
                href="/work-permit-canada"
                className="font-semibold text-accent-500 link-underline"
              >
                work permit route
              </Link>{' '}
              first, with permanent residence later.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="The questions tradespeople actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>

        <Prose>
          <p>
            Sources, so you can check us: eligibility, language minimums and the eligible occupation
            groups are set out on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-trades.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-500 link-underline"
            >
              IRCC’s Federal Skilled Trades page
            </a>
            ; government charges are on{' '}
            <a
              href="https://ircc.canada.ca/english/information/fees/fees.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-500 link-underline"
            >
              IRCC’s fee list
            </a>
            . Our own charges are on our{' '}
            <Link href="/fees" className="font-semibold text-accent-500 link-underline">
              fees page
            </Link>
            , and what we will and will not promise is set out in our{' '}
            <Link
              href="/no-guarantee-policy"
              className="font-semibold text-accent-500 link-underline"
            >
              no-guarantee policy
            </Link>
            . Where the official source and this page ever disagree, the official source governs.
          </p>
        </Prose>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Find out where you stand"
        title="Is the trades stream realistic for you?"
        subtitle="Tell us your trade, your years on the tools and whether you have any Canadian connection — an employer, a permit, a family member already there. We will tell you honestly whether this programme is open to you, and if it isn’t, which route is."
        page={PAGE}
        waMessage="Hi, I work in a skilled trade and I’d like to know if the Federal Skilled Trades Program is realistic for me."
      />
    </>
  );
}
