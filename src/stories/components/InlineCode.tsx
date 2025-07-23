import { cn } from '@/lib/utils';

export interface InlineCodeProps {
  /** The code text content */
  text: string;
  /** Size variant for the code text */
  size?: 'xs' | 'sm' | 'base';
  /** Font weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Color variant for the code */
  color?: 'default' | 'muted' | 'accent';
  /** Background variant */
  background?: 'default' | 'subtle' | 'none';
  /** Font family (typically monospace) */
  fontFamily?: 'mono' | 'sourcecodepro' | 'sans' | 'serif';
  /** Custom color for default variant (docs only) */
  defaultColor?: string;
  /** Custom color for muted variant (docs only) */
  mutedColor?: string;
  /** Custom color for accent variant (docs only) */
  accentColor?: string;
  /** Additional CSS classes */
  className?: string;
}

export const InlineCode = ({
  text,
  size = 'sm',
  weight = 'medium',
  color = 'default',
  background = 'default',
  fontFamily = 'mono',
  defaultColor,
  mutedColor,
  accentColor,
  className,
  ...props
}: InlineCodeProps) => {
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

  // Background classes
  const backgroundClasses = {
    default: 'bg-muted px-[0.3rem] py-[0.2rem] rounded',
    subtle: 'bg-muted/50 px-[0.3rem] py-[0.2rem] rounded',
    none: '',
  };

  // Font family classes
  const fontFamilyClasses = {
    mono: 'font-mono',
    sourcecodepro: 'font-[Source_Code_Pro]',
    sans: 'font-sans',
    serif: 'font-serif',
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
    <code
      className={cn(
        // Base styling (relative positioning for potential pseudo-elements)
        'relative',
        // Custom variants
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        backgroundClasses[background],
        fontFamilyClasses[fontFamily],
        className
      )}
      style={style}
      {...props}
    >
      {text}
    </code>
  );
};