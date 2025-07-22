import type { Meta, StoryObj } from '@storybook/react';
import { HeaderSection } from '../../slices/header/HeaderSection';

const meta: Meta<typeof HeaderSection> = {
  title: 'Slices/Header',
  component: HeaderSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A flexible header section component perfect for landing pages and content sections. Features customizable tagline, heading, description, and styling options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tagline: {
      control: 'text',
      description: 'The small text displayed above the main heading',
    },
    heading: {
      control: 'text',
      description: 'The main headline text',
    },
    description: {
      control: 'text',
      description: 'The descriptive text below the heading',
    },
    taglineVariant: {
      control: { type: 'select' },
      options: ['default', 'ghost', 'white'],
      description: 'Visual style of the tagline component',
    },
    alignment: {
      control: { type: 'select' },
      options: ['center', 'left'],
      description: 'Text alignment - center always centers, left centers on mobile but left-aligns on desktop',
    },
    background: {
      control: { type: 'select' },
      options: ['default', 'muted', 'accent'],
      description: 'Background color variant',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
  args: {
    tagline: 'Header section',
    heading: 'Short engaging headline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.',
    taglineVariant: 'ghost',
    alignment: 'center',
    background: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof HeaderSection>;

export const Default: Story = {
  args: {},
};

export const LeftAligned: Story = {
  args: {
    alignment: 'left',
    tagline: 'Welcome to our platform',
    heading: 'Build amazing experiences with our tools',
    description: 'Our comprehensive suite of tools helps you create, deploy, and scale your applications with confidence.',
  },
};

export const WithDefaultTagline: Story = {
  args: {
    taglineVariant: 'default',
    tagline: 'New Feature',
    heading: 'Introducing our latest innovation',
    description: 'Discover how our new feature can transform your workflow and boost productivity.',
  },
};

export const WhiteTagline: Story = {
  args: {
    taglineVariant: 'white',
    background: 'accent',
    tagline: 'Premium',
    heading: 'Unlock advanced features',
    description: 'Take your experience to the next level with our premium tier and advanced capabilities.',
  },
};

export const MutedBackground: Story = {
  args: {
    background: 'muted',
    tagline: 'Getting Started',
    heading: 'Your journey begins here',
    description: 'Follow our step-by-step guide to get up and running in minutes.',
  },
};

export const Marketing: Story = {
  args: {
    tagline: 'Join thousands of users',
    heading: 'The platform that scales with you',
    description: 'From startup to enterprise, our platform grows with your business needs and adapts to your workflow.',
    alignment: 'center',
    taglineVariant: 'default',
  },
};

export const Product: Story = {
  args: {
    tagline: 'Product Overview',
    heading: 'Everything you need in one place',
    description: 'Streamline your operations with our comprehensive suite of integrated tools and features.',
    alignment: 'left',
    taglineVariant: 'ghost',
  },
};

export const CustomStyling: Story = {
  args: {
    tagline: 'Custom Design',
    heading: 'Tailored to your brand',
    description: 'Customize every aspect of your experience to match your unique brand identity.',
    className: 'border-t-4 border-blue-500',
    taglineVariant: 'default',
  },
};