import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/codex/page-hero";
import { CTAFinal } from "@/components/codex/cta-final";
import { CodexRule, SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Loja",
  description:
    "Diamba Sagrada está em fase de construção. Não fornecemos óleo ou fitoterápicos neste momento.",
};

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        folio="Fólio VIII"
        crumbs={[{ label: "Início", href: "/" }, { label: "Loja" }]}
        title="Loja"
        subtitle="Em construção, no tempo certo."
      />

      <section className="py-[clamp(5rem,10vw,9rem)] relative overflow-hidden">
        <span
          aria-hidden
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.08] pointer-events-none"
        >
          <Image
            src="/img/marca-dagua-dourada.png"
            alt=""
            fill
            sizes="420px"
            className="object-contain"
          />
        </span>

        <div className="relative mx-auto max-w-[720px] px-6 md:px-12 text-center">
          <Reveal>
            <SectionOverline>Articulus Único — Estado Atual</SectionOverline>
            <h2 className="mt-3 mb-6 font-display italic font-medium text-ink text-[clamp(2rem,4vw,2.85rem)] leading-tight">
              Ainda não fornecemos óleo
            </h2>

            <CodexRule />

            <p className="font-body text-ink-soft text-[1.08rem] leading-[1.9] mb-5 text-justify hyphens-auto">
              A Diamba Sagrada encontra-se em fase de construção. Atualmente, não
              fornecemos óleo, fitoterápicos ou qualquer produto à base de cannabis. Nosso
              foco no momento é construir uma rede sólida de profissionais, estruturar o
              suporte jurídico e acolher cada paciente com a atenção que ele merece.
            </p>
            <p className="font-body text-ink-soft text-[1.08rem] leading-[1.9] mb-10 text-justify hyphens-auto">
              Em breve, dentro da legalidade e com responsabilidade, esta página será
              dedicada ao acesso seguro a fitoterápicos para nossos associados, mediante
              prescrição médica. Acompanhe nossas notícias.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <ButtonLink href="/seja-associado" variant="primary" size="lg">
                Quero ser avisado
              </ButtonLink>
              <ButtonLink href="/contato" variant="secondary" size="lg">
                Fale conosco
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
