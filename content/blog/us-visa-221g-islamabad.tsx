import Link from 'next/link';

/**
 * Published 23 November 2026 on the firm's instruction. Written from official
 * sources as they stood on 23 November 2026: section 221(g) of the Immigration
 * and Nationality Act (8 U.S.C. 1201(g), US Code 2024 edition on govinfo);
 * 22 CFR 42.81 and 42.83 (CFR annual edition revised as of 1 April 2025, on
 * govinfo; eCFR showed a bot check); the Foreign Affairs Manual, 9 FAM 302.1-8
 * and 9 FAM 306.2-2(A); the US Embassy in Pakistan's supplemental document form
 * (updated 18 November 2026), supplemental questionnaire form and immigrant visa
 * page; and the FAQs of the official appointment service for Pakistan
 * (ustraveldocs.com, a script-rendered site read in a browser, which answers
 * scripts with HTTP 404).
 *
 * travel.state.gov returned HTTP 403 to automated reads. Its administrative
 * processing page was read from the Wayback Machine copy of 14 July 2026, the
 * last readable capture, and its CEAC status-change notice from the copy of
 * 13 July 2026. The CEAC status page showed a bot check and was read from the
 * copy of 11 November 2026. The appointment service repeats the State
 * Department's "will vary" sentence, so that wording was confirmed live.
 *
 * No processing time is printed. Official pages for Pakistan give rough figures
 * that disagree, and the topic brief allows only what the State Department
 * states, which is no fixed time. "One year" and "second year" are in
 * 22 CFR 42.81(e) and 42.83; the nonimmigrant one-year point is from the FAM
 * and the State Department page, as the topic brief allows.
 *
 * Our own suggestions: counting a 221(g) when a later form asks about past
 * refusals (from the FAM's statement that it is legally a refusal), keeping a
 * copy of the letter and noting its date, and planning without a fixed date.
 * Re-check monthly.
 */
const a = 'font-semibold';

const INA_221 =
  'https://www.govinfo.gov/content/pkg/USCODE-2024-title8/html/USCODE-2024-title8-chap12-subchapII-partIII-sec1201.htm';
const ADMIN =
  'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/administrative-processing-information.html';
const CEAC_CHANGE =
  'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visas-news-archive/visas-ceac-case-status-change.html';
const CEAC = 'https://ceac.state.gov/CEACStatTracker/Status.aspx';
const FAM_221G = 'https://fam.state.gov/fam/09FAM/09FAM030201.html';
const FAM_OVERCOME = 'https://fam.state.gov/fam/09FAM/09FAM030602.html';
const CFR_4281 =
  'https://www.govinfo.gov/content/pkg/CFR-2025-title22-vol1/pdf/CFR-2025-title22-vol1-sec42-81.pdf';
const CFR_4283 =
  'https://www.govinfo.gov/content/pkg/CFR-2025-title22-vol1/pdf/CFR-2025-title22-vol1-sec42-83.pdf';
const DOCS_FORM = 'https://pk.usembassy.gov/mts/';
const QUESTIONNAIRE = 'https://pk.usembassy.gov/mrn/';
const EMBASSY_IV = 'https://pk.usembassy.gov/immigrant-visas/';
const UTD_FAQ = 'https://www.ustraveldocs.com/pk/en/general-information';

const ASKS: [string, string, string, string][] = [
  [
    'Documents such as a CV, a list of publications, references, recommendation letters, a sponsor’s letter of support, or a description of your planned work',
    'Upload only the documents your letter asks for, through the embassy’s Supplemental Document Submission Form. Choose the post that interviewed you (Islamabad or Karachi) and give your case number.',
    'US Embassy in Pakistan, supplemental documents',
    DOCS_FORM,
  ],
  [
    'Answers to supplemental questions',
    'Download the embassy’s supplemental questions, answer them in a Word document, and upload it through the Supplemental Questionnaire form.',
    'US Embassy in Pakistan, supplemental questionnaire',
    QUESTIONNAIRE,
  ],
  [
    'A missing document for an immigrant visa, such as a birth certificate',
    'Send it as your letter instructs, within one year of the refusal. After that year, the Foreign Affairs Manual says you need a new DS-260 and a new fee.',
    '22 CFR 42.81(e)',
    CFR_4281,
  ],
  [
    'Nothing more from you: administrative processing',
    'Wait for the officer to finish. Check your status online, and tell the consular section if you face a unique hardship.',
    'State Department, administrative processing',
    ADMIN,
  ],
];

