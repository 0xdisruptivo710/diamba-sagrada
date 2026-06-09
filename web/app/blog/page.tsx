import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/codex/page-hero";
import { SectionOverline } from "@/components/ornaments";
import { Reveal } from "@/components/motion";
import { blogPosts, blogCategoryLabels } from "@/lib/blog";
import { getLocale } from "@/lib/i18n.server";

const copy = {
  pt: {
    metaTitle: "Blog",
    metaDescription:
      "Reflexões sobre cannabis medicinal, ciência, direito, acolhimento e ancestralidade — escritas pela equipe da Diamba Sagrada.",
    folio: "Fólio VII",
    crumbHome: "Início",
    crumbCurrent: "Blog",
    title: "Blog",
    subtitle:
      "Notas, ensaios e reflexões sobre cannabis medicinal, direito, ciência e cuidado.",
    overline: "Articulus Primus — Edição Atual",
    readingTime: (m: number) => `${m} min de leitura`,
    readMore: "Continuar leitura",
    intl: "pt-BR",
  },
  en: {
    metaTitle: "Blog",
    metaDescription:
      "Reflections on medical cannabis, science, law, welcoming and ancestry — written by the Diamba Sagrada team.",
    folio: "Folio VII",
    crumbHome: "Home",
    crumbCurrent: "Blog",
    title: "Blog",
    subtitle:
      "Notes, essays and reflections on medical cannabis, law, science and care.",
    overline: "Articulus Primus — Current Edition",
    readingTime: (m: number) => `${m} min read`,
    readMore: "Continue reading",
    intl: "en-US",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = copy[await getLocale()];
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function BlogPage() {
  const locale = await getLocale();
  const t = copy[locale];
  const dateFormat = new Intl.DateTimeFormat(t.intl, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHero
        folio={t.folio}
        crumbs={[{ label: t.crumbHome, href: "/" }, { label: t.crumbCurrent }]}
        title={t.title}
        subtitle={t.subtitle}
      />

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-[880px] px-6 md:px-12">
          <Reveal className="mb-10">
            <SectionOverline>{t.overline}</SectionOverline>
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
                      {blogCategoryLabels[locale][post.category]}
                    </span>
                    <span aria-hidden className="text-gold-leaf opacity-50">·</span>
                    <time className="font-display italic text-ink-soft text-[0.85rem]" dateTime={post.date}>
                      {dateFormat.format(new Date(post.date))}
                    </time>
                    <span aria-hidden className="text-gold-leaf opacity-50">·</span>
                    <span className="font-display italic text-ink-soft text-[0.85rem]">
                      {t.readingTime(post.readingTime)}
                    </span>
                  </div>

                  <h2 className="font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] mb-3 max-w-[24ch]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-gold-leaf"
                    >
                      {post.title[locale]}
                    </Link>
                  </h2>

                  <p className="font-body text-ink-soft text-[1.02rem] leading-[1.8] max-w-[58ch] mb-4">
                    {post.excerpt[locale]}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="codex-inkstroke inline-flex items-baseline gap-1 font-display italic text-[1rem] text-ink hover:text-gold-leaf transition-colors"
                  >
                    {t.readMore}
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
