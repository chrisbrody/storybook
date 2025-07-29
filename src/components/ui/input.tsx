import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: [
          "border-input bg-transparent dark:bg-input/30",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        ],
        warning: [
          "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20",
          "focus-visible:border-yellow-600 focus-visible:ring-yellow-500/50 focus-visible:ring-[3px]",
          "text-yellow-900 dark:text-yellow-100",
          "placeholder:text-yellow-600 dark:placeholder:text-yellow-400",
        ],
        danger: [
          "border-red-500 bg-red-50 dark:bg-red-950/20",
          "focus-visible:border-red-600 focus-visible:ring-red-500/50 focus-visible:ring-[3px]",
          "text-red-900 dark:text-red-100",
          "placeholder:text-red-600 dark:placeholder:text-red-400",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  label?: string
  description?: string
  error?: string
  customColors?: {
    borderColor?: string
    textColor?: string
    backgroundColor?: string
  }
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, label, description, error, customColors, style, ...props }, ref) => {
    const customStyle = customColors
      ? {
          borderColor: customColors.borderColor,
          color: customColors.textColor,
          backgroundColor: customColors.backgroundColor,
          ...style,
        }
      : style

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        <input
          type={type}
          data-slot="input"
          className={cn(inputVariants({ variant }), className)}
          style={customStyle}
          ref={ref}
          {...props}
        />
        {description && !error && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
