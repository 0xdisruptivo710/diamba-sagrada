import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import { Nav } from "@/components/chrome/nav";
import { Footer } from "@/components/chrome/footer";
import { getLocale } from "@/lib/i18n.server";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = {
    pt: {
      default: "Diamba Sagrada — Associação de Pacientes de Cannabis Medicinal",
      description:
        "Associação de pacientes que une ciência, escuta sensível e sabedoria ancestral em torno do acesso seguro, legal e humanizado à cannabis medicinal.",
      ogDescription: "Cultivar é direito. Tratar é dignidade.",
    },
    en: {
      default: "Diamba Sagrada — Medical Cannabis Patient Association",
      description:
        "A patient association uniting science, sensitive listening and ancestral wisdom around safe, legal and humane access to medical cannabis.",
      ogDescription: "To cultivate is a right. To treat is dignity.",
    },
  }[locale];

  return {
    title: { default: copy.default, template: "%s · Diamba Sagrada" },
    description: copy.description,
    metadataBase: new URL("https://diambasagrada.org.br"),
    openGraph: {
      title: "Diamba Sagrada",
      description: copy.ogDescription,
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html
      lang={locale === "pt" ? "pt-BR" : "en"}
      className={`${cormorant.variable} ${lora.variable}`}
    >
      <body>
        <Nav locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
