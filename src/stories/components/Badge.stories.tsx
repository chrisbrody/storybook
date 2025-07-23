import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
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
      description: 'The badge text content.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Size variant for the badge.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'accent', 'success', 'warning', 'error'],
      description: 'Style variant for the badge.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
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
    accentColor: {
      control: { type: 'color' },
      description: 'Custom color for accent variant.',
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
    text: 'Kitchen Remodel',
    size: 'base',
    variant: 'default',
    weight: 'medium',
    fontFamily: 'sans',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Luxury Design',
    size: 'base',
    variant: 'default',
    weight: 'medium',
    fontFamily: 'sans',
  },
}

export const VariantShowcase: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Badge {...args} variant="default" text="Default" />
      <Badge {...args} variant="secondary" text="Secondary" />
      <Badge {...args} variant="outline" text="Outline" />
      <Badge {...args} variant="accent" text="Accent" />
      <Badge {...args} variant="success" text="Success" />
      <Badge {...args} variant="warning" text="Warning" />
      <Badge {...args} variant="error" text="Error" />
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'variant'],
    },
  },
}

export const SizeComparison: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Badge {...args} size="sm" text="Small Badge" />
        <p className="text-xs text-muted-foreground mt-1">size="sm"</p>
      </div>
      <div className="text-center">
        <Badge {...args} size="base" text="Base Badge" />
        <p className="text-xs text-muted-foreground mt-1">size="base" (default)</p>
      </div>
      <div className="text-center">
        <Badge {...args} size="lg" text="Large Badge" />
        <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
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

export const ProjectCategories: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Project Types</h3>
        <div className="flex flex-wrap gap-2">
          <Badge {...args} variant="accent" text="Kitchen Remodel" />
          <Badge {...args} variant="accent" text="Bathroom Renovation" />
          <Badge {...args} variant="accent" text="Living Room" />
          <Badge {...args} variant="accent" text="Custom Millwork" />
          <Badge {...args} variant="accent" text="Whole Home" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Project Status</h3>
        <div className="flex flex-wrap gap-2">
          <Badge {...args} variant="warning" text="In Planning" />
          <Badge {...args} variant="default" text="In Progress" />
          <Badge {...args} variant="success" text="Completed" />
          <Badge {...args} variant="secondary" text="On Hold" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Service Areas</h3>
        <div className="flex flex-wrap gap-2">
          <Badge {...args} variant="outline" text="Minneapolis" size="sm" />
          <Badge {...args} variant="outline" text="St. Paul" size="sm" />
          <Badge {...args} variant="outline" text="Minnetonka" size="sm" />
          <Badge {...args} variant="outline" text="Wayzata" size="sm" />
          <Badge {...args} variant="outline" text="Eden Prairie" size="sm" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Awards & Recognition</h3>
        <div className="flex flex-wrap gap-2">
          <Badge {...args} variant="success" text="Best of Houzz 2024" size="sm" weight="semibold" />
          <Badge {...args} variant="success" text="ASID Award Winner" size="sm" weight="semibold" />
          <Badge {...args} variant="success" text="Featured in AD" size="sm" weight="semibold" />
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

export const CustomColors: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Custom Accent Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Badge {...args} variant="accent" accentColor="#8B5CF6" text="Purple Brand" />
          <Badge {...args} variant="accent" accentColor="#EF4444" text="Red Alert" />
          <Badge {...args} variant="accent" accentColor="#10B981" text="Green Success" />
          <Badge {...args} variant="accent" accentColor="#F59E0B" text="Gold Premium" />
          <Badge {...args} variant="accent" accentColor="#6366F1" text="Indigo Luxury" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      include: ['accentColor'],
    },
  },
}

export const InContext: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Portfolio Card</h3>
        <div className="border rounded-lg p-4 space-y-3">
          <div className="w-full h-32 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Minnetonka Kitchen Transformation</h4>
              <Badge {...args} variant="success" text="Completed" size="sm" />
            </div>
            <div className="flex flex-wrap gap-1">
              <Badge {...args} variant="outline" text="Kitchen" size="sm" />
              <Badge {...args} variant="outline" text="Custom Cabinetry" size="sm" />
              <Badge {...args} variant="outline" text="Quartz Counters" size="sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Service List</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Complete Kitchen Renovation</span>
            <div className="flex gap-2">
              <Badge {...args} variant="accent" text="Popular" size="sm" />
              <Badge {...args} variant="secondary" text="6-8 weeks" size="sm" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Luxury Bathroom Design</span>
            <div className="flex gap-2">
              <Badge {...args} variant="warning" text="Limited Slots" size="sm" />
              <Badge {...args} variant="secondary" text="4-6 weeks" size="sm" />
            </div>
          </div>
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