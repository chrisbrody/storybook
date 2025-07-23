import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from './Paragraph'

const meta = {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: true,
        height: 'auto',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'The paragraph text content.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
      description: 'Size variant for the paragraph text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
      },
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight variant.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'subtle', 'accent'],
      description: 'Color variant for the paragraph text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    lineHeight: {
      control: 'select',
      options: ['tight', 'normal', 'relaxed', 'loose'],
      description: 'Line height variant for readability.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    maxWidth: {
      control: 'select',
      options: ['none', 'prose', 'sm', 'lg'],
      description: 'Maximum width constraint for readability.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    fontFamily: {
      control: 'select',
      options: ['sans', 'serif', 'mono'],
      description: 'Font family variant.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sans' },
      },
    },
    defaultColor: {
      control: { type: 'color' },
      description: 'Custom color for default variant. Overrides theme default color.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#000000' },
      },
    },
    mutedColor: {
      control: { type: 'color' },
      description: 'Custom color for muted variant. Overrides theme muted color.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#6b7280' },
      },
    },
    accentColor: {
      control: { type: 'color' },
      description: 'Custom color for accent variant. Overrides theme accent color.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#3b82f6' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    text: 'This is a sample paragraph demonstrating the typography component. It shows how text appears with different styling options and can be customized using the various controls available in Storybook.',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>

// Docs story with color controls (this will be the primary docs example)
export const Docs: Story = {
  args: {
    text: 'This is a paragraph component that can be customized with various typography controls.',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'prose',
    align: 'left',
    fontFamily: 'sans',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
  decorators: [
    (Story, context) => {
      const { defaultColor, mutedColor, accentColor } = context.args;
      if (defaultColor) {
        document.documentElement.style.setProperty('--paragraph-default-color', defaultColor);
      }
      if (mutedColor) {
        document.documentElement.style.setProperty('--paragraph-muted-color', mutedColor);
      }
      if (accentColor) {
        document.documentElement.style.setProperty('--paragraph-accent-color', accentColor);
      }
      return Story();
    },
  ],
}

// Primary story with core controls
export const Primary: Story = {
  args: {
    text: 'This is a paragraph component that demonstrates the core typography controls available for designers.',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
  },
  parameters: {
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'className'],
    },
  },
}

// All sizes demonstration
export const AllSizes: Story = {
  args: {
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
  },
  render: ({ color, weight, lineHeight }) => {
    return (
      <div className="space-y-4">
        <div>
          <Paragraph size="xs" color={color} weight={weight} lineHeight={lineHeight}>
            Extra Small (12px) - This paragraph demonstrates the xs size variant.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="xs"</p>
        </div>
        <div>
          <Paragraph size="sm" color={color} weight={weight} lineHeight={lineHeight}>
            Small (14px) - This paragraph demonstrates the sm size variant.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="sm"</p>
        </div>
        <div>
          <Paragraph size="base" color={color} weight={weight} lineHeight={lineHeight}>
            Base (16px) - This paragraph demonstrates the base size variant, which is the default.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="base" (default)</p>
        </div>
        <div>
          <Paragraph size="lg" color={color} weight={weight} lineHeight={lineHeight}>
            Large (18px) - This paragraph demonstrates the lg size variant for emphasis.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
        </div>
        <div>
          <Paragraph size="xl" color={color} weight={weight} lineHeight={lineHeight}>
            Extra Large (20px) - This paragraph demonstrates the xl size variant.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="xl"</p>
        </div>
        <div>
          <Paragraph size="2xl" color={color} weight={weight} lineHeight={lineHeight}>
            2X Large (24px) - This paragraph demonstrates the 2xl size variant.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="2xl"</p>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'size', 'maxWidth', 'align', 'fontFamily'],
    },
  },
}

// Color variants story
export const ColorVariants: Story = {
  args: {
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
  render: () => (
    <div className="space-y-4">
      <div>
        <Paragraph color="default" size="base">
          Default Color - This paragraph uses the default text color for primary content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">color="default"</p>
      </div>
      <div>
        <Paragraph color="muted" size="base">
          Muted Color - This paragraph uses muted text color for secondary content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">color="muted"</p>
      </div>
      <div>
        <Paragraph color="subtle" size="base">
          Subtle Color - This paragraph uses an even more subtle color for tertiary content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">color="subtle"</p>
      </div>
      <div>
        <Paragraph color="accent" size="base">
          Accent Color - This paragraph uses the accent/brand color for highlighted content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">color="accent"</p>
      </div>
    </div>
  ),
  decorators: [
    (Story, context) => {
      const { defaultColor, mutedColor, accentColor } = context.args;
      if (defaultColor) {
        document.documentElement.style.setProperty('--paragraph-default-color', defaultColor);
      }
      if (mutedColor) {
        document.documentElement.style.setProperty('--paragraph-muted-color', mutedColor);
      }
      if (accentColor) {
        document.documentElement.style.setProperty('--paragraph-accent-color', accentColor);
      }
      return Story();
    },
  ],
  parameters: {
    layout: 'padded',
    controls: {
      include: ['defaultColor', 'mutedColor', 'accentColor'],
    },
  },
}

// Weight variants story
export const WeightVariants: Story = {
  render: ({ size = 'base', color = 'default' }) => (
    <div className="space-y-4">
      <div>
        <Paragraph size={size} color={color} weight="normal">
          Normal Weight - This paragraph demonstrates normal font weight for regular text.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">weight="normal" (default)</p>
      </div>
      <div>
        <Paragraph size={size} color={color} weight="medium">
          Medium Weight - This paragraph demonstrates medium font weight for emphasis.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">weight="medium"</p>
      </div>
      <div>
        <Paragraph size={size} color={color} weight="semibold">
          Semibold Weight - This paragraph demonstrates semibold font weight for strong emphasis.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">weight="semibold"</p>
      </div>
      <div>
        <Paragraph size={size} color={color} weight="bold">
          Bold Weight - This paragraph demonstrates bold font weight for maximum emphasis.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">weight="bold"</p>
      </div>
    </div>
  ),
  args: {
    size: 'base',
    color: 'default',
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily'],
    },
  },
}

