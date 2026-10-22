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
 * Spousal open work permit.
 *
 * The job of this page is to stop people treating a spousal open work permit as
 * an automatic entitlement that comes with a partner's study or work status. It
 * used to be close to that. It no longer is, and the narrowing is the single
 * fact most families reach us without knowing. We deliberately do not print the
 * eligible occupation or programme lists — those are exactly the thing that
 * changes and exactly the thing people rely on to their cost.
 */
export const metadata: Metadata = {
  title: 'Spousal Open Work Permit for Canada',
  description:
    'Who can hold a spousal open work permit, why it is not tied to one employer, and how eligibility for spouses of workers and students has narrowed.',
  alternates: { canonical: '/work-permits/spousal-open-work-permit' },
};

const PAGE = 'work-permits-spousal-open-work-permit';

const WHO_MIGHT_QUALIFY = [
  {
    icon: 'permit' as const,
    kicker: 'Spouse of a worker',
    title: 'Where the worker’s occupation qualifies',
    body: 'Eligibility now depends on the occupation the principal worker holds, not simply on the fact that they hold a work permit. The qualifying set is defined by IRCC and has been reduced.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Spouse of a student',
    title: 'Where the study programme qualifies',
    body: 'Only spouses of students in certain levels and types of programme remain eligible. Being enrolled at a designated institution is no longer sufficient on its own.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Sponsored from inside Canada',
    title: 'While an inland sponsorship is in progress',
    body: 'A spouse or partner being sponsored for permanent residence from within Canada may be able to work while the application is decided, rather than waiting out the whole process.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Other bases',
    title: 'Separate open-permit routes exist',
    body: 'Some open permits have nothing to do with marriage — bridging permits and post-graduation permits are their own routes with their own rules.',
  },
];

const STEPS = [
  {
    title: 'Establish the principal’s status first',
    body: 'The permit is derivative. Before anything else, confirm what the worker or student actually holds, in what occupation or programme, and how long it runs.',
  },
  {
    title: 'Check the principal against the current criteria',
    body: 'This is where most families are surprised. The qualifying occupations and programmes are published by IRCC and are narrower than they once were. Read them on the day you apply.',
  },
  {
    title: 'Prove the relationship',
    body: 'Marriage certificate, or evidence of a common-law relationship, plus the ordinary supporting record — photographs, communication, joint arrangements, and a coherent account of how the relationship formed.',
  },
  {
    title: 'File, inside or outside Canada as applicable',
    body: 'Where you apply from affects the process and the evidence. It can be filed alongside the principal’s application or separately afterwards.',
  },
  {
    title: 'Admissibility and biometrics',
    body: 'Medical requirements and police certificates apply according to your circumstances and intended work, and biometrics are normally required.',
  },
  {
    title: 'Decision and validity',
    body: 'If approved, the permit is normally aligned to the principal’s status and expires with it. It does not extend automatically when theirs does.',
  },
];

const FAQS = [
  {
    q: 'What does “open” actually mean?',
    a: 'It means the permit is not tied to a single named employer. You may generally work for most employers in Canada, change jobs without a new permit, and hold more than one job. That is a genuinely different thing from an employer-specific permit, where leaving the named employer means your authorisation to work stops. Open does not mean unrestricted — some occupations require additional medical clearance, and an open permit does not by itself satisfy provincial licensing for regulated professions.',
  },
  {
    q: 'My spouse has a Canadian work permit. Do I automatically get one?',
    a: 'No, and this is the assumption that causes the most disappointment. Eligibility now turns on which occupation your spouse works in, not merely on the fact that they hold a permit. IRCC publishes the qualifying set and it has been narrowed. Check it against your spouse’s actual occupation before you make plans that depend on two incomes.',
  },
  {
    q: 'My spouse is studying in Canada. Does that qualify me?',
    a: 'Only for certain levels and types of programme. Enrolment at a designated learning institution is not enough on its own any more. IRCC publishes which programmes count. Because this is exactly the kind of rule that is revised, treat any list you read elsewhere — including on a consultant’s page — as out of date until you have confirmed it at the source.',
  },
  {
    q: 'What happens to my permit when my spouse’s status ends?',
    a: 'A spousal open work permit is derivative. It is normally issued to align with the principal’s status and it does not survive independently of it. If their permit expires, is not extended, or their status is lost, yours is affected. Plan extensions as a pair, well before expiry, not separately and not late.',
  },
  {
    q: 'Can I work while my inland spousal sponsorship is being processed?',
    a: 'There is a route that allows a spouse or partner being sponsored from inside Canada to work while the permanent residence application is decided, so that the family is not left without income for the length of the process. It has its own conditions — including requirements about the applicant’s status in Canada and about the sponsorship application having reached a certain point with IRCC — and there are separate arrangements for people whose status has lapsed. IRCC sets those conditions out on its own page for an open work permit in Canada for a sponsored spouse or partner; read them there rather than relying on a summary. Our spouse and partner sponsorship page covers how the underlying application works.',
  },
  {
    q: 'Does having an open work permit help my permanent residence application?',
    a: 'Indirectly at most. Canadian work experience gained on an open permit can matter for some economic routes, and holding one keeps a family together while another application proceeds. But the permit itself is temporary status. It is not a step in a permanent residence process and it does not become permanent residence by the passage of time.',
  },
  {
    q: 'What are the current fees and processing times?',
    a: 'IRCC publishes both, and both change. We do not print them here, because a figure that is accurate today is a liability on a page you might read next year. Use IRCC’s own fee list and its check-processing-times tool on canada.ca, on the day you apply. The links are in the sources section above.',
  },
  {
    q: 'Can you guarantee my spouse’s permit?',
    a: 'No, and no one honestly can. The decision belongs to a visa officer. What we can tell you, before you spend anything, is whether your spouse’s occupation or programme falls inside the current criteria at all — which is often the whole answer.',
  },
];

export default function SpousalOpenWorkPermitPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Spousal open work permit"
        title={
          <>
            No longer something that{' '}
            <span className="text-gold-300">comes automatically</span>
          </>
        }
        subtitle={
          <>
            An open work permit lets a spouse work for almost any employer rather than one named
            employer. But eligibility for spouses of workers and students has been narrowed, and it
            now depends on what the principal applicant does — not simply on the fact that they hold
            status in Canada.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT IT IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The route, plainly"
          title="What an open work permit is, and is not"
        />
        <Prose>
          <p>
            Most Canadian work permits name an employer. The permit authorises you to work for that
            employer, in that occupation, and if you leave, your authorisation to work goes with the
            job. An open work permit is different in kind: it is not tied to a named employer, so the
            holder can work for most employers, change jobs, and hold more than one at once.
          </p>
          <p>
            That difference matters enormously to families. It is the difference between a spouse who
            can take whatever work they find and a spouse who cannot lawfully work at all. It is also
            why the spousal open work permit was, for many years, the quiet reason a study or work
            plan in Canada added up financially.
          </p>
          <p>
            The important change is this. Eligibility used to follow fairly broadly from the
            principal applicant simply holding a study or work permit. It no longer does. For spouses
            of workers, it now depends on the occupation the worker holds. For spouses of students,
            it depends on the level and type of programme. Both qualifying sets have been reduced,
            and both are published and revised by IRCC.
          </p>
          <p>
            We deliberately do not reproduce those lists here. They are precisely the detail that
            changes, and a stale list on a consultant’s page is how families end up planning around a
            second income that was never going to be authorised.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO MIGHT QUALIFY ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The four situations"
          title="Where a spousal open work permit can arise"
          subtitle="Each of these is a separate basis with its own conditions. Being married to someone in Canada is not itself one of them."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_MIGHT_QUALIFY.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Check the principal, not the spouse">
            <p>
              The instinct is to ask whether the spouse qualifies. That is the wrong question. In
              almost every case the answer is determined by the principal applicant — what occupation
              the worker is employed in, or what programme the student is enrolled in, and how much
              validity remains on their own permit.
            </p>
            <p>
              So the first thing to establish is not your own profile but theirs, measured against
              what IRCC currently publishes. If the principal falls outside the criteria, no amount of
              strengthening the spouse’s file changes the outcome.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== EVIDENCE + SEQUENCE ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What officers are actually assessing"
              title="Two questions, decided separately"
            />
            <Prose>
              <p>
                The first question is eligibility: does the principal applicant’s occupation or
                programme fall inside the current criteria, and does their status have enough
                remaining validity. This is largely mechanical. Either it fits or it does not.
              </p>
              <p>
                The second question is the relationship: is the marriage or common-law partnership
                genuine. This is a judgement, and it is where files from Pakistan most often run into
                difficulty — not because relationships are less genuine here, but because arranged
                marriages, short courtships and limited cohabitation before the wedding produce a
                documentary record that officers read as thin.
              </p>
              <p>
                The answer is not to manufacture evidence. It is to explain the record you actually
                have, in the cultural terms that make it coherent, and to submit what genuinely exists
                rather than a template someone else assembled.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What tends to be looked at" title="The evidence in kind" />
            <ul className="mt-6 space-y-4">
              {[
                ['The principal’s status', 'The occupation or programme, the permit itself, and how much validity remains on it.'],
                ['Proof of the relationship', 'Marriage registration, or evidence of a common-law relationship where there is no marriage.'],
                ['A coherent history', 'How the relationship formed, in a sequence that matches the documents and the dates.'],
                ['Ongoing contact and support', 'Communication, visits, joint financial arrangements — whatever genuinely exists.'],
                ['Admissibility', 'Medical requirements and police certificates as they apply to your circumstances and intended work.'],
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
          title="How the application runs"
          subtitle="Step two decides most cases. It is worth doing before you spend money on the rest."
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

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Budgeting on two incomes before checking eligibility.</strong> A family commits to
            tuition and living costs on the assumption the spouse will work, then discovers the
            principal’s programme or occupation does not qualify. By then the money is spent and the
            plan has no slack in it.
          </p>
          <p>
            <strong>Relying on a rule that has since changed.</strong> Advice from a cousin who moved
            three years ago, or a page that was accurate when it was written, describes a set of
            criteria that no longer applies. This route has been narrowed. Old accounts of it are
            confidently wrong.
          </p>
          <p>
            <strong>A thin relationship record.</strong> Where the wedding was recent and the couple
            has not lived together, the file can contain almost nothing beyond a certificate.
            Explaining that honestly, with what does exist, does better than padding it.
          </p>
          <p>
            <strong>Documents arranged by a third party.</strong> Photographs, chat logs or affidavits
            assembled to fit an expectation rather than to reflect what happened. If it is found to be
            constructed, the finding is misrepresentation and it lands on you — with a bar on future
            applications. See{' '}
            <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
              what a misrepresentation finding means
            </Link>
            .
          </p>
          <p>
            <strong>Leaving the extension too late.</strong> The permit is aligned to the principal’s
            status. When theirs is extended, yours is not extended with it automatically. Families
            treat the two as one thing and lose work authorisation in the gap.
          </p>
          <p>
            <strong>Assuming an open permit means any job.</strong> Regulated professions still
            require provincial licensing, and some work involving healthcare or children requires
            additional medical clearance. Open means not employer-specific — not unconditional.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If the principal falls outside the criteria, there is nothing here for you">
            <p>
              This route does not suit spouses of workers in occupations outside the current
              qualifying set, or spouses of students in programmes outside it — and that now describes
              a great many families who would have qualified a few years ago. There is no version of a
              stronger application that overcomes it.
            </p>
            <p>
              It also does not suit couples who are not yet married or in a genuine common-law
              relationship at the time of applying; a planned wedding is not a basis. It does not suit
              anyone whose real objective is permanent residence, because this is temporary status and
              it does not convert. And it is the wrong route entirely if you have a Canadian citizen
              or permanent resident spouse — that is{' '}
              <Link href="/family-sponsorship/spouse-partner" className="font-semibold text-accent-500 link-underline">
                spousal sponsorship
              </Link>
              , a different route with its own rules and its own assessment.
            </p>
            <p>
              If you already have a permanent residence application in progress and need to keep
              working, look at the{' '}
              <Link href="/work-permits/bridging-open-work-permit" className="font-semibold text-accent-500 link-underline">
                bridging open work permit
              </Link>
              {' '}instead. If you are the graduate rather than the spouse, the{' '}
              <Link href="/work-permits/post-graduation" className="font-semibold text-accent-500 link-underline">
                post-graduation work permit
              </Link>
              {' '}is its own route.
            </p>
            <p>
              We would rather tell you on the first call that the criteria exclude you than take a fee
              for a file that was never going to work. That is also why we publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== NUMBERS AND SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Where the current details live"
          title="Eligible occupations, eligible programmes, fees and timelines"
        />
        <Prose>
          <p>
            The qualifying occupations, the qualifying study programmes, the remaining-validity
            requirement on the principal’s permit, the fees and the service standards all change. We
            do not publish them here, on purpose. A list that is correct today is the most dangerous
            thing we could leave on a page you might read in a year.
          </p>
          <p>
            IRCC publishes the current eligibility rules for{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/spouses-dependent-children/eligibility.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              open work permits for family members of foreign workers
            </a>
            , and explains the narrowing itself in its notice on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/changes-open-work-permits-family-members-temporary-residents.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              changes to open work permits for family members of temporary residents
            </a>
            . The separate route for a spouse being sponsored from inside Canada is set out by IRCC
            under{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children/spouse-common-law-partner-canada-open-work-permit.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              open work permit in Canada for a sponsored spouse or partner
            </a>
            . The underlying authority sits in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            . Read them at the source, on the day you need them — and if a page anywhere else gives
            you a list without a date on it, do not rely on it.
          </p>
          <p>
            Fees and service standards are the same story. IRCC maintains the{' '}
            <a
              href="https://ircc.canada.ca/english/information/fees/fees.asp"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              current fee list
            </a>{' '}
            and a{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              processing-times tool
            </a>
            . Those are the only figures worth acting on.
          </p>
          <p>
            If your spouse is the student, our pages on the{' '}
            <Link href="/study-in-canada/study-permit" className="font-semibold text-accent-500 link-underline">
              study permit
            </Link>{' '}
            and on{' '}
            <Link href="/study-in-canada/bringing-family" className="font-semibold text-accent-500 link-underline">
              bringing family while studying
            </Link>{' '}
            cover the other side of the same decision.
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
        eyebrow="Before you plan around a second income"
        title="Find out whether the criteria include your spouse at all"
        subtitle="Tell us what your spouse actually does in Canada — the occupation, or the exact programme and level — and how long their permit runs. That lets us check the current IRCC criteria against your situation and tell you honestly what we find. No one can promise you a permit; the decision belongs to a visa officer."
        page={PAGE}
        waMessage="Hi, I’d like to check whether my spouse’s work or study status makes me eligible for an open work permit."
      />
    </>
  );
}
