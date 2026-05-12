const linkedIn = "https://www.linkedin.com/in/georgie-webb-0106a254/";

const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

const weeks = [
  {
    id: "week-1",
    title: "Week 1 — HTML in the wild",
    tag: "Foundations",
    summary:
      "Five standalone HTML experiences organised into distinct categories, each answering a different brief: structure, content modelling, navigation patterns, forms, and static storytelling.",
    detail: (
      <>
        <p>
          This sprint was about proving fluency in the platform layer: semantic landmarks (
          <code className="rounded bg-[var(--panel)] px-1 py-0.5 text-[0.9em] text-[var(--jungle)]">
            header
          </code>
          ,{" "}
          <code className="rounded bg-[var(--panel)] px-1 py-0.5 text-[0.9em] text-[var(--jungle)]">
            main
          </code>
          ,{" "}
          <code className="rounded bg-[var(--panel)] px-1 py-0.5 text-[0.9em] text-[var(--jungle)]">
            section
          </code>
          ), predictable heading hierarchy, and keyboard-friendly focus order before any framework
          sugar. The five HTML projects emphasise different categories so the collection reads like a
          mini design system: repeatable patterns, consistent spacing language, and copy that makes
          sense out of context—exactly what search engines and screen readers reward.
        </p>
        <p>
          From an SEO standpoint, these pages practise the basics that compound later: descriptive{" "}
          <code className="rounded bg-[var(--panel)] px-1 py-0.5 text-[0.9em] text-[var(--jungle)]">
            title
          </code>{" "}
          /{" "}
          <code className="rounded bg-[var(--panel)] px-1 py-0.5 text-[0.9em] text-[var(--jungle)]">
            meta description
          </code>{" "}
          thinking, meaningful link text, and image semantics—habits that carry straight into the
          Next.js work in week two.
        </p>
      </>
    ),
    chips: ["Semantic HTML", "Accessibility", "Information architecture", "Static sites"],
  },
  {
    id: "week-2",
    title: "Week 2 — AI note-taking (full stack)",
    tag: "Product",
    summary:
      "A full-stack notes product with Next.js, PostgreSQL, and Prisma—built to capture, organise, and retrieve ideas with AI assistance in the loop.",
    detail: (
      <>
        <p>
          This is the flagship systems-design week: a modern React surface area in{" "}
          <strong className="text-[var(--ochre)]">Next.js</strong>, a normalised{" "}
          <strong className="text-[var(--ochre)]">PostgreSQL</strong> schema, and{" "}
          <strong className="text-[var(--ochre)]">Prisma</strong> as the type-safe bridge. The goal
          was not a demo page but a believable product backbone—migrations, constraints, and query
          shapes that stay fast as data grows.
        </p>
        <p>
          AI features were integrated as accelerators: smarter capture, summarisation, and retrieval
          patterns that respect user ownership. For SEO and discovery, this stack previews how you
          would ship a real SaaS: server-rendered shells where they matter, solid metadata strategy,
          and content that could graduate to public marketing pages without a rewrite.
        </p>
      </>
    ),
    chips: ["Next.js", "PostgreSQL", "Prisma", "AI UX", "Full-stack"],
  },
  {
    id: "week-3",
    title: "Week 3 — Python automation & games",
    tag: "Systems & play",
    summary:
      "Python workflows for boring-to-repeat tasks, plus playful game projects that exercise state machines, loops, and readable module boundaries.",
    detail: (
      <>
        <p>
          Automation week was about turning fragile manual steps into scripts you can trust:
          filesystem passes, batch transforms, guard rails, and logs that answer “what ran, when,
          and why.” The game projects complement that discipline—tight feedback loops, simulation
          state, and refactoring for readability so collaborators (and future you) stay oriented.
        </p>
        <p>
          For your public narrative, this week signals versatility: you are not only comfortable in
          the browser—you can own the glue tier that keeps creative projects and shipping workflows
          moving.
        </p>
      </>
    ),
    chips: ["Python", "Automation", "Games", "CLI tooling", "Testing mindset"],
  },
  {
    id: "week-4",
    title: "Week 4 — AI agents",
    tag: "Agents",
    summary:
      "Agentic workflows that plan, use tools, and recover from ambiguity—balancing autonomy with human-readable traces.",
    detail: (
      <>
        <p>
          The agents module focused on orchestration: prompts that behave consistently, tool
          selection that stays explainable, and evaluation habits that catch regressions early.
          Patterns mirror what production teams care about: structured outputs, retries, budget caps,
          and UX that surfaces what the model did—not a black box that silently drifts.
        </p>
        <p>
          Positioning this work on your portfolio helps recruiters and clients map you to the fastest
          growing lane in software: applied LLMs with engineering discipline, not one-off chat
          demos.
        </p>
      </>
    ),
    chips: ["LLMs", "Tool use", "Orchestration", "Evaluation", "Safety UX"],
  },
  {
    id: "week-5",
    title: "Week 5 — Chrome extensions",
    tag: "Browser",
    summary:
      "Browser extensions that meet users where they work—content scripts, messaging, and polish that feels native to Chrome.",
    detail: (
      <>
        <p>
          Extensions force an appreciation for the browser as an OS: permissions, isolation,
          messaging between the service worker and the page, and the slow-moving reality of manifest
          changes. Shipping even a small extension proves you can reason about third-party surfaces,
          hostile environments, and upgrade paths.
        </p>
        <p>
          From an SEO and distribution standpoint, extensions pair with marketing pages and clear
          install flows—another echo of week six’s launch thinking.
        </p>
      </>
    ),
    chips: ["Chrome", "Manifest V3", "Content scripts", "Product polish"],
  },
  {
    id: "week-6",
    title: "Week 6 — Deployment & marketing",
    tag: "Launch",
    summary:
      "Taking projects from “works on my machine” to hosted, observable experiences—with positioning, analytics-minded measurement, and a credible go-to-market story.",
    detail: (
      <>
        <p>
          Deployment is the capstone: environments, secrets, CI/CD habits, rollbacks, and the
          operational kindness that keeps sites online. Marketing adds the other half—clear
          positioning, crisp landing copy, and the analytics breadcrumbs that tell you whether the
          story landed.
        </p>
        <p>
          This site practices what week six preaches: structured metadata, a{" "}
          <code className="rounded bg-[var(--panel)] px-1 py-0.5 text-[0.9em] text-[var(--jungle)]">
            robots.txt
          </code>{" "}
          route, a{" "}
          <code className="rounded bg-[var(--panel)] px-1 py-0.5 text-[0.9em] text-[var(--jungle)]">
            sitemap
          </code>
          , semantic headings, and JSON-LD that helps search engines connect your identity to your
          work graph.
        </p>
      </>
    ),
    chips: ["Hosting", "CI/CD", "Analytics", "Positioning", "Launch checklist"],
  },
] as const;

