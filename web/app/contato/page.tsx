import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { Button, ButtonLink } from "@/components/ui";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    metaTitle: "Contato",
    metaDescription:
      "Fale com a Diamba Sagrada. Escuta atenta, sem julgamento. Estamos aqui para acolher e orientar.",
    folio: "Fólio VI",
    crumbHome: "Início",
    crumbCurrent: "Contato",
    heroTitle: "Fale conosco",
    heroSubtitle: "Conte sua história. Lemos cada mensagem com atenção.",
    formOverline: "Articulus Primus — Mensagem",
    formHeading: "Envie sua mensagem",
    labelName: "Nome",
    labelEmail: "Email",
    labelPhone: "Telefone",
    phonePlaceholder: "(00) 00000-0000",
    labelSubject: "Assunto",
    subjectSelect: "Selecione",
    subjects: [
      "Acolhimento e orientação",
      "Informação médica",
      "Informação jurídica",
      "Quero me associar",
      "Imprensa / parceria",
      "Outro",
    ],
    labelMessage: "Mensagem",
    lgpdNote: "Suas informações são tratadas em conformidade com a LGPD.",
    submit: "Enviar mensagem",
    sideOverline: "Articulus Secundus — Outras Vias",
    sideHeading: "Outros caminhos",
    whatsappMessage: "Olá! Gostaria de falar com a Diamba Sagrada.",
    whatsappCta: "Falar no WhatsApp",
    phoneLabel: "Telefone",
    emailLabel: "Email",
    instagramLabel: "Instagram",
    addressLabel: "Onde estamos",
    hoursLabel: "Horário de Acolhimento",
    hoursValue: "Segunda a sexta, das 9h às 18h",
    marginNoteLabel: "Nota de Margem",
    marginNoteBody:
      "Em casos de urgência clínica, procure um serviço médico de pronto atendimento. Não somos um serviço de emergência.",
  },
  en: {
    metaTitle: "Contact",
    metaDescription:
      "Get in touch with Diamba Sagrada. Attentive listening, without judgment. We are here to welcome and guide you.",
    folio: "Folio VI",
    crumbHome: "Home",
    crumbCurrent: "Contact",
    heroTitle: "Get in touch",
    heroSubtitle: "Tell us your story. We read every message with care.",
    formOverline: "Articulus Primus — Message",
    formHeading: "Send your message",
    labelName: "Name",
    labelEmail: "Email",
    labelPhone: "Phone",
    phonePlaceholder: "(00) 00000-0000",
    labelSubject: "Subject",
    subjectSelect: "Select",
    subjects: [
      "Welcoming and guidance",
      "Medical information",
      "Legal information",
      "I want to become a member",
      "Press / partnership",
      "Other",
    ],
    labelMessage: "Message",
    lgpdNote: "Your information is handled in accordance with the LGPD.",
    submit: "Send message",
    sideOverline: "Articulus Secundus — Other Channels",
    sideHeading: "Other ways to reach us",
    whatsappMessage: "Hello! I'd like to talk to Diamba Sagrada.",
    whatsappCta: "Chat on WhatsApp",
    phoneLabel: "Phone",
    emailLabel: "Email",
    instagramLabel: "Instagram",
    addressLabel: "Where we are",
    hoursLabel: "Welcoming Hours",
    hoursValue: "Monday to Friday, 9am to 6pm",
    marginNoteLabel: "Margin Note",
    marginNoteBody:
      "In cases of clinical urgency, seek an urgent-care medical service. We are not an emergency service.",
  },
};

const inputClass =
  "w-full bg-paper-deep/60 border border-[var(--rule-strong)] " +
  "px-4 py-3 font-body text-ink text-[1rem] " +
  "transition-colors focus:border-forest focus:outline-none " +
  "placeholder:text-ink-soft/60";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = copy[locale];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
  };
}

