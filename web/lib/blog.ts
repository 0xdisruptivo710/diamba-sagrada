export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Ciência" | "Direito" | "Acolhimento" | "Ancestralidade";
  readingTime: number;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cannabis-medicinal-no-brasil-um-guia",
    title: "Cannabis medicinal no Brasil: um guia para começar",
    excerpt:
      "Da prescrição médica à autorização da Anvisa, um caminho prático para pacientes que estão considerando o tratamento.",
    date: "2026-04-12",
    category: "Ciência",
    readingTime: 7,
    body: [
      "A cannabis medicinal deixou de ser um assunto marginal no Brasil. Hoje, milhares de pacientes têm acesso a tratamentos seguros, com prescrição médica e respaldo da Anvisa.",
      "Este guia inicial reúne o que você precisa saber para começar essa conversa com seu médico, entender suas opções e tomar decisões informadas sobre o tratamento.",
      "Antes de tudo, é importante lembrar: a cannabis medicinal não é uma cura milagrosa. É uma ferramenta terapêutica que, em conjunto com outras práticas médicas e cuidados integrais, pode oferecer alívio significativo a quem dela precisa.",
    ],
  },
  {
    slug: "habeas-corpus-preventivo-cultivo",
    title: "Habeas corpus preventivo: o caminho do cultivo seguro",
    excerpt:
      "O que é, para quem se aplica e como tem sido reconhecido nos tribunais brasileiros.",
    date: "2026-03-28",
    category: "Direito",
    readingTime: 5,
    body: [
      "Decisões judiciais recentes vêm reconhecendo o direito de pacientes ao cultivo doméstico de cannabis para fins medicinais, mediante autorização judicial.",
      "O habeas corpus preventivo é o instrumento jurídico mais comum nesses casos. Ele garante ao paciente, ao familiar ou ao cuidador a proteção contra a criminalização do cultivo, desde que seja exclusivamente terapêutico.",
      "Cada caso é único. Por isso, o acompanhamento jurídico especializado é essencial.",
    ],
  },
  {
    slug: "saberes-ancestrais-e-ciencia",
    title: "Saberes ancestrais e ciência: pontes possíveis",
    excerpt:
      "Como tradições milenares e pesquisa contemporânea podem caminhar juntas no cuidado integral.",
    date: "2026-03-10",
    category: "Ancestralidade",
    readingTime: 8,
    body: [
      "Por milênios, a cannabis foi reconhecida como planta medicinal por civilizações ao redor do mundo. Da farmacopeia indiana aos saberes africanos que chegaram ao Brasil, sua presença é antiga.",
      "Reconhecer essa herança não significa abandonar a ciência, ao contrário. Ciência e tradição podem dialogar quando o que está em jogo é o cuidado verdadeiro com o ser humano.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
