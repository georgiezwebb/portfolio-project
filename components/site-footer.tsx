import { site } from "@/lib/site-content";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} {site.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
