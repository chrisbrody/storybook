import type { Meta, StoryObj } from '@storybook/react'
import { Blockquote } from './Blockquote'

const meta = {
  title: 'Components/Typography/Blockquote',
  component: Blockquote,
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
      description: 'The blockquote text content.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg', 'xl', '2xl'],
      description: 'Size variant for the blockquote text.',
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
      description: 'Color variant for the blockquote text.',
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
      options: ['left', 'center', 'right'],
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
        defaultValue: { summary: 'serif' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'sidebar'],
      description: 'Style variant - default uses configurable borders, sidebar uses shadcn/ui style.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    borderPosition: {
      control: 'select',
      options: ['left', 'top', 'none'],
      description: 'Position of the decorative border (applies to default variant only).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    borderColor: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'muted', 'custom'],
      description: 'Color of the border/sidebar.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    customBorderColor: {
      control: { type: 'color' },
      description: 'Custom border color (when borderColor is set to "custom").',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#3b82f6' },
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
    text: '"The transformation of this Minnetonka residence exemplifies our commitment to creating spaces that seamlessly blend luxury with functionality, resulting in an environment that truly reflects our clients\' sophisticated lifestyle."',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'serif',
    variant: 'default',
    borderPosition: 'left',
    borderColor: 'default',
    customBorderColor: '#3b82f6',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof Blockquote>

export default meta
type Story = StoryObj<typeof meta>

