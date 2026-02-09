import { Hero } from "@/components/sections/home/hero";
import { PartnersMarquee } from "@/components/sections/home/partners-marquee";
import { AboutPreview } from "@/components/sections/home/about-preview";
import { ServicesGrid } from "@/components/sections/home/services-grid";
import { Certifications } from "@/components/sections/home/certifications";
import { StatsCounter } from "@/components/sections/home/stats-counter";
import { CtaSection } from "@/components/sections/home/cta-section";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <PartnersMarquee />
      <AboutPreview />
      <ServicesGrid />
      <Certifications />
      <StatsCounter />
      <CtaSection />
    </div>
  );
}
