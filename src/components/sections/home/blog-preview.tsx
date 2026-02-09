import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/shared/section-heading";
import { BlogCard } from "@/components/sections/blog/blog-card";
import { FadeIn } from "@/components/animations/fade-in";

export function BlogPreview() {
  const posts = getAllBlogPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-muted/30 py-28" aria-label="Latest insights">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="From the Blog"
            title="Latest Insights"
            highlight="Insights"
            description="Industry trends, expert analysis, and practical guides from our team."
            alignment="left"
          />
          <FadeIn direction="up" delay={0.2}>
            <Link
              href="/blog"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-600 transition-colors hover:text-emerald-500"
            >
              View All Articles
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <FadeIn key={post.slug} direction="up" delay={idx * 0.1}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;
