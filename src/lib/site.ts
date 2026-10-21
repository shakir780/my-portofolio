// Single source of truth for personal details used across the site.
export const site = {
  name: "Shakir Kamal",
  role: "Full-Stack Developer",
  tagline:
    "I build production web apps with React, Next.js and TypeScript, and the NestJS and Node.js backends behind them.",
  location: "Abuja, Nigeria · Open to remote",
  available: true,
  email: "kamalshakir2024@gmail.com",
  cv: "/shakir-kamal-cv.pdf",
  url: "https://shakir-kamal.vercel.app",
  socials: {
    github: "https://github.com/shakir780",
    linkedin: "https://www.linkedin.com/in/shakir-kamal/",
  },
} as const;

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;
