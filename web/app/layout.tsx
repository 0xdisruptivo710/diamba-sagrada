import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import { Nav } from "@/components/chrome/nav";
import { Footer } from "@/components/chrome/footer";
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

export const metadata: Metadata = {
  title: {
    default: "Diamba Sagrada — Associação de Pacientes de Cannabis Medicinal",
    template: "%s · Diamba Sagrada",
  },
  description:
    "Associação de pacientes que une ciência, escuta sensível e sabedoria ancestral em torno do acesso seguro, legal e humanizado à cannabis medicinal.",
  metadataBase: new URL("https://diambasagrada.org.br"),
  openGraph: {
    title: "Diamba Sagrada",
    description: "Cultivar é direito. Tratar é dignidade.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${lora.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
