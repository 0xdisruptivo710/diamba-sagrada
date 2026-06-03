import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CTAFinal } from "@/components/codex/cta-final";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { ButtonLink } from "@/components/ui";
import { siteConfig, whatsappUrl, associationConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Área Médica",
  description:
    "Conecte-se com médicos prescritores parceiros, conheça a jornada de atendimento e tire suas dúvidas sobre cannabis medicinal.",
};

const passos = [
  {
    n: "I",
    title: "Primeiro Contato",
    body: "Fale conosco e conte sobre sua condição. Nossa equipe de acolhimento vai ouvir sua história e orientar os próximos passos.",
  },
  {
    n: "II",
    title: "Avaliação Médica",
    body: "Consulta com médico prescritor habilitado que avaliará seu quadro clínico, histórico de saúde e a indicação do tratamento.",
  },
  {
    n: "III",
    title: "Prescrição",
    body: "Receita médica personalizada com dosagem, concentração e forma de uso adequados ao seu perfil e necessidades individuais.",
  },
  {
    n: "IV",
    title: "Acompanhamento",
    body: "Suporte contínuo durante todo o tratamento. Retornos periódicos com o médico para ajustes e esclarecimento de dúvidas.",
  },
];

const faq = [
  {
    q: "O que é a prescrição de cannabis medicinal?",
    a: "É um documento emitido por médico habilitado que autoriza o paciente a utilizar produtos à base de cannabis para fins terapêuticos. A receita contém o tipo de produto, concentração de canabinoides (CBD e THC), dosagem e forma de administração — indispensável para a aquisição legal no Brasil.",
  },
  {
    q: "Quais condições podem ser tratadas?",
    a: "Epilepsia refratária, dor crônica, esclerose múltipla, fibromialgia, ansiedade, insônia, autismo, Parkinson, Alzheimer, náuseas e vômitos associados à quimioterapia, entre outras. A indicação sempre depende da avaliação médica individual.",
  },
  {
    q: "A consulta pode ser feita por telemedicina?",
    a: "Sim. A telemedicina é regulamentada no Brasil e muitos dos nossos médicos parceiros oferecem consultas por videochamada. A prescrição pode ser emitida digitalmente, conforme as normas vigentes.",
  },
  {
    q: "Quanto custa a consulta?",
    a: "O valor varia conforme o médico e a especialidade. Nossos parceiros oferecem condições especiais para associados, com valores acessíveis e possibilidade de parcelamento.",
  },
  {
    q: "Preciso de encaminhamento do meu médico?",
    a: "Não é obrigatório. Você pode agendar diretamente com um dos nossos médicos parceiros. Se você possui laudos, exames ou relatórios anteriores, é recomendável levá-los à consulta.",
  },
  {
    q: "A prescrição de cannabis medicinal é legal no Brasil?",
    a: "Sim. A Anvisa regulamenta a prescrição e o uso de produtos à base de cannabis. A RDC 660/2022 estabelece normas para importação por pessoa física, e a RDC 327/2019 regulamenta a fabricação e comercialização no país.",
  },
];

