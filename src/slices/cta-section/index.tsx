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
  showArrow?: boolean;
  layout?: "vertical" | "horizontal" | "with-image" | "with-form";
  imageSrc?: string;
  imageAlt?: string;
  emailPlaceholder?: string;
  formButtonText?: string;
  showEmailForm?: boolean;
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
  showArrow = true,
  layout = "vertical",
  imageSrc,
  imageAlt = "Luxury interior design showcase",
  emailPlaceholder = "Email",
  formButtonText = "Start for free",
  showEmailForm = true,
  style,
  ...props
}: CtaSectionProps) {
  const renderImageOrPlaceholder = () => {
    if (imageSrc) {
      return (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover rounded-xl"
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

  if (layout === "horizontal") {
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
        <div className="container-padding-x container mx-auto">
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
                variant="outline"
                className="text-sm bg-transparent hover:bg-white/10"
                style={{ 
                  color: learnMoreColor, 
                  borderColor: learnMoreColor,
                  '--hover-bg': `${learnMoreColor}1A` // 10% opacity
                }}
              >
                Learn more
              </Button>
              <Button
                variant={buttonVariant}
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
                variant="outline"
                className="text-sm bg-transparent hover:bg-white/10"
                style={{ 
                  color: learnMoreColor, 
                  borderColor: learnMoreColor,
                  '--hover-bg': `${learnMoreColor}1A` // 10% opacity
                }}
              >
                Learn more
              </Button>
            
            {/* Primary Button */}
            <Button
              variant={buttonVariant}
              aria-label={`${buttonText} with our service`}
              className="w-auto"
            >
              {buttonText}
              {showArrow && <ArrowRight />}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (layout === "with-image") {
    return (
      <section
        className={cn("md:bg-background", className)}
        style={style}
        aria-labelledby="cta-heading"
        {...props}
      >
        <div className="md:container-padding-x md:container md:mx-auto md:py-16">
          <div 
            className="md:rounded-xl p-8 md:p-16"
            style={{ backgroundColor }}
          >
            <div className="mx-auto flex max-w-xl flex-col items-center gap-8 md:max-w-full lg:flex-row lg:gap-16">
              {/* Left Column - Image */}
              <div className="w-full flex-1">
                <AspectRatio ratio={1}>
                  <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center">
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
    );
  }

  if (layout === "with-form") {
    return (
      <section
        className={cn("bg-background section-padding-y", className)}
        style={style}
        aria-labelledby="cta-heading"
        {...props}
      >
        <div className="container-padding-x container mx-auto">
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
                  className="flex w-full flex-col gap-3 md:max-w-sm md:flex-row"
                  onSubmit={(e) => e.preventDefault()}
                  aria-label="Email signup form"
                >
                  <Input
                    placeholder={emailPlaceholder}
                    type="email"
                    required
                    aria-required="true"
                    aria-label="Enter your email"
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    variant={buttonVariant}
                    aria-label={`${formButtonText} with our service`}
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
                <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center">
                  {renderImageOrPlaceholder()}
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
  );
}

export { CtaSection };
export type { CtaSectionProps };