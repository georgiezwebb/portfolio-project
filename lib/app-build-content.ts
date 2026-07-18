/** Landing page copy for /app-build */

export const appBuild = {
  meta: {
    title: "Internal app builds for small businesses",
    description:
      "A fixed-scope app build for small companies. Replace spreadsheets and manual work with a simple internal tool.",
  },
  hero: {
    badge: "Limited availability",
    headline: "An internal app built for your business",
    subhead:
      "For a short time I'm taking on fixed-scope builds for useful internal tools that replace spreadsheets, email chains, and workarounds.",
    cta: "Book a free call",
  },
  problems: {
    heading: "Sound familiar?",
    items: [
      "Important data lives in spreadsheets that nobody fully trusts",
      "The team repeats the same manual steps every week",
      "Customer or job information is spread across email, notes, and forms",
      "You've outgrown off-the-shelf software but don't need a huge custom project",
    ],
  },
  examples: {
    heading: "The kind of thing I build",
    items: [
      "Job and project trackers",
      "Client or customer portals",
      "Booking and scheduling tools",
      "Inventory and stock lists",
      "Staff dashboards and handover notes",
      "Simple approval workflows",
      "Replacing a process that currently runs on Excel",
    ],
  },
  included: {
    heading: "What's included",
    items: [
      "A discovery call to agree scope and priorities",
      "A focused internal web app for your team",
      "Login and sensible permissions",
      "A clean interface that works on desktop and mobile",
      "Handover, documentation, and a short support period after launch",
    ],
  },
  process: {
    heading: "The process",
    steps: [
      {
        title: "Book a call",
        description: "A 30-minute chat to understand what you need and whether I'm a good fit.",
      },
      {
        title: "Agree scope",
        description: "We define one clear problem, what the app must do, and a fixed price and timeline.",
      },
      {
        title: "Build and launch",
        description: "I build the app, keep you updated, and hand it over ready for your team to use.",
      },
    ],
  },
  booking: {
    heading: "Book a call",
    intro:
      "Pick a time below for a free 30-minute call. No obligation if it's not the right fit.",
    fallbackEmail: "hello@georgiewebb.co.uk",
  },
  footer: {
    name: "Georgie Webb",
    role: "Freelance Software Engineer",
    linkLabel: "Main site",
  },
} as const;

export const calendlyEventUrl =
  "https://calendly.com/georgiezwebb/app-build-meeting" as const;

export function getCalendlyUrl(): string {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();
  return url || calendlyEventUrl;
}

/** Calendly branding to match site colours (hex without #). */
export function getCalendlyEmbedUrl(baseUrl: string): string {
  const url = new URL(baseUrl);
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("hide_event_type_details", "1");
  url.searchParams.set("hide_landing_page_details", "1");
  url.searchParams.set("background_color", "f9f7f5");
  url.searchParams.set("text_color", "1c1524");
  url.searchParams.set("primary_color", "0d9488");
  return url.toString();
}
