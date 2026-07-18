/** Edit this file to update copy, links, and projects. */

export const site = {
  name: "Georgie Webb",
  location: "Brentford, London",
  role: "Freelance Software Engineer",
  email: "hello@georgiewebb.co.uk",
  phone: "07817 449207",
  linkedIn: "https://www.linkedin.com/in/georgie-webb-0106a254/",
  github: "https://github.com/georgiezwebb",
  /** Path under /public when ready, e.g. "/headshot.jpg" */
  headshot: "",
} as const;

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Clerk",
  "OpenAI",
] as const;

export const positioning = {
  statement:
    "Freelance software engineer building secure, maintainable web applications.",
  examples: [
    "Client portals with authentication and role-based access",
    "Internal business tools that replace spreadsheets and manual workflows",
    "AI-enhanced applications using large language models for summarisation, search, or content generation",
    "Third-party integrations with CRMs, payment providers, and external APIs",
    "Legacy application modernisation and codebase clean-up",
    "Mobile and web applications built with modern frameworks",
  ],
} as const;

export const credentials = [
  {
    title: "10 years",
    description: "Building and maintaining production software.",
  },
  {
    title: "BBC",
    logo: "/logos/bbc.svg",
    logoAlt: "BBC",
    logoWidth: 560,
    logoHeight: 160,
    description: "Four years as a Senior Software Engineer at the BBC.",
  },
  {
    title: "MSc",
    logo: "/logos/university-of-liverpool.svg",
    logoAlt: "University of Liverpool",
    logoWidth: 300,
    logoHeight: 69,
    description: "MSc Computer Science, University of Liverpool (2015).",
  },
] as const;

/** Edit placeholder text when you're ready. */
export const about = {
  intro:
    "I'm a software engineer based in the UK. I work with agencies and small teams, usually when a project has grown in size or complexity.",
  paragraphs: [
    "I graduated from the University of Liverpool in 2015 with an MSc in Computer Science. Since then I've spent ten years building and maintaining production software, including four years as a Senior Software Engineer at the BBC.",
    "I'm freelancing now creating useful apps, tidy codebases, and providing extra help when you need another experienced developer.",
  ],
  closingBefore:
    "I like to work with small teams and agencies, and value a collaborative, communicative process. If there is a codebase that needs cleaning up or rescuing, a project that has become more technical than it was initially, you want something built or you need some more engineering capacity please ",
} as const;

export const problemsISolve = [
  "The client needs more than WordPress can comfortably do.",
  "An existing app has become hard to maintain.",
  "AI-generated code needs to become production-ready.",
  "You need another senior developer for six weeks.",
] as const;

export const capabilities = [
  "Customer Portals",
  "Internal Business Tools",
  "Booking Platforms",
  "Mobile Apps",
  "AI Integrations",
  "Workflow Automation",
  "Dashboards",
  "APIs",
  "Third-party Integrations",
  "Legacy Modernisation",
] as const;

export const engineeringStandards = [
  "Type-safe backend",
  "Responsive frontend",
  "Authentication",
  "Clean architecture",
  "Documentation",
  "Version control",
  "Testing where appropriate",
] as const;

export type Project = {
  title: string;
  description: string;
  /** Capabilities this project demonstrates, shown instead of a raw tech list. */
  demonstrates: string[];
  /** Optional vertical architecture stack for the card. */
  architecture?: string[];
  /** Live demo or case study; opens in a new tab. */
  href?: string;
  /** Source repo; opens in a new tab. */
  repo?: string;
  year?: string;
  /** Path under /public, e.g. "/projects/audrey-johns.png" */
  image?: string;
  imageAlt?: string;
  /** Case study page at /work/[slug] */
  slug?: string;
  /** "contain" shows the full screenshot; default is "cover". */
  imageFit?: "cover" | "contain";
};

export const projects: Project[] = [
  {
    title: "note pile",
    description:
      "Full-stack notes app with auth, collections, calendar filters, and optional AI summaries.",
    demonstrates: [
      "Authentication",
      "Database modelling",
      "AI integration",
      "Search architecture",
      "Full-stack architecture",
    ],
    architecture: [
      "React Frontend",
      "API",
      "Database",
      "Authentication",
      "AI Service",
    ],
    href: "https://ai-note-taker-sable.vercel.app/",
    repo: "https://github.com/georgiezwebb/ai-note-taker",
    year: "2026",
    image: "/projects/note-pile.jpg",
    imageAlt: "note pile app showing the notes dashboard with search, collections, and pinned notes",
    imageFit: "contain",
  },
  {
    title: "PitchKit",
    description:
      "A copy shelf for freelancers. Organise marketing text by type, keep versions, and use optional AI prompts.",
    demonstrates: [
      "Complex CRUD",
      "AI-assisted workflows",
      "User management",
      "Data modelling",
      "Rich UI",
    ],
    architecture: ["React Frontend", "API", "Database", "Authentication"],
    href: "https://freelancer-marketing-tool.vercel.app/",
    repo: "https://github.com/georgiezwebb/freelancer-marketing-tool",
    year: "2026",
    image: "/projects/pitchkit.jpg",
    imageAlt: "PitchKit copy library showing marketing stack folders and outreach message editor",
    imageFit: "contain",
  },
  {
    title: "Audrey Johns",
    description:
      "WordPress site for a bespoke soft furnishings company, with services, gallery, and contact for interior designers.",
    demonstrates: [
      "Client delivery",
      "Content management",
      "Design handoff",
      "Launch support",
    ],
    href: "https://audrey-johns.co.uk/",
    year: "2024",
    slug: "audrey-johns",
    image: "/projects/audrey-johns.png",
    imageAlt: "Homepage of audrey-johns.co.uk showing bespoke soft furnishings branding",
  },
];

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#demonstrations", label: "Demonstrations" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/engineering", label: "Engineering" },
  { href: "/#contact", label: "Contact" },
] as const;
