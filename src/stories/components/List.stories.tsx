import type { Meta, StoryObj } from '@storybook/react'
import { List } from './List'

const meta = {
  title: 'Components/List',
  component: List,
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
    items: {
      control: { type: 'object' },
      description: 'Array of list items as strings.',
      table: {
        type: { summary: 'string[]' },
      },
    },
    variant: {
      control: 'select',
      options: ['unordered', 'ordered'],
      description: 'List type - unordered (ul) or ordered (ol).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'unordered' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg', 'xl'],
      description: 'Size variant for the list text.',
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
      options: ['default', 'muted', 'accent'],
      description: 'Color variant for the list text.',
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
    markerStyle: {
      control: 'select',
      options: ['disc', 'circle', 'square', 'none'],
      description: 'List marker style for unordered lists.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'disc' },
      },
    },
    orderStyle: {
      control: 'select',
      options: ['decimal', 'lower-alpha', 'upper-alpha', 'lower-roman', 'upper-roman'],
      description: 'List marker style for ordered lists.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'decimal' },
      },
    },
    itemSpacing: {
      control: 'select',
      options: ['tight', 'normal', 'relaxed'],
      description: 'Spacing between list items.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    indent: {
      control: 'select',
      options: ['none', 'sm', 'base', 'lg'],
      description: 'Left margin/indentation for the list.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
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
    items: [
      'Contemporary kitchen design with premium finishes',
      'Luxury bathroom renovation with spa-like features',
      'Custom millwork and built-in storage solutions',
      'Award-winning living space transformation'
    ],
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    markerStyle: 'disc',
    orderStyle: 'decimal',
    itemSpacing: 'normal',
    indent: 'base',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

// Docs story with color controls (this will be the primary docs example)
export const Docs: Story = {
  args: {
    items: [
      'This list component showcases design services with customizable typography',
      'Perfect for displaying project features, benefits, or service offerings',
      'Supports both ordered and unordered list variants with full control'
    ],
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'prose',
    fontFamily: 'sans',
    markerStyle: 'disc',
    orderStyle: 'decimal',
    itemSpacing: 'normal',
    indent: 'base',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
  decorators: [
    (Story, context) => {
      const { defaultColor, mutedColor, accentColor } = context.args;
      if (defaultColor) {
        document.documentElement.style.setProperty('--list-default-color', defaultColor);
      }
      if (mutedColor) {
        document.documentElement.style.setProperty('--list-muted-color', mutedColor);
      }
      if (accentColor) {
        document.documentElement.style.setProperty('--list-accent-color', accentColor);
      }
      return Story();
    },
  ],
}

// Primary story with core controls
export const Primary: Story = {
  render: (args) => <List {...args} />,
  args: {
    items: [
      'Space planning and design consultation',
      'Custom furniture selection and sourcing',
      'Premium material and finish specifications',
      'Project management and installation oversight'
    ],
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    markerStyle: 'disc',
    orderStyle: 'decimal',
    itemSpacing: 'normal',
    indent: 'base',
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
        <List {...args} />
      </div>
      <div className="text-xs text-gray-500">
        <p><strong>Current settings:</strong></p>
        <p>Variant: {args.variant}, Size: {args.size}, Weight: {args.weight}, Color: {args.color}</p>
        <p>Marker: {args.variant === 'unordered' ? args.markerStyle : args.orderStyle}, Spacing: {args.itemSpacing}, Indent: {args.indent}</p>
      </div>
    </div>
  ),
  args: {
    items: [
      'Change the controls above and watch this list transform!',
      'Try different variants, sizes, weights, and marker styles',
      'Experiment with spacing and indentation options'
    ],
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    markerStyle: 'disc',
    orderStyle: 'decimal',
    itemSpacing: 'normal',
    indent: 'base',
  },
  parameters: {
    layout: 'padded',
  },
}

// Variant comparison
export const VariantComparison: Story = {
  args: {
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    itemSpacing: 'normal',
    indent: 'base',
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">List Variants</h3>
        <div className="space-y-6">
          <div>
            <List {...args} variant="unordered" markerStyle="disc"
              items={[
                'Unordered List - Contemporary kitchen design concepts',
                'Luxury bathroom renovation planning',
                'Custom millwork and cabinetry solutions'
              ]} />
            <p className="text-xs text-muted-foreground mt-1">variant="unordered"</p>
          </div>
          <div>
            <List {...args} variant="ordered" orderStyle="decimal"
              items={[
                'Ordered List - Initial design consultation',
                'Space planning and concept development',
                'Material selection and project execution'
              ]} />
            <p className="text-xs text-muted-foreground mt-1">variant="ordered"</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'items', 'className', 'variant', 'markerStyle', 'orderStyle'],
    },
  },
}

// Marker style variants
export const MarkerStyles: Story = {
  args: {
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    itemSpacing: 'normal',
    indent: 'base',
  },
  render: (args) => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Unordered List Markers</h3>
        <div className="space-y-4">
          <div>
            <List {...args} markerStyle="disc"
              items={['Disc markers for luxury kitchen designs', 'Premium bathroom renovations', 'Custom living spaces']} />
            <p className="text-xs text-muted-foreground mt-1">markerStyle="disc"</p>
          </div>
          <div>
            <List {...args} markerStyle="circle"
              items={['Circle markers for contemporary projects', 'Modern interior transformations', 'Sophisticated material selections']} />
            <p className="text-xs text-muted-foreground mt-1">markerStyle="circle"</p>
          </div>
          <div>
            <List {...args} markerStyle="square"
              items={['Square markers for minimalist designs', 'Clean architectural elements', 'Geometric design principles']} />
            <p className="text-xs text-muted-foreground mt-1">markerStyle="square"</p>
          </div>
          <div>
            <List {...args} markerStyle="none"
              items={['No markers for clean layouts', 'Minimal design aesthetics', 'Streamlined content presentation']} />
            <p className="text-xs text-muted-foreground mt-1">markerStyle="none"</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'items', 'className', 'markerStyle', 'variant', 'orderStyle'],
    },
  },
}

