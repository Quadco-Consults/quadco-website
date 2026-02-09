import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled";
  className?: string;
}

const sizeMap = {
  sm: { container: "w-10 h-10", icon: "w-5 h-5" },
  md: { container: "w-14 h-14", icon: "w-7 h-7" },
  lg: { container: "w-16 h-16", icon: "w-8 h-8" },
} as const;

export function IconBox({
  icon: Icon,
  size = "md",
  variant = "default",
  className,
}: IconBoxProps) {
  const { container, icon: iconSize } = sizeMap[size];

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-xl",
        container,
        variant === "default" && "bg-emerald-500/10 text-emerald-600",
        variant === "filled" && "bg-emerald-500 text-white",
        className
      )}
    >
      <Icon className={iconSize} />
    </div>
  );
}
