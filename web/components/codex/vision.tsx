import { TriadCorpo, TriadMente, TriadEspirito, TriadLines } from "@/components/glyphs";
import { CodexQuote, SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { getLocale } from "@/lib/i18n.server";

const glyphs = [
  <TriadCorpo key="c" width={32} height={32} />,
  <TriadMente key="m" width={32} height={32} />,
  <TriadEspirito key="e" width={32} height={32} />,
];

const copy = {
  pt: {
    overline: "Articulus Secundus — Visão Integrativa",
    heading: "Um cuidado que respeita a totalidade do ser",
    p1:
      "Acreditamos que a verdadeira cura acontece quando olhamos para o ser humano de forma integral. Nossa abordagem une ciência contemporânea, escuta sensível e sabedoria ancestral para oferecer um cuidado que respeita a singularidade de cada pessoa.",
    p2:
      "Não tratamos apenas sintomas, acompanhamos histórias. Cada paciente é um universo, e nosso compromisso é caminhar ao lado, integrando corpo, mente e espírito no processo de cura.",
    quote:
      "A cura nasce no encontro entre quem sofre, quem cuida, e a planta que atravessa séculos de memória.",
    cite: "Princípio da Diamba Sagrada",
    triadAria: "Tríade integrativa: Corpo, Mente e Espírito",
    triad: ["Corpo", "Mente", "Espírito"],
  },
  en: {
    overline: "Articulus Secundus — Integrative Vision",
    heading: "Care that respects the whole being",
    p1:
      "We believe true healing happens when we see the human being as a whole. Our approach unites contemporary science, sensitive listening and ancestral wisdom to offer care that respects the singularity of each person.",
    p2:
      "We don't treat symptoms alone — we accompany stories. Each patient is a universe, and our commitment is to walk alongside them, integrating body, mind and spirit in the healing process.",
    quote:
      "Healing is born in the encounter between the one who suffers, the one who cares, and the plant that crosses centuries of memory.",
    cite: "Diamba Sagrada Principle",
    triadAria: "Integrative triad: Body, Mind and Spirit",
    triad: ["Body", "Mind", "Spirit"],
  },
};

export async function Vision() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <section className="py-[clamp(5rem,9vw,8rem)] border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <SectionOverline>{t.overline}</SectionOverline>
            <h2 className="mt-3 mb-6 font-display italic font-medium leading-[1.1] text-[clamp(2rem,3.8vw,2.85rem)] text-ink">
              {t.heading}
            </h2>
            <p className="font-body text-ink-soft text-[1.05rem] leading-[1.85] mb-4 indent-6">
              {t.p1}
            </p>
            <p className="font-body text-ink-soft text-[1.05rem] leading-[1.85] mb-2">
              {t.p2}
            </p>

            <CodexQuote cite={t.cite}>{t.quote}</CodexQuote>
          </Reveal>

          <Reveal delay={140} className="flex justify-center">
            <div
              className="relative grid grid-cols-2 gap-6 max-w-[360px]"
              aria-label={t.triadAria}
            >
              {t.triad.map((label, i) => (
                <div
                  key={label}
                  className={
                    "relative flex flex-col items-center text-center bg-transparent " +
                    "border border-[var(--rule-strong)] p-6 transition-colors hover:bg-[rgba(183,144,47,0.06)] " +
                    (i === 2 ? "col-span-2 mx-auto max-w-[200px]" : "")
                  }
                >
                  <span aria-hidden className="absolute -top-1 -left-1 size-1.5 rotate-45 bg-gold-leaf" />
                  <span aria-hidden className="absolute -bottom-1 -right-1 size-1.5 rotate-45 bg-gold-leaf" />
                  <div className="size-12 mb-2 text-gold-leaf">{glyphs[i]}</div>
                  <span className="font-display italic font-medium text-[1.1rem] tracking-[0.02em] text-ink">
                    {label}
                  </span>
                </div>
              ))}
              <span aria-hidden className="absolute inset-0 size-full text-gold-leaf opacity-40 pointer-events-none">
                <TriadLines width="100%" height="100%" />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
