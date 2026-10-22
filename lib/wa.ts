import { type ServiceCode } from './site';

/**
 * Build a click-to-WhatsApp link that the CRM can attribute.
 *
 * Why a token in the message body and not a query param: the WhatsApp webhook
 * only ever sees the sender's number and the message TEXT. Nothing else survives
 * the hop from browser to Meta to our webhook. So the only way to tell the CRM
 * "this person came from the C11 page" is to put a marker in the text the
 * customer sends.
 *
 * The webhook parses [Ref: XX-YYYY] from a NEW contact's first message and
 * creates the lead with sourceChannel='whatsapp-website', serviceInterest from
 * the prefix and a note with the ref (tafai#475), before the normal WhatsApp
 * round-robin assigns it. Contacts already in the CRM are left unchanged.
 * Without this every website enquiry is indistinguishable from the 22,582 cold
 * WhatsApp contacts that convert at ~0%, and the site looks like it does nothing.
 *
 * A plain <a href> — no widget, no script. It is 0 bytes, it survives ad
 * blockers, and it works on the mid-range Androids most of our audience uses.
 */

const REF_PREFIX: Record<ServiceCode, string> = {
  WORK_PERMIT: 'WP',
  VISIT_VISA: 'VV',
  JR_RESUBMISSION: 'JR',
  STUDY_VISA: 'SV',
};

export type WaIntent = {
  /** Canonical CRM service code. C11 maps to WORK_PERMIT — it has no code of its own. */
  service: ServiceCode;
  /** Opening line the customer sends. Written in their voice, not ours. */
  message: string;
  /** Page slug this CTA sits on, e.g. 'work-permit-canada'. Recorded for attribution. */
  page: string;
  targetCountry?: string;
};

/**
 * Deterministic, human-readable, non-guessable-enough ref.
 * Stable per (service, page) so the CRM can group by campaign without a DB write
 * on every page render. Not a secret — it identifies a page, not a person.
 */
export function refToken(intent: WaIntent): string {
  const slug = intent.page.replace(/[^a-z0-9]/gi, '').toUpperCase();
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const code = h.toString(36).toUpperCase().slice(0, 4).padStart(4, '0');
  return `${REF_PREFIX[intent.service]}-${code}`;
}

/**
 * @param digits the ACTIVE channel's number, E.164 without "+", resolved from the
 *   CRM by lib/wa-channel.ts. Passed in rather than read from config so there is
 *   exactly one place that decides which number the site points at.
 */
export function waHref(intent: WaIntent, digits: string): string {
  // An empty number yields https://wa.me/?text=… — a link that opens WhatsApp
  // with no recipient. It looks fine in review and loses every enquiry.
  // getWhatsAppChannel() already fails the production build in that case; this is
  // the belt-and-braces for dev, where an obviously broken href gets caught on the
  // first click rather than in month three.
  if (!digits) return '#whatsapp-number-not-configured';

  const text = `${intent.message} [Ref: ${refToken(intent)}]`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
