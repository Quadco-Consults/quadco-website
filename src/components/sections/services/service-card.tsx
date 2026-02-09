"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Network,
  Compass,
  Fuel,
  ShieldCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceData } from "@/types";
import { GlowCard } from "@/components/shared/glow-card";
import { IconBox } from "@/components/shared/icon-box";
import { TagBadge } from "@/components/shared/tag-badge";
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

interface ServiceCardProps {
  service: ServiceData;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Cpu;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={`/services/${service.slug}`} className="group block h-full">
        <GlowCard className="h-full">
          <CardContent className="flex h-full flex-col p-8">
            {/* Icon & Category */}
            <div className="mb-6 flex items-start justify-between">
              <IconBox icon={Icon} size="lg" />
              <TagBadge variant="outline">{service.category}</TagBadge>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mb-6 flex-1 text-muted-foreground leading-relaxed">
              {service.shortDescription}
            </p>

            {/* Sub-service Pills */}
            <div className="mb-6 flex flex-wrap gap-2">
              {service.subServices.map((sub) => (
                <Badge
                  key={sub}
                  variant="secondary"
                  className="text-xs font-medium"
                >
                  {sub}
                </Badge>
              ))}
            </div>

            {/* Learn More link */}
            <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </CardContent>
        </GlowCard>
      </Link>
    </motion.div>
  );
}

export default ServiceCard;
