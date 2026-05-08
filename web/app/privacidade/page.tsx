import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CodexAsterism } from "@/components/ornaments";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Diamba Sagrada coleta, trata e protege os dados pessoais de pacientes, associados e visitantes em conformidade com a LGPD.",
};

const sections: { title: string; body: string[] }[] = [
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
];

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        folio="Fólio X"
        crumbs={[{ label: "Início", href: "/" }, { label: "Política de Privacidade" }]}
        title="Política de Privacidade"
        subtitle="Em conformidade com a LGPD. Atualizada em maio de 2026."
      />

      <article className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[760px] px-6 md:px-12">
          {sections.map((s, i) => (
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
            Em caso de dúvidas, escreva para{" "}
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
