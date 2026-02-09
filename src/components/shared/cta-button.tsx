"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "outline";
}

export function CtaButton({
  children,
  href,
  className,
  variant = "primary",
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl py-4 px-8 text-sm font-bold uppercase tracking-widest transition-all duration-300",
        variant === "primary" &&
          "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500 hover:shadow-emerald-500/30",
        variant === "outline" &&
          "border border-border bg-transparent text-foreground hover:bg-black/5",
        className
      )}
    >
      {children}
    </Link>
  );
}
