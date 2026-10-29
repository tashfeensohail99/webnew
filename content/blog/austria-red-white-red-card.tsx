import Link from 'next/link';

/**
 * Written from official pages as they stood on 29 October 2026: migration.gv.at
 * (the federal government's migration platform) for the points tables, salary
 * floors and the 2026 nationwide shortage list (64 occupations, counted from the
 * list itself; 81 for 2025 per the ministry's January 2025 release); the
 * Austrian Parliament's record of 443 d.B. (passed 20 May / 3 June 2026,
 * published as BGBl. I No. 81/2026) for the job-change and unemployment rules
 * and the eight-week decision deadline in § 41 NAG; and the Austrian Embassy
 * Islamabad's pages for how applications from Pakistan are lodged. RIS itself
 * was returning errors, so the post says "August 2026" rather than a day.
 */
const ROUTES: [string, string, string, string][] = [
  ['Very highly qualified workers', '70 of 100', 'Not to start — a six-month job-seeker visa', 'Pay that is adequate for the job'],
  ['Skilled workers in shortage occupations', '55 of 90', 'Yes, a binding offer', 'At least the collective-agreement minimum'],
  ['Other key workers', '55 of 90', 'Yes, and the job must pass a labour market test', '€3,465 a month gross in 2026, plus special payments'],
  ['EU Blue Card (the sister permit)', 'No points', 'Yes, and a labour market test', '€55,678 a year gross in 2026'],
];

const a = 'font-semibold';

const MIGRATION = 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/';
const SHORTAGE_LIST = 'https://www.migration.gv.at/de/formen-der-zuwanderung/dauerhafte-zuwanderung/bundesweite-mangelberufe/';
const EMBASSY = 'https://www.bmeia.gv.at/en/austrian-embassy-islamabad/travel-to-austria/entrance-and-residence/how-to-apply';

