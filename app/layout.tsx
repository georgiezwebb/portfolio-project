import type { Metadata } from "next";
import { Fraunces, Lora } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const linkedIn = "https://www.linkedin.com/in/georgie-webb-0106a254/";
const siteUrl = getSiteUrl();

const siteDescription =
  "Portfolio of Georgie Webb: AI bootcamp projects spanning semantic HTML, Next.js with PostgreSQL and Prisma, Python automation and games, AI agents, Chrome extensions, and deployment with marketing. Full-stack developer focused on practical, shipped software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Georgie Webb · Developer portfolio · AI, full-stack & shipping",
    template: "%s · Georgie Webb",
  },
  description: siteDescription,
  keywords: [
    "Georgie Webb",
    "portfolio",
    "full-stack developer",
    "Next.js",
    "PostgreSQL",
    "Prisma",
    "Python",
    "AI agents",
    "Chrome extension",
    "deployment",
    "SEO",
    "AI bootcamp",
    "web development",
  ],
  authors: [{ name: "Georgie Webb", url: linkedIn }],
  creator: "Georgie Webb",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Georgie Webb — Portfolio",
    title: "Georgie Webb · Frida folk–modern portfolio",
    description:
      "Six weeks of shipped work: HTML foundations, AI note-taking (Next.js + Postgres + Prisma), Python automation & games, AI agents, Chrome extensions, deployment & marketing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgie Webb · Developer portfolio",
    description:
      "Full-stack and AI portfolio: Next.js, PostgreSQL, Prisma, Python, agents, extensions, go-to-market.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Georgie Webb — Portfolio",
      description: siteDescription,
      inLanguage: "en-GB",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Georgie Webb",
      url: siteUrl,
      sameAs: [linkedIn],
      jobTitle: "Developer",
      knowsAbout: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "Python",
        "AI agents",
        "Browser extensions",
        "DevOps",
        "Digital marketing",
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Highlighted bootcamp projects",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Week 1 — HTML projects across five categories",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Week 2 — AI note-taking full stack (Next.js, PostgreSQL, Prisma)",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Week 3 — Python automation and games",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Week 4 — AI agents",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Week 5 — Chrome extensions",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Week 6 — Deployment and marketing",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-frida">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
