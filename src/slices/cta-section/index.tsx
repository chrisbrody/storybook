"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Tagline } from "@/components/ui/tagline";
import { cn } from "@/lib/utils";

interface CtaSectionProps extends React.HTMLAttributes<HTMLElement> {
  backgroundColor?: string;
  textColor?: string;
  learnMoreColor?: string;
  tagline?: string;
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonVariant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  primaryButtonVariant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  secondaryButtonVariant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  showArrow?: boolean;
  layout?: "vertical" | "horizontal" | "horizontal-with-paragraph" | "with-image" | "with-form" | "split-screen" | "simple";
  imageSrc?: string;
  imageAlt?: string;
  emailPlaceholder?: string;
  formButtonText?: string;
  showEmailForm?: boolean;
  paragraph?: string;
}

function CtaSection({
  className,
  backgroundColor = "#000000", // Black background matching the image
  textColor = "#ffffff", // White text matching the image
  learnMoreColor = "#ffffff", // White for Learn more button
  tagline = "Interior Design Studio",
  headline = "Transform Your Space with Expert Interior Design",
  description = "Experience luxury interior design that reflects your unique style and enhances your daily life. Our award-winning team creates stunning, functional spaces that exceed expectations.",
  buttonText = "Schedule Consultation",
  buttonVariant = "default",
  primaryButtonVariant = "secondary",
  secondaryButtonVariant = "default",
  showArrow = true,
  layout = "vertical",
  imageSrc,
  imageAlt = "Luxury interior design showcase",
  emailPlaceholder = "Enter your email",
  formButtonText = "Schedule Consultation",
  showEmailForm = true,
  paragraph = "Add one or two compelling sentences that reinforce your main value proposition and overcome final objections.",
  style,
  ...props
}: CtaSectionProps) {
  const renderImageOrPlaceholder = (additionalClasses = "") => {
    if (imageSrc) {
      return (
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`h-full w-full object-cover ${additionalClasses}`}
        />
      );
    }
    
    return (
      <div className="text-muted-foreground text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-sm">Image placeholder</p>
      </div>
    );
  };

  if (layout === "horizontal-with-paragraph") {
    return (
      <div className="w-screen">

        <section
          className={cn("bg-background", className)}
          style={style}
          aria-labelledby="cta-heading"
          {...props}
        >
          <div className="md:container md:mx-auto md:pb-16">
            <div 
              className="bg-primary px-6 py-16 sm:rounded-xl md:p-16"
              style={{ backgroundColor }}
            >
              <div className="flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
                <div className="section-title-gap-sm flex max-w-xl flex-col">
                  <h2
                    id="cta-heading"
                    className="heading-sm text-primary-foreground"
                    style={{ color: textColor }}
                  >
                    {headline}
                  </h2>
                  <p 
                    className="text-primary-foreground/80 pt-5"
                    style={{ color: `${textColor}CC` }}
                  >
                    {paragraph}
                  </p>
                </div>
                <div className="align-right flex flex-col gap-3 md:flex-row">
                  <Button
                    variant={primaryButtonVariant}
                    aria-label={`${buttonText} with our service`}
                  >
                    {buttonText}
                    {showArrow && <ArrowRight />}
                  </Button>
                  <Button
                    variant={secondaryButtonVariant}
                    aria-label="Learn more about our service"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      
    );
  }

  if (layout === "horizontal") {
    return (
      <div className="w-screen"> 
        <section
          className={cn("section-padding-y md:px-8", className)}
          style={{
            backgroundColor,
            ...style,
          }}
          aria-labelledby="cta-heading"
          {...props}
        >
          <div className="container mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between gap-8 md:gap-12">
              {/* Left Content */}
              <div className="flex flex-col gap-4 max-w-2xl">
                {/* Main Heading */}
                <h2 
                  id="cta-heading" 
                  className="heading-lg"
                  style={{ color: textColor }}
                >
                  {headline}
                </h2>
              </div>

              {/* Right Buttons */}
              <div className="flex items-center gap-4 shrink-0">
                <Button
                  variant={secondaryButtonVariant}
                  className="text-sm"
                >
                  Learn more
                </Button>
                <Button
                  variant={primaryButtonVariant}
                  aria-label={`${buttonText} with our service`}
                >
                  {buttonText}
                  {showArrow && <ArrowRight />}
                </Button>
              </div>
            </div>

            {/* Mobile Layout - Stack vertically centered like the image */}
            <div className="md:hidden flex flex-col items-center text-center gap-6">
              {/* Main Heading */}
              <h2 
                className="heading-lg max-w-sm"
                style={{ color: textColor }}
              >
                {headline}
              </h2>

              {/* Learn More Link */}
              <Button
                  variant={secondaryButtonVariant}
                  className="text-sm"
                >
                  Learn more
                </Button>
              
              {/* Primary Button */}
              <Button
                variant={primaryButtonVariant}
                aria-label={`${buttonText} with our service`}
                className="w-auto"
              >
                {buttonText}
                {showArrow && <ArrowRight />}
              </Button>
            </div>
          </div>
        </section>
      </div>
      
    );
  }

  if (layout === "with-image") {
    return (
      <div className="w-screen">

        <section
          className={cn("md:bg-background", className)}
          style={style}
          aria-labelledby="cta-heading"
          {...props}
        >
          <div className="md:container md:mx-auto md:pb-16">
            <div 
              className="md:rounded-xl p-8 md:p-16"
              style={{ backgroundColor }}
            >
              <div className="mx-auto flex max-w-xl flex-col items-center gap-8 md:max-w-full lg:flex-row lg:gap-16">
                {/* Left Column - Image */}
                <div className="w-full flex-1 max-w-[512px]">
                  <AspectRatio ratio={4/3}>
                    <div className="h-full w-full bg-muted flex items-center justify-center">
                      {renderImageOrPlaceholder()}
                    </div>
                  </AspectRatio>
                </div>
                {/* Right Column - Content */}
                <div className="flex flex-1 flex-col items-center gap-8 md:gap-10 lg:items-start">
                  {/* Section Title */}
                  <div className="section-title-gap-lg mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Tagline */}
                    <Tagline 
                      className="text-sm font-medium"
                      style={{ color: `${textColor}CC` }}
                    >
                      {tagline}
                    </Tagline>
                    {/* Main Heading */}
                    <h2
                      id="cta-heading"
                      className="heading-lg"
                      style={{ color: textColor }}
                    >
                      {headline}
                    </h2>
                    {/* Description */}
                    <p 
                      className="text-base"
                      style={{ color: `${textColor}CC` }}
                    >
                      {description}
                    </p>
                  </div>
                  {/* CTA Button */}
                  <Button
                    variant={buttonVariant}
                    aria-label={`${buttonText} with our service`}
                  >
                    {buttonText}
                    {showArrow && <ArrowRight />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }

  if (layout === "simple") {
    return (
      <div className="w-screen">

        <section
          className={cn("bg-background", className)}
          style={style}
          aria-labelledby="cta-heading"
          {...props}
        >
          <div className="md:container md:mx-auto">
            <div 
              className="bg-primary px-6 py-16 sm:rounded-xl md:p-16"
              style={{ backgroundColor }}
            >
              <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-center">
                {/* Section Header */}
                <div className="section-title-gap-lg flex flex-col items-center text-center">
                  {/* Category Tag */}
                  <Tagline 
                    className="text-primary-foreground/80"
                    style={{ color: `${textColor}CC` }}
                  >
                    {tagline}
                  </Tagline>
                  {/* Main Title */}
                  <h2
                    id="cta-heading"
                    className="text-primary-foreground heading-lg"
                    style={{ color: textColor }}
                  >
                    {headline}
                  </h2>
                </div>
                {/* CTA Button */}
                <Button
                  variant={buttonVariant}
                  aria-label={`${buttonText} with our service`}
                >
                  {buttonText}
                  {showArrow && <ArrowRight />}
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }

  if (layout === "with-form") {
    return (
      <section
        className={cn("section-padding-y", className)}
        style={{
          backgroundColor,
          ...style,
        }}
        aria-labelledby="cta-heading"
        {...props}
      >
        <div className="container mx-auto container-padding-x">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex flex-1 flex-col gap-6 lg:gap-8">
              {/* Section Header */}
              <div className="section-title-gap-lg flex flex-col">
                {/* Tagline */}
                <Tagline 
                  className="text-sm font-medium"
                  style={{ color: `${textColor}CC` }}
                >
                  {tagline}
                </Tagline>
                {/* Main Heading */}
                <h2 
                  id="cta-heading" 
                  className="heading-lg"
                  style={{ color: textColor }}
                >
                  {headline}
                </h2>
                {/* Description */}
                <p 
                  className="text-base"
                  style={{ color: `${textColor}CC` }}
                >
                  {description}
                </p>
              </div>
              
              {/* Email Form or Button */}
              {showEmailForm ? (
                <form
                  className="flex w-full flex-col gap-3 md:max-w-md md:flex-row"
                  onSubmit={(e) => e.preventDefault()}
                  aria-label="Email signup form"
                >
                  <Input
                    placeholder={emailPlaceholder}
                    type="email"
                    required
                    aria-required="true"
                    aria-label="Enter your email"
                    className="flex-1 min-w-0 !h-[40px] md:py-2 py-2.5 md:min-w-[350px]"
                  />
                  <Button 
                    type="submit" 
                    variant={buttonVariant}
                    aria-label={`${formButtonText} with our service`}
                    className="h-10 whitespace-nowrap"
                  >
                    {formButtonText}
                    {showArrow && <ArrowRight />}
                  </Button>
                </form>
              ) : (
                <Button
                  variant={buttonVariant}
                  aria-label={`${buttonText} with our service`}
                  className="w-fit"
                >
                  {buttonText}
                  {showArrow && <ArrowRight />}
                </Button>
              )}
            </div>
            
            {/* Right Column - Image */}
            <div className="w-full flex-1">
              <AspectRatio ratio={4/3}>
                <div className="h-full w-full bg-muted flex items-center justify-center">
                  {renderImageOrPlaceholder()}
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (layout === "split-screen") {
    return (
      <div className="w-screen">

        <section
          className={cn("md:bg-background md:section-padding-y", className)}
          style={{ backgroundColor: "#f5f5f5", ...style }}
          aria-labelledby="cta-heading"
          {...props}
        >
          <div className="container mx-auto">
            <div 
              className="w-full overflow-hidden pt-16 md:rounded-xl lg:pl-16"
              style={{ backgroundColor }}
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 lg:items-end">
                {/* Left Column - Content */}
                <div className="mx-auto flex max-w-xl flex-1 flex-col items-center justify-between gap-4 px-6 text-center lg:max-w-full lg:items-start lg:gap-8 lg:px-0 lg:pb-16 lg:text-left">
                  {/* Section Header */}
                  <div className="section-title-gap-lg flex flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Tagline */}
                    <Tagline 
                      className="text-sm font-medium"
                      style={{ color: `${textColor}CC` }}
                    >
                      {tagline}
                    </Tagline>
                    {/* Main Heading */}
                    <h2
                      id="cta-heading"
                      className="heading-lg"
                      style={{ color: textColor }}
                    >
                      {headline}
                    </h2>
                  </div>
                  {/* CTA Content */}
                  <div className="flex flex-col items-center gap-6 lg:items-start">
                    {/* Description */}
                    <p 
                      className="text-base"
                      style={{ color: `${textColor}CC` }}
                    >
                      {description}
                    </p>
                    {/* CTA Button */}
                    <Button
                      variant={buttonVariant}
                      aria-label={`${buttonText} with our service`}
                    >
                      {buttonText}
                      {showArrow && <ArrowRight />}
                    </Button>
                  </div>
                </div>
                {/* Right Column - Image */}
                <div className="w-full flex-1 pl-6 lg:pl-0">
                  <AspectRatio ratio={4/3}>
                    <div className="h-full w-full rounded-tl-lg bg-muted flex items-center justify-center">
                      {renderImageOrPlaceholder("rounded-tl-lg")}
                    </div>
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }

  return (
    <div className="w-screen">

      <section
        className={cn("section-padding-y", className)}
        style={{
          backgroundColor,
          ...style,
        }}
        aria-labelledby="cta-heading"
        {...props}
      >
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-8 md:gap-10">
            {/* Section Title */}
            <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
              {/* Tagline */}
              <Tagline 
                className="text-sm font-medium"
                style={{ color: `${textColor}CC` }} // 80% opacity
              >
                {tagline}
              </Tagline>
              {/* Main Heading */}
              <h2 
                id="cta-heading" 
                className="heading-lg"
                style={{ color: textColor }}
              >
                {headline}
              </h2>
              {/* Description */}
              <p 
                className="text-base"
                style={{ color: `${textColor}CC` }} // 80% opacity
              >
                {description}
              </p>
            </div>

            {/* CTA Button */}
            <Button
              variant={buttonVariant}
              aria-label={`${buttonText} with our service`}
            >
              {buttonText}
              {showArrow && <ArrowRight />}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

export { CtaSection };
export type { CtaSectionProps };