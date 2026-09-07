import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Microscope,
  PenLine,
  Building2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  about,
  skills,
  experience,
  externalLink,
  profile,
} from "@/lib/portfolio-data";

export function SectionHeading({ label, title, description, children }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">
          <span className="mr-2 text-primary">/</span>
          {label}
        </p>
        <h2 className="section-title">{title}</h2>
        {description && (
          <p className="max-w-xl text-base text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div className="flex flex-col gap-6">
          <p className="eyebrow">
            <span className="mr-2 text-primary">/</span>A little about me
          </p>
          <h2 className="section-title whitespace-pre-line">{about.heading}</h2>
          <span className="max-w-xs text-sm text-muted-foreground">
            {profile.isDemo
              ? "An editable introduction to the person behind the work."
              : profile.role}
          </span>
        </div>
        <div className="flex flex-col gap-5">
          {about.paragraphs.map((text) => (
            <p key={text} className="text-base text-muted-foreground">
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-12 grid gap-8 rounded-xl border border-border bg-card/40 p-7 sm:grid-cols-2 sm:p-8">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="size-5 text-primary" />
            <h3 className="text-base font-medium">
              Education & academic focus
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base">{about.education.degree}</p>
            <p className="text-sm text-muted-foreground">
              {about.education.institution} · {about.education.period}
            </p>
            <p className="text-sm text-muted-foreground">
              {about.education.focus}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:border-l sm:border-border sm:pl-8">
          <div className="flex items-center gap-2.5">
            <Microscope className="size-5 text-primary" />
            <h3 className="text-base font-medium">Research interests</h3>
          </div>
          <ul className="flex flex-col gap-3">
            {about.interests.map((interest) => (
              <li
                key={interest}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="size-1 rounded-full bg-primary" />
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const skillIcons = [Microscope, BookOpen, PenLine];
export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        label="My toolkit"
        title="A cross-disciplinary perspective."
        description="The methods, subjects, and tools that shape how I work."
      />
      <div className="grid gap-9 md:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = skillIcons[index % skillIcons.length];
          return (
            <div key={group.title} className="flex flex-col gap-5">
              <Icon className="size-6 text-primary" strokeWidth={1.4} />
              <h3 className="text-lg font-medium">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    variant="outline"
                    key={item}
                    className="h-auto px-3 py-1.5"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        label="The journey so far"
        title="Experience & affiliations."
        description="Learning, contributing, and collaborating along the way."
      />
      <div className="flex flex-col">
        {experience.map((item, index) => (
          <div key={`${item.organization}-${index}`}>
            {index > 0 && <Separator />}
            <div className="grid gap-5 py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card">
                  <Building2 className="size-5 text-muted-foreground" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium">
                    {externalLink(item.url) ? (
                      <a
                        href={externalLink(item.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-primary"
                      >
                        {item.organization}
                        <ArrowUpRight className="size-4" />
                      </a>
                    ) : (
                      item.organization
                    )}
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    {item.period}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-medium">{item.role}</h4>
                <p className="text-base text-muted-foreground">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
