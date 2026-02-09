import { COMPANY } from "@/data/company";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlowCard } from "@/components/shared/glow-card";
import { GradientText } from "@/components/shared/gradient-text";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Eye, Target } from "lucide-react";

export function CompanyOverview() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Are"
          title="About Quadco Consults"
          highlight="Quadco Consults"
          description="An international player in IT consulting, engineering, and oil & gas solutions headquartered in Abuja, Nigeria."
          alignment="center"
          className="mb-16"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Column - Company Description */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                <GradientText>{COMPANY.name}</GradientText> assembles the
                brightest minds in technology, engineering, and business
                strategy to deliver transformative solutions for organizations
                across Nigeria and beyond. With our headquarters in the heart
                of Abuja, we serve as a strategic hub connecting local
                expertise with global best practices.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Since our incorporation in {COMPANY.founded}, we have rapidly
                grown into an international player recognized for excellence
                across IT transformation, infrastructure operations,
                multi-disciplinary engineering, oil &amp; gas solutions, and
                cybersecurity consulting.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our value-driven approach ensures that every engagement
                translates into measurable outcomes for our clients. We combine
                deep domain expertise with a relentless commitment to quality,
                safety, and innovation -- empowering organizations to thrive in
                an increasingly complex business landscape.
              </p>
            </div>
          </FadeIn>

          {/* Right Column - Vision & Mission Card */}
          <FadeIn direction="right">
            <GlowCard className="relative overflow-hidden">
              {/* RC Badge in corner */}
              <div className="absolute right-4 top-4 z-10">
                <Badge
                  variant="outline"
                  className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 text-xs font-mono"
                >
                  {COMPANY.rc}
                </Badge>
              </div>

              <CardContent className="p-8 pt-8">
                {/* Emerald accent bar */}
                <div className="mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500" />

                {/* Vision */}
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Eye className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {COMPANY.vision}
                  </p>
                </div>

                <Separator className="my-6" />

                {/* Mission */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Target className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {COMPANY.mission}
                  </p>
                </div>
              </CardContent>
            </GlowCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;
