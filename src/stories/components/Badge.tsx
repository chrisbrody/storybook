import { cn } from '@/lib/utils';

export interface BadgeProps {
  /** The badge text content */
  text: string;
  /** Size variant for the badge */
  size?: 'sm' | 'base' | 'lg';
  /** Style variant for the badge */
  variant?: 'default' | 'secondary' | 'outline' | 'accent' | 'success' | 'warning' | 'error';
  /** Font weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Font family */
  fontFamily?: 'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro';
  /** Custom color for accent variant (docs only) */
  accentColor?: string;
  /** Additional CSS classes */
  className?: string;
}

export const Badge = ({
  text,
  size = 'base',
  variant = 'default',
  weight = 'medium',
  fontFamily = 'sans',
  accentColor,
  className,
  ...props
}: BadgeProps) => {
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    base: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };

  // Weight classes
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  // Variant classes
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/80 bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
    outline: 'text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground border-gray-200 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 dark:hover:bg-gray-900',
    accent: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
    success: 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600',
    error: 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
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

  // Apply custom color for accent variant
  const style = (variant === 'accent' && accentColor) ? {
    backgroundColor: accentColor,
    color: 'white'
  } : undefined;

  return (
    <span
      className={cn(
        // Base badge styles
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        // Custom variants (override base styles)
        sizeClasses[size],
        weightClasses[weight],
        variantClasses[variant],
        fontFamilyClasses[fontFamily],
        className
      )}
      style={style}
      {...props}
    >
      {text}
    </span>
  );
};