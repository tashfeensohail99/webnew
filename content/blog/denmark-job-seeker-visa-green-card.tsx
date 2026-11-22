import Link from 'next/link';

/**
 * Published 22 November 2026 on the firm's instruction. From SIRI's pages as they
 * stood on 22 November 2026: Job seeking permit (last updated 18-06-2026), Work,
 * Greencard - extension and Establishment card - extension (both 26-06-2026),
 * Pay Limit Scheme (22-09-2026), Supplementary Pay Limit Scheme (14-09-2026), the
 * Positive Lists pages (01-10-2026 and 02-09-2026), Fast-Track (01-10-2026),
 * Certified companies (21-10-2026) and Start-up Denmark (29-06-2026), plus SIRI's
 * news items on the Greencard repeal (10-06-2016) and the changes of 1 April 2023.
 * Legal text read on Retsinformation the same day, in Danish: LOV nr 612 af
 * 08/06/2016 § 2 (in force 10 June 2016) and LOV nr 333 af 28/03/2023 § 2 (in
 * force 1 April 2023). Pakistan points from the Danish Embassy in Pakistan's
 * Greencard update and residence-permit pages.
 *
 * No salary floors, fees or processing times are printed; the post links SIRI for
 * them. The "how to spot an outdated offer" list is our own reading of those
 * sources, not SIRI's wording.
 */
const a = 'font-semibold';

const JOB_SEEKING = 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Jobseeking-permit/';
const WORK = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work';
const GREENCARD_ACT = 'https://www.retsinformation.dk/eli/lta/2016/612';
const GREENCARD_NEWS = 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2018/01/Lovforslag-om-ophaevelse-af-greencard-ordningen-er-vedtaget';
const GREENCARD_EXT = 'https://www.nyidanmark.dk/en-GB/You-want-to-extend/Work---extension/Greencard';
const EMBASSY_GREENCARD = 'https://um.dk/pakistan/en/travel-and-residence/greencard-update/';
const NEWS_2023 = 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2023/03/L46-news-2';
const ACT_2023 = 'https://www.retsinformation.dk/eli/lta/2023/333';
const PAY_LIMIT = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-limit-scheme';
const SUPPLEMENTARY = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Pay-Limit-Schemes/Supplementary-Pay-Limit-scheme/';
const POSITIVE_LISTS = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists';
const SKILLED_LIST = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists/Positive-List-for-skilled-work';
const FAST_TRACK = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track';
const CERTIFIED = 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Certified-companies/';
const START_UP = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark';
const EMBASSY = 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/';

const ROUTES: { name: string; href: string; need: string; who: string }[] = [
  {
    name: 'Pay Limit Scheme',
    href: PAY_LIMIT,
    need: 'A job offer with an annual salary at or above SIRI’s minimum, which is adjusted each 1 January. No set education or field.',
    who: 'You',
  },
  {
    name: 'Positive Lists',
    href: POSITIVE_LISTS,
    need: 'A job offer in a profession on one of the two shortage lists, and a qualification that fits the job.',
    who: 'You',
  },
  {
    name: 'Fast-Track Scheme',
    href: FAST_TRACK,
    need: 'A job with a company that SIRI has certified for the scheme.',
    who: 'Your employer, with your power of attorney',
  },
  {
    name: 'Start-up Denmark',
    href: START_UP,
    need: 'Approval of your business idea by an expert panel appointed by the Danish Business Authority.',
    who: 'You, once approved',
  },
];

