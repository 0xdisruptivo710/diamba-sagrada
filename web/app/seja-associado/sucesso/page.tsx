import type { Metadata } from "next";
import { ButtonLink, InlineLink } from "@/components/ui";
import { CodexRule } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { siteConfig, whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cadastro concluído",
  robots: { index: false },
};

export default async function SucessoPage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}) {
  const { v } = await searchParams;
  const voucher = (v ?? "").trim();

  const msg =
    `Olá! Acabei de me associar à ${siteConfig.name}.` +
    (voucher ? ` Meu voucher é ${voucher}.` : "") +
    " Podem me passar os próximos passos?";

  return (
    <section className="min-h-[70vh] py-[clamp(5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[760px] px-6 md:px-12 text-center">
        <Reveal>
          <span
            className="inline-block mb-4 not-italic font-semibold text-[0.78rem] tracking-[0.28em] text-gold-leaf"
            style={{ fontVariant: "small-caps" }}
          >
            Fólio IX · Cadastro concluído
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display italic font-medium text-ink leading-[1.08] text-[clamp(2.2rem,5vw,3.6rem)] mb-5">
            Agora você é associado da Diamba Sagrada
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="font-body text-ink-soft text-[1.05rem] leading-[1.75] max-w-[58ch] mx-auto">
            Recebemos seu cadastro com gratidão. Você acaba de entrar em uma comunidade
            que cuida — com escuta, ciência e respeito à totalidade do ser.
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
                Seu voucher — 50% na primeira consulta
              </p>
              <p className="font-display italic font-semibold text-ink text-[2rem] tracking-[0.08em] select-all">
                {voucher}
              </p>
              <p className="font-body text-ink-soft text-[0.86rem] leading-[1.6] mt-3">
                Apresente este código ao médico parceiro para garantir seu desconto.
              </p>
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={120}>
          <div className="flex flex-col items-center gap-5">
            <ButtonLink href={whatsappUrl(msg)} variant="gold" size="lg" external>
              Falar conosco no WhatsApp
            </ButtonLink>
            <p className="font-body text-ink-soft text-[0.95rem] leading-[1.7] max-w-[52ch]">
              <strong className="text-ink not-italic">Próximo passo:</strong> envie sua{" "}
              <strong className="text-ink not-italic">receita</strong> e seu{" "}
              <strong className="text-ink not-italic">laudo médico</strong> para{" "}
              <InlineLink href={`mailto:${siteConfig.email}`} external>
                {siteConfig.email}
              </InlineLink>{" "}
              para validarmos seu tratamento.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
