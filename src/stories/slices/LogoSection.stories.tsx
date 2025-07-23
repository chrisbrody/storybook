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
  decorators: [
    (Story, { args }) => (
      <div style={{ 
        '--background': args.backgroundColor || '#ffffff',
        '--foreground': args.headerColor || '#000000',
        '--muted-foreground': args.textColor || '#666666',
        backgroundColor: args.backgroundColor || '#ffffff',
        minHeight: '100vh',
        width: '100%',
        padding: 0,
        margin: 0
      } as React.CSSProperties}>
        <style>
          {`
            .text-foreground { color: ${args.headerColor || '#000000'} !important; }
            .text-muted-foreground { color: ${args.textColor || '#666666'} !important; }
            .bg-black { background-color: ${args.backgroundColor || '#ffffff'} !important; }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color for the story canvas',
    },
    headerColor: {
      control: { type: 'color' },
      description: 'Color for the main heading text',
    },
    textColor: {
      control: { type: 'color' },
      description: 'Color for tagline and paragraph text',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'ThreeColumn', 'TwoColumn', 'TwoColumnBlack', 'ThreeColumnMinimal', 'ThreeColumnMinimalBlack', 'slider'],
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
    backgroundColor: '#ffffff',
    headerColor: '#000000',
    textColor: '#666666',
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
    backgroundColor: "#ffffff",
    headerColor: "#000000",
    textColor: "#666666"
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
    backgroundColor: "#000000",
    headerColor: "#FFFFFF"
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
    backgroundColor: "#000000"
  },
};

export const Slider: Story = {
  args: {
    variant: 'slider',
    tagline: "Logo carousel",
    heading: 'Trusted by industry leaders',
    description: 'Our products are used by leading companies worldwide. This smooth-scrolling carousel showcases our partners and clients in an engaging way.',
  },
};