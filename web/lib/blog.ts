import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

// Categoria canônica (chave neutra de idioma); rótulos de exibição abaixo.
export type BlogCategory = "Ciência" | "Direito" | "Acolhimento" | "Ancestralidade";

export const blogCategoryLabels: Record<Locale, Record<BlogCategory, string>> = {
  pt: {
    Ciência: "Ciência",
    Direito: "Direito",
    Acolhimento: "Acolhimento",
    Ancestralidade: "Ancestralidade",
  },
  en: {
    Ciência: "Science",
    Direito: "Law",
    Acolhimento: "Welcoming",
    Ancestralidade: "Ancestry",
  },
};

export type BlogPost = {
  slug: string;
  title: Localized;
  excerpt: Localized;
  date: string;
  category: BlogCategory;
  readingTime: number;
  body: Record<Locale, string[]>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cannabis-medicinal-no-brasil-um-guia",
    title: {
      pt: "Cannabis medicinal no Brasil: um guia para começar",
      en: "Medical cannabis in Brazil: a guide to getting started",
    },
    excerpt: {
      pt: "Da prescrição médica à autorização da Anvisa, um caminho prático para pacientes que estão considerando o tratamento.",
      en: "From the medical prescription to Anvisa authorization, a practical path for patients considering treatment.",
    },
    date: "2026-04-12",
    category: "Ciência",
    readingTime: 7,
    body: {
      pt: [
        "A cannabis medicinal deixou de ser um assunto marginal no Brasil. Hoje, milhares de pacientes têm acesso a tratamentos seguros, com prescrição médica e respaldo da Anvisa.",
        "Este guia inicial reúne o que você precisa saber para começar essa conversa com seu médico, entender suas opções e tomar decisões informadas sobre o tratamento.",
        "Antes de tudo, é importante lembrar: a cannabis medicinal não é uma cura milagrosa. É uma ferramenta terapêutica que, em conjunto com outras práticas médicas e cuidados integrais, pode oferecer alívio significativo a quem dela precisa.",
      ],
      en: [
        "Medical cannabis is no longer a marginal subject in Brazil. Today, thousands of patients have access to safe treatments, with a medical prescription and the backing of Anvisa.",
        "This introductory guide brings together what you need to know to start that conversation with your doctor, understand your options and make informed decisions about treatment.",
        "Above all, it's important to remember: medical cannabis is not a miracle cure. It is a therapeutic tool that, together with other medical practices and integral care, can offer significant relief to those who need it.",
      ],
    },
  },
  {
    slug: "habeas-corpus-preventivo-cultivo",
    title: {
      pt: "Habeas corpus preventivo: o caminho do cultivo seguro",
      en: "Preventive habeas corpus: the path to safe cultivation",
    },
    excerpt: {
      pt: "O que é, para quem se aplica e como tem sido reconhecido nos tribunais brasileiros.",
      en: "What it is, who it applies to, and how it has been recognized in Brazilian courts.",
    },
    date: "2026-03-28",
    category: "Direito",
    readingTime: 5,
    body: {
      pt: [
        "Decisões judiciais recentes vêm reconhecendo o direito de pacientes ao cultivo doméstico de cannabis para fins medicinais, mediante autorização judicial.",
        "O habeas corpus preventivo é o instrumento jurídico mais comum nesses casos. Ele garante ao paciente, ao familiar ou ao cuidador a proteção contra a criminalização do cultivo, desde que seja exclusivamente terapêutico.",
        "Cada caso é único. Por isso, o acompanhamento jurídico especializado é essencial.",
      ],
      en: [
        "Recent court rulings have been recognizing patients' right to home cultivation of cannabis for medicinal purposes, with judicial authorization.",
        "Preventive habeas corpus is the most common legal instrument in these cases. It grants the patient, family member or caregiver protection against the criminalization of cultivation, as long as it is exclusively therapeutic.",
        "Each case is unique. That is why specialized legal support is essential.",
      ],
    },
  },
  {
    slug: "saberes-ancestrais-e-ciencia",
    title: {
      pt: "Saberes ancestrais e ciência: pontes possíveis",
      en: "Ancestral knowledge and science: possible bridges",
    },
    excerpt: {
      pt: "Como tradições milenares e pesquisa contemporânea podem caminhar juntas no cuidado integral.",
      en: "How age-old traditions and contemporary research can walk together in integral care.",
    },
    date: "2026-03-10",
    category: "Ancestralidade",
    readingTime: 8,
    body: {
      pt: [
        "Por milênios, a cannabis foi reconhecida como planta medicinal por civilizações ao redor do mundo. Da farmacopeia indiana aos saberes africanos que chegaram ao Brasil, sua presença é antiga.",
        "Reconhecer essa herança não significa abandonar a ciência, ao contrário. Ciência e tradição podem dialogar quando o que está em jogo é o cuidado verdadeiro com o ser humano.",
      ],
      en: [
        "For millennia, cannabis has been recognized as a medicinal plant by civilizations around the world. From Indian pharmacopoeia to the African knowledge that reached Brazil, its presence is ancient.",
        "Recognizing this heritage does not mean abandoning science — on the contrary. Science and tradition can be in dialogue when what's at stake is true care for the human being.",
      ],
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
