import type { Meta, StoryObj } from '@storybook/react'
import { SmallText } from '../../components/ui/small-text'

const meta = {
  title: 'Components/SmallText',
  component: SmallText,
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
      description: 'The small text content.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm'],
      description: 'Size variant for the small text.',
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
      description: 'Color variant for the small text.',
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
    text: 'Photography by Eminent Interior Design • Minnetonka Kitchen Remodel • Completed 2024',
    size: 'sm',
    weight: 'normal',
    color: 'muted',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof SmallText>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Licensed interior designers in Minnesota • Serving Twin Cities metro area since 2010',
    size: 'sm',
    weight: 'normal',
    color: 'muted',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
  },
}

export const UseCases: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Image Captions</h3>
        <div className="bg-gray-100 p-4 rounded">
          <div className="w-full h-32 bg-gray-300 rounded mb-2 flex items-center justify-center text-gray-600">
            [Kitchen Image]
          </div>
          <SmallText {...args} 
            text="Contemporary kitchen renovation featuring custom cabinetry and premium quartz countertops" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Project Details</h3>
        <SmallText {...args} color="default" weight="medium"
          text="Project Timeline: 6-8 weeks • Budget Range: $75,000 - $125,000 • Location: Wayzata, MN" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Fine Print</h3>
        <SmallText {...args} size="xs" color="muted"
          text="All design consultations require a minimum 2-hour booking. Material costs and permits not included in base pricing. Licensed, bonded, and insured in Minnesota." />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Copyright Notice</h3>
        <SmallText {...args} size="xs" color="muted" align="center"
          text="© 2024 Eminent Interior Design. All rights reserved. Unauthorized reproduction prohibited." />
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
        <SmallText {...args} size="xs"
          text="Extra Small (12px) - Fine print and legal disclaimers for luxury interior design services" />
        <p className="text-xs text-muted-foreground mt-1">size="xs"</p>
      </div>
      <div>
        <SmallText {...args} size="sm"
          text="Small (14px) - Image captions and project details for premium renovation portfolios" />
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