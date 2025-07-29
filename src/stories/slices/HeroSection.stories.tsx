import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from '../../slices/hero-section';

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
    heroImage: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload a hero image (PNG, JPG, JPEG, GIF, WebP)',
    },
  },
  args: {
    variant: 'default',
    tagline: 'Interior Design Studio',
    heading: 'Transform Your Space with Expert Interior Design',
    description: 'Create stunning, functional interiors that reflect your unique style and enhance your daily living. Our award-winning team specializes in luxury residential and commercial design projects.',
    primaryButtonText: 'Schedule Consultation',
    primaryButtonVariant: 'default',
    secondaryButtonText: 'View Portfolio',
    secondaryButtonVariant: 'outline',
    checklistItems: ['Award-winning design expertise', 'Full-service project management', 'Premium material selection'],
    socialProofText: 'Trusted by 500+ discerning homeowners',
    fontFamily: 'Inter',
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop',
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    variant: 'default',
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop',
  },
  argTypes: {
    // Hide controls not used in Default layout
    socialProofText: { table: { disable: true } },
  }
};

export const Checklist: Story = {
  args: {
    variant: 'checklist',
    tagline: 'Interior Design Studio',
    heading: 'Luxury Interior Design for Discerning Homeowners',
    description: 'From initial concept to final installation, we create sophisticated interiors that perfectly balance aesthetics and functionality for modern living.',
    checklistItems: ['Custom space planning and design', 'Premium material sourcing and selection', 'Full project management and installation'],
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
  },
  argTypes: {
    // Hide controls not used in Checklist layout
    socialProofText: { table: { disable: true } },
  }
};

export const Centered: Story = {
  args: {
    variant: 'centered',
    tagline: 'Award-Winning Design',
    heading: 'Creating Exceptional Interiors Since 2010',
    description: 'Our sophisticated approach to interior design transforms ordinary spaces into extraordinary environments that enhance your lifestyle and reflect your personal aesthetic.',
    socialProofText: 'Trusted by 500+ luxury homeowners',
  },
  argTypes: {
    // Hide controls not used in Centered layout
    heroImage: { table: { disable: true } },
  }
};

export const Video: Story = {
  args: {
    variant: 'video',
    tagline: 'Design Process',
    heading: 'See Our Interior Design Process in Action',
    description: 'Discover how we transform spaces from concept to completion with our comprehensive design approach, premium materials, and meticulous attention to detail.',
    secondaryButtonText: 'Watch design process',
    heroImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
  },
  argTypes: {
    // Hide controls not used in Video layout
    socialProofText: { table: { disable: true } },
    secondaryButtonVariant: { table: { disable: true } },
  }
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    heading: 'Sophisticated Interiors That Inspire Daily Living',
    description: 'We specialize in creating timeless, elegant spaces that seamlessly blend luxury with functionality, transforming houses into homes that truly reflect your lifestyle and taste.',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=500&fit=crop',
  },
  argTypes: {
    // Hide controls not used in Minimal layout
    tagline: { table: { disable: true } },
    socialProofText: { table: { disable: true } },
  }
};

export const CustomContent: Story = {
  args: {
    variant: 'checklist',
    tagline: 'Featured Project',
    heading: 'Contemporary Kitchen Remodel - Minnetonka',
    description: 'A stunning transformation that perfectly balances modern sophistication with family-friendly functionality, creating the heart of this luxury home.',
    primaryButtonText: 'Schedule Consultation',
    secondaryButtonText: 'View Gallery',
    checklistItems: ['Open floor plan with custom island', 'Premium materials and finishes', 'Integrated high-end appliances', 'Strategic lighting design'],
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop',
  },
  argTypes: {
    // Hide controls not used in CustomContent layout
    socialProofText: { table: { disable: true } },
  }

};