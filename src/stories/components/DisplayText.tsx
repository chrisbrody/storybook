import { cn } from '@/lib/utils';

export interface DisplayTextProps {
  /** The display text content */
  text: string;
  /** Size variant for the display text */
  size?: '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  /** Font weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  /** Color variant for the display text */
  color?: 'default' | 'muted' | 'accent';
  /** Line height variant */
  lineHeight?: 'tight' | 'normal' | 'relaxed';
  /** Maximum width constraint */
  maxWidth?: 'none' | 'prose' | 'sm' | 'lg' | 'xl';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Font family */
  fontFamily?: 'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro';
  /** Letter spacing */
  letterSpacing?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
  /** Custom color for default variant (docs only) */
  defaultColor?: string;
  /** Custom color for muted variant (docs only) */
  mutedColor?: string;
  /** Custom color for accent variant (docs only) */
  accentColor?: string;
  /** Additional CSS classes */
  className?: string;
}

export const DisplayText = ({
  text,
  size = '4xl',
  weight = 'bold',
  color = 'default',
  lineHeight = 'tight',
  maxWidth = 'none',
  align = 'left',
  fontFamily = 'sans',
  letterSpacing = 'tight',
  defaultColor,
  mutedColor,
  accentColor,
  className,
  ...props
}: DisplayTextProps) => {
  // Size classes
  const sizeClasses = {
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  };

  // Weight classes
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  };

  // Color classes
  const colorClasses = {
    default: 'text-foreground text-gray-900 dark:text-gray-100',
    muted: 'text-muted-foreground text-gray-600 dark:text-gray-400',
    accent: 'text-primary text-blue-600 dark:text-blue-400',
  };

  // Line height classes
  const lineHeightClasses = {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
  };

  // Max width classes
  const maxWidthClasses = {
    none: '',
    prose: 'max-w-prose',
    sm: 'max-w-sm',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
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

  // Letter spacing classes
  const letterSpacingClasses = {
    tighter: 'tracking-tighter',
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest',
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
    <h1
      className={cn(
        // Base display text styles (scroll margin for anchor links)
        'scroll-m-20',
        // Custom variants
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        lineHeightClasses[lineHeight],
        maxWidthClasses[maxWidth],
        alignClasses[align],
        fontFamilyClasses[fontFamily],
        letterSpacingClasses[letterSpacing],
        className
      )}
      style={style}
      {...props}
    >
      {text}
    </h1>
  );
};