"use client";

import * as React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tagline } from "@/components/ui/tagline";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  author?: string;
  authorImage?: string;
  authorRole?: string;
}

interface BlogSectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "minimal" | "reversed" | "featured";
  backgroundColor?: string;
  textColor?: string;
  taglineColor?: string;
  metaTextColor?: string;
  tagline?: string;
  headline?: string;
  description?: string;
  posts?: BlogPost[];
  showImages?: boolean;
  imageAspectRatio?: number;
  gridColumns?: "2" | "3" | "4";
  cardGap?: "small" | "medium" | "large";
  hoverEffect?: boolean;
  linkColor?: string;
  hoverLinkColor?: string;
  buttonText?: string;
  showButton?: boolean;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Contemporary Kitchen Remodel - Minnetonka Estate",
    description: "A stunning transformation of a traditional kitchen into a modern culinary space featuring premium quartz countertops, custom cabinetry, and high-end appliances.",
    date: "Mar 15, 2024",
    category: "Kitchen Design",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Luxury Master Suite Renovation - Wayzata Residence",
    description: "Complete bedroom and bathroom transformation featuring custom millwork, marble finishes, and sophisticated lighting design for ultimate comfort.",
    date: "Mar 12, 2024",
    category: "Bedroom Design",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Award-Winning Living Space - Edina Home",
    description: "An open-concept living area showcasing contemporary furniture, custom built-ins, and curated art pieces that create an elegant entertaining space.",
    date: "Mar 8, 2024",
    category: "Living Spaces",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Custom Home Office Design - Plymouth Executive Home",
    description: "A sophisticated home office featuring built-in shelving, premium hardwood flooring, and carefully selected furnishings for productivity and style.",
    date: "Mar 5, 2024",
    category: "Office Design",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format",
  },
];

const MINIMAL_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Luxury Interior Design Consultation Process",
    description: "Learn how to set up and maximize your consultation experience with Eminent Interior Design's comprehensive approach to transforming your space.",
    date: "Mar 15, 2024",
    category: "Design Process",
    author: "Eminent Interior Design",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616c8c1415e?w=100&h=100&fit=crop&crop=face&auto=format",
    authorRole: "Interior Design Studio",
  },
  {
    id: 2,
    title: "Selecting Premium Materials for Luxury Homes",
    description: "Implement sophisticated material choices in your luxury home renovation using premium finishes, custom millwork, and designer elements.",
    date: "Mar 12, 2024",
    category: "Material Selection",
    author: "Sarah Mitchell",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format",
    authorRole: "Senior Designer",
  },
  {
    id: 3,
    title: "Mastering Open-Concept Living Spaces",
    description: "Deep dive into open-concept design principles and learn how they can transform your home's flow and entertainment capabilities.",
    date: "Mar 8, 2024",
    category: "Space Planning",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format",
    authorRole: "Design Director",
  },
];

const REVERSED_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Contemporary Kitchen Design Trends for 2024",
    description: "Explore the latest luxury kitchen design trends featuring premium materials, smart appliances, and sophisticated color palettes for modern homes.",
    date: "Mar 15, 2024",
    category: "Kitchen Design",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Luxury Bathroom Spa Retreat Design",
    description: "Transform your bathroom into a personal spa sanctuary with premium finishes, rainfall showers, and elegant lighting solutions.",
    date: "Mar 12, 2024",
    category: "Bathroom Design",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Open-Concept Living Room Elegance",
    description: "Discover how to create sophisticated living spaces that seamlessly blend comfort, style, and functionality for modern entertaining.",
    date: "Mar 8, 2024",
    category: "Living Spaces",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format",
  },
];

