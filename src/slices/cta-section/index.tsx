"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
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
  layout?: "vertical" | "horizontal";
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
  style,
  ...props
}: CtaSectionProps) {
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
          <div className="flex items-center justify-between gap-8 md:gap-12">
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