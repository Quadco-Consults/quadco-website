import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold tracking-tight text-foreground mt-10 mb-4 border-b border-border pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground leading-relaxed mb-6">{children}</p>
    ),
    a: ({ href, children }) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href || "#"}
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          {children}
        </Link>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-muted-foreground bg-muted/30 rounded-r-lg">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground">
        {children}
      </ol>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-primary font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted rounded-xl p-4 overflow-x-auto mb-6 border border-border">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-border my-8" />,
    img: ({ src, alt }) => (
      <figure className="my-8">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={1200}
          height={630}
          className="rounded-xl border border-border"
        />
        {alt && (
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            {alt}
          </figcaption>
        )}
      </figure>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border bg-muted px-4 py-2 text-left text-sm font-bold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2 text-sm text-muted-foreground">
        {children}
      </td>
    ),
    ...components,
  };
}
