import { cn } from '@/lib/utils';

export interface ParagraphProps {
  /** The paragraph text content */
  text: string;
  /** Size variant for the paragraph text */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  /** Font weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Color variant for the paragraph text */
  color?: 'default' | 'muted' | 'subtle' | 'accent';
  /** Line height variant */
  lineHeight?: 'tight' | 'normal' | 'relaxed' | 'loose';
  /** Maximum width constraint */
  maxWidth?: 'none' | 'prose' | 'sm' | 'lg';
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Font family */
  fontFamily?: 'sans' | 'serif' | 'mono';
  /** Custom color for default variant (docs only) */
  defaultColor?: string;
  /** Custom color for muted variant (docs only) */
  mutedColor?: string;
  /** Custom color for accent variant (docs only) */
  accentColor?: string;
  /** Additional CSS classes */
  className?: string;
}

export const Paragraph = ({
  text,
  size = 'base',
  weight = 'normal',
  color = 'default',
  lineHeight = 'normal',
  maxWidth = 'none',
  align = 'left',
  fontFamily = 'sans',
  defaultColor,
  mutedColor,
  accentColor,
  className,
  ...props
}: ParagraphProps) => {
  // Size classes
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  // Weight classes
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  // Color classes
  const colorClasses = {
    default: 'text-foreground text-gray-900 dark:text-gray-100',
    muted: 'text-muted-foreground text-gray-600 dark:text-gray-400',
    subtle: 'text-muted-foreground/70 text-gray-500 dark:text-gray-500',
    accent: 'text-primary text-blue-600 dark:text-blue-400',
  };

  // Line height classes
  const lineHeightClasses = {
    tight: 'leading-5',
    normal: 'leading-7',
    relaxed: 'leading-8',
    loose: 'leading-9',
  };

  // Max width classes
  const maxWidthClasses = {
    none: '',
    prose: 'max-w-prose',
    sm: 'max-w-sm',
    lg: 'max-w-lg',
  };

  // Alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  // Font family classes
  const fontFamilyClasses = {
    sans: 'font-sans',
    serif: 'font-serif',
    mono: 'font-mono',
  };

  // Apply custom color overrides based on selected color variant
  let customColor: string | undefined;
  if (color === 'default' && defaultColor) {
    customColor = defaultColor;
  } else if (color === 'muted' && mutedColor) {
    customColor = mutedColor;
  } else if (color === 'accent' && accentColor) {
    customColor = accentColor;
  }

  const style = customColor ? { color: customColor } : undefined;

  return (
    <p
      className={cn(
        // Base shadcn paragraph styles - but don't let them override our custom classes
        '[&:not(:first-child)]:mt-6',
        // Custom variants (these should take precedence)
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        lineHeightClasses[lineHeight],
        maxWidthClasses[maxWidth],
        alignClasses[align],
        fontFamilyClasses[fontFamily],
        className
      )}
      style={style}
      {...props}
    >
      {text}
    </p>
  );
};