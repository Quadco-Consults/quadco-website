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
        {/* ---------- Left: Photo Mosaic ---------- */}
        <FadeIn direction="left" duration={0.9}>
          <div className="relative h-[620px] lg:h-[680px]">
            {/* Subtle cloud/blob outline behind the mosaic */}
            <svg
              className="pointer-events-none absolute left-[5%] top-[2%] z-0 h-[55%] w-[55%] text-emerald-200/40"
              viewBox="0 0 200 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 140c-30 0-50-20-50-45s15-40 35-42c-2-25 20-48 48-48 22 0 40 13 46 32 5-3 11-5 18-5 20 0 36 16 36 36 0 3-0.5 6-1 9 12 6 20 18 20 33 0 20-16 30-36 30H60z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Row 1 — top area */}
            {/* Small tall tile - top left */}
            <div className="absolute left-[8%] top-[8%] z-[2] h-[120px] w-[70px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/118348.jpg"
                alt="Team collaborating"
                fill
                className="object-cover"
                sizes="70px"
              />
            </div>

            {/* Medium tall tile - center left */}
            <div className="absolute left-[22%] top-[5%] z-[3] h-[180px] w-[100px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/2150917270.jpg"
                alt="Professional consultant"
                fill
                className="object-cover"
                sizes="100px"
              />
            </div>

            {/* Small gray accent tile */}
            <div className="absolute left-[44%] top-[3%] z-[1] h-[80px] w-[55px] rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 shadow-lg" />

            {/* Narrow tall tile - top right */}
            <div className="absolute left-[54%] top-[6%] z-[2] h-[140px] w-[65px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/118348.jpg"
                alt="Business operations"
                fill
                className="object-cover object-right"
                sizes="65px"
              />
            </div>

            {/* Row 2 — middle area (main focal point) */}
            {/* Large tile - center left */}
            <div className="absolute left-[10%] top-[28%] z-[4] h-[200px] w-[150px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/2150917270.jpg"
                alt="IT consultant at work"
                fill
                className="object-cover object-center"
                sizes="150px"
              />
            </div>

            {/* Large tile - center */}
            <div className="absolute left-[35%] top-[22%] z-[5] h-[220px] w-[160px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/118348.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>

            {/* Medium tile - right of center */}
            <div className="absolute left-[62%] top-[25%] z-[4] h-[180px] w-[130px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/2150917270.jpg"
                alt="Engineering work"
                fill
                className="object-cover object-left"
                sizes="130px"
              />
            </div>

            {/* Small dark accent tile - far right */}
            <div className="absolute left-[80%] top-[20%] z-[2] h-[90px] w-[60px] rounded-xl bg-gradient-to-b from-gray-600 to-gray-800 shadow-lg" />

            {/* Row 3 — bottom area */}
            {/* Medium tile - bottom left */}
            <div className="absolute bottom-[12%] left-[18%] z-[3] h-[150px] w-[120px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/118348.jpg"
                alt="Team meeting"
                fill
                className="object-cover object-bottom"
                sizes="120px"
              />
            </div>

            {/* Wide tile - bottom center */}
            <div className="absolute bottom-[8%] left-[40%] z-[4] h-[130px] w-[170px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/2150917270.jpg"
                alt="Engineering team"
                fill
                className="object-cover object-top"
                sizes="170px"
              />
            </div>

            {/* Small accent tile - bottom right */}
            <div className="absolute bottom-[18%] left-[72%] z-[2] h-[80px] w-[70px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/118348.jpg"
                alt="Collaboration"
                fill
                className="object-cover object-left-top"
                sizes="70px"
              />
            </div>

            {/* Tiny dark accent - bottom far right */}
            <div className="absolute bottom-[25%] left-[82%] z-[1] h-[60px] w-[45px] rounded-lg bg-gradient-to-b from-gray-500 to-gray-700 shadow-md" />
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
