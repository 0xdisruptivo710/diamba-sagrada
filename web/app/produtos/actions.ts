"use server";

import { headers } from "next/headers";
import { getProduto } from "@/lib/produtos";
import { criarCobranca } from "@/lib/abacate";
import { siteConfig, whatsappUrl, formatBRL } from "@/lib/config";
import { getLocale } from "@/lib/i18n.server";

async function baseUrl(): Promise<string> {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export type ResultadoCompra =
  | { ok: true; checkoutUrl: string }
  | { ok: false; error: string };

const copy = {
  pt: {
    notFound: "Produto não encontrado.",
    buyMsg: (nome: string, preco: string) => `Olá! Quero comprar: ${nome} (${preco}).`,
  },
  en: {
    notFound: "Product not found.",
    buyMsg: (nome: string, preco: string) => `Hello! I'd like to buy: ${nome} (${preco}).`,
  },
};

export async function comprarProduto(id: string): Promise<ResultadoCompra> {
  const locale = await getLocale();
  const t = copy[locale];

  const produto = getProduto(id);
  if (!produto) return { ok: false, error: t.notFound };

  const origin = await baseUrl();
  const cobranca = await criarCobranca({
    valorCents: produto.precoCents,
    // Internal/merchant description stays in pt (canonical record).
    descricao: `${produto.nome.pt} — ${siteConfig.name}`,
    cliente: { nome: "", email: "" },
    returnUrl: new URL("/produtos", origin).toString(),
    completionUrl: new URL("/produtos?ok=1", origin).toString(),
  });

  // Sem gateway configurado (stub): encaminha a compra para o WhatsApp,
  // como combinado na reunião (paga direto OU finaliza pelo WhatsApp).
  if (cobranca.stub) {
    return {
      ok: true,
      checkoutUrl: whatsappUrl(
        t.buyMsg(produto.nome[locale], formatBRL(produto.precoCents)),
      ),
    };
  }

  return { ok: true, checkoutUrl: cobranca.url };
}
