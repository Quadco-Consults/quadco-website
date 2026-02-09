import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectData } from "@/types";

interface CaseStudyContentProps {
  project: ProjectData;
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  return (
    <div className="pb-28">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-16">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs uppercase tracking-widest">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              Client: {project.client}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.fullDescription}
          </p>
        </section>

        {project.challenge && (
          <section className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-xl font-bold text-foreground mb-4">
              The Challenge
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </section>
        )}

        {project.solution && (
          <section className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Our Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </section>
        )}

        {project.results && (
          <section className="bg-primary/5 rounded-2xl border border-primary/20 p-8">
            <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" />
              Results
            </h2>
            <p className="text-foreground leading-relaxed font-medium">
              {project.results}
            </p>
          </section>
        )}

        <div className="text-center pt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">Start a Similar Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyContent;
