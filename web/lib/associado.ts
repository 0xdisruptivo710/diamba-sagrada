/* ==========================================================================
   Diamba Sagrada — Modelo de domínio da associação
   Tipos do cadastro (Ficha de Associado + aceite dos termos) e utilitários.
   ========================================================================== */

export type CategoriaAssociado = "Paciente" | "Apoiador" | "Pesquisador";

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
export function validarPedido(p: PedidoAssociacao): string | null {
  const f = p.ficha;
  if (!f.nomeCompleto.trim()) return "Informe o nome completo.";
  if (!f.cpf.trim()) return "Informe o CPF.";
  if (!f.email.trim()) return "Informe o e-mail.";
  if (!f.telefone.trim()) return "Informe o telefone.";
  if (!f.categoria) return "Selecione a categoria de associado.";
  if (!p.aceite.cienteRegulamento) return "É necessário estar ciente do Regulamento Interno.";
  if (!p.aceite.aceiteAdesao || !p.aceite.assinaturaAdesao.trim())
    return "É necessário aceitar e assinar o Termo de Adesão.";
  if (!p.aceite.aceiteResponsabilidade || !p.aceite.assinaturaResponsabilidade.trim())
    return "É necessário aceitar e assinar o Termo de Responsabilidade.";
  if (!p.aceite.consentimentoLgpd) return "É necessário autorizar o tratamento de dados (LGPD).";
  return null;
}
