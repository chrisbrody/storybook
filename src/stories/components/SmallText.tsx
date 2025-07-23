import { cn } from '@/lib/utils';

export interface SmallTextProps {
  /** The small text content */
  text: string;
  /** Size variant for the small text */
  size?: 'xs' | 'sm';
  /** Font weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Color variant for the small text */
  color?: 'default' | 'muted' | 'accent';
  /** Line height variant */
  lineHeight?: 'tight' | 'normal' | 'relaxed';
  /** Maximum width constraint */
  maxWidth?: 'none' | 'prose' | 'sm' | 'lg';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Font family */
  fontFamily?: 'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro';
  /** Custom color for default variant (docs only) */
  defaultColor?: string;
  /** Custom color for muted variant (docs only) */
  mutedColor?: string;
  /** Custom color for accent variant (docs only) */
  accentColor?: string;
  /** Additional CSS classes */
  className?: string;
}

export const SmallText = ({
  text,
  size = 'sm',
  weight = 'normal',
  color = 'muted',
  lineHeight = 'normal',
  maxWidth = 'none',
  align = 'left',
  fontFamily = 'sans',
  defaultColor,
  mutedColor,
  accentColor,
  className,
  ...props
}: SmallTextProps) => {
  // Size classes
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
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
    accent: 'text-primary text-blue-600 dark:text-blue-400',
  };

  // Line height classes
  const lineHeightClasses = {
    tight: 'leading-4',
    normal: 'leading-5',
    relaxed: 'leading-6',
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
    <small
      className={cn(
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
      style={style}
      {...props}
    >
      {text}
    </small>
  );
};