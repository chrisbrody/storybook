import type { Meta, StoryObj } from '@storybook/react'
import { InlineCode } from './InlineCode'

const meta = {
  title: 'Components/InlineCode',
  component: InlineCode,
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
      description: 'The code text content.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base'],
      description: 'Size variant for the code text.',
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
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'accent'],
      description: 'Color variant for the code.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    background: {
      control: 'select',
      options: ['default', 'subtle', 'none'],
      description: 'Background styling for the code.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    fontFamily: {
      control: 'select',
      options: ['mono', 'sourcecodepro', 'sans', 'serif'],
      description: 'Font family variant (typically monospace).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'mono' },
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
    text: '#F5F5DC',
    size: 'sm',
    weight: 'medium',
    color: 'default',
    background: 'default',
    fontFamily: 'mono',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof InlineCode>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: '24" x 36"',
    size: 'sm',
    weight: 'medium',
    color: 'default',
    background: 'default',
    fontFamily: 'mono',
  },
}

export const BackgroundVariants: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div>
        <p>The cabinet dimensions are <InlineCode {...args} background="default" text='36" W x 24" D x 84" H' /> for optimal storage.</p>
        <p className="text-xs text-muted-foreground mt-1">background="default"</p>
      </div>
      <div>
        <p>We used paint color <InlineCode {...args} background="subtle" text="#F8F6F0" color="accent" /> for the walls.</p>
        <p className="text-xs text-muted-foreground mt-1">background="subtle"</p>
      </div>
      <div>
        <p>The material specification includes <InlineCode {...args} background="none" text="Calacatta Gold Marble" /> for countertops.</p>
        <p className="text-xs text-muted-foreground mt-1">background="none"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'background'],
    },
  },
}

export const UseCases: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Color Codes</h3>
        <p>
          The designer selected <InlineCode {...args} text="#2C3E50" color="accent" /> for the kitchen island,
          complemented by <InlineCode {...args} text="#ECF0F1" color="accent" /> for the backsplash tiles.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Measurements</h3>
        <p>
          Standard kitchen island dimensions: <InlineCode {...args} text='84" L x 42" W x 36" H' /> 
          with <InlineCode {...args} text='12" overhang' /> for seating.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Material Specifications</h3>
        <p>
          We specified <InlineCode {...args} text="Quartz - Caesarstone 5131 Cosmopolitan White" background="subtle" />
          for durability and <InlineCode {...args} text="White Oak - Rift Cut" background="subtle" /> 
          for the custom cabinetry.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Model Numbers</h3>
        <p>
          The fixtures include <InlineCode {...args} text="KWF-36" size="xs" /> range hood and
          <InlineCode {...args} text="DW-2024-SS" size="xs" /> dishwasher for this luxury renovation.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Room Codes</h3>
        <p>
          Project phases: <InlineCode {...args} text="K-01" background="none" /> kitchen,
          <InlineCode {...args} text="MB-01" background="none" /> master bath, and
          <InlineCode {...args} text="LR-01" background="none" /> living room renovations.
        </p>
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

export const SizeComparison: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div>
        <p>Extra Small: The tile size is <InlineCode {...args} size="xs" text='12" x 12"' /> for this application.</p>
        <p className="text-xs text-muted-foreground mt-1">size="xs"</p>
      </div>
      <div>
        <p>Small: Standard cabinet depth is <InlineCode {...args} size="sm" text='24" deep' /> for base units.</p>
        <p className="text-xs text-muted-foreground mt-1">size="sm" (default)</p>
      </div>
      <div>
        <p>Base: The room dimensions are <InlineCode {...args} size="base" text='16ft x 20ft' /> for the main living area.</p>
        <p className="text-xs text-muted-foreground mt-1">size="base"</p>
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