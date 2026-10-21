import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { GitHubIcon } from "@/components/brand-icons";
import { featuredProjects, moreProjects, type FeaturedProject, type Project } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          description="Client sites and full-stack products, from the database to the UI."
        />

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <h3 className="mt-24 mb-2 text-sm font-medium text-muted">More projects</h3>
        <ul className="divide-y divide-border border-y border-border">
          {moreProjects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  const href = project.live ?? project.code;

  return (
    <article className="group flex flex-col">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="block overflow-hidden rounded-xl border border-border bg-surface"
      >
        <Image
          src={project.image}
          alt=""
          placeholder="blur"
          sizes="(min-width: 768px) 480px, 100vw"
          className="aspect-16/10 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
        />
      </a>

      <p className="mt-5 font-mono text-xs text-muted">
        {project.kind}
        {project.year && ` · ${project.year}`}
      </p>
      <h3 className="mt-1.5 text-xl font-semibold tracking-tight">
        <a href={href} target="_blank" rel="noreferrer" className="hover:text-accent">
          {project.title}
        </a>
      </h3>
      <p className="mt-2 leading-relaxed text-muted text-pretty">{project.description}</p>

      <StackList stack={project.stack} />
      <ProjectLinks project={project} className="mt-5" />
    </article>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
      <div>
        <p className="font-medium">
          {project.title}
          <span className="ml-2 font-mono text-xs font-normal text-muted">{project.year}</span>
        </p>
        <p className="mt-1 text-sm text-muted">
          {project.description} <span className="text-fg/70">{project.stack.join(" · ")}</span>
        </p>
      </div>
      <ProjectLinks project={project} />
    </li>
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
          className="inline-flex items-center gap-1 hover:text-accent"
        >
          Live site
          <ArrowUpRight className="size-4" />
          <span className="sr-only">for {project.title}</span>
        </a>
      )}
      {project.code && (
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-muted hover:text-fg"
        >
          <GitHubIcon className="size-4" />
          Code
          <span className="sr-only">for {project.title}</span>
        </a>
      )}
    </div>
  );
}
