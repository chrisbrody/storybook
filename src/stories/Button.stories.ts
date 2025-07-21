// src/stories/Button.stories.ts
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';


const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      // This line is critical: It must access buttonVariants directly.
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style variant of the button (e.g., default, destructive, outline).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    fontFamily: {
      control: { type: 'select' },
      options: ['Inter', 'Roboto', 'Open Sans', 'Playfair Display', 'Source Code Pro'],
      description: 'Font family for button text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Inter' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes to apply directly to the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    primary: {
      control: 'boolean',
      description: 'Sets the button to the default (primary) or secondary variant if `variant` is not explicitly set.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the button. Overrides variant color.',
      table: {
        type: { summary: 'string' },
      },
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the button. Overrides variant color.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
    label: 'Button',
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
    primary: false,
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    label: 'Destructive Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    label: 'Link Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

export const CustomFontColor: Story = {
  args: {
    label: 'Custom Text Color',
    variant: 'default',
    className: 'text-purple-600 border-purple-600 border-2 bg-white hover:bg-purple-50',
  },
};

export const CustomHoverEffect: Story = {
  args: {
    label: 'Custom Hover',
    variant: 'outline',
    className: 'hover:!bg-green-200 hover:!text-green-800',
  },
};

export const CustomColorsForDesigners: Story = {
  args: {
    label: 'Designers Rock!',
    variant: 'default',
    backgroundColor: '#FFDDC1',
    textColor: '#A0522D',
  },
};

export const AnotherCustomColor: Story = {
  args: {
    label: 'Green Machine',
    variant: 'outline',
    backgroundColor: '#D1FAE5',
    textColor: '#065F46',
  },
};