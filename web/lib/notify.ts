/* ==========================================================================
   Diamba Sagrada — Notificação por e-mail (envio das fichas/pedidos)
   --------------------------------------------------------------------------
   Decisão da reunião: as fichas e anexos (receita/laudo) chegam por e-mail
   para a associação. Este módulo envia o resumo do pedido de associação.

   ⚠ Para ativar, defina RESEND_API_KEY (ver web/.env.example). Sem a chave,
     o envio é apenas registrado no log do servidor (no-op seguro) — o cadastro
     não é bloqueado.

   Usa a API REST do Resend via fetch (sem dependência extra). Pode ser trocado
   por qualquer outro provedor mantendo a mesma assinatura.
   ========================================================================== */

import { siteConfig } from "./config";

type Email = {
  assunto: string;
  texto: string;
};

export async function enviarEmailAssociacao(e: Email): Promise<{ enviado: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const para = process.env.NOTIFY_EMAIL || siteConfig.email;
  const de = process.env.RESEND_FROM || "Diamba Sagrada <no-reply@diambasagrada.org.br>";

  if (!apiKey) {
    console.info("[notify] (sem RESEND_API_KEY — apenas log)\n", e.assunto, "\n", e.texto);
    return { enviado: false };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: de,
        to: [para],
        subject: e.assunto,
        text: e.texto,
      }),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("[notify] envio falhou:", res.status, await res.text());
      return { enviado: false };
    }
    return { enviado: true };
  } catch (err) {
    console.error("[notify] erro de rede:", err);
    return { enviado: false };
  }
}
