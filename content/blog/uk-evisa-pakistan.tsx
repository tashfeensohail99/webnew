import Link from 'next/link';

/**
 * Published 23 November 2026. Every fact is from GOV.UK as read on 23 November 2026:
 * the British High Commission Islamabad's news stories "Pakistani visitors to the UK can
 * now use eVisas" (25 February 2026) and "New UK eVisas for Pakistani students and
 * workers" (15 July 2025); the eVisa guide at gov.uk/evisa (What an eVisa is, Set up a
 * UKVI account, View your eVisa and get a share code, Travel with your eVisa, Update your
 * UKVI account, Report an error); "Visit the UK as a Standard Visitor" (Apply part); "How
 * to apply for a visa to come to the UK" (Travelling to the UK); "How to replace a physical
 * visa if you're outside the UK"; "Confirm your immigration status to your carrier before
 * travelling to the UK" (first published 23 July 2026); "Prove your right to work to an
 * employer"; "Prove your right to rent in England"; and "Biometric residence permits
 * (BRPs)".
 *
 * Left out on purpose, because they appear only on web pages and not in law: how long a
 * share code lasts, how long an eVisa takes to appear, UKVI's target for fixing errors, the
 * visitor decision time and the fee for a form for accompanying an eVisa. GOV.UK gives two
 * periods for using an expired BRP (24 months on the BRP and eVisa pages, 18 months on the
 * right-to-work and right-to-rent pages); the post prints only the 31 December 2026 end
 * date, which both readings meet.
 *
 * Our own suggestions, not GOV.UK's: use a phone number and email you will keep; check the
 * eVisa as soon as you can see it; book the ticket in exactly the name on the linked
 * passport; get a share code before leaving for the airport; renew a passport that is close
 * to expiry before applying; and add a passport to an account you sign in to with an
 * expired BRP.
 */
const a = 'font-semibold';

const BHC_2026 = 'https://www.gov.uk/government/news/pakistani-visitors-to-the-uk-can-now-use-evisas';
const BHC_2025 = 'https://www.gov.uk/government/news/new-uk-evisas-for-pakistani-students-and-workers';
const EVISA = 'https://www.gov.uk/evisa';
const SETUP = 'https://www.gov.uk/evisa/set-up-ukvi-account';
const VIEW = 'https://www.gov.uk/evisa/view-evisa-get-share-code-prove-immigration-status';
const TRAVEL = 'https://www.gov.uk/evisa/travel-with-evisa';
const UPDATE = 'https://www.gov.uk/evisa/update-ukvi-account';
const ERROR = 'https://www.gov.uk/evisa/report-error-evisa';
const VISITOR = 'https://www.gov.uk/standard-visitor/apply-standard-visitor-visa';
const TRAVELLING = 'https://www.gov.uk/apply-to-come-to-the-uk/travelling-to-the-uk';
const REPLACE = 'https://www.gov.uk/replace-visa';
const CARRIER =
  'https://www.gov.uk/guidance/confirm-your-immigration-status-to-your-carrier-before-travelling-to-the-uk';
const RTW = 'https://www.gov.uk/prove-right-to-work';
const RTR = 'https://www.gov.uk/prove-right-to-rent';
const BRP = 'https://www.gov.uk/biometric-residence-permits';
const RECOVER = 'https://update-your-details.homeoffice.gov.uk/account-recovery/help';

const TASKS: [string, string, string, string][] = [
  ['See your eVisa', 'Sign in to your UKVI account, or create one. Confirm your identity and link the account to your eVisa.', 'Set up a UKVI account', SETUP],
  ['Check it before you fly', 'View your eVisa. Check your name, status and passport against your ticket.', 'View your eVisa', VIEW],
  ['Renewed your passport', 'Add the new passport to your UKVI account before you travel.', 'Update your UKVI account', UPDATE],
  ['The airline cannot confirm your status', 'Get a share code and show it with your passport.', 'Confirm your status to your carrier', CARRIER],
  ['Prove your right to work or rent', 'Give the employer or landlord a share code and your date of birth.', 'Prove your right to work', RTW],
  ['Your eVisa shows wrong details', 'Report an error online. A new name, passport, phone, email or photo is an account update instead.', 'Report an error with your eVisa', ERROR],
  ['An old sticker in an expired passport', 'Carry both passports, or use your eVisa with the new passport added.', 'Replace a physical visa', REPLACE],
  ['You still hold a BRP', 'It has expired, but may still work for signing in, creating an account or extending, until 31 December 2026 at the latest.', 'Biometric residence permits', BRP],
];

