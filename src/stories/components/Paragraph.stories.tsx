import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from './Paragraph'

const meta = {
  title: 'Components/Paragraph',
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
      options: [
        'sans', 'serif', 'mono', 'inter', 'playfair', 'montserrat', 'poppins',
        'dancing', 'greatvibes', 'pacifico', 'anton', 'bebas', 'sourcecodepro'
      ],
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
    text: 'This contemporary kitchen remodel in Minnetonka represents a complete transformation from a dated, compartmentalized space into an open, light-filled hub of the home.',
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
  render: (args) => <Paragraph {...args} />,
  args: {
    text: 'Our design approach focused on creating seamless flow between cooking, dining, and entertaining areas while maximizing both functionality and aesthetic appeal.',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
  },
  parameters: {
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'className'],
    },
  },
}

// Test Controls - Simple story to verify all controls work
export const TestControls: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="p-4 border border-gray-200 rounded">
        <h3 className="text-sm font-semibold mb-2">Test all controls below:</h3>
        <Paragraph {...args} />
      </div>
      <div className="text-xs text-gray-500">
        <p><strong>Current settings:</strong></p>
        <p>Size: {args.size}, Weight: {args.weight}, Color: {args.color}</p>
        <p>Line Height: {args.lineHeight}, Font: {args.fontFamily}, Align: {args.align}</p>
      </div>
    </div>
  ),
  args: {
    text: 'Change the controls above and watch this text transform! Try different sizes, weights, colors, and alignments.',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
  },
  parameters: {
    layout: 'padded',
  },
}

// All sizes demonstration
export const AllSizes: Story = {
  args: {
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'sans',
    maxWidth: 'none',
  },
  render: (args) => {
    const { color, weight, lineHeight, align, fontFamily, maxWidth } = args;
    return (
      <div className="space-y-4">
        <div>
          <Paragraph size="xs" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth}
            text="Extra Small (12px) - This contemporary kitchen remodel demonstrates the xs size variant." />
          <p className="text-xs text-muted-foreground mt-1">size="xs"</p>
        </div>
        <div>
          <Paragraph size="sm" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth}
            text="Small (14px) - This luxury bathroom renovation demonstrates the sm size variant." />
          <p className="text-xs text-muted-foreground mt-1">size="sm"</p>
        </div>
        <div>
          <Paragraph size="base" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth}
            text="Base (16px) - This award-winning living space design demonstrates the base size variant, which is the default." />
          <p className="text-xs text-muted-foreground mt-1">size="base" (default)</p>
        </div>
        <div>
          <Paragraph size="lg" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth}
            text="Large (18px) - This custom millwork project demonstrates the lg size variant for emphasis." />
          <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
        </div>
        <div>
          <Paragraph size="xl" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth}
            text="Extra Large (20px) - This premium material selection demonstrates the xl size variant." />
          <p className="text-xs text-muted-foreground mt-1">size="xl"</p>
        </div>
        <div>
          <Paragraph size="2xl" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth}
            text="2X Large (24px) - This sophisticated transformation demonstrates the 2xl size variant." />
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
    size: 'base',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'sans',
    maxWidth: 'none',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
  render: (args) => (
    <div className="space-y-4">
      <div>
        <Paragraph {...args} color="default" 
          text="Default Color - This contemporary kitchen transformation uses the default text color for primary content." />
        <p className="text-xs text-muted-foreground mt-1">color="default"</p>
      </div>
      <div>
        <Paragraph {...args} color="muted"
          text="Muted Color - This luxury bathroom renovation uses muted text color for secondary content." />
        <p className="text-xs text-muted-foreground mt-1">color="muted"</p>
      </div>
      <div>
        <Paragraph {...args} color="accent"
          text="Accent Color - This award-winning design uses the accent/brand color for highlighted content." />
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
  args: {
    size: 'base',
    color: 'default',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'sans',
    maxWidth: 'none',
  },
  render: (args) => (
    <div className="space-y-4">
      <div>
        <Paragraph {...args} weight="normal"
          text="Normal Weight - This contemporary kitchen transformation demonstrates normal font weight for regular text." />
        <p className="text-xs text-muted-foreground mt-1">weight="normal" (default)</p>
      </div>
      <div>
        <Paragraph {...args} weight="medium"
          text="Medium Weight - This luxury bathroom renovation demonstrates medium font weight for emphasis." />
        <p className="text-xs text-muted-foreground mt-1">weight="medium"</p>
      </div>
      <div>
        <Paragraph {...args} weight="semibold"
          text="Semibold Weight - This custom millwork project demonstrates semibold font weight for strong emphasis." />
        <p className="text-xs text-muted-foreground mt-1">weight="semibold"</p>
      </div>
      <div>
        <Paragraph {...args} weight="bold"
          text="Bold Weight - This award-winning design demonstrates bold font weight for maximum emphasis." />
        <p className="text-xs text-muted-foreground mt-1">weight="bold"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily'],
    },
  },
}

