import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import { HeroPortrait } from "@/components/hero-portrait";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  about,
  capabilities,
  credentials,
  engineeringStandards,
  problemsISolve,
  projects,
  site,
  techStack,
} from "@/lib/site-content";
import { thinkingArticles } from "@/lib/thinking";

export default function Home() {
  const contactLinks = [
    site.linkedIn && {
      label: "LinkedIn",
      href: site.linkedIn,
    },
    site.github && {
      label: "GitHub",
      href: site.github,
    },
    site.email && {
      label: "Email",
      href: `mailto:${site.email}`,
    },
    site.phone && {
      label: site.phone,
      href: `tel:+44${site.phone.replace(/\s/g, "").replace(/^0/, "")}`,
    },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <SiteHeader />

      <main id="main">
        <section
          id="top"
          aria-labelledby="hero-heading"
          className="relative overflow-x-clip overflow-y-visible border-b border-[var(--line)] px-6 py-20 sm:py-28"
        >
          <div className="relative mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-6">
            <div>
              <p className="reveal reveal-1 font-mono text-sm uppercase tracking-[0.2em] text-[var(--accent)] sm:mt-12">
                {site.location}
              </p>
              <h1
                id="hero-heading"
                className="font-display reveal reveal-2 mt-4 max-w-2xl text-5xl font-medium leading-[1.05] text-[var(--ink)] sm:mt-8 sm:text-6xl"
              >
                Software Engineer
              </h1>
              <p className="reveal reveal-3 mt-6 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                {techStack.join(" · ")}
              </p>
              <div className="reveal reveal-3 mt-10">
                <a
                  href="#demonstrations"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--surface)] transition hover:bg-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  See demonstrations
                </a>
              </div>
            </div>
            <HeroPortrait />
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-b border-[var(--line)] px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="about-heading"
              className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
            >
              About
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {credentials.map((item) => {
                  const label = "logoAlt" in item && item.logoAlt ? item.logoAlt : item.title;

                  return (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5"
                  >
                    {"logo" in item && item.logo ? (
                      <Image
                        src={item.logo}
                        alt={label}
                        width={"logoWidth" in item ? item.logoWidth : 112}
                        height={"logoHeight" in item ? item.logoHeight : 32}
                        className="h-8 w-auto max-w-full"
                        unoptimized
                      />
                    ) : (
                      <p className="font-display text-2xl font-medium text-[var(--ink)]">
                        {item.title}
                      </p>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>
                  </li>
                  );
                })}
              </ul>
              <div className="space-y-5 text-base leading-relaxed text-[var(--muted)]">
                <p className="text-[var(--ink-soft)]">{about.intro}</p>
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
                <p>
                  {about.closingBefore}
                  <a
                    href="#contact"
                    className="font-medium text-[var(--ink-soft)] underline decoration-[var(--rose)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    get in touch
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="problems"
          aria-labelledby="problems-heading"
          className="border-b border-[var(--line)] px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="problems-heading"
              className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
            >
              Problems I solve
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {problemsISolve.map((problem) => (
                <li
                  key={problem}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-6 py-5 text-base leading-relaxed text-[var(--ink-soft)]"
                >
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="demonstrations"
          aria-labelledby="demonstrations-heading"
          className="border-b border-[var(--line)] px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="demonstrations-heading"
              className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
            >
              Engineering demonstrations
            </h2>
            <p className="mt-3 max-w-xl text-[var(--muted)]">
              A few things I&apos;ve built recently.
            </p>
            <ul className="mt-12 flex list-none flex-col gap-6">
              {projects.map((project) => (
                <li key={project.title}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="capabilities"
          aria-labelledby="capabilities-heading"
          className="border-b border-[var(--line)] px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="capabilities-heading"
              className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
            >
              Things I build
            </h2>
            <ul className="mt-10 flex flex-wrap gap-3">
              {capabilities.map((item) => (
                <li key={item}>
                  <span className="inline-block rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--ink-soft)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="standards"
          aria-labelledby="standards-heading"
          className="border-b border-[var(--line)] px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="standards-heading"
              className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
            >
              Every project includes
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {engineeringStandards.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 text-sm text-[var(--ink-soft)]"
                >
                  <span className="text-[var(--accent)]" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="engineering"
          aria-labelledby="engineering-heading"
          className="border-b border-[var(--line)] px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="engineering-heading"
              className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
            >
              Engineering
            </h2>
            <p className="mt-3 max-w-xl text-[var(--muted)]">
              Notes on how I&apos;d approach the kind of work agencies bring in.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {thinkingArticles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/engineering/${article.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent-dim)]"
                  >
                    <h3 className="font-display text-xl font-medium text-[var(--ink)] group-hover:text-[var(--accent)]">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {article.summary}
                    </p>
                    <span className="mt-4 text-sm font-medium text-[var(--accent)]">Read →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="contact-heading"
              className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
            >
              Contact
            </h2>
            <p className="mt-4 max-w-md text-[var(--muted)]">
              Happy to chat about freelance work, a rescue job, or covering capacity for a few
              weeks. A 15-minute call is a good place to start.
            </p>
            <ul className="mt-8 flex flex-wrap gap-4">
              {contactLinks.length > 0 ? (
                contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("mailto:") || link.href.startsWith("tel:")
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        link.href.startsWith("mailto:") || link.href.startsWith("tel:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                    >
                      {link.label}
                      {!link.href.startsWith("mailto:") && !link.href.startsWith("tel:") ? (
                        <span className="ml-1.5" aria-hidden="true">
                          ↗
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-sm text-[var(--muted)]">
                  Add email or links in <code className="font-mono text-xs">lib/site-content.ts</code>
                  .
                </li>
              )}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