// Docs story with color controls (this will be the primary docs example)
export const Docs: Story = {
  args: {
    text: '"This blockquote component showcases testimonials and highlighted quotes with elegant typography and customizable styling options."',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'prose',
    align: 'left',
    fontFamily: 'serif',
    variant: 'default',
    borderPosition: 'left',
    borderColor: 'default',
    customBorderColor: '#3b82f6',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
  decorators: [
    (Story, context) => {
      const { defaultColor, mutedColor, accentColor } = context.args;
      if (defaultColor) {
        document.documentElement.style.setProperty('--blockquote-default-color', defaultColor);
      }
      if (mutedColor) {
        document.documentElement.style.setProperty('--blockquote-muted-color', mutedColor);
      }
      if (accentColor) {
        document.documentElement.style.setProperty('--blockquote-accent-color', accentColor);
      }
      return Story();
    },
  ],
}

// Primary story with core controls
export const Primary: Story = {
  render: (args) => <Blockquote {...args} />,
  args: {
    text: '"Working with Eminent Interior Design transformed not just our space, but our entire lifestyle. Their attention to detail and understanding of luxury living is unmatched."',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'serif',
    variant: 'default',
    borderPosition: 'left',
    borderColor: 'default',
    customBorderColor: '#3b82f6',
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
        <Blockquote {...args} />
      </div>
      <div className="text-xs text-gray-500">
        <p><strong>Current settings:</strong></p>
        <p>Size: {args.size}, Weight: {args.weight}, Color: {args.color}</p>
        <p>Line Height: {args.lineHeight}, Font: {args.fontFamily}, Align: {args.align}</p>
        <p>Variant: {args.variant}, Border Position: {args.borderPosition}, Border Color: {args.borderColor}</p>
      </div>
    </div>
  ),
  args: {
    text: '"Change the controls above and watch this blockquote transform! Try different variants, sizes, weights, colors, and border options."',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'serif',
    variant: 'default',
    borderPosition: 'left',
    borderColor: 'default',
    customBorderColor: '#3b82f6',
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
    fontFamily: 'serif',
    borderPosition: 'left',
    maxWidth: 'none',
  },
  render: (args) => {
    const { color, weight, lineHeight, align, fontFamily, borderPosition, maxWidth } = args;
    return (
      <div className="space-y-6">
        <div>
          <Blockquote size="sm" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} borderPosition={borderPosition} maxWidth={maxWidth}
            text='"Small (14px) - This luxury bathroom renovation exceeded our expectations in every way."' />
          <p className="text-xs text-muted-foreground mt-1">size="sm"</p>
        </div>
        <div>
          <Blockquote size="base" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} borderPosition={borderPosition} maxWidth={maxWidth}
            text='"Base (16px) - The contemporary kitchen transformation perfectly balances style and functionality for our family."' />
          <p className="text-xs text-muted-foreground mt-1">size="base" (default)</p>
        </div>
        <div>
          <Blockquote size="lg" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} borderPosition={borderPosition} maxWidth={maxWidth}
            text='"Large (18px) - This award-winning living space design has become the heart of our home."' />
          <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
        </div>
        <div>
          <Blockquote size="xl" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} borderPosition={borderPosition} maxWidth={maxWidth}
            text='"Extra Large (20px) - The custom millwork and premium materials showcase true craftsmanship."' />
          <p className="text-xs text-muted-foreground mt-1">size="xl"</p>
        </div>
        <div>
          <Blockquote size="2xl" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} borderPosition={borderPosition} maxWidth={maxWidth}
            text='"2X Large (24px) - A sophisticated transformation that reflects our luxury lifestyle."' />
          <p className="text-xs text-muted-foreground mt-1">size="2xl"</p>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'size', 'maxWidth', 'align', 'fontFamily', 'borderPosition'],
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
    fontFamily: 'serif',
    borderPosition: 'left',
    maxWidth: 'none',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
  render: (args) => (
    <div className="space-y-6">
      <div>
        <Blockquote {...args} color="default" 
          text='"Default Color - This contemporary kitchen transformation showcases our commitment to excellence in luxury design."' />
        <p className="text-xs text-muted-foreground mt-1">color="default"</p>
      </div>
      <div>
        <Blockquote {...args} color="muted"
          text='"Muted Color - The attention to detail in this bathroom renovation is simply remarkable and sophisticated."' />
        <p className="text-xs text-muted-foreground mt-1">color="muted"</p>
      </div>
      <div>
        <Blockquote {...args} color="accent"
          text='"Accent Color - This award-winning design has transformed our home into a true masterpiece of luxury living."' />
        <p className="text-xs text-muted-foreground mt-1">color="accent"</p>
      </div>
    </div>
  ),
  decorators: [
    (Story, context) => {
      const { defaultColor, mutedColor, accentColor } = context.args;
      if (defaultColor) {
        document.documentElement.style.setProperty('--blockquote-default-color', defaultColor);
      }
      if (mutedColor) {
        document.documentElement.style.setProperty('--blockquote-muted-color', mutedColor);
      }
      if (accentColor) {
        document.documentElement.style.setProperty('--blockquote-accent-color', accentColor);
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

// Variant comparison story
export const VariantComparison: Story = {
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'serif',
    maxWidth: 'none',
    borderColor: 'default',
    customBorderColor: '#3b82f6',
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Style Variants</h3>
        <div className="space-y-6">
          <div>
            <Blockquote {...args} variant="default" borderPosition="left"
              text='"Default Variant - This contemporary kitchen transformation uses the traditional blockquote style with customizable border positions and colors."' />
            <p className="text-xs text-muted-foreground mt-1">variant="default"</p>
          </div>
          <div>
            <Blockquote {...args} variant="sidebar"
              text='"Sidebar Variant - This luxury bathroom renovation uses the shadcn/ui inspired sidebar style with a clean left border."' />
            <p className="text-xs text-muted-foreground mt-1">variant="sidebar"</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'variant', 'borderPosition'],
    },
  },
}

// Border color variants
export const BorderColorVariants: Story = {
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'serif',
    variant: 'sidebar',
    maxWidth: 'none',
    customBorderColor: '#8b5cf6',
  },
  render: (args) => (
    <div className="space-y-6">
      <div>
        <Blockquote {...args} borderColor="default"
          text='"Default Border - This contemporary kitchen uses the theme default border color for subtle emphasis."' />
        <p className="text-xs text-muted-foreground mt-1">borderColor="default"</p>
      </div>
      <div>
        <Blockquote {...args} borderColor="primary"
          text='"Primary Border - This luxury renovation uses the primary theme color for brand consistency."' />
        <p className="text-xs text-muted-foreground mt-1">borderColor="primary"</p>
      </div>
      <div>
        <Blockquote {...args} borderColor="accent"
          text='"Accent Border - This award-winning design uses the accent color for highlighted testimonials."' />
        <p className="text-xs text-muted-foreground mt-1">borderColor="accent"</p>
      </div>
      <div>
        <Blockquote {...args} borderColor="muted"
          text='"Muted Border - This sophisticated transformation uses a muted border for understated elegance."' />
        <p className="text-xs text-muted-foreground mt-1">borderColor="muted"</p>
      </div>
      <div>
        <Blockquote {...args} borderColor="custom"
          text='"Custom Border - This premium project showcases a custom purple border color for unique branding."' />
        <p className="text-xs text-muted-foreground mt-1">borderColor="custom" (customBorderColor="{args.customBorderColor}")</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      include: ['customBorderColor'],
    },
  },
}

