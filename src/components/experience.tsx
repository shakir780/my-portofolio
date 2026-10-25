import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { experience, stack } from "@/lib/profile";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <ol className="divide-y divide-border border-y border-border">
          {/* Each role reveals on its own as it scrolls in, so long timelines don't animate off-screen. */}
          {experience.map((role) => (
            <Reveal
              as="li"
              key={`${role.company}-${role.period}`}
              className="grid gap-3 py-8 md:grid-cols-[12rem_1fr] md:gap-10"
            >
              <p className="font-mono text-xs leading-6 text-muted">{role.period}</p>
              <div>
                <h3 className="font-semibold tracking-tight">
                  {role.title} <span className="text-muted">· {role.company}</span>
                </h3>
                <p className="mt-0.5 text-sm text-muted">{role.location}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-border">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <div id="stack" className="mt-24">
          <Reveal>
            <h3 className="mb-8 text-sm font-medium text-muted">Tools I work with</h3>
          </Reveal>
          <Stagger as="dl" className="grid grid-cols-2 gap-8 lg:grid-cols-3" stagger={0.1}>
            {stack.map(({ group, items }) => (
              <StaggerItem key={group}>
                <dt className="font-mono text-xs tracking-wider text-accent uppercase">{group}</dt>
                <dd className="mt-3">
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
