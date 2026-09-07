"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FileText,
  Layers,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { research, writing } from "@/lib/portfolio-data";
import { SectionHeading } from "./profile-sections";

const researchIcons = { Paper: FileText, Book: BookOpen, Project: Layers };

export function Research() {
  const categories = [
    "All work",
    ...new Set(research.map((item) => item.category)),
  ];
  return (
    <section id="research" className="section-shell">
      <SectionHeading
        label="Ideas into evidence"
        title="Selected research."
        description="Questions explored, perspectives shared, and knowledge in progress."
      />
      <Tabs defaultValue="All work" className="gap-7">
        <TabsList
          variant="line"
          aria-label="Filter research"
          className="max-w-full flex-wrap"
        >
          {categories.map((category) => (
            <TabsTrigger value={category} key={category} className="px-3">
              {category === "Paper"
                ? "Papers"
                : category === "Book"
                  ? "Books"
                  : category === "Project"
                    ? "Projects"
                    : category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent value={category} key={category}>
            <div className="flex flex-col">
              {research
                .filter(
                  (item) =>
                    category === "All work" || item.category === category,
                )
                .map((item) => {
                  const Icon = researchIcons[item.category] || FileText;
                  return (
                    <Link
                      key={item.slug}
                      href={`/research/${item.slug}`}
                      className="group flex items-start gap-4 border-t border-border py-7 first:border-t-0 first:pt-2 sm:gap-6"
                    >
                      <span className="hidden size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card sm:flex">
                        <Icon
                          className="size-5 text-muted-foreground"
                          strokeWidth={1.5}
                        />
                      </span>
                      <div className="flex flex-1 flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge
                            variant={
                              item.category === "Book" ? "default" : "outline"
                            }
                          >
                            {item.label}
                          </Badge>
                          <span className="font-mono text-sm text-muted-foreground">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-pretty text-xl font-medium tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="max-w-2xl text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.meta}
                        </p>
                      </div>
                      <span className="round-arrow mt-2">
                        <ArrowUpRight className="size-5" />
                      </span>
                    </Link>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export function Writing() {
  const categories = [
    "All writing",
    ...new Set(writing.map((item) => item.category)),
  ];
  return (
    <section id="writing" className="section-shell">
      <SectionHeading
        label="Words that connect"
        title="Writing with substance."
        description="Complex subjects. Clear stories. A selection of my writing."
      />
      <Tabs defaultValue="All writing" className="gap-7">
        <TabsList variant="line" aria-label="Filter writing">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="px-3">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-7 sm:grid-cols-2">
              {writing
                .filter(
                  (item) =>
                    category === "All writing" || item.category === category,
                )
                .map((item) => (
                  <Link
                    href={`/writing/${item.slug}`}
                    key={item.slug}
                    className="group overflow-hidden rounded-xl border border-border bg-card/30"
                  >
                    <div className="relative aspect-[16/8.5] overflow-hidden bg-card">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 640px) 90vw, 520px"
                        className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4">
                        <Badge variant="secondary">{item.category}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6">
                      <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                        <span>
                          {item.sample ? "Sample article" : item.label}
                        </span>
                        <span>·</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {item.description}
                      </p>
                      <span className="flex items-center justify-between border-t border-border pt-5 text-sm">
                        Read the article{" "}
                        <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
