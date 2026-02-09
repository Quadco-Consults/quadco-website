import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { CaseStudyContent } from "@/components/sections/portfolio/case-study-content";
import { caseStudyJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/config/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.seoDescription,
    openGraph: {
      title: `${project.title} | Quadco Consults`,
      description: project.seoDescription,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${siteConfig.url}/portfolio/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudyJsonLd(project)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Portfolio", url: `${siteConfig.url}/portfolio` },
              {
                name: project.title,
                url: `${siteConfig.url}/portfolio/${slug}`,
              },
            ])
          ),
        }}
      />
      <CaseStudyContent project={project} />
    </div>
  );
}
