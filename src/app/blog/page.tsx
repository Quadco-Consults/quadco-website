import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { BlogCard } from "@/components/sections/blog/blog-card";
import { getAllBlogPosts } from "@/lib/blog";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Insights & Resources",
  description:
    "Expert insights on IT transformation, cybersecurity, engineering, and oil & gas trends from Quadco Consults.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Blog", url: `${siteConfig.url}/blog` },
            ])
          ),
        }}
      />
      <PageHeader
        title="Insights & Resources"
        highlight="Insights"
        description="Expert perspectives on technology, engineering, and business strategy."
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Coming soon. Check back for expert insights.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
