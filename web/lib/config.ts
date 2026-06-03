/* ==========================================================================
   Diamba Sagrada — Configuração central do site
   --------------------------------------------------------------------------
   Pontos marcados com  ⚠ PENDENTE  dependem de input da Jéssica/Ricardo
   (definidos na reunião de 28/05). Os valores reais entram por variável de
   ambiente quando disponíveis — ver web/.env.example.
   ========================================================================== */

function env(key: string, fallback = ""): string {
  const v = process.env[key];
  return v && v.length > 0 ? v : fallback;
}

export const siteConfig = {
  name: "Diamba Sagrada",
  legalName:
    "Diamba Sagrada Associação dos Pacientes de Fitoterápicos — Tratamentos Medicinais e Espirituais de São Tomé das Letras",
  cnpj: "65.785.491/0001-79",

  // ⚠ PENDENTE: número definitivo de WhatsApp (somente dígitos, com DDI 55).
  // Definido por NEXT_PUBLIC_WHATSAPP quando comprado/configurado.
  whatsapp: env("NEXT_PUBLIC_WHATSAPP", "5535999999999"),

  // ⚠ PENDENTE: e-mail corporativo (compra após dia 15). Para onde vão as
  // fichas e anexos (receita/laudo) enviados pelos associados.
  email: env("NEXT_PUBLIC_CONTACT_EMAIL", "contato@diambasagrada.org.br"),

  // ⚠ PENDENTE: telefone de exibição (formatado). O número novo da reunião.
  phoneDisplay: env("NEXT_PUBLIC_PHONE_DISPLAY", ""),

  // Endereço definido na reunião.
  address: "São Tomé das Letras — Sul de Minas, MG",

  // ⚠ PENDENTE: chave Pix para doações (decisão da reunião: doador envia Pix).
  pixKey: env("NEXT_PUBLIC_PIX_KEY", ""),

  social: {
    instagram: env("NEXT_PUBLIC_INSTAGRAM", "https://instagram.com/diambasagrada"),
  },

  // Loja: link alternativo de marketplace (opcional). ⚠ PENDENTE.
  mercadoLivre: env("NEXT_PUBLIC_MERCADO_LIVRE", ""),
} as const;

/* ---- Associação ---------------------------------------------------------- */
export const associationConfig = {
  // ⚠ PENDENTE: valor da taxa de associado. Reunião: R$30, ou R$100 nos
  // primeiros meses para bater número mínimo. Em centavos.
  feeCents: Number(env("MEMBERSHIP_FEE_CENTS", "3000")),

  // Voucher gerado ao concluir o cadastro (decisão da reunião).
  voucher: {
    percent: 50,
    description: "50% de desconto na primeira consulta com médico parceiro",
    // PCD: consulta gratuita (custeada pela associação).
    pcdFree: true,
  },
} as const;

export function formatBRL(cents: number): string {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

/* ---- WhatsApp link builder ----------------------------------------------- */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
