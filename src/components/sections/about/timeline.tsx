"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2020",
    title: "Company Incorporation",
    description:
      "Quadco Consults Limited was officially incorporated with the Corporate Affairs Commission (RC 1695301), establishing our foundation in Abuja, Nigeria.",
  },
  {
    year: "2021",
    title: "Operations Commenced",
    description:
      "We launched full-scale operations, onboarding our first clients and delivering IT consulting and engineering solutions across multiple sectors.",
  },
  {
    year: "2022",
    title: "ISO Certifications Achieved",
    description:
      "Attained ISO 9001 (Quality), ISO 20000 (IT Service Management), and ISO 27001 (Information Security) certifications, demonstrating our commitment to international standards.",
  },
  {
    year: "2023",
    title: "ERP Deployment for AHNi",
    description:
      "Successfully deployed a full ERP system for Achieving Health Nigeria Initiative (AHNi), streamlining their operational processes nationwide.",
  },
  {
    year: "2024",
    title: "NNPC Command Center Project",
    description:
      "Delivered the state-of-the-art video wall and command center solution for the Nigerian National Petroleum Company, enhancing operational visibility.",
  },
  {
    year: "2025",
    title: "NUPRC & NITDA Certifications",
    description:
      "Secured NUPRC certification for oil and gas operations and NITDA registration, expanding our regulatory compliance portfolio and market reach.",
  },
];

export function Timeline() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Journey"
          title="Milestones That Define Us"
          highlight="Define Us"
          description="From incorporation to industry leadership -- a timeline of growth, certifications, and landmark projects."
          alignment="center"
          className="mb-20"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent md:left-1/2 md:-translate-x-0.5" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <FadeIn
                  key={milestone.year}
                  direction={isEven ? "left" : "right"}
                  delay={index * 0.1}
                >
                  <div
                    className={cn(
                      "relative flex items-start gap-8",
                      "pl-14 md:pl-0",
                      isEven
                        ? "md:flex-row md:text-right"
                        : "md:flex-row-reverse md:text-left"
                    )}
                  >
                    {/* Content */}
                    <div
                      className={cn(
                        "flex-1",
                        isEven ? "md:pr-16" : "md:pl-16"
                      )}
                    >
                      <Badge
                        variant="outline"
                        className="mb-3 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 font-mono text-sm px-3 py-1"
                      >
                        {milestone.year}
                      </Badge>
                      <h3 className="mb-2 text-xl font-bold text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Empty spacer for alignment */}
                    <div className="hidden flex-1 md:block" />

                    {/* Dot on the timeline */}
                    <div
                      className={cn(
                        "absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-emerald-500 bg-background",
                        "md:left-1/2 md:-translate-x-1/2"
                      )}
                    >
                      <Rocket className="h-4 w-4 text-emerald-600" />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
