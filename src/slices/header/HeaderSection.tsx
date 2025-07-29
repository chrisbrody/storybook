"use client";

import { Tagline } from "./Tagline";

interface HeaderSectionProps {
  /** The tagline text displayed above the heading */
  tagline?: string;
  /** Font family for tagline */
  taglineFont?: string;
  /** Color for tagline text */
  taglineColor?: string;
  /** The main heading text */
  heading?: string;
  /** Font family for headline */
  headlineFont?: string;
  /** Color for headline text */
  headlineColor?: string;
  /** The description text below the heading */
  description?: string;
  /** Font family for description */
  descriptionFont?: string;
  /** Color for description text */
  descriptionColor?: string;
  /** Tagline variant style */
  taglineVariant?: "default" | "ghost" | "white";
  /** Text alignment */
  alignment?: "center" | "left";
  /** Background color variant */
  background?: "default" | "muted" | "accent";
  /** Custom CSS classes */
  className?: string;
  /** Background color of the section */
  backgroundColor?: string;
}

export function HeaderSection({
  tagline = "Header section",
  taglineFont = "Inter",
  taglineColor,
  heading = "Short engaging headline",
  headlineFont = "Inter",
  headlineColor,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
  descriptionFont = "Inter",
  descriptionColor,
  taglineVariant = "ghost",
  alignment = "center",
  background = "default",
  className = "",
  backgroundColor
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

  const sectionStyle = {
    backgroundColor: backgroundColor || undefined,
  };

  const taglineStyle = {
    color: taglineColor || undefined,
    fontFamily: taglineFont || undefined,
  };

  const headlineStyle = {
    color: headlineColor || undefined,
    fontFamily: headlineFont || undefined,
  };

  const descriptionStyle = {
    color: descriptionColor || undefined,
    fontFamily: descriptionFont || undefined,
  };

  return (
    <div className="w-screen">

      <section
        className={`${backgroundClasses[background]} section-padding-y ${className}`}
        style={sectionStyle}
        aria-labelledby="page-heading"
      >
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-8 md:gap-10">
            <div className="section-title-gap-xl flex max-w-xl flex-1 flex-col">
              <div className={`section-title-gap-xl flex flex-col ${alignmentClasses[alignment]}`}>
                <Tagline 
                  variant={taglineVariant}
                  style={taglineStyle}
                >
                  {tagline}
                </Tagline>
                <h1 id="page-heading" className="heading-xl text-foreground" style={headlineStyle}>
                  {heading}
                </h1>
                <p
                  className="text-muted-foreground text-base lg:text-lg"
                  style={descriptionStyle}
                  aria-description="page description"
                >
                  {description}
                </p>
              </div>
            </div>
          </div>          
        </div>
      </section>

    </div>
  );
}

export type { HeaderSectionProps };