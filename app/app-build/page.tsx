import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppBuildBooking } from "@/components/app-build-booking";
import { AppBuildMockups } from "@/components/app-build-mockups";
import {
  appBuild,
  getCalendlyEmbedUrl,
  getCalendlyUrl,
} from "@/lib/app-build-content";
import { site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: appBuild.meta.title,
  description: appBuild.meta.description,
  robots: { index: true, follow: true },
};

export default function AppBuildPage() {
  const embedUrl = getCalendlyEmbedUrl(getCalendlyUrl());

  return (
    <>
      <header className="border-b border-[var(--line)] bg-[var(--surface)]/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]"
          >
            {site.name}
          </Link>
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--surface)] transition hover:bg-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            {appBuild.hero.cta}
          </a>
        </div>
      </header>

      <main id="main" className="app-build-page">
        <section className="border-b border-[var(--line)] px-6 py-16 sm:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="text-center lg:text-left">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                {appBuild.hero.badge}
              </p>
              <h1 className="font-display mt-6 text-4xl font-medium leading-[1.08] text-[var(--ink)] sm:text-5xl">
                {appBuild.hero.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                {appBuild.hero.subhead}
              </p>
              <a
                href="#book"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--surface)] transition hover:bg-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                {appBuild.hero.cta}
              </a>
            </div>
            <Image
              src="/headshot.png"
              alt={`Portrait of ${site.name}`}
              width={1024}
              height={1286}
              className="mx-auto h-auto w-full max-w-[280px] rounded-b-2xl"
              priority
            />
          </div>
        </section>

        <section className="border-b border-[var(--line)] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-3xl font-medium text-[var(--ink)]">
              {appBuild.problems.heading}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {appBuild.problems.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-[var(--ink-soft)]"
                >
                  <span className="mt-1 text-[var(--accent)]" aria-hidden="true">
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-[var(--line)] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-3xl font-medium text-[var(--ink)]">
              {appBuild.mockups.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              {appBuild.mockups.intro}
            </p>
            <AppBuildMockups items={appBuild.mockups.items} />
          </div>
        </section>

        <section className="border-b border-[var(--line)] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-3xl font-medium text-[var(--ink)]">
              {appBuild.included.heading}
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {appBuild.included.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 text-sm leading-relaxed text-[var(--ink-soft)]"
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

        <section className="border-b border-[var(--line)] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-3xl font-medium text-[var(--ink)]">
              {appBuild.process.heading}
            </h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-3">
              {appBuild.process.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                    Step {index + 1}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-medium text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="book" aria-labelledby="book-heading" className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <h2
              id="book-heading"
              className="font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl"
            >
              {appBuild.booking.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              {appBuild.booking.intro}
            </p>
          </div>

          <div className="mx-auto mt-10 w-full min-w-0 max-w-[767px] xl:max-w-6xl">
            <AppBuildBooking embedUrl={embedUrl} />
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[var(--muted)]">
            {appBuild.footer.name} · {appBuild.footer.role}
          </p>
          <Link
            href="/"
            className="text-sm font-medium text-[var(--accent)] transition hover:text-[var(--plum)]"
          >
            {appBuild.footer.linkLabel} ↗
          </Link>
        </div>
      </footer>
    </>
  );
}
