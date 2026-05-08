import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Diamba Sagrada. Escuta atenta, sem julgamento. Estamos aqui para acolher e orientar.",
};

const inputClass =
  "w-full bg-paper-deep/60 border border-[var(--rule-strong)] " +
  "px-4 py-3 font-body text-ink text-[1rem] " +
  "transition-colors focus:border-forest focus:outline-none " +
  "placeholder:text-ink-soft/60";

export default function ContatoPage() {
  return (
    <>
      <PageHero
        folio="Fólio VI"
        crumbs={[{ label: "Início", href: "/" }, { label: "Contato" }]}
        title="Fale conosco"
        subtitle="Conte sua história. Lemos cada mensagem com atenção."
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12 grid gap-14 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <SectionOverline>Articulus Primus — Mensagem</SectionOverline>
            <h2 className="mt-3 mb-8 font-display italic font-medium text-ink text-[clamp(1.7rem,3vw,2.2rem)] leading-tight">
              Envie sua mensagem
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
                  Nome
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
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="telefone"
                    className="font-display italic text-[0.85rem] text-gold-leaf tracking-[0.18em]"
                    style={{ fontVariant: "small-caps" }}
                  >
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    inputMode="tel"
                    placeholder="(00) 00000-0000"
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
                  Assunto
                </label>
                <select id="assunto" name="assunto" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Acolhimento e orientação</option>
                  <option>Informação médica</option>
                  <option>Informação jurídica</option>
                  <option>Quero me associar</option>
                  <option>Imprensa / parceria</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mensagem"
                  className="font-display italic text-[0.85rem] text-gold-leaf tracking-[0.18em]"
                  style={{ fontVariant: "small-caps" }}
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={6}
                  className={inputClass}
                />
                <p className="font-body text-ink-soft text-[0.82rem]">
                  Suas informações são tratadas em conformidade com a LGPD.
                </p>
              </div>

              <div>
                <Button type="submit" variant="primary" size="lg">
                  Enviar mensagem
                </Button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={120} as="aside" className="self-start">
            <SectionOverline>Articulus Secundus — Outras Vias</SectionOverline>
            <h2 className="mt-3 mb-6 font-display italic font-medium text-ink text-[clamp(1.5rem,2.6vw,1.9rem)] leading-tight">
              Outros caminhos
            </h2>

            <ul className="flex flex-col gap-5 font-body text-[0.98rem] text-ink-soft">
              <li>
                <span
                  className="block font-display italic text-[0.78rem] text-gold-leaf tracking-[0.2em] mb-1"
                  style={{ fontVariant: "small-caps" }}
                >
                  Email
                </span>
                <a
                  href="mailto:contato@diambasagrada.org.br"
                  className="text-ink hover:text-gold-leaf transition-colors"
                >
                  contato@diambasagrada.org.br
                </a>
              </li>
              <li>
                <span
                  className="block font-display italic text-[0.78rem] text-gold-leaf tracking-[0.2em] mb-1"
                  style={{ fontVariant: "small-caps" }}
                >
                  Instagram
                </span>
                <a
                  href="https://www.instagram.com/diambasagrada"
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
                  Horário de Acolhimento
                </span>
                <span>Segunda a sexta, das 9h às 18h</span>
              </li>
            </ul>

            <p className="mt-10 font-display italic text-ink-soft text-[0.95rem] leading-[1.6] border-l border-gold-leaf pl-4">
              <strong
                className="block not-italic font-semibold text-[0.78rem] tracking-[0.2em] text-gold-leaf mb-1"
                style={{ fontVariant: "small-caps" }}
              >
                Nota de Margem
              </strong>
              Em casos de urgência clínica, procure um serviço médico de pronto
              atendimento. Não somos um serviço de emergência.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
