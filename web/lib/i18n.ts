// Client-safe i18n primitives. NEVER import `next/headers` here — this module
// is imported by client components (nav, LangToggle, forms). Server-only locale
// reading lives in `i18n.server.ts`.

export type Locale = "pt" | "en";

export const LOCALES: Locale[] = ["pt", "en"];
export const DEFAULT_LOCALE: Locale = "pt";

// Cookie that holds the active locale. Read server-side (i18n.server.ts) and
// written client-side (LangToggle).
export const LOCALE_COOKIE = "lang";

/** Narrow an arbitrary cookie value to a supported Locale, defaulting to pt. */
export function normalizeLocale(value: string | undefined | null): Locale {
  return value === "en" ? "en" : "pt";
}
