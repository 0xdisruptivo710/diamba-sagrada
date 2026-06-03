import type { Metadata } from "next";
import { PageHero } from "@/components/codex/page-hero";
import { CodexQuote, SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { DoarCliente } from "./doar-cliente";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Seja um Doador",
  description:
    "Apoie a Diamba Sagrada. Sua doação sustenta o acolhimento, a orientação e o acesso de pacientes ao tratamento.",
};

const destinos = [
  "Acolhimento humanizado de pacientes e familiares",
  "Consultas gratuitas para pessoas com deficiência",
  "Orientação jurídica sobre o direito à saúde",
  "Manutenção das atividades da associação",
];

export default function DoarPage() {
  return (
    <>
      <PageHero
        folio="Fólio X"
        crumbs={[{ label: "Início", href: "/" }, { label: "Seja um Doador" }]}
        title="Seja um doador"
        subtitle="Não é preciso ser paciente para cuidar. Sua doação sustenta uma rede de acolhimento que existe para quem mais precisa."
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12 grid gap-14 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionOverline>Articulus Primus — Apoie a causa</SectionOverline>
            <h2 className="mt-3 mb-5 font-display italic font-medium text-ink text-[clamp(1.7rem,3vw,2.2rem)] leading-tight">
              Doe via Pix
            </h2>
            <p className="font-body text-ink-soft text-[1rem] leading-[1.8] mb-8 max-w-[52ch]">
              A {siteConfig.name} é uma associação sem fins lucrativos. Toda doação é
              destinada integralmente à nossa missão de cuidado.
            </p>
            <DoarCliente pixKey={siteConfig.pixKey} />
          </Reveal>

          <Reveal as="aside" delay={120} className="self-start">
            <SectionOverline>Articulus Secundus — Para onde vai</SectionOverline>
            <h2 className="mt-3 mb-6 font-display italic font-medium text-ink text-[clamp(1.5rem,2.6vw,1.9rem)] leading-tight">
              O que sua doação sustenta
            </h2>
            <ol className="flex flex-col gap-3.5 font-body text-[0.98rem] text-ink-soft leading-[1.7] mb-8">
              {destinos.map((d, i) => (
                <li key={d} className="flex items-start gap-3">
                  <span
                    className="font-display italic text-gold-leaf text-[0.78rem] tracking-[0.15em] mt-1.5 shrink-0"
                    style={{ fontVariant: "small-caps" }}
                  >
                    §{i + 1}
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
            <CodexQuote cite="Diamba Sagrada">
              Cultivar é direito. Tratar é dignidade.
            </CodexQuote>
          </Reveal>
        </div>
      </section>
    </>
  );
}
