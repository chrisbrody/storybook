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
  variant?: "default" | "minimal" | "reversed" | "featured" | "list";
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
    title: "Getting Started with shadcn/ui: A Complete Guide",
    description: "Learn how to set up and use shadcn/ui components in your development workflow with shadcn/ui's powerful component library.",
    date: "Mar 15, 2024",
    category: "Tutorial",
    image: "https://ui.shadcn.com/placeholder.svg",
    author: "John Doe",
    authorImage: "https://github.com/shadcn.png",
    authorRole: "Developer",
  },
  {
    id: 2,
    title: "Building Dark Mode with Next.js and Tailwind CSS",
    description: "Learn how to implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and system preferences.",
    date: "Mar 12, 2024",
    category: "Development",
    image: "https://ui.shadcn.com/placeholder.svg",
    author: "Jane Smith",
    authorImage: "https://github.com/shadcn.png",
    authorRole: "Designer",
  },
  {
    id: 3,
    title: "Mastering React Server Components",
    description: "Deep dive into React Server Components and learn how they can improve your application's performance and user experience.",
    date: "Mar 8, 2024",
    category: "Advanced",
    image: "https://ui.shadcn.com/placeholder.svg",
    author: "Alex Johnson",
    authorImage: "https://github.com/shadcn.png",
    authorRole: "Developer",
  },
  {
    id: 4,
    title: "The Future of Web Development in 2024",
    description: "Explore the latest trends and technologies shaping the future of web development this year and beyond.",
    date: "Mar 5, 2024",
    category: "Insights",
    image: "https://ui.shadcn.com/placeholder.svg",
    author: "Max Verstappen",
    authorImage: "https://github.com/shadcn.png",
    authorRole: "Software Architect",
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
  // Set variant-specific defaults
  const isMinimal = variant === "minimal";
  const isReversed = variant === "reversed";
  const isFeatured = variant === "featured";
  const isList = variant === "list";
  
  // Use default posts for all variants, with variant-specific content
  const basePosts = posts || DEFAULT_POSTS;
  
  // For minimal variant, use John Doe, Jane Smith, Alex Johnson as shown in reference image
  const minimalPosts = isMinimal ? basePosts.slice(0, 3).map((post, index) => {
    const minimalAuthors = [
      { author: "John Doe", authorRole: "Developer" },
      { author: "Jane Smith", authorRole: "Designer" },
      { author: "Alex Johnson", authorRole: "Developer" }
    ];
    
    if (minimalAuthors[index]) {
      return {
        ...post,
        author: minimalAuthors[index].author,
        authorRole: minimalAuthors[index].authorRole
      };
    }
    return post;
  }) : basePosts;
  
  // For list variant, use racing driver names as shown in reference image
  const listPosts = isList ? basePosts.map((post, index) => {
    const racingDrivers = [
      { author: "Lando Norris", authorRole: "Product Designer", title: "How can shadcn/ui kit for Figma improve your workflow?" },
      { author: "Charles Leclerc", authorRole: "Frontend Developer" },
      { author: "Lewis Hamilton", authorRole: "Tech Lead" },
      { author: "Max Verstappen", authorRole: "Software Architect" }
    ];
    
    if (racingDrivers[index]) {
      return {
        ...post,
        author: racingDrivers[index].author,
        authorRole: racingDrivers[index].authorRole,
        ...(racingDrivers[index].title && { title: racingDrivers[index].title })
      };
    }
    return post;
  }) : basePosts;
  
  const actualPosts = isMinimal ? minimalPosts : (isList ? listPosts : basePosts);
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
        <div className={cn("flex flex-col gap-10 md:gap-12", (isMinimal || isList) ? "items-start" : "items-center")}>
          {/* Section Title - Hidden for featured variant */}
          {!isFeatured && (
            <div className={cn("section-title-gap-lg flex flex-col", (isMinimal || isList) ? "max-w-2xl" : "max-w-xl mx-auto items-center text-center")}>
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
          )}

          {/* Blog Grid */}
          {isList ? (
            <div className="flex w-full flex-col gap-10 md:gap-8" role="list">
              {actualPosts.map((post) => (
                <div
                  key={post.id}
                  className="group flex cursor-pointer flex-col gap-6 p-0 md:flex-row"
                  role="listitem"
                  style={{
                    '--link-color': actualLinkColor,
                    '--hover-link-color': actualHoverLinkColor,
                  } as React.CSSProperties}
                >
                  {/* Image Container */}
                  {actualShowImages && post.image && (
                    <div className="w-full md:w-[200px]">
                      <AspectRatio
                        ratio={1 / 1}
                        className="overflow-hidden rounded-xl"
                      >
                        <img
                          src={post.image}
                          alt={`${post.title} thumbnail`}
                          loading="lazy"
                          className={cn(
                            "h-full w-full object-cover",
                            hoverEffect && "transition-transform duration-200 group-hover:scale-105"
                          )}
                        />
                      </AspectRatio>
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="flex flex-1 flex-col justify-between p-0">
                    {/* Post Info */}
                    <div className="flex flex-col gap-3">
                      {/* Post Meta */}
                      <div className="flex items-center gap-2">
                        <p 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          {post.date}
                        </p>
                        <span 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          ·
                        </span>
                        <p 
                          className="text-sm"
                          style={{ color: actualMetaTextColor }}
                        >
                          {post.category}
                        </p>
                      </div>

                      {/* Post Title */}
                      <h3 
                        className={cn(
                          "text-base font-semibold transition-colors",
                          "text-[--link-color]",
                          hoverEffect && "group-hover:text-[--hover-link-color] group-hover:underline"
                        )}
                      >
                        {post.title}
                      </h3>

                      {/* Post Description */}
                      <p 
                        className="line-clamp-2 text-sm"
                        style={{ color: actualMetaTextColor }}
                      >
                        {post.description}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="mt-6 flex items-center gap-4 md:mt-0">
                      {/* Author Avatar */}
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={post.authorImage}
                          alt={post.author}
                        />
                        <AvatarFallback>{post.author?.charAt(0) || 'A'}</AvatarFallback>
                      </Avatar>
                      {/* Author Details */}
                      <div className="flex flex-col">
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : isMinimal ? (
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
                    <CardFooter className="flex items-center gap-2 p-0">
                      {/* Author Avatar */}
                      <Avatar className="size-10">
                        <AvatarImage 
                          src={post.authorImage} 
                          alt={`${post.author} - ${post.authorRole}`}
                        />
                        <AvatarFallback>{post.author?.charAt(0) || 'A'}</AvatarFallback>
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