const stackGroups = [
  {
    name: "Web platform",
    items: ["Semantic HTML", "CSS", "TypeScript", "React", "Next.js"],
  },
  {
    name: "Data & backend",
    items: ["PostgreSQL", "Prisma", "API design", "Migrations"],
  },
  {
    name: "AI & automation",
    items: ["LLM workflows", "Agents", "Python tooling", "Evaluation"],
  },
  {
    name: "Ship & grow",
    items: ["Chrome extensions", "Deployment", "SEO basics", "Marketing craft"],
  },
];

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="relative z-10 border-b border-[var(--border)] bg-[var(--panel)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-4">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-[var(--ink)] transition hover:text-[var(--jungle)]"
          >
            Georgie Webb<span className="text-[var(--crimson)]">.</span>
          </a>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[var(--muted)]">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    className="transition hover:text-[var(--ochre)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--jungle)]"
                    href={item.href}
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
          className="relative z-10 border-b border-[var(--border)] px-5 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="animate-rise delay-1 font-display text-sm italic tracking-wide text-[var(--jungle-light)]">
              Portfolio · six weeks in full colour
            </p>
            <h1
              id="hero-heading"
              className="font-display animate-rise delay-2 mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--ink)] sm:text-6xl hero-frida"
            >
              Bold craft. Unquiet code.
            </h1>
            <p className="animate-rise delay-3 mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              I&apos;m <strong className="text-[var(--ink)]">Georgie Webb</strong>—I build full-stack
              work that carries the same intention as a portrait: honest structure, vivid accents, and
              nowhere to hide. These six weeks move from HTML roots through AI products, Python,
              agents, browser extensions, and the launch stories that make them matter.
            </p>
            <div className="animate-rise delay-4 mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-[var(--jungle)] bg-[var(--jungle)] px-6 py-3 text-sm font-semibold text-[var(--cream)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,92,74,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
              >
                View the six-week arc
              </a>
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--crimson)] hover:text-[var(--crimson)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--crimson)]"
              >
                LinkedIn profile →
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="relative z-10 border-b border-[var(--border)] px-5 py-16 sm:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:items-start">
            <div>
              <h2
                id="about-heading"
                className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl"
              >
                About
              </h2>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                I work across the grain of &quot;just a tutorial&quot; builds: clear information
                architecture, resilient data models, and launch thinking that respects both users and
                search engines. My trajectory through this bootcamp was deliberately full-stack so I
                could connect product intent, implementation, and distribution in one thread.
              </p>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                For a fuller timeline—experience, education, and supporting context—visit my{" "}
                <a
                  className="font-semibold text-[var(--ochre)] underline decoration-[var(--crimson)] decoration-2 underline-offset-4 hover:text-[var(--jungle)]"
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                . The story there complements the project narratives below; together they demonstrate
                consistency between public presence and shipped artifacts.
              </p>
            </div>
            <aside
              aria-label="Highlights"
              className="card-frida rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[0_16px_48px_rgba(44,24,16,0.12)]"
            >
              <h3 className="font-display text-lg font-bold text-[var(--ochre)]">Operating principles</h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--jungle)]">→</span> Ship readable systems: names, docs,
                  and schemas that explain intent.
                </li>
                <li>
                  <span className="text-[var(--crimson)]">→</span> Treat accessibility and SEO as product
                  features, not an audit at the end.
                </li>
                <li>
                  <span className="text-[var(--ochre)]">→</span> Instrument launches so you learn faster
                  than you burn runway.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section
          id="work"
          aria-labelledby="work-heading"
          className="relative z-10 px-5 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2
                id="work-heading"
                className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl"
              >
                Selected work — six-week sprint
              </h2>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                Each week below maps to a concrete deliverable in the bootcamp. Descriptions are
                written to double as portfolio copy and search-friendly context: concrete tech terms,
                outcomes, and the connective tissue between projects.
              </p>
            </div>

            <ol className="mt-14 space-y-12 border-l border-[var(--border)] pl-8 sm:pl-10">
              {weeks.map((week, index) => (
                <li key={week.id} className="relative">
                  <span
                    className="absolute -left-[42px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--crimson)] bg-[var(--cream)] font-display text-sm font-bold text-[var(--crimson)] sm:-left-[50px]"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <article id={week.id} aria-labelledby={`${week.id}-title`}>
                    <header className="flex flex-wrap items-baseline gap-3 gap-y-1">
                      <h3
                        id={`${week.id}-title`}
                        className="font-display text-xl font-bold text-[var(--ink)] sm:text-2xl"
                      >
                        {week.title}
                      </h3>
                      <span className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-[var(--jungle)]">
                        {week.tag}
                      </span>
                    </header>
                    <p className="mt-3 text-[var(--muted)] leading-relaxed">{week.summary}</p>
                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                      {week.detail}
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies and themes">
                      {week.chips.map((chip) => (
                        <li key={chip}>
                          <span className="inline-block rounded-md border border-[var(--border)] bg-[rgba(44,24,16,0.06)] px-2.5 py-1 text-xs font-medium text-[var(--ink)]">
                            {chip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="stack"
          aria-labelledby="stack-heading"
          className="relative z-10 border-t border-[var(--border)] px-5 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="stack-heading"
              className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              Stack & themes
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)] leading-relaxed">
              Keywords recruiters and clients scan for—grouped to show breadth without dumping a
              disconnected buzzword wall.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stackGroups.map((group) => (
                <div
                  key={group.name}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-5"
                >
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--ochre)]">
                    {group.name}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[var(--crimson)]" aria-hidden="true">
                          ▸
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="relative z-10 border-t border-[var(--border)] px-5 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="contact-heading"
              className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              Let&apos;s connect
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)] leading-relaxed">
              The fastest way to understand how I work is to pair this portfolio with my LinkedIn
              narrative—projects, collaborations, and the through-line between them.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--jungle)] px-6 py-3 text-sm font-semibold text-[var(--jungle)] transition hover:bg-[var(--jungle)] hover:text-[var(--cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--jungle)]"
              >
                Message on LinkedIn
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--ochre)] hover:text-[var(--ochre)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ochre)]"
              >
                Email placeholder — swap for yours
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[var(--border)] px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Georgie Webb. Crafted as a living case study in{" "}
            <abbr title="Search engine optimisation">SEO</abbr>-minded shipping.
          </p>
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[var(--ochre)] hover:text-[var(--jungle)]"
          >
            linkedin.com/in/georgie-webb-0106a254
          </a>
        </div>
      </footer>
    </>
  );
}
