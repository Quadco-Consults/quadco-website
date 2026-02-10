import { Hero } from "@/components/sections/home/hero";
import { PartnersMarquee } from "@/components/sections/home/partners-marquee";
import { AboutPreview } from "@/components/sections/home/about-preview";
import { ServicesGrid } from "@/components/sections/home/services-grid";
import { CaseStudies } from "@/components/sections/home/case-studies";
import { OurExperts } from "@/components/sections/home/our-experts";
import { Certifications } from "@/components/sections/home/certifications";
import { StatsCounter } from "@/components/sections/home/stats-counter";
import { BlogPreview } from "@/components/sections/home/blog-preview";
import { CtaSection } from "@/components/sections/home/cta-section";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <PartnersMarquee />
      <AboutPreview />
      <ServicesGrid />
      <CaseStudies />
      <OurExperts />
      <Certifications />
      <StatsCounter />
      <BlogPreview />
      <CtaSection />
    </div>
  );
}
