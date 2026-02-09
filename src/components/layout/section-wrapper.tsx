import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  paddingY?: "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "emerald";
}

const paddingMap = {
  sm: "py-12",
  md: "py-20",
  lg: "py-28",
  xl: "py-36",
} as const;

const backgroundMap = {
  default: "bg-background",
  muted: "bg-muted",
  emerald: "bg-corporate-emerald",
} as const;

export function SectionWrapper({
  children,
  className,
  id,
  paddingY = "lg",
  background = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        paddingMap[paddingY],
        backgroundMap[background]
      )}
    >
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
        {children}
      </div>
    </section>
  );
}
