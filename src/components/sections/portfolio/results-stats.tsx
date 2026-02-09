"use client";

import { Counter } from "@/components/animations/counter";
import { FadeIn } from "@/components/animations/fade-in";

const RESULTS = [
  { value: 40, suffix: "%", label: "Avg. Cost Reduction" },
  { value: 2, suffix: "x", label: "Deployment Speed" },
  { value: 99.9, suffix: "%", label: "Uptime Guaranteed" },
  { value: 15, suffix: "M+", label: "Users Impacted" },
];

export function ResultsStats() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground mb-12">
            The Results Speak for Themselves
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {RESULTS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div>
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl font-bold text-primary mb-2"
                />
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResultsStats;
