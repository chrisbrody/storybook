import type { Meta, StoryObj } from '@storybook/react'
import { LeadText } from '../../components/ui/lead-text'

const meta = {
  title: 'Components/LeadText',
  component: LeadText,
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
      description: 'The lead text content.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['base', 'lg', 'xl', '2xl'],
      description: 'Size variant for the lead text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'xl' },
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
      description: 'Color variant for the lead text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'muted' },
      },
    },
    lineHeight: {
      control: 'select',
      options: ['tight', 'normal', 'relaxed', 'loose'],
      description: 'Line height variant for readability.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'relaxed' },
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
    text: 'Experience the transformation of luxury living through our award-winning interior design services, where sophistication meets functionality in every carefully curated detail.',
    size: 'xl',
    weight: 'normal',
    color: 'muted',
    lineHeight: 'relaxed',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof LeadText>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Discover how our premium design expertise creates spaces that perfectly balance luxury aesthetics with practical functionality for modern living.',
    size: 'xl',
    weight: 'normal',
    color: 'muted',
    lineHeight: 'relaxed',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
  },
}

export const SizeVariants: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div>
        <LeadText {...args} size="base" 
          text="Base Size - This contemporary kitchen transformation showcases our commitment to excellence." />
        <p className="text-xs text-muted-foreground mt-1">size="base"</p>
      </div>
      <div>
        <LeadText {...args} size="lg"
          text="Large Size - Our luxury bathroom renovations blend sophistication with modern convenience." />
        <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
      </div>
      <div>
        <LeadText {...args} size="xl"
          text="Extra Large Size - Award-winning living spaces that redefine luxury interior design standards." />
        <p className="text-xs text-muted-foreground mt-1">size="xl" (default)</p>
      </div>
      <div>
        <LeadText {...args} size="2xl"
          text="2X Large Size - Premium materials and custom millwork create truly exceptional spaces." />
        <p className="text-xs text-muted-foreground mt-1">size="2xl"</p>
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