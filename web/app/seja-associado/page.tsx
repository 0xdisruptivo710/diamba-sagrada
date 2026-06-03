import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { AssociacaoForm } from "./associacao-form";
import { associationConfig, formatBRL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Seja Associado",
  description:
    "Associe-se à Diamba Sagrada: leia o regulamento, assine os termos e conclua seu cadastro. Acolhimento, orientação médica e suporte jurídico.",
};

const beneficios = [
  "Acolhimento humanizado, sem julgamento",
  "Voucher de 50% na primeira consulta com médico parceiro",
  "Acesso à rede de médicos prescritores parceiros",
  "Orientação sobre seus direitos e seu tratamento",
  "Acompanhamento contínuo durante o tratamento",
  "Comunidade de apoio entre pacientes e familiares",
];

export default function SejaAssociadoPage() {
  return (
    <>
      <PageHero
        folio="Fólio IX"
        crumbs={[{ label: "Início", href: "/" }, { label: "Seja Associado" }]}
        title="Seja associado"
        subtitle="Caminhar com a Diamba Sagrada é fazer parte de uma comunidade que cuida — em tempo e espaço. O cadastro tem cinco passos: ciência do regulamento, sua ficha, os dois termos e a conclusão."
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12 grid gap-14 md:grid-cols-[1.55fr_1fr]">
          {/* Fluxo */}
          <Reveal>
            <AssociacaoForm
              feeLabel={formatBRL(associationConfig.feeCents)}
              voucher={{
                percent: associationConfig.voucher.percent,
                description: associationConfig.voucher.description,
              }}
            />
          </Reveal>

          {/* Benefícios */}
          <Reveal as="aside" delay={120} className="self-start">
            <SectionOverline>Por que se associar</SectionOverline>
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
              A associação é sem fins lucrativos. A taxa de associado custeia exclusivamente a manutenção
              das atividades. Consultas para PCD são gratuitas.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
