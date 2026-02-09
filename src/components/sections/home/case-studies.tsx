"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/animations/fade-in";
import { ANIMATION } from "@/lib/animation-presets";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      delay: i * 0.12,
      ease: ANIMATION.ease.smooth,
    },
  }),
};

export function CaseStudies() {
  const featured = projects.slice(0, 4);

  return (
    <section
      className="relative bg-emerald-950 py-24 lg:py-32 overflow-hidden"
      aria-label="Case studies"
    >
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-teal-500/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <FadeIn direction="up">
          <div className="mb-16 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
            {/* Left - Eyebrow + Title */}
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                Case Study
              </p>
              <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Showcasing Our Most
                <br />
                Impactful Projects
              </h2>
            </div>

            {/* Center - Description */}
            <div className="max-w-sm lg:pb-1">
              <p className="text-sm leading-relaxed text-emerald-100/60">
                <span className="font-semibold text-emerald-400">
                  Quadco Consults
                </span>{" "}
                delivers smart IT projects that fit your business needs and help
                it grow. We focus on quality, speed, and real results.
              </p>
            </div>

            {/* Right - CTA Button */}
            <div className="shrink-0 lg:pb-1">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3"
              >
                <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-sm font-bold text-emerald-300 backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/60 group-hover:bg-emerald-400/20">
                  View More Projects
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Project Gallery - Asymmetric mosaic grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {featured.map((project, index) => {
            // Asymmetric column spans: 3, 5, 2, 2 pattern
            const colSpans = [
              "lg:col-span-3",
              "lg:col-span-4",
              "lg:col-span-3",
              "lg:col-span-2",
            ];
            const heights = [
              "aspect-[3/4]",
              "aspect-[4/5]",
              "aspect-[3/4]",
              "aspect-[3/4]",
            ];

            return (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={ANIMATION.viewport}
                className={`${colSpans[index]}`}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group relative block overflow-hidden rounded-2xl lg:rounded-3xl"
                >
                  {/* Image */}
                  <div
                    className={`relative w-full overflow-hidden ${heights[index]}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                    {/* Floating arrow button (on second card) */}
                    {index === 1 && (
                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <ArrowUpRight
                          className="h-4.5 w-4.5"
                          strokeWidth={2.5}
                        />
                      </div>
                    )}

                    {/* Tags + Title overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-block rounded-full bg-emerald-400/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-950 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-sm font-bold leading-snug text-white sm:text-base lg:text-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
