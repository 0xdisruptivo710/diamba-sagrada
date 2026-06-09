import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CodexAsterism } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    metaTitle: "Termos de Uso",
    metaDescription:
      "Termos e condições de uso do site e dos serviços oferecidos pela Diamba Sagrada — associação de pacientes de cannabis medicinal.",
    heroFolio: "Fólio XI",
    heroCrumbHome: "Início",
    heroCrumbCurrent: "Termos de Uso",
    heroTitle: "Termos de Uso",
    heroSubtitle: "Atualizados em maio de 2026.",
    contactLead: "Para esclarecimentos, escreva para",
    sections: [
      {
        title: "I. Objeto",
        body: [
          "Estes Termos regem o uso do site da Diamba Sagrada e dos serviços de acolhimento, orientação e suporte oferecidos por nossa associação. Ao navegar pelo site ou utilizar nossos serviços, você declara ciência e concordância com estas condições.",
        ],
      },
      {
        title: "II. Natureza dos serviços",
        body: [
          "A Diamba Sagrada é uma associação sem fins lucrativos. Não comercializamos produtos à base de cannabis. Nosso papel é o de acolher, orientar e conectar pacientes a profissionais habilitados (médicos prescritores e advogados) e a informações qualificadas.",
          "Nenhum conteúdo deste site substitui consulta médica. Toda decisão terapêutica deve ser tomada em diálogo com um médico habilitado.",
        ],
      },
      {
        title: "III. Cadastro e veracidade",
        body: [
          "Ao se cadastrar, você se compromete a fornecer informações verdadeiras e atualizadas. Dados imprecisos podem comprometer o acolhimento e a qualidade do encaminhamento.",
        ],
      },
      {
        title: "IV. Conduta esperada",
        body: [
          "Ao utilizar nossos canais, você concorda em não compartilhar conteúdo difamatório, ilegal, ofensivo ou que infrinja direitos de terceiros, e em respeitar a privacidade e dignidade de outros pacientes e colaboradores.",
        ],
      },
      {
        title: "V. Propriedade intelectual",
        body: [
          "Os conteúdos publicados no site (textos, imagens, ilustrações, marca, identidade visual) são protegidos por lei. Você pode citá-los e compartilhá-los para fins não comerciais, com a devida atribuição. Reproduções comerciais ou modificações requerem autorização prévia.",
        ],
      },
      {
        title: "VI. Limitação de responsabilidade",
        body: [
          "A Diamba Sagrada empenha-se em manter o site disponível e atualizado, mas não se responsabiliza por interrupções pontuais, indisponibilidade temporária ou eventuais imprecisões em conteúdos informativos. Em caso de dúvida clínica ou jurídica, consulte sempre um profissional habilitado.",
        ],
      },
      {
        title: "VII. Privacidade",
        body: [
          "O tratamento de dados pessoais é regido por nossa Política de Privacidade, em conformidade com a LGPD.",
        ],
      },
      {
        title: "VIII. Modificações",
        body: [
          "Estes Termos podem ser atualizados sem aviso prévio. A versão vigente é sempre a publicada nesta página, com data de última atualização.",
        ],
      },
      {
        title: "IX. Foro",
        body: [
          "Para dirimir quaisquer questões relativas a estes Termos, fica eleito o foro da comarca da sede da associação, com renúncia a qualquer outro, por mais privilegiado que seja.",
        ],
      },
    ],
  },
  en: {
    metaTitle: "Terms of Use",
    metaDescription:
      "Terms and conditions of use of the website and of the services offered by Diamba Sagrada — a medical cannabis patient association.",
    heroFolio: "Folio XI",
    heroCrumbHome: "Home",
    heroCrumbCurrent: "Terms of Use",
    heroTitle: "Terms of Use",
    heroSubtitle: "Updated in May 2026.",
    contactLead: "For clarifications, write to",
    sections: [
      {
        title: "I. Purpose",
        body: [
          "These Terms govern the use of the Diamba Sagrada website and of the patient-support, guidance, and assistance services offered by our association. By browsing the website or using our services, you acknowledge and agree to these conditions.",
        ],
      },
      {
        title: "II. Nature of the services",
        body: [
          "Diamba Sagrada is a non-profit association. We do not sell cannabis-based products. Our role is to support, guide, and connect patients to qualified professionals (prescribing physicians and lawyers) and to reliable information.",
          "No content on this website is a substitute for medical consultation. Every therapeutic decision must be made in dialogue with a qualified physician.",
        ],
      },
      {
        title: "III. Registration and accuracy",
        body: [
          "When registering, you undertake to provide truthful and up-to-date information. Inaccurate data may compromise the support provided and the quality of the referral.",
        ],
      },
      {
        title: "IV. Expected conduct",
        body: [
          "When using our channels, you agree not to share defamatory, illegal, or offensive content, or content that infringes the rights of third parties, and to respect the privacy and dignity of other patients and collaborators.",
        ],
      },
      {
        title: "V. Intellectual property",
        body: [
          "The content published on the website (texts, images, illustrations, trademark, visual identity) is protected by law. You may quote and share it for non-commercial purposes, with due attribution. Commercial reproduction or modifications require prior authorization.",
        ],
      },
      {
        title: "VI. Limitation of liability",
        body: [
          "Diamba Sagrada strives to keep the website available and up to date, but is not liable for occasional interruptions, temporary unavailability, or any inaccuracies in informational content. In case of a clinical or legal question, always consult a qualified professional.",
        ],
      },
      {
        title: "VII. Privacy",
        body: [
          "The processing of personal data is governed by our Privacy Policy, in compliance with the LGPD (Brazil's General Data Protection Law).",
        ],
      },
      {
        title: "VIII. Amendments",
        body: [
          "These Terms may be updated without prior notice. The version in force is always the one published on this page, with its last-updated date.",
        ],
      },
      {
        title: "IX. Jurisdiction (venue)",
        body: [
          "To settle any matters relating to these Terms, the courts of the judicial district (comarca) of the association's registered office are hereby elected, with waiver of any other, however privileged it may be.",
        ],
      },
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

export default async function TermosPage() {
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

      <article className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[760px] px-6 md:px-12">
          {t.sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <section className="mb-12">
                <h2 className="font-display italic font-medium text-ink text-[clamp(1.4rem,2.4vw,1.85rem)] leading-tight mb-4">
                  {s.title}
                </h2>
                {s.body.map((p, j) => (
                  <p
                    key={j}
                    className="font-body text-ink-soft text-[1.02rem] leading-[1.85] mb-3 text-justify hyphens-auto"
                  >
                    {p}
                  </p>
                ))}
              </section>
            </Reveal>
          ))}

          <CodexAsterism />

          <p className="text-center font-display italic text-ink-soft text-[0.92rem]">
            {t.contactLead}{" "}
            <a
              href="mailto:contato@diambasagrada.org.br"
              className="text-gold-leaf hover:underline"
            >
              contato@diambasagrada.org.br
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
}
