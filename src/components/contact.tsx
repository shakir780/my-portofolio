import { Download, Mail } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";

export function Contact() {
  const links = [
    { href: `mailto:${site.email}`, label: site.email, icon: Mail },
    { href: site.socials.linkedin, label: "LinkedIn", icon: LinkedInIcon },
    { href: site.socials.github, label: "GitHub", icon: GitHubIcon },
    { href: site.cv, label: "Download CV", icon: Download, download: true },
  ];

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="I'm open to full-time roles and selected freelance projects. Send a message and I'll get back to you within a day or two."
          />
          <ul className="space-y-3">
            {links.map(({ href, label, icon: Icon, download }) => (
              <li key={label}>
                <a
                  href={href}
                  download={download}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-muted transition-colors hover:text-fg"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
