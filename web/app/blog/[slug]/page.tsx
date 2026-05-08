import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/codex/page-hero";
import { CodexAsterism, CodexQuote } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { blogPosts, getPostBySlug } from "@/lib/blog";

type Params = { slug: string };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const dateFormat = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        folio={post.category}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        title={post.title}
        subtitle={
          <>
            <time dateTime={post.date} className="text-ink-soft">
              {dateFormat.format(new Date(post.date))}
            </time>{" "}
            · {post.readingTime} min de leitura
          </>
        }
      />

      <article className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[720px] px-6 md:px-12">
          {post.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p
                className={
                  (i === 0 ? "codex-dropcap " : "") +
                  "font-body text-ink-soft text-[1.08rem] leading-[1.9] mb-6 text-justify hyphens-auto"
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}

          <CodexAsterism />

          <CodexQuote cite="Diamba Sagrada">
            Cuidar é também escrever. Registrar é deixar testemunho para quem vem depois.
          </CodexQuote>

          <div className="mt-12 pt-6 border-t border-[var(--rule)]">
            <Link
              href="/blog"
              className="codex-inkstroke font-display italic text-ink hover:text-gold-leaf transition-colors"
            >
              ← Voltar ao Sumário
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
