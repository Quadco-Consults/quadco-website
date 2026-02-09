"use client";

import { COMPANY } from "@/data/company";
import { FadeIn } from "@/components/animations/fade-in";
import { Counter } from "@/components/animations/counter";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

export function StatsGrid() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="By The Numbers"
          title="Quadco at a Glance"
          highlight="at a Glance"
          alignment="center"
          className="mb-16"
        />

        <FadeIn direction="up">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {COMPANY.stats.map((stat, index) => {
              // Determine suffix for counter display
              const hasSuffix = stat.value.includes("+");
              const isYear = stat.label === "Founded";

              return (
                <div
                  key={stat.label}
                  className={cn(
                    "group relative rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-primary/50",
                    "hover:shadow-[0_0_40px_oklch(0.696_0.17_162.48_/_0.08)]"
                  )}
                >
                  {/* Large number */}
                  <div className="mb-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                    {isYear ? (
                      <span className="tabular-nums">{stat.value}</span>
                    ) : (
                      <Counter
                        target={stat.numericValue}
                        suffix={hasSuffix ? "+" : ""}
                        duration={2 + index * 0.3}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-500 group-hover:w-1/2" />
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default StatsGrid;
