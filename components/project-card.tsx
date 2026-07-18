import Link from "next/link";
import Image from "next/image";
import { ArchitectureStack } from "@/components/architecture-stack";
import type { Project } from "@/lib/site-content";

type ProjectCardProps = {
  project: Project;
};

function isLiveLink(href: string | undefined): href is string {
  return Boolean(href && href !== "#" && !href.startsWith("#"));
}

const linkClass =
  "inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]";

function ScreenshotFrame({ project, live }: { project: Project; live: boolean }) {
  const fit = project.imageFit ?? "cover";

  const preview = (
    <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_12px_40px_rgba(26,21,32,0.07)]">
      <div
        className="flex items-center gap-1.5 border-b border-[var(--line)] bg-[var(--paper)] px-3 py-2"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-[rgba(228,164,180,0.55)]" />
        <span className="h-2 w-2 rounded-full bg-[rgba(228,164,180,0.35)]" />
        <span className="h-2 w-2 rounded-full bg-[rgba(228,164,180,0.2)]" />
      </div>
      <div className="relative aspect-[16/10] w-full bg-[var(--paper)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `Screenshot of ${project.title}`}
            fill
            className={
              fit === "contain"
                ? "object-contain object-center p-2 transition duration-500 group-hover:scale-[1.02]"
                : "object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            }
            sizes="(max-width: 640px) 100vw, 360px"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[var(--paper)] via-[var(--surface)] to-[rgba(228,164,180,0.15)]"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );

  if (live && project.image) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition hover:opacity-95"
        aria-label={`Open ${project.title} live site`}
      >
        {preview}
      </a>
    );
  }

  return preview;
}

function ProjectLinks({ project }: { project: Project }) {
  const live = isLiveLink(project.href);
  const repo = isLiveLink(project.repo);
  const hasCaseStudy = Boolean(project.slug);

  if (!live && !repo && !hasCaseStudy) {
    return <p className="text-sm text-[var(--muted)]">Link coming soon</p>;
  }

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {hasCaseStudy ? (
        <Link href={`/work/${project.slug}`} className={linkClass}>
          More info
        </Link>
      ) : null}
      {live ? (
        <a href={project.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Live demo
          <span aria-hidden="true">↗</span>
        </a>
      ) : null}
      {repo ? (
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Code
          <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const live = isLiveLink(project.href);

  return (
    <article className="project-card group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] transition hover:border-[var(--accent-dim)] hover:shadow-[0_20px_50px_rgba(26,21,32,0.08)] sm:flex sm:items-start sm:gap-0">
      <div className="border-b border-[var(--line)] bg-[var(--paper)]/50 p-5 sm:w-[min(40%,19rem)] sm:shrink-0 sm:border-b-0 sm:border-r sm:p-6">
        <ScreenshotFrame project={project} live={live} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-medium leading-snug text-[var(--ink)] sm:text-2xl">
            {project.title}
          </h3>
          {project.year ? (
            <span className="shrink-0 font-mono text-xs text-[var(--muted)]">{project.year}</span>
          ) : null}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          {project.description}
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--accent)]">
              Demonstrates
            </h4>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
              {project.demonstrates.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--accent)]" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {project.architecture ? (
            <ArchitectureStack layers={project.architecture} className="min-w-[7.5rem]" />
          ) : null}
        </div>

        <div className="mt-auto pt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
