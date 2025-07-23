import type { Meta, StoryObj } from '@storybook/react';
import { SliderSection } from '../../slices/slider-section';
import type { SliderSectionProps } from '../../slices/slider-section';

// Extend SliderSectionProps with Storybook-specific color controls
interface SliderSectionStoryProps extends SliderSectionProps {
  backgroundColor?: string;
  headerColor?: string;
  textColor?: string;
}

const meta: Meta<SliderSectionStoryProps> = {
  title: 'Components/Slider',
  component: SliderSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A before/after slider section component for showcasing interior design transformations. Features an interactive slider control below the image to reveal the transformation results.',
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
      options: ['default', 'dark', 'minimal'],
      description: 'Visual variant of the slider section',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Size variant controlling slider width',
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
    projectTitle: {
      control: 'text',
      description: 'The project title shown on the image overlay',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    beforeImage: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload before image (PNG, JPG, JPEG, GIF, WebP)',
    },
    afterImage: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload after image (PNG, JPG, JPEG, GIF, WebP)',
    },
  },
  args: {
    backgroundColor: '#ffffff',
    headerColor: '#000000',
    textColor: '#666666',
    variant: 'default',
    size: 'lg',
    tagline: 'Transformation Gallery',
    heading: 'Before & After Reveals',
    description: 'Discover the dramatic transformations of our interior design projects. Drag the slider to reveal the stunning before and after results of our work.',
    projectTitle: 'Kitchen Transformation - Minnetonka',
    beforeImage: undefined,
    afterImage: undefined,
  },
};

export default meta;
type Story = StoryObj<SliderSectionStoryProps>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'lg',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    backgroundColor: '#111827',
    headerColor: '#FFFFFF',
    textColor: '#D1D5DB',
    tagline: 'Project Transformations',
    heading: 'Stunning Before & After Results',
    description: 'Witness the remarkable transformations that showcase our expertise in luxury interior design and space planning.',
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    backgroundColor: '#F9FAFB',
    tagline: 'Design Showcase',
    heading: 'Transformation Portfolio',
    description: 'Explore how we transform ordinary spaces into extraordinary environments through thoughtful design and premium materials.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    tagline: 'Featured Project',
    heading: 'Kitchen Renovation',
    description: 'A detailed look at our award-winning Minnetonka kitchen transformation project.',
    projectTitle: 'Modern Kitchen Design - Minnetonka',
  },
};

export const Large: Story = {
  args: {
    size: 'xl',
    tagline: 'Signature Projects',
    heading: 'Complete Home Transformations',
    description: 'Our comprehensive approach to interior design delivers stunning results that exceed client expectations and create lasting value.',
  },
};

export const FullWidth: Story = {
  args: {
    size: 'full',
    tagline: 'Portfolio Highlight',
    heading: 'Award-Winning Design Excellence',
    description: 'Experience our full-width showcase featuring our most celebrated interior design transformations, demonstrating our commitment to luxury and sophistication.',
  },
};