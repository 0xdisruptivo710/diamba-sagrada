"use client";

import { useState, useTransition } from "react";
import { Button, ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { type Produto } from "@/lib/produtos";
import { whatsappUrl, formatBRL } from "@/lib/config";
import { comprarProduto } from "./actions";

function CardProduto({ produto }: { produto: Produto }) {
  const [pending, startTransition] = useTransition();
  const [erro, setErro] = useState<string | null>(null);

  function comprar() {
    setErro(null);
    startTransition(async () => {
      const res = await comprarProduto(produto.id);
      if (!res.ok) {
        setErro(res.error);
        return;
      }
      window.location.href = res.checkoutUrl;
    });
  }

  const msgSaibaMais = `Olá! Quero saber mais sobre: ${produto.nome}.`;

  return (
    <article className="h-full flex flex-col border border-[var(--rule-strong)] bg-[rgba(241,232,211,0.55)] p-7 hover:border-gold-leaf transition-colors">
      <span
        className="font-display italic text-gold-leaf text-[0.74rem] tracking-[0.2em] mb-3"
        style={{ fontVariant: "small-caps" }}
      >
        {produto.tag}
      </span>
      <h3 className="font-display italic font-medium text-ink text-[1.4rem] leading-tight mb-3">
        {produto.nome}
      </h3>
      <p className="font-body text-ink-soft text-[0.94rem] leading-[1.7] mb-6">
        {produto.descricao}
      </p>
      <p className="font-display italic font-semibold text-gold-leaf text-[1.3rem] mb-6 mt-auto">
        {formatBRL(produto.precoCents)}
      </p>
      <div className="flex flex-col gap-3">
        <Button type="button" variant="gold" onClick={comprar} disabled={pending}>
          {pending ? "Processando…" : "Comprar"}
        </Button>
        <ButtonLink href={whatsappUrl(msgSaibaMais)} variant="secondary" external>
          Saiba mais
        </ButtonLink>
      </div>
      {erro && (
        <p className="mt-3 font-display italic text-vermilion text-[0.9rem]">
          <span aria-hidden>※ </span>
          {erro}
        </p>
      )}
    </article>
  );
}

export function Loja({ produtos }: { produtos: Produto[] }) {
  return (
    <ul className="grid gap-8 md:grid-cols-3">
      {produtos.map((p, i) => (
        <Reveal as="li" key={p.id} delay={i * 100}>
          <CardProduto produto={p} />
        </Reveal>
      ))}
    </ul>
  );
}
