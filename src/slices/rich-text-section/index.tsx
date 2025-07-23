"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface RichTextSectionProps {
  variant?: 'default';
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
  content?: {
    type: 'paragraph' | 'heading' | 'blockquote' | 'list' | 'image';
    level?: 2 | 3;
    text?: string;
    items?: string[];
    src?: string;
    alt?: string;
  }[];
  className?: string;
  fontFamily?: 'Inter' | 'Roboto' | 'Open Sans' | 'Playfair Display' | 'Source Code Pro';
}

export function RichTextSection({
  date = 'Nov 11, 2024',
  category = 'Projects',
  title = 'Contemporary Kitchen Remodel - Minnetonka',
  description = 'A stunning transformation of a traditional kitchen into a modern, functional space that perfectly balances style and practicality for everyday living.',
  authorName = 'Eminent Interior Design',
  authorRole = 'Interior Design Studio',
  authorAvatar = 'https://github.com/shadcn.png',
  featuredImage = 'https://ui.shadcn.com/placeholder.svg',
  inlineImage1,
  inlineImage2,
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
          
        default:
          return null;
      }
    });
  };

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