/* ==========================================================================
   Diamba Sagrada — Catálogo da loja (fitoterápicos)
   --------------------------------------------------------------------------
   ⚠ Catálogo de exemplo (produtos citados na reunião). Preços e itens reais
     são PENDENTES — ajuste aqui quando a Jéssica definir.
     Mantido em fitoterápicos (chás/blends); óleo/cannabis fica para depois.
   ========================================================================== */

export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  precoCents: number;
  tag: string;
};

export const produtos: Produto[] = [
  {
    id: "cha-equilibrio-diario",
    nome: "Chá Equilíbrio Diário",
    descricao:
      "Blend de ervas para serenar a rotina: melissa, camomila e passiflora. Para momentos de pausa e respiro ao longo do dia.",
    precoCents: 3500,
    tag: "Calmante",
  },
  {
    id: "blend-energizante",
    nome: "Blend Energizante",
    descricao:
      "Composição herbal para disposição e foco, com ervas que despertam o corpo de forma suave e natural.",
    precoCents: 3800,
    tag: "Vitalidade",
  },
  {
    id: "cha-do-sono",
    nome: "Chá do Sono Tranquilo",
    descricao:
      "Mulungu, maracujá e camomila para noites de descanso profundo. Um convite ao sono reparador.",
    precoCents: 3500,
    tag: "Sono",
  },
];

export function getProduto(id: string): Produto | undefined {
  return produtos.find((p) => p.id === id);
}
