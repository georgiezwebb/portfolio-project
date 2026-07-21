"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { appBuild } from "@/lib/app-build-content";

const MIN_HEIGHT = 700;
const HEIGHT_BUFFER = 48;

type AppBuildBookingProps = {
  embedUrl: string | null;
};

export function AppBuildBooking({ embedUrl }: AppBuildBookingProps) {
  const [height, setHeight] = useState(MIN_HEIGHT);

  useEffect(() => {
    if (!embedUrl) return;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;

      const data = event.data as {
        event?: string;
        payload?: { height?: number | string };
      };

      if (data.event === "calendly.page_height" && data.payload?.height != null) {
        const parsed = Number.parseFloat(String(data.payload.height));
        if (!Number.isFinite(parsed)) return;

        setHeight(Math.max(MIN_HEIGHT, Math.ceil(parsed) + HEIGHT_BUFFER));
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [embedUrl]);

  if (embedUrl) {
    return (
      <div className="mx-auto w-full min-w-0 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] py-6 sm:px-6 sm:py-8">
        <InlineWidget
          url={embedUrl}
          styles={{ height: `${height}px`, minWidth: "0", width: "100%" }}
        />
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center">
      <p className="text-base leading-relaxed text-[var(--ink-soft)]">
        Calendly is not configured yet. Add your booking link to{" "}
        <code className="rounded bg-[var(--paper)] px-1.5 py-0.5 font-mono text-sm text-[var(--ink)]">
          NEXT_PUBLIC_CALENDLY_URL
        </code>{" "}
        in your environment variables.
      </p>
      <a
        href={`mailto:${appBuild.booking.fallbackEmail}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--surface)] transition hover:bg-[var(--plum)]"
      >
        Email {appBuild.booking.fallbackEmail}
      </a>
    </div>
  );
}
