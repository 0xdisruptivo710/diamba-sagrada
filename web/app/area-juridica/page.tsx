import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CTAFinal } from "@/components/codex/cta-final";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Área Jurídica",
  description:
    "Direitos do paciente, habeas corpus preventivo, importação de produtos. Conheça os direitos garantidos por lei e nossa atuação jurídica.",
};

const direitos = [
  {
    title: "Direito ao Tratamento",
    body:
      "Pacientes com prescrição médica têm direito ao acesso legal a produtos à base de cannabis para fins terapêuticos, conforme regulamentação vigente.",
  },
  {
    title: "Habeas Corpus Preventivo",
    body:
      "Proteção legal para cultivo autorizado judicialmente. Decisões reconhecem o direito ao cultivo próprio para uso medicinal em diversos casos.",
  },
  {
    title: "Importação de Produtos",
    body:
      "A ANVISA permite a importação de produtos à base de cannabis com receita médica e laudo técnico, garantindo acesso a tratamentos de qualidade.",
  },
  {
    title: "Sigilo Médico",
    body:
      "Seus dados médicos são protegidos por lei. O sigilo entre paciente e profissional de saúde é garantido pelo Código de Ética Médica e pela LGPD.",
  },
  {
    title: "Associação Legal",
    body:
      "Participar de uma associação de pacientes é legal e amparado pela Constituição Federal, que garante a liberdade de associação.",
  },
  {
    title: "Direito à Informação",
    body:
      "Acesso a informações claras sobre seu tratamento é um direito fundamental. Você tem o direito de entender cada etapa do processo terapêutico.",
  },
];

const lei = [
  {
    permitted: "Usar cannabis com prescrição médica",
    careful: "Transportar sem documentação",
    forbidden: "Vender ou comercializar",
  },
  {
    permitted: "Importar via ANVISA com receita",
    careful: "Cultivo sem autorização judicial",
    forbidden: "Portar sem receita médica",
  },
  {
    permitted: "Participar de associação de pacientes",
    careful: "Compartilhar com outros pacientes",
    forbidden: "Propaganda ou incentivo recreativo",
  },
  {
    permitted: "Adquirir de associação autorizada",
    careful: "Produzir sem acompanhamento técnico",
    forbidden: "Dirigir sob efeito",
  },
];

const atuacao = [
  {
    title: "Orientação Preventiva",
    body: "Esclarecemos seus direitos antes de qualquer problema. Informação qualificada é a melhor prevenção.",
  },
  {
    title: "Acompanhamento de Casos",
    body: "Apoio jurídico em processos administrativos e judiciais. Acompanhamos cada etapa para garantir seus direitos.",
  },
  {
    title: "Advocacy e Políticas Públicas",
    body: "Atuamos para ampliar o acesso legal à cannabis medicinal no Brasil, participando de discussões legislativas.",
  },
];

export default function AreaJuridicaPage() {
  return (
    <>
      <PageHero
        folio="Fólio V"
        crumbs={[{ label: "Início", href: "/" }, { label: "Jurídico" }]}
        title="Área jurídica"
        subtitle="Conheça seus direitos como paciente e a forma como atuamos para garanti-los."
      />

      {/* Direitos grid */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-14">
            <SectionOverline>Articulus Primus — Direitos Fundamentais</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              Seus direitos como paciente
            </h2>
          </Reveal>
          <ul className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {direitos.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 80} className={i % 3 === 1 ? "lg:translate-y-8" : ""}>
                <article className="relative border-t border-[var(--rule-strong)] pt-7">
                  <span className="absolute -top-[0.6rem] left-0 bg-paper pr-3 font-display italic font-medium text-[1.6rem] leading-none text-gold-leaf">
                    §{i + 1}
                  </span>
                  <h3 className="font-display italic font-medium text-ink text-[1.3rem] mb-2">
                    {d.title}
                  </h3>
                  <p className="font-body text-ink-soft text-[0.98rem] leading-[1.75]">
                    {d.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* O que a lei permite */}
      <section className="py-[clamp(5rem,9vw,8rem)] border-y border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-12">
            <SectionOverline>Articulus Secundus — Legislação</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              O que a lei permite
            </h2>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse font-body">
                <thead>
                  <tr className="border-b-2 border-gold-leaf">
                    {["Permitido", "Requer Cuidado", "Não Permitido"].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="text-left p-4 font-display italic font-medium text-gold-leaf text-[0.85rem] tracking-[0.18em]"
                        style={{ fontVariant: "small-caps" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {lei.map((row, i) => (
                    <tr key={i} className="border-b border-[var(--rule)]">
                      <td className="p-4 text-ink text-[0.95rem]">{row.permitted}</td>
                      <td className="p-4 text-sepia text-[0.95rem]">{row.careful}</td>
                      <td className="p-4 text-vermilion text-[0.95rem]">{row.forbidden}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Atuação */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-14">
            <SectionOverline>Articulus Tertius — Nossa Atuação</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              Como atuamos juridicamente
            </h2>
          </Reveal>
          <ul className="grid gap-12 md:grid-cols-3">
            {atuacao.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 110}>
                <article>
                  <h3 className="font-display italic font-medium text-ink text-[1.3rem] mb-2">
                    {a.title}
                  </h3>
                  <p className="font-body text-ink-soft text-[0.98rem] leading-[1.75] max-w-[40ch]">
                    {a.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-[clamp(4rem,7vw,6rem)] border-t border-[var(--rule)] [background:linear-gradient(180deg,transparent,rgba(216,201,162,0.18),transparent)]">
        <div className="mx-auto max-w-[880px] px-6 md:px-12">
          <Reveal>
            <SectionOverline>Compromisso Legal</SectionOverline>
            <h3 className="mt-3 mb-5 font-display italic font-medium text-ink text-[clamp(1.7rem,3vw,2.2rem)] leading-tight">
              Transparência e responsabilidade em cada ação
            </h3>
            <p className="font-body text-ink-soft text-[1.02rem] leading-[1.85]">
              A Diamba Sagrada opera rigorosamente dentro da legislação brasileira.
              Respeitamos as regulamentações da ANVISA, seguimos os protocolos exigidos
              para associações de pacientes e garantimos a proteção dos dados pessoais e
              de saúde de todos os associados em conformidade com a LGPD. Nosso
              compromisso é com a transparência, a legalidade e a dignidade de cada
              paciente.
            </p>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
