import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  variant?: "icon" | "full";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  const logoImage = (
    <Image
      src="/images/QUADCO LOGO.png"
      alt="Quadco Consults Logo"
      width={variant === "icon" ? 100 : 400}
      height={variant === "icon" ? 100 : 133}
      className="shrink-0"
      priority
    />
  );

  if (variant === "icon") {
    return <div className={cn("inline-flex", className)}>{logoImage}</div>;
  }

  return (
    <div className={cn("inline-flex items-center", className)}>
      {logoImage}
    </div>
  );
}
