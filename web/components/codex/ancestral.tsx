import { CannabisLeafFull } from "@/components/glyphs";
import { CodexRule, SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    overline: "Articulus Quartus — Dimensão Ancestral",
    heading: "Uma planta com milhares de anos de história",
    p1:
      "Muito antes de qualquer legislação moderna, a cannabis já era reconhecida como planta medicinal por civilizações ao redor do mundo. Registros milenares da China, da Índia e do Egito Antigo descrevem seu uso no alívio da dor, no tratamento de inflamações e em rituais de cura. Na farmacopeia tradicional indiana, o uso da cannabis era considerado parte essencial do cuidado com o corpo e a mente, integrada a práticas que enxergavam a saúde como equilíbrio entre o ser e a natureza.",
    p2:
      "No Brasil, a planta chegou com os povos africanos escravizados, que trouxeram consigo saberes medicinais profundos e uma relação de respeito com o mundo vegetal. Reconhecer essa herança é também um ato de justiça histórica. Na Diamba Sagrada, honramos essa longa tradição ao unir o conhecimento ancestral à ciência contemporânea, compreendendo que o caminho do cuidado verdadeiro passa pela escuta de quem veio antes de nós.",
  },
  en: {
    overline: "Articulus Quartus — Ancestral Dimension",
    heading: "A plant with thousands of years of history",
    p1:
      "Long before any modern legislation, cannabis was already recognized as a medicinal plant by civilizations around the world. Millennia-old records from China, India and Ancient Egypt describe its use in relieving pain, treating inflammation and in healing rituals. In traditional Indian pharmacopoeia, the use of cannabis was considered an essential part of caring for body and mind, integrated into practices that saw health as a balance between the self and nature.",
    p2:
      "In Brazil, the plant arrived with enslaved African peoples, who brought with them deep medicinal knowledge and a relationship of respect with the plant world. Recognizing this heritage is also an act of historical justice. At Diamba Sagrada, we honor this long tradition by uniting ancestral knowledge with contemporary science, understanding that the path to true care runs through listening to those who came before us.",
  },
};

export async function Ancestral() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <section
      id="ancestral"
      className="
        relative py-[clamp(6rem,10vw,9rem)]
        [background:linear-gradient(180deg,transparent_0%,rgba(216,201,162,0.18)_50%,transparent_100%)]
        overflow-hidden
      "
    >
      <span
        aria-hidden
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[460px] h-[720px] text-forest opacity-[0.07] pointer-events-none"
      >
        <CannabisLeafFull width="100%" height="100%" />
      </span>

      <div className="relative mx-auto max-w-[880px] px-6 md:px-12">
        <Reveal>
          <SectionOverline>{t.overline}</SectionOverline>
          <h2 className="mt-3 mb-10 font-display italic font-medium text-ink leading-[1.08] text-[clamp(2.1rem,4.2vw,3rem)]">
            {t.heading}
          </h2>

          <CodexRule />

          <div>
            <p className="codex-dropcap font-body text-ink-soft text-[1.08rem] leading-[1.9] mb-5 text-justify hyphens-auto">
              {t.p1}
            </p>
            <p className="font-body text-ink-soft text-[1.08rem] leading-[1.9] text-justify hyphens-auto">
              {t.p2}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
