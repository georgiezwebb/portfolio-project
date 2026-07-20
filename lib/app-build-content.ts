/** Landing page copy for /app-build */

export const appBuild = {
  meta: {
    title: "Internal applications for local small businesses",
    description:
      "Fixed-scope internal tools for small teams in West London and the surrounding area.",
  },
  hero: {
    badge: "West London",
    headline: "A practical app for your business",
    subhead:
      "I am a software engineer based in West London. For a limited period I am taking on a small number of local projects building focused internal tools to replace spreadsheets and manual workarounds.",
    cta: "Book a free call",
  },
  problems: {
    heading: "Does this sound familiar?",
    items: [
      "Critical information remains in spreadsheets the team does not fully trust",
      "Staff repeat the same manual steps each week",
      "Client and job data is scattered across email, notes, and forms",
      "You need a tailored solution",
    ],
  },
  mockups: {
    heading: "Typical projects",
    intro:
      "The companies below are fictional, these screens show the kind of interface I might build.",
    items: [
      {
        title: "Job tracker",
        caption:
          "Example for Walsh & Pike, a plumbing team that wanted one view of the week's jobs.",
        brand: {
          name: "Walsh & Pike",
          tagline: "Plumbing & heating",
          initials: "WP",
          accent: "#0d9488",
        },
        type: "jobs",
      },
      {
        title: "Client portal",
        caption:
          "Example for Linden Row Studio, where clients check visits and documents in one place.",
        brand: {
          name: "Linden Row Studio",
          tagline: "Interior design",
          initials: "LR",
          accent: "#c76b8a",
        },
        type: "portal",
      },
      {
        title: "Stock list",
        caption:
          "Example for Cornerstone Supplies, replacing a shared spreadsheet for van and shelf stock.",
        brand: {
          name: "Cornerstone Supplies",
          tagline: "Trade materials",
          initials: "CS",
          accent: "#92670a",
        },
        type: "stock",
      },
    ],
  },
  included: {
    heading: "What is included",
    items: [
      "An initial call to define requirements and priorities",
      "One focused web application for your team",
      "Secure login and appropriate access controls",
      "A responsive interface for desktop and mobile",
      "Documentation, handover, and post-launch support",
    ],
  },
  process: {
    heading: "How it works",
    steps: [
      {
        title: "Book a call",
        description:
          "A free 30-minute consultation, in person if you are local, otherwise by video call.",
      },
      {
        title: "Agree scope",
        description:
          "We define a single clear objective, a fixed price, and a realistic delivery timeline.",
      },
      {
        title: "Build and launch",
        description:
          "I develop the application, provide regular updates, and deliver a system ready for your team to use.",
      },
    ],
  },
  booking: {
    heading: "Book a call",
    intro:
      "Select a time below. There is no obligation if the project is not the right fit.",
    fallbackEmail: "hello@georgiewebb.co.uk",
  },
  footer: {
    name: "Georgie Webb",
    role: "Brentford · Freelance Software Engineer",
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
