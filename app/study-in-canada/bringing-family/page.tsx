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
 * Bringing family while you study in Canada.
 *
 * The belief this page has to correct: that a Canadian study permit
 * automatically comes with a work permit for the spouse. It does not, and the
 * grounds on which a spouse may qualify have been narrowed. Deliberately no
 * programme list, no fees, no fund amounts, no processing times — those are the
 * parts that change and the parts people wrongly rely on.
 */
export const metadata: Metadata = {
  title: 'Bringing Family While You Study in Canada',
  description:
    'How spouses and children are handled on a study permit application: when a child needs a permit, when a spouse may get a work permit, and recent limits.',
  alternates: { canonical: '/study-in-canada/bringing-family' },
};

const PAGE = 'study-in-canada-bringing-family';

const WHO_IS_WHO = [
  {
    icon: 'user' as const,
    kicker: 'The student',
    title: 'The principal applicant',
    body: 'Your study permit application is the anchor. Every family member’s application is assessed in relation to yours, and if yours is refused theirs falls with it.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Spouse or partner',
    title: 'A separate application',
    body: 'A spouse or common-law partner needs their own status. Depending on your programme, that may be an open work permit — or it may be visitor status with no right to work.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Dependent children',
    title: 'Usually their own application',
    body: 'IRCC’s guidance is that minor children coming from outside Canada with a parent who is applying for a study or work permit should apply for a study permit before they enter. The narrow no-permit exemption is for minors already in Canada. Check the current position on IRCC’s minor children page.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Everyone travelling',
    title: 'A visa to enter',
    body: 'A permit is authorisation to study or work. Entry to Canada is a separate document. Whether each family member needs a temporary resident visa or an eTA depends on nationality — confirm yours on IRCC’s entry-document tool.',
  },
];

const STEPS = [
  {
    title: 'Decide who is actually coming',
    body: 'Declare every family member on your own application, whether or not they travel with you. Undeclared family members cause problems later — including for future sponsorship.',
  },
  {
    title: 'Check what your programme allows',
    body: 'Whether your spouse can hold an open work permit depends on the level and type of programme you are enrolled in, and on your institution. Establish this before you accept an offer, not after.',
  },
  {
    title: 'Prepare one combined financial picture',
    body: 'You must show you can support yourself and everyone coming with you. Adding a spouse and children raises what you have to demonstrate, and the money must be genuinely yours to spend.',
  },
  {
    title: 'File the applications together',
    body: 'Family applications are normally submitted alongside the study permit so they are assessed as one household. Filing them months apart usually costs you time and consistency.',
  },
  {
    title: 'Enrol children in school',
    body: 'School enrolment is a provincial and school-board matter, not an IRCC one. Requirements, catchment rules and fees for non-resident children differ by province and board.',
  },
  {
    title: 'Keep every status in step',
    body: 'Your family’s status is tied to yours and generally cannot outrun it. When you extend, everyone extends. When a child reaches the age of majority, their situation changes.',
  },
];

