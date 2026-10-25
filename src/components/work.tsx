import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { GitHubIcon } from "@/components/brand-icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { flagshipProject, projects, type FeaturedProject, type Project } from "@/lib/projects";

const imageFrame =
  "block overflow-hidden rounded-xl border border-border bg-surface transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/5 motion-reduce:transition-none dark:group-hover:shadow-black/30";
const imageZoom =
  "w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none";

export function Work() {
  return (
    <section id="work" className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          description="Client sites and full-stack products, from the database to the UI."
        />

        <FlagshipCard project={flagshipProject} />

        <Stagger className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-2" stagger={0.12}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function FlagshipCard({ project }: { project: FeaturedProject }) {
  const href = project.caseStudy ?? project.live!;

  return (
    <Reveal as="article" className="group grid items-center gap-8 md:grid-cols-[3fr_2fr] md:gap-10">
      <Link href={href} tabIndex={-1} aria-hidden="true" className={imageFrame}>
        <Image
          src={project.image}
          alt=""
          placeholder="blur"
          priority
          sizes="(min-width: 768px) 600px, 100vw"
          className={`aspect-video ${imageZoom}`}
        />
      </Link>

      <div>
        <p className="font-mono text-xs text-muted">
          {project.kind}
          {project.year && ` · ${project.year}`}
        </p>
        <h3 className="mt-1.5 text-2xl font-semibold tracking-tight">
          <Link href={href} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 leading-relaxed text-muted text-pretty">{project.description}</p>
        <StackList stack={project.stack} />
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium">
          {project.caseStudy && (
            <Link
              href={project.caseStudy}
              className="group/cta inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-accent-fg transition-[opacity,transform] hover:opacity-90 active:scale-[0.97]"
            >
              Read case study
              <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-0.5" />
            </Link>
          )}
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  const href = project.live ?? project.code;

  return (
    <StaggerItem as="article" className="group flex flex-col">
      <a href={href} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true" className={imageFrame}>
        <Image
          src={project.image}
          alt=""
          placeholder="blur"
          sizes="(min-width: 768px) 480px, 100vw"
          className={`aspect-16/10 ${imageZoom}`}
        />
      </a>

      <p className="mt-5 font-mono text-xs text-muted">
        {project.kind}
        {project.year && ` · ${project.year}`}
      </p>
      <h3 className="mt-1.5 text-xl font-semibold tracking-tight">
        <a href={href} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
          {project.title}
        </a>
      </h3>
      <p className="mt-2 leading-relaxed text-muted text-pretty">{project.description}</p>

      <StackList stack={project.stack} />
      <ProjectLinks project={project} className="mt-5" />
    </StaggerItem>
  );
}

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
      {stack.map((tech) => (
        <li key={tech} className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`flex items-center gap-4 text-sm font-medium ${className}`}>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-1 transition-colors hover:text-accent"
        >
          Live site
          <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          <span className="sr-only">for {project.title}</span>
        </a>
      )}
      {project.code && (
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
        >
          <GitHubIcon className="size-4" />
          Code
          <span className="sr-only">for {project.title}</span>
        </a>
      )}
    </div>
  );
}
