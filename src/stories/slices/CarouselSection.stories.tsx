import type { Meta, StoryObj } from '@storybook/react';
import { CarouselSection } from '../../slices/carousel-section';
import type { CarouselSectionProps } from '../../slices/carousel-section';

// Extend CarouselSectionProps with Storybook-specific color controls
interface CarouselSectionStoryProps extends CarouselSectionProps {
  backgroundColor?: string;
  headerColor?: string;
  textColor?: string;
}

const meta: Meta<CarouselSectionStoryProps> = {
  title: 'Slices/Carousel Section',
  component: CarouselSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A carousel section component for showcasing interior design project images. Perfect for displaying portfolio galleries with customizable images that can be uploaded by users. Features hover effects and project information overlays.',
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
            .bg-white { background-color: ${args.backgroundColor || '#ffffff'} !important; }
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
      description: 'Visual variant of the carousel section',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Size variant controlling carousel width and items per view',
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
    autoplay: {
      control: 'boolean',
      description: 'Enable automatic carousel scrolling',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    image1: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload project image 1 (PNG, JPG, JPEG, GIF, WebP)',
    },
    image2: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload project image 2 (PNG, JPG, JPEG, GIF, WebP)',
    },
    image3: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload project image 3 (PNG, JPG, JPEG, GIF, WebP)',
    },
    image4: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload project image 4 (PNG, JPG, JPEG, GIF, WebP)',
    },
    image5: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload project image 5 (PNG, JPG, JPEG, GIF, WebP)',
    },
    image6: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload project image 6 (PNG, JPG, JPEG, GIF, WebP)',
    },
  },
  args: {
    backgroundColor: '#ffffff',
    headerColor: '#000000',
    textColor: '#666666',
    variant: 'default',
    size: 'lg',
    tagline: 'Project Gallery',
    heading: 'Luxury Interior Design Portfolio',
    description: 'Explore our collection of award-winning interior design projects featuring contemporary kitchens, luxury bathrooms, and sophisticated living spaces.',
    autoplay: false,
    image1: undefined,
    image2: undefined,
    image3: undefined,
    image4: undefined,
    image5: undefined,
    image6: undefined,
  },
};

export default meta;
type Story = StoryObj<CarouselSectionStoryProps>;

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
    tagline: 'Featured Projects',
    heading: 'Award-Winning Interior Designs',
    description: 'Discover our most celebrated luxury interior design projects, each carefully crafted to reflect our clients\' unique vision and lifestyle.',
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    backgroundColor: '#F9FAFB',
    tagline: 'Portfolio Showcase',
    heading: 'Transformative Design Solutions',
    description: 'From concept to completion, witness how we transform ordinary spaces into extraordinary environments.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    tagline: 'Compact Gallery',
    heading: 'Featured Project',
    description: 'A focused view of our recent Minnetonka kitchen transformation project.',
  },
};

export const Large: Story = {
  args: {
    size: 'xl',
    tagline: 'Extended Portfolio',
    heading: 'Complete Project Collection',
    description: 'Browse through our comprehensive portfolio of luxury residential and commercial interior design projects spanning over a decade of excellence.',
  },
};

export const FullWidth: Story = {
  args: {
    size: 'full',
    tagline: 'Showcase Gallery',
    heading: 'Interior Design Excellence',
    description: 'Experience our full-width gallery showcasing multiple projects simultaneously, perfect for highlighting the breadth of our design capabilities.',
  },
};

export const KitchenProjects: Story = {
  args: {
    tagline: 'Kitchen Transformations',
    heading: 'Contemporary Kitchen Designs',
    description: 'Explore our specialized kitchen remodeling projects featuring custom cabinetry, premium appliances, and sophisticated material selections.',
    size: 'lg',
  },
};

export const BathroomProjects: Story = {
  args: {
    tagline: 'Bathroom Renovations',
    heading: 'Luxury Spa-Like Retreats',
    description: 'Discover our bathroom transformation projects that combine functionality with resort-style luxury using premium materials and innovative design.',
    variant: 'minimal',
  },
};

export const CommercialProjects: Story = {
  args: {
    tagline: 'Commercial Spaces',
    heading: 'Professional Interior Design',
    description: 'View our commercial interior design portfolio featuring office spaces, retail environments, and hospitality venues that enhance both aesthetics and functionality.',
    size: 'full',
    variant: 'dark',
    backgroundColor: '#0F172A',
    headerColor: '#FFFFFF',
    textColor: '#CBD5E1',
  },
};

