"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TagBadge } from "@/components/shared/tag-badge";
import type { ProjectData } from "@/types";

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <div className="relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500">
          <div className="aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={340}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          </div>
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <TagBadge key={tag}>{tag}</TagBadge>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground mb-4">
              Client: {project.client}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.shortDescription}
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-bold text-sm">
              View Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
