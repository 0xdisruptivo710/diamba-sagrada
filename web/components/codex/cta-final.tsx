import Image from "next/image";
import { MagneticCTA, Reveal } from "@/components/motion";

export function CTAFinal() {
  return (
    <section
      className="
        relative overflow-hidden text-paper bg-forest-deep
        py-[clamp(6rem,10vw,9rem)]
        border-y border-gold-deep
      "
    >
      {/* Grain + radial glow background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-55 pointer-events-none"
        style={{
          backgroundImage: [
            "var(--grain)",
            "radial-gradient(ellipse at 50% 0%, rgba(183,144,47,0.18), transparent 55%)",
            "radial-gradient(ellipse at 50% 100%, rgba(183,144,47,0.10), transparent 55%)",
          ].join(", "),
        }}
      />
      {/* Top asterism crown */}
      <span
        aria-hidden
        className="absolute left-1/2 top-8 -translate-x-1/2 text-gold-leaf text-[1.4rem] tracking-[0.5em] opacity-70"
      >
        ⁂
      </span>

      {/* Watermark — animated breathing */}
      <div
        aria-hidden
        className="
          codex-watermark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[280px] h-[280px] md:w-[460px] md:h-[460px] pointer-events-none
        "
      >
        <Image
          src="/img/marca-dagua-branca.png"
          alt=""
          fill
          sizes="(max-width: 768px) 280px, 460px"
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px] px-6 md:px-12 text-center">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[22ch] font-display italic font-medium text-paper text-[clamp(2.2rem,4.8vw,3.4rem)] leading-[1.1]">
            Cada pessoa merece acesso digno à saúde
          </h2>
          <p className="mx-auto mb-10 max-w-[500px] font-body text-[1.1rem] leading-[1.7] text-[rgba(241,232,211,0.78)]">
            Junte-se a nós na construção de um cuidado mais humano, seguro e acessível.
          </p>
          <MagneticCTA href="/seja-associado" variant="outlined-gold">
            Quero fazer parte
          </MagneticCTA>
        </Reveal>
      </div>
    </section>
  );
}
