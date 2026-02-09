import { COMPANY } from "@/data/company";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox } from "@/components/shared/icon-box";
import { Check, Award, Leaf } from "lucide-react";

const policyCards = [
  {
    icon: Award,
    title: "Quality Policy",
    quote: COMPANY.qualityPolicy,
    details: COMPANY.qualityDetails,
    delay: 0,
  },
  {
    icon: Leaf,
    title: "HSE Policy",
    quote: COMPANY.hsePolicy,
    details: COMPANY.hseDetails,
    delay: 0.15,
  },
] as const;

export function Policies() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Standards & Compliance"
          title="Our Policies"
          highlight="Policies"
          description="Robust quality and HSE frameworks that underpin every engagement and protect people, assets, and the environment."
          alignment="center"
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {policyCards.map((card) => (
            <FadeIn key={card.title} direction="up" delay={card.delay}>
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50">
                {/* Icon & Title */}
                <div className="mb-6 flex items-center gap-4">
                  <IconBox icon={card.icon} size="md" />
                  <h3 className="text-xl font-bold text-foreground">
                    {card.title}
                  </h3>
                </div>

                {/* Policy Quote */}
                <blockquote className="mb-8 border-l-2 border-emerald-500/40 pl-4 italic text-muted-foreground leading-relaxed">
                  &ldquo;{card.quote}&rdquo;
                </blockquote>

                {/* Detail Bullets */}
                <ul className="space-y-3">
                  {card.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Policies;
