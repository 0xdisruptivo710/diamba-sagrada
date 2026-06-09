import type { ReactNode } from "react";
import { Scroll, WaxSeal, Caduceus, OpenHands } from "@/components/glyphs";
import { Reveal } from "@/components/motion";
import { getLocale } from "@/lib/i18n.server";

const glyphs: ReactNode[] = [
  <Scroll key="s" width={28} height={28} />,
  <WaxSeal key="w" width={28} height={28} />,
  <Caduceus key="c" width={28} height={28} />,
  <OpenHands key="o" width={28} height={28} />,
];

const copy = {
  pt: {
    items: [
      { label: "Atuação Legal", text: "Respeitamos toda legislação vigente" },
      { label: "Dados Protegidos", text: "Em conformidade com a LGPD" },
      { label: "Médicos Certificados", text: "Parceiros prescritores habilitados" },
      { label: "Sem Fins Lucrativos", text: "Associação social e humanitária" },
    ],
  },
  en: {
    items: [
      { label: "Lawful Operation", text: "We comply with all applicable law" },
      { label: "Protected Data", text: "Compliant with Brazil's LGPD" },
      { label: "Certified Physicians", text: "Licensed prescribing partners" },
      { label: "Non-profit", text: "A social and humanitarian association" },
    ],
  },
};

export async function Trust() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <section className="py-[clamp(3.5rem,6vw,5.5rem)] border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {t.items.map((it, i) => (
            <Reveal
              as="li"
              key={it.label}
              delay={i * 90}
              className={
                "flex flex-col items-center text-center px-4 py-2 " +
                (i < t.items.length - 1 ? "md:border-r md:border-[var(--rule)]" : "")
              }
            >
              <div className="size-7 mb-3 text-gold-leaf">{glyphs[i]}</div>
              <h3 className="font-display italic font-medium text-[1.1rem] mb-1.5 text-ink">
                {it.label}
              </h3>
              <p
                className="text-[0.78rem] text-ink-soft tracking-[0.16em]"
                style={{ fontVariant: "small-caps" }}
              >
                {it.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
