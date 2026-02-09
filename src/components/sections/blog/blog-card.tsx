import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { TagBadge } from "@/components/shared/tag-badge";
import type { BlogMeta } from "@/types";

interface BlogCardProps {
  post: BlogMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500">
        {post.image && (
          <div className="aspect-video overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={340}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <TagBadge key={tag}>{tag}</TagBadge>
            ))}
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-NG", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
            </div>
            <span className="text-primary text-sm font-bold flex items-center gap-1">
              Read
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;