const FAQS = [
  {
    q: 'Does my study permit automatically let my spouse work?',
    a: 'No. There is no automatic entitlement. A spouse or common-law partner may apply for an open work permit only where the student’s programme and institution fall within the categories IRCC currently allows, and those categories have been narrowed. Where they do not apply, a spouse may still be able to accompany you as a visitor — but a visitor cannot work.',
  },
  {
    q: 'Which programmes let a spouse qualify for an open work permit?',
    a: 'IRCC defines this by study level, programme type and institution, and it has changed more than once in recent years. We will not print the list here, because a list that is correct today becomes a costly mistake on a page you read next year. Check the current criteria on IRCC’s own page for spouses of students before you commit to a programme, and re-check before you file.',
  },
  {
    q: 'My spouse was approved for an open work permit before the rules changed. Is it still valid?',
    a: 'A permit that was issued remains valid on its own terms until it expires. The question that catches people is renewal: an extension is assessed against the criteria in force at the time you apply, not the ones that applied when the first permit was granted. Plan the second permit before the first one runs out.',
  },
  {
    q: 'Does my child need their own study permit?',
    a: 'For a family applying from Pakistan, usually yes. IRCC’s published guidance is that minor children who intend to study should apply for a study permit before entering Canada, including children coming with a parent who is applying for a study or work permit — and in that situation a letter of acceptance is generally not required with the child’s application. The exemption people have heard about, which allows a minor to attend primary or secondary school without a permit while accompanied by a parent authorised to study or work, is narrower than it is usually described and is not a safe basis on which to plan an arrival from abroad. Read IRCC’s minor children page, linked below, and confirm your own situation before you decide. Separately, once a child reaches the age of majority in their province or moves on to post-secondary study, they are assessed as an applicant in their own right.',
  },
  {
    q: 'Can my spouse study instead of working?',
    a: 'A spouse who wants to enrol in a programme is subject to the ordinary study permit requirements in their own right. Accompanying you does not exempt them from proving genuine intent, funds and admission.',
  },
  {
    q: 'Will bringing my family make my own study permit harder to get?',
    a: 'It changes what an officer is assessing. The financial requirement is larger, and the officer is weighing whether an entire household will leave at the end of the authorised stay. Those two grounds are the ones we most often see cited on the refusal letters clients bring us. It is not a reason to hide family members — that is misrepresentation — but it is a reason to prepare the file properly.',
  },
  {
    q: 'Can I bring my parents on my study permit?',
    a: 'No. Accompanying family in this context means a spouse or common-law partner and dependent children. Parents would apply in their own right as visitors, and are assessed on their own ties and circumstances.',
  },
  {
    q: 'Can you guarantee my family will be approved with me?',
    a: 'No. Each family member is a separate decision by a visa officer, and none of those decisions is ours to make. We publish a no-guarantee policy for that reason.',
  },
];

