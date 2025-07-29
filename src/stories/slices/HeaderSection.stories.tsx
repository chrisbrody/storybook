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
    alignment: {
      control: { type: 'select' },
      options: ['center', 'left'],
      description: 'Text alignment - center always centers, left centers on mobile but left-aligns on desktop',
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
  },
};

export const CustomStyling: Story = {
  args: {
    tagline: 'Custom Design',
    heading: 'Tailored to your brand',
    description: 'Customize every aspect of your experience to match your unique brand identity.',
    className: 'border-t-4 border-blue-500',
    taglineVariant: "ghost",
    taglineColor: "#1f1f1f",
    headlineColor: "#1f1f1f"
  },
};