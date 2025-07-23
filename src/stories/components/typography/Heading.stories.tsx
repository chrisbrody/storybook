import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'
import { Heading as ShadcnHeading } from '../../../components/ui/Heading'

const meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
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
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The semantic heading level (h1-h6).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'h2' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'muted'],
      description: 'Color variant for the heading text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    weight: {
      control: 'select',
      options: ['default', 'thin', 'semibold', 'bold'],
      description: 'Font weight variant.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
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
    primaryColor: {
      control: { type: 'color' },
      description: 'Custom color for primary variant. Overrides theme primary color.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#3b82f6' },
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
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    text: {
      control: 'text',
      description: 'The heading text content.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    text: 'Sample Heading Text',
    level: 'h2',
    color: 'default',
    weight: 'default',
    defaultColor: '#000000',
    primaryColor: '#3b82f6',
    mutedColor: '#6b7280',
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

// Docs story with color controls (this will be the primary docs example)
export const Docs: Story = {
  args: {
    level: 'h2',
    color: 'default',
    weight: 'default',
    text: 'This is a heading component',
    defaultColor: '#000000',
    primaryColor: '#3b82f6',
    mutedColor: '#6b7280',
  },
  decorators: [
    (Story, context) => {
      const { defaultColor, primaryColor, mutedColor } = context.args;
      if (defaultColor) {
        document.documentElement.style.setProperty('--heading-default-color', defaultColor);
      }
      if (primaryColor) {
        document.documentElement.style.setProperty('--heading-primary-color', primaryColor);
      }
      if (mutedColor) {
        document.documentElement.style.setProperty('--heading-muted-color', mutedColor);
      }
      return Story();
    },
  ],
}

// Primary story with all controls
export const Primary: Story = {
  args: {
    level: 'h2',
    color: 'default',
    weight: 'default',
    text: 'This is a heading component',
  },
  parameters: {
    controls: {
      exclude: ['defaultColor', 'primaryColor', 'mutedColor', 'text', 'className'],
    },
  },
}

// All heading levels story
export const AllLevels: Story = {
  args: {
    color: 'default',
    weight: 'default',
  },
  render: ({ color, weight }) => {
    return (
      <div className="space-y-6">
        <div>
          <ShadcnHeading level="h1" size="h1" color={color} weight={weight}>
            Heading 1 (48px → 60px → 72px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h1" size="h1"</p>
        </div>
        <div>
          <ShadcnHeading level="h2" size="h2" color={color} weight={weight}>
            Heading 2 (36px → 48px → 60px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h2" size="h2"</p>
        </div>
        <div>
          <ShadcnHeading level="h3" size="h3" color={color} weight={weight}>
            Heading 3 (24px → 36px → 48px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h3" size="h3"</p>
        </div>
        <div>
          <ShadcnHeading level="h4" size="h4" color={color} weight={weight}>
            Heading 4 (20px → 24px → 36px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h4" size="h4"</p>
        </div>
        <div>
          <ShadcnHeading level="h5" size="h5" color={color} weight={weight}>
            Heading 5 (18px → 20px → 24px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h5" size="h5"</p>
        </div>
        <div>
          <ShadcnHeading level="h6" size="h6" color={color} weight={weight}>
            Heading 6 (16px → 18px → 20px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h6" size="h6"</p>
        </div>
      </div>
    );
  },
  decorators: [
    (Story, context) => {
      const { defaultColor, primaryColor, mutedColor } = context.args;
      if (defaultColor) {
        document.documentElement.style.setProperty('--heading-default-color', defaultColor);
      }
      if (primaryColor) {
        document.documentElement.style.setProperty('--heading-primary-color', primaryColor);
      }
      if (mutedColor) {
        document.documentElement.style.setProperty('--heading-muted-color', mutedColor);
      }
      return Story();
    },
  ],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'primaryColor', 'mutedColor', 'text', 'className', 'level'],
    },
  },
}

// Color variants story
export const ColorVariants: Story = {
  args: {
    defaultColor: '#000000',
    primaryColor: '#3b82f6', 
    mutedColor: '#6b7280',
  },
  render: () => (
    <div className="space-y-4">
      <div>
        <ShadcnHeading level="h2" size="h2" color="default">Default Color Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">color="default"</p>
      </div>
      <div>
        <ShadcnHeading level="h2" size="h2" color="primary">Primary Color Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">color="primary"</p>
      </div>
      <div>
        <ShadcnHeading level="h2" size="h2" color="muted">Muted Color Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">color="muted"</p>
      </div>
    </div>
  ),
  decorators: [
    (Story, context) => {
      const { defaultColor, primaryColor, mutedColor } = context.args;
      if (defaultColor) {
        document.documentElement.style.setProperty('--heading-default-color', defaultColor);
      }
      if (primaryColor) {
        document.documentElement.style.setProperty('--heading-primary-color', primaryColor);
      }
      if (mutedColor) {
        document.documentElement.style.setProperty('--heading-muted-color', mutedColor);
      }
      return Story();
    },
  ],
  parameters: {
    layout: 'padded',
    controls: {
      include: ['defaultColor', 'primaryColor', 'mutedColor'],
    },
  },
}

// Weight variants story
export const WeightVariants: Story = {
  render: ({ level = 'h2', color = 'default' }) => (
    <div className="space-y-4">
      <div>
        <ShadcnHeading level={level} size={level} color={color} weight="default">Default Weight Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">weight="default"</p>
      </div>
      <div>
        <ShadcnHeading level={level} size={level} color={color} weight="thin">Thin Weight Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">weight="thin"</p>
      </div>
      <div>
        <ShadcnHeading level={level} size={level} color={color} weight="semibold">Semibold Weight Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">weight="semibold"</p>
      </div>
      <div>
        <ShadcnHeading level={level} size={level} color={color} weight="bold">Bold Weight Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">weight="bold"</p>
      </div>
    </div>
  ),
  args: {
    level: 'h2',
    color: 'default',
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'primaryColor', 'mutedColor', 'text', 'className', 'weight'],
    },
  },
}

// Semantic vs Visual demonstration
export const SemanticVsVisual: Story = {
  render: ({ color = 'default', weight = 'default' }) => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Semantic H3 with H1 Visual Styling</h3>
        <ShadcnHeading level="h3" size="h1" color={color} weight={weight}>This is semantically H3 but looks like H1</ShadcnHeading>
        <p className="text-sm text-muted-foreground mt-1">level="h3" size="h1"</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Semantic H1 with H4 Visual Styling</h3>
        <ShadcnHeading level="h1" size="h4" color={color} weight={weight}>This is semantically H1 but looks like H4</ShadcnHeading>
        <p className="text-sm text-muted-foreground mt-1">level="h1" size="h4"</p>
      </div>
    </div>
  ),
  args: {
    color: 'default',
    weight: 'default',
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'primaryColor', 'mutedColor', 'text', 'className', 'level', 'size', 'weight'],
    },
  },
}


