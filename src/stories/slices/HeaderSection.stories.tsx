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
      table: { category: 'Content', subcategory: '1. Tagline' },
    },
    taglineFont: {
      control: { type: 'select' },
      options: ['Inter', 'Roboto', 'Open Sans', 'Playfair Display', 'Source Code Pro'],
      description: 'Font family for the tagline',
      table: { category: 'Content', subcategory: '1. Tagline' },
    },
    taglineColor: {
      control: { type: 'color' },
      description: 'Color for the tagline text',
      table: { category: 'Content', subcategory: '1. Tagline' },
    },
    heading: {
      control: 'text',
      description: 'The main headline text',
      table: { category: 'Content', subcategory: '2. Heading' },
    },
    headlineFont: {
      control: { type: 'select' },
      options: ['Inter', 'Roboto', 'Open Sans', 'Playfair Display', 'Source Code Pro'],
      description: 'Font family for the headline',
      table: { category: 'Content', subcategory: '2. Heading' },
    },
    headlineColor: {
      control: { type: 'color' },
      description: 'Color for the headline text',
      table: { category: 'Content', subcategory: '2. Heading' },
    },
    description: {
      control: 'text',
      description: 'The descriptive text below the heading',
      table: { category: 'Content', subcategory: '3. Description' },
    },
    descriptionFont: {
      control: { type: 'select' },
      options: ['Inter', 'Roboto', 'Open Sans', 'Playfair Display', 'Source Code Pro'],
      description: 'Font family for the description',
      table: { category: 'Content', subcategory: '3. Description' },
    },
    descriptionColor: {
      control: { type: 'color' },
      description: 'Color for the description text',
      table: { category: 'Content', subcategory: '3. Description' },
    },
    layout: {
      control: { type: 'select' },
      options: ['default', 'centered', 'left-aligned', 'left-breadcrumbs', 'hero', 'hero-breadcrumbs', 'minimal', 'split'],
      description: 'Layout variant - different structural layouts for various use cases',
      table: { category: 'Layout & Styling' },
    },
    breadcrumbs: {
      control: { type: 'object' },
      description: 'Array of breadcrumb items for breadcrumb layouts',
      table: { category: 'Layout & Styling' },
    },
    alignment: {
      control: { type: 'select' },
      options: ['center', 'left'],
      description: 'Text alignment - center always centers, left centers on mobile but left-aligns on desktop (used in default layout only)',
      table: { category: 'Layout & Styling' },
    },
    background: {
      control: { type: 'select' },
      options: ['default', 'muted', 'accent'],
      description: 'Background color variant',
      table: { category: 'Layout & Styling' },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the section',
      table: { category: 'Layout & Styling' },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
      table: { category: 'Advanced' },
    },
  },
  args: {
    tagline: 'Interior Design Studio',
    heading: 'Transform Your Space with Expert Interior Design',
    description: 'Eminent Interior Design creates sophisticated, luxury spaces that reflect your personal style and enhance your daily living experience.',
    taglineVariant: 'ghost',
    alignment: 'center',
    background: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof HeaderSection>;

export const Default: Story = {
  args: {},
  argTypes: {
    taglineVariant: { table: { disable: true } },
    alignment: { table: { disable: true } },
    breadcrumbs: { table: { disable: true } },
  },
};

export const LeftAligned: Story = {
  args: {
    layout: 'left-aligned',
    tagline: 'Eminent Interior Design',
    heading: 'Creating Exceptional Spaces for Luxury Living',
    description: 'Our expert team specializes in high-end residential and commercial interior design, delivering stunning results that exceed expectations while maintaining functionality and timeless appeal.',
  },
  argTypes: {
    taglineVariant: { table: { disable: true } },
    alignment: { table: { disable: true } },
    breadcrumbs: { table: { disable: true } },
  },
};

export const LeftBreadCrumbs: Story = {
  args: {
    layout: 'left-breadcrumbs',
    tagline: 'Eminent Interior Design',
    heading: 'Creating Exceptional Spaces for Luxury Living',
    description: 'Our expert team specializes in high-end residential and commercial interior design, delivering stunning results that exceed expectations while maintaining functionality and timeless appeal.',
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Header Sections", href: "/header-sections" },
      { label: "Header Section Five" }
    ],
  },
  argTypes: {
    taglineVariant: { table: { disable: true } },
    alignment: { table: { disable: true } },
  },
};

export const Hero: Story = {
  args: {
    layout: 'hero',
    tagline: 'Luxury Interior Design Studio',
    heading: 'Transform Your Home Into a Masterpiece',
    description: 'Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life through sophisticated design solutions.',
    backgroundColor: '#1a1a1a',
    taglineColor: '#fafafa',
    headlineColor: '#fafafa',
    descriptionColor: '#fafafa',
  },
  argTypes: {
    taglineVariant: { table: { disable: true } },
    alignment: { table: { disable: true } },
    breadcrumbs: { table: { disable: true } },
  },
};

export const HeroLeftAligned: Story = {
  args: {
    layout: 'hero-left-aligned',
    tagline: 'Luxury Interior Design Studio',
    heading: 'Transform Your Home Into a Masterpiece',
    description: 'Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life through sophisticated design solutions.',
    backgroundColor: '#1a1a1a',
    taglineColor: '#fafafa',
    headlineColor: '#fafafa',
    descriptionColor: '#fafafa',
  },
  argTypes: {
    taglineVariant: { table: { disable: true } },
    alignment: { table: { disable: true } },
  },
};

export const HeroBreadcrumbs: Story = {
  args: {
    layout: 'hero-breadcrumbs',
    tagline: 'Luxury Interior Design Studio',
    heading: 'Transform Your Home Into a Masterpiece',
    description: 'Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life through sophisticated design solutions.',
    backgroundColor: '#1a1a1a',
    taglineColor: '#fafafa',
    headlineColor: '#fafafa',
    descriptionColor: '#fafafa',
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Luxury Projects", href: "/luxury-projects" },
      { label: "Modern Living Spaces" }
    ],
  },
  argTypes: {
    taglineVariant: { table: { disable: true } },
    alignment: { table: { disable: true } },
  },
};

export const Minimal: Story = {
  args: {
    layout: 'minimal',
    heading: 'Expert Interior Design Services',
    description: 'Creating beautiful, functional spaces that enhance your lifestyle through thoughtful design and premium materials.',
  },
  argTypes: {
    taglineVariant: { table: { disable: true } },
    alignment: { table: { disable: true } },
    tagline: { table: { disable: true } },
    breadcrumbs: { table: { disable: true } },
  },
};

export const Split: Story = {
  args: {
    layout: 'split',
    tagline: 'Interior Design Studio',
    heading: 'Luxury Design Solutions for Modern Living',
    description: 'Our comprehensive approach to interior design combines aesthetic excellence with practical functionality, creating spaces that are both beautiful and livable for discerning homeowners.',
  },
  argTypes: {
    taglineVariant: { table: { disable: true } },
    alignment: { table: { disable: true } },
    breadcrumbs: { table: { disable: true } },
  },
};

export const CustomStyling: Story = {
  args: {
    layout: 'default',
    tagline: 'Custom Design Solutions',
    heading: 'Tailored Interior Design for Your Unique Vision',
    description: 'Every project is customized to reflect your personal style and functional needs, ensuring a space that truly feels like home.',
    className: 'border-t-4 border-blue-500',
    taglineColor: "#1f1f1f",
    headlineColor: "#1f1f1f",
    backgroundColor: '#f8f9fa',
  },
  argTypes: {
    taglineVariant: { table: { disable: true } },
    breadcrumbs: { table: { disable: true } },
  },
};