import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function GlowCard({
  children,
  className,
  glowOnHover = true,
}: GlowCardProps) {
  return (
    <Card
      className={cn(
        "bg-card rounded-2xl border-border transition-shadow duration-500",
        glowOnHover &&
          "hover:shadow-[0_0_40px_oklch(0.696_0.17_162.48_/_0.12),0_0_80px_oklch(0.696_0.17_162.48_/_0.04)]",
        className
      )}
    >
      {children}
    </Card>
  );
}
