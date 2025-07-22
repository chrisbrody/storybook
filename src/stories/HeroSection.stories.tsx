import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from '../slices/hero-section';

const meta: Meta<typeof HeroSection> = {
  title: 'Slices/Hero Section',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A versatile hero section component with multiple layout variants. Perfect for landing pages with customizable content, buttons, and layouts including checklist, video, and minimal variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'checklist', 'centered', 'video', 'minimal'],
      description: 'Layout variant of the hero section',
    },
    tagline: {
      control: 'text',
      description: 'The small text displayed above the main heading',
    },
    heading: {
      control: 'text',
      description: 'The descriptive text below the heading',
    },
    description: {
      control: 'text',
      description: 'The descriptive text below the heading',
    },
    primaryButtonText: {
      control: 'text',
      description: 'Text for the primary call-to-action button',
    },
    primaryButtonVariant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Visual style variant for the primary button',
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Text for the secondary button',
    },
    secondaryButtonVariant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Visual style variant for the secondary button',
    },
    checklistItems: {
      control: 'object',
      description: 'Array of checklist items (only used in checklist variant)',
    },
    socialProofText: {
      control: 'text',
      description: 'Social proof text (only used in centered variant)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    fontFamily: {
      control: { type: 'select' },
      options: ['Inter', 'Roboto', 'Open Sans', 'Playfair Display', 'Source Code Pro'],
      description: 'Font family for headers and paragraphs',
    },
  },
  args: {
    variant: 'default',
    tagline: 'Hero Section',
    heading: 'Headline that solves user\'s main problem',
    description: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
    primaryButtonText: 'Get started',
    primaryButtonVariant: 'default',
    secondaryButtonText: 'Explore',
    secondaryButtonVariant: 'outline',
    checklistItems: ['Benefit drives feature one', 'Benefit drives feature two', 'Benefit drives feature three'],
    socialProofText: 'Loved by 500+ Home Owners',
    fontFamily: 'Inter',
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Checklist: Story = {
  args: {
    variant: 'checklist',
    tagline: 'Hero Section',
    heading: 'Headline that solves user\'s main problem',
    description: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
    checklistItems: ['Benefit drives feature one', 'Benefit drives feature two', 'Benefit drives feature three'],
  },
};

export const Centered: Story = {
  args: {
    variant: 'centered',
    tagline: 'Hero Section',
    heading: 'Headline that solves user\'s main problem',
    description: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
    socialProofText: 'Loved by 500+ Home Owners',
  },
};

export const Video: Story = {
  args: {
    variant: 'video',
    tagline: 'Hero Section',
    heading: 'Headline that solves user\'s main problem',
    description: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
    secondaryButtonText: 'Play video',
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    heading: 'Headline that solves user\'s main problem',
    description: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
  },
};

export const CustomContent: Story = {
  args: {
    variant: 'checklist',
    tagline: 'Product Launch',
    heading: 'Transform your business with our innovative solution',
    description: 'Our cutting-edge platform helps companies scale efficiently while maintaining quality and reducing costs.',
    primaryButtonText: 'Start Free Trial',
    secondaryButtonText: 'Watch Demo',
    checklistItems: ['Increase efficiency by 40%', 'Reduce operational costs', 'Scale without limits', '24/7 expert support'],
  },
};