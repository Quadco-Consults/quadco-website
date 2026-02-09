"use client";

import { Parallax } from "@/components/animations/parallax";
import { FadeIn } from "@/components/animations/fade-in";
import { GradientText } from "@/components/shared/gradient-text";
import { CtaButton } from "@/components/shared/cta-button";

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-background py-28"
      aria-label="Call to action"
    >
      {/* Background glow */}
      <Parallax speed={0.3} className="pointer-events-none absolute inset-0">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[120px]"
        />
      </Parallax>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <FadeIn direction="up">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Committed to{" "}
            <GradientText>Total Quality</GradientText>{" "}
            Excellence
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <blockquote className="mx-auto mt-8 max-w-2xl text-lg italic leading-relaxed text-muted-foreground">
            &ldquo;Aiming to become the lead provider of Solutions in all
            Industries we are active in across Nigeria. We are committed to
            total quality excellence with a goal of zero
            non-conformities.&rdquo;
          </blockquote>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="mt-10">
            <CtaButton href="/contact" variant="primary">
              Discuss Your Requirements
            </CtaButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default CtaSection;
