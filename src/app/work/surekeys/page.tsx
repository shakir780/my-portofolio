import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { flagshipProject as project } from "@/lib/projects";
import { site } from "@/lib/site";
import cover from "@/images/projects/surekeys/cover.jpg";
import properties from "@/images/projects/surekeys/properties.jpg";
import property from "@/images/projects/surekeys/property.jpg";
import costs from "@/images/projects/surekeys/costs.jpg";
import mobile from "@/images/projects/surekeys/mobile.jpg";

export const metadata: Metadata = {
  title: `SureKeys case study · ${site.name}`,
  description:
    "How I designed and built SureKeys, a rental platform for Abuja with checked listings, full move-in costs and neighbourhood communities.",
};

const facts = [
  { label: "Role", value: "Product design & full-stack development" },
  { label: "Year", value: project.year },
  { label: "Platform", value: "Responsive web" },
  { label: "Stack", value: project.stack.join(", ") },
];

export default function SureKeysCaseStudy() {
  return (
    <article className="pt-12 pb-24 sm:pt-16">
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          All work
        </Link>

        <header className="mt-10 max-w-3xl">
          <p className="font-mono text-xs tracking-wider text-accent uppercase">Case study</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">SureKeys</h1>
          <p className="mt-5 text-xl leading-relaxed text-muted text-pretty">
            A rental platform that puts trust back into finding a home in Abuja: checked listings with
            the full cost of moving in, video tours, and neighbourhood communities where residents share
            what living there is really like.
          </p>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            Visit surekeys.ng
            <ArrowUpRight className="size-4" />
          </a>
        </header>

        <dl className="mt-14 grid gap-6 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs text-muted">{fact.label}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <Figure image={cover} alt="SureKeys homepage with area search and a neighbourhood feed" priority />

        <Section title="The problem">
          <p>
            Renting in Abuja runs on WhatsApp forwards. Listings get passed between groups until nobody
            knows who posted them, agents stop replying, and people pay deposits on homes that don&apos;t
            exist. Fees appear only after an inspection, and rent is usually paid a year upfront, so a bad
            decision is expensive.
          </p>
          <p>
            The questions tenants actually care about, like whether an area has steady light and water or
            whether the estate is safe, have no reliable answer anywhere. You find out after you move in.
          </p>
        </Section>

        <Section title="The approach">
          <p>
            Rather than another listings directory, SureKeys is built as a trust layer for renting, and
            deliberately for one city. Every product decision comes back to three ideas:
          </p>
          <ul>
            <li>
              <strong>Show the whole truth about a listing:</strong> who sourced it, when it was last
              checked, and every fee you will pay before you get the keys.
            </li>
            <li>
              <strong>Make people safer by default:</strong> confirm availability with the agent before
              connecting anyone, and never ask a tenant to pay before seeing a property.
            </li>
            <li>
              <strong>Let neighbours answer the questions listings can&apos;t:</strong> area communities
              with ratings for electricity, water, safety, internet, traffic and roads.
            </li>
          </ul>
        </Section>

        <Section title="What I built">
          <h3>Search and listings</h3>
          <p>
            Tenants can search by area, LGA or property type and filter by bedrooms, property type and
            price. Everything is browsable without an account, so people can judge the platform before
            committing to it. Each card shows a video tour, the annual rent, and when the listing was last
            checked.
          </p>
        </Section>

        <Figure image={properties} alt="Property search with filters for bedrooms, type and price" />

        <Section>
          <h3>Property pages</h3>
          <p>
            Each property page leads with a video tour and a summary of the home. Next to it is a cost
            breakdown that adds rent, caution fee, service charge, agency and legal fees into a single{" "}
            <em>total to move in</em>. The inspection fee is shown separately because it isn&apos;t part of
            that total. In a market where surprise fees are the norm, that one number is the main reason a
            tenant can trust the page.
          </p>
        </Section>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-[3fr_2fr]">
          <Figure image={property} alt="Property page with a video tour, details and availability" flush />
          <Figure image={costs} alt="Cost breakdown and the property request form" flush />
        </div>

        <Section>
          <h3>Requests without the friction</h3>
          <p>
            Interested tenants can request a property with just a name and phone number, no account
            needed, and they explicitly consent before their contact is shared with the agent. Many
            listings are sourced from public ads, so SureKeys confirms with the agent that a home is still
            available before connecting anyone, which removes the &quot;sorry, it&apos;s gone&quot; trip.
          </p>

          <h3>Neighbourhood communities</h3>
          <p>
            Every area, from Gwarinpa and Wuse 2 to Maitama, Jabi and Lugbe, has its own community page
            with a <em>neighbourhood pulse</em>: resident ratings for electricity, water, safety, internet,
            traffic and roads, plus average rent and recent activity. Residents and agents post questions,
            reviews and scam alerts. Reading is open to everyone; posting requires an account.
          </p>

          <h3>Accounts for both sides</h3>
          <p>
            Tenants can save homes, book inspections, message agents, track rent and keep documents in a
            vault. Agents get tools to list and manage properties, receive qualified enquiries, schedule
            inspections and build a reputation from tenant reviews.
          </p>
        </Section>

        <Section title="Engineering decisions">
          <ul>
            <li>
              <strong>Open by default, gated where it matters.</strong> Listings, area pages and
              discussions render for guests, which keeps them indexable and lets people build trust
              before signing up. Actions like saving, messaging and posting require an account, and the
              exact address is shown only to signed-in members so agents know who is asking before a
              visit.
            </li>
            <li>
              <strong>Built to be found.</strong> Pages are rendered with the Next.js App Router, and
              every listing and area has its own title and description. A generated sitemap covers each
              property and community, and private routes like the dashboard, admin and API are kept out of
              search engines.
            </li>
            <li>
              <strong>Video tours without the page weight.</strong> Tours are hosted on YouTube, but
              pages load only a thumbnail with a play button. The embedded player loads when someone
              presses play, so listing grids with dozens of videos stay fast on mobile data.
            </li>
            <li>
              <strong>Trust signals as data.</strong> &quot;Sourced by SureKeys&quot;, &quot;Last checked
              3 days ago&quot; and availability badges are stored with each listing, not written into the
              copy, so they stay accurate as listings change.
            </li>
            <li>
              <strong>Mobile first.</strong> Most renters search on their phones, so on mobile the
              price and the &quot;Request this property&quot; button stay pinned to the bottom of the
              screen.
            </li>
          </ul>
        </Section>

        <div className="mx-auto mt-10 max-w-md">
          <Figure image={mobile} alt="SureKeys on mobile: homepage and a property page with a sticky request bar" flush />
        </div>

        <Section title="Where it is today">
          <p>
            SureKeys is live at{" "}
            <a href={project.live} target="_blank" rel="noreferrer">
              surekeys.ng
            </a>{" "}
            with over 50 rental listings across the Federal Capital Territory, from self-contained
            apartments to detached duplexes, plus community pages for neighbourhoods across Abuja.
          </p>
        </Section>

        <footer className="mt-20 flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            Back to all work
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            Want something like this built? Get in touch
          </a>
        </footer>
      </Container>
    </article>
  );
}

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="mt-16 max-w-2xl">
      {title && <h2 className="mb-5 text-2xl font-semibold tracking-tight">{title}</h2>}
      <div className="space-y-4 leading-relaxed text-muted text-pretty [&_a]:text-fg [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-accent [&_em]:text-fg [&_h3]:mt-10 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-fg [&_h3:first-child]:mt-0 [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-fg [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

function Figure({
  image,
  alt,
  priority,
  flush,
}: {
  image: StaticImageData;
  alt: string;
  priority?: boolean;
  flush?: boolean;
}) {
  return (
    <figure className={flush ? "" : "mt-10"}>
      <Image
        src={image}
        alt={alt}
        priority={priority}
        placeholder="blur"
        sizes="(min-width: 1024px) 976px, 100vw"
        className="w-full rounded-xl border border-border"
      />
    </figure>
  );
}
