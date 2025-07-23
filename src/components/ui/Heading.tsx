import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva(
  "font-medium tracking-tight leading-tight",
  {
    variants: {
      size: {
        h1: "text-4xl sm:text-5xl lg:text-6xl font-bold",
        h2: "text-3xl sm:text-4xl lg:text-5xl font-bold", 
        h3: "text-2xl sm:text-3xl lg:text-4xl font-bold",
        h4: "text-xl sm:text-2xl lg:text-3xl font-semibold",
        h5: "text-lg sm:text-xl lg:text-2xl font-semibold",
        h6: "text-base sm:text-lg lg:text-xl font-medium"
      },
      color: {
        default: "heading-dynamic-default",
        primary: "heading-dynamic-primary", 
        muted: "heading-dynamic-muted"
      },
      weight: {
        default: "",
        thin: "font-thin",
        bold: "font-bold",
        semibold: "font-semibold"
      }
    },
    defaultVariants: {
      size: "h2",
      color: "default",
      weight: "default"
    }
  }
)

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, color, weight, level, as, ...props }, ref) => {
    const Component = as || level || "h2"
    
    return React.createElement(
      Component,
      {
        className: cn(headingVariants({ size, color: color as any, weight, className })),
        ref,
        ...props
      }
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }