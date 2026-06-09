import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CTAFinal } from "@/components/codex/cta-final";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    meta: {
      title: "Área Jurídica",
      description:
        "Direitos do paciente, habeas corpus preventivo, importação de produtos. Conheça os direitos garantidos por lei e nossa atuação jurídica.",
    },
    hero: {
      folio: "Fólio V",
      crumbInicio: "Início",
      crumbJuridico: "Jurídico",
      title: "Área jurídica",
      subtitle:
        "Conheça seus direitos como paciente e a forma como atuamos para garanti-los.",
    },
    direitosOverline: "Articulus Primus — Direitos Fundamentais",
    direitosHeading: "Seus direitos como paciente",
    direitos: [
      {
        title: "Direito ao Tratamento",
        body:
          "Pacientes com prescrição médica têm direito ao acesso legal a produtos à base de cannabis para fins terapêuticos, conforme regulamentação vigente.",
      },
      {
        title: "Habeas Corpus Preventivo",
        body:
          "Proteção legal para cultivo autorizado judicialmente. Decisões reconhecem o direito ao cultivo próprio para uso medicinal em diversos casos.",
      },
      {
        title: "Importação de Produtos",
        body:
          "A ANVISA permite a importação de produtos à base de cannabis com receita médica e laudo técnico, garantindo acesso a tratamentos de qualidade.",
      },
      {
        title: "Sigilo Médico",
        body:
          "Seus dados médicos são protegidos por lei. O sigilo entre paciente e profissional de saúde é garantido pelo Código de Ética Médica e pela LGPD.",
      },
      {
        title: "Associação Legal",
        body:
          "Participar de uma associação de pacientes é legal e amparado pela Constituição Federal, que garante a liberdade de associação.",
      },
      {
        title: "Direito à Informação",
        body:
          "Acesso a informações claras sobre seu tratamento é um direito fundamental. Você tem o direito de entender cada etapa do processo terapêutico.",
      },
    ],
    leiOverline: "Articulus Secundus — Legislação",
    leiHeading: "O que a lei permite",
    leiHeaders: ["Permitido", "Requer Cuidado", "Não Permitido"],
    lei: [
      {
        permitted: "Usar cannabis com prescrição médica",
        careful: "Transportar sem documentação",
        forbidden: "Vender ou comercializar",
      },
      {
        permitted: "Importar via ANVISA com receita",
        careful: "Cultivo sem autorização judicial",
        forbidden: "Portar sem receita médica",
      },
      {
        permitted: "Participar de associação de pacientes",
        careful: "Compartilhar com outros pacientes",
        forbidden: "Propaganda ou incentivo recreativo",
      },
      {
        permitted: "Adquirir de associação autorizada",
        careful: "Produzir sem acompanhamento técnico",
        forbidden: "Dirigir sob efeito",
      },
    ],
    atuacaoOverline: "Articulus Tertius — Nossa Atuação",
    atuacaoHeading: "Como atuamos juridicamente",
    atuacao: [
      {
        title: "Orientação Preventiva",
        body: "Esclarecemos seus direitos antes de qualquer problema. Informação qualificada é a melhor prevenção.",
      },
      {
        title: "Acompanhamento de Casos",
        body: "Apoio jurídico em processos administrativos e judiciais. Acompanhamos cada etapa para garantir seus direitos.",
      },
      {
        title: "Advocacy e Políticas Públicas",
        body: "Atuamos para ampliar o acesso legal à cannabis medicinal no Brasil, participando de discussões legislativas.",
      },
    ],
    complianceOverline: "Compromisso Legal",
    complianceHeading: "Transparência e responsabilidade em cada ação",
    complianceBody:
      "A Diamba Sagrada opera rigorosamente dentro da legislação brasileira. Respeitamos as regulamentações da ANVISA, seguimos os protocolos exigidos para associações de pacientes e garantimos a proteção dos dados pessoais e de saúde de todos os associados em conformidade com a LGPD. Nosso compromisso é com a transparência, a legalidade e a dignidade de cada paciente.",
  },
  en: {
    meta: {
      title: "Legal Area",
      description:
        "Patient rights, preventive Habeas Corpus, product importation. Learn about the rights guaranteed by law and our legal advocacy.",
    },
    hero: {
      folio: "Folio V",
      crumbInicio: "Home",
      crumbJuridico: "Legal",
      title: "Legal area",
      subtitle:
        "Learn about your rights as a patient and how we work to guarantee them.",
    },
    direitosOverline: "Articulus Primus — Fundamental Rights",
    direitosHeading: "Your rights as a patient",
    direitos: [
      {
        title: "Right to Treatment",
        body:
          "Patients with a medical prescription have the right to legal access to cannabis-based products for therapeutic purposes, in accordance with current regulations.",
      },
      {
        title: "Preventive Habeas Corpus",
        body:
          "Legal protection for judicially authorized cultivation. Court rulings recognize the right to grow one's own plants for medical use in many cases.",
      },
      {
        title: "Product Importation",
        body:
          "Anvisa permits the importation of cannabis-based products with a medical prescription and technical report, ensuring access to quality treatments.",
      },
      {
        title: "Medical Confidentiality",
        body:
          "Your medical data is protected by law. Confidentiality between patient and healthcare professional is guaranteed by the Code of Medical Ethics and the LGPD (Brazilian data protection law).",
      },
      {
        title: "Lawful Association",
        body:
          "Taking part in a patient association is lawful and protected by the Federal Constitution, which guarantees freedom of association.",
      },
      {
        title: "Right to Information",
        body:
          "Access to clear information about your treatment is a fundamental right. You have the right to understand every stage of the therapeutic process.",
      },
    ],
    leiOverline: "Articulus Secundus — Legislation",
    leiHeading: "What the law allows",
    leiHeaders: ["Allowed", "Requires Caution", "Not Allowed"],
    lei: [
      {
        permitted: "Using cannabis with a medical prescription",
        careful: "Transporting without documentation",
        forbidden: "Selling or commercializing",
      },
      {
        permitted: "Importing via Anvisa with a prescription",
        careful: "Cultivation without judicial authorization",
        forbidden: "Carrying without a medical prescription",
      },
      {
        permitted: "Taking part in a patient association",
        careful: "Sharing with other patients",
        forbidden: "Recreational advertising or promotion",
      },
      {
        permitted: "Acquiring from an authorized association",
        careful: "Producing without technical supervision",
        forbidden: "Driving under the influence",
      },
    ],
    atuacaoOverline: "Articulus Tertius — Our Advocacy",
    atuacaoHeading: "How we provide legal support",
    atuacao: [
      {
        title: "Preventive Guidance",
        body: "We clarify your rights before any problem arises. Qualified information is the best prevention.",
      },
      {
        title: "Case Support",
        body: "Legal support in administrative proceedings and lawsuits. We follow every step to safeguard your rights.",
      },
      {
        title: "Advocacy and Public Policy",
        body: "We work to expand legal access to medical cannabis in Brazil, taking part in legislative discussions.",
      },
    ],
    complianceOverline: "Legal Commitment",
    complianceHeading: "Transparency and responsibility in every action",
    complianceBody:
      "Diamba Sagrada operates strictly within Brazilian law. We respect Anvisa's regulations, follow the protocols required for patient associations, and ensure the protection of the personal and health data of all members in compliance with the LGPD (Brazilian data protection law). Our commitment is to transparency, legality and the dignity of every patient.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = copy[locale];
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function AreaJuridicaPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero
        folio={t.hero.folio}
        crumbs={[{ label: t.hero.crumbInicio, href: "/" }, { label: t.hero.crumbJuridico }]}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      {/* Direitos grid */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-14">
            <SectionOverline>{t.direitosOverline}</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              {t.direitosHeading}
            </h2>
          </Reveal>
          <ul className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {t.direitos.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 80} className={i % 3 === 1 ? "lg:translate-y-8" : ""}>
                <article className="relative border-t border-[var(--rule-strong)] pt-7">
                  <span className="absolute -top-[0.6rem] left-0 bg-paper pr-3 font-display italic font-medium text-[1.6rem] leading-none text-gold-leaf">
                    §{i + 1}
                  </span>
                  <h3 className="font-display italic font-medium text-ink text-[1.3rem] mb-2">
                    {d.title}
                  </h3>
                  <p className="font-body text-ink-soft text-[0.98rem] leading-[1.75]">
                    {d.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* O que a lei permite */}
      <section className="py-[clamp(5rem,9vw,8rem)] border-y border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-12">
            <SectionOverline>{t.leiOverline}</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              {t.leiHeading}
            </h2>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse font-body">
                <thead>
                  <tr className="border-b-2 border-gold-leaf">
                    {t.leiHeaders.map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="text-left p-4 font-display italic font-medium text-gold-leaf text-[0.85rem] tracking-[0.18em]"
                        style={{ fontVariant: "small-caps" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.lei.map((row, i) => (
                    <tr key={i} className="border-b border-[var(--rule)]">
                      <td className="p-4 text-ink text-[0.95rem]">{row.permitted}</td>
                      <td className="p-4 text-sepia text-[0.95rem]">{row.careful}</td>
                      <td className="p-4 text-vermilion text-[0.95rem]">{row.forbidden}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Atuação */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-14">
            <SectionOverline>{t.atuacaoOverline}</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              {t.atuacaoHeading}
            </h2>
          </Reveal>
          <ul className="grid gap-12 md:grid-cols-3">
            {t.atuacao.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 110}>
                <article>
                  <h3 className="font-display italic font-medium text-ink text-[1.3rem] mb-2">
                    {a.title}
                  </h3>
                  <p className="font-body text-ink-soft text-[0.98rem] leading-[1.75] max-w-[40ch]">
                    {a.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-[clamp(4rem,7vw,6rem)] border-t border-[var(--rule)] [background:linear-gradient(180deg,transparent,rgba(216,201,162,0.18),transparent)]">
        <div className="mx-auto max-w-[880px] px-6 md:px-12">
          <Reveal>
            <SectionOverline>{t.complianceOverline}</SectionOverline>
            <h3 className="mt-3 mb-5 font-display italic font-medium text-ink text-[clamp(1.7rem,3vw,2.2rem)] leading-tight">
              {t.complianceHeading}
            </h3>
            <p className="font-body text-ink-soft text-[1.02rem] leading-[1.85]">
              {t.complianceBody}
            </p>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
