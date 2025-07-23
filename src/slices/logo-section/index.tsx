"use client";

import { Tagline } from "@/components/ui/tagline";
import { cn } from "@/lib/utils";

export interface LogoSectionProps {
  variant?: 'default';
  tagline?: string;
  heading?: string;
  description?: string;
  className?: string;
  logo1?: string;
  logo2?: string;
  logo3?: string;
  logo4?: string;
  logo5?: string;
  logo6?: string;
}

export function LogoSection({
  variant = 'default',
  tagline = 'Logo section',
  heading = 'Showcase that builds trust',
  description = 'Add logos of notable companies using your product. Include 4-6 recognizable brands in grayscale to maintain visual consistency. Ensure logos are properly scaled and aligned with equal spacing.',
  className,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
}: LogoSectionProps = {}) {

  const logoImages = [logo1, logo2, logo3, logo4, logo5, logo6];

  const renderLogoOrPlaceholder = (index: number) => {
    if (logoImages[index]) {
      return (
        <img
          src={logoImages[index]}
          alt={`Company logo ${index + 1}`}
          className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      );
    }
    
    return (
      <div className="h-12 w-24 bg-muted-foreground/20 rounded-md flex items-center justify-center">
        <div className="text-muted-foreground text-xs text-center">
          <svg
            className="w-6 h-6 mx-auto mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs">Logo {index + 1}</span>
        </div>
      </div>
    );
  };

  const renderVariant = () => {
    switch (variant) {
      default: // 'default'
        return (
          <div className="container-padding-x container mx-auto">
            <div className="flex flex-col items-center gap-12 md:gap-16">
              <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
                <Tagline>{tagline}</Tagline>
                <h2 className="heading-lg text-foreground">
                  {heading}
                </h2>
                <p className="text-muted-foreground">
                  {description}
                </p>
              </div>

              <div className="flex  flex-wrap justify-center gap-6 md:gap-8">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {renderLogoOrPlaceholder(index)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <section
      className={cn("bg-background section-padding-y", className)}
    >
      {renderVariant()}
    </section>
  );
}

export default LogoSection;