import { StaggerChildren } from "@/components/animations/stagger-children";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with an in-depth assessment of your current landscape, pain points, and strategic objectives to define a clear scope of engagement.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Our experts architect a tailored roadmap, selecting the right technologies, frameworks, and methodologies aligned with your business goals.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "We implement solutions iteratively with rigorous quality controls, keeping you informed and involved at every stage of the project lifecycle.",
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Solutions are deployed with comprehensive testing, documentation, and knowledge transfer to ensure seamless adoption and long-term success.",
  },
];

export function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24 lg:py-32">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work"
          highlight="How We Work"
          description="A proven four-step methodology that delivers predictable outcomes and lasting value."
          alignment="center"
          className="mb-20"
        />

        <StaggerChildren
          staggerDelay={0.12}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              {/* Connecting line (visible between steps on lg) */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-16 hidden h-0.5 w-8 translate-x-full bg-gradient-to-r from-emerald-500/40 to-transparent lg:block" />
              )}

              <div className="relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50">
                {/* Large step number */}
                <span
                  className={cn(
                    "absolute -top-2 right-4 text-8xl font-black leading-none",
                    "text-muted-foreground/[0.06] select-none"
                  )}
                >
                  {step.number}
                </span>

                {/* Step indicator dot */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-lg font-bold text-emerald-600">
                  {step.number}
                </div>

                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

export default ProcessSteps;
