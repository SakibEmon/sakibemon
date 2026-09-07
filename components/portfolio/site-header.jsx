"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { navigation, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function SiteHeader({ article = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (article) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [article]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("mobile-menu-button")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  const destination = (id) => (article ? `/#${id}` : `#${id}`);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-lg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:rounded-md focus:bg-primary focus:p-3 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="site-container">
        <div className="flex h-20 items-center justify-between md:h-22">
          <Link
            href={destination("home")}
            className="flex items-center gap-3"
            aria-label={`${profile.name} — home`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex size-10 items-center justify-center rounded-xl border border-primary/30 font-mono text-sm font-medium text-primary">
              {profile.initials}
              <span className="text-foreground">.</span>
            </span>
            <span className="text-base font-medium tracking-tight">
              {profile.name}
              <span className="text-primary">.</span>
            </span>
          </Link>
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={destination(item.id)}
                aria-current={
                  !article && active === item.id ? "location" : undefined
                }
                className={cn(
                  "relative py-3 text-sm transition-colors hover:text-foreground",
                  !article && active === item.id
                    ? "text-foreground after:absolute after:inset-x-0 after:bottom-1 after:mx-auto after:size-1 after:rounded-full after:bg-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={destination("contact")}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "hidden h-10 px-4 sm:inline-flex",
              )}
            >
              Let&apos;s talk <ArrowUpRight data-icon="inline-end" />
            </Link>
            <Button
              id="mobile-menu-button"
              variant="ghost"
              size="icon-lg"
              className="lg:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="flex flex-col border-t border-border pb-5 lg:hidden"
          >
            {[
              ...navigation,
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <Link
                className="rounded-md py-3 text-muted-foreground hover:text-primary"
                href={destination(item.id)}
                key={item.id}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
