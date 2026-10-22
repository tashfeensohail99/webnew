'use client';

import { useEffect, useState } from 'react';

/**
 * Light/dark theme switch.
 *
 * The actual theme is applied before paint by the inline bootstrap script in
 * app/layout.tsx (which reads localStorage, else the OS preference). This
 * button just flips the <html data-theme> attribute and persists the choice.
 *
 * `theme` starts null so the first client render matches the server (neither
 * knows the theme at that point) — no hydration mismatch — then the effect
 * reads the attribute the bootstrap script set and the icon settles in.
 */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode — session-only, fine */
    }
    setTheme(next);
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`tap inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-current ring-1 ring-current/20 transition-colors hover:bg-current/10 ${className}`}
    >
      {isDark ? (
        // Sun — shown in dark mode, click to go light.
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      ) : (
        // Moon — shown in light mode, click to go dark.
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 14.2A8 8 0 0 1 9.8 4a7 7 0 1 0 10.2 10.2z" />
        </svg>
      )}
    </button>
  );
}
