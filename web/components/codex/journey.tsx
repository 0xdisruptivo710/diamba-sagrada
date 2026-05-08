import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";

const steps = [
  {
    n: "Etapa I",
    title: "Chegou ao lugar certo",
    body:
      "Você encontrou uma comunidade de acolhimento. Aqui, ninguém caminha sozinho. Estamos juntos nessa jornada pela saúde e pelo bem-estar.",
  },
  {
    n: "Etapa II",
    title: "Entenda seus direitos",
    body:
      "Orientação jurídica clara e acessível sobre cannabis medicinal no Brasil. Conheça as leis, regulamentações e seus direitos como paciente.",
  },
  {
    n: "Etapa III",
    title: "Conecte-se com um médico",
    body:
      "Médicos parceiros prescritores que compreendem o potencial terapêutico da cannabis e trabalham com protocolos seguros e individualizados.",
  },
  {
    n: "Etapa IV",
    title: "Envie sua receita",
    body:
      "Documentação necessária para acesso legal ao tratamento. Auxiliamos em todo o processo burocrático para que você se concentre no que importa: sua saúde.",
  },
  {
    n: "Etapa V",
    title: "Faça parte da comunidade",
    body:
      "Suporte contínuo e rede de apoio. Grupos de acolhimento, informações atualizadas e uma comunidade que entende e apoia sua caminhada.",
  },
];

export function Journey() {
  return (
    <section
      id="jornada"
      className="
        relative py-[clamp(5rem,9vw,8rem)]
        before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0
        before:w-[clamp(80%,80vw,1140px)] before:h-px
        before:[background:linear-gradient(90deg,transparent,var(--rule-strong),transparent)]
        after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
        after:w-[clamp(80%,80vw,1140px)] after:h-px
        after:[background:linear-gradient(90deg,transparent,var(--rule-strong),transparent)]
      "
    >
      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        <Reveal className="text-center mb-16">
          <SectionOverline>Articulus Tertius — Itinerarium</SectionOverline>
          <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
            <span aria-hidden className="text-gold-leaf text-[0.7em] align-[0.25em] mx-3 opacity-80">⁂</span>
            A jornada do paciente
            <span aria-hidden className="text-gold-leaf text-[0.7em] align-[0.25em] mx-3 opacity-80">⁂</span>
          </h2>
        </Reveal>

        {/* Mobile: vertical timeline. Desktop: horizontal. */}
        <ol className="relative md:grid md:grid-cols-5 md:gap-6">
          {/* Desktop horizontal rule */}
          <span
            aria-hidden
            className="
              hidden md:block absolute top-[7px] left-0 right-0 h-px opacity-55
              [background:linear-gradient(90deg,transparent,var(--color-gold-leaf)_6%,var(--color-gold-leaf)_94%,transparent)]
            "
          />
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 100}
              className="relative pl-10 mb-12 last:mb-0 md:pl-0 md:pt-12 md:mb-0 md:text-center md:px-3"
            >
              {/* Mobile vertical rule (per-item dot rests on it) */}
              <span
                aria-hidden
                className="
                  absolute left-[7px] top-0 bottom-0 w-px opacity-55 md:hidden
                  [background:linear-gradient(180deg,transparent,var(--color-gold-leaf)_8%,var(--color-gold-leaf)_92%,transparent)]
                "
              />
              <span
                aria-hidden
                className="
                  absolute left-0 top-1 size-3.5 rounded-full bg-paper border-[1.5px] border-gold-leaf
                  shadow-[0_0_0_4px_var(--color-paper)]
                  md:left-1/2 md:-translate-x-1/2 md:top-0
                  before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:bg-gold-leaf
                "
              />
              <span
                className="font-display italic font-semibold text-[0.74rem] tracking-[0.22em] text-gold-leaf block mb-1.5"
                style={{ fontVariant: "small-caps" }}
              >
                {s.n}
              </span>
              <h3 className="font-display italic font-medium text-ink text-xl mb-1.5">
                {s.title}
              </h3>
              <p className="font-body text-ink-soft text-sm leading-[1.7] max-w-[400px] md:mx-auto">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
