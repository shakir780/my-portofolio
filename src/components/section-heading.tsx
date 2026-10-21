export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="font-mono text-xs tracking-wider text-accent uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance">{title}</h2>
      {description && <p className="mt-4 leading-relaxed text-muted text-pretty">{description}</p>}
    </div>
  );
}
