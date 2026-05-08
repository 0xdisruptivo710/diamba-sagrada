import type { ReactNode } from "react";

/* ---------- CodexRule ----------------------------------------------------- */
export function CodexRule({ glyph = "❦" }: { glyph?: string }) {
  return (
    <div
      role="presentation"
      className="my-6 flex items-center gap-5 text-gold-leaf font-display italic text-base leading-none"
    >
      <span className="codex-rule-h flex-1" />
      <span className="text-[1.2rem] opacity-90" aria-hidden>
        {glyph}
      </span>
      <span className="codex-rule-h flex-1" />
    </div>
  );
}

/* ---------- CodexAsterism ------------------------------------------------- */
export function CodexAsterism() {
  return (
    <span
      aria-hidden
      className="block text-center text-gold-leaf text-base leading-none tracking-[0.4em] my-6 select-none"
    >
      ⁂
    </span>
  );
}

/* ---------- CodexQuote ---------------------------------------------------- */
export function CodexQuote({
  children,
  cite,
}: {
  children: ReactNode;
  cite?: string;
}) {
  return (
    <blockquote
      className="
        relative my-10 pl-10 py-6 border-l-2 border-gold-leaf
        font-display italic font-medium text-ink
        text-[clamp(1.4rem,2.2vw,1.85rem)] leading-[1.4]
      "
    >
      <span
        aria-hidden
        className="absolute -left-1 -top-2 text-gold-leaf font-display text-[4.5rem] leading-none opacity-85"
        style={{ fontStyle: "normal" }}
      >
        “
      </span>
      {children}
      {cite ? (
        <cite
          className="block mt-3 not-italic text-[0.78em] tracking-[0.18em] text-ink-soft"
          style={{ fontVariant: "small-caps" }}
        >
          <span className="text-gold-leaf">— </span>
          {cite}
        </cite>
      ) : null}
    </blockquote>
  );
}

/* ---------- Marginalia ---------------------------------------------------- */
export function Marginalia({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <p className="font-display italic font-normal text-[0.95rem] leading-[1.5] text-ink-soft border-l border-gold-leaf pl-4">
      {label ? (
        <strong
          className="block not-italic font-semibold text-[0.78em] tracking-[0.2em] text-gold-leaf mb-1.5"
          style={{ fontVariant: "small-caps" }}
        >
          {label}
        </strong>
      ) : null}
      {children}
    </p>
  );
}

/* ---------- SectionOverline ---------------------------------------------- */
export function SectionOverline({ children }: { children: ReactNode }) {
  return (
    <span
      className="
        inline-block font-body font-semibold text-[0.82rem]
        text-gold-leaf tracking-[0.28em]
      "
      style={{ fontVariant: "small-caps" }}
    >
      {children}
    </span>
  );
}
