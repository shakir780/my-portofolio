// About, experience and stack content. Edit here; the sections render from it.

export const about = {
  paragraphs: [
    "I'm a full-stack developer based in Abuja with 3+ years building production web applications across fintech, government ERP, edtech and real estate. My strongest tools are React, Next.js and TypeScript, and I build the backends too, with NestJS, Node.js and MongoDB.",
    "Today I work on iGov, a government ERP platform used by parastatals for document signing, e-meetings and administrative workflows. Before that I built banking and payment interfaces in fintech, and I've worked remotely with product teams in the US and Bahrain.",
    "On the side I founded SureKeys, a rental platform for Abuja that I designed, built and launched solo. I care about the details that make a product feel trustworthy: clear costs, pages that load fast on mobile data, and interfaces that work for everyone.",
  ],
  facts: [
    { label: "Based in", value: "Abuja, Nigeria (GMT+1)" },
    { label: "Education", value: "BSc Software Engineering, Ahram Canadian University" },
    { label: "Languages", value: "English, Arabic, Yoruba" },
  ],
};

export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Founder & full-stack developer",
    company: "SureKeys",
    location: "Remote",
    period: "2026 — Present",
    points: [
      "Designed, built and launched a rental platform for Abuja as a solo engineer, with Next.js, NestJS, MongoDB and BullMQ.",
      "Built listings with full move-in cost breakdowns, video tours and link previews for WhatsApp and Facebook; 50+ live listings.",
      "Designed a review flow that unlocks agent reviews only after a tenant-confirmed inspection, preventing fake reviews.",
    ],
  },
  {
    title: "Frontend developer",
    company: "Connexxion Group",
    location: "Abuja",
    period: "Aug 2025 — Present",
    points: [
      "Build features for iGov, a government ERP platform used by parastatals for document signing, e-meetings, memos and circulars.",
      "Work across the stack with React, Node.js and REST APIs on authentication, API integration and data management.",
      "Contributed to SchoolPro, an education platform, and a police digital system for operational workflows.",
    ],
  },
  {
    title: "Senior frontend developer",
    company: "Xanotech",
    location: "Remote",
    period: "Jan 2025 — Mar 2025",
    points: [
      "Led frontend development for Landest, a real estate platform with user-facing and back-office apps.",
      "Built secure transaction and payment UI for Kryppay, and digital banking interfaces for GMFB.",
    ],
  },
  {
    title: "Frontend developer",
    company: "IRecharge",
    location: "Abuja",
    period: "2024",
    points: [
      "Led a team building the admin interface for 1UBank, a digital banking application.",
      "Built reusable UI components and improved load times across Accelerate, 1UBank and IRecharge bill-payment products.",
    ],
  },
  {
    title: "Frontend developer",
    company: "Lumofy",
    location: "Remote",
    period: "Aug 2023 — Oct 2023",
    points: [
      "Built accessible, responsive interfaces for an edtech platform with React and MUI.",
      "Created modular components and improved SEO and performance.",
    ],
  },
  {
    title: "Frontend developer",
    company: "Viveamind",
    location: "Remote",
    period: "Jan 2023 — Jun 2023",
    points: [
      "Built a patient-facing app for a medical company to book appointments, manage schedules and access information.",
      "Delivered 16 new user interfaces in a team of four with Next.js, TypeScript and Tailwind CSS.",
    ],
  },
];

export const stack = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux / RTK Query", "React Query", "Tailwind CSS", "Material UI", "React Native"],
  },
  { group: "Backend", items: ["NestJS", "Node.js", "REST APIs", "MongoDB", "PostgreSQL", "BullMQ"] },
  { group: "Tools", items: ["Git", "Jest", "Vercel", "Cloudflare", "Paystack"] },
];
