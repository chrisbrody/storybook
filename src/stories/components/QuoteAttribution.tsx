import { cn } from '@/lib/utils';

export interface QuoteAttributionProps {
  /** The person's name */
  name: string;
  /** The person's title or role */
  title?: string;
  /** The company or location */
  company?: string;
  /** Size variant for the attribution text */
  size?: 'xs' | 'sm' | 'base';
  /** Font weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Color variant for the attribution text */
  color?: 'default' | 'muted' | 'accent';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Font family */
  fontFamily?: 'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro';
  /** Layout style */
  layout?: 'stacked' | 'inline';
  /** Custom color for default variant (docs only) */
  defaultColor?: string;
  /** Custom color for muted variant (docs only) */
  mutedColor?: string;
  /** Custom color for accent variant (docs only) */
  accentColor?: string;
  /** Additional CSS classes */
  className?: string;
}

export const QuoteAttribution = ({
  name,
  title,
  company,
  size = 'sm',
  weight = 'medium',
  color = 'muted',
  align = 'left',
  fontFamily = 'sans',
  layout = 'stacked',
  defaultColor,
  mutedColor,
  accentColor,
  className,
  ...props
}: QuoteAttributionProps) => {
  // Size classes
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
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

  const baseClasses = cn(
    'mt-2',
    sizeClasses[size],
    weightClasses[weight],
    colorClasses[color],
    alignClasses[align],
    fontFamilyClasses[fontFamily],
    className
  );

  if (layout === 'inline') {
    const parts = [name];
    if (title) parts.push(title);
    if (company) parts.push(company);
    
    return (
      <cite
        className={baseClasses}
        style={style}
        {...props}
      >
        — {parts.join(', ')}
      </cite>
    );
  }

  // Stacked layout
  return (
    <cite
      className={cn(baseClasses, 'not-italic')}
      style={style}
      {...props}
    >
      <div className="font-semibold">— {name}</div>
      {title && <div className="opacity-80">{title}</div>}
      {company && <div className="opacity-70">{company}</div>}
    </cite>
  );
};