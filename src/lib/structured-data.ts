import { siteConfig } from "@/config/site";
import { COMPANY } from "@/data/company";
import type { ServiceData, ProjectData, BlogMeta } from "@/types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    foundingDate: String(COMPANY.founded),
    taxID: COMPANY.tin,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: `${COMPANY.address.district}, ${COMPANY.address.city}`,
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone.office,
      contactType: "customer service",
      email: COMPANY.email.general,
    },
    sameAs: [siteConfig.links.linkedin, siteConfig.links.twitter],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY.name,
    url: siteConfig.url,
    telephone: COMPANY.phone.office,
    email: COMPANY.email.general,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: `${COMPANY.address.district}, ${COMPANY.address.city}`,
      addressCountry: "NG",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$$$",
  };
}

export function serviceJsonLd(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    description: service.fullDescription,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

export function blogPostJsonLd(post: BlogMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
    image: post.image,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function caseStudyJsonLd(project: ProjectData) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.fullDescription,
    creator: {
      "@type": "Organization",
      name: COMPANY.name,
    },
    url: `${siteConfig.url}/portfolio/${project.slug}`,
    image: project.image,
  };
}
