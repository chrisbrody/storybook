import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

const sliderSectionVariants = cva(
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
        full: "max-w-4xl mx-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
)

// Before/After Slider Component
interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  title: string
  className?: string
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
  className
}) => {
  const [sliderPosition, setSliderPosition] = React.useState([50])

  return (
    <Card className={className}>
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Before Image */}
          <img
            src={beforeImage}
            alt={`${title} - Before`}
            className="absolute inset-0 w-full h-full object-cover select-none"
          />
          
          {/* After Image with clip-path */}
          <img
            src={afterImage}
            alt={`${title} - After`}
            className="absolute inset-0 w-full h-full object-cover select-none"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)`
            }}
          />
          
          {/* Vertical divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
            style={{ left: `${sliderPosition[0]}%`, transform: 'translateX(-50%)' }}
          />
          
          {/* Labels - only show on their respective image areas */}
          {/* Before label - only show if slider position allows space on the left */}
          {sliderPosition[0] > 15 && (
            <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium select-none">
              BEFORE
            </div>
          )}
          {/* After label - only show if slider position allows space on the right */}
          {sliderPosition[0] < 85 && (
            <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium select-none">
              AFTER
            </div>
          )}
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-semibold text-lg select-none">{title}</h3>
            <p className="text-gray-200 text-sm select-none">Eminent Interior Design</p>
          </div>
        </div>

        {/* Slider Control Below Image */}
        <div className="p-4 space-y-3">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Before</span>
            <span>After</span>
          </div>
          <Slider
            value={sliderPosition}
            onValueChange={setSliderPosition}
            max={100}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="text-center text-xs text-muted-foreground">
            Drag to reveal transformation
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export interface SliderSectionProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sliderSectionVariants> {
  tagline?: string
  heading?: string
  description?: string
  beforeImage?: string | File
  afterImage?: string | File
  projectTitle?: string
}

export const SliderSection = React.forwardRef<
  HTMLDivElement,
  SliderSectionProps
>(({ 
  className, 
  variant, 
  size,
  tagline = "Transformation Gallery",
  heading = "Before & After Reveals", 
  description = "Discover the dramatic transformations of our interior design projects. Drag the slider to reveal the stunning before and after results of our work.",
  beforeImage,
  afterImage,
  projectTitle = "Kitchen Transformation - Minnetonka",
  ...props 
}, ref) => {
  // Convert File objects to URLs for display
  const displayBeforeAfterPair = React.useMemo(() => {
    const before = beforeImage ? (typeof beforeImage === 'string' ? beforeImage : URL.createObjectURL(beforeImage)) : "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop"
    const after = afterImage ? (typeof afterImage === 'string' ? afterImage : URL.createObjectURL(afterImage)) : "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
    
    return { before, after }
  }, [beforeImage, afterImage])

  return (
    <div
      ref={ref}
      className={cn(sliderSectionVariants({ variant, size }), className)}
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

      <div className={cn("w-full", 
        size === "sm" ? "max-w-xs mx-auto" :
        size === "md" ? "max-w-md mx-auto" :
        size === "lg" ? "max-w-lg mx-auto" :
        size === "xl" ? "max-w-2xl mx-auto" :
        "max-w-4xl mx-auto"
      )}>
        <BeforeAfterSlider
          beforeImage={displayBeforeAfterPair.before}
          afterImage={displayBeforeAfterPair.after}
          title={projectTitle}
        />
      </div>
    </div>
  )
})

SliderSection.displayName = "SliderSection"