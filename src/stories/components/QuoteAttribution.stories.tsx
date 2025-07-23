import type { Meta, StoryObj } from '@storybook/react'
import { QuoteAttribution } from '../../components/ui/quote-attribution'
import { Blockquote } from '../../components/ui/blockquote-typography'

const meta = {
  title: 'Components/QuoteAttribution',
  component: QuoteAttribution,
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
    name: {
      control: { type: 'text' },
      description: 'The person\'s name.',
      table: {
        type: { summary: 'string' },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'The person\'s title or role.',
      table: {
        type: { summary: 'string' },
      },
    },
    company: {
      control: { type: 'text' },
      description: 'The company or location.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base'],
      description: 'Size variant for the attribution text.',
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
      description: 'Color variant for the attribution text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'muted' },
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
    layout: {
      control: 'select',
      options: ['stacked', 'inline'],
      description: 'Layout style for the attribution.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'stacked' },
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
    name: 'Sarah Mitchell',
    title: 'Homeowner',
    company: 'Minnetonka, MN',
    size: 'sm',
    weight: 'medium',
    color: 'muted',
    align: 'left',
    fontFamily: 'sans',
    layout: 'stacked',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6',
  },
} satisfies Meta<typeof QuoteAttribution>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'Jennifer Thompson',
    title: 'Executive Vice President',
    company: 'Wayzata, MN',
    size: 'sm',
    weight: 'medium',
    color: 'muted',
    align: 'left',
    fontFamily: 'sans',
    layout: 'stacked',
  },
}

export const LayoutComparison: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Stacked Layout</h3>
        <QuoteAttribution {...args} layout="stacked"
          name="Michael Rodriguez" title="Architect" company="Eden Prairie, MN" />
        <p className="text-xs text-muted-foreground mt-2">layout="stacked" (default)</p>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Inline Layout</h3>
        <QuoteAttribution {...args} layout="inline"
          name="Amanda Chen" title="Interior Stylist" company="Minneapolis, MN" />
        <p className="text-xs text-muted-foreground mt-2">layout="inline"</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['name', 'title', 'company', 'layout'],
    },
  },
}

export const WithTestimonials: Story = {
  render: (args) => (
    <div className="space-y-12">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Client Testimonial</h3>
        <div className="max-w-2xl">
          <Blockquote 
            text="Working with Eminent Interior Design transformed not just our kitchen, but our entire lifestyle. The attention to detail and understanding of our family's needs resulted in a space that perfectly balances luxury with functionality."
            variant="sidebar"
            borderColor="accent"
          />
          <QuoteAttribution {...args}
            name="David & Lisa Johnson"
            title="Homeowners"
            company="Minnetonka, MN"
            align="left"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Professional Review</h3>
        <div className="max-w-2xl">
          <Blockquote 
            text="The team's ability to blend contemporary design with timeless elegance is remarkable. This project showcases their expertise in creating spaces that are both visually stunning and highly functional."
            variant="sidebar"
            borderColor="default"
          />
          <QuoteAttribution {...args}
            name="Maria Gonzalez"
            title="Senior Editor"
            company="Architecture Minnesota Magazine"
            color="accent"
            weight="semibold"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Industry Recognition</h3>
        <div className="max-w-2xl text-center">
          <Blockquote 
            text="This year's Kitchen Design Excellence Award goes to a project that exemplifies innovation, craftsmanship, and client satisfaction at the highest level."
            variant="default"
            borderPosition="top"
            borderColor="accent"
            align="center"
          />
          <QuoteAttribution {...args}
            name="Thomas Anderson"
            title="President"
            company="Minnesota Association of Interior Designers"
            align="center"
            layout="inline"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['name', 'title', 'company'],
    },
  },
}

export const VariousClients: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Residential Clients</h3>
        <div className="space-y-4">
          <QuoteAttribution {...args}
            name="Robert & Patricia Wilson"
            title="Retired Educators"
            company="St. Paul, MN"
          />
          <QuoteAttribution {...args}
            name="Alexandra Kim"
            title="Technology Executive"
            company="Edina, MN"
          />
          <QuoteAttribution {...args}
            name="The Martinez Family"
            company="Plymouth, MN"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Commercial Clients</h3>
        <div className="space-y-4">
          <QuoteAttribution {...args}
            name="Jennifer Walsh"
            title="Chief Executive Officer"
            company="Walsh Financial Group"
            color="accent"
          />
          <QuoteAttribution {...args}
            name="Dr. Steven Park"
            title="Practice Owner"
            company="Park Dental Associates"
            color="accent"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Industry Partners</h3>
        <div className="space-y-4">
          <QuoteAttribution {...args}
            name="Rachel Stevens"
            title="Principal Architect"
            company="Stevens Architecture Studio"
            layout="inline"
            weight="semibold"
          />
          <QuoteAttribution {...args}
            name="Mark Thompson"
            title="General Contractor"
            company="Thompson Custom Homes"
            layout="inline"
            weight="semibold"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['name', 'title', 'company'],
    },
  },
}

export const AlignmentShowcase: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Left Aligned</h3>
        <div className="max-w-md border-l-4 border-primary pl-4">
          <p className="text-muted-foreground italic mb-2">
            "The design perfectly captures our vision while exceeding our expectations."
          </p>
          <QuoteAttribution {...args} align="left"
            name="Catherine Powell" title="Art Collector" company="Wayzata, MN" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Center Aligned</h3>
        <div className="max-w-md mx-auto text-center border-t-4 border-primary pt-4">
          <p className="text-muted-foreground italic mb-2">
            "An exceptional team that delivers extraordinary results."
          </p>
          <QuoteAttribution {...args} align="center"
            name="James Mitchell" title="CEO" company="Mitchell Enterprises" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Right Aligned</h3>
        <div className="max-w-md ml-auto border-r-4 border-primary pr-4">
          <p className="text-muted-foreground italic mb-2 text-right">
            "Professional, creative, and absolutely meticulous in execution."
          </p>
          <QuoteAttribution {...args} align="right"
            name="Dr. Susan Lee" title="Physician" company="Minnetonka Medical" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['name', 'title', 'company', 'align'],
    },
  },
}