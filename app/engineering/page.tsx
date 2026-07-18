import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { thinkingArticles } from "@/lib/thinking";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Notes on codebase rescues, legacy modernisation, stack choices, and MVP delivery.",
};

export default function EngineeringIndexPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            ← Back to home
          </Link>

          <header className="mt-8">
            <h1 className="font-display text-4xl font-medium text-[var(--ink)] sm:text-5xl">
              Engineering
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
              Short notes on how I&apos;d think about the kind of problems agencies bring in.
            </p>
          </header>

          <ul className="mt-12 space-y-4">
            {thinkingArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/engineering/${article.slug}`}
                  className="group block rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent-dim)]"
                >
                  <h2 className="font-display text-2xl font-medium text-[var(--ink)] group-hover:text-[var(--accent)]">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
                    {article.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
