import Link from "next/link";
import {
  Cpu,
  Network,
  Compass,
  Fuel,
  ShieldCheck,
  Briefcase,
  Check,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceData } from "@/types";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox } from "@/components/shared/icon-box";
import { GlowCard } from "@/components/shared/glow-card";
import { GradientText } from "@/components/shared/gradient-text";
import { CtaButton } from "@/components/shared/cta-button";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Network,
  Compass,
  Fuel,
  ShieldCheck,
  Briefcase,
};

interface ServiceDetailContentProps {
  service: ServiceData;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const Icon = iconMap[service.icon] ?? Cpu;

  return (
    <div>
      {/* Hero Area */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <IconBox icon={Icon} size="lg" className="mx-auto mb-6" />

              <Badge
                variant="outline"
                className="mb-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase tracking-widest"
              >
                {service.category}
              </Badge>

              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <GradientText>{service.title}</GradientText>
              </h1>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {service.fullDescription}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Sub-Services"
            highlight="Sub-Services"
            description={`Specialized capabilities within ${service.title} designed to address your unique requirements.`}
            alignment="center"
            className="mb-16"
          />

          <StaggerChildren
            staggerDelay={0.1}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {service.subServices.map((sub, index) => (
              <GlowCard key={sub}>
                <CardContent className="p-6 text-center">
                  {/* Index badge */}
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-600">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-lg font-bold text-foreground">{sub}</h3>
                </CardContent>
              </GlowCard>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Heading */}
            <FadeIn direction="left">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Key Benefits"
                highlight="Benefits"
                description={`What sets our ${service.title} practice apart from the competition.`}
                alignment="left"
              />
            </FadeIn>

            {/* Right - Checklist */}
            <FadeIn direction="right">
              <ul className="space-y-5">
                {service.keyBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </span>
                    <span className="text-muted-foreground leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="rounded-2xl border border-border bg-card p-12 text-center lg:p-16">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Ready to Get Started with{" "}
                <GradientText>{service.title}</GradientText>?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Let us help you transform your {service.category.toLowerCase()}{" "}
                capabilities. Reach out to discuss your requirements and discover
                how Quadco Consults can deliver results.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CtaButton href="/contact" variant="primary">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </CtaButton>
                <CtaButton href="/services" variant="outline">
                  All Services
                </CtaButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetailContent;