export default function BringingFamilyPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Studying with family"
        title={
          <>
            Bringing your family{' '}
            <span className="text-gold-300">is not automatic</span>
          </>
        }
        subtitle={
          <>
            A study permit does not come with a work permit for your spouse. Whether one is available
            now depends on what and where you study — and that eligibility has been narrowed. Here is
            how accompanying spouses and children are actually handled.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE SHAPE OF IT ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The route, plainly"
          title="Three separate decisions, not one"
        />
        <Prose>
          <p>
            People often describe this as “taking the family on my student visa”. That is not how it
            works. Your study permit is one application. Your spouse’s status is another. Each child’s
            status is another again. They are usually filed together and assessed together, but they
            are distinct decisions and they can come back differently.
          </p>
          <p>
            The one point worth internalising before you spend anything: enrolling in a Canadian
            programme does not, by itself, entitle your spouse to work. For a period, spousal open work
            permits were available to the partners of most international students. That is no longer
            the case. Eligibility now turns on the level and type of programme you are enrolled in and
            the kind of institution delivering it, and it has been tightened more than once.
          </p>
          <p>
            If your household budget assumes your spouse will earn in Canada, verify the current
            criteria against your specific programme before you accept an offer or pay a deposit.
            Getting that wrong is not a paperwork problem — it changes whether the plan is affordable
            at all.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IS WHO ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Who needs what"
          title="Every person needs their own status"
          subtitle="A permit authorises the activity. A visa authorises the entry. They are not the same document and both are needed."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_IS_WHO.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Declare your family even if they are not coming">
            <p>
              A spouse and dependent children must be declared on your application whether or not they
              accompany you. This is not a formality. Two distinct risks follow from getting it wrong.
              The immediate one is misrepresentation: material information withheld from an application
              carries consequences set out in the Immigration and Refugee Protection Act. The second
              arises much later — the Immigration and Refugee Protection Regulations restrict
              sponsoring a family member who was not examined when they should have been on an earlier
              application. Both are matters to put to a licensed representative on the facts, not to
              resolve from a web page.
            </p>
            <p>
              The same applies to a marriage that takes place after you file. Tell IRCC. Quietly
              adjusting the story afterwards is the version that goes badly.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SPOUSE ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Your spouse or partner"
              title="When an open work permit is available"
            />
            <Prose>
              <p>
                An open work permit is not tied to a named employer, which is why it matters so much to
                a family’s finances. For the spouse of an international student, it is available only
                where the student’s programme falls within the categories IRCC currently allows —
                defined by study level, programme type and institution.
              </p>
              <p>
                The direction of travel has been consistently narrower. Partners of students in
                shorter, lower-level or non-university programmes have progressively fallen outside the
                criteria, and the instructions have also been refined in ways that affect students near
                the end of their studies. Treat any list you find on a blog, including a recent one, as
                out of date until you have checked it against IRCC.
              </p>
              <p>
                Where a spouse does not qualify, the realistic alternatives are that they accompany you
                as a visitor and do not work, that they qualify for a work permit in their own right on
                an unrelated basis, or that they remain in Pakistan while you study. All three are
                legitimate plans. Assuming the first one includes a right to work is not.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="Check before you commit" title="Questions to settle early" />
            <ul className="mt-6 space-y-4">
              {[
                ['What level is the programme?', 'Study level is the primary filter for spousal work permit eligibility. Two programmes with similar names can sit on opposite sides of it.'],
                ['What kind of institution?', 'The type of institution delivering the programme matters, not only the credential printed on the certificate.'],
                ['How long is it?', 'Programme duration is part of how eligibility is defined for some categories, and short programmes tend to fall outside.'],
                ['Where are you in the programme?', 'Timing within your studies can affect a spouse’s eligibility, particularly near completion or on an extension.'],
                ['What happens at renewal?', 'An extension is judged against the rules in force when you apply for it, not when the first permit was issued.'],
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

      {/* ===================== CHILDREN ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Dependent children"
          title="School, status, and the age line"
        />
        <Prose>
          <p>
            The most common misunderstanding here is that children are simply carried along on the
            parent’s permit. They are not. IRCC’s guidance is that a minor child who intends to study
            should apply for a study permit before entering Canada, including a child arriving with a
            parent who is applying for a study or work permit. A useful concession applies in that
            case: the child’s application does not generally need a letter of acceptance, and it can be
            filed alongside the parent’s as a family group.
          </p>
          <p>
            There is a separate, narrower exemption allowing a minor accompanied by a parent authorised
            to study or work in Canada to attend primary or secondary school without holding a permit
            of their own. It is real, but it is written for children already in Canada, and it is
            routinely quoted to families arriving from abroad as though it removed the need to apply.
            Do not build an arrival plan on it without checking your own circumstances against IRCC’s
            page, linked below.
          </p>
          <p>
            Two things reliably catch families out. The first is the age of majority, which is set by
            each province rather than federally: once a child passes it, or moves into post-secondary
            study, they need their own study permit and are assessed as an applicant in their own right.
            The second is school itself — admission, catchment and any fees charged for the children of
            temporary residents are decided by the province and the school board, not by IRCC. Ask the
            board directly before you assume a place, and before you assume it is free.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>A budget built on a spousal salary that never materialises.</strong> The most
            expensive mistake on this page. Families commit to tuition and a deposit on the assumption
            of two incomes in Canada, discover the spouse does not qualify, and are left funding a
            household on one student’s permitted hours.
          </p>
          <p>
            <strong>Relying on an outdated eligibility list.</strong> Agents and blog posts repeat
            criteria that were accurate at some point. The rules for spouses of students have moved
            repeatedly. Only IRCC’s current page is authoritative, on the day you read it.
          </p>
          <p>
            <strong>Funds that are not credibly the family’s.</strong> Supporting a spouse and children
            raises what you must demonstrate. Money that appears shortly before filing, or belongs to
            someone with no obligation to you, invites refusal on financial grounds regardless of the
            balance shown.
          </p>
          <p>
            <strong>Family accompaniment read as intent to stay.</strong> Officers assess whether the
            household will leave at the end of the authorised stay. Moving an entire family makes that
            question sharper. It is answered with a coherent account of your studies and your ties, not
            by pretending the family does not exist.
          </p>
          <p>
            <strong>Statuses that drift out of alignment.</strong> A spouse’s or child’s status is tied
            to the student’s and generally cannot extend beyond it. Extensions filed late, or filed for
            only one member of the household, are a routine cause of people losing status quietly.
          </p>
          <p>
            <strong>Assuming a refusal for one is a refusal for all — or is unreviewable.</strong> It is
            neither. Where a family member is refused,{' '}
            <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
              the officer’s notes
            </Link>{' '}
            are the route to understanding which ground actually failed, and that is what determines
            whether re-applying makes sense.
          </p>
        </Prose>
      </Section>

      {/* ===================== SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How a family application is put together"
          subtitle="The order matters. Most of the damage is done at step two, before anything is filed."
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

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who this does not suit" />
        <div className="mt-8">
          <Callout title="If the plan only works because your spouse will work, pause">
            <p>
              Studying in Canada with a family attached does not suit someone whose finances depend on a
              spousal income that is not yet confirmed as available. It does not suit someone choosing a
              short or lower-level programme primarily to get the family into Canada — those programmes
              are the ones most likely to fall outside spousal work permit eligibility, and the
              reasoning behind the choice tends to be visible to an officer.
            </p>
            <p>
              It also tends not to suit a household that cannot show settled, verifiable funds for
              everyone travelling, or one where the student’s own study plan does not hold together on
              its own terms. If the study permit is really a means of relocating the family rather than
              a course of study you would otherwise take, the honest conversation is about{' '}
              <Link href="/work-permit-canada" className="font-semibold text-accent-500 link-underline">
                work-based routes
              </Link>{' '}
              or{' '}
              <Link href="/family-sponsorship" className="font-semibold text-accent-500 link-underline">
                sponsorship
              </Link>
              , not about a college admission.
            </p>
            <p>
              We would rather say that on the first call than take a fee for a file that was never going
              to work. Each family member is a separate officer’s decision and none of them is ours to
              make, which is why we publish a{' '}
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
          title="Eligibility criteria, fees and funds"
        />
        <Prose>
          <p>
            Spousal work permit criteria, the financial requirement for accompanying family members,
            application fees and processing times all change, and the criteria for spouses of students
            have changed more than most. We deliberately do not publish those figures or lists here,
            because something that is right today becomes a liability on a page you read next year.
          </p>
          <p>
            IRCC publishes the current position on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/help-your-spouse-common-law-partner-work-canada.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              helping your spouse or partner work in Canada
            </a>{' '}
            and on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/minor-children.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              studying in Canada as a minor
            </a>
            . Whether a given family member needs a visitor visa or an eTA to enter is set out on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-by-country.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC’s entry requirements by country
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
            . Read the criteria at the source, on the day you need them.
          </p>
          <p>
            The rest of the student picture is covered separately: the{' '}
            <Link href="/study-in-canada/study-permit" className="font-semibold text-accent-500 link-underline">
              study permit itself
            </Link>
            ,{' '}
            <Link href="/study-in-canada/proof-of-funds" className="font-semibold text-accent-500 link-underline">
              proof of funds
            </Link>
            ,{' '}
            <Link href="/study-in-canada/working-while-studying" className="font-semibold text-accent-500 link-underline">
              working while studying
            </Link>
            ,{' '}
            <Link href="/study-in-canada/study-permit-extension" className="font-semibold text-accent-500 link-underline">
              extensions
            </Link>{' '}
            and{' '}
            <Link href="/study-in-canada/refusals" className="font-semibold text-accent-500 link-underline">
              refusals
            </Link>
            .
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
        eyebrow="Before you accept an offer"
        title="Check whether your programme actually allows your spouse to work"
        subtitle="Tell us the programme, the institution and who is coming with you. We will go through the current IRCC criteria against your situation and give you our honest read on whether the finances hold up. What we cannot do is promise you an outcome."
        page={PAGE}
        waMessage="Hi, I’d like to know whether my spouse and children can come with me while I study in Canada."
      />
    </>
  );
}
