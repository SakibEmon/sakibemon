import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="border-b border-border"
    >
      <div className="grid items-center gap-12 py-14 md:grid-cols-[1.5fr_1fr] md:gap-12 md:py-12 lg:gap-20">
        <div className="hero-reveal flex flex-col gap-6">
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            {profile.availability}
          </div>
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Hello, I&apos;m {profile.name}</p>
            <h1 className="text-balance text-5xl font-medium leading-[1.09] tracking-[-0.055em] sm:text-6xl lg:text-[62px]">
              {profile.headline.map((part, index) => (
                <span
                  key={index}
                  className={cn(index % 2 === 1 && "text-primary")}
                >
                  {part}
                  {index < profile.headline.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#research" className={cn(buttonVariants(), "h-12 px-5")}>
              Explore my work <ArrowUpRight data-icon="inline-end" />
            </a>
            <a
              href={profile.cvUrl}
              download
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 px-5",
              )}
              aria-label={
                profile.cvIsSample
                  ? "Download sample CV template PDF"
                  : "Download CV PDF"
              }
            >
              <Download data-icon="inline-start" />
              {profile.cvLabel}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {profile.location}
            </span>
            <span className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-muted-foreground/60" />
              {profile.role}
            </span>
          </div>
        </div>
        <figure className="hero-reveal-delay relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative aspect-[4/4.3] overflow-hidden rounded-2xl bg-card">
            <Image
              src={profile.portrait}
              alt={profile.portraitAlt}
              fill
              priority
              sizes="(max-width: 767px) 90vw, 370px"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-foreground/15 bg-background/85 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium">{profile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {profile.photoCaption}
                  </p>
                </div>
                <MoveUpRight
                  className="size-6 shrink-0 text-primary"
                  strokeWidth={1.25}
                />
              </div>
            </div>
          </div>
          {profile.portraitNote && (
            <figcaption className="pt-3 text-center text-sm text-muted-foreground">
              {profile.portraitNote}
            </figcaption>
          )}
        </figure>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-5">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-foreground">Currently connected with</span>
          <span className="hidden sm:inline">—</span>
          <a
            href={profile.affiliationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-primary"
          >
            {profile.affiliation}
          </a>
          <ArrowUpRight className="size-3.5" />
        </p>
        <a href="#about" className="text-link">
          A little more about me <ArrowDown className="size-4" />
        </a>
      </div>
    </section>
  );
}
