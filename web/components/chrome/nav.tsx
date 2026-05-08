"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/nav-config";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      role="banner"
      data-scrolled={scrolled}
      className="
        fixed inset-x-0 top-0 z-30 h-20
        transition-[background-color,box-shadow] duration-500
        data-[scrolled=true]:bg-paper/90 data-[scrolled=true]:backdrop-blur-md
        data-[scrolled=true]:shadow-[0_1px_0_var(--rule),0_8px_24px_rgba(20,39,30,0.05)]
      "
    >
      <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between gap-6 px-6 md:px-8">
        <Link
          href="/"
          aria-label="Diamba Sagrada — Página Inicial"
          className="flex items-center gap-3 font-display italic text-xl font-semibold text-ink transition-colors hover:text-gold-leaf"
        >
          <span className="block size-12 overflow-hidden rounded-full ring-1 ring-gold-leaf shadow-[0_0_0_3px_var(--color-paper),0_0_0_4px_rgba(183,144,47,0.25)]">
            <Image
              src="/img/logo.png"
              alt=""
              width={48}
              height={48}
              className="size-full object-cover"
              priority
            />
          </span>
          <span>Diamba Sagrada</span>
        </Link>

        <div className="codex-sumario hidden items-center gap-6 lg:flex">
          <span className="mr-2 border-r border-[var(--rule-strong)] pr-4 font-display italic text-[0.95rem] text-ink-soft">
            Sumário
          </span>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-sumario
              data-active={isActive(link.href) || undefined}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="
                codex-inkstroke-reveal relative py-1
                font-display italic text-[1.02rem] font-medium
                text-ink transition-colors hover:text-gold-leaf
                data-[active=true]:text-gold-deep
              "
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/seja-associado"
          className="
            hidden lg:inline-flex items-center justify-center
            px-5 py-2.5 rounded-[2px]
            bg-forest text-paper
            font-display italic text-[0.95rem]
            border border-forest-deep
            shadow-[inset_0_0_0_1px_rgba(183,144,47,0.25),0_1px_0_var(--color-paper-shade)]
            transition-all hover:bg-forest-deep
            hover:shadow-[inset_0_0_0_1px_rgba(183,144,47,0.55),0_2px_0_var(--color-paper-shade)]
          "
        >
          Seja Associado
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="relative z-40 flex flex-col gap-[5px] p-2 lg:hidden"
        >
          <span
            className="block h-[2px] w-6 bg-ink transition-transform duration-300"
            style={mobileOpen ? { transform: "translateY(7px) rotate(45deg)" } : undefined}
          />
          <span
            className="block h-[2px] w-6 bg-ink transition-opacity duration-200"
            style={mobileOpen ? { opacity: 0 } : undefined}
          />
          <span
            className="block h-[2px] w-6 bg-ink transition-transform duration-300"
            style={mobileOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : undefined}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        data-open={mobileOpen}
        className="
          fixed inset-0 z-30 flex flex-col items-center justify-center gap-12
          bg-paper opacity-0 pointer-events-none transition-opacity duration-500
          data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto
          lg:hidden
        "
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-display italic text-3xl text-ink transition-colors hover:text-gold-leaf"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/seja-associado"
          className="px-6 py-3 rounded-[2px] bg-gold-leaf text-forest-deep font-display italic"
        >
          Seja Associado
        </Link>
      </div>
    </header>
  );
}
