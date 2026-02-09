import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogMeta } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllBlogPosts(): BlogMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(content);
      const stats = readingTime(content);
      return {
        title: String(data.title || slug),
        description: String(data.description || ""),
        date: String(data.date || ""),
        author: String(data.author || "Quadco Consults"),
        tags: (data.tags || []) as string[],
        image: data.image as string | undefined,
        published: data.published !== false,
        slug,
        readingTime: stats.text,
      } satisfies BlogMeta;
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getBlogPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, "utf-8");
  const { data, content: body } = matter(content);
  const stats = readingTime(content);
  return {
    meta: {
      title: String(data.title || slug),
      description: String(data.description || ""),
      date: String(data.date || ""),
      author: String(data.author || "Quadco Consults"),
      tags: (data.tags || []) as string[],
      image: data.image as string | undefined,
      published: data.published !== false,
      slug,
      readingTime: stats.text,
    } satisfies BlogMeta,
    content: body,
  };
}

export function getBlogPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
