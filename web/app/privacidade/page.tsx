import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CodexAsterism } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    metaTitle: "Política de Privacidade",
    metaDescription:
      "Como a Diamba Sagrada coleta, trata e protege os dados pessoais de pacientes, associados e visitantes em conformidade com a LGPD.",
    heroFolio: "Fólio X",
    heroCrumbHome: "Início",
    heroCrumbCurrent: "Política de Privacidade",
    heroTitle: "Política de Privacidade",
    heroSubtitle: "Em conformidade com a LGPD. Atualizada em maio de 2026.",
    sections: [
      {
        title: "I. Quem somos e a quem se aplica esta política",
        body: [
          "A Diamba Sagrada é uma associação de pacientes sem fins lucrativos, dedicada ao acesso seguro, legal e humanizado à cannabis medicinal. Esta Política de Privacidade aplica-se a todos os dados pessoais tratados por nós: visitantes do site, associados, pacientes em acolhimento, médicos parceiros e demais colaboradores.",
        ],
      },
      {
        title: "II. Dados que coletamos",
        body: [
          "Coletamos apenas os dados necessários para acolher, orientar e acompanhar nossos associados. Isto inclui: nome completo, contato (email, telefone), cidade e estado, vínculo com o tratamento (paciente, familiar, profissional), informações clínicas voluntariamente compartilhadas, prescrições médicas e documentação relacionada quando enviadas por você.",
          "Em nenhuma hipótese coletamos dados sensíveis sem sua autorização explícita.",
        ],
      },
      {
        title: "III. Bases legais e finalidades",
        body: [
          "Tratamos dados com base nas seguintes hipóteses da LGPD: consentimento (para comunicações opcionais), execução de procedimentos preliminares ao contrato associativo, cumprimento de obrigação legal e proteção da vida ou da saúde do titular.",
          "As finalidades são: acolhimento e orientação inicial, encaminhamento a médicos parceiros, suporte jurídico, gestão associativa e comunicação institucional.",
        ],
      },
      {
        title: "IV. Compartilhamento",
        body: [
          "Os dados são compartilhados apenas com profissionais parceiros estritamente necessários ao seu atendimento (médicos, advogados) e mediante seu conhecimento. Nunca vendemos, alugamos ou cedemos dados pessoais a terceiros para fins comerciais.",
        ],
      },
      {
        title: "V. Segurança",
        body: [
          "Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acesso não autorizado, alteração, destruição ou divulgação indevida. Documentos sensíveis são armazenados com criptografia e o acesso é restrito à equipe autorizada.",
        ],
      },
      {
        title: "VI. Seus direitos",
        body: [
          "Você pode, a qualquer momento: confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar anonimização ou exclusão de dados desnecessários, revogar consentimento e solicitar portabilidade.",
          "Para exercer qualquer desses direitos, escreva para contato@diambasagrada.org.br.",
        ],
      },
      {
        title: "VII. Retenção e exclusão",
        body: [
          "Mantemos seus dados pelo tempo necessário às finalidades descritas ou conforme exigência legal. Após esse período, os dados são anonimizados ou excluídos de forma segura.",
        ],
      },
      {
        title: "VIII. Cookies",
        body: [
          "Este site utiliza apenas cookies estritamente necessários ao seu funcionamento. Não usamos rastreadores publicitários nem analytics invasivos.",
        ],
      },
      {
        title: "IX. Atualizações",
        body: [
          "Esta política pode ser atualizada para refletir mudanças legais, técnicas ou organizacionais. Alterações relevantes serão comunicadas pelos canais oficiais.",
        ],
      },
    ],
    contactPrefix: "Em caso de dúvidas, escreva para",
  },
  en: {
    metaTitle: "Privacy Policy",
    metaDescription:
      "How Diamba Sagrada collects, processes and protects the personal data of patients, members and visitors in compliance with the LGPD (Brazil's General Data Protection Law).",
    heroFolio: "Folio X",
    heroCrumbHome: "Home",
    heroCrumbCurrent: "Privacy Policy",
    heroTitle: "Privacy Policy",
    heroSubtitle:
      "In compliance with the LGPD (Brazil's General Data Protection Law). Updated in May 2026.",
    sections: [
      {
        title: "I. Who we are and to whom this policy applies",
        body: [
          "Diamba Sagrada is a non-profit patient association dedicated to safe, lawful and humane access to medical cannabis. This Privacy Policy applies to all personal data processed by us: website visitors, members, patients under our care, partner physicians and other collaborators.",
        ],
      },
      {
        title: "II. Data we collect",
        body: [
          "We collect only the data necessary to welcome, guide and accompany our members. This includes: full name, contact information (email, phone), city and state, relationship to the treatment (patient, family member, professional), clinical information voluntarily shared, medical prescriptions and related documentation when sent by you.",
          "Under no circumstances do we collect sensitive data without your explicit authorization.",
        ],
      },
      {
        title: "III. Legal bases and purposes",
        body: [
          "We process data on the basis of the following legal grounds under the LGPD: consent (for optional communications), the carrying out of preliminary procedures related to the membership agreement, compliance with a legal obligation, and the protection of the life or health of the data subject.",
          "The purposes are: initial welcoming and guidance, referral to partner physicians, legal support, membership management and institutional communication.",
        ],
      },
      {
        title: "IV. Sharing",
        body: [
          "Data is shared only with partner professionals strictly necessary for your care (physicians, lawyers) and with your knowledge. We never sell, rent or transfer personal data to third parties for commercial purposes.",
        ],
      },
      {
        title: "V. Security",
        body: [
          "We adopt reasonable technical and administrative measures to protect data against unauthorized access, alteration, destruction or improper disclosure. Sensitive documents are stored with encryption and access is restricted to authorized staff.",
        ],
      },
      {
        title: "VI. Your rights",
        body: [
          "You may, at any time: confirm the existence of data processing, access your data, correct incomplete or outdated data, request the anonymization or deletion of unnecessary data, revoke consent and request data portability.",
          "To exercise any of these rights, write to contato@diambasagrada.org.br.",
        ],
      },
      {
        title: "VII. Retention and deletion",
        body: [
          "We retain your data for as long as necessary for the purposes described or as required by law. After that period, the data is anonymized or securely deleted.",
        ],
      },
      {
        title: "VIII. Cookies",
        body: [
          "This website uses only cookies strictly necessary for its operation. We do not use advertising trackers or invasive analytics.",
        ],
      },
      {
        title: "IX. Updates",
        body: [
          "This policy may be updated to reflect legal, technical or organizational changes. Relevant changes will be communicated through the official channels.",
        ],
      },
    ],
    contactPrefix: "If you have any questions, write to",
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

export default async function PrivacidadePage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero
        folio={t.heroFolio}
        crumbs={[{ label: t.heroCrumbHome, href: "/" }, { label: t.heroCrumbCurrent }]}
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
            {t.contactPrefix}{" "}
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
