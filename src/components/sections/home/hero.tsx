"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { COMPANY } from "@/data/company";
import { ParticleField } from "@/components/animations/particle-field";
import { TextReveal } from "@/components/animations/text-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { CtaButton } from "@/components/shared/cta-button";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.2;
    }
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-corporate-emerald"
      aria-label="Hero"
    >
      {/* ---------- Background layers ---------- */}
      {/* Subtle background image */}
      <Image
        src="/images/hero-bg.jpeg"
        alt=""
        fill
        priority
        className="absolute inset-0 z-0 object-cover opacity-10 pointer-events-none"
      />

      <ParticleField
        className="absolute inset-0 z-0 pointer-events-none"
        particleCount={70}
        color="#10b981"
        connectDistance={110}
        speed={0.25}
      />

      {/* Animated emerald blur orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-emerald-500/15 blur-[128px] animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 h-[400px] w-[400px] rounded-full bg-teal-400/10 blur-[100px] animate-pulse-glow"
      />

      {/* ---------- Content ---------- */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* ---- Left column ---- */}
        <div className="flex flex-col items-start justify-center">
          {/* Eyebrow */}
          <FadeIn direction="up" delay={0.1}>
            <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              <span className="inline-block h-px w-5 bg-emerald-600" />
              {COMPANY.name}
            </p>
          </FadeIn>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <TextReveal
              text="Transforming Ideas into Global Products."
              highlightClass="gradient-text"
              highlightTarget={["Ideas"]}
              delay={0.25}
            />
          </h1>

          {/* Subtitle */}
          <FadeIn direction="up" delay={0.6}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Premier IT consulting, multi-disciplinary engineering, and oil
              &amp; gas solutions. We unify digital possibilities for
              organizational survival and growth across Nigeria and beyond.
            </p>
          </FadeIn>

          {/* CTA buttons */}
          <FadeIn direction="up" delay={0.8}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaButton href="/contact" variant="primary">
                Partner With Us
              </CtaButton>
              <CtaButton href="/services" variant="outline">
                Our Capabilities
              </CtaButton>
            </div>
          </FadeIn>
        </div>

        {/* ---- Right column (hidden on mobile) ---- */}
        <div className="relative hidden lg:block">
          <FadeIn direction="left" delay={0.4} duration={0.9}>
            <div className="relative overflow-hidden rounded-2xl border border-border emerald-glow">
              <video
                ref={videoRef}
                src="/videos/hero-quadco.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[520px] w-full rounded-2xl object-cover"
              />

              {/* Bottom overlay bar */}
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 bg-gradient-to-t from-white/95 via-white/80 to-transparent px-6 pb-6 pt-14">
                <div className="flex-1">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                    Core Mission
                  </p>
                  <p className="text-sm font-semibold leading-snug text-foreground">
                    {COMPANY.coreMission}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Hero;
