"use client";

import { useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { profile, contact, externalLink } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied to clipboard.");
    } catch {
      setCopyStatus(
        "Could not copy automatically. Please select and copy the email address.",
      );
    }
  }
  return (
    <>
      <section id="contact" className="py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center md:gap-20">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">
              <span className="mr-2 text-primary">/</span>Let&apos;s connect
            </p>
            <h2 className="whitespace-pre-line text-balance text-4xl font-medium leading-[1.15] tracking-[-0.04em] md:text-5xl">
              {contact.heading}
            </h2>
            <p className="max-w-md text-base text-muted-foreground">
              {contact.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {validEmail ? (
                <a
                  href={`mailto:${profile.email}`}
                  className={cn(buttonVariants(), "h-12 px-5")}
                >
                  <Mail data-icon="inline-start" />
                  Say hello <ArrowUpRight data-icon="inline-end" />
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Add an email address in the content file to get in touch.
                </p>
              )}
              <a href={profile.cvUrl} download className="text-link">
                <Download className="size-4" />
                {profile.cvIsSample ? "Download sample CV" : profile.cvLabel}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-xl border border-border bg-card/40 p-7">
            <div className="flex flex-col gap-2">
              <p className="eyebrow">Drop me a line</p>
              <div className="flex items-center justify-between gap-2">
                <span className="break-all text-lg font-medium">
                  {profile.email || "Email not configured"}
                </span>
                {validEmail && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                  >
                    {copyStatus.startsWith("Email copied") ? (
                      <Check />
                    ) : (
                      <Copy />
                    )}
                  </Button>
                )}
              </div>
              {profile.emailIsSample && (
                <p className="text-sm text-muted-foreground">
                  Sample email — replace before publishing.
                </p>
              )}
              <p
                role="status"
                aria-live="polite"
                className="text-sm text-primary"
              >
                {copyStatus}
              </p>
            </div>
            <div className="flex flex-col gap-4 border-t border-border pt-5">
              {profile.socials.map((social) =>
                externalLink(social.url) ? (
                  <a
                    href={externalLink(social.url)}
                    key={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm hover:text-primary"
                  >
                    {social.label}
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : (
                  <div
                    key={social.label}
                    className="flex items-center justify-between gap-4 text-sm text-muted-foreground"
                  >
                    <span>{social.label}</span>
                    <span className="font-mono">Not linked yet</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-border py-7">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Made with curiosity &
            care.
          </p>
          <a href="#home" className="text-link">
            Back to top <ArrowUp className="size-4" />
          </a>
        </div>
        {profile.isDemo && (
          <p className="pt-4 text-sm text-muted-foreground">
            Portfolio template · Personal details, research entries, and
            articles are editable samples.
          </p>
        )}
      </footer>
    </>
  );
}
