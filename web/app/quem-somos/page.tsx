import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CTAFinal } from "@/components/codex/cta-final";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    metaTitle: "Quem Somos",
    metaDescription:
      "Conheça a história, os valores e as pessoas por trás da Diamba Sagrada — associação brasileira de pacientes de cannabis medicinal.",
    heroFolio: "Fólio II",
    heroCrumbHome: "Início",
    heroCrumbCurrent: "Quem Somos",
    heroTitle: "Quem somos",
    heroSubtitle:
      "Conheça a história, os valores e as pessoas por trás da Diamba Sagrada.",
    trajOverline: "Nossa Trajetória",
    trajHeading: "Como tudo começou",
    trajIntro:
      "A Diamba Sagrada nasceu da dor transformada em propósito. Um grupo de pacientes e familiares, cansados da burocracia e do preconceito, decidiu unir forças para garantir que ninguém mais precisasse lutar sozinho pelo direito ao tratamento com cannabis medicinal. O que começou como uma rede informal de apoio, hoje é uma associação comprometida com o acolhimento, a legalidade e a dignidade de cada paciente.",
    timelineLabel: "Linha do tempo da associação",
    annoLabel: "Anno",
    trajetoria: [
      {
        year: "MMXXIII",
        title: "A semente",
        body:
          "Fundadores começam a pesquisar sobre cannabis medicinal após experiências pessoais com pacientes próximos que não encontravam acesso a tratamentos adequados.",
      },
      {
        year: "MMXXIV",
        title: "Primeiras raízes",
        body:
          "Formação do grupo de apoio e início das consultorias jurídicas para orientar pacientes sobre seus direitos e caminhos legais de acesso.",
      },
      {
        year: "MMXXIV",
        title: "Formalização",
        body:
          "Registro oficial como associação sem fins lucrativos, consolidando a estrutura jurídica e administrativa para atuar de forma transparente.",
      },
      {
        year: "MMXXV",
        title: "Crescimento",
        body:
          "Ampliação da rede de médicos parceiros e início do acolhimento estruturado, com protocolos de atendimento humanizado e suporte contínuo.",
      },
      {
        year: "Futuro",
        title: "A florada",
        body:
          "Cultivo associativo e produção própria de fitoterápicos. Nosso objetivo futuro para garantir acesso a produtos seguros e acessíveis a todos.",
      },
    ],
    mvvOverline: "Nosso propósito",
    mvvHeading: "Missão, Visão e Valores",
    mvv: [
      {
        label: "Missão",
        body:
          "Promover o acesso à cannabis medicinal de forma segura, legal e acessível, garantindo acolhimento, orientação e suporte a todos que precisam.",
      },
      {
        label: "Visão",
        body:
          "Ser referência nacional em cuidado integrativo com cannabis medicinal, construindo uma rede de apoio que une ciência, humanidade e sabedoria ancestral.",
      },
      {
        label: "Valores",
        body:
          "Acolhimento sem julgamento. Transparência em tudo. Respeito pela lei e pelos direitos. Cuidado integral. Compromisso com a dignidade.",
      },
    ],
    nowOverline: "Articulus — Estado Atual",
    nowHeading: "Onde estamos agora",
    nowBody1:
      "Acreditamos que a transparência é a base de qualquer relação de confiança. Por isso queremos ser honestos. Ainda estamos em fase de construção. Não cultivamos cannabis e não fornecemos óleo, ainda. Nosso foco atual é construir uma rede sólida de profissionais, estruturar o suporte jurídico e, acima de tudo, acolher cada paciente que chega até nós.",
    nowBody2:
      "Cada etapa é construída com responsabilidade, dentro da lei e com o compromisso de entregar o melhor para nossos associados.",
    activeLabel: "Ativo agora",
    soonLabel: "Em breve",
    ativo: [
      "Acolhimento e orientação de pacientes",
      "Rede de médicos parceiros",
      "Suporte jurídico básico",
    ],
    emBreve: [
      "Cultivo associativo",
      "Produção de fitoterápicos",
      "Programa de acesso solidário",
    ],
  },
  en: {
    metaTitle: "About Us",
    metaDescription:
      "Meet the history, the values and the people behind Diamba Sagrada — a Brazilian association of medical cannabis patients.",
    heroFolio: "Folio II",
    heroCrumbHome: "Home",
    heroCrumbCurrent: "About Us",
    heroTitle: "About us",
    heroSubtitle:
      "Meet the history, the values and the people behind Diamba Sagrada.",
    trajOverline: "Our Journey",
    trajHeading: "How it all began",
    trajIntro:
      "Diamba Sagrada was born from pain turned into purpose. A group of patients and families, weary of bureaucracy and prejudice, decided to join forces so that no one else would have to fight alone for the right to treatment with medical cannabis. What began as an informal support network is today an association committed to welcoming, lawfulness and the dignity of every patient.",
    timelineLabel: "Association timeline",
    annoLabel: "Anno",
    trajetoria: [
      {
        year: "MMXXIII",
        title: "The seed",
        body:
          "The founders begin researching medical cannabis after personal experiences with loved ones who could not find access to adequate treatment.",
      },
      {
        year: "MMXXIV",
        title: "First roots",
        body:
          "Formation of the support group and the start of legal consultations to guide patients on their rights and the lawful paths to access.",
      },
      {
        year: "MMXXIV",
        title: "Formalization",
        body:
          "Official registration as a non-profit association, consolidating the legal and administrative structure to operate transparently.",
      },
      {
        year: "MMXXV",
        title: "Growth",
        body:
          "Expansion of the network of partner physicians and the start of structured welcoming, with protocols for humane care and ongoing support.",
      },
      {
        year: "Futuro",
        title: "The bloom",
        body:
          "Associative cultivation and our own production of herbal medicines. Our future goal to guarantee access to safe and affordable products for all.",
      },
    ],
    mvvOverline: "Our purpose",
    mvvHeading: "Mission, Vision and Values",
    mvv: [
      {
        label: "Mission",
        body:
          "To promote access to medical cannabis in a safe, lawful and affordable way, ensuring welcoming, guidance and support for everyone who needs it.",
      },
      {
        label: "Vision",
        body:
          "To be a national reference in integrative care with medical cannabis, building a support network that unites science, humanity and ancestral wisdom.",
      },
      {
        label: "Values",
        body:
          "Welcoming without judgment. Transparency in everything. Respect for the law and for rights. Whole-person care. Commitment to dignity.",
      },
    ],
    nowOverline: "Articulus — Current State",
    nowHeading: "Where we are now",
    nowBody1:
      "We believe transparency is the foundation of any relationship of trust. That is why we want to be honest. We are still in a building phase. We do not yet cultivate cannabis and we do not yet supply oil. Our current focus is to build a solid network of professionals, structure legal support and, above all, welcome every patient who comes to us.",
    nowBody2:
      "Every step is built responsibly, within the law and with the commitment to deliver the best for our members.",
    activeLabel: "Active now",
    soonLabel: "Coming soon",
    ativo: [
      "Welcoming and guidance for patients",
      "Network of partner physicians",
      "Basic legal support",
    ],
    emBreve: [
      "Associative cultivation",
      "Production of herbal medicines",
      "Solidarity access program",
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

export default async function QuemSomosPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero
        folio={t.heroFolio}
        crumbs={[
          { label: t.heroCrumbHome, href: "/" },
          { label: t.heroCrumbCurrent },
        ]}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
      />

      {/* Trajetória */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-16 max-w-[60ch]">
            <SectionOverline>{t.trajOverline}</SectionOverline>
            <h2 className="mt-3 mb-5 font-display italic font-medium text-ink leading-[1.05] text-[clamp(2rem,3.8vw,2.85rem)]">
              {t.trajHeading}
            </h2>
            <p className="font-body text-ink-soft text-[1.05rem] leading-[1.85] indent-6">
              {t.trajIntro}
            </p>
          </Reveal>

          <ol
            role="list"
            aria-label={t.timelineLabel}
            className="relative max-w-[700px] mx-auto pl-12"
          >
            <span
              aria-hidden
              className="absolute left-2 top-0 bottom-0 w-px [background:linear-gradient(180deg,var(--color-gold-leaf),var(--rule-strong))] opacity-70"
            />
            {t.trajetoria.map((item, i) => (
              <Reveal as="li" key={item.title + i} delay={i * 90} className="relative mb-12 last:mb-0">
                <span
                  aria-hidden
                  className="absolute -left-[2.4rem] top-1.5 size-3.5 rounded-full bg-gold-leaf border-[3px] border-paper"
                />
                <span
                  className="font-display italic font-semibold text-[0.85rem] tracking-[0.18em] text-gold-leaf block mb-1"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.annoLabel} {item.year}
                </span>
                <h3 className="font-display italic font-medium text-ink text-xl mb-1.5">
                  {item.title}
                </h3>
                <p className="font-body text-ink-soft text-[0.95rem] leading-[1.7] max-w-[55ch]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* MVV */}
      <section className="py-[clamp(5rem,9vw,8rem)] border-t border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-16 text-center">
            <SectionOverline>{t.mvvOverline}</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink leading-[1.05] text-[clamp(2rem,3.8vw,2.85rem)]">
              {t.mvvHeading}
            </h2>
          </Reveal>

          <ul className="grid gap-10 md:grid-cols-3">
            {t.mvv.map((m, i) => (
              <Reveal as="li" key={m.label} delay={i * 110}>
                <article className="border border-[var(--rule-strong)] bg-[rgba(241,232,211,0.55)] p-8 transition-[border-color,background-color,transform] duration-300 hover:border-gold-leaf hover:bg-[rgba(241,232,211,0.85)] hover:-translate-y-0.5">
                  <span
                    className="block font-display italic text-[0.78rem] tracking-[0.28em] text-gold-leaf mb-3"
                    style={{ fontVariant: "small-caps" }}
                  >
                    {m.label}
                  </span>
                  <p className="font-body text-ink-soft text-[1rem] leading-[1.8]">
                    {m.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Onde estamos agora */}
      <section className="py-[clamp(5rem,9vw,8rem)] border-t border-[var(--rule)] [background:linear-gradient(180deg,transparent,rgba(216,201,162,0.18),transparent)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <SectionOverline>{t.nowOverline}</SectionOverline>
              <h3 className="mt-3 mb-5 font-display italic font-medium text-ink text-[clamp(1.7rem,3vw,2.2rem)] leading-tight">
                {t.nowHeading}
              </h3>
              <p className="font-body text-ink-soft text-[1.02rem] leading-[1.8] mb-4">
                {t.nowBody1}
              </p>
              <p className="font-body text-ink-soft text-[1.02rem] leading-[1.8]">
                {t.nowBody2}
              </p>
            </div>

            <div>
              <h4
                className="font-display italic text-[0.85rem] tracking-[0.22em] text-gold-leaf mb-4"
                style={{ fontVariant: "small-caps" }}
              >
                {t.activeLabel}
              </h4>
              <ul className="flex flex-col gap-3 mb-8">
                {t.ativo.map((s) => (
                  <li key={s} className="flex items-start gap-3 font-body text-[0.98rem] text-ink">
                    <span aria-hidden className="mt-1 text-gold-leaf">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <h4
                className="font-display italic text-[0.85rem] tracking-[0.22em] text-sepia mb-4"
                style={{ fontVariant: "small-caps" }}
              >
                {t.soonLabel}
              </h4>
              <ul className="flex flex-col gap-3">
                {t.emBreve.map((s) => (
                  <li key={s} className="flex items-start gap-3 font-body text-[0.98rem] text-ink-soft">
                    <span aria-hidden className="mt-1 text-sepia">◐</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