export default function AreaMedicaPage() {
  return (
    <>
      <PageHero
        folio="Fólio IV"
        crumbs={[{ label: "Início", href: "/" }, { label: "Área Médica" }]}
        title="Área médica"
        subtitle="Conecte-se com médicos prescritores parceiros e conheça nossa jornada de atendimento humanizado."
      />

      {/* Conexão com médico + voucher */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-12">
            <SectionOverline>Articulus Primus — Conexão com médico</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight max-w-[20ch]">
              Conecte-se com um médico prescritor
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Caminho 1 — voucher */}
            <Reveal>
              <article className="h-full border border-[var(--rule-strong)] bg-[rgba(241,232,211,0.55)] p-8 hover:border-gold-leaf transition-colors flex flex-col">
                <span
                  className="font-display italic text-gold-leaf text-[0.78rem] tracking-[0.2em] mb-2"
                  style={{ fontVariant: "small-caps" }}
                >
                  Associado
                </span>
                <h3 className="font-display italic font-medium text-ink text-[1.5rem] leading-tight mb-3">
                  Voucher de {associationConfig.voucher.percent}% na primeira consulta
                </h3>
                <p className="font-body text-ink-soft text-[0.96rem] leading-[1.75] mb-6">
                  Ao se associar, você recebe um voucher de desconto para a primeira
                  consulta com médico parceiro e pode anexar sua receita e laudo.
                  Pessoas com deficiência têm consulta gratuita.
                </p>
                <div className="mt-auto">
                  <ButtonLink href="/seja-associado" variant="gold" size="lg">
                    Quero meu voucher
                  </ButtonLink>
                </div>
              </article>
            </Reveal>

            {/* Caminho 2 — WhatsApp direto */}
            <Reveal delay={110}>
              <article className="h-full border border-[var(--rule-strong)] bg-[rgba(241,232,211,0.55)] p-8 hover:border-gold-leaf transition-colors flex flex-col">
                <span
                  className="font-display italic text-gold-leaf text-[0.78rem] tracking-[0.2em] mb-2"
                  style={{ fontVariant: "small-caps" }}
                >
                  Direto
                </span>
                <h3 className="font-display italic font-medium text-ink text-[1.5rem] leading-tight mb-3">
                  Prefere falar agora?
                </h3>
                <p className="font-body text-ink-soft text-[0.96rem] leading-[1.75] mb-6">
                  Converse com nossa equipe de acolhimento pelo WhatsApp. Orientamos
                  sobre o atendimento médico e os próximos passos do seu tratamento.
                </p>
                <div className="mt-auto">
                  <ButtonLink
                    href={whatsappUrl(
                      "Olá! Gostaria de orientação para uma consulta médica de cannabis com a Diamba Sagrada.",
                    )}
                    variant="primary"
                    size="lg"
                    external
                  >
                    Falar no WhatsApp
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Seja médico parceiro */}
          <Reveal delay={80}>
            <div className="mt-10 flex flex-col gap-4 border-t border-[var(--rule)] pt-8 md:flex-row md:items-center md:justify-between">
              <p className="font-display italic text-ink text-[1.05rem] leading-[1.5] max-w-[46ch]">
                <strong
                  className="block not-italic font-semibold text-[0.78rem] tracking-[0.2em] text-gold-leaf mb-1"
                  style={{ fontVariant: "small-caps" }}
                >
                  Para profissionais
                </strong>
                É médico e quer prescrever com a gente? Junte-se à nossa rede de parceiros.
              </p>
              <ButtonLink
                href={whatsappUrl(
                  `Olá! Sou médico(a) e tenho interesse em ser parceiro da ${siteConfig.name}.`,
                )}
                variant="outlined-gold"
                size="md"
                external
              >
                Seja médico parceiro
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Atendimento steps */}
      <section className="py-[clamp(5rem,9vw,8rem)] border-y border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-14">
            <SectionOverline>Articulus Secundus — Passo a Passo</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              Como funciona o atendimento
            </h2>
          </Reveal>
          <ol className="grid gap-10 md:grid-cols-4">
            {passos.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 100}>
                <article className="border-t border-[var(--rule-strong)] pt-7 relative">
                  <span className="absolute -top-[0.7rem] left-0 bg-paper pr-3 font-display italic font-medium text-[2.4rem] leading-none text-gold-leaf">
                    {p.n}
                  </span>
                  <h3 className="font-display italic font-medium text-ink text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="font-body text-ink-soft text-[0.92rem] leading-[1.7]">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ — native details/summary, no JS */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[880px] px-6 md:px-12">
          <Reveal className="mb-12 text-center">
            <SectionOverline>Articulus Tertius — Perguntas Frequentes</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              Sobre a prescrição
            </h2>
          </Reveal>

          <ol className="flex flex-col gap-2">
            {faq.map((f, i) => (
              <Reveal as="li" key={f.q} delay={i * 60}>
                <details className="group border-t border-[var(--rule)] py-5">
                  <summary className="cursor-pointer flex items-center justify-between gap-4 font-display italic font-medium text-ink text-[1.1rem] list-none">
                    <span>{f.q}</span>
                    <span
                      aria-hidden
                      className="text-gold-leaf transition-transform group-open:rotate-180"
                    >
                      ▾
                    </span>
                  </summary>
                  <p className="mt-4 font-body text-ink-soft text-[0.98rem] leading-[1.85]">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Aviso */}
      <section className="py-12 border-t border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal>
            <p className="flex items-start gap-4 font-body text-[0.95rem] text-ink-soft leading-[1.7] max-w-[68ch] mx-auto text-center md:text-left">
              <span aria-hidden className="text-vermilion text-xl shrink-0">※</span>
              <span>
                Toda prescrição deve ser emitida por médico habilitado. A Diamba Sagrada
                facilita o acesso ao atendimento médico, mas não substitui a consulta.{" "}
                <strong className="text-ink">Nunca se automedique.</strong>
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
