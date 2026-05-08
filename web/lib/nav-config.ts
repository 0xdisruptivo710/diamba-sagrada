export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/area-medica", label: "Área Médica" },
  { href: "/area-juridica", label: "Jurídico" },
  { href: "/blog", label: "Blog" },
  { href: "/produtos", label: "Loja" },
  { href: "/contato", label: "Contato" },
];

export const footerNav: NavLink[] = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/o-que-fazemos", label: "O Que Fazemos" },
  { href: "/seja-associado", label: "Seja Associado" },
];
