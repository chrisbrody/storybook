"use client";

import { Tagline } from "./Tagline";

interface HeaderSectionProps {
  /** The tagline text displayed above the heading */
  tagline?: string;
  /** The main heading text */
  heading?: string;
  /** The description text below the heading */
  description?: string;
  /** Tagline variant style */
  taglineVariant?: "default" | "ghost" | "white";
  /** Text alignment */
  alignment?: "center" | "left";
  /** Custom CSS classes */
  className?: string;
  /** Background color variant */
  background?: "default" | "muted" | "accent";
}

export function HeaderSection({
  tagline = "Header section",
  heading = "Short engaging headline",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
  taglineVariant = "ghost",
  alignment = "center",
  className = "",
  background = "default"
}: HeaderSectionProps) {
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted",
    accent: "bg-accent"
  };

  const alignmentClasses = {
    center: "items-center text-center",
    left: "items-center text-center md:items-start md:text-left"
  };

  return (
    <section
      className={`${backgroundClasses[background]} section-padding-y ${className}`}
      aria-labelledby="page-heading"
    >
      <div className="container-padding-x container mx-auto">
        <div className="section-title-gap-xl flex max-w-xl flex-1 flex-col">
          <div className={`section-title-gap-xl flex flex-col ${alignmentClasses[alignment]}`}>
            <Tagline variant={taglineVariant}>{tagline}</Tagline>
            <h1 id="page-heading" className="heading-xl text-foreground">
              {heading}
            </h1>
            <p
              className="text-muted-foreground text-base lg:text-lg"
              aria-description="page description"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export type { HeaderSectionProps };