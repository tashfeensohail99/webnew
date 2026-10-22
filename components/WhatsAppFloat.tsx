import { waHref, type WaIntent } from '@/lib/wa';
import { getWhatsAppChannel } from '@/lib/wa-channel';
import { WhatsAppGlyph } from '@/components/WhatsAppCta';

/**
 * The floating WhatsApp button, bottom-right.
 *
 * Same door into the CRM as every other WhatsApp CTA: a plain wa.me link to
 * the CRM's ACTIVE channel (resolved at build time by getWhatsAppChannel) with
 * a ref token in the opening message. No chat widget, no script — an anchor
 * with fixed positioning, so it costs nothing and has nothing to break.
 *
 * z-40 keeps it under the sticky header (z-50) and its menus, and the mobile
 * menu (z-100) covers it completely while open.
 */
export async function WhatsAppFloat({ intent }: { intent: WaIntent }) {
  const { digits } = await getWhatsAppChannel();
  return (
    <a
      href={waHref(intent, digits)}
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex items-center gap-3 print:hidden sm:right-6"
    >
      {/* Desktop only, on hover/focus: the disc is recognisable on its own,
          and a permanent label would sit over the page's right edge. */}
      <span className="pointer-events-none hidden translate-x-2 rounded-full border border-rule bg-paper px-4 py-2 text-sm font-semibold text-ink-900 opacity-0 shadow-soft transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_12px_28px_-10px_rgba(31,168,85,0.8)] transition-transform duration-200 [background-image:linear-gradient(180deg,#2bd46f,#1fa855)] group-hover:scale-105">
        <span aria-hidden="true" className="wa-float-ring absolute inset-0 rounded-full" />
        <WhatsAppGlyph className="relative h-7 w-7" />
      </span>
    </a>
  );
}
