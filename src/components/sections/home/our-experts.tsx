"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "@/data/team";
import { FadeIn } from "@/components/animations/fade-in";
import { ANIMATION } from "@/lib/animation-presets";

const VISIBLE_COUNT = 4;

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
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: ANIMATION.ease.out },
  },
};

export function OurExperts() {
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const canGoBack = startIndex > 0;
  const canGoForward = startIndex + VISIBLE_COUNT < teamMembers.length;

  const goBack = useCallback(() => {
    if (canGoBack) setStartIndex((prev) => prev - 1);
  }, [canGoBack]);

  const goForward = useCallback(() => {
    if (canGoForward) setStartIndex((prev) => prev + 1);
  }, [canGoForward]);

  const visibleMembers = teamMembers.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  return (
    <section
      className="relative bg-background py-24 lg:py-32 overflow-hidden"
      aria-label="Our experts"
    >
      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 0.5px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-40 right-0 h-80 w-[28rem] rounded-full bg-emerald-100/50 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-80 w-[28rem] rounded-full bg-teal-50/60 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header Row ── */}
        <FadeIn direction="up">
          <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            {/* Left — Eyebrow + Heading */}
            <div className="max-w-lg">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">
                Our Experts
              </p>
              <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                Introducing Our Passionate and{" "}
                <span className="relative">
                  Skilled Professionals
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-emerald-500/30" />
                </span>
              </h2>
            </div>

            {/* Right — Description + Nav arrows */}
            <div className="flex items-end gap-6 lg:gap-8">
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:pb-1">
                <span className="font-semibold text-emerald-600">
                  Quadco Consults
                </span>{" "}
                is powered by a skilled team dedicated to delivering smart IT
                solutions. We focus on innovation, and real business impact.
              </p>

              {/* Navigation Arrows */}
              <div className="flex shrink-0 gap-2.5 pb-1">
                <button
                  onClick={goBack}
                  disabled={!canGoBack}
                  aria-label="Previous team members"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                </button>
                <button
                  onClick={goForward}
                  disabled={!canGoForward}
                  aria-label="Next team members"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Team Grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {visibleMembers.map((member, index) => (
              <motion.div
                key={member.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={ANIMATION.viewport}
                layout
                className="group"
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Card */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted shadow-sm transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-emerald-900/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Bottom gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Social icons — slide in from right on hover */}
                  {member.socials && (
                    <div className="absolute right-3 top-3 flex flex-col gap-2">
                      {member.socials.linkedin && (
                        <motion.a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          initial={{ opacity: 0, x: 14 }}
                          animate={
                            hoveredId === member.id
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: 14 }
                          }
                          transition={{ duration: 0.25, delay: 0 }}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md backdrop-blur-sm transition-colors duration-200 hover:bg-emerald-500 hover:text-white"
                        >
                          <Linkedin className="h-3.5 w-3.5" />
                        </motion.a>
                      )}
                      {member.socials.twitter && (
                        <motion.a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Twitter`}
                          initial={{ opacity: 0, x: 14 }}
                          animate={
                            hoveredId === member.id
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: 14 }
                          }
                          transition={{ duration: 0.25, delay: 0.06 }}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md backdrop-blur-sm transition-colors duration-200 hover:bg-emerald-500 hover:text-white"
                        >
                          <Twitter className="h-3.5 w-3.5" />
                        </motion.a>
                      )}
                      {member.socials.email && (
                        <motion.a
                          href={`mailto:${member.socials.email}`}
                          aria-label={`Email ${member.name}`}
                          initial={{ opacity: 0, x: 14 }}
                          animate={
                            hoveredId === member.id
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: 14 }
                          }
                          transition={{ duration: 0.25, delay: 0.12 }}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md backdrop-blur-sm transition-colors duration-200 hover:bg-emerald-500 hover:text-white"
                        >
                          <Mail className="h-3.5 w-3.5" />
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>

                {/* Name + Role */}
                <div className="mt-5 text-center">
                  <h3 className="text-base font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-emerald-700">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-emerald-600">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
