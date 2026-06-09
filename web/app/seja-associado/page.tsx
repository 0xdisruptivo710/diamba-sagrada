import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { AssociacaoForm } from "./associacao-form";
import { associationConfig, formatBRL } from "@/lib/config";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    metaTitle: "Seja Associado",
    metaDescription:
      "Associe-se à Diamba Sagrada: leia o regulamento, assine os termos e conclua seu cadastro. Acolhimento, orientação médica e suporte jurídico.",
    folio: "Fólio IX",
    crumbHome: "Início",
    crumbCurrent: "Seja Associado",
    title: "Seja associado",
    subtitle:
      "Caminhar com a Diamba Sagrada é fazer parte de uma comunidade que cuida — em tempo e espaço. O cadastro tem cinco passos: ciência do regulamento, sua ficha, os dois termos e a conclusão.",
    overline: "Por que se associar",
    heading: "O que você recebe",
    beneficios: [
      "Acolhimento humanizado, sem julgamento",
      "Voucher de 50% na primeira consulta com médico parceiro",
      "Acesso à rede de médicos prescritores parceiros",
      "Orientação sobre seus direitos e seu tratamento",
      "Acompanhamento contínuo durante o tratamento",
      "Comunidade de apoio entre pacientes e familiares",
    ],
    noteLabel: "Nota de Margem",
    note: "A associação é sem fins lucrativos. A taxa de associado custeia exclusivamente a manutenção das atividades. Consultas para PCD são gratuitas.",
    voucherDescription: "50% de desconto na primeira consulta com médico parceiro",
  },
  en: {
    metaTitle: "Become a Member",
    metaDescription:
      "Join Diamba Sagrada: read the regulations, sign the agreements and complete your registration. Welcoming, medical guidance and legal support.",
    folio: "Folio IX",
    crumbHome: "Home",
    crumbCurrent: "Become a Member",
    title: "Become a member",
    subtitle:
      "Walking with Diamba Sagrada means being part of a community that cares — across time and space. Registration has five steps: acknowledging the regulations, your form, the two agreements, and completion.",
    overline: "Why join",
    heading: "What you receive",
    beneficios: [
      "Humanized, non-judgmental welcoming",
      "50% voucher on your first appointment with a partner physician",
      "Access to the network of partner prescribing physicians",
      "Guidance on your rights and your treatment",
      "Ongoing support throughout treatment",
      "A support community of patients and families",
    ],
    noteLabel: "Margin Note",
    note: "The association is non-profit. The membership fee covers solely the upkeep of activities. Appointments for people with disabilities are free.",
    voucherDescription: "50% off your first appointment with a partner physician",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = copy[await getLocale()];
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function SejaAssociadoPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero
        folio={t.folio}
        crumbs={[{ label: t.crumbHome, href: "/" }, { label: t.crumbCurrent }]}
        title={t.title}
        subtitle={t.subtitle}
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12 grid gap-14 md:grid-cols-[1.55fr_1fr]">
          {/* Fluxo */}
          <Reveal>
            <AssociacaoForm
              feeLabel={formatBRL(associationConfig.feeCents)}
              voucher={{
                percent: associationConfig.voucher.percent,
                description: t.voucherDescription,
              }}
              locale={locale}
            />
          </Reveal>

          {/* Benefícios */}
          <Reveal as="aside" delay={120} className="self-start">
            <SectionOverline>{t.overline}</SectionOverline>
            <h2 className="mt-3 mb-6 font-display italic font-medium text-ink text-[clamp(1.5rem,2.6vw,1.9rem)] leading-tight">
              {t.heading}
            </h2>
            <ol className="flex flex-col gap-3.5 font-body text-[0.98rem] text-ink-soft leading-[1.7] mb-8">
              {t.beneficios.map((b, i) => (
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
                {t.noteLabel}
              </strong>
              {t.note}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
