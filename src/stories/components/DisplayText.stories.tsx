import type { Meta, StoryObj } from '@storybook/react'
import { DisplayText } from './DisplayText'

const meta = {
  title: 'Components/DisplayText',
  component: DisplayText,
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
      description: 'The display text content.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      description: 'Size variant for the display text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '4xl' },
      },
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
      description: 'Font weight variant.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bold' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'accent'],
      description: 'Color variant for the display text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    lineHeight: {
      control: 'select',
      options: ['tight', 'normal', 'relaxed'],
      description: 'Line height variant for readability.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'tight' },
      },
    },
    maxWidth: {
      control: 'select',
      options: ['none', 'prose', 'sm', 'lg', 'xl'],
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
    letterSpacing: {
      control: 'select',
      options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      description: 'Letter spacing variant.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'tight' },
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
    text: 'Luxury Interior Design',
    size: '4xl',
    weight: 'bold',
    color: 'default',
    lineHeight: 'tight',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
    letterSpacing: 'tight',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof DisplayText>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Transform Your Space',
    size: '4xl',
    weight: 'bold',
    color: 'default',
    lineHeight: 'tight',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
    letterSpacing: 'tight',
  },
}

export const SizeVariants: Story = {
  render: (args) => (
    <div className="space-y-8 text-center">
      <div>
        <DisplayText {...args} size="3xl" text="Elegant Spaces" />
        <p className="text-xs text-muted-foreground mt-1">size="3xl"</p>
      </div>
      <div>
        <DisplayText {...args} size="4xl" text="Luxury Design" />
        <p className="text-xs text-muted-foreground mt-1">size="4xl" (default)</p>
      </div>
      <div>
        <DisplayText {...args} size="5xl" text="Transform" />
        <p className="text-xs text-muted-foreground mt-1">size="5xl"</p>
      </div>
      <div>
        <DisplayText {...args} size="6xl" text="Inspire" />
        <p className="text-xs text-muted-foreground mt-1">size="6xl"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'size', 'align'],
    },
  },
}

export const WeightVariants: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div>
        <DisplayText {...args} weight="normal" text="Normal Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="normal"</p>
      </div>
      <div>
        <DisplayText {...args} weight="medium" text="Medium Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="medium"</p>
      </div>
      <div>
        <DisplayText {...args} weight="semibold" text="Semibold Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="semibold"</p>
      </div>
      <div>
        <DisplayText {...args} weight="bold" text="Bold Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="bold" (default)</p>
      </div>
      <div>
        <DisplayText {...args} weight="extrabold" text="Extrabold Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="extrabold"</p>
      </div>
      <div>
        <DisplayText {...args} weight="black" text="Black Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="black"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'weight'],
    },
  },
}

export const FontFamilyShowcase: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div>
        <DisplayText {...args} fontFamily="sans" text="Modern Sans-Serif" />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="sans" (default)</p>
      </div>
      <div>
        <DisplayText {...args} fontFamily="serif" text="Elegant Serif" />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="serif"</p>
      </div>
      <div>
        <DisplayText {...args} fontFamily="playfair" text="Playfair Display" />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="playfair"</p>
      </div>
      <div>
        <DisplayText {...args} fontFamily="anton" text="ANTON DISPLAY" />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="anton"</p>
      </div>
      <div>
        <DisplayText {...args} fontFamily="bebas" text="BEBAS NEUE" />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="bebas"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'fontFamily'],
    },
  },
}

export const UseCases: Story = {
  render: (args) => (
    <div className="space-y-12">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Hero Section</h3>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg text-center">
          <DisplayText {...args} size="6xl" weight="extrabold" align="center" 
            text="Award-Winning Design" />
          <p className="mt-4 text-lg text-muted-foreground">
            Creating luxury spaces that inspire and transform lifestyles
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Service Landing</h3>
        <div className="border-l-4 border-primary pl-6">
          <DisplayText {...args} size="5xl" weight="bold" color="accent"
            text="Kitchen Renovations" />
          <p className="mt-2 text-muted-foreground">
            Transform your kitchen into a culinary masterpiece
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">About Section</h3>
        <DisplayText {...args} size="4xl" weight="semibold" fontFamily="playfair" 
          text="30 Years of Excellence" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Call to Action</h3>
        <div className="bg-primary/5 p-6 rounded-lg text-center">
          <DisplayText {...args} size="5xl" weight="black" fontFamily="bebas" 
            letterSpacing="wider" align="center" text="START YOUR PROJECT" />
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