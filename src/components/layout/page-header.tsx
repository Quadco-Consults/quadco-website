import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  highlight?: string;
  description: string;
  backgroundVariant?: "emerald" | "default";
}

export function PageHeader({
  title,
  highlight,
  description,
  backgroundVariant = "default",
}: PageHeaderProps) {
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
    <section
      className={cn(
        "relative overflow-hidden py-28",
        backgroundVariant === "emerald" ? "bg-corporate-emerald" : "bg-background"
      )}
    >
      {/* Decorative blur orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-teal-500/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
          {renderTitle()}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
