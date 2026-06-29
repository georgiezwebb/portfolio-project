export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
};

export type CaseStudyTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  liveUrl: string;
  tags: string[];
  image: string;
  imageAlt: string;
  role: string;
  summary: string;
  sections: CaseStudySection[];
  testimonial: CaseStudyTestimonial;
};

/** Edit case study copy here. Slug must match `slug` on the project in site-content.ts. */
export const caseStudies: CaseStudy[] = [
  {
    slug: "audrey-johns",
    title: "Audrey Johns",
    client: "Audrey Johns Ltd",
    year: "2024",
    liveUrl: "https://audrey-johns.co.uk/",
    tags: ["WordPress", "Elementor"],
    image: "/projects/audrey-johns.png",
    imageAlt: "Homepage of audrey-johns.co.uk showing bespoke soft furnishings branding",
    role: "WordPress developer including site build, Elementor templates, and launch support",
    summary:
      "A marketing site for a long-established bespoke soft furnishings maker based in London and West Wales, showcasing services, gallery work, showroom visits, and contact paths for interior designers and commercial clients.",
    sections: [
      {
        heading: "The project",
        paragraphs: [
          "Audrey Johns Ltd has made curtains, cushions, blinds, and soft furnishings since 1983. They needed to migrate their old site from a redundant platform and a brand new site that reflected the quality of thie work with a clear service pages, room to show project photography, home for a blog and a way to get in touch or book a showroom visit.",
          "The site also needed to work for two audiences: interior designers looking for a reliable making partner, and homeowners browsing services or the online store.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I first moved the old site onto WordPress then, in a development environment, I built the site in WordPress with Elementor, working with a Web Designer, who provided the design and branding via Figma, and company director George Johns. That included page layouts for services, gallery, visit/showroom, and contact, plus reusable Elementor components so the team could update copy and imagery without touching code.",
          "I handled responsive layout, navigation, and basic SEO setup (titles, descriptions, sensible heading structure). After launch I supported small content updates and fixes as the team settled into managing the site.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The live site gives Audrey Johns a polished presence that matches the craft of the business. It iseasy to browse on mobile, simple to maintain in WordPress, and ready for the team to extend as services or locations evolve.",
        ],
      },
    ],
    testimonial: {
      quote:
        "So pleased that we hired Georgie to refresh , rebuild and future proof  our new website. Clearly ( and very modestly ) technically brilliant, Georgie’s grasp of our business and audience requirements were immediate. Coupled with a very creative appreciation of the look and feel we were seeking, the photography and editorial layout presentations for each page were always spot on and ready for immediate sign off. Realistically priced from the get go there were no hidden extras or nasty surprises with the invoicing and her almost instant response times to any email conversations regarding the project were always really appreciated. Ongoing support is still always available when needed, it’s far better for a small business like ours than having a full time designer on the payroll. Would highly, highly recommend.",
      name: "George Johns",
      role: "Owner of Audrey Johns Ltd",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
