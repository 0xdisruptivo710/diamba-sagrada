import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CodexAsterism } from "@/components/ornaments";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos e condições de uso do site e dos serviços oferecidos pela Diamba Sagrada — associação de pacientes de cannabis medicinal.",
};

const sections: { title: string; body: string[] }[] = [
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
];

export default function TermosPage() {
  return (
    <>
      <PageHero
        folio="Fólio XI"
        crumbs={[{ label: "Início", href: "/" }, { label: "Termos de Uso" }]}
        title="Termos de Uso"
        subtitle="Atualizados em maio de 2026."
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
            Para esclarecimentos, escreva para{" "}
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
