"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { ProjectCard } from "@/components/sections/portfolio/project-card";
import { ProjectFilters } from "@/components/sections/portfolio/project-filters";
import { ResultsStats } from "@/components/sections/portfolio/results-stats";
import { projects, getAllProjectTags } from "@/data/projects";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const allTags = ["All", ...getAllProjectTags()];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <div>
      <PageHeader
        title="Our Success Stories"
        highlight="Success Stories"
        description="A showcase of how we've helped businesses transform their digital landscape."
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilters
            tags={allTags}
            activeFilter={filter}
            onFilterChange={setFilter}
          />
          <div className="grid md:grid-cols-2 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <ResultsStats />
    </div>
  );
}