export default function UkEvisaPakistan() {
  return (
    <>
      <p>
        <strong>
          No sticker is normal: a UK visa approved from Pakistan now comes as an eVisa, an online record
          of your status.
        </strong>{' '}
        The British High Commission in Islamabad announced eVisas for Pakistani visitors on 25 February
        2026; most students and workers switched on 15 July 2025. To travel, you need a free UKVI account
        linked to the passport you will carry, with details that match your airline booking.
      </p>
      <p>
        Here is each task and the GOV.UK page that handles it, as of 23 November 2026. The sections below
        explain each step.
      </p>
      <div role="region" aria-label="UK eVisa tasks for applicants from Pakistan and the GOV.UK page for each, as of 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            UK eVisa tasks for applicants from Pakistan and the GOV.UK page for each, as of 23 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Task</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What to do</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">GOV.UK page</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {TASKS.map(([task, what, label, href]) => (
              <tr key={task}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{task}</th>
                <td className="px-3 py-3 sm:px-4">{what}</td>
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

      <h2>Who in Pakistan now gets an eVisa?</h2>
      <p>
        The{' '}
        <a href={BHC_2026} rel="noopener noreferrer" target="_blank" className={a}>
          High Commission’s announcement of 25 February 2026
        </a>{' '}
        covers visitors, including tourists. Approval now comes by email, not as a sticker in the passport.
        Processing times, eligibility rules and visa conditions did not change.
      </p>
      <p>
        Students and workers came first: a{' '}
        <a href={BHC_2025} rel="noopener noreferrer" target="_blank" className={a}>
          story of 15 July 2025
        </a>{' '}
        said most main applicants on study and work visas would get eVisas. Dependants and visitors still
        got stickers then. Students applying now should also check{' '}
        <Link href="/blog/uk-student-visa-funds-30-november-2026" className={a}>
          the funds rise on 30 November 2026
        </Link>
        .
      </p>
      <p>
        As of 23 November 2026, GOV.UK’s{' '}
        <a href={REPLACE} rel="noopener noreferrer" target="_blank" className={a}>
          page on replacing a visa
        </a>{' '}
        says stickers are no longer issued. Its{' '}
        <a href={EVISA} rel="noopener noreferrer" target="_blank" className={a}>
          eVisa guide
        </a>{' '}
        says a partner or child joining you as a dependant needs their own UKVI account. A sticker you
        already hold stays valid until it expires.
      </p>
      <p>
        For visitors, the change shows at the visa centre. You still give your fingerprints and photo
        there, but the{' '}
        <a href={VISITOR} rel="noopener noreferrer" target="_blank" className={a}>
          Standard Visitor page
        </a>{' '}
        says you get your passport back the same day.
      </p>
      <p>
        An eVisa is a digital record of your identity, your status and its conditions, such as whether you
        may work. It is not an ETA, which is for people who do not need a visa. Which visa suits you is
        covered in our{' '}
        <Link href="/uk" className={a}>
          UK visas guide
        </Link>
        .
      </p>

      <h2>How do you set up your UKVI account?</h2>
      <p>
        Your decision email or letter tells you what to do next. If you used the UK Immigration: ID Check
        app or made an account when applying, you already have one. Sign in to it; GOV.UK says not to
        create a second.
      </p>
      <p>
        To{' '}
        <a href={SETUP} rel="noopener noreferrer" target="_blank" className={a}>
          create an account
        </a>
        , you need a phone number and email address you can use every time you sign in. For a new visa,
        you also need your passport and your GWF or UAN application number. The account and the eVisa are
        free.
      </p>
      <p>
        You then confirm your identity, usually with a smartphone app, and link the account to your eVisa.
        There is another way to confirm your identity if you cannot use the app.
      </p>
      <p>
        Someone can help you if you cannot use the internet, and a parent can manage a child’s account.
        Our suggestion: use a phone number and email you will keep, because you need them every time you
        sign in. If you lose access, use the{' '}
        <a href={RECOVER} rel="noopener noreferrer" target="_blank" className={a}>
          account recovery service
        </a>
        .
      </p>

      <h2>What will the airline and the border check?</h2>
      <p>
        Your eVisa is checked when you enter and leave the UK, and your airline checks your status at
        check-in. The{' '}
        <a href={CARRIER} rel="noopener noreferrer" target="_blank" className={a}>
          carrier guidance
        </a>{' '}
        says it can do this automatically only if your details match. An airline may not let you travel
        if your details are wrong.
      </p>
      <p>
        So, as GOV.UK’s{' '}
        <a href={TRAVEL} rel="noopener noreferrer" target="_blank" className={a}>
          travel page
        </a>{' '}
        asks, check these three things before you fly:
      </p>
      <ul>
        <li>Your UKVI account has your correct personal details and the passport you will carry.</li>
        <li>Your eVisa shows the right immigration status.</li>
        <li>Your details exactly match the passenger information you gave the airline.</li>
      </ul>
      <p>
        You must travel with a valid passport that you have added to your UKVI account. If the airline
        still cannot confirm your status, show it a share code with your passport. The airline decides
        whether you board, and can contact the UK Border Force carrier support hub.
      </p>
      <p>
        Our suggestion: check your eVisa as soon as you can see it, and book your ticket in exactly the
        name on the linked passport. Get a share code before you leave for the airport; GOV.UK says a
        travel share code can be used more than once.
      </p>

      <h2>What if you renew your passport?</h2>
      <p>
        Add the new passport through the{' '}
        <a href={UPDATE} rel="noopener noreferrer" target="_blank" className={a}>
          account update service
        </a>{' '}
        before you travel. This changes your account details, not your visa. You can add more than one
        passport.
      </p>
      <p>
        You cannot change your passport or name while waiting for a visa decision. Our suggestion: if your
        Pakistani passport is close to expiry, renew it before you apply.
      </p>
      <p>
        Outside the UK, a biometric passport lets you update the passport details, your name and your
        nationality online. Without one, you can update only the passport number and expiry date. Other
        changes need UKVI to update the account, and may need a visa centre visit for biometrics.
      </p>
      <p>
        If you hold a valid sticker in an expired passport, carry both passports when you travel. Or use
        your eVisa once the new passport is added.
      </p>

      <h2>How do you prove your status to an employer or landlord?</h2>
      <p>
        You give a share code from the{' '}
        <a href={VIEW} rel="noopener noreferrer" target="_blank" className={a}>
          view and prove service
        </a>
        , with your date of birth; you do not show the eVisa itself. GOV.UK tells you which of your
        details the other person will see.
      </p>
      <p>
        Employers use the code to check your{' '}
        <a href={RTW} rel="noopener noreferrer" target="_blank" className={a}>
          right to work
        </a>
        . Landlords use it for{' '}
        <a href={RTR} rel="noopener noreferrer" target="_blank" className={a}>
          right to rent
        </a>{' '}
        checks, which apply in England only. You may use eligible immigration documents instead, and
        cannot be rejected for doing so.
      </p>
      <p>
        A share code expires after a set time. Until then you can reuse it, and you can get a new one
        whenever you need it.
      </p>

      <h2>What if your eVisa shows the wrong details?</h2>
      <p>
        <a href={ERROR} rel="noopener noreferrer" target="_blank" className={a}>
          Report an error online
        </a>{' '}
        if your eVisa shows wrong details, such as your date of birth or immigration status. Report it too
        if you cannot get a share code, or if the eVisa has still not appeared after the wait GOV.UK
        describes.
      </p>
      <p>
        You need a contact email or UK postal address, your name, date of birth and nationality, and your
        passport or GWF number. A legal representative, an employer or a friend can report it for you.
      </p>
      <p>
        A new name, passport, phone number, email or photo is not an error; use the account update service.
        If a sticker you hold is wrong,{' '}
        <a href={TRAVELLING} rel="noopener noreferrer" target="_blank" className={a}>
          GOV.UK says
        </a>{' '}
        to check your eVisa and report the error if it is there too. You will not get a replacement
        sticker.
      </p>

      <h2>What happened to BRPs?</h2>
      <p>
        You might hold a biometric residence permit (BRP) if you got permission to live or work in the UK
        by 31 October 2024. GOV.UK’s{' '}
        <a href={BRP} rel="noopener noreferrer" target="_blank" className={a}>
          BRP page
        </a>{' '}
        says all BRPs have now expired and have been replaced by eVisas.
      </p>
      <p>
        An expired BRP may still work until 31 December 2026 at the latest. It is only for signing in to
        see your eVisa or get a share code, creating a UKVI account, or extending your stay. A lost or
        stolen expired BRP must still be reported.
      </p>
      <p>
        Our suggestion: if you sign in with an expired BRP, add your passport to the account before then.
        For the visas themselves, from Skilled Worker to the planned settlement changes, see our{' '}
        <Link href="/uk" className={a}>
          UK visas guide
        </Link>
        .
      </p>
    </>
  );
}
