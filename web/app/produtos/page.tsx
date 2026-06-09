import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CTAFinal } from "@/components/codex/cta-final";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { Loja } from "./loja";
import { produtos } from "@/lib/produtos";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    metaTitle: "Loja",
    metaDescription:
      "Fitoterápicos da Diamba Sagrada: chás e blends de ervas para equilíbrio, vitalidade e descanso.",
    folio: "Fólio VIII",
    crumbHome: "Início",
    crumbShop: "Loja",
    title: "Loja",
    subtitle:
      "Fitoterápicos preparados com cuidado: chás e blends de ervas para acompanhar seus dias.",
    overline: "Articulus Primus — Fitoterápicos",
    heading: "Ervas para o equilíbrio do corpo",
    noteLabel: "Nota de Margem",
    note:
      "Óleos e produtos à base de cannabis ainda não são fornecidos — virão no tempo certo, dentro da legalidade e mediante prescrição médica, para associados.",
  },
  en: {
    metaTitle: "Shop",
    metaDescription:
      "Diamba Sagrada herbal medicines: teas and herb blends for balance, vitality and rest.",
    folio: "Folio VIII",
    crumbHome: "Home",
    crumbShop: "Shop",
    title: "Shop",
    subtitle:
      "Herbal medicines prepared with care: teas and herb blends to accompany your days.",
    overline: "Articulus Primus — Herbal Medicines",
    heading: "Herbs for the body's balance",
    noteLabel: "Margin Note",
    note:
      "Cannabis-based oils and products are not yet offered — they will come in due time, within the law and by medical prescription, for members.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = copy[await getLocale()];
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ProdutosPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero
        folio={t.folio}
        crumbs={[{ label: t.crumbHome, href: "/" }, { label: t.crumbShop }]}
        title={t.title}
        subtitle={t.subtitle}
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-12">
            <SectionOverline>{t.overline}</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              {t.heading}
            </h2>
          </Reveal>

          <Loja produtos={produtos} locale={locale} />

          <Reveal>
            <p className="mt-12 font-display italic text-ink-soft text-[0.95rem] leading-[1.6] border-l border-gold-leaf pl-4 max-w-[60ch]">
              <strong
                className="block not-italic font-semibold text-[0.78rem] tracking-[0.2em] text-gold-leaf mb-1"
                style={{ fontVariant: "small-caps" }}
              >
                {t.noteLabel}
              </strong>
              {t.note}
            </p>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