export default async function ContatoPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero
        folio={t.folio}
        crumbs={[{ label: t.crumbHome, href: "/" }, { label: t.crumbCurrent }]}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12 grid gap-14 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <SectionOverline>{t.formOverline}</SectionOverline>
            <h2 className="mt-3 mb-8 font-display italic font-medium text-ink text-[clamp(1.7rem,3vw,2.2rem)] leading-tight">
              {t.formHeading}
            </h2>

            <form
              action="mailto:contato@diambasagrada.org.br"
              method="post"
              encType="text/plain"
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nome"
                  className="font-display italic text-[0.85rem] text-gold-leaf tracking-[0.18em]"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.labelName}
                </label>
                <input id="nome" name="nome" type="text" required className={inputClass} />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-display italic text-[0.85rem] text-gold-leaf tracking-[0.18em]"
                    style={{ fontVariant: "small-caps" }}
                  >
                    {t.labelEmail}
                  </label>
                  <input id="email" name="email" type="email" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="telefone"
                    className="font-display italic text-[0.85rem] text-gold-leaf tracking-[0.18em]"
                    style={{ fontVariant: "small-caps" }}
                  >
                    {t.labelPhone}
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    inputMode="tel"
                    placeholder={t.phonePlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="assunto"
                  className="font-display italic text-[0.85rem] text-gold-leaf tracking-[0.18em]"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.labelSubject}
                </label>
                <select id="assunto" name="assunto" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    {t.subjectSelect}
                  </option>
                  {t.subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mensagem"
                  className="font-display italic text-[0.85rem] text-gold-leaf tracking-[0.18em]"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.labelMessage}
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={6}
                  className={inputClass}
                />
                <p className="font-body text-ink-soft text-[0.82rem]">
                  {t.lgpdNote}
                </p>
              </div>

              <div>
                <Button type="submit" variant="primary" size="lg">
                  {t.submit}
                </Button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={120} as="aside" className="self-start">
            <SectionOverline>{t.sideOverline}</SectionOverline>
            <h2 className="mt-3 mb-6 font-display italic font-medium text-ink text-[clamp(1.5rem,2.6vw,1.9rem)] leading-tight">
              {t.sideHeading}
            </h2>

            <div className="mb-7">
              <ButtonLink
                href={whatsappUrl(t.whatsappMessage)}
                variant="gold"
                size="md"
                external
              >
                {t.whatsappCta}
              </ButtonLink>
            </div>

            <ul className="flex flex-col gap-5 font-body text-[0.98rem] text-ink-soft">
              {siteConfig.phoneDisplay ? (
                <li>
                  <span
                    className="block font-display italic text-[0.78rem] text-gold-leaf tracking-[0.2em] mb-1"
                    style={{ fontVariant: "small-caps" }}
                  >
                    {t.phoneLabel}
                  </span>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-gold-leaf transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
              ) : null}
              <li>
                <span
                  className="block font-display italic text-[0.78rem] text-gold-leaf tracking-[0.2em] mb-1"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.emailLabel}
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ink hover:text-gold-leaf transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span
                  className="block font-display italic text-[0.78rem] text-gold-leaf tracking-[0.2em] mb-1"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.instagramLabel}
                </span>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-gold-leaf transition-colors"
                >
                  @diambasagrada
                </a>
              </li>
              <li>
                <span
                  className="block font-display italic text-[0.78rem] text-gold-leaf tracking-[0.2em] mb-1"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.addressLabel}
                </span>
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <span
                  className="block font-display italic text-[0.78rem] text-gold-leaf tracking-[0.2em] mb-1"
                  style={{ fontVariant: "small-caps" }}
                >
                  {t.hoursLabel}
                </span>
                <span>{t.hoursValue}</span>
              </li>
            </ul>

            <p className="mt-10 font-display italic text-ink-soft text-[0.95rem] leading-[1.6] border-l border-gold-leaf pl-4">
              <strong
                className="block not-italic font-semibold text-[0.78rem] tracking-[0.2em] text-gold-leaf mb-1"
                style={{ fontVariant: "small-caps" }}
              >
                {t.marginNoteLabel}
              </strong>
              {t.marginNoteBody}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
