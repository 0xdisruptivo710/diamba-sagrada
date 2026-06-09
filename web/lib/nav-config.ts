import type { Locale } from "@/lib/i18n";

export type NavLink = {
  href: string;
  label: Record<Locale, string>;
};

export const navLinks: NavLink[] = [
  { href: "/", label: { pt: "Início", en: "Home" } },
  { href: "/quem-somos", label: { pt: "Quem Somos", en: "About Us" } },
  { href: "/area-medica", label: { pt: "Área Médica", en: "Medical" } },
  { href: "/area-juridica", label: { pt: "Jurídico", en: "Legal" } },
  { href: "/blog", label: { pt: "Blog", en: "Blog" } },
  { href: "/produtos", label: { pt: "Loja", en: "Shop" } },
  { href: "/doar", label: { pt: "Doar", en: "Donate" } },
  { href: "/contato", label: { pt: "Contato", en: "Contact" } },
];

export const footerNav: NavLink[] = [
  { href: "/", label: { pt: "Início", en: "Home" } },
  { href: "/quem-somos", label: { pt: "Quem Somos", en: "About Us" } },
  { href: "/o-que-fazemos", label: { pt: "O Que Fazemos", en: "What We Do" } },
  { href: "/seja-associado", label: { pt: "Seja Associado", en: "Become a Member" } },
  { href: "/doar", label: { pt: "Doar", en: "Donate" } },
];
