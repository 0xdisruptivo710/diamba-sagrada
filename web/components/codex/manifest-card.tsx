"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type Manifest = {
  text: string;
  cite: string;
};

const manifests: Manifest[] = [
  {
    text: "Que o saber das ervas, a escuta dos médicos e o amparo do direito caminhem juntos. A cura é trabalho coletivo.",
    cite: "Manifesto da Diamba Sagrada",
  },
  {
    text: "Cultivar é direito. Tratar é dignidade. E reconhecer essa herança é também um ato de justiça histórica.",
    cite: "Princípio fundador",
  },
  {
    text: "Não tratamos apenas sintomas. Acompanhamos histórias. Cada paciente é um universo.",
    cite: "Carta de acolhimento",
  },
];

const ROTATE_MS = 7000;

export function ManifestCard() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % manifests.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [reduced]);

  const current = manifests[index];

  return (
    <aside
      aria-label="Manifesto"
      className="
        relative bg-[rgba(232,220,190,0.55)] border border-[var(--rule-strong)]
        backdrop-blur-[1px]
        px-7 py-6 pl-9
      "
    >
      {/* Top corner ornaments */}
      <span aria-hidden className="absolute -top-1 -left-1 size-2 rotate-45 bg-gold-leaf" />
      <span aria-hidden className="absolute -bottom-1 -right-1 size-2 rotate-45 bg-gold-leaf" />

      {/* Decorative left rail */}
      <span
        aria-hidden
        className="absolute left-3 top-6 bottom-6 w-px bg-gold-leaf opacity-40"
      />

      <header className="mb-4 flex items-baseline justify-between gap-4">
        <span
          className="font-display italic text-[0.78rem] tracking-[0.28em] text-gold-leaf"
          style={{ fontVariant: "small-caps" }}
        >
          Manifesto
        </span>
        <span className="flex items-center gap-1.5 text-ink-soft text-[0.7rem] tracking-[0.18em] font-display italic">
          {manifests.map((_, i) => (
            <span
              key={i}
              aria-hidden
              data-active={i === index || undefined}
              className="
                block h-px w-5 bg-ink-soft/30 transition-colors duration-500
                data-[active=true]:bg-gold-leaf
              "
            />
          ))}
        </span>
      </header>

      <div className="relative min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display italic font-medium text-ink text-[clamp(1.1rem,1.4vw,1.3rem)] leading-[1.5]"
          >
            <span aria-hidden className="absolute -left-1 -top-3 text-[2.5rem] leading-none text-gold-leaf opacity-80 select-none" style={{ fontStyle: "normal" }}>
              “
            </span>
            {current.text}
            <cite
              className="block mt-3 not-italic text-[0.72rem] tracking-[0.22em] text-ink-soft"
              style={{ fontVariant: "small-caps" }}
            >
              <span className="text-gold-leaf">— </span>
              {current.cite}
            </cite>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Mini index */}
      <ul className="mt-6 pt-5 border-t border-[var(--rule)] flex flex-col gap-2">
        {[
          { n: "I", label: "Três pilares do cuidado", href: "#pilares" },
          { n: "II", label: "A jornada do paciente", href: "#jornada" },
          { n: "III", label: "Dimensão ancestral", href: "#ancestral" },
        ].map((c) => (
          <li key={c.n}>
            <a
              href={c.href}
              className="
                group flex items-baseline gap-3 font-display italic
                text-[0.95rem] text-ink hover:text-gold-leaf
                transition-colors duration-300
              "
            >
              <span
                className="not-italic font-semibold text-[0.7rem] text-gold-leaf tracking-[0.18em] w-5 shrink-0"
                style={{ fontVariant: "small-caps" }}
              >
                {c.n}.
              </span>
              <span className="flex-1">{c.label}</span>
              <span
                aria-hidden
                className="text-gold-leaf opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
