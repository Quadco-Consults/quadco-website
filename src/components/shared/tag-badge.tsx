import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TagBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export function TagBadge({
  children,
  variant = "default",
  className,
}: TagBadgeProps) {
  return (
    <Badge
      variant={variant}
      className={cn(
        "uppercase text-[10px] font-bold tracking-widest",
        className
      )}
    >
      {children}
    </Badge>
  );
}
