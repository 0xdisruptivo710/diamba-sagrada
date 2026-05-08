import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Seja Associado",
  description:
    "Junte-se à Diamba Sagrada. Acolhimento, orientação médica, suporte jurídico e a construção de uma comunidade de cuidado.",
};

const inputClass =
  "w-full bg-paper-deep/60 border border-[var(--rule-strong)] " +
  "px-4 py-3 font-body text-ink text-[1rem] " +
  "transition-colors focus:border-forest focus:outline-none " +
  "placeholder:text-ink-soft/60";

const labelClass =
  "font-display italic text-[0.85rem] text-gold-leaf tracking-[0.18em]";

const beneficios = [
  "Acolhimento humanizado, sem julgamento",
  "Acesso à rede de médicos prescritores parceiros",
  "Orientação jurídica sobre seus direitos",
  "Acompanhamento contínuo durante o tratamento",
  "Comunidade de apoio entre pacientes e familiares",
  "Acesso prioritário a fitoterápicos quando disponíveis",
];

export default function SejaAssociadoPage() {
  return (
    <>
      <PageHero
        folio="Fólio IX"
        crumbs={[{ label: "Início", href: "/" }, { label: "Seja Associado" }]}
        title="Seja associado"
        subtitle="Caminhar com a Diamba Sagrada é fazer parte de uma comunidade que cuida — em tempo e espaço."
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12 grid gap-14 md:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <Reveal>
            <SectionOverline>Articulus Primus — Pedido de Associação</SectionOverline>
            <h2 className="mt-3 mb-3 font-display italic font-medium text-ink text-[clamp(1.7rem,3vw,2.2rem)] leading-tight">
              Cadastro inicial
            </h2>
            <p className="font-body text-ink-soft text-[1rem] leading-[1.7] mb-8 max-w-[55ch]">
              Preencha o formulário abaixo. Nossa equipe entrará em contato para agendar
              uma conversa de acolhimento e dar continuidade ao processo.
            </p>

            <form
              action="mailto:contato@diambasagrada.org.br"
              method="post"
              encType="text/plain"
              className="flex flex-col gap-5"
              aria-label="Formulário de pedido de associação"
            >
              {/* Identificação */}
              <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
                <legend
                  className="px-2 -ml-2 font-display italic text-[0.78rem] text-gold-leaf tracking-[0.22em]"
                  style={{ fontVariant: "small-caps" }}
                >
                  Identificação
                </legend>
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className={labelClass} style={{ fontVariant: "small-caps" }}>
                    Nome completo
                  </label>
                  <input id="nome" name="nome" type="text" required className={inputClass} />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClass} style={{ fontVariant: "small-caps" }}>
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="telefone" className={labelClass} style={{ fontVariant: "small-caps" }}>
                      Telefone
                    </label>
                    <input id="telefone" name="telefone" type="tel" inputMode="tel" required className={inputClass} />
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="cidade" className={labelClass} style={{ fontVariant: "small-caps" }}>
                      Cidade
                    </label>
                    <input id="cidade" name="cidade" type="text" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="estado" className={labelClass} style={{ fontVariant: "small-caps" }}>
                      Estado
                    </label>
                    <input id="estado" name="estado" type="text" maxLength={2} placeholder="UF" className={inputClass} />
                  </div>
                </div>
              </fieldset>

              {/* Contexto clínico */}
              <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
                <legend
                  className="px-2 -ml-2 font-display italic text-[0.78rem] text-gold-leaf tracking-[0.22em]"
                  style={{ fontVariant: "small-caps" }}
                >
                  Contexto clínico
                </legend>
                <div className="flex flex-col gap-2">
                  <label htmlFor="vinculo" className={labelClass} style={{ fontVariant: "small-caps" }}>
                    Você é
                  </label>
                  <select id="vinculo" name="vinculo" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option>Paciente</option>
                    <option>Familiar / cuidador</option>
                    <option>Profissional de saúde</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="motivo" className={labelClass} style={{ fontVariant: "small-caps" }}>
                    Conte-nos brevemente seu caso
                  </label>
                  <textarea
                    id="motivo"
                    name="motivo"
                    rows={5}
                    placeholder="Diagnóstico, tratamento atual, dúvidas, expectativas. Tudo que considerar relevante."
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="prescricao" className={labelClass} style={{ fontVariant: "small-caps" }}>
                    Você já possui prescrição médica de cannabis?
                  </label>
                  <select id="prescricao" name="prescricao" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option>Sim, com receita atual</option>
                    <option>Sim, mas vencida</option>
                    <option>Ainda não, gostaria de orientação</option>
                  </select>
                </div>
              </fieldset>

              {/* Consentimento */}
              <fieldset className="flex flex-col gap-3 border-t border-[var(--rule)] pt-5">
                <legend
                  className="px-2 -ml-2 font-display italic text-[0.78rem] text-gold-leaf tracking-[0.22em]"
                  style={{ fontVariant: "small-caps" }}
                >
                  Consentimento
                </legend>
                <label className="flex items-start gap-3 font-body text-[0.92rem] text-ink-soft leading-[1.6]">
                  <input type="checkbox" required name="consent-lgpd" className="mt-1 accent-gold-leaf" />
                  <span>
                    Autorizo o tratamento dos meus dados pessoais pela Diamba Sagrada
                    para fins de acolhimento, orientação e contato, em conformidade com
                    a LGPD.
                  </span>
                </label>
                <label className="flex items-start gap-3 font-body text-[0.92rem] text-ink-soft leading-[1.6]">
                  <input type="checkbox" name="consent-news" className="mt-1 accent-gold-leaf" />
                  <span>
                    Quero receber comunicações da associação (opcional).
                  </span>
                </label>
              </fieldset>

              <div>
                <Button type="submit" variant="gold" size="lg">
                  Enviar pedido
                </Button>
              </div>

              <p className="font-display italic text-ink-soft text-[0.88rem]">
                <strong className="text-vermilion not-italic">※</strong> Versão simplificada do
                cadastro. Em breve, este formulário será multietapa, com upload seguro de
                receita médica e acompanhamento de status.
              </p>
            </form>
          </Reveal>

          {/* Benefícios */}
          <Reveal as="aside" delay={120} className="self-start">
            <SectionOverline>Articulus Secundus — Por que se associar</SectionOverline>
            <h2 className="mt-3 mb-6 font-display italic font-medium text-ink text-[clamp(1.5rem,2.6vw,1.9rem)] leading-tight">
              O que você recebe
            </h2>
            <ol className="flex flex-col gap-3.5 font-body text-[0.98rem] text-ink-soft leading-[1.7] mb-8">
              {beneficios.map((b, i) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="font-display italic text-gold-leaf text-[0.78rem] tracking-[0.15em] mt-1.5 shrink-0"
                    style={{ fontVariant: "small-caps" }}
                  >
                    §{i + 1}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ol>
            <p className="font-display italic text-ink-soft text-[0.95rem] leading-[1.6] border-l border-gold-leaf pl-4">
              <strong
                className="block not-italic font-semibold text-[0.78rem] tracking-[0.2em] text-gold-leaf mb-1"
                style={{ fontVariant: "small-caps" }}
              >
                Nota de Margem
              </strong>
              A associação é gratuita e sem fins lucrativos. Eventuais consultas médicas e
              honorários jurídicos são pactuados diretamente com cada profissional.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