export default function DenmarkJobSeekerVisaGreenCard() {
  return (
    <>
      <p>
        <strong>Denmark has no visa that lets you come from Pakistan to look for work.</strong> Its Green
        Card scheme closed to new applications on 10 June 2016, and the Establishment Card ended on 1 April
        2023. As of 22 November 2026, working there from abroad starts with a job offer under a SIRI scheme,
        or a Start-up Denmark approval.
      </p>

      <h2>Is there a Denmark job-seeker visa?</h2>
      <p>
        Not for people abroad. SIRI, Denmark’s Agency for International Recruitment and Integration,
        calls its{' '}
        <a href={JOB_SEEKING} rel="noopener noreferrer" target="_blank" className={a}>
          job-seeking permit
        </a>{' '}
        a residence permit to find work after your original permit expires. It is open only to people
        who already hold certain Danish permits:
      </p>
      <ul>
        <li>
          <strong>Employees</strong> who lose their job through no fault of their own. This covers the Pay
          Limit Scheme, the Positive List for People with a Higher Education, the Researcher Scheme and some
          Fast-Track tracks.
        </li>
        <li>
          <strong>Graduates</strong> of a state-approved Danish higher education programme or PhD, who get
          it with their student permit.
        </li>
        <li>
          <strong>Health professionals</strong> who held a permit to gain a Danish authorisation.
        </li>
      </ul>
      <p>
        Each one follows a permit you already hold in Denmark. None is a first permit you can apply for from
        Pakistan. SIRI’s{' '}
        <a href={WORK} rel="noopener noreferrer" target="_blank" className={a}>
          work page
        </a>{' '}
        says anyone who wants to work in Denmark must apply for a residence and work permit.
      </p>

      <h2>What happened to the Danish Green Card?</h2>
      <p>
        Parliament repealed it.{' '}
        <a href={GREENCARD_ACT} rel="noopener noreferrer" target="_blank" className={a}>
          Act no. 612 of 8 June 2016
        </a>{' '}
        took effect on 10 June 2016, and it does not apply to applications filed before that date.{' '}
        <a href={GREENCARD_NEWS} rel="noopener noreferrer" target="_blank" className={a}>
          SIRI’s notice
        </a>{' '}
        confirms that no new Greencard applications could be made from 10 June 2016.
      </p>
      <p>
        Only people who already held a Greencard can extend it. SIRI’s{' '}
        <a href={GREENCARD_EXT} rel="noopener noreferrer" target="_blank" className={a}>
          Greencard extension page
        </a>
        , updated 26 June 2026, says the scheme has been repealed but a valid Greencard permit can still be
        extended. The Danish Embassy in Pakistan’s{' '}
        <a href={EMBASSY_GREENCARD} rel="noopener noreferrer" target="_blank" className={a}>
          Greencard update
        </a>{' '}
        says the same: applications are no longer accepted from 10 June 2016.
      </p>

      <h2>What about the Establishment Card?</h2>
      <p>
        It closed too. The Establishment Card was a permit for people who had graduated in Denmark.
        SIRI’s{' '}
        <a href={NEWS_2023} rel="noopener noreferrer" target="_blank" className={a}>
          news of 1 April 2023
        </a>{' '}
        says it was abolished as a scheme that day, though existing cards can still be extended.
      </p>
      <p>
        The legal basis is{' '}
        <a href={ACT_2023} rel="noopener noreferrer" target="_blank" className={a}>
          Act no. 333 of 28 March 2023
        </a>{' '}
        on strengthened international recruitment, in force from 1 April 2023. The same package gave
        graduates a longer job-seeking permit, which Denmark then shortened for students who apply from 1
        October 2026. That change is covered in{' '}
        <Link href="/blog/denmark-student-rules-october-2026" className={a}>
          Denmark’s student rules changed on 1 October 2026
        </Link>
        .
      </p>

      <h2>Which work routes are open from Pakistan?</h2>
      <p>
        Every route below starts with something you secure first: a job offer, or approval for a business.
        SIRI’s page for each one gives the salary floor, the fee and the processing time on the day you
        read it.
      </p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Danish work routes open to applicants in Pakistan, as listed by SIRI on 22 November 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Route</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What you need first</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Who applies</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {ROUTES.map((r) => (
              <tr key={r.name}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">
                  <a href={r.href} rel="noopener noreferrer" target="_blank" className={a}>
                    {r.name}
                  </a>
                </th>
                <td className="px-3 py-3 sm:px-4">{r.need}</td>
                <td className="px-3 py-3 sm:px-4">{r.who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        SIRI also runs a{' '}
        <a href={SUPPLEMENTARY} rel="noopener noreferrer" target="_blank" className={a}>
          Supplementary Pay Limit Scheme
        </a>
        , with a lower salary floor and extra conditions. The job must first be advertised on Jobnet and the
        EURES portal. On the{' '}
        <a href={SKILLED_LIST} rel="noopener noreferrer" target="_blank" className={a}>
          Positive List for Skilled Work
        </a>
        , the employer must also have met its apprentice-training duties.
      </p>
      <p>
        For founders, the full route is in our{' '}
        <Link href="/europe/denmark-startup-visa" className={a}>
          Start-up Denmark guide
        </Link>
        . Routes in other European countries are in our{' '}
        <Link href="/europe" className={a}>
          Europe guide
        </Link>
        .
      </p>

      <h2>Can studying in Denmark lead to work?</h2>
      <p>
        It can, but a study permit is not a job-seeker visa. Graduates of a state-approved bachelor’s or
        master’s who applied from 1 October 2026 get up to 1 year to look for work. They cannot bring a
        spouse or children under the same rules.
      </p>
      <p>
        If you study at a programme that is not state-approved and applied from 2 May 2025, you get no
        job-seeking permit at all. Both changes are set out in{' '}
        <Link href="/blog/denmark-student-rules-october-2026" className={a}>
          our post on the student rules
        </Link>
        .
      </p>

      <h2>How do you spot an outdated offer?</h2>
      <p>
        Anyone selling a “Denmark Green Card” or a “job-seeker visa” from Pakistan is selling a route that
        does not exist. Watch for these signs:
      </p>
      <ul>
        <li>
          <strong>A new Greencard application.</strong> The scheme has accepted none since 10 June 2016.
        </li>
        <li>
          <strong>An Establishment Card for someone who has not studied in Denmark.</strong> It closed on 1
          April 2023, and only existing holders can extend.
        </li>
        <li>
          <strong>A “job-seeker visa” or “work search visa” for people abroad.</strong> SIRI’s job-seeking
          permit only follows a Danish permit you already hold.
        </li>
        <li>
          <strong>A visit visa sold as a way to start working.</strong> SIRI says working in Denmark needs a
          residence and work permit.
        </li>
        <li>
          <strong>No named Danish employer and no SIRI scheme.</strong> For Fast-Track, check the company on
          SIRI’s{' '}
          <a href={CERTIFIED} rel="noopener noreferrer" target="_blank" className={a}>
            list of certified companies
          </a>
          .
        </li>
        <li>
          <strong>An offer to “arrange” your documents.</strong> The Danish Embassy in Pakistan warns that
          agents charge high prices for false documents, which usually lead to refusal.
        </li>
      </ul>

      <h2>How do you apply from Pakistan?</h2>
      <p>
        Once you have a job offer or a Start-up approval, read SIRI’s page for your scheme on the day you
        apply. SIRI adjusts the Pay Limit amount every 1 January, and fees and processing times change too.
      </p>
      <p>
        The Danish Embassy in Islamabad’s{' '}
        <a href={EMBASSY} rel="noopener noreferrer" target="_blank" className={a}>
          residence-permit page
        </a>{' '}
        says work applications are submitted in person at the Gerry’s/VFS visa centre. The embassy forwards
        them to Denmark for a decision. Under Fast-Track, your employer runs the application using your
        power of attorney.
      </p>
      <p>
        Schengen visit visas and other European routes from Pakistan are covered in our{' '}
        <Link href="/europe" className={a}>
          Europe guide
        </Link>
        .
      </p>
    </>
  );
}
