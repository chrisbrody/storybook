import { cn } from '@/lib/utils';

export interface ListProps {
  /** The list items as an array of strings */
  items: string[];
  /** List type variant */
  variant?: 'unordered' | 'ordered';
  /** Size variant for the list text */
  size?: 'sm' | 'base' | 'lg' | 'xl';
  /** Font weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Color variant for the list text */
  color?: 'default' | 'muted' | 'accent';
  /** Line height variant */
  lineHeight?: 'tight' | 'normal' | 'relaxed' | 'loose';
  /** Maximum width constraint */
  maxWidth?: 'none' | 'prose' | 'sm' | 'lg';
  /** Font family */
  fontFamily?: 'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro';
  /** List marker style for unordered lists */
  markerStyle?: 'disc' | 'circle' | 'square' | 'none';
  /** List marker style for ordered lists */
  orderStyle?: 'decimal' | 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman';
  /** Spacing between list items */
  itemSpacing?: 'tight' | 'normal' | 'relaxed';
  /** Left margin/indentation */
  indent?: 'none' | 'sm' | 'base' | 'lg';
  /** Custom color for default variant (docs only) */
  defaultColor?: string;
  /** Custom color for muted variant (docs only) */
  mutedColor?: string;
  /** Custom color for accent variant (docs only) */
  accentColor?: string;
  /** Additional CSS classes */
  className?: string;
}

export const List = ({
  items,
  variant = 'unordered',
  size = 'base',
  weight = 'normal',
  color = 'default',
  lineHeight = 'normal',
  maxWidth = 'none',
  fontFamily = 'sans',
  markerStyle = 'disc',
  orderStyle = 'decimal',
  itemSpacing = 'normal',
  indent = 'base',
  defaultColor,
  mutedColor,
  accentColor,
  className,
  ...props
}: ListProps) => {
  // Size classes
  const sizeClasses = {
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
    default: 'text-foreground text-gray-900 dark:text-gray-100',
    muted: 'text-muted-foreground text-gray-600 dark:text-gray-400',
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

  // Marker style classes for unordered lists
  const markerStyleClasses = {
    disc: 'list-disc',
    circle: 'list-circle',
    square: 'list-square',
    none: 'list-none',
  };

  // Order style classes for ordered lists
  const orderStyleClasses = {
    decimal: 'list-decimal',
    'lower-alpha': 'list-lower-alpha',
    'upper-alpha': 'list-upper-alpha',
    'lower-roman': 'list-lower-roman',
    'upper-roman': 'list-upper-roman',
  };

  // Item spacing classes
  const itemSpacingClasses = {
    tight: '[&>li]:mt-1',
    normal: '[&>li]:mt-2',
    relaxed: '[&>li]:mt-3',
  };

  // Indent classes
  const indentClasses = {
    none: '',
    sm: 'ml-4',
    base: 'ml-6',
    lg: 'ml-8',
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

  // Determine list type and marker classes
  const listTypeClass = variant === 'ordered' ? orderStyleClasses[orderStyle] : markerStyleClasses[markerStyle];

  const ListTag = variant === 'ordered' ? 'ol' : 'ul';

  return (
    <ListTag
      className={cn(
        // Base shadcn list styles
        'my-6',
        // List type and marker
        listTypeClass,
        // Indentation
        indentClasses[indent],
        // Item spacing
        itemSpacingClasses[itemSpacing],
        // Custom variants
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        lineHeightClasses[lineHeight],
        maxWidthClasses[maxWidth],
        fontFamilyClasses[fontFamily],
        className
      )}
      style={style}
      {...props}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListTag>
  );
};