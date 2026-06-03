"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ui";
import { whatsappUrl } from "@/lib/config";

export function DoarCliente({ pixKey }: { pixKey: string }) {
  const [copiado, setCopiado] = useState(false);

  const msgObrigado =
    "Olá! Acabei de fazer uma doação para a Diamba Sagrada. Quero apoiar a causa. 🌿";

  async function copiar() {
    if (!pixKey) return;
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2200);
    } catch {
      /* clipboard indisponível — usuário copia manualmente */
    }
  }

  return (
    <div className="flex flex-col gap-7">
      {pixKey ? (
        <div className="border border-gold-leaf bg-paper-deep/40 px-6 py-7">
          <p
            className="font-body font-semibold text-[0.74rem] tracking-[0.24em] text-gold-leaf mb-3"
            style={{ fontVariant: "small-caps" }}
          >
            Chave Pix
          </p>
          <p className="font-display italic text-ink text-[1.4rem] break-all select-all mb-4">
            {pixKey}
          </p>
          <button
            type="button"
            onClick={copiar}
            className="inline-flex items-center gap-2 rounded-[2px] border border-forest bg-transparent px-6 py-3 font-display italic font-medium text-ink tracking-[0.04em] transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-gold-leaf focus-visible:outline-offset-2"
          >
            {copiado ? "Copiado ✓" : "Copiar chave Pix"}
          </button>
        </div>
      ) : (
        <p className="font-display italic text-ink-soft text-[1rem] leading-[1.6] border-l border-gold-leaf pl-4">
          A chave Pix para doações está sendo configurada. Por enquanto, fale conosco
          no WhatsApp para apoiar a causa.
        </p>
      )}

      <div className="flex flex-col gap-3">
        <ButtonLink href={whatsappUrl(msgObrigado)} variant="gold" size="lg" external>
          Já doei — avisar no WhatsApp
        </ButtonLink>
        <p className="font-body text-ink-soft text-[0.9rem] leading-[1.6] max-w-[48ch]">
          Avise sua doação e responderemos com gratidão. Cada contribuição sustenta o
          acolhimento de quem mais precisa.
        </p>
      </div>
    </div>
  );
}
