import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  ogImage,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
