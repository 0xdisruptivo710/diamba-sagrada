import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CodexQuote, SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { DoarCliente } from "./doar-cliente";
import { siteConfig } from "@/lib/config";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    metaTitle: "Seja um Doador",
    metaDescription:
      "Apoie a Diamba Sagrada. Sua doação sustenta o acolhimento, a orientação e o acesso de pacientes ao tratamento.",
    folio: "Fólio X",
    crumbHome: "Início",
    crumbCurrent: "Seja um Doador",
    title: "Seja um doador",
    subtitle:
      "Não é preciso ser paciente para cuidar. Sua doação sustenta uma rede de acolhimento que existe para quem mais precisa.",
    overline1: "Articulus Primus — Apoie a causa",
    heading1: "Doe via Pix",
    intro: (name: string) =>
      `A ${name} é uma associação sem fins lucrativos. Toda doação é destinada integralmente à nossa missão de cuidado.`,
    overline2: "Articulus Secundus — Para onde vai",
    heading2: "O que sua doação sustenta",
    destinos: [
      "Acolhimento humanizado de pacientes e familiares",
      "Consultas gratuitas para pessoas com deficiência",
      "Orientação jurídica sobre o direito à saúde",
      "Manutenção das atividades da associação",
    ],
    quote: "Cultivar é direito. Tratar é dignidade.",
  },
  en: {
    metaTitle: "Become a Donor",
    metaDescription:
      "Support Diamba Sagrada. Your donation sustains the welcoming, the guidance and patients' access to treatment.",
    folio: "Folio X",
    crumbHome: "Home",
    crumbCurrent: "Become a Donor",
    title: "Become a donor",
    subtitle:
      "You don't have to be a patient to care. Your donation sustains a network of welcoming that exists for those who need it most.",
    overline1: "Articulus Primus — Support the cause",
    heading1: "Donate via Pix",
    intro: (name: string) =>
      `${name} is a non-profit association. Every donation goes entirely to our mission of care.`,
    overline2: "Articulus Secundus — Where it goes",
    heading2: "What your donation sustains",
    destinos: [
      "Humanized welcoming of patients and families",
      "Free appointments for people with disabilities",
      "Legal guidance on the right to health",
      "Upkeep of the association's activities",
    ],
    quote: "To cultivate is a right. To treat is dignity.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = copy[await getLocale()];
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function DoarPage() {
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
        <div className="mx-auto max-w-[1180px] px-6 md:px-12 grid gap-14 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionOverline>{t.overline1}</SectionOverline>
            <h2 className="mt-3 mb-5 font-display italic font-medium text-ink text-[clamp(1.7rem,3vw,2.2rem)] leading-tight">
              {t.heading1}
            </h2>
            <p className="font-body text-ink-soft text-[1rem] leading-[1.8] mb-8 max-w-[52ch]">
              {t.intro(siteConfig.name)}
            </p>
            <DoarCliente pixKey={siteConfig.pixKey} locale={locale} />
          </Reveal>

          <Reveal as="aside" delay={120} className="self-start">
            <SectionOverline>{t.overline2}</SectionOverline>
            <h2 className="mt-3 mb-6 font-display italic font-medium text-ink text-[clamp(1.5rem,2.6vw,1.9rem)] leading-tight">
              {t.heading2}
            </h2>
            <ol className="flex flex-col gap-3.5 font-body text-[0.98rem] text-ink-soft leading-[1.7] mb-8">
              {t.destinos.map((d, i) => (
                <li key={d} className="flex items-start gap-3">
                  <span
                    className="font-display italic text-gold-leaf text-[0.78rem] tracking-[0.15em] mt-1.5 shrink-0"
                    style={{ fontVariant: "small-caps" }}
                  >
                    §{i + 1}
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
            <CodexQuote cite="Diamba Sagrada">{t.quote}</CodexQuote>
          </Reveal>
        </div>
      </section>
    </>
  );
}
