/** Edit this file to update copy, links, and projects. */

export const site = {
  name: "Georgie Webb",
  role: "Software engineer",
  tagline: "I build web apps and ship them properly.",
  email: "", // e.g. "you@email.com"
  linkedIn: "https://www.linkedin.com/in/georgie-webb-0106a254/",
  github: "https://github.com/georgiezwebb",
} as const;

/** Replace placeholder text when you're ready. */
export const about = {
  intro:
    "I'm a software engineer based in the UK. I like clear code, useful products, and teams that care about the details.",
  paragraphs: [
    "I graduated from the University of Liverpool in 2015 with an MSc in Computer Science. I have since worked on a number of projects, most prominently at the BBC for 4 years. My focus is now to help small businesses and agencies on a freelance basis to create useful, secure apps with intuitive, user-friendly features.",
  ],
} as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Live demo or case study — opens in a new tab. */
  href?: string;
  /** Source repo — opens in a new tab. */
  repo?: string;
  year?: string;
  /** Path under /public, e.g. "/projects/audrey-johns.png" */
  image?: string;
  imageAlt?: string;
  /** "contain" shows the full screenshot; default is "cover". */
  imageFit?: "cover" | "contain";
};

export const projects: Project[] = [
  {
    title: "Audrey Johns",
    description:
      "Marketing site for a bespoke soft furnishings company — services, gallery, and contact. Built in WordPress with Elementor.",
    tags: ["WordPress", "Elementor"],
    href: "https://audrey-johns.co.uk/",
    year: "2024",
    image: "/projects/audrey-johns.png",
    imageAlt: "Homepage of audrey-johns.co.uk showing bespoke soft furnishings branding",
  },
  {
    title: "note pile",
    description:
      "Full-stack notes app with auth, collections, calendar filters, and optional AI summaries. Built for my AI Bootcamp portfolio.",
    tags: ["Next.js", "Clerk", "Prisma", "Neon", "OpenAI"],
    href: "https://ai-note-taker-sable.vercel.app/",
    repo: "https://github.com/georgiezwebb/ai-note-taker",
    year: "2026",
    image: "/projects/note-pile.jpg",
    imageAlt: "note pile app showing the notes dashboard with search, collections, and pinned notes",
    imageFit: "contain",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;
