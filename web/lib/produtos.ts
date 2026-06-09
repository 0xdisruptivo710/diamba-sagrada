/* ==========================================================================
   Diamba Sagrada — Catálogo da loja (fitoterápicos)
   --------------------------------------------------------------------------
   ⚠ Catálogo de exemplo (produtos citados na reunião). Preços e itens reais
     são PENDENTES — ajuste aqui quando a Jéssica definir.
     Mantido em fitoterápicos (chás/blends); óleo/cannabis fica para depois.
   Textos bilíngues (pt/en); o id e o preço são neutros de idioma.
   ========================================================================== */

import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

export type Produto = {
  id: string;
  nome: Localized;
  descricao: Localized;
  precoCents: number;
  tag: Localized;
};

export const produtos: Produto[] = [
  {
    id: "cha-equilibrio-diario",
    nome: { pt: "Chá Equilíbrio Diário", en: "Daily Balance Tea" },
    descricao: {
      pt: "Blend de ervas para serenar a rotina: melissa, camomila e passiflora. Para momentos de pausa e respiro ao longo do dia.",
      en: "A herbal blend to calm your routine: lemon balm, chamomile and passionflower. For moments of pause and breath throughout the day.",
    },
    precoCents: 3500,
    tag: { pt: "Calmante", en: "Calming" },
  },
  {
    id: "blend-energizante",
    nome: { pt: "Blend Energizante", en: "Energizing Blend" },
    descricao: {
      pt: "Composição herbal para disposição e foco, com ervas que despertam o corpo de forma suave e natural.",
      en: "A herbal composition for energy and focus, with herbs that awaken the body gently and naturally.",
    },
    precoCents: 3800,
    tag: { pt: "Vitalidade", en: "Vitality" },
  },
  {
    id: "cha-do-sono",
    nome: { pt: "Chá do Sono Tranquilo", en: "Tranquil Sleep Tea" },
    descricao: {
      pt: "Mulungu, maracujá e camomila para noites de descanso profundo. Um convite ao sono reparador.",
      en: "Mulungu, passionfruit and chamomile for nights of deep rest. An invitation to restorative sleep.",
    },
    precoCents: 3500,
    tag: { pt: "Sono", en: "Sleep" },
  },
];

export function getProduto(id: string): Produto | undefined {
  return produtos.find((p) => p.id === id);
}
