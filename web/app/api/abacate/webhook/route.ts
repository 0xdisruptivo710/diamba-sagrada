/* ==========================================================================
   Webhook do Abacate Pay — confirmação de pagamento.
   --------------------------------------------------------------------------
   O Abacate Pay chama esta rota quando o status de uma cobrança muda
   (ex.: pagamento confirmado). Configure a URL deste endpoint no painel do
   Abacate Pay e defina ABACATE_WEBHOOK_SECRET (ver web/.env.example).

   ⚠ Por ora apenas valida o segredo e registra o evento. Quando houver banco
     de dados, marcar o associado como "pago" / "ativo" aqui.
   ========================================================================== */

export async function POST(request: Request) {
  const secret = process.env.ABACATE_WEBHOOK_SECRET;

  if (secret) {
    const url = new URL(request.url);
    const provided =
      url.searchParams.get("webhookSecret") ?? request.headers.get("x-webhook-secret");
    if (provided !== secret) {
      return Response.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  let evento: unknown = null;
  try {
    evento = await request.json();
  } catch {
    return Response.json({ error: "invalid payload" }, { status: 400 });
  }

  // TODO: ao integrar um banco, atualizar o status do associado/cobrança aqui.
  console.info("[abacate:webhook] evento recebido:", JSON.stringify(evento));

  return Response.json({ received: true });
}
