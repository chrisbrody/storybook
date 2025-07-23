// src/stories/Heading.tsx
import { Heading as ShadcnHeading } from '@/components/ui/Heading';
import type { HeadingProps as ShadcnHeadingProps } from '@/components/ui/Heading';

export interface HeadingProps extends Omit<ShadcnHeadingProps, 'children'> {
  /** The heading text content */
  text: string;
  /** Custom color for default variant (docs only) */
  defaultColor?: string;
  /** Custom color for primary variant (docs only) */
  primaryColor?: string;
  /** Custom color for muted variant (docs only) */
  mutedColor?: string;
}

export const Heading = ({
  text,
  defaultColor,
  primaryColor,
  mutedColor,
  color,
  style,
  level,
  size,
  ...props
}: HeadingProps) => {
  // Apply custom color overrides based on selected color variant
  let customColor: string | undefined;
  if (color === 'default' && defaultColor) {
    customColor = defaultColor;
  } else if (color === 'primary' && primaryColor) {
    customColor = primaryColor;
  } else if (color === 'muted' && mutedColor) {
    customColor = mutedColor;
  }

  const combinedStyle = {
    ...style,
    color: customColor,
  };

  // Use level as size if size is not explicitly provided
  const headingSize = size || level;

  return (
    <ShadcnHeading
      level={level}
      size={headingSize}
      color={color}
      style={combinedStyle}
      {...props}
    >
      {text}
    </ShadcnHeading>
  );
};