// Border position variants
export const BorderVariants: Story = {
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'serif',
    maxWidth: 'none',
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <Blockquote {...args} borderPosition="left"
          text='"Left Border - This contemporary kitchen remodel features an elegant left border that frames the testimonial beautifully."' />
        <p className="text-xs text-muted-foreground mt-1">borderPosition="left" (default)</p>
      </div>
      <div>
        <Blockquote {...args} borderPosition="top"
          text='"Top Border - This luxury bathroom transformation uses a top border design that creates a sophisticated header effect."' />
        <p className="text-xs text-muted-foreground mt-1">borderPosition="top"</p>
      </div>
      <div>
        <Blockquote {...args} borderPosition="none"
          text='"No Border - This award-winning living space design stands elegantly on its own without decorative borders."' />
        <p className="text-xs text-muted-foreground mt-1">borderPosition="none"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'borderPosition', 'lineHeight', 'maxWidth', 'align', 'fontFamily'],
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
    borderPosition: 'left',
    maxWidth: 'none',
  },
  render: (args) => (
    <div className="space-y-6">
      <div>
        <Blockquote {...args} fontFamily="serif"
          text='"Serif Font - This contemporary kitchen transformation uses elegant serif typography that conveys sophistication and timeless luxury."' />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="serif" (default)</p>
      </div>
      <div>
        <Blockquote {...args} fontFamily="sans"
          text='"Sans Serif Font - This award-winning bathroom renovation uses clean, modern sans-serif typography for contemporary appeal."' />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="sans"</p>
      </div>
      <div>
        <Blockquote {...args} fontFamily="playfair"
          text='"Playfair Display - This luxury living space transformation uses elegant Playfair Display for a refined, editorial feel."' />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="playfair"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily', 'borderPosition'],
    },
  },
}

// Layout variants with alignment and max width
export const LayoutVariants: Story = {
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    fontFamily: 'serif',
    borderPosition: 'left',
  },
  render: (args) => (
    <div className="w-full space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Alignment</h3>
        <div className="space-y-6">
          <div>
            <Blockquote {...args} align="left" className="bg-muted/20 p-4"
              text='"Left Aligned - This award-winning kitchen design testimonial uses left alignment, which is the standard for most luxury design content."' />
            <p className="text-xs text-muted-foreground mt-1">align="left" (default)</p>
          </div>
          <div>
            <Blockquote {...args} align="center" className="bg-muted/20 p-4"
              text='"Center Aligned - This elegant bathroom transformation quote is center aligned for dramatic emphasis and visual impact."' />
            <p className="text-xs text-muted-foreground mt-1">align="center"</p>
          </div>
          <div>
            <Blockquote {...args} align="right" className="bg-muted/20 p-4"
              text='"Right Aligned - This sophisticated living space testimonial uses right alignment for unique layout compositions."' />
            <p className="text-xs text-muted-foreground mt-1">align="right"</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Max Width Variants</h3>
        <div className="space-y-6">
          <div>
            <Blockquote {...args} maxWidth="none" className="bg-muted/20 p-4"
              text='"No Max Width - This contemporary transformation testimonial has no width constraint and expands to fill the available space for bold design statements."' />
            <p className="text-xs text-muted-foreground mt-1">maxWidth="none"</p>
          </div>
          <div>
            <Blockquote {...args} maxWidth="prose" className="bg-muted/20 p-4"
              text='"Prose Width - This luxury renovation quote is constrained to optimal reading width (around 65 characters) for enhanced readability and elegant presentation."' />
            <p className="text-xs text-muted-foreground mt-1">maxWidth="prose"</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily', 'borderPosition'],
    },
  },
}