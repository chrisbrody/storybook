import type { Meta, StoryObj } from '@storybook/react'
import { Input, type InputProps } from './input'

interface StoryArgs extends Omit<InputProps, 'customColors'> {
  borderColor?: string
  textColor?: string
  backgroundColor?: string
}

const meta: Meta<StoryArgs> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile input component built on shadcn/ui foundations with variants for different states. Perfect for contact forms, consultation requests, and client information gathering in luxury interior design applications.',
      },
    },
  },
  render: ({ borderColor, textColor, backgroundColor, ...args }) => {
    const customColors = (borderColor || textColor || backgroundColor) ? {
      borderColor,
      textColor,
      backgroundColor,
    } : undefined;

    return <Input {...args} customColors={customColors} />;
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'warning', 'danger'],
      description: 'The input variant style',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number'],
      description: 'The input type',
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    description: {
      control: 'text',
      description: 'Helper text displayed below the input',
    },
    error: {
      control: 'text',
      description: 'Error message displayed below the input (overrides description)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    borderColor: {
      control: 'color',
      description: 'Custom border color',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    variant: 'default',
    type: 'text',
    placeholder: 'Enter your name',
    disabled: false,
    required: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Client Name',
    placeholder: 'Enter your name',
    description: 'Please provide your full name for our consultation records',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Project Timeline',
    placeholder: 'Expected completion date',
    description: 'Please note: rushed timelines may affect material availability',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Budget Range',
    placeholder: 'Enter project budget',
    error: 'Budget must be at least $10,000 for interior design projects',
  },
}

export const WithCustomColors: Story = {
  args: {
    label: 'Custom Styled Input',
    placeholder: 'Luxury design consultation',
    description: 'Input with custom brand colors',
    borderColor: '#8B5A3C',
    textColor: '#2C1810',
    backgroundColor: '#FEF7F0',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'your.email@example.com',
    description: 'We\'ll send project updates and design previews here',
  },
}

export const ConsultationRequest: Story = {
  args: {
    type: 'text',
    label: 'Design Vision',
    placeholder: 'Describe your interior design vision',
    description: 'Tell us about your style preferences and project goals',
  },
}

export const Phone: Story = {
  args: {
    type: 'tel',
    label: 'Phone Number',
    placeholder: '(555) 123-4567',
    description: 'Preferred number for consultation scheduling',
  },
}

export const ProjectBudget: Story = {
  args: {
    type: 'number',
    label: 'Project Investment',
    placeholder: 'Enter project budget',
    description: 'Budget range helps us tailor our design recommendations',
  },
}

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Full name (required)',
    description: 'Required for all consultation appointments',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Design Studio',
    placeholder: 'Currently unavailable',
    disabled: true,
    value: 'Eminent Interior Design Studio',
    description: 'This field is automatically populated',
  },
}

export const WithError: Story = {
  args: {
    variant: 'danger',
    label: 'Project Location',
    placeholder: 'Enter city and state',
    value: 'Invalid location',
    error: 'Please enter a valid city and state for service area verification',
  },
}