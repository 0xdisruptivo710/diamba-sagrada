import { cookies } from "next/headers";
import { cache } from "react";
import { LOCALE_COOKIE, normalizeLocale, type Locale } from "@/lib/i18n";

/**
 * Reads the active locale from the `lang` cookie (server-side only).
 * Memoized per request via React `cache`, so the cookie is read once even when
 * many server components call it. Reading the cookie opts pages into dynamic
 * rendering — acceptable for this marketing site.
 */
export const getLocale = cache(async (): Promise<Locale> => {
  const store = await cookies();
  return normalizeLocale(store.get(LOCALE_COOKIE)?.value);
});
