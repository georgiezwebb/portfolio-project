import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";
import { site, projects } from "@/lib/site-content";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = getSiteUrl();

const description = `${site.name} — ${site.role}. Portfolio and selected projects.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description,
  authors: [{ name: site.name, url: site.linkedIn }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} · ${site.role}`,
    description,
  },
  twitter: {
    card: "summary",
    title: `${site.name} · ${site.role}`,
    description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${site.name} — Portfolio`,
      description,
      inLanguage: "en-GB",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: site.name,
      url: siteUrl,
      jobTitle: site.role,
      sameAs: [site.linkedIn, ...(site.github ? [site.github] : [])].filter(Boolean),
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Selected projects",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        ...(p.href && p.href !== "#" ? { url: p.href } : {}),
      })),
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
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-site">
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