export default function UsVisa221gIslamabad() {
  return (
    <>
      <p>
        <strong>
          A 221(g) slip is a refusal under section 221(g) of the Immigration and Nationality Act, but
          your case can still be reopened.
        </strong>{' '}
        Either the officer needs more documents from you, or the case needs “administrative
        processing” first. As of 23 November 2026, the State Department gives no fixed time for that
        processing; it says the time varies with each case.
      </p>

      <h2>What does section 221(g) actually say?</h2>
      <p>
        Section 221(g) is{' '}
        <a href={INA_221} rel="noopener noreferrer" target="_blank" className={a}>
          8 U.S.C. 1201(g)
        </a>{' '}
        in the US Code. It says no visa shall be issued in three situations:
      </p>
      <ul>
        <li>statements in your application or its papers show you are ineligible;</li>
        <li>the application does not comply with the Act or its regulations; or</li>
        <li>the officer knows, or has reason to believe, that you are ineligible.</li>
      </ul>
      <p>
        The{' '}
        <a href={ADMIN} rel="noopener noreferrer" target="_blank" className={a}>
          State Department’s administrative processing page
        </a>{' '}
        says a 221(g) refusal means you did not establish eligibility to the officer’s satisfaction. The{' '}
        <a href={FAM_221G} rel="noopener noreferrer" target="_blank" className={a}>
          Foreign Affairs Manual
        </a>
        , the Department’s rulebook for officers, calls it legally a refusal “even if that refusal is
        eventually overcome”. Our reading: if a later US form asks whether you have ever
        been refused a visa, answer yes and include it.
      </p>
      <p>
        A 214(b) refusal is different. The{' '}
        <a href={UTD_FAQ} rel="noopener noreferrer" target="_blank" className={a}>
          official appointment service for Pakistan
        </a>{' '}
        says those applicants reapply, with a new DS-160 and a new fee. A 221(g) case can instead be
        reopened once you supply what was missing, or once processing ends.
      </p>
      <p>
        Our{' '}
        <Link href="/usa" className={a}>
          US visas guide
        </Link>{' '}
        explains the usual reason visitor visas are refused.
      </p>

      <h2>Why did the officer give you a 221(g)?</h2>
      <p>
        The State Department names two reasons. Either you must provide further documents or
        information, or the case needs administrative processing. The officer tells you which at the end
        of the interview.
      </p>
      <p>
        Administrative processing means the officer wants information from sources other than you. When
        it ends, the officer may find that you qualify, or that you remain ineligible. The appointment
        service adds that missing required or supporting documents lead to a 221(g), with a letter
        listing what you must present.
      </p>
      <p>
        None of the US Embassy in Pakistan’s visa pages we read on 23 November 2026 gives a meaning to
        the colour of the slip. Go by its words: they say what to send, or that your case is in
        administrative processing.
      </p>

      <h2>What does the slip ask for, and what should you do?</h2>
      <p>
        The embassy runs two online forms for applicants in this position. Both tell you to follow the
        instructions in your 221(g) letter and to send what is asked as soon as possible. Here is what
        the official pages say, request by request.
      </p>
      <div role="region" aria-label="What a 221(g) letter from the US Embassy in Islamabad may ask for, and what to do, as of 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            What a 221(g) letter from the US Embassy in Islamabad may ask for, and what to do, as of 23
            November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What the slip asks for</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What to do</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {ASKS.map(([asks, todo, label, href]) => (
              <tr key={asks}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{asks}</th>
                <td className="px-3 py-3 sm:px-4">{todo}</td>
                <td className="px-3 py-3 sm:px-4">
                  <a href={href} rel="noopener noreferrer" target="_blank" className={a}>
                    {label}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        If your letter gives a different method or a different list, follow the letter. Our suggestion:
        keep a copy of it, note the date of the refusal, and keep a record of everything you send.
      </p>

      <h2>How do you check your 221(g) status?</h2>
      <p>
        Use the State Department’s{' '}
        <a href={CEAC} rel="noopener noreferrer" target="_blank" className={a}>
          CEAC Visa Status Check
        </a>
        . Choose immigrant or nonimmigrant visa, then enter the case and passport details it asks for.
      </p>
      <p>
        Expect it to say “Refused”. On 3 March 2020, the State Department changed CEAC so that cases once
        shown as in “Administrative Processing” show as refused. The{' '}
        <a href={CEAC_CHANGE} rel="noopener noreferrer" target="_blank" className={a}>
          State Department’s notice
        </a>{' '}
        said nothing changed in the cases themselves.
      </p>
      <p>
        The status can change once you show the officer that you are eligible. It can also change when
        information from other sources resolves the open questions.
      </p>

      <h2>How long will administrative processing take?</h2>
      <p>
        The State Department gives no fixed time. Its page says: “The duration of the administrative
        processing will vary based on the individual circumstances of each case.” The appointment
        service for Pakistan says it cannot predict which cases will need it, or how long it will take.
      </p>
      <p>
        The State Department also says its published nonimmigrant visa wait times do not include
        administrative processing. If your situation presents a unique hardship, it asks you to tell the consular
        section where you applied.
      </p>
      <p>
        Some official pages for Pakistan quote rough figures, and they do not agree with each other.
        Our suggestion: plan without a fixed date. The appointment service strongly advises against booking travel until
        you have your passport and visa.
      </p>

      <h2>Is there a deadline for sending documents?</h2>
      <p>
        In effect, one year from the date of the refusal, though the rule works differently for each
        kind of visa. The{' '}
        <a href={EMBASSY_IV} rel="noopener noreferrer" target="_blank" className={a}>
          embassy’s immigrant visa page
        </a>{' '}
        says immigrant visas for Pakistan are processed in Islamabad.
      </p>
      <p>
        For immigrant visas, the deadline is in the regulations. Under{' '}
        <a href={CFR_4281} rel="noopener noreferrer" target="_blank" className={a}>
          22 CFR 42.81(e)
        </a>
        , evidence you produce within one year of the refusal gets the case reconsidered, with no new
        application fee. If you present nothing within that year,{' '}
        <a href={CFR_4283} rel="noopener noreferrer" target="_blank" className={a}>
          22 CFR 42.83(b)
        </a>{' '}
        says your immigrant visa registration is terminated.
      </p>
      <p>
        You can have it reinstated before the end of the second year after the refusal, if you show the
        delay was beyond your control. The regulation gives illness, being refused permission to leave your
        country, and foreign military service as examples. Termination can also revoke the approved
        petition, which is restored if the registration is.
      </p>
      <p>
        For nonimmigrant visas, the{' '}
        <a href={FAM_OVERCOME} rel="noopener noreferrer" target="_blank" className={a}>
          Foreign Affairs Manual
        </a>{' '}
        says the regulations set no time limit. Posts may set their own, but evidence sent a year or
        more after the refusal needs a new application and fee. The State Department’s page puts it
        simply: you have one year from the refusal date.
      </p>

      <h2>What else changed for Pakistani applicants in 2026?</h2>
      <p>
        A 221(g) is about your own case. The 2026 rules that go by nationality or visa type, such as the
        travel ban or social media checks, are a separate matter. Where each stood on 18 November 2026
        is in our post on{' '}
        <Link href="/blog/us-visa-rules-pakistan-2026" className={a}>
          US visa rules for Pakistanis
        </Link>
        .
      </p>
      <p>
        If you are waiting on an employment-based green card, our post on the{' '}
        <Link href="/blog/eb2-niw-pakistan" className={a}>
          EB-2 NIW from Pakistan
        </Link>{' '}
        covers the queue. For every route, from visitor visas to green cards, read our{' '}
        <Link href="/usa" className={a}>
          US visas guide
        </Link>
        .
      </p>
    </>
  );
}
