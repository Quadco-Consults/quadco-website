import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { CompanyOverview } from "@/components/sections/about/company-overview";
import { VisionMission } from "@/components/sections/about/vision-mission";
import { Timeline } from "@/components/sections/about/timeline";
import { Policies } from "@/components/sections/about/policies";
import { StatsGrid } from "@/components/sections/about/stats-grid";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Quadco Consults Limited (RC 1695301) - Nigerian IT consulting, engineering, and oil & gas company founded in 2020. ISO certified with 50+ employees across 36 states.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "About", url: `${siteConfig.url}/about` },
            ])
          ),
        }}
      />
      <PageHeader
        title="Engineering Excellence Since 2020"
        highlight="Excellence"
        description="Incorporated as Quadco Consults Limited (RC 1695301), we are a Nigeria-owned private company limited by shares."
        backgroundVariant="emerald"
      />
      <CompanyOverview />
      <VisionMission />
      <Timeline />
      <Policies />
      <StatsGrid />
    </div>
  );
}
