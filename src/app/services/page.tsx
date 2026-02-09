import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { ServiceCard } from "@/components/sections/services/service-card";
import { ProcessSteps } from "@/components/sections/services/process-steps";
import { services } from "@/data/services";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Our Services",
  description:
    "IT Transformation, Infrastructure & Operations, Multi-Disciplinary Engineering, Oil & Gas Solutions, Security & Resilience, and Advisory & Risk services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Services", url: `${siteConfig.url}/services` },
            ])
          ),
        }}
      />
      <PageHeader
        title="World-Class IT Services"
        highlight="IT Services"
        description="Comprehensive solutions for the modern digital era, delivered by experts."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <ProcessSteps />
    </div>
  );
}
