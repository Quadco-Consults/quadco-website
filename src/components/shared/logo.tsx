import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "icon" | "full";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  const badge = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#logo-gradient)" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="white"
        fontSize="22"
        fontWeight="700"
        fontFamily="var(--font-poppins), system-ui, sans-serif"
      >
        Q
      </text>
    </svg>
  );

  if (variant === "icon") {
    return <div className={cn("inline-flex", className)}>{badge}</div>;
  }

  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      {badge}
      <span className="text-lg leading-tight tracking-tight">
        <span className="font-bold text-foreground">Quadco</span>
        <span className="font-light text-foreground/80"> Consults</span>
      </span>
    </div>
  );
}
