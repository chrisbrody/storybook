"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Play } from "lucide-react";
import { Tagline } from "@/components/ui/tagline";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
  variant?: 'default' | 'checklist' | 'centered' | 'video' | 'minimal';
  tagline?: string;
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  secondaryButtonText?: string;
  secondaryButtonVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  checklistItems?: string[];
  socialProofText?: string;
  className?: string;
  fontFamily?: 'Inter' | 'Roboto' | 'Open Sans' | 'Playfair Display' | 'Source Code Pro';
  heroImage?: string;
}

export function HeroSection({
  variant = 'default',
  tagline = 'Interior Design Studio',
  heading = 'Transform Your Space with Expert Interior Design',
  description = 'Create stunning, functional interiors that reflect your unique style and enhance your daily living. Our award-winning team specializes in luxury residential and commercial design projects.',
  primaryButtonText = 'Schedule Consultation',
  primaryButtonVariant = 'default',
  secondaryButtonText = 'View Portfolio',
  secondaryButtonVariant = 'outline',
  checklistItems = ['Award-winning design expertise', 'Full-service project management', 'Premium material selection'],
  socialProofText = 'Trusted by 500+ discerning homeowners',
  className,
  fontFamily = 'Inter',
  heroImage = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop',
}: HeroSectionProps = {}) {
  const fontFamilyMap = {
    'Inter': '"Inter", sans-serif',
    'Roboto': '"Roboto", sans-serif', 
    'Open Sans': '"Open Sans", sans-serif',
    'Playfair Display': '"Playfair Display", serif',
    'Source Code Pro': '"Source Code Pro", monospace',
  };

  const fontStyle = { fontFamily: fontFamilyMap[fontFamily] };

  const renderImageOrPlaceholder = () => {
    if (heroImage) {
      return (
        <img
          src={heroImage}
          alt="Luxury interior design showcase - modern living space"
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

  const renderVariant = () => {
    switch (variant) {
      case 'checklist':
        return (
          <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16 max-w-full">
            {/* Left Column */}
            <div className="flex flex-1 flex-col gap-6 lg:gap-8 w-full min-w-0">
              <div className="section-title-gap-xl flex flex-col">
                <Tagline>{tagline}</Tagline>
                <h1 id="hero-heading" className="heading-xl" style={fontStyle}>{heading}</h1>
                <p className="text-muted-foreground text-base lg:text-lg" style={fontStyle}>{description}</p>
              </div>
              
              {/* Checklist */}
              <div className="flex flex-col gap-3">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-background" />
                    </div>
                    <span className="text-sm" style={fontStyle}>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant={primaryButtonVariant}>{primaryButtonText}</Button>
                <Button variant={secondaryButtonVariant}>
                  {secondaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full flex-1 min-w-0">
              <AspectRatio ratio={1 / 1}>
                <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center">
                  {renderImageOrPlaceholder()}
                </div>
              </AspectRatio>
            </div>
          </div>
        );
        
      case 'centered':
        return (
          <div className="container-padding-x container mx-auto max-w-4xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left Content */}
              <div className="flex-1 text-center">
                <Tagline>{tagline}</Tagline>
                <h1 id="hero-heading" className="heading-xl mt-4 mb-4" style={fontStyle}>{heading}</h1>
                <p className="text-muted-foreground text-base lg:text-lg mb-8" style={fontStyle}>{description}</p>
                
                <div className="flex flex-col gap-4 sm:flex-row justify-center mb-8">
                  <Button variant={primaryButtonVariant}>{primaryButtonText}</Button>
                  <Button variant={secondaryButtonVariant}>
                    {secondaryButtonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                {/* Social Proof */}
                <div className="flex flex-col items-center gap-3">
                  {/* Avatar Group */}
                  <div className="flex items-center gap-space-x-2">
                    <div className="flex" style={{ position: 'relative', left: '12px' }}>
                      {[1, 2, 3, 4].map((i) => {
                        let extraStyles = {};
                        if (i === 2) {
                          extraStyles = { position: 'relative', left: '-12px' };
                        } else if (i === 3) {
                          extraStyles = { position: 'relative', left: '-24px' };
                        } else if (i === 4) {
                          extraStyles = { position: 'relative', left: '-36px' };
                        }

                        return (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-background flex items-center justify-center text-xs font-semibold text-white"
                            style={extraStyles} // Apply the conditionally determined styles here
                          >
                            {String.fromCharCode(64 + i)}
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex text-yellow-400" style={{ position: 'relative', left: '-12px' }}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  {/* Rating and Text */}
                  <div className="flex items-center gap-2">                    
                    <span className="text-sm text-muted-foreground" style={fontStyle}>{socialProofText}</span>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        );
        
      case 'video':
        return (
          <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16 max-w-full">
            {/* Left Column */}
            <div className="flex flex-1 flex-col gap-6 lg:gap-8 w-full min-w-0">
              <div className="section-title-gap-xl flex flex-col">
                <Tagline>{tagline}</Tagline>
                <h1 id="hero-heading" className="heading-xl" style={fontStyle}>{heading}</h1>
                <p className="text-muted-foreground text-base lg:text-lg" style={fontStyle}>{description}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant={primaryButtonVariant}>{primaryButtonText}</Button>
                <Button variant="ghost" className="p-0 h-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                      <Play className="w-4 h-4 text-background ml-0.5" />
                    </div>
                    <span>{secondaryButtonText}</span>
                  </div>
                </Button>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full flex-1 min-w-0">
              <AspectRatio ratio={16 / 10}>
                <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center relative">
                  {heroImage ? (
                    <>
                      <img
                        src={heroImage}
                        alt="Interior design process video - luxury home transformation"
                        className="h-full w-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center">
                      <Play className="w-8 h-8 text-foreground ml-1" />
                    </div>
                  )}
                </div>
              </AspectRatio>
            </div>
          </div>
        );
        
      case 'minimal':
        return (
          <div className="container-padding-x container mx-auto max-w-full text-center">
            <div className="mb-12 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-1/2 sm:pr-3">
                <h1 id="hero-heading" className="heading-xl mb-6" style={fontStyle}>{heading}</h1>
              </div>
              <div className="w-full sm:w-1/2 sm:pl-3 text-left">
                <p className="text-muted-foreground text-lg mb-8" style={fontStyle}>{description}</p>
                
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button variant={primaryButtonVariant}>{primaryButtonText}</Button>
                  <Button variant={secondaryButtonVariant}>
                    {secondaryButtonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>              
            </div>
            
            <div className="max-w-3xl mx-auto">
              <AspectRatio ratio={16 / 10}>
                <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center">
                  {renderImageOrPlaceholder()}
                </div>
              </AspectRatio>
            </div>
          </div>
        );
        
      default: // 'default'
        return (
          <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16 max-w-full">
            {/* Left Column */}
            <div className="flex flex-1 flex-col gap-6 lg:gap-8 w-full min-w-0">
              <div className="section-title-gap-xl flex flex-col">
                <Tagline>{tagline}</Tagline>
                <h1 id="hero-heading" className="heading-xl" style={fontStyle}>{heading}</h1>
                <p className="text-muted-foreground text-base lg:text-lg" style={fontStyle}>{description}</p>
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant={primaryButtonVariant}>{primaryButtonText}</Button>
                <Button variant={secondaryButtonVariant}>
                  {secondaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full flex-1 min-w-0">
              <AspectRatio ratio={16 / 10}>
                <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center">
                  {renderImageOrPlaceholder()}
                </div>
              </AspectRatio>
            </div>
          </div>
        );
    }
  };
  
  return (
    <section
      className={cn("bg-background section-padding-y overflow-x-hidden", className)}
      aria-labelledby="hero-heading"
    >
      {renderVariant()}
    </section>
  );
}

export default HeroSection;