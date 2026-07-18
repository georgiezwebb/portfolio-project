import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllThinkingSlugs, getThinkingArticle } from "@/lib/thinking";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllThinkingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getThinkingArticle(slug);
  if (!article) return { title: "Article not found" };

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function EngineeringArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getThinkingArticle(slug);
  if (!article) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main" className="px-6 py-12 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/engineering"
            className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            ← All articles
          </Link>

          <header className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Engineering
            </p>
            <h1 className="font-display mt-3 text-4xl font-medium text-[var(--ink)] sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">{article.summary}</p>
          </header>

          <div className="mt-12 space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-medium text-[var(--ink)]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--muted)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-4 border-t border-[var(--line)] pt-10">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--surface)] transition hover:bg-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              Get in touch
            </Link>
            <Link
              href="/engineering"
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              More articles
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