// Order style variants
export const OrderStyles: Story = {
  args: {
    variant: 'ordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    itemSpacing: 'normal',
    indent: 'base',
  },
  render: (args) => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Ordered List Styles</h3>
        <div className="space-y-4">
          <div>
            <List {...args} orderStyle="decimal"
              items={['Initial design consultation', 'Space planning phase', 'Implementation and styling']} />
            <p className="text-xs text-muted-foreground mt-1">orderStyle="decimal"</p>
          </div>
          <div>
            <List {...args} orderStyle="lower-alpha"
              items={['Kitchen renovation steps', 'Bathroom design process', 'Living space transformation']} />
            <p className="text-xs text-muted-foreground mt-1">orderStyle="lower-alpha"</p>
          </div>
          <div>
            <List {...args} orderStyle="upper-alpha"
              items={['Premium material selection', 'Custom furniture sourcing', 'Final installation details']} />
            <p className="text-xs text-muted-foreground mt-1">orderStyle="upper-alpha"</p>
          </div>
          <div>
            <List {...args} orderStyle="lower-roman"
              items={['Traditional design elements', 'Classical architectural features', 'Timeless luxury finishes']} />
            <p className="text-xs text-muted-foreground mt-1">orderStyle="lower-roman"</p>
          </div>
          <div>
            <List {...args} orderStyle="upper-roman"
              items={['Formal presentation guidelines', 'Executive office designs', 'Corporate interior standards']} />
            <p className="text-xs text-muted-foreground mt-1">orderStyle="upper-roman"</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'items', 'className', 'orderStyle', 'variant', 'markerStyle'],
    },
  },
}

// Spacing and indentation variants
export const SpacingAndIndentation: Story = {
  args: {
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    markerStyle: 'disc',
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Item Spacing</h3>
        <div className="space-y-6">
          <div>
            <List {...args} itemSpacing="tight" indent="base"
              items={['Tight spacing for compact layouts', 'Efficient use of vertical space', 'Dense information presentation']} />
            <p className="text-xs text-muted-foreground mt-1">itemSpacing="tight"</p>
          </div>
          <div>
            <List {...args} itemSpacing="normal" indent="base"
              items={['Normal spacing for standard readability', 'Balanced vertical rhythm', 'Comfortable content consumption']} />
            <p className="text-xs text-muted-foreground mt-1">itemSpacing="normal" (default)</p>
          </div>
          <div>
            <List {...args} itemSpacing="relaxed" indent="base"
              items={['Relaxed spacing for enhanced readability', 'Generous vertical breathing room', 'Premium content presentation']} />
            <p className="text-xs text-muted-foreground mt-1">itemSpacing="relaxed"</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Indentation Levels</h3>
        <div className="space-y-6">
          <div>
            <List {...args} itemSpacing="normal" indent="none"
              items={['No indentation for flush alignment', 'Clean minimal presentation', 'Direct content hierarchy']} />
            <p className="text-xs text-muted-foreground mt-1">indent="none"</p>
          </div>
          <div>
            <List {...args} itemSpacing="normal" indent="sm"
              items={['Small indentation for subtle offset', 'Gentle visual separation', 'Compact design approach']} />
            <p className="text-xs text-muted-foreground mt-1">indent="sm"</p>
          </div>
          <div>
            <List {...args} itemSpacing="normal" indent="base"
              items={['Base indentation for standard lists', 'Classic typography spacing', 'Familiar reading experience']} />
            <p className="text-xs text-muted-foreground mt-1">indent="base" (default)</p>
          </div>
          <div>
            <List {...args} itemSpacing="normal" indent="lg"
              items={['Large indentation for emphasis', 'Clear content separation', 'Sophisticated layout design']} />
            <p className="text-xs text-muted-foreground mt-1">indent="lg"</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'items', 'className', 'itemSpacing', 'indent', 'orderStyle'],
    },
  },
}

// Size variants
export const SizeVariants: Story = {
  args: {
    variant: 'unordered',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    markerStyle: 'disc',
    itemSpacing: 'normal',
    indent: 'base',
  },
  render: (args) => (
    <div className="space-y-6">
      <div>
        <List {...args} size="sm"
          items={['Small (14px) - Compact luxury service details', 'Premium finishes and materials', 'Sophisticated design elements']} />
        <p className="text-xs text-muted-foreground mt-1">size="sm"</p>
      </div>
      <div>
        <List {...args} size="base"
          items={['Base (16px) - Standard interior design services', 'Contemporary kitchen transformations', 'Award-winning bathroom renovations']} />
        <p className="text-xs text-muted-foreground mt-1">size="base" (default)</p>
      </div>
      <div>
        <List {...args} size="lg"
          items={['Large (18px) - Featured design offerings', 'Custom millwork and built-ins', 'Luxury living space concepts']} />
        <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
      </div>
      <div>
        <List {...args} size="xl"
          items={['Extra Large (20px) - Premium service highlights', 'Exclusive design consultations', 'High-end project management']} />
        <p className="text-xs text-muted-foreground mt-1">size="xl"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'items', 'className', 'size', 'orderStyle'],
    },
  },
}