// Line height variants story
export const LineHeightVariants: Story = {
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    align: 'left',
    fontFamily: 'sans',
    maxWidth: 'none',
  },
  render: (args) => (
    <div className="space-y-6">
      <div>
        <Paragraph {...args} lineHeight="tight"
          text="Tight Line Height - This contemporary kitchen remodel demonstrates tight line height which reduces the space between lines for a more compact appearance in luxury design presentations." />
        <p className="text-xs text-muted-foreground mt-1">lineHeight="tight"</p>
      </div>
      <div>
        <Paragraph {...args} lineHeight="normal"
          text="Normal Line Height - This award-winning bathroom renovation demonstrates normal line height which provides balanced spacing between lines for good readability in premium design content." />
        <p className="text-xs text-muted-foreground mt-1">lineHeight="normal" (default)</p>
      </div>
      <div>
        <Paragraph {...args} lineHeight="relaxed"
          text="Relaxed Line Height - This custom millwork project demonstrates relaxed line height which increases the space between lines for improved readability and a more open, airy feeling in sophisticated design portfolios." />
        <p className="text-xs text-muted-foreground mt-1">lineHeight="relaxed"</p>
      </div>
      <div>
        <Paragraph {...args} lineHeight="loose"
          text="Loose Line Height - This luxury living space transformation demonstrates loose line height which provides maximum space between lines for enhanced readability in high-end interior design presentations." />
        <p className="text-xs text-muted-foreground mt-1">lineHeight="loose"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily'],
    },
  },
}

// Max width and alignment demonstration
export const LayoutVariants: Story = {
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    fontFamily: 'sans',
  },
  render: (args) => (
    <div className="w-full space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Max Width Variants</h3>
        <div className="space-y-4">
          <div>
            <Paragraph {...args} maxWidth="none" className="bg-muted/20 p-4"
              text="No Max Width - This contemporary kitchen transformation has no width constraint and will expand to fill the full width of its container for bold design statements." />
            <p className="text-xs text-muted-foreground mt-1">maxWidth="none"</p>
          </div>
          <div>
            <Paragraph {...args} maxWidth="prose" className="bg-muted/20 p-4"
              text="Prose Width - This luxury bathroom renovation is constrained to an optimal reading width (around 65 characters) which is considered ideal for readability in sophisticated design content." />
            <p className="text-xs text-muted-foreground mt-1">maxWidth="prose"</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Alignment</h3>
        <div className="space-y-4">
          <div>
            <Paragraph {...args} align="left" className="bg-muted/20 p-4"
              text="Left Aligned - This award-winning living space is aligned to the left, which is the default and most common alignment for premium design content." />
            <p className="text-xs text-muted-foreground mt-1">align="left" (default)</p>
          </div>
          <div>
            <Paragraph {...args} align="center" className="bg-muted/20 p-4"
              text="Center Aligned - This custom millwork project is center aligned, often used for elegant headings or special design callouts." />
            <p className="text-xs text-muted-foreground mt-1">align="center"</p>
          </div>
          <div>
            <Paragraph {...args} align="right" className="bg-muted/20 p-4"
              text="Right Aligned - This luxury material selection is right aligned, less common but useful for sophisticated design layouts." />
            <p className="text-xs text-muted-foreground mt-1">align="right"</p>
          </div>
          <div>
            <Paragraph {...args} align="justify" className="bg-muted/20 p-4"
              text="Justified Text - This premium interior transformation uses justified alignment, where text is stretched to align with both left and right margins, creating even edges for formal design presentations." />
            <p className="text-xs text-muted-foreground mt-1">align="justify"</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily'],
    },
  },
}

// Font family variants
export const FontFamilyVariants: Story = {
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    maxWidth: 'none',
  },
  render: (args) => (
    <div className="space-y-4">
      <div>
        <Paragraph {...args} fontFamily="sans"
          text="Sans Serif - This contemporary kitchen remodel uses a clean, modern sans-serif font family. It's the default choice for luxury interior design content and provides excellent readability." />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="sans" (default)</p>
      </div>
      <div>
        <Paragraph {...args} fontFamily="serif"
          text="Serif - This award-winning bathroom transformation uses an elegant serif font family with decorative strokes that give a sophisticated, formal feel perfect for luxury design presentations." />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="serif"</p>
      </div>
      <div>
        <Paragraph {...args} fontFamily="mono"
          text="Monospace - This custom millwork project uses a monospace font family where each character takes the same width. Perfect for technical specifications and precise measurements in design documentation." />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="mono"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily'],
    },
  },
}