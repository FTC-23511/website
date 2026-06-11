"use client";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // private mode — theme just won't persist
  }
}

/**
 * Dark/light switcher. The saved choice is applied before first paint by the
 * inline script in app/layout.tsx. Stateless on purpose: the current theme
 * lives in the <html data-theme> attribute, and the sun/moon icons swap via
 * CSS on that attribute — so SSR markup is stable and no effect is needed.
 * Uses the View Transitions API for a soft cross-fade where available.
 */
export function ThemeToggle() {
  const toggle = () => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) ?? "dark";
    const next: Theme = current === "dark" ? "light" : "dark";
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reduced && "startViewTransition" in document) {
      (
        document as Document & {
          startViewTransition: (cb: () => void) => void;
        }
      ).startViewTransition(() => applyTheme(next));
    } else {
      applyTheme(next);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-all hover:rotate-12 hover:text-accent"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        aria-hidden="true"
        className="hidden [html[data-theme=dark]_&]:block"
      >
        {/* sun — shown in dark mode (click = go light) */}
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3 19 19M19 5l-1.7 1.7M6.7 17.3 5 19" />
      </svg>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        aria-hidden="true"
        className="hidden [html[data-theme=light]_&]:block"
      >
        {/* moon — shown in light mode (click = go dark) */}
        <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" />
      </svg>
    </button>
  );
}
