import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta = {
  title: 'Components/Link',
  component: Link,
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
      description: 'The link text content.',
      table: {
        type: { summary: 'string' },
      },
    },
    href: {
      control: { type: 'text' },
      description: 'The URL to link to.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
      description: 'Size variant for the link text.',
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
      description: 'Color variant for the link.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'accent' },
      },
    },
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always'],
      description: 'Underline style for the link.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'hover' },
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
    external: {
      control: 'boolean',
      description: 'Whether the link opens in a new tab/window.',
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
    onClick: {
      action: 'clicked',
      description: 'Click handler for demo purposes.',
    },
  },
  args: {
    text: 'View Our Portfolio',
    href: '#',
    size: 'base',
    weight: 'normal',
    color: 'accent',
    underline: 'hover',
    fontFamily: 'sans',
    external: false,
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Schedule a Design Consultation',
    href: '#',
    size: 'base',
    weight: 'normal',
    color: 'accent',
    underline: 'hover',
    fontFamily: 'sans',
    external: false,
  },
}

export const UnderlineVariants: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div>
        <Link {...args} underline="none" 
          text="No Underline - Clean minimal link style for navigation" />
        <p className="text-xs text-muted-foreground mt-1">underline="none"</p>
      </div>
      <div>
        <Link {...args} underline="hover"
          text="Hover Underline - Appears on hover for subtle interaction" />
        <p className="text-xs text-muted-foreground mt-1">underline="hover" (default)</p>
      </div>
      <div>
        <Link {...args} underline="always"
          text="Always Underlined - Traditional link styling for accessibility" />
        <p className="text-xs text-muted-foreground mt-1">underline="always"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'underline'],
    },
  },
}

export const ColorVariants: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div>
        <Link {...args} color="default"
          text="Default Color - Standard text color with hover effects" />
        <p className="text-xs text-muted-foreground mt-1">color="default"</p>
      </div>
      <div>
        <Link {...args} color="muted"
          text="Muted Color - Subtle links that blend with secondary content" />
        <p className="text-xs text-muted-foreground mt-1">color="muted"</p>
      </div>
      <div>
        <Link {...args} color="accent"
          text="Accent Color - Primary brand color for important call-to-action links" />
        <p className="text-xs text-muted-foreground mt-1">color="accent" (default)</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'color'],
    },
  },
}

export const ExternalLinks: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div>
        <Link {...args} external={false}
          text="Internal Link - Stays within the same website" />
        <p className="text-xs text-muted-foreground mt-1">external={false} (default)</p>
      </div>
      <div>
        <Link {...args} external={true} href="https://example.com"
          text="External Link - Opens in new tab with security attributes" />
        <p className="text-xs text-muted-foreground mt-1">external={true}</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'external', 'href'],
    },
  },
}

export const UseCases: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Navigation Links</h3>
        <div className="space-x-6">
          <Link {...args} text="Our Services" color="default" underline="none" />
          <Link {...args} text="Portfolio" color="default" underline="none" />
          <Link {...args} text="About Us" color="default" underline="none" />
          <Link {...args} text="Contact" color="accent" underline="none" weight="medium" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">In-Content Links</h3>
        <p className="text-base">
          Our award-winning <Link {...args} text="kitchen renovations" size="base" /> 
          have been featured in <Link {...args} text="Architectural Digest" external={true} size="base" />
          and <Link {...args} text="Better Homes & Gardens" external={true} size="base" />.
          <Link {...args} text="Schedule your consultation" color="accent" weight="semibold" size="base" />
          to get started.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Footer Links</h3>
        <div className="space-x-4 text-sm">
          <Link {...args} text="Privacy Policy" size="sm" color="muted" />
          <Link {...args} text="Terms of Service" size="sm" color="muted" />
          <Link {...args} text="Licensing Info" size="sm" color="muted" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Call-to-Action Links</h3>
        <div className="space-y-2">
          <Link {...args} text="View Our Complete Portfolio →" size="lg" weight="semibold" />
          <br />
          <Link {...args} text="Book Free Design Consultation" size="base" weight="medium" />
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