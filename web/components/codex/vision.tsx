import { TriadCorpo, TriadMente, TriadEspirito, TriadLines } from "@/components/glyphs";
import { CodexQuote, SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";

const triadCells = [
  { glyph: <TriadCorpo width={32} height={32} />, label: "Corpo" },
  { glyph: <TriadMente width={32} height={32} />, label: "Mente" },
  { glyph: <TriadEspirito width={32} height={32} />, label: "Espírito" },
];

export function Vision() {
  return (
    <section className="py-[clamp(5rem,9vw,8rem)] border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <SectionOverline>Articulus Secundus — Visão Integrativa</SectionOverline>
            <h2 className="mt-3 mb-6 font-display italic font-medium leading-[1.1] text-[clamp(2rem,3.8vw,2.85rem)] text-ink">
              Um cuidado que respeita a totalidade do ser
            </h2>
            <p className="font-body text-ink-soft text-[1.05rem] leading-[1.85] mb-4 indent-6">
              Acreditamos que a verdadeira cura acontece quando olhamos para o ser humano
              de forma integral. Nossa abordagem une ciência contemporânea, escuta sensível
              e sabedoria ancestral para oferecer um cuidado que respeita a singularidade
              de cada pessoa.
            </p>
            <p className="font-body text-ink-soft text-[1.05rem] leading-[1.85] mb-2">
              Não tratamos apenas sintomas, acompanhamos histórias. Cada paciente é um
              universo, e nosso compromisso é caminhar ao lado, integrando corpo, mente e
              espírito no processo de cura.
            </p>

            <CodexQuote cite="Princípio da Diamba Sagrada">
              A cura nasce no encontro entre quem sofre, quem cuida, e a planta que
              atravessa séculos de memória.
            </CodexQuote>
          </Reveal>

          <Reveal delay={140} className="flex justify-center">
            <div
              className="relative grid grid-cols-2 gap-6 max-w-[360px]"
              aria-label="Tríade integrativa: Corpo, Mente e Espírito"
            >
              {triadCells.map((cell, i) => (
                <div
                  key={cell.label}
                  className={
                    "relative flex flex-col items-center text-center bg-transparent " +
                    "border border-[var(--rule-strong)] p-6 transition-colors hover:bg-[rgba(183,144,47,0.06)] " +
                    (i === 2 ? "col-span-2 mx-auto max-w-[200px]" : "")
                  }
                >
                  <span aria-hidden className="absolute -top-1 -left-1 size-1.5 rotate-45 bg-gold-leaf" />
                  <span aria-hidden className="absolute -bottom-1 -right-1 size-1.5 rotate-45 bg-gold-leaf" />
                  <div className="size-12 mb-2 text-gold-leaf">{cell.glyph}</div>
                  <span className="font-display italic font-medium text-[1.1rem] tracking-[0.02em] text-ink">
                    {cell.label}
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
