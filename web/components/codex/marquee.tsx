/**
 * CSS-only ceremonial marquee.
 * Two duplicate tracks so the loop is seamless. No JS, no scroll event listeners.
 * Respects prefers-reduced-motion via the @media block in globals (handled here too).
 */

const values = [
  "Acolhimento",
  "Ciência",
  "Ancestralidade",
  "Direito",
  "Cuidado integral",
  "Dignidade",
  "Escuta",
  "Comunidade",
  "Transparência",
];

const Track = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <ul
    className="flex shrink-0 items-center gap-12 px-6 font-display italic text-ink"
    aria-hidden={ariaHidden}
  >
    {values.map((v, i) => (
      <li key={`${v}-${i}`} className="flex items-center gap-12 whitespace-nowrap">
        <span className="text-[clamp(1.4rem,2.6vw,2.2rem)] leading-none">{v}</span>
        <span aria-hidden className="text-gold-leaf text-[1.2rem] opacity-80">
          ❀
        </span>
      </li>
    ))}
  </ul>
);

export function Marquee() {
  return (
    <section
      aria-label="Valores que nos guiam"
      className="
        relative overflow-hidden border-y border-[var(--rule)]
        py-7 bg-[linear-gradient(180deg,rgba(216,201,162,0.18),transparent_60%,rgba(216,201,162,0.18))]
      "
    >
      {/* Soft fade masks on the edges so the loop seam is invisible */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-paper to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-paper to-transparent"
      />

      <div className="codex-marquee flex w-max">
        <Track />
        <Track ariaHidden />
      </div>
    </section>
  );
}
