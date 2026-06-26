import { ProjectCard } from "@/components/project-card";
import { about, nav, projects, site } from "@/lib/site-content";

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
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="relative z-10 border-b border-[var(--line)] bg-[var(--surface)]/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#top"
            className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]"
          >
            {site.name}
          </a>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section
          id="top"
          aria-labelledby="hero-heading"
          className="relative overflow-hidden border-b border-[var(--line)] px-6 py-20 sm:py-28"
        >
          <div className="hero-mark pointer-events-none" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl">
            <p className="reveal reveal-1 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {site.role}
            </p>
            <h1
              id="hero-heading"
              className="font-display reveal reveal-2 mt-4 max-w-2xl text-5xl font-medium leading-[1.05] text-[var(--ink)] sm:text-6xl"
            >
              {site.tagline}
            </h1>
            <p className="reveal reveal-3 mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)]">
              A few things I&apos;ve built recently. More detail in{" "}
              <a
                href="#about"
                className="text-[var(--ink-soft)] underline decoration-[var(--rose)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
              >
                about
              </a>{" "}
              and on{" "}
              <a
                href={site.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink-soft)] underline decoration-[var(--rose)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
              .
            </p>
            <div className="reveal reveal-3 mt-10">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--surface)] transition hover:bg-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                See work
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-b border-[var(--line)] px-6 py-16 sm:py-24"
        >
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <h2
                id="about-heading"
                className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
              >
                About
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)]">More to come.</p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-[var(--muted)]">
              <p className="text-[var(--ink-soft)]">{about.intro}</p>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-heading" className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <h2
              id="work-heading"
              className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
            >
              Selected work
            </h2>
            <p className="mt-3 max-w-xl text-[var(--muted)]">
              Demos and repos open in a new tab when available.
            </p>
            <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 sm:items-stretch">
              {projects.map((project) => (
                <li key={project.title} className="h-full">
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="border-t border-[var(--line)] px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="contact-heading"
              className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
            >
              Contact
            </h2>
            <p className="mt-4 max-w-md text-[var(--muted)]">
              Happy to chat about roles, freelance, or a project you&apos;re working on.
            </p>
            <ul className="mt-8 flex flex-wrap gap-4">
              {contactLinks.length > 0 ? (
                contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                    >
                      {link.label}
                      {!link.href.startsWith("mailto:") ? (
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

      <footer className="border-t border-[var(--line)] px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} {site.name}
          </p>
          {site.linkedIn ? (
            <a
              href={site.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--muted)] hover:text-[var(--accent)]"
            >
              LinkedIn ↗
            </a>
          ) : null}
        </div>
      </footer>
    </>
  );
}
