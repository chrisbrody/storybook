// src/stories/Button.tsx
import React from 'react';
// CORRECTED: Only import ShadcnButton and its Props, NOT buttonVariants
import { Button as ShadcnButton } from '@/components/ui/button';
import type { ButtonProps as ShadcnButtonProps } from '@/components/ui/button';

export interface ButtonProps extends Omit<ShadcnButtonProps, 'size' | 'children'> {
    /** Is this the principal call to action on the page?
     * If `variant` is provided, this prop will be ignored.
     * Maps to 'default' or 'secondary' variant if no `variant` is explicitly set.
     */
    primary?: boolean;
    /** What background color to use. Overrides `variant` background color. */
    backgroundColor?: string;
    /** What text color to use. Overrides `variant` text color. */
    textColor?: string;
    /** How large should the button be? Maps to 'sm', 'default', or 'lg' size. */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
    /** Explicit variant to use. Overrides `primary` prop. */
    variant?: ShadcnButtonProps['variant'];
    /** Additional Tailwind CSS classes for custom styling. */
    className?: string;
}

export const Button = ({
                           primary = false,
                           size = 'medium',
                           label,
                           variant,
                           backgroundColor,
                           textColor,
                           className,
                           style,
                           ...props
                       }: ButtonProps) => {
    const effectiveVariant = variant || (primary ? 'default' : 'secondary');

    let shadcnSize: ShadcnButtonProps['size'] = 'default';
    if (size === 'small') {
        shadcnSize = 'sm';
    } else if (size === 'large') {
        shadcnSize = 'lg';
    }

    const combinedStyle = {
        ...style,
        backgroundColor,
        color: textColor,
    };

    return (
        <ShadcnButton
            variant={effectiveVariant}
            size={shadcnSize}
            className={className}
            style={combinedStyle}
            {...props}
        >
            {label}
        </ShadcnButton>
    );
};