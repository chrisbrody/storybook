"use client";

import { Tagline } from "@/components/ui/tagline";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface HeaderBreadcrumbItem {
  label: string;
  href?: string;
}

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
  /** Layout variant */
  layout?: "default" | "left-aligned" | "left-breadcrumbs" | "hero" | "hero-left-aligned" | "hero-breadcrumbs" | "minimal" | "split";
  /** Breadcrumb items for breadcrumb layouts */
  breadcrumbs?: HeaderBreadcrumbItem[];
  /** Custom CSS classes */
  className?: string;
  /** Background color of the section */
  backgroundColor?: string;
}

export function HeaderSection({
  tagline = "Interior Design Studio",
  taglineFont = "Inter",
  taglineColor,
  heading = "Transform Your Space with Expert Interior Design",
  headlineFont = "Inter",
  headlineColor,
  description = "Experience luxury interior design that reflects your unique style and enhances your daily life. Our award-winning team creates stunning, functional spaces that exceed expectations.",
  descriptionFont = "Inter",
  descriptionColor,
  taglineVariant = "ghost",
  alignment = "center",
  background = "default",
  layout = "default",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Header Sections", href: "/header-sections" },
    { label: "Header Section Five" }
  ],
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

  const renderBreadcrumbs = (isDarkBackground = false) => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;

    return (
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((item, index) => (
            <BreadcrumbItem key={index}>
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage 
                  className={isDarkBackground ? "text-white" : ""}
                >
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink 
                    href={item.href || "#"}
                    className={isDarkBackground ? "text-white" : "text-muted-foreground"}
                  >
                    {item.label}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator className={isDarkBackground ? "text-white" : "text-muted-foreground"} />
                </>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    );
  };

  // Hero layout - Large centered text with dramatic styling
  if (layout === "hero") {
    return (
      <div className="w-screen">
        <section
          className={`${backgroundClasses[background]} section-padding-y ${className}`}
          style={sectionStyle}
          aria-labelledby="page-heading"
        >
          <div className="container-padding-x container mx-auto">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <Tagline 
                variant={taglineVariant}
                style={taglineStyle}
              >
                {tagline}
              </Tagline>
              <h1 
                id="page-heading" 
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground" 
                style={headlineStyle}
              >
                {heading}
              </h1>
              <p
                className="text-muted-foreground text-lg sm:text-xl max-w-2xl"
                style={descriptionStyle}
                aria-description="page description"
              >
                {description}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Left-aligned layout - Content aligned to the left
  if (layout === "hero-left-aligned") {
    return (
      <div className="w-screen">
        <section
          className={`${backgroundClasses[background]} section-padding-y ${className}`}
          style={sectionStyle}
          aria-labelledby="page-heading"
        >
          <div className="container-padding-x container mx-auto">
            <div className="flex max-w-4xl flex-col gap-6 text-left">
              <Tagline 
                variant={taglineVariant}
                style={taglineStyle}
              >
                {tagline}
              </Tagline>
              <h1 
                id="page-heading" 
                className="heading-xl text-foreground" 
                style={headlineStyle}
              >
                {heading}
              </h1>
              <p
                className="text-muted-foreground text-base lg:text-lg max-w-2xl"
                style={descriptionStyle}
                aria-description="page description"
              >
                {description}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Hero layout with breadcrumbs - Left-aligned hero text with breadcrumb navigation
  if (layout === "hero-breadcrumbs") {
    const isDarkBackground = backgroundColor === '#1a1a1a' || background === 'accent';
    
    return (
      <div className="w-screen">
        <section
          className={`${backgroundClasses[background]} section-padding-y ${className}`}
          style={sectionStyle}
          aria-labelledby="page-heading"
        >
          <div className="container-padding-x container mx-auto">
            <div className="flex max-w-4xl flex-col gap-16 text-left">
              {renderBreadcrumbs(isDarkBackground)}
              <div className="flex flex-col gap-6">
                <Tagline 
                  variant={taglineVariant}
                  style={taglineStyle}
                >
                  {tagline}
                </Tagline>
                <h1 
                  id="page-heading" 
                  className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground" 
                  style={headlineStyle}
                >
                  {heading}
                </h1>
                <p
                  className="text-muted-foreground text-lg sm:text-xl max-w-2xl"
                  style={descriptionStyle}
                  aria-description="page description"
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Minimal layout - Clean and simple
  if (layout === "minimal") {
    return (
      <div className="w-screen">
        <section
          className={`${backgroundClasses[background]} py-8 md:py-12 ${className}`}
          style={sectionStyle}
          aria-labelledby="page-heading"
        >
          <div className="container-padding-x container mx-auto">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
              <h1 
                id="page-heading" 
                className="heading-lg text-foreground" 
                style={headlineStyle}
              >
                {heading}
              </h1>
              <p
                className="text-muted-foreground text-base"
                style={descriptionStyle}
                aria-description="page description"
              >
                {description}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Left-aligned layout - Content aligned to the left
  if (layout === "left-aligned") {
    return (
      <div className="w-screen">
        <section
          className={`${backgroundClasses[background]} section-padding-y ${className}`}
          style={sectionStyle}
          aria-labelledby="page-heading"
        >
          <div className="container-padding-x container mx-auto">
            <div className="flex max-w-4xl flex-col gap-6 text-left">
              <Tagline 
                variant={taglineVariant}
                style={taglineStyle}
              >
                {tagline}
              </Tagline>
              <h1 
                id="page-heading" 
                className="heading-xl text-foreground" 
                style={headlineStyle}
              >
                {heading}
              </h1>
              <p
                className="text-muted-foreground text-base lg:text-lg max-w-2xl"
                style={descriptionStyle}
                aria-description="page description"
              >
                {description}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Left-aligned layout with breadcrumbs
  if (layout === "left-breadcrumbs") {
    return (
      <div className="w-screen">
        <section
          className={`${backgroundClasses[background]} section-padding-y ${className}`}
          style={sectionStyle}
          aria-labelledby="page-heading"
        >
          <div className="container-padding-x container mx-auto">
            <div className="flex max-w-4xl flex-col gap-16 text-left">
              {renderBreadcrumbs()}
              <div className="flex flex-col gap-6">
                <Tagline 
                  variant={taglineVariant}
                  style={taglineStyle}
                >
                  {tagline}
                </Tagline>
                <h1 
                  id="page-heading" 
                  className="heading-xl text-foreground" 
                  style={headlineStyle}
                >
                  {heading}
                </h1>
                <p
                  className="text-muted-foreground text-base lg:text-lg max-w-2xl"
                  style={descriptionStyle}
                  aria-description="page description"
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Split layout - Two column layout
  if (layout === "split") {
    return (
      <div className="w-screen">
        <section
          className={`${backgroundClasses[background]} section-padding-y ${className}`}
          style={sectionStyle}
          aria-labelledby="page-heading"
        >
          <div className="container-padding-x container mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <Tagline 
                  variant={taglineVariant}
                  style={taglineStyle}
                >
                  {tagline}
                </Tagline>
                <h1 
                  id="page-heading" 
                  className="heading-xl text-foreground" 
                  style={headlineStyle}
                >
                  {heading}
                </h1>
              </div>
              <div>
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
        </section>
      </div>
    );
  }

  // Default layout - Original implementation
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