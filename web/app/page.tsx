import { Hero } from "@/components/codex/hero";
import { Marquee } from "@/components/codex/marquee";
import { Pillars } from "@/components/codex/pillars";
import { Journey } from "@/components/codex/journey";
import { Vision } from "@/components/codex/vision";
import { Ancestral } from "@/components/codex/ancestral";
import { Trust } from "@/components/codex/trust";
import { CTAFinal } from "@/components/codex/cta-final";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Pillars />
      <Journey />
      <Vision />
      <Ancestral />
      <Trust />
      <CTAFinal />
    </>
  );
}
