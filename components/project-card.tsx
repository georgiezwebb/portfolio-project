import Image from "next/image";
import type { Project } from "@/lib/site-content";

type ProjectCardProps = {
  project: Project;
};

const IMAGE_ASPECT = "aspect-[16/10]";

function isLiveLink(href: string | undefined): href is string {
  return Boolean(href && href !== "#" && !href.startsWith("#"));
}

const linkClass =
  "inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]";

function ProjectImage({ project, live }: { project: Project; live: boolean }) {
  const fit = project.imageFit ?? "cover";
  const wrapperClass = `relative ${IMAGE_ASPECT} w-full shrink-0 overflow-hidden border-b border-[var(--line)] bg-[var(--paper)]`;

  const imageContent = project.image ? (
    <Image
      src={project.image}
      alt={project.imageAlt ?? `Screenshot of ${project.title}`}
      fill
      className={
        fit === "contain"
          ? "object-contain object-center transition duration-500 group-hover:scale-[1.01]"
          : "object-cover object-top transition duration-500 group-hover:scale-[1.02]"
      }
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
    />
  ) : (
    <div
      className="absolute inset-0 bg-gradient-to-br from-[var(--paper)] via-[var(--surface)] to-[rgba(228,164,180,0.15)]"
      aria-hidden="true"
    />
  );

  if (live && project.image) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${wrapperClass} block`}
        aria-label={`Open ${project.title} live site`}
      >
        {imageContent}
      </a>
    );
  }

  return <div className={wrapperClass}>{imageContent}</div>;
}

function ProjectLinks({ project }: { project: Project }) {
  const live = isLiveLink(project.href);
  const repo = isLiveLink(project.repo);

  if (!live && !repo) {
    return <p className="text-sm text-[var(--muted)]">Link coming soon</p>;
  }

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {live ? (
        <a href={project.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Live site
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
    <article className="project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] transition hover:-translate-y-1 hover:border-[var(--accent-dim)] hover:shadow-[0_20px_50px_rgba(26,21,32,0.08)]">
      <ProjectImage project={project} live={live} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display line-clamp-2 text-xl font-medium leading-snug text-[var(--ink)]">
            {project.title}
          </h3>
          {project.year ? (
            <span className="shrink-0 font-mono text-xs text-[var(--muted)]">{project.year}</span>
          ) : null}
        </div>
        <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>
        <ul
          className="mt-5 flex min-h-[3.75rem] flex-wrap content-start gap-2"
          aria-label="Technologies"
        >
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-2.5 py-0.5 font-mono text-[0.7rem] text-[var(--ink-soft)]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-auto min-h-[2.25rem] pt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
