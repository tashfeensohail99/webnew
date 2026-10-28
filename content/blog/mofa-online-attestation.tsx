import Link from 'next/link';

/**
 * Written from MOFA's own pages as they stood on 28 October 2026: the consular
 * services page carrying the 12 October notice (the Digital Attestation System
 * and e-Certificate) and the 27 July notice (apostille by online registration
 * only); the attestation portal's checklists and destination directory (Canada:
 * "Accepts Apostille"). The portal's help pages still describe the earlier
 * appointment-and-collect flow; the post says so rather than pick a side
 * silently. No fees: MOFA sets them per document category on the portal.
 */
const a = 'font-semibold';

const PORTAL = 'https://portal-attestation.mofa.gov.pk';
const MOFA_INFO = 'https://attestation.mofa.gov.pk/';

export default function MofaOnlineAttestation() {
  return (
    <>
      <p>
        If you have ever had a document attested at the Foreign Office, you know the queue. From{' '}
        <strong>12 October 2026</strong>, that changed: MOFA now runs attestation online and emails
        you an electronic certificate instead of stamping paper at a counter.
      </p>

      <h2>What changed</h2>
      <p>
        Under a notice on MOFA’s consular services page, the Ministry in Islamabad and its liaison
        offices in <strong>Lahore, Karachi, Peshawar, Quetta and Gujrat</strong> adopted a Digital
        Attestation System from Monday 12 October 2026. In MOFA’s words, the point is that applicants can
        get documents attested “from the comfort of their homes”. In practice:
      </p>
      <ul>
        <li>
          You submit your documents for <strong>apostille or general attestation</strong> online, through{' '}
          <a href={PORTAL} rel="noopener noreferrer" target="_blank" className={a}>
            MOFA’s attestation portal
          </a>
          .
        </li>
        <li>
          Once the process is complete and the fee is paid, MOFA issues an{' '}
          <strong>electronic certificate (e-Certificate)</strong> by email — similar to the system HEC
          already uses.
        </li>
        <li>
          You no longer need to visit the Ministry or a liaison office, except in exceptional cases
          where MOFA asks for you in person.
        </li>
      </ul>
      <p>
        This follows an earlier change: since 27 July 2026, MOFA has not accepted apostille requests
        without prior online registration.
      </p>

      <h2>Apostille or general attestation?</h2>
      <p>
        The portal offers two services, and choosing the wrong one wastes a fee.
      </p>
      <ul>
        <li>
          <strong>Apostille</strong> is for countries that accept a Pakistani apostille under the Hague
          Apostille Convention. One certificate, and the receiving country accepts it without going
          through its embassy.
        </li>
        <li>
          <strong>General attestation</strong> is the standard legalisation route for countries that
          don’t. Depending on the country, the document may then need further legalisation or
          verification by that country’s embassy.
        </li>
      </ul>
      <p>
        MOFA’s own destination directory lists <strong>Canada</strong> as accepting the apostille for
        eligible Pakistani documents — with the reminder to check what the receiving authority actually
        requires before you apply. For any other country, look it up in the same{' '}
        <a href={MOFA_INFO} rel="noopener noreferrer" target="_blank" className={a}>
          MOFA directory
        </a>{' '}
        rather than going on what a friend did.
      </p>

      <h2>Before MOFA: HEC and IBCC first</h2>
      <p>
        MOFA attests documents that have already been through the right Pakistani authority. Its
        checklist sets out the order:
      </p>
      <ul>
        <li>
          <strong>University degrees</strong> need HEC authentication first.
        </li>
        <li>
          <strong>School and board certificates</strong> (matric, intermediate) need IBCC authentication
          first — and IBCC in turn wants the board’s verification before you apply to it.
        </li>
        <li>
          <strong>Powers of attorney and affidavits</strong> can carry personal-appearance requirements.
        </li>
        <li>
          <strong>Commercial documents</strong> may need Chamber of Commerce or issuing-authority
          authentication.
        </li>
        <li>
          <strong>Experience letters</strong> must be on the organisation’s letterhead, with the authorised
          signatory’s name, signature and stamp.
        </li>
      </ul>

      <h2>Do you need it for a Canadian application?</h2>
      <p>
        Only if someone asks for it. Attestation is a requirement of whoever receives the document, not
        a step every application needs. For Canada, that means following the document checklist IRCC
        gives you for your application, and the rules of whichever body is looking at the document — a
        credential-assessment organisation, a regulator, an employer. Where a document is not in English
        or French, IRCC generally asks for a certified translation. Attesting documents nobody asked
        for costs fees and weeks, and adds nothing to your file.
      </p>
      <p>
        If you are building a Canadian file from Pakistan, our{' '}
        <Link href="/canada-immigration-from-pakistan" className={a}>
          guide to the paperwork
        </Link>{' '}
        sets out what most files need — including the{' '}
        <Link href="/canada-immigration-from-pakistan/police-certificate" className={a}>
          police certificate
        </Link>
        , which is a separate process again.
      </p>

      <h2>Two practical notes</h2>
      <p>
        <strong>MOFA’s help pages lag the notice.</strong> The attestation portal’s step-by-step pages
        still describe the earlier flow — book an appointment after approval, bring the originals, collect
        in one to three hours. The 12 October notice is the newer instruction. Follow what your
        application on the portal actually asks of you, and keep the originals to hand in case yours is one
        of the exceptional cases.
      </p>
      <p>
        <strong>You can check any attestation yourself.</strong> MOFA lets anyone verify an apostille or a
        general attestation online. If someone hands you a document they say they “got attested”, check it
        on MOFA’s verification page before you send it anywhere.
      </p>
    </>
  );
}
