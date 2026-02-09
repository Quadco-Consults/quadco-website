import { COMPANY } from "@/data/company";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox } from "@/components/shared/icon-box";
import { Eye, Target } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Our Vision",
    text: COMPANY.vision,
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: COMPANY.mission,
    accent: "from-teal-500/20 to-cyan-500/20",
  },
] as const;

export function VisionMission() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Purpose & Direction"
          title="Vision & Mission"
          highlight="Vision & Mission"
          description="The guiding principles that drive every project and partnership at Quadco Consults."
          alignment="center"
          className="mb-16"
        />

        <StaggerChildren
          staggerDelay={0.15}
          className="grid gap-8 md:grid-cols-2"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_oklch(0.696_0.17_162.48_/_0.08)]"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10">
                <IconBox icon={card.icon} size="lg" className="mb-6" />

                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  {card.title}
                </h3>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

export default VisionMission;
