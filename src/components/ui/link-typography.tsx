import { cn } from '@/lib/utils';

export interface LinkProps {
  /** The link text content */
  text: string;
  /** The URL to link to */
  href?: string;
  /** Size variant for the link text */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  /** Font weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Color variant for the link */
  color?: 'default' | 'muted' | 'accent';
  /** Underline style */
  underline?: 'none' | 'hover' | 'always';
  /** Font family */
  fontFamily?: 'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro';
  /** External link behavior */
  external?: boolean;
  /** Custom color for default variant (docs only) */
  defaultColor?: string;
  /** Custom color for muted variant (docs only) */
  mutedColor?: string;
  /** Custom color for accent variant (docs only) */
  accentColor?: string;
  /** Additional CSS classes */
  className?: string;
  /** Click handler for demo purposes */
  onClick?: () => void;
}

export const Link = ({
  text,
  href = '#',
  size = 'base',
  weight = 'normal',
  color = 'accent',
  underline = 'hover',
  fontFamily = 'sans',
  external = false,
  defaultColor,
  mutedColor,
  accentColor,
  className,
  onClick,
  ...props
}: LinkProps) => {
  // Size classes
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
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
    default: 'text-foreground hover:text-foreground/80 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300',
    muted: 'text-muted-foreground hover:text-foreground text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100',
    accent: 'text-primary hover:text-primary/80 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
  };

  // Underline classes
  const underlineClasses = {
    none: 'no-underline',
    hover: 'no-underline hover:underline',
    always: 'underline',
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

  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <a
      href={href}
      className={cn(
        // Base link styles
        'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        // Custom variants
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        underlineClasses[underline],
        fontFamilyClasses[fontFamily],
        className
      )}
      style={style}
      onClick={onClick}
      {...externalProps}
      {...props}
    >
      {text}
      {external && (
        <span className="ml-1 inline-block text-xs">
          ↗
        </span>
      )}
    </a>
  );
};