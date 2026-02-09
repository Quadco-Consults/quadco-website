import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { ServiceDetailContent } from "@/components/sections/services/service-detail-content";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/config/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.seoDescription,
    openGraph: {
      title: `${service.title} | Quadco Consults`,
      description: service.seoDescription,
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Services", url: `${siteConfig.url}/services` },
              {
                name: service.title,
                url: `${siteConfig.url}/services/${slug}`,
              },
            ])
          ),
        }}
      />
      <ServiceDetailContent service={service} />
    </div>
  );
}
