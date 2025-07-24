"use client";

import * as React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SliderSection } from "../slider-section";
import { cn } from "@/lib/utils";

export interface RichTextSectionProps {
  variant?: 'default' | 'with-carousel' | 'with-sidebar';
  date?: string;
  category?: string;
  title?: string;
  description?: string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  featuredImage?: string;
  inlineImage1?: string;
  inlineImage2?: string;
  carouselImages?: {
    src: string | File;
    alt: string;
  }[];
  carouselImage1?: string;
  carouselImage2?: string;
  carouselImage3?: string;
  carouselImage4?: string;
  carouselImage5?: string;
  carouselImage6?: string;
  beforeImage?: string;
  afterImage?: string;
  content?: {
    type: 'paragraph' | 'heading' | 'blockquote' | 'list' | 'image' | 'slider';
    level?: 2 | 3;
    text?: string;
    items?: string[];
    src?: string;
    alt?: string;
    id?: string;
  }[];
  className?: string;
  fontFamily?: 'Inter' | 'Roboto' | 'Open Sans' | 'Playfair Display' | 'Source Code Pro';
}

export function RichTextSection({
  variant = 'default',
  date = 'Nov 11, 2024',
  category = 'Projects',
  title = 'Contemporary Kitchen Remodel - Minnetonka',
  description = 'A stunning transformation of a traditional kitchen into a modern, functional space that perfectly balances style and practicality for everyday living.',
  authorName = 'Eminent Interior Design',
  authorRole = 'Interior Design Studio',
  authorAvatar = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=face',
  featuredImage = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
  inlineImage1 = 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=500&fit=crop',
  inlineImage2 = 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop',
  carouselImages,
  carouselImage1,
  carouselImage2,
  carouselImage3,
  carouselImage4,
  carouselImage5,
  carouselImage6,
  beforeImage = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  afterImage = 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop',
  content = [
    {
      type: 'paragraph',
      text: 'This contemporary kitchen remodel in Minnetonka represents a complete transformation from a dated, compartmentalized space into an open, light-filled hub of the home. Our design approach focused on creating a seamless flow between cooking, dining, and entertaining areas while maximizing both functionality and aesthetic appeal.'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Design Vision & Goals'
    },
    {
      type: 'paragraph',
      text: 'The homeowners came to us with a clear vision: they wanted a kitchen that would serve as the heart of their home, where family gatherings and dinner parties could unfold naturally. The existing kitchen felt cramped and disconnected from the dining and living areas.'
    },
    {
      type: 'image',
      src: 'inline1',
      alt: 'Before transformation - original cramped kitchen layout'
    },
    {
      type: 'blockquote',
      text: 'We wanted a space that felt both sophisticated and welcoming – somewhere our teenagers would want to hang out and do homework, but elegant enough for entertaining our friends.'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Key Design Elements'
    },
    {
      type: 'paragraph',
      text: 'Our design strategy centered on several core principles that would transform this space:'
    },
    {
      type: 'list',
      items: [
        'Open floor plan connecting kitchen to dining and living areas',
        'High-end appliances integrated seamlessly into custom cabinetry',
        'Large island with seating for casual dining and homework',
        'Premium materials including quartz countertops and hardwood floors',
        'Strategic lighting design for both task and ambient illumination'
      ]
    },
    {
      type: 'paragraph',
      text: 'The result is a sophisticated yet comfortable space that has truly become the heart of the home. Natural light floods the space through enlarged windows, while the neutral color palette with warm wood accents creates an inviting atmosphere that works beautifully for both everyday family life and special occasions.'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Materials & Finishes'
    },
    {
      type: 'paragraph',
      text: 'We selected materials that would stand the test of time while reflecting the homeowners\' refined taste. The white oak cabinetry provides warmth and texture, while the Calacatta marble island serves as a stunning focal point. Brushed brass hardware and fixtures add a touch of luxury without feeling ostentatious.'
    },
    {
      type: 'image',
      src: 'inline2',
      alt: 'Calacatta marble island with white oak cabinetry and brass fixtures'
    },
    {
      type: 'paragraph',
      text: 'The transformation has exceeded our clients\' expectations, creating a space that perfectly balances style, functionality, and livability. This kitchen now serves as the perfect backdrop for everything from quiet morning coffee to lively dinner parties with friends and family.'
    }
  ],
  className,
  fontFamily = 'Inter',
}: RichTextSectionProps = {}) {
  const fontFamilyMap = {
    'Inter': '"Inter", sans-serif',
    'Roboto': '"Roboto", sans-serif', 
    'Open Sans': '"Open Sans", sans-serif',
    'Playfair Display': '"Playfair Display", serif',
    'Source Code Pro': '"Source Code Pro", monospace',
  };

  const fontStyle = { fontFamily: fontFamilyMap[fontFamily] };

  // Default images from carousel component
  const defaultCarouselImages = [
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      alt: "Contemporary Kitchen Remodel - Minnetonka"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
      alt: "Luxury Bathroom Transformation - Wayzata"
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      alt: "Modern Living Space - Edina"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      alt: "Custom Millwork & Built-ins - Plymouth"
    },
    {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
      alt: "Award-Winning Master Suite - Excelsior"
    },
    {
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",
      alt: "Sophisticated Home Office - Orono"
    }
  ];

  // Blend uploaded carousel images with defaults - uploaded images override their slot, others remain default
  const carouselImagesToShow = [
    carouselImage1 || defaultCarouselImages[0].src,
    carouselImage2 || defaultCarouselImages[1].src,
    carouselImage3 || defaultCarouselImages[2].src,
    carouselImage4 || defaultCarouselImages[3].src,
    carouselImage5 || defaultCarouselImages[4].src,
    carouselImage6 || defaultCarouselImages[5].src
  ]
  
  const processedCarouselImages = carouselImagesToShow.map((src, index) => ({
    src,
    alt: defaultCarouselImages[index]?.alt || `Project Image ${index + 1}`
  }))

  const renderContent = () => {
    return content.map((item, index) => {
      const key = `content-${index}`;
      
      switch (item.type) {
        case 'paragraph':
          return (
            <p key={key} className="leading-7 break-words" style={fontStyle}>
              {item.text}
            </p>
          );
        
        case 'heading':
          if (item.level === 2) {
            return (
              <h2
                key={key}
                className="border-b pb-2 text-3xl font-semibold"
                style={fontStyle}
              >
                {item.text}
              </h2>
            );
          } else if (item.level === 3) {
            return (
              <h3
                key={key}
                className="mt-8 text-2xl font-semibold"
                style={fontStyle}
              >
                {item.text}
              </h3>
            );
          }
          break;
          
        case 'blockquote':
          return (
            <blockquote key={key} className="border-l-2 pl-6 italic break-words" style={fontStyle}>
              {item.text}
            </blockquote>
          );
          
        case 'list':
          return (
            <ul
              key={key}
              className="ml-6 list-disc space-y-2"
              style={fontStyle}
            >
              {item.items?.map((listItem, listIndex) => (
                <li key={`${key}-item-${listIndex}`}>{listItem}</li>
              ))}
            </ul>
          );

        case 'image':
          const imageIndex = parseInt(item.src?.replace('inline', '') || '1');
          const imageSrc = imageIndex === 1 ? inlineImage1 : imageIndex === 2 ? inlineImage2 : item.src;
          return (
            <AspectRatio key={key} ratio={16 / 10} className="my-6">
              <img
                src={imageSrc || 'https://ui.shadcn.com/placeholder.svg'}
                alt={item.alt || 'Inline content image'}
                className="h-full w-full rounded-lg object-cover"
              />
            </AspectRatio>
          );

        case 'slider':
          return (
            <div key={key} className="my-8">
              <SliderSection 
                beforeImage={beforeImage}
                afterImage={afterImage}
                projectTitle="Kitchen Transformation - Minnetonka"
                variant="minimal"
                size="full"
              />  
            </div>
          );
          
        default:
          return null;
      }
    });
  };

  if (variant === 'with-carousel') {
    return (
      <section
        className={cn("bg-background py-16 md:py-24 w-full mobile-overflow-x-hidden", className)}
        aria-labelledby="article-title"
      >
        <div className="mx-auto max-w-7xl px-6 w-full min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <div className="flex flex-col gap-8 lg:sticky lg:top-8">
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="flex items-center gap-2 flex-wrap min-w-0">
                  <p className="text-muted-foreground text-sm break-words" style={fontStyle}>{date}</p>
                  <span
                    className="text-muted-foreground text-sm flex-shrink-0"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                  <p className="text-muted-foreground text-sm break-words" style={fontStyle}>{category}</p>
                </div>

                <h1 id="article-title" className="heading-xl break-words hyphens-auto" style={fontStyle}>
                  {title}
                </h1>

                <p className="text-muted-foreground text-lg break-words hyphens-auto" style={fontStyle}>
                  {description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={authorAvatar}
                    alt={authorName}
                  />
                </Avatar>
                <div className="flex flex-col min-w-0">
                  <p className="text-sm font-medium break-words" style={fontStyle}>{authorName}</p>
                  <p className="text-muted-foreground text-sm break-words" style={fontStyle}>
                    {authorRole}
                  </p>
                </div>
              </div>

              {/* Mobile Carousel - appears after avatar on mobile, hidden on desktop */}
              <div className="lg:hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {processedCarouselImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="relative overflow-hidden rounded-xl">
                            <AspectRatio ratio={16 / 10}>
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                  <h3 className="font-semibold text-lg mb-1" style={fontStyle}>
                                    {image.alt}
                                  </h3>
                                  <p className="text-sm text-gray-200" style={fontStyle}>
                                    Eminent Interior Design
                                  </p>
                                </div>
                              </div>
                            </AspectRatio>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>

              <div className="flex flex-col gap-6">
                {renderContent()}
              </div>
            </div>

            {/* Right Column - Desktop Carousel */}
            <div className="hidden lg:block lg:sticky lg:top-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {processedCarouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="relative overflow-hidden rounded-xl">
                          <AspectRatio ratio={16 / 10}>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold text-lg mb-1" style={fontStyle}>
                                  {image.alt}
                                </h3>
                                <p className="text-sm text-gray-200" style={fontStyle}>
                                  Eminent Interior Design
                                </p>
                              </div>
                            </div>
                          </AspectRatio>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'with-sidebar') {
    // Extract headings for sidebar navigation
    const tableOfContents = content.filter(item => item.type === 'heading' && item.id).map(item => ({
      id: item.id!,
      text: item.text || '',
      level: item.level || 2
    }));

    const renderContentWithIds = () => {
      return content.map((item, index) => {
        const key = `content-${index}`;
        
        switch (item.type) {
          case 'paragraph':
            return (
              <p key={key} className="leading-7 break-words text-base" style={fontStyle}>
                {item.text}
              </p>
            );
          
          case 'heading':
            if (item.level === 2) {
              return (
                <h2
                  key={key}
                  id={item.id}
                  className="scroll-mt-20 text-2xl font-semibold tracking-tight"
                  style={fontStyle}
                >
                  {item.text}
                </h2>
              );
            } else if (item.level === 3) {
              return (
                <h3
                  key={key}
                  id={item.id}
                  className="scroll-mt-20 text-xl font-semibold tracking-tight"
                  style={fontStyle}
                >
                  {item.text}
                </h3>
              );
            }
            break;
            
          case 'blockquote':
            return (
              <blockquote key={key} className="border-l-2 pl-6 italic break-words text-muted-foreground" style={fontStyle}>
                {item.text}
              </blockquote>
            );
            
          case 'list':
            return (
              <ul
                key={key}
                className="ml-6 list-disc space-y-2"
                style={fontStyle}
              >
                {item.items?.map((listItem, listIndex) => (
                  <li key={`${key}-item-${listIndex}`}>{listItem}</li>
                ))}
              </ul>
            );

          case 'image':
            const imageIndex = parseInt(item.src?.replace('inline', '') || '1');
            const imageSrc = imageIndex === 1 ? inlineImage1 : imageIndex === 2 ? inlineImage2 : item.src;
            return (
              <AspectRatio key={key} ratio={16 / 10} className="my-6">
                <img
                  src={imageSrc || 'https://ui.shadcn.com/placeholder.svg'}
                  alt={item.alt || 'Inline content image'}
                  className="h-full w-full rounded-lg object-cover"
                />
              </AspectRatio>
            );

          case 'slider':
            return (
              <div key={key} className="my-8">
                <SliderSection 
                  beforeImage={beforeImage}
                  afterImage={afterImage}
                  projectTitle="Kitchen Transformation - Minnetonka"
                  variant="minimal"
                  size="full"
                />  
              </div>
            );
            
          default:
            return null;
        }
      });
    };

    return (
      <section
        className={cn("bg-background py-16 md:py-24 w-full", className)}
        aria-labelledby="article-title"
      >
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content - 3/4 width */}
            <div className="lg:col-span-3">
              <article className="flex flex-col gap-8 w-full">
                {/* Header */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-muted-foreground text-sm" style={fontStyle}>{date}</p>
                      <span className="text-muted-foreground text-sm">·</span>
                      <p className="text-muted-foreground text-sm" style={fontStyle}>{category}</p>
                    </div>

                    <h1 id="article-title" className="text-4xl font-bold tracking-tight" style={fontStyle}>
                      {title}
                    </h1>

                    <p className="text-muted-foreground text-xl leading-relaxed" style={fontStyle}>
                      {description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={authorAvatar} alt={authorName} />
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium" style={fontStyle}>{authorName}</p>
                      <p className="text-muted-foreground text-sm" style={fontStyle}>{authorRole}</p>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <AspectRatio ratio={16 / 10}>
                    <img
                      src={featuredImage}
                      alt="Project featured image"
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </AspectRatio>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-6 prose prose-lg max-w-none">
                  {renderContentWithIds()}
                </div>
              </article>
            </div>

            {/* Sidebar - 1/4 width */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="rounded-lg border bg-card p-6">
                  <h6 className="font-semibold mb-4" style={fontStyle}>On this page</h6>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(item.id);
                          if (element) {
                            element.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }
                        }}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        style={fontStyle}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn("bg-background py-16 md:py-24 w-full mobile-overflow-x-hidden", className)}
      aria-labelledby="article-title"
    >
      <div className="mx-auto max-w-3xl px-6 w-full min-w-0">
        <article className="flex flex-col gap-12 md:gap-16 w-full min-w-0">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 md:gap-5">
              <div className="flex items-center gap-2 flex-wrap min-w-0">
                <p className="text-muted-foreground text-sm break-words" style={fontStyle}>{date}</p>
                <span
                  className="text-muted-foreground text-sm flex-shrink-0"
                  aria-hidden="true"
                >
                  ·
                </span>
                <p className="text-muted-foreground text-sm break-words" style={fontStyle}>{category}</p>
              </div>

              <h1 id="article-title" className="heading-xl break-words hyphens-auto" style={fontStyle}>
                {title}
              </h1>

              <p className="text-muted-foreground text-lg break-words hyphens-auto" style={fontStyle}>
                {description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={authorAvatar}
                  alt={authorName}
                />
              </Avatar>
              <div className="flex flex-col min-w-0">
                <p className="text-sm font-medium break-words" style={fontStyle}>{authorName}</p>
                <p className="text-muted-foreground text-sm break-words" style={fontStyle}>
                  {authorRole}
                </p>
              </div>
            </div>

            <AspectRatio ratio={16 / 10}>
              <img
                src={featuredImage}
                alt="Project featured image"
                className="h-full w-full rounded-xl object-cover"
              />
            </AspectRatio>
          </div>

          <div className="flex flex-col gap-6">
            {renderContent()}
          </div>
        </article>
      </div>
    </section>
  );
}

export default RichTextSection;