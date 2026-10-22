import { waHref, type WaIntent } from '@/lib/wa';
import { getWhatsAppChannel } from '@/lib/wa-channel';

/**
 * The site's primary action, and the entry point into the existing CRM.
 *
 * A plain anchor by design — no chat widget, no script: 0 bytes, survives ad
 * blockers, and opens the app the audience already lives in. Crucially the
 * CUSTOMER sends the first message, which opens WhatsApp's free 24-hour service
 * window; a web form would instead leave us needing a paid approved template to
 * reach them back.
 *
 * From the send onward it is entirely the firm's own system: Meta → the existing
 * webhook → Lead created → ensureAssigned() round-robin → the existing inbox and
 * AI bot. The ref token in the message is the only addition, and it is what lets
 * the webhook stamp sourceChannel='website' instead of losing the lead among
 * 22,582 cold contacts.
 *
 * Async server component: the number is resolved from the CRM's ACTIVE channel at
 * build time, so the page stays static and ships no client JS.
 */
export async function WhatsAppCta({
  intent,
  children,
  variant = 'solid',
}: {
  intent: WaIntent;
  children: React.ReactNode;
  variant?: 'solid' | 'ghost';
}) {
  const { digits } = await getWhatsAppChannel();
  // 'solid' = the recognisable WhatsApp-green pill; works on any background.
  // 'ghost' = a light-outline pill, used as the secondary action on dark hero fields.
  const styles =
    variant === 'solid'
      ? 'btn text-white shadow-[0_10px_24px_-10px_rgba(31,168,85,0.6)] [background-image:linear-gradient(180deg,#26b862,#1fa855)] hover:-translate-y-0.5'
      : 'btn btn-ghost-light';

  return (
    <a href={waHref(intent, digits)} className={styles} rel="noopener">
      <WhatsAppGlyph />
      {children}
    </a>
  );
}

export function WhatsAppGlyph({ className = 'h-5 w-5 shrink-0' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.83 9.83 0 0 0 4.6 1.17h.01c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.11-2.88-6.97A9.79 9.79 0 0 0 12.04 2zm0 17.98h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.16 8.16 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2a8.15 8.15 0 0 1 5.79 2.4 8.13 8.13 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.19 8.2z" />
    </svg>
  );
}
