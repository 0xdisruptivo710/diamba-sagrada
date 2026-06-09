"use client";

import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, LOCALES, type Locale } from "@/lib/i18n";

const SHORT: Record<Locale, string> = { pt: "PT", en: "EN" };
const ARIA: Record<Locale, string> = {
  pt: "Mudar idioma para Português",
  en: "Switch language to English",
};

/**
 * PT / EN segmented toggle. Writes the `lang` cookie and calls router.refresh()
 * so server components re-render in the chosen language without a URL change.
 * `cinematic` inverts colors while the nav sits over the dark hero video.
 */
export function LangToggle({
  locale,
  cinematic,
  className = "",
}: {
  locale: Locale;
  cinematic?: boolean;
  className?: string;
}) {
  const router = useRouter();

  const choose = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  return (
    <div
      role="group"
      aria-label={locale === "pt" ? "Idioma" : "Language"}
      className={
        "inline-flex items-center rounded-[2px] border font-display text-[0.8rem] leading-none " +
        (cinematic
          ? "border-paper/40 bg-forest-deep/30 backdrop-blur-[2px]"
          : "border-[var(--rule-strong)] bg-transparent") +
        " " +
        className
      }
    >
      {LOCALES.map((l, i) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            lang={l}
            aria-label={ARIA[l]}
            aria-pressed={active}
            onClick={() => choose(l)}
            className={
              "px-2.5 py-1 italic tracking-[0.06em] transition-colors " +
              (i === 0 ? "rounded-l-[1px]" : "rounded-r-[1px]") +
              (active
                ? " bg-gold-leaf text-forest-deep font-semibold"
                : cinematic
                  ? " text-paper/80 hover:text-gold-leaf"
                  : " text-ink-soft hover:text-gold-deep")
            }
          >
            {SHORT[l]}
          </button>
        );
      })}
    </div>
  );
}
