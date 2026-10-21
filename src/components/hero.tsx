import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";
import headshot from "@/images/headshot.jpg";

export function Hero() {
  return (
    <section id="top" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div className="max-w-xl">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {site.name}
            <span className="mt-2 block text-muted">{site.role}</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted text-pretty">{site.tagline}</p>

          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" />
              {site.location}
            </span>
            {site.available && (
              <>
                <span aria-hidden="true" className="text-border">
                  /
                </span>
                <span className="text-fg">Currently taking on new roles</span>
              </>
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              <Download className="size-4" />
              Download CV
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                <GitHubIcon className="size-5" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                <LinkedInIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="order-first md:order-0">
          <Image
            src={headshot}
            alt={`Portrait of ${site.name}`}
            priority
            placeholder="blur"
            sizes="(min-width: 768px) 288px, 160px"
            className="size-40 rounded-2xl border border-border object-cover shadow-sm md:size-72"
          />
        </div>
      </Container>
    </section>
  );
}
