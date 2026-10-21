import type { StaticImageData } from "next/image";
import surekeys from "@/images/projects/surekeys/cover.jpg";
import alwataniya from "@/images/projects/cover/alwataniya-plast.jpg";
import salesso from "@/images/projects/cover/salesso-dashboard.jpg";

export type Project = {
  title: string;
  kind: string;
  year?: string;
  description: string;
  stack: string[];
  live?: string;
  code?: string;
  caseStudy?: string;
};

export type FeaturedProject = Project & { image: StaticImageData };

export const flagshipProject: FeaturedProject = {
  title: "SureKeys",
  kind: "Founder · Rental platform",
  year: "2026",
  description:
    "A rental platform for Abuja that I designed, built and launched solo. Checked listings with the full move-in cost upfront, video tours, inspection requests, reviews that can't be faked, and neighbourhood communities where residents share the real gist.",
  stack: ["Next.js", "NestJS", "MongoDB", "BullMQ", "Tailwind", "Vercel", "Cloudflare"],
  live: "https://www.surekeys.ng",
  caseStudy: "/work/surekeys",
  image: surekeys,
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Al Watania Plast",
    kind: "Client work · Corporate site",
    description:
      "Website for an ISO-certified manufacturer of pharmaceutical and food packaging. Presents the product range, company profile and certifications to international B2B buyers.",
    stack: ["React", "TypeScript", "Tailwind"],
    live: "https://alwataniaplast.com/",
    image: alwataniya,
  },
  {
    title: "Salesso Dashboard",
    kind: "Admin dashboard",
    year: "2022",
    description:
      "Sales admin panel with charts, data grids, a kanban board, calendar and rich-text editor, plus a configurable colour theme.",
    stack: ["React", "Tailwind", "Syncfusion"],
    live: "https://salesso-dashboard.vercel.app/",
    code: "https://github.com/shakir780/PersonalDashboard",
    image: salesso,
  },
];

export const moreProjects: Project[] = [
  {
    title: "WashVille",
    kind: "Laundry service site",
    year: "2024",
    description: "Marketing site for a laundry and dry-cleaning service.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    live: "https://washvillee.vercel.app/",
    code: "https://github.com/shakir780/washville",
  },
  {
    title: "Speedy Tow",
    kind: "Towing company site",
    year: "2024",
    description: "Marketing site for a roadside assistance and towing company.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    live: "https://speedy-tow.vercel.app/",
    code: "https://github.com/shakir780/towingCompany",
  },
];
