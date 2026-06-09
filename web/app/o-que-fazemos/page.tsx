import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CTAFinal } from "@/components/codex/cta-final";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { getLocale } from "@/lib/i18n.server";

// Non-text structural fields kept at module scope, indexed by position.
// Translatable text (title/body) lives in copy.pt / copy.en below.
const serviceMeta: { numeral: string; comingSoon?: boolean }[] = [
  { numeral: "I" },
  { numeral: "II" },
  { numeral: "III" },
  { numeral: "IV" },
  { numeral: "V", comingSoon: true },
  { numeral: "VI", comingSoon: true },
];

const passoMeta: { n: string }[] = [
  { n: "I" },
  { n: "II" },
  { n: "III" },
  { n: "IV" },
];

const copy = {
  pt: {
    metaTitle: "O Que Fazemos",
    metaDescription:
      "Conheça os serviços da Diamba Sagrada: acolhimento humanizado, orientação sobre cannabis medicinal, conexão com médicos, suporte jurídico.",
    folio: "Fólio III",
    crumbHome: "Início",
    crumbCurrent: "O Que Fazemos",
    heroTitle: "O que fazemos",
    heroSubtitle:
      "Conheça os serviços e o suporte que oferecemos aos nossos associados.",
    servicesOverline: "Articulus Primus — Nossos Serviços",
    servicesHeading: "Como apoiamos nossos pacientes",
    comingSoon: "Em breve",
    services: [
      {
        title: "Acolhimento Humanizado",
        body: "Recebemos cada paciente com escuta ativa, sem julgamento. Nosso primeiro passo é entender sua história, suas necessidades e seus medos.",
      },
      {
        title: "Orientação sobre Cannabis Medicinal",
        body: "Oferecemos informação qualificada sobre o uso medicinal, indicações, formas de uso e expectativas realistas de tratamento.",
      },
      {
        title: "Conexão com Médicos Parceiros",
        body: "Conectamos pacientes a médicos prescritores habilitados e sensíveis ao tratamento com cannabis medicinal.",
      },
      {
        title: "Suporte Jurídico",
        body: "Orientação sobre direitos do paciente, habeas corpus preventivo, salvo-conduto e processos junto à Anvisa.",
      },
      {
        title: "Cultivo Associativo",
        body: "Cultivo coletivo de cannabis para fins medicinais, garantindo qualidade, rastreabilidade e custo acessível aos associados.",
      },
      {
        title: "Programa de Acesso Solidário",
        body: "Acesso a fitoterápicos à base de cannabis para pacientes em situação de vulnerabilidade social.",
      },
    ],
    stepsOverline: "Articulus Secundus — Passo a Passo",
    stepsHeading: "Como funciona na prática",
    stepLabel: "Etapa",
    passos: [
      { title: "Entre em contato", body: "Fale conosco por WhatsApp ou formulário." },
      { title: "Receba orientação", body: "Nossa equipe vai entender sua situação." },
      { title: "Conecte-se", body: "Encaminhamos para médico ou advogado parceiro." },
      { title: "Acompanhamento", body: "Suporte contínuo durante seu tratamento." },
    ],
  },
  en: {
    metaTitle: "What We Do",
    metaDescription:
      "Discover what Diamba Sagrada offers: humanized welcoming, guidance on medical cannabis, connection to physicians, and legal support.",
    folio: "Folio III",
    crumbHome: "Home",
    crumbCurrent: "What We Do",
    heroTitle: "What we do",
    heroSubtitle:
      "Discover the services and support we offer to our members.",
    servicesOverline: "Articulus Primus — Our Services",
    servicesHeading: "How we support our patients",
    comingSoon: "Coming soon",
    services: [
      {
        title: "Humanized Welcoming",
        body: "We receive every patient with active, non-judgmental listening. Our first step is to understand your story, your needs and your fears.",
      },
      {
        title: "Guidance on Medical Cannabis",
        body: "We offer qualified information on medicinal use, indications, methods of use and realistic treatment expectations.",
      },
      {
        title: "Connection to Partner Physicians",
        body: "We connect patients to licensed prescribing physicians who are attuned to treatment with medical cannabis.",
      },
      {
        title: "Legal Support",
        body: "Guidance on patient rights, preventive habeas corpus, safe-conduct orders and proceedings with Anvisa.",
      },
      {
        title: "Associative Cultivation",
        body: "Collective cultivation of cannabis for medicinal purposes, ensuring quality, traceability and affordable cost for members.",
      },
      {
        title: "Solidarity Access Program",
        body: "Access to cannabis-based herbal medicines for patients in situations of social vulnerability.",
      },
    ],
    stepsOverline: "Articulus Secundus — Step by Step",
    stepsHeading: "How it works in practice",
    stepLabel: "Step",
    passos: [
      { title: "Get in touch", body: "Reach out via WhatsApp or our form." },
      { title: "Receive guidance", body: "Our team will understand your situation." },
      { title: "Connect", body: "We refer you to a partner physician or lawyer." },
      { title: "Follow-up", body: "Ongoing support throughout your treatment." },
    ],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = copy[locale];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
  };
}

export default async function OQueFazemosPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero
        folio={t.folio}
        crumbs={[
          { label: t.crumbHome, href: "/" },
          { label: t.crumbCurrent },
        ]}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
      />

      {/* Services grid — 2-column zig-zag (skill rule: no 3-equal cards) */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-16">
            <SectionOverline>{t.servicesOverline}</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-[1.05] max-w-[28ch]">
              {t.servicesHeading}
            </h2>
          </Reveal>

          <ul className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
            {t.services.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 90}
                className={i % 2 === 1 ? "md:translate-y-12" : ""}
              >
                <article className="relative border-t border-[var(--rule-strong)] pt-10">
                  <span className="absolute -top-[0.7rem] left-0 bg-paper pr-3 font-display italic font-medium text-[2.4rem] leading-none text-gold-leaf">
                    {serviceMeta[i].numeral}
                  </span>
                  {serviceMeta[i].comingSoon ? (
                    <span
                      className="absolute top-3 right-0 px-2 py-1 border border-gold-leaf text-gold-leaf text-[0.72rem] tracking-[0.18em]"
                      style={{ fontVariant: "small-caps" }}
                    >
                      {t.comingSoon}
                    </span>
                  ) : null}
                  <h3 className="font-display italic font-medium text-ink text-[clamp(1.4rem,2vw,1.7rem)] mb-2.5">
                    {s.title}
                  </h3>
                  <p className="font-body text-ink-soft text-[1rem] leading-[1.75] max-w-[44ch]">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Passo a passo */}
      <section className="py-[clamp(5rem,9vw,8rem)] border-y border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <SectionOverline>{t.stepsOverline}</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              {t.stepsHeading}
            </h2>
          </Reveal>
          <ol className="grid gap-10 md:grid-cols-4">
            {t.passos.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 110} className="text-center">
                <span
                  className="font-display italic text-gold-leaf text-[0.8rem] tracking-[0.22em] block mb-2"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.stepLabel} {passoMeta[i].n}
                </span>
                <h3 className="font-display italic font-medium text-ink text-xl mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-ink-soft text-[0.92rem] leading-[1.7] max-w-[28ch] mx-auto">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
