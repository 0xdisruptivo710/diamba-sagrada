import type { ReactNode } from "react";
import { Chalice, MortarPestle, BalanceScale } from "@/components/glyphs";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";

type PillarData = {
  glyph: ReactNode;
  title: string;
  body: string;
};

const pillars: PillarData[] = [
  {
    glyph: <Chalice width={56} height={56} />,
    title: "Acolhimento",
    body:
      "Recebemos cada paciente com escuta atenta e sem julgamento. Aqui, sua história importa e sua dor é levada a sério. O primeiro passo para o cuidado é sentir-se acolhido.",
  },
  {
    glyph: <MortarPestle width={56} height={56} />,
    title: "Orientação Médica",
    body:
      "Conectamos você a médicos prescritores habilitados e comprometidos com a cannabis medicinal. Cada tratamento é personalizado, seguro e baseado em evidências científicas.",
  },
  {
    glyph: <BalanceScale width={56} height={56} />,
    title: "Suporte Jurídico",
    body:
      "Orientamos sobre seus direitos como paciente de cannabis medicinal. Contamos com apoio jurídico para garantir o acesso legal e seguro ao tratamento que você precisa.",
  },
];

export function Pillars() {
  return (
    <section id="pilares" className="py-[clamp(5rem,9vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        <Reveal className="mb-20 grid items-end gap-y-6 gap-x-10 grid-cols-[auto_1fr]">
          <SectionOverline>Articulus Primus</SectionOverline>
          <h2 className="col-start-2 font-display italic font-medium leading-[1.05] text-ink text-[clamp(2.2rem,4.4vw,3.4rem)]">
            Três pilares do cuidado
          </h2>
          <span
            aria-hidden
            className="col-span-2 mt-5 h-px"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--color-gold-leaf) 0%, var(--rule-strong) 30%, transparent 100%)",
            }}
          />
        </Reveal>

        <ol
          className="
            codex-pillars list-none grid gap-18
            md:[grid-template-columns:repeat(12,minmax(0,1fr))]
            md:gap-x-10 md:gap-y-16
          "
        >
          {pillars.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 140}
              className={
                i === 0
                  ? "md:col-span-6"
                  : i === 1
                    ? "md:col-start-5 md:col-span-6 md:translate-y-10"
                    : "md:col-start-8 md:col-span-5"
              }
            >
              <article data-pillar className="group relative pt-14 border-t border-[var(--rule-strong)]">
                <div className="codex-glyph-breathe size-14 mb-6 text-forest opacity-85 transition-[opacity] duration-[600ms] ease-[var(--ease-codex)] group-hover:opacity-100 group-hover:text-gold-leaf">
                  {p.glyph}
                </div>
                <h3 className="font-display italic font-medium text-ink mb-3 leading-tight tracking-[-0.005em] text-[clamp(1.5rem,2.2vw,1.85rem)]">
                  {p.title}
                </h3>
                <p className="font-body text-ink-soft text-[1rem] leading-[1.75] max-w-[38ch]">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