const FEATURED_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Ultra-Luxury Estate Kitchen: Bespoke Italian Design",
    description: "Exclusive showcase of a $2.8M custom kitchen featuring rare Calacatta marble, handcrafted Italian cabinetry, and museum-quality finishes for discerning collectors.",
    date: "Mar 15, 2024",
    category: "Estate Kitchens",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Penthouse Master Suite: Manhattan Skyline Views",
    description: "A breathtaking $1.5M master suite transformation featuring floor-to-ceiling windows, custom millwork, and the finest European textiles overlooking Central Park.",
    date: "Mar 12, 2024",
    category: "Master Suites",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Grand Salon: Museum-Quality Interior Architecture",
    description: "An extraordinary $3.2M living space featuring 18th-century antiques, custom crystal chandeliers, and hand-painted silk wallcoverings in a historic mansion.",
    date: "Mar 8, 2024",
    category: "Grand Salons",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Wine Cellar & Tasting Room: Collector's Paradise",
    description: "A sophisticated $800K wine cellar design featuring climate control systems, imported stone, and custom millwork for serious wine connoisseurs.",
    date: "Mar 5, 2024",
    category: "Wine Cellars",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop&auto=format",
  },
];

function BlogSection({
  className,
  variant = "default",
  backgroundColor = "#ffffff",
  textColor = "#000000",
  taglineColor,
  metaTextColor,
  tagline = "Interior Design Projects",
  headline = "Latest Design Transformations & Luxury Home Projects",
  description = "Explore our portfolio of award-winning interior design projects featuring contemporary kitchens, luxury bathrooms, and complete home transformations across the Twin Cities.",
  posts,
  showImages = true,
  imageAspectRatio = 4/3,
  gridColumns = "4",
  cardGap = "medium",
  hoverEffect = true,
  linkColor,
  hoverLinkColor,
  buttonText = "View all articles",
  showButton = true,
  buttonVariant = "outline",
  style,
  ...props
}: BlogSectionProps) {
  // Set default posts based on variant
  const defaultPosts = variant === "minimal" ? MINIMAL_POSTS : 
                      variant === "reversed" ? REVERSED_POSTS : 
                      variant === "featured" ? FEATURED_POSTS : DEFAULT_POSTS;
  const actualPosts = posts || defaultPosts;
  
  // Set variant-specific defaults
  const isMinimal = variant === "minimal";
  const isReversed = variant === "reversed";
  const isFeatured = variant === "featured";
  const actualShowImages = isMinimal ? false : showImages;
  const actualGridColumns = (isMinimal || isReversed) ? "3" : gridColumns;
  const actualTaglineColor = taglineColor || `${textColor}CC`;
  const actualMetaTextColor = metaTextColor || `${textColor}99`;
  const actualLinkColor = linkColor || textColor;
  const actualHoverLinkColor = hoverLinkColor || actualLinkColor;

  const gapClasses = {
    small: "gap-4 md:gap-3",
    medium: "gap-8 md:gap-6", 
    large: "gap-12 md:gap-8"
  };

  const gridClasses = {
    "2": "md:grid-cols-2",
    "3": (isMinimal || isReversed) ? "lg:grid-cols-3" : "md:grid-cols-3", 
    "4": "md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section
      className={cn("section-padding-y", className)}
      style={{
        backgroundColor,
        ...style,
      }}
      aria-labelledby="blog-section-heading"
      {...props}
    >
      <div className="container-padding-x container mx-auto">
        <div className={cn("flex flex-col gap-10 md:gap-12", isMinimal ? "items-start" : "items-center")}>
          {/* Section Title */}
          <div className={cn("section-title-gap-lg flex max-w-xl flex-col", isMinimal ? "" : "mx-auto items-center text-center")}>
            {/* Tagline */}
            <Tagline 
              style={{ color: actualTaglineColor }}
            >
              {tagline}
            </Tagline>
            {/* Main Heading */}
            <h1 
              id="blog-section-heading" 
              className="heading-lg"
              style={{ color: textColor }}
            >
              {headline}
            </h1>
            {/* Description */}
            <p 
              className="text-base"
              style={{ color: actualMetaTextColor }}
            >
              {description}
            </p>
          </div>

          {/* Blog Grid */}
          {isMinimal ? (
            <div
              className={cn(
                "grid grid-cols-1",
                gridClasses[actualGridColumns],
                gapClasses[cardGap]
              )}
              role="list"
            >
              {actualPosts.map((post, index) => (
                <>
                  <Card
                    key={post.id}
                    className="group flex cursor-pointer flex-col justify-between gap-6 rounded-none border-none bg-transparent p-0 shadow-none"
                    role="listitem"
                    style={{
                      '--link-color': actualLinkColor,
                      '--hover-link-color': actualHoverLinkColor,
                    } as React.CSSProperties}
                  >
                    {/* Post Content */}
                    <CardContent className="flex flex-col gap-3 p-0">
                      {/* Post Meta */}
                      <div className="flex items-center gap-2 text-left">
                        <span 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          {post.date}
                        </span>
                        <span 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          ·
                        </span>
                        <span 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Post Title */}
                      <h2 
                        className={cn(
                          "text-base font-semibold leading-normal transition-colors",
                          "text-[--link-color]",
                          hoverEffect && "group-hover:text-[--hover-link-color] group-hover:underline"
                        )}
                      >
                        {post.title}
                      </h2>

                      {/* Post Summary */}
                      <p 
                        className="text-sm leading-normal"
                        style={{ color: actualMetaTextColor }}
                      >
                        {post.description}
                      </p>
                    </CardContent>

                    {/* Author Info */}
                    {post.author && (
                      <CardFooter className="flex items-center gap-2 p-0">
                        {/* Author Avatar */}
                        <Avatar className="size-10">
                          <AvatarImage 
                            src={post.authorImage} 
                            alt={`${post.author} - ${post.authorRole}`}
                          />
                          <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                        </Avatar>

                        {/* Author Details */}
                        <div className="flex flex-1 flex-col items-start gap-0">
                          <p 
                            className="text-sm font-medium"
                            style={{ color: textColor }}
                          >
                            {post.author}
                          </p>
                          <p 
                            className="text-sm"
                            style={{ color: actualMetaTextColor }}
                          >
                            {post.authorRole}
                          </p>
                        </div>
                      </CardFooter>
                    )}
                  </Card>
                  {index < actualPosts.length - 1 && (
                    <Separator className="lg:hidden" />
                  )}
                </>
              ))}
            </div>
          ) : isReversed ? (
            <div
              className={cn(
                "grid grid-cols-1",
                gridClasses[actualGridColumns],
                gapClasses[cardGap]
              )}
              role="list"
            >
              {actualPosts.map((post) => (
                <React.Fragment key={post.id}>
                  <Card
                    className="group flex cursor-pointer flex-col justify-between gap-6 rounded-none border-none bg-transparent p-0 shadow-none"
                    role="listitem"
                    style={{
                      '--link-color': actualLinkColor,
                      '--hover-link-color': actualHoverLinkColor,
                    } as React.CSSProperties}
                  >
                    {/* Post Content */}
                    <CardContent className="flex flex-col gap-3 p-0">
                      {/* Post Meta */}
                      <div className="flex items-center gap-2 text-left">
                        <span 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          {post.date}
                        </span>
                        <span 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          ·
                        </span>
                        <span 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Post Title */}
                      <h2 
                        className={cn(
                          "text-base font-semibold leading-normal transition-colors",
                          "text-[--link-color]",
                          hoverEffect && "group-hover:text-[--hover-link-color] group-hover:underline"
                        )}
                      >
                        {post.title}
                      </h2>

                      {/* Post Summary */}
                      <p 
                        className="text-sm leading-normal line-clamp-2"
                        style={{ color: actualMetaTextColor }}
                      >
                        {post.description}
                      </p>
                    </CardContent>

                    {/* Image Container */}
                    <CardFooter className="p-0">
                      {actualShowImages && post.image && (
                        <AspectRatio
                          ratio={imageAspectRatio}
                          className="w-full overflow-hidden rounded-xl"
                        >
                          <img
                            src={post.image}
                            alt={`${post.title} - Interior design project showcase`}
                            loading="lazy"
                            className={cn(
                              "h-full w-full object-cover",
                              hoverEffect && "transition-transform duration-200 group-hover:scale-105"
                            )}
                          />
                        </AspectRatio>
                      )}
                    </CardFooter>
                  </Card>
                </React.Fragment>
              ))}
            </div>
          ) : isFeatured ? (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left Column - Content */}
              <div className="flex max-w-lg flex-col items-start gap-8">
                <div className="section-title-gap-lg flex flex-col">
                  <Tagline style={{ color: actualTaglineColor }}>
                    {tagline}
                  </Tagline>
                  <h2 
                    id="blog-section-heading" 
                    className="heading-lg"
                    style={{ color: textColor }}
                  >
                    {headline}
                  </h2>
                  <p 
                    className="text-base"
                    style={{ color: actualMetaTextColor }}
                  >
                    {description}
                  </p>
                </div>
                {showButton && (
                  <Button 
                    variant={buttonVariant} 
                    className="w-fit"
                    style={{ 
                      borderColor: actualLinkColor,
                      color: actualLinkColor
                    }}
                  >
                    {buttonText}
                  </Button>
                )}
              </div>

              {/* Right Column - Blog Grid */}
              <div
                className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
                role="list"
              >
                {actualPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group cursor-pointer gap-0 overflow-hidden rounded-lg border p-0"
                    role="listitem"
                    style={{
                      '--link-color': actualLinkColor,
                      '--hover-link-color': actualHoverLinkColor,
                    } as React.CSSProperties}
                  >
                    {actualShowImages && post.image && (
                      <AspectRatio ratio={imageAspectRatio} className="overflow-hidden">
                        <img
                          src={post.image}
                          alt={`${post.title} - Luxury interior design showcase`}
                          loading="lazy"
                          className={cn(
                            "h-full w-full object-cover",
                            hoverEffect && "transition-transform duration-200 group-hover:scale-105"
                          )}
                        />
                      </AspectRatio>
                    )}
                    <CardContent className="flex flex-col justify-between gap-4 p-6">
                      <h3 
                        className={cn(
                          "text-base font-semibold leading-normal transition-colors",
                          "text-[--link-color]",
                          hoverEffect && "group-hover:text-[--hover-link-color] group-hover:underline"
                        )}
                      >
                        {post.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm leading-none">
                        <span 
                          style={{ color: actualMetaTextColor }}
                        >
                          {post.date}
                        </span>
                        <span 
                          style={{ color: actualMetaTextColor }}
                        >
                          ·
                        </span>
                        <span 
                          style={{ color: actualMetaTextColor }}
                        >
                          {post.category}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <ul
              className={cn(
                "grid grid-cols-1",
                gridClasses[actualGridColumns],
                gapClasses[cardGap]
              )}
            >
              {actualPosts.map((post) => (
              <li key={post.id}>
                <a 
                  href="#" 
                  className={cn("group block", hoverEffect && "transition-all duration-200")}
                  style={{
                    '--link-color': actualLinkColor,
                    '--hover-link-color': actualHoverLinkColor,
                  } as React.CSSProperties}
                >
                  {/* Blog Card */}
                  <div className="flex flex-col gap-4 rounded-xl">
                    {/* Image Wrapper */}
                    {actualShowImages && post.image && (
                      <AspectRatio
                        ratio={imageAspectRatio}
                        className="overflow-hidden rounded-xl"
                      >
                        <img
                          src={post.image}
                          alt={`${post.title} - Interior design project showcase`}
                          loading="lazy"
                          className={cn(
                            "h-full w-full object-cover",
                            hoverEffect && "transition-transform duration-200 group-hover:scale-105"
                          )}
                        />
                      </AspectRatio>
                    )}

                    {/* Post Content */}
                    <div className="flex flex-col gap-3">
                      {/* Post Meta */}
                      <div className="flex items-center gap-2 text-left">
                        <span 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          {post.date}
                        </span>
                        <span 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          ·
                        </span>
                        <span 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Post Title */}
                      <h2 
                        className={cn(
                          "text-base font-semibold leading-normal transition-colors",
                          "text-[--link-color]",
                          hoverEffect && "group-hover:text-[--hover-link-color] group-hover:underline"
                        )}
                      >
                        {post.title}
                      </h2>

                      {/* Post Summary */}
                      <p 
                        className="text-sm leading-normal"
                        style={{ color: actualMetaTextColor }}
                      >
                        {post.description}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export { BlogSection };
export type { BlogSectionProps, BlogPost };