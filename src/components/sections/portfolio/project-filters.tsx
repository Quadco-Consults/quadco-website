"use client";

import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  tags: string[];
  activeFilter: string;
  onFilterChange: (tag: string) => void;
}

export function ProjectFilters({
  tags,
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onFilterChange(tag)}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300",
            activeFilter === tag
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
              : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilters;
