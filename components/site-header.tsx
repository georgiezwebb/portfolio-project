import Link from "next/link";
import { nav, site } from "@/lib/site-content";
import { SocialLinks } from "@/components/social-links";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-[var(--line)] bg-[var(--surface)]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]"
          >
            {site.name}
          </Link>
          <SocialLinks />
        </div>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
