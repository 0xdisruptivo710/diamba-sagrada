import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CTAFinal } from "@/components/codex/cta-final";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { Loja } from "./loja";
import { produtos } from "@/lib/produtos";

export const metadata: Metadata = {
  title: "Loja",
  description:
    "Fitoterápicos da Diamba Sagrada: chás e blends de ervas para equilíbrio, vitalidade e descanso.",
};

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        folio="Fólio VIII"
        crumbs={[{ label: "Início", href: "/" }, { label: "Loja" }]}
        title="Loja"
        subtitle="Fitoterápicos preparados com cuidado: chás e blends de ervas para acompanhar seus dias."
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-12">
            <SectionOverline>Articulus Primus — Fitoterápicos</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              Ervas para o equilíbrio do corpo
            </h2>
          </Reveal>

          <Loja produtos={produtos} />

          <Reveal>
            <p className="mt-12 font-display italic text-ink-soft text-[0.95rem] leading-[1.6] border-l border-gold-leaf pl-4 max-w-[60ch]">
              <strong
                className="block not-italic font-semibold text-[0.78rem] tracking-[0.2em] text-gold-leaf mb-1"
                style={{ fontVariant: "small-caps" }}
              >
                Nota de Margem
              </strong>
              Óleos e produtos à base de cannabis ainda não são fornecidos — virão no
              tempo certo, dentro da legalidade e mediante prescrição médica, para
              associados.
            </p>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
