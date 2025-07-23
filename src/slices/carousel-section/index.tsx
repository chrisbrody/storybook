import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const carouselSectionVariants = cva(
  "w-full py-16 px-4",
  {
    variants: {
      variant: {
        default: "bg-white",
        dark: "bg-gray-900 text-white",
        minimal: "bg-gray-50",
      },
      size: {
        sm: "max-w-xs mx-auto",
        md: "max-w-md mx-auto", 
        lg: "max-w-lg mx-auto",
        xl: "max-w-2xl mx-auto",
        full: "max-w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
)

export interface CarouselSectionProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselSectionVariants> {
  tagline?: string
  heading?: string
  description?: string
  image1?: string | File
  image2?: string | File  
  image3?: string | File
  image4?: string | File
  image5?: string | File
  image6?: string | File
  autoplay?: boolean
}

export const CarouselSection = React.forwardRef<
  HTMLDivElement,
  CarouselSectionProps
>(({ 
  className, 
  variant, 
  size,
  tagline = "Project Gallery",
  heading = "Luxury Interior Design Portfolio", 
  description = "Explore our collection of award-winning interior design projects featuring contemporary kitchens, luxury bathrooms, and sophisticated living spaces.",
  image1,
  image2, 
  image3,
  image4,
  image5,
  image6,
  autoplay = false,
  ...props 
}, ref) => {
  // Collect images from individual image props
  const allImages = React.useMemo(() => {
    const imageList: (string | File)[] = []
    
    // Add individual image props - safely handle undefined values
    const individualImages = [image1, image2, image3, image4, image5, image6].filter(Boolean)
    individualImages.forEach(img => {
      if (img) imageList.push(img)
    })
    
    return imageList
  }, [image1, image2, image3, image4, image5, image6])

  // Convert File objects to URLs for display
  const displayImages = React.useMemo(() => {
    return allImages.map(img => {
      if (typeof img === 'string') {
        return img
      } else if (img instanceof File) {
        return URL.createObjectURL(img)
      }
      return ''
    })
  }, [allImages])


  // Default project images if no images provided
  const defaultImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop"
  ]

  const imagesToShow = displayImages.length > 0 ? displayImages : defaultImages

  const projectTitles = [
    "Contemporary Kitchen Remodel - Minnetonka",
    "Luxury Bathroom Transformation - Wayzata", 
    "Modern Living Space - Edina",
    "Custom Millwork & Built-ins - Plymouth",
    "Award-Winning Master Suite - Excelsior",
    "Sophisticated Home Office - Orono"
  ]

  return (
    <div
      ref={ref}
      className={cn(carouselSectionVariants({ variant, size }), className)}
      {...props}
    >
      <div className="text-center mb-12">
        {tagline && (
          <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
            {tagline}
          </p>
        )}
        {heading && (
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {heading}
          </h2>
        )}
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

        <Carousel className={cn("w-full", size === "full" ? "max-w-6xl mx-auto" : "")}>
          <CarouselContent>
            {imagesToShow.map((image, index) => (
              <CarouselItem key={index} className={cn(
                size === "sm" ? "basis-full" :
                size === "md" ? "basis-full" :
                size === "lg" ? "basis-full" :
                size === "xl" ? "basis-1/2" :
                "basis-1/3"
              )}>
                <div className="p-1">
                  <Card>
                    <CardContent className="relative aspect-[4/3] p-0 overflow-hidden">
                      <img
                        src={image}
                        alt={projectTitles[index] || `Interior Design Project ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="font-semibold text-lg">
                            {projectTitles[index] || `Project ${index + 1}`}
                          </h3>
                          <p className="text-sm text-gray-200">
                            Eminent Interior Design
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
})

CarouselSection.displayName = "CarouselSection"