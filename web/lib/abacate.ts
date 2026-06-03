/* ==========================================================================
   Diamba Sagrada — Integração com Abacate Pay (gateway de pagamento BR)
   --------------------------------------------------------------------------
   Decisão da reunião: cobrança da taxa de associado / loja via Abacate Pay
   (Pix, boleto, cartão).

   ⚠ Para ativar o pagamento real, defina ABACATE_API_KEY no ambiente
     (ver web/.env.example). A conta/integração ainda está PENDENTE (a Jéssica
     vai criar a conta e mandar a chave).

   Sem a chave, criarCobranca() devolve um link "stub" (a própria página de
   sucesso), de modo que o fluxo inteiro de associação seja testável agora.

   O payload segue a API pública de "billing" do Abacate Pay; confirme os
   campos exatos contra a conta/documentação atual ao plugar a chave real.
   ========================================================================== */

const ABACATE_API = process.env.ABACATE_API_URL || "https://api.abacatepay.com/v1";

export type DadosCobranca = {
  valorCents: number;
  descricao: string;
  cliente: { nome: string; email: string; telefone?: string; cpf?: string };
  returnUrl: string;
  completionUrl: string;
};

export type Cobranca = {
  url: string; // página de checkout para onde redirecionar o usuário
  id: string | null;
  stub: boolean; // true = sem gateway real (modo de teste)
};

export async function criarCobranca(d: DadosCobranca): Promise<Cobranca> {
  const apiKey = process.env.ABACATE_API_KEY;

  // Sem chave configurada → modo stub testável.
  if (!apiKey) {
    return { url: d.completionUrl, id: null, stub: true };
  }

  try {
    const res = await fetch(`${ABACATE_API}/billing/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        frequency: "ONE_TIME",
        methods: ["PIX", "CARD"],
        products: [
          {
            externalId: "taxa-associacao",
            name: d.descricao,
            quantity: 1,
            price: d.valorCents,
          },
        ],
        returnUrl: d.returnUrl,
        completionUrl: d.completionUrl,
        customer: {
          name: d.cliente.nome,
          email: d.cliente.email,
          cellphone: d.cliente.telefone,
          taxId: d.cliente.cpf,
        },
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("[abacate] billing/create falhou:", res.status, await res.text());
      // Falha do gateway → não trava o cadastro; cai no stub.
      return { url: d.completionUrl, id: null, stub: true };
    }

    const json = (await res.json()) as { data?: { id?: string; url?: string } };
    const url = json.data?.url;
    if (!url) {
      console.error("[abacate] resposta sem url:", json);
      return { url: d.completionUrl, id: null, stub: true };
    }
    return { url, id: json.data?.id ?? null, stub: false };
  } catch (err) {
    console.error("[abacate] erro de rede:", err);
    return { url: d.completionUrl, id: null, stub: true };
  }
}
