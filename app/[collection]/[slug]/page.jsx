import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/portfolio/site-header";
import { Badge } from "@/components/ui/badge";
import { collections, profile, externalLink } from "@/lib/portfolio-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.entries(collections).flatMap(([collection, entries]) =>
    entries.map((entry) => ({ collection, slug: entry.slug })),
  );
}

function findArticle(collection, slug) {
  return Object.hasOwn(collections, collection)
    ? collections[collection].find((entry) => entry.slug === slug)
    : undefined;
}

export async function generateMetadata({ params }) {
  const { collection, slug } = await params;
  const article = findArticle(collection, slug);
  if (!article) return { title: "Article not found" };
  return { title: article.title, description: article.description };
}

export default async function ArticlePage({ params }) {
  const { collection, slug } = await params;
  const article = findArticle(collection, slug);
  if (!article) notFound();
  const url = externalLink(article.externalUrl);
  const related = collections[collection]
    .filter((entry) => entry.slug !== slug)
    .slice(0, 2);
  return (
    <>
      <SiteHeader article />
      <main id="main-content" className="site-container">
        <article className="mx-auto max-w-3xl py-12 md:py-20">
          <Link href={`/#${collection}`} className="text-link">
            <ArrowLeft className="size-4" />
            Back to {collection}
          </Link>
          <header className="flex flex-col gap-6 py-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline">{article.label}</Badge>
              {article.sample && (
                <span className="font-mono text-sm text-primary">
                  Editable sample
                </span>
              )}
              {article.readTime && (
                <span className="text-sm text-muted-foreground">
                  {article.readTime}
                </span>
              )}
            </div>
            <h1 className="text-balance text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              {article.title}
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              {article.description}
            </p>
            <p className="text-sm text-muted-foreground">
              {profile.name} · {profile.role}
            </p>
          </header>
          {article.image && (
            <div className="relative mb-12 aspect-video overflow-hidden rounded-xl bg-card">
              <Image
                src={article.image}
                alt={article.imageAlt || article.title}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 768px"
                className="object-cover"
              />
            </div>
          )}
          <div className="article-copy flex flex-col gap-10">
            {article.body.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                View original source <ArrowUpRight className="size-4" />
              </a>
            ) : (
              collection === "research" && (
                <p className="text-sm text-muted-foreground">
                  Publication / project link not added yet.
                </p>
              )
            )}
            {article.sample && (
              <p className="text-sm text-muted-foreground">
                This is demonstration content, not a published credential or a
                report of completed research. Replace it with your own work in
                the portfolio content file.
              </p>
            )}
          </div>
          {related.length > 0 && (
            <aside className="mt-16 flex flex-col gap-6 border-t border-border pt-8">
              <h2 className="text-2xl font-medium tracking-tight">
                Keep exploring
              </h2>
              {related.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/${collection}/${entry.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border p-5 text-base hover:text-primary"
                >
                  {entry.title}
                  <ArrowUpRight className="size-5 shrink-0" />
                </Link>
              ))}
            </aside>
          )}
        </article>
      </main>
    </>
  );
}
