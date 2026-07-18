export type ThinkingArticle = {
  slug: string;
  title: string;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const thinkingArticles: ThinkingArticle[] = [
  {
    slug: "rescue-ai-codebase",
    title: "How I'd rescue an AI-generated codebase",
    summary:
      "Getting prototype code into a state your team can maintain and improve.",
    sections: [
      {
        heading: "Understanding the existing codebase",
        paragraphs: [
          "I start by mapping the existing codebase e.g. entry points, data flow, duplicated patterns, and what runs versus what only looks finished. AI-generated code often repeats the same logic in several files with small variations.",
          "This gives everyone a shared understanding of the current state, and a starting point for discussion.",
        ],
      },
      {
        heading: "Find duplication and establish boundaries",
        paragraphs: [
          "Repeated fetch logic, copy-pasted components, and inline config are common so I pull these into individual, reusable functional components.",
          "UI, domain logic, and infrastructure are kept separate so you can efficiently test and replace each part.",
        ],
      },
      {
        heading: "Introduce standards",
        paragraphs: [
          "Linting, formatting, type checking, and a sensible folder structure come early. They help immediately when you start refactoring.",
          "I add tests around the important paths: auth, payments, data changes.",
        ],
      },
      {
        heading: "Document and hand over",
        paragraphs: [
          "I produce a short README on how to run, deploy, and extend the app and notes on known debt and what I'd do next.",
          "The aim is to leave you with well written, maintainable software your team can continue to use and improve for the long term.",
        ],
      },
    ],
  },
  {
    slug: "modernise-legacy-application",
    title: "How I'd modernise a legacy application",
    summary:
      "Improve things incrementally instead of betting on a big rewrite.",
    sections: [
      {
        heading: "Assess the constraints",
        paragraphs: [
          "Legacy code often remains useful and functional so I start with the working parts, parts that need improvement or updates, and what the business can't afford to break.",
          "It is important to understand how changes might impact the user, how often you deploy, and what the team already knows all shape the plan.",
        ],
      },
      {
        heading: "Don't necessarily rewrite",
        paragraphs: [
          "Where you can, ship new features on modern stacks while the old paths stay stable. APIs and adapters bridge the two until migration is safe.",
          "That keeps revenue coming in and avoids the multi-month rewrite that never ships. It is important to understand the trade-offs and choose the best approach for the situation.",
        ],
      },
      {
        heading: "Improve the foundation first",
        paragraphs: [
          "Implimenting or improving version control, staging, automated deploys, and basic observability often help more than swapping frameworks.",
          "Then we can tackle the bits that most challenging areas: auth, data access, or the modules that change every week.",
        ],
      },
      {
        heading: "Measure progress",
        paragraphs: [
          "Faster deploys, fewer incidents, and developers who can change code without fear are the signs that it's working.",
          "While the stack is a means to an end, maintainability and speed are the most imortant outcomes.",
        ],
      },
    ],
  },
  {
    slug: "react-vs-wordpress",
    title: "When I'd choose React over WordPress",
    summary:
      "Pick the tool that fits the problem.",
    sections: [
      {
        heading: "WordPress:",
        paragraphs: [
          "For a site that is mostly content e.g. pages, blog posts, SEO, and updates the client can manage themselves.",
          "Budget and timeline suit a proven CMS with themes and plugins, and you don't need much custom business logic.",
        ],
      },
      {
        heading: "React (or similar):",
        paragraphs: [
          "For sites where users log in, see different data by role, or work through a flow: dashboards, portals, booking, internal tools.",
          "You need tight API integration, real-time updates, or behaviour that plugins can't easily provide.",
        ],
      },
      {
        heading: "The agency question",
        paragraphs: [
          "Agencies often hit the point where a client asks for a small portal or a bit of automation on top of a marketing site.",
          "I'd keep WordPress for the marketing site and build the product bit as its own app when it gets complex enough.",
        ],
      },
    ],
  },
  {
    slug: "mvp-for-startup",
    title: "How I'd build an MVP for a startup",
    summary:
      "Ship something real quickly, without creating problems for later.",
    sections: [
      {
        heading: "Define the smallest proof",
        paragraphs: [
          "What has to work for the first ten users to get value? The MVP should test one hypothesis",
        ],
      },
      {
        heading: "Choose proven foundations",
        paragraphs: [
          "Managed auth, a relational database, and predefined frameworks are a good starting point.",
          "I still write typed, documented code.",
        ],
      },
      {
        heading: "Build for change",
        paragraphs: [
          "I produce clear module boundaries, config determined by environment, and a deployment pipeline from day one. This means that the codebase can be updated and extended without breaking the existing functionality.",
          "I also add basic instrumentation early so you know when people sign up, convert, or drop off.",
        ],
      },
      {
        heading: "Plan the handoff",
        paragraphs: [
          "Even an MVP needs a plan: who maintains it, how it deploys, and what to do next.",
          "The best MVPs are prototypes in production with real users, data, and documented shortcuts.",
        ],
      },
    ],
  },
];

export function getThinkingArticle(slug: string): ThinkingArticle | undefined {
  return thinkingArticles.find((article) => article.slug === slug);
}

export function getAllThinkingSlugs(): string[] {
  return thinkingArticles.map((article) => article.slug);
}
