// Single source of truth for personal details used across the site.
export const site = {
  name: "Shakir Kamal",
  role: "Frontend Developer",
  tagline:
    "I build fast, accessible web apps with React and Next.js, and the Node.js APIs behind them when a project needs it.",
  location: "Nigeria · Open to remote",
  available: true,
  email: "Kamalshakir@hotmail.com",
  cv: "/shakir-kamal-cv.pdf",
  socials: {
    github: "https://github.com/shakir780",
    linkedin: "https://www.linkedin.com/in/shakir-kamal/",
  },
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
