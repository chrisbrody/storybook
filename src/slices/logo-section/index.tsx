"use client";

import { Tagline } from "@/components/ui/tagline";
import { cn } from "@/lib/utils";

export interface LogoSectionProps {
  variant?: 'default' | 'ThreeColumn' | 'TwoColumn' | 'TwoColumnBlack' | 'ThreeColumnMinimal' | 'ThreeColumnMinimalBlack' | 'slider';
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
      <div className="h-16 w-full bg-muted-foreground/20 flex items-center justify-center">
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
      case 'ThreeColumn':
        return (
          <div className="container-padding-x container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="flex flex-col gap-6">
                <Tagline>{tagline}</Tagline>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {heading}
                </h2>
                <p className="text-muted-foreground text-sm lg:text-base">
                  {description}
                </p>
              </div>

              {/* Center Logos Grid */}
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="flex items-center justify-center">
                      {renderLogoOrPlaceholder(index)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'TwoColumn':
        return (
          <div className="container-padding-x container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="flex flex-col gap-6">
                <Tagline>{tagline}</Tagline>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {heading}
                </h2>
                <p className="text-muted-foreground text-sm lg:text-base">
                  {description}
                </p>
              </div>

              {/* Center Logos Grid */}
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="flex items-center justify-center">
                      {renderLogoOrPlaceholder(index)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {renderLogoOrPlaceholder(index)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'TwoColumnBlack':
        return (
          <div className="container-padding-x container mx-auto max-w-7xl bg-black text-white py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="flex flex-col gap-6">
                <Tagline className="text-white">{tagline}</Tagline>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-white">
                  {heading}
                </h2>
                <p className="text-sm lg:text-white">
                  {description}
                </p>
              </div>

              {/* Center Logos Grid */}
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="flex items-center justify-center">
                      {renderLogoOrPlaceholder(index)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {renderLogoOrPlaceholder(index)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
  
      case 'ThreeColumnMinimal':
        return (
          <div className="w-[75vw]">
            <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start w-full">
              {/* Center Logos Grid */}
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="flex items-center justify-center w-full">
                      {renderLogoOrPlaceholder(index)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        );
        
      case 'ThreeColumnMinimalBlack':
        return (
          <div className="w-[75vw]">
            <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start w-full">
              {/* Center Logos Grid */}
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full bg-black p-20">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="flex items-center justify-center w-full">
                      {renderLogoOrPlaceholder(index)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        );

      case 'slider':
        const validLogos = logoImages.filter(logo => logo);
        const defaultLogos = [
          'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg',
          'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
          'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
          'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
          'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
          'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg'
        ];
        const slidingLogos = validLogos.length > 0 ? [...validLogos, ...validLogos] : [...defaultLogos, ...defaultLogos];
        
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

              <div className="w-full overflow-hidden">
                <div className="flex animate-slide gap-8 md:gap-16 hover:paused">
                  {slidingLogos.map((logo, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 flex items-center justify-center w-32 md:w-40 h-16 md:h-20"
                    >
                      {logo ? (
                        <img
                          src={logo}
                          alt={`Company logo ${(index % 6) + 1}`}
                          className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      ) : (
                        <div className="h-12 md:h-16 w-full bg-muted-foreground/20 flex items-center justify-center rounded">
                          <div className="text-muted-foreground text-xs text-center">
                            <svg
                              className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1"
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
                            <span className="text-xs">Logo {(index % 6) + 1}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
          

      default: // 'default'
        return (
          <>
            <div className="container-padding-x container mx-auto w-full">
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
              </div>
            </div>
            
            <div className="w-[75vw]">
              <div className="flex flex-col items-center gap-12 md:gap-16 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full max-w-6xl">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="flex items-center justify-center basis-[calc(16.667%-1rem)]">
                      {renderLogoOrPlaceholder(index)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>          
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