/* ==========================================================================
   Diamba Sagrada — Modelo de domínio da associação
   Tipos do cadastro (Ficha de Associado + aceite dos termos) e utilitários.
   ========================================================================== */

import type { Locale } from "@/lib/i18n";

// Valores canônicos (PT) — usados como dado armazenado/enviado no e-mail.
export type CategoriaAssociado = "Paciente" | "Apoiador" | "Pesquisador";

export const CATEGORIAS: CategoriaAssociado[] = ["Paciente", "Apoiador", "Pesquisador"];

// Rótulos de exibição por idioma (o valor armazenado permanece em PT).
export const categoriaLabels: Record<Locale, Record<CategoriaAssociado, string>> = {
  pt: { Paciente: "Paciente", Apoiador: "Apoiador", Pesquisador: "Pesquisador" },
  en: { Paciente: "Patient", Apoiador: "Supporter", Pesquisador: "Researcher" },
};

export type FichaAssociado = {
  // Dados pessoais
  nomeCompleto: string;
  dataNascimento: string;
  cpf: string;
  rg: string;
  estadoCivil: string;
  profissao: string;

  // Responsável legal (quando aplicável)
  responsavelNome: string;
  responsavelCpf: string;
  responsavelParentesco: string;

  // Endereço
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;

  // Contato
  telefone: string;
  email: string;

  // Categoria
  categoria: CategoriaAssociado | "";

  // Dados de saúde (opcional / confidencial)
  possuiPrescricao: "Sim" | "Não" | "";
  patologia: string;
  medicoPrescritor: string;
  crm: string;

  // Documentos que a pessoa declara que vai anexar (envio por e-mail)
  anexaReceita: boolean;
  anexaLaudo: boolean;
  anexaDocumento: boolean;
};

export type AceiteTermos = {
  // Regulamento interno (somente ciência)
  cienteRegulamento: boolean;
  // Termo de adesão
  aceiteAdesao: boolean;
  assinaturaAdesao: string;
  // Termo de responsabilidade
  aceiteResponsabilidade: boolean;
  assinaturaResponsabilidade: string;
  // LGPD
  consentimentoLgpd: boolean;
};

export type PedidoAssociacao = {
  ficha: FichaAssociado;
  aceite: AceiteTermos;
  // Quer gerar o voucher de desconto na consulta?
  querVoucher: boolean;
};

export type ResultadoAssociacao =
  | { ok: true; voucher: string; checkoutUrl: string; stub: boolean }
  | { ok: false; error: string };

export function fichaVazia(): FichaAssociado {
  return {
    nomeCompleto: "",
    dataNascimento: "",
    cpf: "",
    rg: "",
    estadoCivil: "",
    profissao: "",
    responsavelNome: "",
    responsavelCpf: "",
    responsavelParentesco: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    cep: "",
    telefone: "",
    email: "",
    categoria: "",
    possuiPrescricao: "",
    patologia: "",
    medicoPrescritor: "",
    crm: "",
    anexaReceita: false,
    anexaLaudo: false,
    anexaDocumento: false,
  };
}

export function aceiteVazio(): AceiteTermos {
  return {
    cienteRegulamento: false,
    aceiteAdesao: false,
    assinaturaAdesao: "",
    aceiteResponsabilidade: false,
    assinaturaResponsabilidade: "",
    consentimentoLgpd: false,
  };
}

/* ---- Voucher ------------------------------------------------------------- */
const VOUCHER_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // sem caracteres ambíguos

export function gerarVoucher(): string {
  let bloco = "";
  for (let i = 0; i < 6; i++) {
    bloco += VOUCHER_ALPHABET[Math.floor(Math.random() * VOUCHER_ALPHABET.length)];
  }
  return `DS-${bloco.slice(0, 3)}-${bloco.slice(3)}`;
}

/* ---- Validação mínima do servidor ---------------------------------------- */
const mensagensValidacao: Record<Locale, Record<string, string>> = {
  pt: {
    nome: "Informe o nome completo.",
    cpf: "Informe o CPF.",
    email: "Informe o e-mail.",
    telefone: "Informe o telefone.",
    categoria: "Selecione a categoria de associado.",
    regulamento: "É necessário estar ciente do Regulamento Interno.",
    adesao: "É necessário aceitar e assinar o Termo de Adesão.",
    responsabilidade: "É necessário aceitar e assinar o Termo de Responsabilidade.",
    lgpd: "É necessário autorizar o tratamento de dados (LGPD).",
  },
  en: {
    nome: "Please enter your full name.",
    cpf: "Please enter your CPF.",
    email: "Please enter your email.",
    telefone: "Please enter your phone number.",
    categoria: "Please select the membership category.",
    regulamento: "You must acknowledge the Internal Regulations.",
    adesao: "You must accept and sign the Membership Agreement.",
    responsabilidade: "You must accept and sign the Statement of Responsibility.",
    lgpd: "You must authorize the processing of your data (LGPD).",
  },
};

export function validarPedido(p: PedidoAssociacao, locale: Locale = "pt"): string | null {
  const m = mensagensValidacao[locale];
  const f = p.ficha;
  if (!f.nomeCompleto.trim()) return m.nome;
  if (!f.cpf.trim()) return m.cpf;
  if (!f.email.trim()) return m.email;
  if (!f.telefone.trim()) return m.telefone;
  if (!f.categoria) return m.categoria;
  if (!p.aceite.cienteRegulamento) return m.regulamento;
  if (!p.aceite.aceiteAdesao || !p.aceite.assinaturaAdesao.trim()) return m.adesao;
  if (!p.aceite.aceiteResponsabilidade || !p.aceite.assinaturaResponsabilidade.trim())
    return m.responsabilidade;
  if (!p.aceite.consentimentoLgpd) return m.lgpd;
  return null;
}
