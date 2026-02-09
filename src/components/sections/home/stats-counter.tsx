"use client";

import { COMPANY } from "@/data/company";
import { Counter } from "@/components/animations/counter";
import { FadeIn } from "@/components/animations/fade-in";

export function StatsCounter() {
  return (
    <section
      className="bg-muted/30 py-24"
      aria-label="Company statistics"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {COMPANY.stats.map((stat, index) => {
            const isFounded = stat.label === "Founded";
            // Determine if this stat should show a "+" suffix
            const hasSuffix = stat.value.includes("+");
            const suffix = hasSuffix ? "+" : "";

            return (
              <FadeIn key={stat.label} direction="up" delay={index * 0.1}>
                <div className="flex flex-col items-center text-center">
                  {isFounded ? (
                    <span className="text-5xl font-black tabular-nums text-foreground">
                      {stat.numericValue}
                    </span>
                  ) : (
                    <Counter
                      target={stat.numericValue}
                      suffix={suffix}
                      duration={2.2}
                      className="text-5xl font-black text-foreground"
                    />
                  )}
                  <span className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;
