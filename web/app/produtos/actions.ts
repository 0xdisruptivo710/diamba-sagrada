"use server";

import { headers } from "next/headers";
import { getProduto } from "@/lib/produtos";
import { criarCobranca } from "@/lib/abacate";
import { siteConfig, whatsappUrl, formatBRL } from "@/lib/config";

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

export async function comprarProduto(id: string): Promise<ResultadoCompra> {
  const produto = getProduto(id);
  if (!produto) return { ok: false, error: "Produto não encontrado." };

  const origin = await baseUrl();
  const cobranca = await criarCobranca({
    valorCents: produto.precoCents,
    descricao: `${produto.nome} — ${siteConfig.name}`,
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
        `Olá! Quero comprar: ${produto.nome} (${formatBRL(produto.precoCents)}).`,
      ),
    };
  }

  return { ok: true, checkoutUrl: cobranca.url };
}
