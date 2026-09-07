import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blog } from "@/lib/portfolio-data";
import { SectionHeading } from "./profile-sections";

export function Journal() {
  return (
    <section id="blog" className="section-shell">
      <SectionHeading
        label="From the notebook"
        title="Thoughts, notes & perspectives."
        description="A space for ideas that are still unfolding."
      />
      <div className="grid gap-7 md:grid-cols-3">
        {blog.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card/30 p-6 transition-colors hover:bg-card"
          >
            <div className="flex flex-col gap-5">
              <p className="font-mono text-sm text-primary">{post.category}</p>
              <h3 className="text-pretty text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {post.description}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
              <p className="text-sm text-muted-foreground">
                {post.sample
                  ? "Sample post"
                  : new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    })}{" "}
                · {post.readTime}
              </p>
              <ArrowUpRight className="size-5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
