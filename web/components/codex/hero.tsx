import { InlineLink } from "@/components/ui";
import { MagneticCTA, Reveal } from "@/components/motion";
import { HeroVideo } from "@/components/codex/hero-video";

export function Hero() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        min-h-[88vh] md:min-h-[92vh]
        flex flex-col
      "
    >
      {/* Video plate */}
      <div className="absolute inset-0 -z-20 bg-forest-deep">
        <HeroVideo />
      </div>

      {/* Cinematic overlays — vignette + bottom gradient anchor for type */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 120% 80% at 50% 35%, transparent 30%, rgba(20,39,30,0.35) 80%, rgba(20,39,30,0.55) 100%)",
            "linear-gradient(180deg, rgba(20,39,30,0.55) 0%, rgba(20,39,30,0.0) 22%, rgba(20,39,30,0.0) 50%, rgba(20,39,30,0.55) 78%, rgba(20,39,30,0.88) 100%)",
          ].join(", "),
        }}
      />

      {/* Faint grain over video for cohesion with rest of site */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none opacity-30 mix-blend-soft-light"
        style={{ backgroundImage: "var(--grain)" }}
      />

      {/* TOP STRIP — folio + status pill */}
      <div className="relative z-10 pt-[calc(var(--nav-height,5rem)+2rem)]">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12 flex flex-wrap items-center justify-between gap-4">
          <Reveal className="flex items-center gap-3 font-display italic text-[0.88rem] text-paper/75">
            <span
              className="not-italic font-semibold text-[0.78em] tracking-[0.28em] text-gold-leaf"
              style={{ fontVariant: "small-caps" }}
            >
              Fólio I
            </span>
            <span aria-hidden className="inline-block size-2 rotate-45 border border-gold-leaf/80" />
            <em className="text-paper/85">Codex Diamba</em>
            <span aria-hidden className="inline-block size-2 rotate-45 border border-gold-leaf/80" />
            <span
              className="not-italic tracking-[0.18em] text-paper/65"
              style={{ fontVariant: "small-caps" }}
            >
              Anno MMXXIV
            </span>
          </Reveal>

          <Reveal delay={120}>
            <span
              className="
                flex items-center gap-2.5 px-3 py-1.5
                border border-gold-leaf/60 bg-forest-deep/40
                backdrop-blur-[2px]
                font-display italic text-[0.82rem] text-paper/80
              "
            >
              <span
                aria-hidden
                className="codex-live-dot block size-1.5 rounded-full bg-gold-leaf"
              />
              <span
                className="not-italic text-[0.72rem] tracking-[0.22em] text-gold-leaf font-semibold"
                style={{ fontVariant: "small-caps" }}
              >
                Em construção
              </span>
            </span>
          </Reveal>
        </div>
      </div>

      {/* Spacer pushes type to the bottom — cinematic poster framing */}
      <div className="flex-1" />

      {/* BOTTOM TYPE BLOCK */}
      <div className="relative z-10 pb-[clamp(3rem,7vw,6rem)]">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12">
          <Reveal delay={240}>
            <h1
              className="
                font-display font-medium text-paper
                leading-[0.94] tracking-[-0.012em]
                text-[clamp(2.8rem,8vw,6.4rem)]
                max-w-[14ch] mb-7
              "
              style={{ textShadow: "0 1px 24px rgba(20,39,30,0.55)" }}
            >
              Cultivar é direito.
              <br />
              Tratar é{" "}
              <span
                className="italic font-medium text-gold-leaf relative"
                style={{
                  backgroundImage:
                    "linear-gradient(transparent 78%, rgba(183,144,47,0.42) 78%, rgba(183,144,47,0.42) 92%, transparent 92%)",
                }}
              >
                dignidade
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={360}>
            <div className="flex flex-wrap items-center gap-7">
              <MagneticCTA href="/seja-associado" variant="gold">
                Quero me associar
              </MagneticCTA>
              <a
                href="#jornada"
                className="
                  group inline-flex items-baseline gap-2
                  font-display italic text-[1.05rem] text-paper/90
                  transition-[color,letter-spacing] duration-300
                  hover:text-gold-leaf hover:tracking-[0.015em]
                "
              >
                <span className="relative">
                  Como funciona
                  <span
                    aria-hidden
                    className="
                      absolute left-0 right-0 -bottom-1 h-[6px]
                      bg-no-repeat bg-[length:100%_6px]
                      opacity-70 group-hover:opacity-100 transition-opacity
                    "
                    style={{ backgroundImage: "var(--ink-stroke)" }}
                  />
                </span>
                <span aria-hidden className="not-italic text-[0.85em] text-gold-leaf">↘</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
