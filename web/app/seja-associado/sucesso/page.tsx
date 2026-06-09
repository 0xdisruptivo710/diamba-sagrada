import type { Metadata } from "next";
import { ButtonLink, InlineLink } from "@/components/ui";
import { CodexRule } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    metaTitle: "Cadastro concluído",
    folioStrip: "Fólio IX · Cadastro concluído",
    heading: "Agora você é associado da Diamba Sagrada",
    intro:
      "Recebemos seu cadastro com gratidão. Você acaba de entrar em uma comunidade que cuida — com escuta, ciência e respeito à totalidade do ser.",
    voucherLabel: "Seu voucher — 50% na primeira consulta",
    voucherHelp: "Apresente este código ao médico parceiro para garantir seu desconto.",
    whatsapp: "Falar conosco no WhatsApp",
    nextStepLabel: "Próximo passo:",
    nextStepMid1: "envie sua",
    receita: "receita",
    nextStepMid2: "e seu",
    laudo: "laudo médico",
    nextStepTo: "para",
    nextStepEnd: "para validarmos seu tratamento.",
    waMsg: (name: string, voucher: string) =>
      `Olá! Acabei de me associar à ${name}.` +
      (voucher ? ` Meu voucher é ${voucher}.` : "") +
      " Podem me passar os próximos passos?",
  },
  en: {
    metaTitle: "Registration complete",
    folioStrip: "Folio IX · Registration complete",
    heading: "You are now a member of Diamba Sagrada",
    intro:
      "We've received your registration with gratitude. You've just joined a community that cares — with listening, science and respect for the whole being.",
    voucherLabel: "Your voucher — 50% off your first appointment",
    voucherHelp: "Show this code to the partner physician to secure your discount.",
    whatsapp: "Talk to us on WhatsApp",
    nextStepLabel: "Next step:",
    nextStepMid1: "send your",
    receita: "prescription",
    nextStepMid2: "and your",
    laudo: "medical report",
    nextStepTo: "to",
    nextStepEnd: "so we can validate your treatment.",
    waMsg: (name: string, voucher: string) =>
      `Hello! I've just become a member of ${name}.` +
      (voucher ? ` My voucher is ${voucher}.` : "") +
      " Could you send me the next steps?",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = copy[await getLocale()];
  return { title: t.metaTitle, robots: { index: false } };
}

export default async function SucessoPage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}) {
  const locale = await getLocale();
  const t = copy[locale];
  const { v } = await searchParams;
  const voucher = (v ?? "").trim();

  const msg = t.waMsg(siteConfig.name, voucher);

  return (
    <section className="min-h-[70vh] py-[clamp(5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[760px] px-6 md:px-12 text-center">
        <Reveal>
          <span
            className="inline-block mb-4 not-italic font-semibold text-[0.78rem] tracking-[0.28em] text-gold-leaf"
            style={{ fontVariant: "small-caps" }}
          >
            {t.folioStrip}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display italic font-medium text-ink leading-[1.08] text-[clamp(2.2rem,5vw,3.6rem)] mb-5">
            {t.heading}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="font-body text-ink-soft text-[1.05rem] leading-[1.75] max-w-[58ch] mx-auto">
            {t.intro}
          </p>
        </Reveal>

        <CodexRule glyph="❦" />

        {voucher ? (
          <Reveal delay={80}>
            <div className="mx-auto max-w-[420px] border border-gold-leaf bg-paper-deep/40 px-6 py-7 mb-9">
              <p
                className="font-body font-semibold text-[0.74rem] tracking-[0.24em] text-gold-leaf mb-3"
                style={{ fontVariant: "small-caps" }}
              >
                {t.voucherLabel}
              </p>
              <p className="font-display italic font-semibold text-ink text-[2rem] tracking-[0.08em] select-all">
                {voucher}
              </p>
              <p className="font-body text-ink-soft text-[0.86rem] leading-[1.6] mt-3">
                {t.voucherHelp}
              </p>
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={120}>
          <div className="flex flex-col items-center gap-5">
            <ButtonLink href={whatsappUrl(msg)} variant="gold" size="lg" external>
              {t.whatsapp}
            </ButtonLink>
            <p className="font-body text-ink-soft text-[0.95rem] leading-[1.7] max-w-[52ch]">
              <strong className="text-ink not-italic">{t.nextStepLabel}</strong> {t.nextStepMid1}{" "}
              <strong className="text-ink not-italic">{t.receita}</strong> {t.nextStepMid2}{" "}
              <strong className="text-ink not-italic">{t.laudo}</strong> {t.nextStepTo}{" "}
              <InlineLink href={`mailto:${siteConfig.email}`} external>
                {siteConfig.email}
              </InlineLink>{" "}
              {t.nextStepEnd}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
