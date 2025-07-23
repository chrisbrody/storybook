import type { Meta, StoryObj } from '@storybook/react';
import { LogoSection } from '../../slices/logo-section';

const meta: Meta<typeof LogoSection> = {
  title: 'Slices/Logo Section',
  component: LogoSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A logo section component for showcasing company logos. Perfect for displaying trust signals with customizable logos that can be uploaded by users. Logos are displayed in grayscale with hover effects.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'minimal'],
      description: 'Layout variant of the logo section',
    },
    tagline: {
      control: 'text',
      description: 'The small text displayed above the main heading',
    },
    heading: {
      control: 'text',
      description: 'The main heading text',
    },
    description: {
      control: 'text',
      description: 'The descriptive text below the heading',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    logo1: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload logo 1 (PNG, JPG, JPEG, GIF, WebP)',
    },
    logo2: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload logo 2 (PNG, JPG, JPEG, GIF, WebP)',
    },
    logo3: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload logo 3 (PNG, JPG, JPEG, GIF, WebP)',
    },
    logo4: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload logo 4 (PNG, JPG, JPEG, GIF, WebP)',
    },
    logo5: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload logo 5 (PNG, JPG, JPEG, GIF, WebP)',
    },
    logo6: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload logo 6 (PNG, JPG, JPEG, GIF, WebP)',
    },
  },
  args: {
    variant: 'default',
    tagline: 'Logo section',
    heading: 'Showcase that builds trust',
    description: 'Add logos of notable companies using your product. Include 4-6 recognizable brands in grayscale to maintain visual consistency. Ensure logos are properly scaled and aligned with equal spacing.',
    logo1: undefined,
    logo2: undefined,
    logo3: undefined,
    logo4: undefined,
    logo5: undefined,
    logo6: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof LogoSection>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const ThreeColumn: Story = {
  args: {
    variant: 'ThreeColumn',
  },
};

export const TwoColumn: Story = {
  args: {
    variant: 'TwoColumn',
  },
};

export const TwoColumnBlack: Story = {
  args: {
    variant: 'TwoColumnBlack',
  },
};

export const ThreeColumnMinimal: Story = {
  args: {
    variant: 'ThreeColumnMinimal',
  },
};

export const ThreeColumnMinimalBlack: Story = {
  args: {
    variant: 'ThreeColumnMinimalBlack',
  },
};