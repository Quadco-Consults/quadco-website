import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  alignment = "center",
  className,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlight) {
      return title;
    }

    const index = title.indexOf(highlight);
    if (index === -1) {
      return title;
    }

    const before = title.slice(0, index);
    const after = title.slice(index + highlight.length);

    return (
      <>
        {before}
        <span className="gradient-text">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <div
      className={cn(
        "max-w-3xl",
        alignment === "center" && "mx-auto text-center",
        alignment === "left" && "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {renderTitle()}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
