"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/data/company";
import { FadeIn } from "@/components/animations/fade-in";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function AboutPreview() {
  return (
    <section className="bg-background py-28" aria-label="About preview">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* ---------- Left: Photo Collage ---------- */}
        <FadeIn direction="left" duration={0.9}>
          <div className="relative h-[680px]">
            {/* Top-left image */}
            <div className="absolute left-0 top-0 w-[55%] overflow-hidden rounded-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaborating on a project"
                width={600}
                height={400}
                className="h-[260px] w-full object-cover"
              />
            </div>

            {/* Center image (overlapping, taller) */}
            <div className="absolute left-[30%] top-[15%] z-10 w-[55%] overflow-hidden rounded-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                alt="Professional IT consultant"
                width={600}
                height={700}
                className="h-[360px] w-full object-cover"
              />
            </div>

            {/* Bottom-left image */}
            <div className="absolute bottom-0 left-0 w-[50%] overflow-hidden rounded-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Business team in a meeting"
                width={600}
                height={400}
                className="h-[260px] w-full object-cover"
              />
            </div>

            {/* Bottom-center image (overlapping) */}
            <div className="absolute bottom-[5%] left-[35%] z-10 w-[50%] overflow-hidden rounded-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                alt="Engineering team at work"
                width={600}
                height={400}
                className="h-[240px] w-full object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* ---------- Right: Content ---------- */}
        <div>
          {/* Eyebrow pill */}
          <FadeIn direction="up" delay={0.1}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Core Purpose
            </span>
          </FadeIn>

          {/* Heading */}
          <FadeIn direction="up" delay={0.2}>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              An International Player in{" "}
              <span className="gradient-text">Consultancy</span>
            </h2>
          </FadeIn>

          {/* Description */}
          <FadeIn direction="up" delay={0.3}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We partner with organizations to adapt with agility, ensure
              resilience, and realize sustainable growth. Registered with CAC (
              {COMPANY.rc}), we operate across all 36 states in Nigeria and
              beyond.
            </p>
          </FadeIn>

          {/* Spinning badge */}
          <FadeIn direction="up" delay={0.4}>
            <div className="mt-8 flex justify-end pr-8">
              <div className="relative h-28 w-28">
                {/* Rotating text */}
                <motion.svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 120 120"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                    />
                  </defs>
                  <text className="fill-emerald-600 text-[10px] font-bold uppercase tracking-[0.35em]">
                    <textPath href="#circlePath">
                      A Trusted Brand With Proven Build &bull;
                    </textPath>
                  </text>
                </motion.svg>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-500/40 bg-emerald-500/10">
                    <ArrowUpRight className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn direction="up" delay={0.5}>
            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15">
                  <Eye className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-extrabold uppercase tracking-wider text-foreground">
                  Vision
                </h3>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {COMPANY.vision}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.55}>
            <Separator className="my-8" />
          </FadeIn>

          {/* Mission */}
          <FadeIn direction="up" delay={0.6}>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15">
                  <Target className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-extrabold uppercase tracking-wider text-foreground">
                  Mission
                </h3>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {COMPANY.mission}
              </p>
            </div>
          </FadeIn>

          {/* Link */}
          <FadeIn direction="up" delay={0.7}>
            <Link
              href="/about"
              className={cn(
                "group mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-600",
                "transition-colors duration-300 hover:text-emerald-500"
              )}
            >
              Learn Our Full Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
