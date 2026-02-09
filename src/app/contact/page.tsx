import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ComplianceBadges } from "@/components/sections/contact/compliance-badges";
import { localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Reach Quadco Consults for IT consulting, engineering solutions, and oil & gas services in Nigeria. Available 24/7 for emergency consultation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Contact", url: `${siteConfig.url}/contact` },
            ])
          ),
        }}
      />
      <PageHeader
        title="Reach Our Hub"
        highlight="Our Hub"
        description="Available 24/7 for technical support and emergency service consultation across Nigeria."
        backgroundVariant="emerald"
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-8">
              <ContactInfo />
              <ComplianceBadges />
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
