import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";
import { about } from "@/lib/profile";

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <Container className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div>
          <Stagger className="space-y-5 text-lg leading-relaxed text-muted text-pretty" stagger={0.12}>
            {about.paragraphs.map((paragraph) => (
              <StaggerItem key={paragraph}>
                <p>{paragraph}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger as="dl" className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {about.facts.map((fact) => (
              <StaggerItem key={fact.label}>
                <dt className="font-mono text-xs text-muted">{fact.label}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed">{fact.value}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
