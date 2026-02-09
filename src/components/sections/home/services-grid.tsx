"use client";

import Link from "next/link";
import {
  Cpu,
  Network,
  Compass,
  Fuel,
  ShieldCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlowCard } from "@/components/shared/glow-card";
import { IconBox } from "@/components/shared/icon-box";
import { TagBadge } from "@/components/shared/tag-badge";
import { cn } from "@/lib/utils";

/** Map icon string names from data to actual Lucide components */
const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Network,
  Compass,
  Fuel,
  ShieldCheck,
  Briefcase,
};

export function ServicesGrid() {
  return (
    <section className="bg-background py-28" aria-label="Our services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="What We Do"
            title="Multi-Disciplinary Services"
            highlight="Services"
            description="Specialized consulting, engineering, and technology services delivered by certified professionals across six core practice areas."
            alignment="center"
          />
        </FadeIn>

        {/* Cards grid */}
        <StaggerChildren
          staggerDelay={0.1}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Cpu;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group block"
              >
                <GlowCard
                  className="relative flex h-full flex-col p-7 transition-transform duration-300 group-hover:-translate-y-1"
                  glowOnHover
                >
                  {/* Header row */}
                  <div className="mb-5 flex items-start justify-between">
                    <IconBox icon={Icon} size="lg" variant="default" />
                    <TagBadge variant="outline" className="shrink-0">
                      {service.category}
                    </TagBadge>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>

                  {/* Sub-service tags */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {service.subServices.map((sub) => (
                      <span
                        key={sub}
                        className="rounded-md bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className={cn(
                      "flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600",
                      "transition-all duration-300 group-hover:gap-3"
                    )}
                  >
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </GlowCard>
              </Link>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

export default ServicesGrid;
