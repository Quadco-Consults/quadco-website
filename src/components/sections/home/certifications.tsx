import { CERTIFICATIONS } from "@/data/certifications";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function Certifications() {
  return (
    <section className="bg-background py-24" aria-label="Certifications">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="Compliance & Standards"
            title="Industry Certifications"
            highlight="Certifications"
            description="We maintain the highest industry standards and regulatory compliance across every discipline we operate in."
            alignment="center"
          />
        </FadeIn>

        {/* Grid */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center transition-shadow duration-300 hover:shadow-[0_0_30px_oklch(0.696_0.17_162.48_/_0.08)]"
              >
                <p className="text-lg font-bold text-foreground">
                  {cert.name}
                </p>
                <p className="mt-1.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                  {cert.type}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Certifications;
