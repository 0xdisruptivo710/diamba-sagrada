import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CTAFinal } from "@/components/codex/cta-final";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "O Que Fazemos",
  description:
    "Conheça os serviços da Diamba Sagrada: acolhimento humanizado, orientação sobre cannabis medicinal, conexão com médicos, suporte jurídico.",
};

type Service = {
  numeral: string;
  title: string;
  body: string;
  comingSoon?: boolean;
};

const services: Service[] = [
  {
    numeral: "I",
    title: "Acolhimento Humanizado",
    body: "Recebemos cada paciente com escuta ativa, sem julgamento. Nosso primeiro passo é entender sua história, suas necessidades e seus medos.",
  },
  {
    numeral: "II",
    title: "Orientação sobre Cannabis Medicinal",
    body: "Oferecemos informação qualificada sobre o uso medicinal, indicações, formas de uso e expectativas realistas de tratamento.",
  },
  {
    numeral: "III",
    title: "Conexão com Médicos Parceiros",
    body: "Conectamos pacientes a médicos prescritores habilitados e sensíveis ao tratamento com cannabis medicinal.",
  },
  {
    numeral: "IV",
    title: "Suporte Jurídico",
    body: "Orientação sobre direitos do paciente, habeas corpus preventivo, salvo-conduto e processos junto à Anvisa.",
  },
  {
    numeral: "V",
    title: "Cultivo Associativo",
    body: "Cultivo coletivo de cannabis para fins medicinais, garantindo qualidade, rastreabilidade e custo acessível aos associados.",
    comingSoon: true,
  },
  {
    numeral: "VI",
    title: "Programa de Acesso Solidário",
    body: "Acesso a fitoterápicos à base de cannabis para pacientes em situação de vulnerabilidade social.",
    comingSoon: true,
  },
];

const passos = [
  { n: "I", title: "Entre em contato", body: "Fale conosco por WhatsApp ou formulário." },
  { n: "II", title: "Receba orientação", body: "Nossa equipe vai entender sua situação." },
  { n: "III", title: "Conecte-se", body: "Encaminhamos para médico ou advogado parceiro." },
  { n: "IV", title: "Acompanhamento", body: "Suporte contínuo durante seu tratamento." },
];

export default function OQueFazemosPage() {
  return (
    <>
      <PageHero
        folio="Fólio III"
        crumbs={[
          { label: "Início", href: "/" },
          { label: "O Que Fazemos" },
        ]}
        title="O que fazemos"
        subtitle="Conheça os serviços e o suporte que oferecemos aos nossos associados."
      />

      {/* Services grid — 2-column zig-zag (skill rule: no 3-equal cards) */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12">
          <Reveal className="mb-16">
            <SectionOverline>Articulus Primus — Nossos Serviços</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-[1.05] max-w-[28ch]">
              Como apoiamos nossos pacientes
            </h2>
          </Reveal>

          <ul className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
            {services.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 90}
                className={i % 2 === 1 ? "md:translate-y-12" : ""}
              >
                <article className="relative border-t border-[var(--rule-strong)] pt-10">
                  <span className="absolute -top-[0.7rem] left-0 bg-paper pr-3 font-display italic font-medium text-[2.4rem] leading-none text-gold-leaf">
                    {s.numeral}
                  </span>
                  {s.comingSoon ? (
                    <span
                      className="absolute top-3 right-0 px-2 py-1 border border-gold-leaf text-gold-leaf text-[0.72rem] tracking-[0.18em]"
                      style={{ fontVariant: "small-caps" }}
                    >
                      Em breve
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
            <SectionOverline>Articulus Secundus — Passo a Passo</SectionOverline>
            <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(2rem,3.8vw,2.85rem)] leading-tight">
              Como funciona na prática
            </h2>
          </Reveal>
          <ol className="grid gap-10 md:grid-cols-4">
            {passos.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 110} className="text-center">
                <span
                  className="font-display italic text-gold-leaf text-[0.8rem] tracking-[0.22em] block mb-2"
                  style={{ fontVariant: "small-caps" }}
                >
                  Etapa {p.n}
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
