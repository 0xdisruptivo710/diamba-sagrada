import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CTAFinal } from "@/components/codex/cta-final";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { ButtonLink } from "@/components/ui";
import { siteConfig, whatsappUrl, associationConfig } from "@/lib/config";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    metaTitle: "Área Médica",
    metaDescription:
      "Conecte-se com médicos prescritores parceiros, conheça a jornada de atendimento e tire suas dúvidas sobre cannabis medicinal.",

    heroFolio: "Fólio IV",
    heroCrumbStart: "Início",
    heroCrumbCurrent: "Área Médica",
    heroTitle: "Área médica",
    heroSubtitle:
      "Conecte-se com médicos prescritores parceiros e conheça nossa jornada de atendimento humanizado.",

    connectOverline: "Articulus Primus — Conexão com médico",
    connectHeading: "Conecte-se com um médico prescritor",

    voucherTag: "Associado",
    voucherTitle: `Voucher de ${associationConfig.voucher.percent}% na primeira consulta`,
    voucherBody:
      "Ao se associar, você recebe um voucher de desconto para a primeira consulta com médico parceiro e pode anexar sua receita e laudo. Pessoas com deficiência têm consulta gratuita.",
    voucherCta: "Quero meu voucher",

    directTag: "Direto",
    directTitle: "Prefere falar agora?",
    directBody:
      "Converse com nossa equipe de acolhimento pelo WhatsApp. Orientamos sobre o atendimento médico e os próximos passos do seu tratamento.",
    directWhatsappMessage:
      "Olá! Gostaria de orientação para uma consulta médica de cannabis com a Diamba Sagrada.",
    directCta: "Falar no WhatsApp",

    partnerTag: "Para profissionais",
    partnerBody:
      "É médico e quer prescrever com a gente? Junte-se à nossa rede de parceiros.",
    partnerWhatsappMessage: `Olá! Sou médico(a) e tenho interesse em ser parceiro da ${siteConfig.name}.`,
    partnerCta: "Seja médico parceiro",

    stepsOverline: "Articulus Secundus — Passo a Passo",
    stepsHeading: "Como funciona o atendimento",
    passos: [
      {
        n: "I",
        title: "Primeiro Contato",
        body: "Fale conosco e conte sobre sua condição. Nossa equipe de acolhimento vai ouvir sua história e orientar os próximos passos.",
      },
      {
        n: "II",
        title: "Avaliação Médica",
        body: "Consulta com médico prescritor habilitado que avaliará seu quadro clínico, histórico de saúde e a indicação do tratamento.",
      },
      {
        n: "III",
        title: "Prescrição",
        body: "Receita médica personalizada com dosagem, concentração e forma de uso adequados ao seu perfil e necessidades individuais.",
      },
      {
        n: "IV",
        title: "Acompanhamento",
        body: "Suporte contínuo durante todo o tratamento. Retornos periódicos com o médico para ajustes e esclarecimento de dúvidas.",
      },
    ],

    faqOverline: "Articulus Tertius — Perguntas Frequentes",
    faqHeading: "Sobre a prescrição",
    faq: [
      {
        q: "O que é a prescrição de cannabis medicinal?",
        a: "É um documento emitido por médico habilitado que autoriza o paciente a utilizar produtos à base de cannabis para fins terapêuticos. A receita contém o tipo de produto, concentração de canabinoides (CBD e THC), dosagem e forma de administração — indispensável para a aquisição legal no Brasil.",
      },
      {
        q: "Quais condições podem ser tratadas?",
        a: "Epilepsia refratária, dor crônica, esclerose múltipla, fibromialgia, ansiedade, insônia, autismo, Parkinson, Alzheimer, náuseas e vômitos associados à quimioterapia, entre outras. A indicação sempre depende da avaliação médica individual.",
      },
      {
        q: "A consulta pode ser feita por telemedicina?",
        a: "Sim. A telemedicina é regulamentada no Brasil e muitos dos nossos médicos parceiros oferecem consultas por videochamada. A prescrição pode ser emitida digitalmente, conforme as normas vigentes.",
      },
      {
        q: "Quanto custa a consulta?",
        a: "O valor varia conforme o médico e a especialidade. Nossos parceiros oferecem condições especiais para associados, com valores acessíveis e possibilidade de parcelamento.",
      },
      {
        q: "Preciso de encaminhamento do meu médico?",
        a: "Não é obrigatório. Você pode agendar diretamente com um dos nossos médicos parceiros. Se você possui laudos, exames ou relatórios anteriores, é recomendável levá-los à consulta.",
      },
      {
        q: "A prescrição de cannabis medicinal é legal no Brasil?",
        a: "Sim. A Anvisa regulamenta a prescrição e o uso de produtos à base de cannabis. A RDC 660/2022 estabelece normas para importação por pessoa física, e a RDC 327/2019 regulamenta a fabricação e comercialização no país.",
      },
    ],

    noticeIntro:
      "Toda prescrição deve ser emitida por médico habilitado. A Diamba Sagrada facilita o acesso ao atendimento médico, mas não substitui a consulta.",
    noticeStrong: "Nunca se automedique.",
  },
  en: {
    metaTitle: "Medical Area",
    metaDescription:
      "Connect with partner prescribing physicians, learn about the care journey and get answers to your questions about medical cannabis.",

    heroFolio: "Fólio IV",
    heroCrumbStart: "Home",
    heroCrumbCurrent: "Medical Area",
    heroTitle: "Medical area",
    heroSubtitle:
      "Connect with partner prescribing physicians and discover our journey of humane, caring treatment.",

    connectOverline: "Articulus Primus — Connect with a physician",
    connectHeading: "Connect with a prescribing physician",

    voucherTag: "Member",
    voucherTitle: `${associationConfig.voucher.percent}% voucher on your first appointment`,
    voucherBody:
      "When you become a member, you receive a discount voucher for your first appointment with a partner physician, and you can attach your prescription and medical report. People with disabilities receive a free appointment.",
    voucherCta: "I want my voucher",

    directTag: "Direct",
    directTitle: "Prefer to talk now?",
    directBody:
      "Chat with our welcoming team on WhatsApp. We guide you on medical care and the next steps in your treatment.",
    directWhatsappMessage:
      "Hello! I would like guidance on a medical cannabis appointment with Diamba Sagrada.",
    directCta: "Talk on WhatsApp",

    partnerTag: "For professionals",
    partnerBody:
      "Are you a physician and want to prescribe with us? Join our network of partners.",
    partnerWhatsappMessage: `Hello! I am a physician and I'm interested in becoming a partner of ${siteConfig.name}.`,
    partnerCta: "Become a partner physician",

    stepsOverline: "Articulus Secundus — Step by Step",
    stepsHeading: "How the care process works",
    passos: [
      {
        n: "I",
        title: "First Contact",
        body: "Reach out and tell us about your condition. Our welcoming team will listen to your story and guide you through the next steps.",
      },
      {
        n: "II",
        title: "Medical Assessment",
        body: "An appointment with a licensed prescribing physician who will assess your clinical condition, health history and whether treatment is indicated.",
      },
      {
        n: "III",
        title: "Prescription",
        body: "A personalized prescription with the dosage, concentration and form of use suited to your individual profile and needs.",
      },
      {
        n: "IV",
        title: "Follow-up",
        body: "Continuous support throughout your treatment. Periodic check-ins with the physician to make adjustments and answer your questions.",
      },
    ],

    faqOverline: "Articulus Tertius — Frequently Asked Questions",
    faqHeading: "About the prescription",
    faq: [
      {
        q: "What is a medical cannabis prescription?",
        a: "It is a document issued by a licensed physician authorizing the patient to use cannabis-based products for therapeutic purposes. The prescription specifies the type of product, cannabinoid concentration (CBD and THC), dosage and route of administration — indispensable for lawful purchase in Brazil.",
      },
      {
        q: "Which conditions can be treated?",
        a: "Refractory epilepsy, chronic pain, multiple sclerosis, fibromyalgia, anxiety, insomnia, autism, Parkinson's, Alzheimer's, nausea and vomiting associated with chemotherapy, among others. The indication always depends on an individual medical assessment.",
      },
      {
        q: "Can the appointment be done by telemedicine?",
        a: "Yes. Telemedicine is regulated in Brazil and many of our partner physicians offer appointments by video call. The prescription can be issued digitally, in accordance with current regulations.",
      },
      {
        q: "How much does the appointment cost?",
        a: "The cost varies according to the physician and the specialty. Our partners offer special terms for members, with affordable prices and the option to pay in installments.",
      },
      {
        q: "Do I need a referral from my doctor?",
        a: "It is not required. You can schedule directly with one of our partner physicians. If you have previous medical reports, exams or records, we recommend bringing them to the appointment.",
      },
      {
        q: "Is a medical cannabis prescription legal in Brazil?",
        a: "Yes. Anvisa regulates the prescription and use of cannabis-based products. RDC 660/2022 sets out rules for importation by individuals, and RDC 327/2019 regulates manufacturing and sale within the country.",
      },
    ],

    noticeIntro:
      "Every prescription must be issued by a licensed physician. Diamba Sagrada facilitates access to medical care, but does not replace the appointment.",
    noticeStrong: "Never self-medicate.",
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

export default async function AreaMedicaPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero
        folio={t.heroFolio}
        crumbs={[
          { label: t.heroCrumbStart, href: "/" },
          { label: t.heroCrumbCurrent },
        ]}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
      />

      {/* Conexão com médico + voucher */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-12">
            <SectionOverline>{t.connectOverline}</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight max-w-[20ch]">
              {t.connectHeading}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Caminho 1 — voucher */}
            <Reveal>
              <article className="h-full border border-[var(--rule-strong)] bg-[rgba(241,232,211,0.55)] p-8 hover:border-gold-leaf transition-colors flex flex-col">
                <span
                  className="font-display italic text-gold-leaf text-[0.78rem] tracking-[0.2em] mb-2"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.voucherTag}
                </span>
                <h3 className="font-display italic font-medium text-ink text-[1.5rem] leading-tight mb-3">
                  {t.voucherTitle}
                </h3>
                <p className="font-body text-ink-soft text-[0.96rem] leading-[1.75] mb-6">
                  {t.voucherBody}
                </p>
                <div className="mt-auto">
                  <ButtonLink href="/seja-associado" variant="gold" size="lg">
                    {t.voucherCta}
                  </ButtonLink>
                </div>
              </article>
            </Reveal>

            {/* Caminho 2 — WhatsApp direto */}
            <Reveal delay={110}>
              <article className="h-full border border-[var(--rule-strong)] bg-[rgba(241,232,211,0.55)] p-8 hover:border-gold-leaf transition-colors flex flex-col">
                <span
                  className="font-display italic text-gold-leaf text-[0.78rem] tracking-[0.2em] mb-2"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.directTag}
                </span>
                <h3 className="font-display italic font-medium text-ink text-[1.5rem] leading-tight mb-3">
                  {t.directTitle}
                </h3>
                <p className="font-body text-ink-soft text-[0.96rem] leading-[1.75] mb-6">
                  {t.directBody}
                </p>
                <div className="mt-auto">
                  <ButtonLink
                    href={whatsappUrl(t.directWhatsappMessage)}
                    variant="primary"
                    size="lg"
                    external
                  >
                    {t.directCta}
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Seja médico parceiro */}
          <Reveal delay={80}>
            <div className="mt-10 flex flex-col gap-4 border-t border-[var(--rule)] pt-8 md:flex-row md:items-center md:justify-between">
              <p className="font-display italic text-ink text-[1.05rem] leading-[1.5] max-w-[46ch]">
                <strong
                  className="block not-italic font-semibold text-[0.78rem] tracking-[0.2em] text-gold-leaf mb-1"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.partnerTag}
                </strong>
                {t.partnerBody}
              </p>
              <ButtonLink
                href={whatsappUrl(t.partnerWhatsappMessage)}
                variant="outlined-gold"
                size="md"
                external
              >
                {t.partnerCta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Atendimento steps */}
      <section className="py-[clamp(5rem,9vw,8rem)] border-y border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-14">
            <SectionOverline>{t.stepsOverline}</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              {t.stepsHeading}
            </h2>
          </Reveal>
          <ol className="grid gap-10 md:grid-cols-4">
            {t.passos.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 100}>
                <article className="border-t border-[var(--rule-strong)] pt-7 relative">
                  <span className="absolute -top-[0.7rem] left-0 bg-paper pr-3 font-display italic font-medium text-[2.4rem] leading-none text-gold-leaf">
                    {p.n}
                  </span>
                  <h3 className="font-display italic font-medium text-ink text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="font-body text-ink-soft text-[0.92rem] leading-[1.7]">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ — native details/summary, no JS */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[880px] px-6 md:px-12">
          <Reveal className="mb-12 text-center">
            <SectionOverline>{t.faqOverline}</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              {t.faqHeading}
            </h2>
          </Reveal>

          <ol className="flex flex-col gap-2">
            {t.faq.map((f, i) => (
              <Reveal as="li" key={f.q} delay={i * 60}>
                <details className="group border-t border-[var(--rule)] py-5">
                  <summary className="cursor-pointer flex items-center justify-between gap-4 font-display italic font-medium text-ink text-[1.1rem] list-none">
                    <span>{f.q}</span>
                    <span
                      aria-hidden
                      className="text-gold-leaf transition-transform group-open:rotate-180"
                    >
                      ▾
                    </span>
                  </summary>
                  <p className="mt-4 font-body text-ink-soft text-[0.98rem] leading-[1.85]">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Aviso */}
      <section className="py-12 border-t border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal>
            <p className="flex items-start gap-4 font-body text-[0.95rem] text-ink-soft leading-[1.7] max-w-[68ch] mx-auto text-center md:text-left">
              <span aria-hidden className="text-vermilion text-xl shrink-0">※</span>
              <span>
                {t.noticeIntro}{" "}
                <strong className="text-ink">{t.noticeStrong}</strong>
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
