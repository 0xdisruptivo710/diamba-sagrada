import type { ReactNode } from "react";
import { Scroll, WaxSeal, Caduceus, OpenHands } from "@/components/glyphs";
import { Reveal } from "@/components/motion";

type TrustItem = { glyph: ReactNode; label: string; text: string };

const items: TrustItem[] = [
  { glyph: <Scroll width={28} height={28} />, label: "Atuação Legal", text: "Respeitamos toda legislação vigente" },
  { glyph: <WaxSeal width={28} height={28} />, label: "Dados Protegidos", text: "Em conformidade com a LGPD" },
  { glyph: <Caduceus width={28} height={28} />, label: "Médicos Certificados", text: "Parceiros prescritores habilitados" },
  { glyph: <OpenHands width={28} height={28} />, label: "Sem Fins Lucrativos", text: "Associação social e humanitária" },
];

export function Trust() {
  return (
    <section className="py-[clamp(3.5rem,6vw,5.5rem)] border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it, i) => (
            <Reveal
              as="li"
              key={it.label}
              delay={i * 90}
              className={
                "flex flex-col items-center text-center px-4 py-2 " +
                (i < items.length - 1 ? "md:border-r md:border-[var(--rule)]" : "")
              }
            >
              <div className="size-7 mb-3 text-gold-leaf">{it.glyph}</div>
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
