import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/codex/page-hero";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Reflexões sobre cannabis medicinal, ciência, direito, acolhimento e ancestralidade — escritas pela equipe da Diamba Sagrada.",
};

const dateFormat = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        folio="Fólio VII"
        crumbs={[{ label: "Início", href: "/" }, { label: "Blog" }]}
        title="Blog"
        subtitle="Notas, ensaios e reflexões sobre cannabis medicinal, direito, ciência e cuidado."
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[880px] px-6 md:px-12">
          <Reveal className="mb-10">
            <SectionOverline>Articulus Primus — Edição Atual</SectionOverline>
          </Reveal>

          <ol className="flex flex-col gap-12">
            {blogPosts.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={i * 110}>
                <article className="border-t border-[var(--rule)] pt-10">
                  <div className="flex flex-wrap items-baseline gap-4 mb-3">
                    <span
                      className="font-display italic text-gold-leaf text-[0.78rem] tracking-[0.22em]"
                      style={{ fontVariant: "small-caps" }}
                    >
                      {post.category}
                    </span>
                    <span aria-hidden className="text-gold-leaf opacity-50">·</span>
                    <time className="font-display italic text-ink-soft text-[0.85rem]" dateTime={post.date}>
                      {dateFormat.format(new Date(post.date))}
                    </time>
                    <span aria-hidden className="text-gold-leaf opacity-50">·</span>
                    <span className="font-display italic text-ink-soft text-[0.85rem]">
                      {post.readingTime} min de leitura
                    </span>
                  </div>

                  <h2 className="font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] mb-3 max-w-[24ch]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-gold-leaf"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="font-body text-ink-soft text-[1.02rem] leading-[1.8] max-w-[58ch] mb-4">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="codex-inkstroke inline-flex items-baseline gap-1 font-display italic text-[1rem] text-ink hover:text-gold-leaf transition-colors"
                  >
                    Continuar leitura
                    <span aria-hidden className="not-italic text-[0.8em] text-gold-leaf">
                      ↘
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
