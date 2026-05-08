import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/lib/nav-config";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="
        relative overflow-hidden
        bg-forest-deep text-[rgba(241,232,211,0.72)]
        border-t border-gold-deep
        pt-16 pb-6
      "
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ backgroundImage: "var(--grain)" }}
      />

      <div className="relative mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="relative pt-8 grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Cólofon header strip */}
          <p
            aria-hidden
            className="absolute inset-x-0 -top-2 text-center font-display italic text-[0.78rem] tracking-[0.32em] text-gold-leaf"
            style={{ fontVariant: "small-caps" }}
          >
            Cólofon — Diamba Sagrada
          </p>
          <p
            aria-hidden
            className="absolute left-1/2 top-2 -translate-x-1/2 text-gold-leaf text-base tracking-[0.5em] opacity-70"
          >
            ⁂
          </p>

          <div className="max-w-xs">
            <Link
              href="/"
              aria-label="Diamba Sagrada — Página Inicial"
              className="mb-4 inline-flex items-center gap-3 font-display italic text-xl font-semibold text-paper"
            >
              <span className="block size-10 overflow-hidden rounded-full ring-1 ring-gold-leaf shadow-[0_0_0_3px_var(--color-forest-deep),0_0_0_4px_rgba(183,144,47,0.4)]">
                <Image
                  src="/img/logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="size-full object-cover"
                />
              </span>
              <span>Diamba Sagrada</span>
            </Link>
            <p className="font-body text-[0.92rem] leading-[1.75]">
              Associação de pacientes dedicada ao acesso seguro, legal e humanizado à cannabis
              medicinal no Brasil. Uma obra coletiva de cuidado, escrita a muitas mãos.
            </p>
          </div>

          <div>
            <h2
              className="mb-5 font-display italic text-[0.85rem] text-gold-leaf tracking-[0.22em]"
              style={{ fontVariant: "small-caps" }}
            >
              Sumário
            </h2>
            <ul className="flex flex-col gap-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display italic text-[0.98rem] transition-[color,letter-spacing] hover:text-gold-leaf hover:tracking-[0.015em]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="mb-5 font-display italic text-[0.85rem] text-gold-leaf tracking-[0.22em]"
              style={{ fontVariant: "small-caps" }}
            >
              Correspondência
            </h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:contato@diambasagrada.org.br"
                  className="inline-flex items-center gap-2 font-display italic text-[0.98rem] transition-[color,letter-spacing] hover:text-gold-leaf hover:tracking-[0.015em]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                  contato@diambasagrada.org.br
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/diambasagrada"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Diamba Sagrada"
                  className="inline-flex items-center gap-2 font-display italic text-[0.98rem] transition-[color,letter-spacing] hover:text-gold-leaf hover:tracking-[0.015em]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                  @diambasagrada
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 border-t border-[rgba(183,144,47,0.28)] pt-6 flex flex-wrap justify-between gap-3 font-display italic text-[0.82rem] text-[rgba(241,232,211,0.55)]">
          <p>
            <span className="text-gold-leaf opacity-85 mr-2">❧</span>
            Edição Primeira · Anno Domini MMXXIV · Diamba Sagrada
          </p>
          <p>Associação sem fins lucrativos · Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