export default function AustriaRedWhiteRedCard() {
  return (
    <>
      <p>
        Austria’s <strong>Red-White-Red Card</strong> is a points-based permit to live and work in
        Austria. It is not a lottery and not a visa you buy: Austria’s public employment service (the
        AMS) scores your qualifications, experience, languages and age, and an authority in Austria
        decides. Here is how it works for someone applying from Pakistan, as of October 2026.
      </p>

      <h2>The four routes most applicants use</h2>
      <p>
        <a href={MIGRATION} rel="noopener noreferrer" target="_blank" className={a}>
          Austria’s migration platform
        </a>{' '}
        lists seven Red-White-Red Card categories. Three of them matter to most applicants abroad, and
        the EU Blue Card sits alongside them:
      </p>

      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Austrian work-permit routes for skilled workers, as of October 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Route</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Points</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Job offer first?</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold md:table-cell">Pay</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {ROUTES.map(([route, points, offer, pay]) => (
              <tr key={route}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{route}</th>
                <td className="whitespace-nowrap px-3 py-3 tabular-nums sm:px-4">{points}</td>
                <td className="hidden px-4 py-3 sm:table-cell">{offer}</td>
                <td className="hidden px-4 py-3 md:table-cell">{pay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        The other categories — graduates of Austrian universities, self-employed key workers, start-up
        founders, and regular seasonal workers in tourism and farming — suit far fewer people applying
        from Pakistan.
      </p>

      <h2>Very highly qualified: you can come to look for work</h2>
      <p>
        If you reach <strong>70 points</strong>, you can ask for a six-month job-seeker visa instead of
        coming with a job. You apply in person at the Austrian Embassy in Islamabad, and the AMS has to
        confirm your points. You will need proof of accommodation in Austria, full health insurance and money to
        live on. If you find a job that matches your qualifications before the visa runs out, you apply
        for the card from inside Austria.
      </p>
      <p>
        The points are front-loaded towards young graduates in technical fields. A four-year degree
        scores 20, or 30 in mathematics, IT, the natural sciences or technology. A PhD scores 40.
        Under 35 adds 20 points for age. Each half-year of work experience adds one point, and German or
        English at A2 adds 10. So, on paper, a 29-year-old with a four-year BS in computer science, five
        years’ experience and an English certificate at A2 or above scores 30 + 10 + 20 + 10 ={' '}
        <strong>70 — exactly the line</strong>. Make the same person 35, or give them a non-technical
        degree, and they fall short.
      </p>

      <h2>Shortage occupations: trades, engineers, nurses</h2>
      <p>
        This route needs a binding job offer in an occupation on Austria’s shortage list, a completed
        qualification in that occupation, and 55 points. Each year’s list is set by regulation. The{' '}
        <a href={SHORTAGE_LIST} rel="noopener noreferrer" target="_blank" className={a}>
          2026 nationwide list
        </a>{' '}
        has <strong>64 occupations</strong> — down from 81 in 2025 — with more on separate lists for
        individual provinces. It includes electricians and electrical engineers, IT engineers, mechanical
        engineers, welders, mechanics, plumbers, cooks, nurses and doctors.
      </p>
      <p>
        The qualification carries 30 of the 90 points, and that is where many Pakistani applicants fall
        short: the AMS scores <em>completed training in the occupation</em>, shown on paper, not years
        of learning on the job. With it, the numbers can work — a 32-year-old electrician with a
        completed diploma, six years’ experience and English at B1 scores 30 + 12 + 10 + 10 = 62, before
        any German. German at B1 is worth 15 points on this route, more than English.
      </p>
      <p>
        <strong>Doctors and nurses:</strong> all health professions are regulated in Austria. Being on
        the shortage list does not let you work as one — you need your qualification formally recognised
        first. The government’s{' '}
        <a href="https://www.berufsanerkennung.at/en/" rel="noopener noreferrer" target="_blank" className={a}>
          recognition portal
        </a>{' '}
        tells you whether your profession is regulated and who recognises it. For most other jobs, no
        formal recognition is needed; the AMS checks the documents you submit.
      </p>

      <h2>Other key workers: a salary floor and a labour market test</h2>
      <p>
        If your occupation is not on the list, this route asks for 55 points, a gross salary of at least{' '}
        <strong>€3,465 a month in 2026</strong> plus Austria’s usual special payments, and a labour market
        test: the AMS checks that no equally qualified jobseeker registered with it can fill the post. For
        both this route and shortage occupations, Austria’s migration platform says language certificates
        may be up to five years old, and that the authority does not ask for proof of accommodation or of
        funds when it issues the card.
      </p>

      <h2>What changed in August 2026</h2>
      <p>
        An amendment to Austria’s residence and foreign-employment laws, passed by Parliament in May and
        June and published as Federal Law Gazette <strong>BGBl. I No. 81/2026</strong>, brought Austria
        into line with the EU’s revised Single Permit Directive. Two changes matter to cardholders:
      </p>
      <ul>
        <li>
          <strong>Changing employer.</strong> For the first two years the card ties you to one employer,
          and a new job still needs approval. But once you have applied, you can start the new job
          provisionally after <strong>45 days</strong>. The AMS can pause that clock only if you are the
          one holding up the check.
        </li>
        <li>
          <strong>Losing your job.</strong> The AMS must now give you at least <strong>six months</strong>{' '}
          from the start of unemployment to find work before it tells the residence authority you no
          longer meet the card’s conditions — nine months if you can show your former employer exploited
          you.
        </li>
      </ul>
      <p>
        After 21 months of qualifying work within 24, you can move to the{' '}
        <strong>Red-White-Red Card plus</strong>, which lets you work for any employer or for yourself.
        Your spouse and unmarried children under 18 can join you on a Red-White-Red Card plus of their own.
        On their first application they need German at A1, except for families of very highly qualified workers and EU Blue Card holders.
      </p>

      <h2>How applying from Pakistan works</h2>
      <ul>
        <li>
          <strong>In person, before you travel.</strong> A first application is lodged at the{' '}
          <a href={EMBASSY} rel="noopener noreferrer" target="_blank" className={a}>
            Austrian Embassy in Islamabad
          </a>{' '}
          — not at VFS Global, not at another Schengen country’s embassy, and not at an honorary consulate
          — or by your employer at the authority in Austria. You wait for the decision in Pakistan.
        </li>
        <li>
          <strong>Appointments by email.</strong> The embassy books Red-White-Red Card appointments by
          email to its consulate, using its request form. It warns that demand is very high and the wait
          can be long.
        </li>
        <li>
          <strong>The embassy doesn’t decide.</strong> It checks the file and sends it to the provincial
          authority where you will live. The law gives that authority eight weeks to decide; the embassy
          cannot give updates or speed it up. If you are approved, it contacts you, and you have three
          months to apply for the entry visa that lets you travel and collect the card.
        </li>
        <li>
          <strong>Pakistani documents.</strong> The embassy verifies documents issued by Pakistani
          authorities through a separate service, lodged at application centres in Islamabad, Lahore and
          Karachi and booked through VFS Global. The embassy says documents in English don’t need a German
          translation; ask its consulate about anything else. For the Pakistani side of the process — HEC, IBCC and
          MOFA — see our post on{' '}
          <Link href="/blog/mofa-online-attestation" className={a}>
            MOFA’s new online attestation
          </Link>
          .
        </li>
        <li>
          <strong>The fee</strong> for the card application is €218 (from 1 January 2026), paid in
          rupees at the embassy’s monthly rate.
        </li>
      </ul>

      <h2>A warning from the embassy</h2>
      <p>
        The Austrian Embassy says false information about it is circulating in Google search results,
        including a fraudulent phone number and misleading appointment offers. Its real number is{' '}
        <strong>+92 51 8770 700</strong>, and it states that it does not work with intermediaries or
        agencies. So nobody — us included — can get you an embassy appointment sooner or influence the
        decision. What honest advice can do is check your points, your qualification documents and your
        job offer before you spend months in the queue. If someone promises a “guaranteed” Austrian work
        visa, walk away: the AMS scores your documents and an Austrian authority decides.
      </p>
    </>
  );
}
