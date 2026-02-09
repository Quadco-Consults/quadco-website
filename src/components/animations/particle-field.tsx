"use client";

import { useRef, useEffect, useCallback } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  color?: string;
  connectDistance?: number;
  speed?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

/**
 * Canvas-based particle system with mouse interaction.
 * Particles drift slowly and connect with semi-transparent lines
 * when within `connectDistance` of each other. The cursor gently
 * pushes nearby particles away.
 */
export function ParticleField({
  className,
  particleCount = 60,
  color = "#10b981",
  connectDistance = 120,
  speed = 0.3,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const animationFrameRef = useRef<number>(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const resolvedCount = isMobile ? Math.min(particleCount, 25) : particleCount;

  // Parse the hex colour into r, g, b for use in rgba strings
  const parseColor = useCallback((hex: string) => {
    const clean = hex.replace("#", "");
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return { r, g, b };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { r, g, b } = parseColor(color);

    // ---- Resize ----
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // ---- Init particles ----
    const initParticles = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const particles: Particle[] = [];

      for (let i = 0; i < resolvedCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: Math.cos(angle) * speed * (0.5 + Math.random() * 0.5),
          vy: Math.sin(angle) * speed * (0.5 + Math.random() * 0.5),
          radius: 1.2 + Math.random() * 1.3,
          opacity: 0.3 + Math.random() * 0.7,
        });
      }

      particlesRef.current = particles;
    };

    initParticles();

    // ---- Mouse tracking ----
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    // Listen on the parent so pointer-events-none on the canvas doesn't block it
    const parent = canvas.parentElement;
    parent?.addEventListener("mousemove", handleMouseMove);
    parent?.addEventListener("mouseleave", handleMouseLeave);

    // ---- Animation loop ----
    const draw = () => {
      const parentEl = canvas.parentElement;
      if (!parentEl) return;
      const rect = parentEl.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const pushRadius = 100;
      const pushStrength = 2;

      // Update positions
      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < pushRadius && dist > 0) {
          const force = ((pushRadius - dist) / pushRadius) * pushStrength;
          p.vx += (dx / dist) * force * 0.05;
          p.vy += (dy / dist) * force * 0.05;
        }

        // Dampen velocity so particles don't fly off
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const bP = particles[j];
          const dx = a.x - bP.x;
          const dy = a.y - bP.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            const opacity = (1 - distance / connectDistance) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(bP.x, bP.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    animationFrameRef.current = requestAnimationFrame(draw);

    // ---- Resize observer ----
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    if (parent) resizeObserver.observe(parent);

    // ---- Cleanup ----
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      parent?.removeEventListener("mousemove", handleMouseMove);
      parent?.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, [resolvedCount, color, connectDistance, speed, parseColor]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    />
  );
}
