import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/lib/site";

const card =
  "group relative flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5 motion-reduce:transition-none sm:flex-row sm:items-center sm:justify-between sm:p-7 dark:hover:shadow-black/30";
const details = "flex items-center gap-5";
const iconBadge = "flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="I'm open to full-time roles and selected freelance projects. Email or call me and I'll get back to you within a day or two."
        />

        <Stagger className="grid content-start gap-5" stagger={0.12}>
          <StaggerItem>
            <a href={`mailto:${site.email}`} className={card}>
              <div className={details}>
                <span className={iconBadge}>
                  <Mail className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted">Email</p>
                  <p className="mt-1 font-medium break-words">{site.email}</p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent">
                Send an email
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </StaggerItem>

          <StaggerItem>
            {/* Not one link: the card holds two actions, call and WhatsApp. */}
            <div className={card}>
              <div className={details}>
                <span className={iconBadge}>
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="font-mono text-xs text-muted">Phone</p>
                  <a href={`tel:${site.phone.href}`} className="mt-1 block font-medium transition-colors hover:text-accent">
                    {site.phone.display}
                  </a>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                <a href={`tel:${site.phone.href}`} className="group/link inline-flex items-center gap-1.5 text-accent">
                  <Phone className="size-4 transition-transform group-hover/link:-rotate-12" />
                  Call
                </a>
                <a
                  href={`https://wa.me/${site.phone.href.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-accent"
                >
                  <MessageCircle className="size-4 transition-transform group-hover/link:-rotate-12" />
                  WhatsApp
                </a>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
