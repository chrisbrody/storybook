import type { Meta, StoryObj } from '@storybook/react'
import { Caption } from './Caption'

const meta = {
  title: 'Components/Caption',
  component: Caption,
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
      description: 'The caption text content.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm'],
      description: 'Size variant for the caption text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
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
      description: 'Color variant for the caption text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'muted' },
      },
    },
    lineHeight: {
      control: 'select',
      options: ['tight', 'normal', 'relaxed'],
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
        defaultValue: { summary: 'sans' },
      },
    },
    italic: {
      control: 'boolean',
      description: 'Whether the caption text should be italicized.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    text: 'Contemporary kitchen renovation featuring custom cabinetry and premium quartz countertops - Minnetonka Project, 2024',
    size: 'sm',
    weight: 'normal',
    color: 'muted',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
    italic: false,
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof Caption>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Award-winning luxury bathroom design with spa-inspired elements and custom marble vanity',
    size: 'sm',
    weight: 'normal',
    color: 'muted',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
    italic: false,
  },
}

export const WithImages: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Single Image Caption</h3>
        <figure className="max-w-md">
          <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Kitchen Image]
          </div>
          <Caption {...args} 
            text="Modern kitchen featuring waterfall quartz countertops and custom white oak cabinetry" />
        </figure>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Center Aligned Caption</h3>
        <figure className="max-w-md">
          <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Bathroom Image]
          </div>
          <Caption {...args} align="center" italic={true}
            text="Luxury master bathroom with freestanding soaking tub and marble tile surround" />
        </figure>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Gallery Caption</h3>
        <figure className="max-w-lg">
          <div className="grid grid-cols-2 gap-2">
            <div className="h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
              [Before]
            </div>
            <div className="h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
              [After]
            </div>
          </div>
          <Caption {...args} align="center" weight="medium"
            text="Before and after: Complete transformation of 1980s kitchen into contemporary culinary workspace" />
        </figure>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'align', 'italic', 'weight'],
    },
  },
}

export const StyleVariants: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div>
        <figure className="max-w-sm">
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Project Image]
          </div>
          <Caption {...args} color="default" weight="normal"
            text="Default color and weight for standard project documentation" />
        </figure>
        <p className="text-xs text-muted-foreground mt-1">color="default", weight="normal"</p>
      </div>

      <div>
        <figure className="max-w-sm">
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Featured Image]
          </div>
          <Caption {...args} color="muted" weight="medium" italic={true}
            text="Muted color with medium weight and italic styling for elegant presentation" />
        </figure>
        <p className="text-xs text-muted-foreground mt-1">color="muted", weight="medium", italic=true</p>
      </div>

      <div>
        <figure className="max-w-sm">
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Award Image]
          </div>
          <Caption {...args} color="accent" weight="semibold"
            text="Accent color with semibold weight for highlighting award-winning projects" />
        </figure>
        <p className="text-xs text-muted-foreground mt-1">color="accent", weight="semibold"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'color', 'weight', 'italic'],
    },
  },
}

export const SizeComparison: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div>
        <figure className="max-w-sm">
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Thumbnail Image]
          </div>
          <Caption {...args} size="xs"
            text="Extra small caption for thumbnail images and compact layouts in portfolio grids" />
        </figure>
        <p className="text-xs text-muted-foreground mt-1">size="xs"</p>
      </div>

      <div>
        <figure className="max-w-sm">
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Standard Image]
          </div>
          <Caption {...args} size="sm"
            text="Standard small caption for regular image descriptions and project details in portfolios" />
        </figure>
        <p className="text-xs text-muted-foreground mt-1">size="sm" (default)</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'size'],
    },
  },
}

export const PortfolioExamples: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Project Portfolio Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <figure>
            <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
              [Kitchen Project]
            </div>
            <Caption {...args} weight="medium"
              text="Minnetonka Kitchen Remodel - Contemporary design with custom millwork and premium appliances" />
          </figure>
          
          <figure>
            <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
              [Bathroom Project]
            </div>
            <Caption {...args} italic={true}
              text="Wayzata Master Bath - Spa-inspired retreat featuring natural stone and custom vanity design" />
          </figure>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Before/After Showcase</h3>
        <figure className="max-w-2xl">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="w-full h-40 bg-gray-300 rounded flex items-center justify-center text-gray-600">
                BEFORE
              </div>
            </div>
            <div>
              <div className="w-full h-40 bg-gray-100 rounded flex items-center justify-center text-gray-600">
                AFTER
              </div>
            </div>
          </div>
          <Caption {...args} align="center" weight="medium" color="accent"
            text="Complete transformation: From dated 1990s kitchen to modern culinary masterpiece - Eden Prairie residence" />
        </figure>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Detail Shots</h3>
        <div className="grid grid-cols-3 gap-3">
          <figure>
            <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
              [Detail 1]
            </div>
            <Caption {...args} size="xs" align="center"
              text="Custom cabinet hardware" />
          </figure>
          <figure>
            <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
              [Detail 2]
            </div>
            <Caption {...args} size="xs" align="center"
              text="Marble backsplash detail" />
          </figure>
          <figure>
            <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
              [Detail 3]
            </div>
            <Caption {...args} size="xs" align="center"
              text="Integrated appliance panel" />
          </figure>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text'],
    },
  },
}