// Line height variants story
export const LineHeightVariants: Story = {
  render: ({ size = 'base', color = 'default' }) => (
    <div className="space-y-6">
      <div>
        <Paragraph size={size} color={color} lineHeight="tight">
          Tight Line Height - This paragraph demonstrates tight line height which reduces the space between lines for a more compact appearance. It's useful when you need to conserve vertical space.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">lineHeight="tight"</p>
      </div>
      <div>
        <Paragraph size={size} color={color} lineHeight="normal">
          Normal Line Height - This paragraph demonstrates normal line height which provides balanced spacing between lines for good readability. This is the default setting that works well for most content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">lineHeight="normal" (default)</p>
      </div>
      <div>
        <Paragraph size={size} color={color} lineHeight="relaxed">
          Relaxed Line Height - This paragraph demonstrates relaxed line height which increases the space between lines for improved readability and a more open, airy feeling in longer text blocks.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">lineHeight="relaxed"</p>
      </div>
      <div>
        <Paragraph size={size} color={color} lineHeight="loose">
          Loose Line Height - This paragraph demonstrates loose line height which provides maximum space between lines for enhanced readability, particularly useful for accessibility or when working with larger text sizes.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">lineHeight="loose"</p>
      </div>
    </div>
  ),
  args: {
    size: 'base',
    color: 'default',
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily'],
    },
  },
}

// Max width and alignment demonstration
export const LayoutVariants: Story = {
  render: ({ size = 'base', color = 'default' }) => (
    <div className="w-full space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Max Width Variants</h3>
        <div className="space-y-4">
          <div>
            <Paragraph size={size} color={color} maxWidth="none" className="bg-muted/20 p-4">
              No Max Width - This paragraph has no width constraint and will expand to fill the full width of its container, which can make it harder to read on very wide screens.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">maxWidth="none"</p>
          </div>
          <div>
            <Paragraph size={size} color={color} maxWidth="prose" className="bg-muted/20 p-4">
              Prose Width - This paragraph is constrained to an optimal reading width (around 65 characters) which is considered ideal for readability in longer text blocks.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">maxWidth="prose"</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Alignment</h3>
        <div className="space-y-4">
          <div>
            <Paragraph size={size} color={color} align="left" className="bg-muted/20 p-4">
              Left Aligned - This paragraph is aligned to the left, which is the default and most common alignment for body text.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">align="left" (default)</p>
          </div>
          <div>
            <Paragraph size={size} color={color} align="center" className="bg-muted/20 p-4">
              Center Aligned - This paragraph is center aligned, often used for headings or special callout text.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">align="center"</p>
          </div>
          <div>
            <Paragraph size={size} color={color} align="right" className="bg-muted/20 p-4">
              Right Aligned - This paragraph is right aligned, less common but useful for specific design layouts.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">align="right"</p>
          </div>
          <div>
            <Paragraph size={size} color={color} align="justify" className="bg-muted/20 p-4">
              Justified Text - This paragraph uses justified alignment, where text is stretched to align with both left and right margins, creating even edges on both sides but can sometimes create awkward spacing.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">align="justify"</p>
          </div>
        </div>
      </div>
    </div>
  ),
  args: {
    size: 'base',
    color: 'default',
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily'],
    },
  },
}

// Font family variants
export const FontFamilyVariants: Story = {
  render: ({ size = 'base', color = 'default' }) => (
    <div className="space-y-4">
      <div>
        <Paragraph size={size} color={color} fontFamily="sans">
          Sans Serif - This paragraph uses a sans-serif font family, which is clean and modern. It's the default choice for most web content and provides excellent readability on screens.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">fontFamily="sans" (default)</p>
      </div>
      <div>
        <Paragraph size={size} color={color} fontFamily="serif">
          Serif - This paragraph uses a serif font family, which has decorative strokes that can give a more traditional, formal, or literary feel to your content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">fontFamily="serif"</p>
      </div>
      <div>
        <Paragraph size={size} color={color} fontFamily="mono">
          Monospace - This paragraph uses a monospace font family where each character takes up the same width. It's commonly used for code, technical content, or when you need precise character alignment.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">fontFamily="mono"</p>
      </div>
    </div>
  ),
  args: {
    size: 'base',
    color: 'default',
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily'],
    },
  },
}