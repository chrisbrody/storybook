import { cn } from '@/lib/utils';

export interface BlockquoteProps {
  /** The blockquote text content */
  text: string;
  /** Size variant for the blockquote text */
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  /** Font weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Color variant for the blockquote text */
  color?: 'default' | 'muted' | 'subtle' | 'accent';
  /** Line height variant */
  lineHeight?: 'tight' | 'normal' | 'relaxed' | 'loose';
  /** Maximum width constraint */
  maxWidth?: 'none' | 'prose' | 'sm' | 'lg';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Font family */
  fontFamily?: 'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro';
  /** Border/sidebar style variant */
  variant?: 'default' | 'sidebar';
  /** Border position (for default variant) */
  borderPosition?: 'left' | 'top' | 'none';
  /** Border/sidebar color */
  borderColor?: 'default' | 'primary' | 'secondary' | 'accent' | 'muted' | 'custom';
  /** Custom border color (when borderColor is 'custom') */
  customBorderColor?: string;
  /** Custom color for default variant (docs only) */
  defaultColor?: string;
  /** Custom color for muted variant (docs only) */
  mutedColor?: string;
  /** Custom color for accent variant (docs only) */
  accentColor?: string;
  /** Additional CSS classes */
  className?: string;
}

export const Blockquote = ({
  text,
  size = 'base',
  weight = 'normal',
  color = 'default',
  lineHeight = 'normal',
  maxWidth = 'none',
  align = 'left',
  fontFamily = 'serif',
  variant = 'default',
  borderPosition = 'left',
  borderColor = 'default',
  customBorderColor,
  defaultColor,
  mutedColor,
  accentColor,
  className,
  ...props
}: BlockquoteProps) => {
  // Size classes
  const sizeClasses = {
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
  };

  // Font family classes
  const fontFamilyClasses = {
    sans: 'font-sans',
    serif: 'font-serif',
    mono: 'font-mono',
    // Modern & clean fonts
    inter: 'font-[Inter]',
    montserrat: 'font-[Montserrat]',
    poppins: 'font-[Poppins]',
    // Elegant serif
    playfair: 'font-[Playfair_Display]',
    // Cursive & script fonts
    dancing: 'font-[Dancing_Script]',
    greatvibes: 'font-[Great_Vibes]',
    pacifico: 'font-[Pacifico]',
    // Bold display fonts
    anton: 'font-[Anton]',
    bebas: 'font-[Bebas_Neue]',
    // Monospace
    sourcecodepro: 'font-[Source_Code_Pro]',
  };

  // Border color classes
  const borderColorClasses = {
    default: 'border-border',
    primary: 'border-primary',
    secondary: 'border-secondary',
    accent: 'border-accent',
    muted: 'border-muted-foreground',
    custom: '',
  };

  // Border classes for default variant
  const borderClasses = {
    left: `border-l-4 ${borderColorClasses[borderColor]} pl-6`,
    top: `border-t-4 ${borderColorClasses[borderColor]} pt-6`,
    none: '',
  };

  // Sidebar variant classes (shadcn/ui style)
  const sidebarClasses = `border-l-2 ${borderColorClasses[borderColor]} pl-6 italic`;

  // Apply custom color overrides based on selected color variant
  let customColor: string | undefined;
  if (color === 'default' && defaultColor) {
    customColor = defaultColor;
  } else if (color === 'muted' && mutedColor) {
    customColor = mutedColor;
  } else if (color === 'accent' && accentColor) {
    customColor = accentColor;
  }

  // Create style object for custom colors
  const style: React.CSSProperties = {};
  if (customColor) {
    style.color = customColor;
  }
  if (borderColor === 'custom' && customBorderColor) {
    style.borderColor = customBorderColor;
  }

  // Determine which styling to apply based on variant
  const getVariantClasses = () => {
    if (variant === 'sidebar') {
      return sidebarClasses;
    }
    return cn(
      'mt-6 italic',
      borderClasses[borderPosition]
    );
  };

  return (
    <blockquote
      className={cn(
        // Variant-specific styling
        getVariantClasses(),
        // Custom variants
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        lineHeightClasses[lineHeight],
        maxWidthClasses[maxWidth],
        alignClasses[align],
        fontFamilyClasses[fontFamily],
        className
      )}
      style={Object.keys(style).length > 0 ? style : undefined}
      {...props}
    >
      {text}
    </blockquote>
  );
};