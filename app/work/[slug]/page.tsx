import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllCaseStudySlugs, getCaseStudy } from "@/lib/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Project not found" };

  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="px-6 py-12 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/#work"
            className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            ← Back to work
          </Link>

          <header className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {study.client} · {study.year}
            </p>
            <h1 className="font-display mt-3 text-4xl font-medium text-[var(--ink)] sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">{study.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {study.tags.map((tag) => (
                <li key={tag}>
                  <span className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-2.5 py-0.5 font-mono text-[0.7rem] text-[var(--ink-soft)]">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </header>

          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)]">
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="mt-10 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              My role
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-soft)]">{study.role}</p>
          </div>

          <div className="mt-12 space-y-10">
            {study.sections.map((section) => (
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

          <blockquote className="mt-14 border-l-4 border-[var(--rose)] pl-6">
            <p className="font-display text-xl leading-relaxed text-[var(--ink-soft)] italic">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-[var(--muted)]">
              <cite className="not-italic">
                <span className="font-medium text-[var(--ink)]">{study.testimonial.name}</span>
                {study.testimonial.role ? ` · ${study.testimonial.role}` : null}
              </cite>
            </footer>
          </blockquote>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--surface)] transition hover:bg-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              Visit live site
              <span className="ml-1.5" aria-hidden="true">
                ↗
              </span>
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Get in touch
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
