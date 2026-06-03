"use server";

import { headers } from "next/headers";
import {
  type PedidoAssociacao,
  type ResultadoAssociacao,
  gerarVoucher,
  validarPedido,
} from "@/lib/associado";
import { associationConfig, siteConfig, formatBRL } from "@/lib/config";
import { criarCobranca } from "@/lib/abacate";
import { enviarEmailAssociacao } from "@/lib/notify";

async function baseUrl(): Promise<string> {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

function resumoEmail(p: PedidoAssociacao, voucher: string): string {
  const f = p.ficha;
  const linha = (k: string, v: string) => (v ? `${k}: ${v}\n` : "");
  return (
    `NOVO PEDIDO DE ASSOCIAÇÃO — ${siteConfig.name}\n` +
    `Voucher gerado: ${p.querVoucher ? voucher : "(não solicitado)"}\n\n` +
    `— DADOS PESSOAIS —\n` +
    linha("Nome", f.nomeCompleto) +
    linha("Nascimento", f.dataNascimento) +
    linha("CPF", f.cpf) +
    linha("RG", f.rg) +
    linha("Estado civil", f.estadoCivil) +
    linha("Profissão", f.profissao) +
    `\n— CONTATO —\n` +
    linha("Telefone", f.telefone) +
    linha("E-mail", f.email) +
    `\n— ENDEREÇO —\n` +
    linha("Logradouro", `${f.rua}, ${f.numero} ${f.complemento}`.trim()) +
    linha("Bairro", f.bairro) +
    linha("Cidade/UF", `${f.cidade}/${f.uf}`) +
    linha("CEP", f.cep) +
    (f.responsavelNome
      ? `\n— RESPONSÁVEL LEGAL —\n` +
        linha("Nome", f.responsavelNome) +
        linha("CPF", f.responsavelCpf) +
        linha("Parentesco", f.responsavelParentesco)
      : "") +
    `\n— PERFIL —\n` +
    linha("Categoria", f.categoria) +
    linha("Possui prescrição", f.possuiPrescricao) +
    linha("Patologia/condição", f.patologia) +
    linha("Médico prescritor", f.medicoPrescritor) +
    linha("CRM", f.crm) +
    `\n— DOCUMENTOS A ANEXAR (por e-mail) —\n` +
    `Receita médica: ${f.anexaReceita ? "sim" : "não"}\n` +
    `Laudo médico: ${f.anexaLaudo ? "sim" : "não"}\n` +
    `Documento pessoal: ${f.anexaDocumento ? "sim" : "não"}\n` +
    `\n— ACEITES —\n` +
    `Ciente do Regulamento Interno: ${p.aceite.cienteRegulamento ? "sim" : "não"}\n` +
    `Termo de Adesão assinado por: ${p.aceite.assinaturaAdesao}\n` +
    `Termo de Responsabilidade assinado por: ${p.aceite.assinaturaResponsabilidade}\n` +
    `Consentimento LGPD: ${p.aceite.consentimentoLgpd ? "sim" : "não"}\n`
  );
}

export async function criarAssociacao(pedido: PedidoAssociacao): Promise<ResultadoAssociacao> {
  const erro = validarPedido(pedido);
  if (erro) return { ok: false, error: erro };

  const voucher = gerarVoucher();

  // 1) Notifica a associação (e-mail com a ficha completa).
  await enviarEmailAssociacao({
    assunto: `Novo associado: ${pedido.ficha.nomeCompleto}`,
    texto: resumoEmail(pedido, voucher),
  });

  // 2) Cria a cobrança da taxa de associado.
  const origin = await baseUrl();
  const sucesso = new URL("/seja-associado/sucesso", origin);
  sucesso.searchParams.set("v", pedido.querVoucher ? voucher : "");
  const completionUrl = sucesso.toString();
  const returnUrl = new URL("/seja-associado", origin).toString();

  const cobranca = await criarCobranca({
    valorCents: associationConfig.feeCents,
    descricao: `Taxa de associação — ${siteConfig.name} (${formatBRL(associationConfig.feeCents)})`,
    cliente: {
      nome: pedido.ficha.nomeCompleto,
      email: pedido.ficha.email,
      telefone: pedido.ficha.telefone,
      cpf: pedido.ficha.cpf,
    },
    returnUrl,
    completionUrl,
  });

  return { ok: true, voucher, checkoutUrl: cobranca.url, stub: cobranca.stub };
}
