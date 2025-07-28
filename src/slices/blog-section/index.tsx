"use client";

import * as React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/ui/tagline";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

interface BlogSectionProps extends React.HTMLAttributes<HTMLElement> {
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

function BlogSection({
  className,
  backgroundColor = "#ffffff",
  textColor = "#000000",
  taglineColor,
  metaTextColor,
  tagline = "Interior Design Projects",
  headline = "Latest Design Transformations & Luxury Home Projects",
  description = "Explore our portfolio of award-winning interior design projects featuring contemporary kitchens, luxury bathrooms, and complete home transformations across the Twin Cities.",
  posts = DEFAULT_POSTS,
  showImages = true,
  imageAspectRatio = 4/3,
  gridColumns = "4",
  cardGap = "medium",
  hoverEffect = true,
  linkColor,
  hoverLinkColor,
  style,
  ...props
}: BlogSectionProps) {
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
    "3": "md:grid-cols-3", 
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
      <div className="container-padding-x container mx-auto gap-10 md:gap-12">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Title */}
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
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
          <ul
            className={cn(
              "grid grid-cols-1",
              gridClasses[gridColumns],
              gapClasses[cardGap]
            )}
          >
            {posts.map((post) => (
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
                    {showImages && (
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
        </div>
      </div>
    </section>
  );
}

export { BlogSection };
export type { BlogSectionProps, BlogPost };