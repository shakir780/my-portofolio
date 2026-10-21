import { Mail } from "lucide-react";
import { Container } from "@/components/container";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";

export function SiteFooter() {
  const links = [
    { href: site.socials.github, label: "GitHub", icon: GitHubIcon },
    { href: site.socials.linkedin, label: "LinkedIn", icon: LinkedInIcon },
    { href: `mailto:${site.email}`, label: "Email", icon: Mail },
  ];

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-surface hover:text-fg"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
