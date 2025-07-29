import type { Meta, StoryObj } from '@storybook/react';
import { FaqSection } from '../../slices/faq-section';

const meta: Meta<typeof FaqSection> = {
  title: 'Slices/FAQ Section',
  component: FaqSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A two-column FAQ section with sidebar navigation and categorized questions. Features General and Billing sections with expandable accordion items.',
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
    contactLinkText: {
      control: 'text',
      description: 'Text for the contact link in the description',
    },
    faqItems: {
      control: 'object',
      description: 'Array of FAQ items with id, question, and answer',
    },
    ctaHeading: {
      control: 'text',
      description: 'Heading for the call-to-action section',
    },
    ctaDescription: {
      control: 'text',
      description: 'Description text for the call-to-action section',
    },
    ctaButtonText: {
      control: 'text',
      description: 'Text for the call-to-action button',
    },
    defaultOpenItem: {
      control: 'text',
      description: 'ID of the FAQ item that should be open by default',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'sidebar', 'side-by-side', 'grid'],
      description: 'Layout variant for the FAQ section',
    },
    fontFamily: {
      control: { type: 'select' },
      options: ['Inter', 'Roboto', 'Open Sans', 'Playfair Display', 'Source Code Pro'],
      description: 'Font family for all text elements',
    },
  },
  args: {
    tagline: 'FAQ section',
    heading: 'Frequently asked questions',
    description: "We've compiled the most important information to help you get the most out of your interior design experience. Can't find what you're looking for?",
    contactLinkText: 'Contact us.',
    faqItems: [
      {
        id: 'item-1',
        question: 'What interior design services do you offer?',
        answer: 'We offer comprehensive interior design services including space planning, color consultation, furniture selection, lighting design, window treatments, and full-room makeovers for residential and commercial spaces.'
      },
      {
        id: 'item-2',
        question: 'How does the design process work?',
        answer: 'Our process begins with an initial consultation to understand your style, needs, and budget. We then create design concepts, present mood boards and 3D renderings, and guide you through implementation from furniture selection to final styling.'
      },
      {
        id: 'item-3',
        question: 'Do you work within specific budgets?',
        answer: 'Absolutely! We work with a variety of budgets and will create a design plan that maximizes your investment. During our consultation, we\'ll discuss your budget and tailor our recommendations accordingly.'
      },
      {
        id: 'item-4',
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary depending on scope and complexity. A single room refresh may take 4-6 weeks, while a full home renovation can take 3-6 months. We\'ll provide a detailed timeline during your consultation.'
      },
      {
        id: 'item-5',
        question: 'Do you handle furniture purchasing and delivery?',
        answer: 'Yes, we can manage the entire procurement process including furniture ordering, delivery coordination, and installation. We work with trusted vendors to ensure quality and timely delivery.'
      },
      {
        id: 'item-6',
        question: 'Can you work with my existing furniture?',
        answer: 'Definitely! We love incorporating your existing pieces into new designs. We\'ll assess what you have and show you how to refresh your space by rearranging, reupholstering, or adding complementary pieces.'
      }
    ],
    ctaHeading: 'Still have questions?',
    ctaDescription: 'Have questions or need assistance? Our team is here to help!',
    ctaButtonText: 'Contact us',
    defaultOpenItem: 'item-1',
    variant: 'default',
    fontFamily: 'Inter',
  },
};

export default meta;
type Story = StoryObj<typeof FaqSection>;

export const Default: Story = {
  args: {},
};

export const SidebarLayout: Story = {
  args: {
    variant: 'sidebar',
    tagline: 'FAQ section',
    heading: 'Frequently asked questions',
    description: "We've compiled the most important information to help you get the most out of your interior design experience. Can't find what you're looking for?",
    contactLinkText: 'Contact us.',
    faqItems: [
      {
        id: 'item-1',
        question: 'What interior design services do you offer?',
        answer: 'We offer comprehensive interior design services including space planning, color consultation, furniture selection, lighting design, window treatments, and full-room makeovers for residential and commercial spaces.'
      },
      {
        id: 'item-2',
        question: 'How does the design process work?',
        answer: 'Our process begins with an initial consultation to understand your style, needs, and budget. We then create design concepts, present mood boards and 3D renderings, and guide you through implementation from furniture selection to final styling.'
      },
      {
        id: 'item-3',
        question: 'Do you work within specific budgets?',
        answer: 'Absolutely! We work with a variety of budgets and will create a design plan that maximizes your investment. During our consultation, we\'ll discuss your budget and tailor our recommendations accordingly.'
      },
      {
        id: 'item-4',
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary depending on scope and complexity. A single room refresh may take 4-6 weeks, while a full home renovation can take 3-6 months. We\'ll provide a detailed timeline during your consultation.'
      },
      {
        id: 'item-5',
        question: 'Do you handle furniture purchasing and delivery?',
        answer: 'Yes, we can manage the entire procurement process including furniture ordering, delivery coordination, and installation. We work with trusted vendors to ensure quality and timely delivery.'
      },
      {
        id: 'item-6',
        question: 'Can you work with my existing furniture?',
        answer: 'Definitely! We love incorporating your existing pieces into new designs. We\'ll assess what you have and show you how to refresh your space by rearranging, reupholstering, or adding complementary pieces.'
      }
    ],
    defaultOpenItem: 'item-1',
  },
  argTypes: {
    // Hide controls not used in SidebarLayout layout
    ctaHeading: { table: { disable: true } },
    ctaDescription: { table: { disable: true } },
    ctaButtonText: { table: { disable: true } },
    defaultOpenItem: { table: { disable: true } },
  },
};

export const SideBySideLayout: Story = {
  args: {
    variant: 'side-by-side',
    tagline: 'FAQ section',
    heading: 'Frequently asked questions',
    description: "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for?",
    contactLinkText: 'Contact us.',
    faqItems: [
      {
        id: 'item-1',
        question: 'What interior design services do you offer?',
        answer: 'We offer comprehensive interior design services including space planning, color consultation, furniture selection, lighting design, window treatments, and full-room makeovers for residential and commercial spaces.'
      },
      {
        id: 'item-2',
        question: 'How does the design process work?',
        answer: 'Our process begins with an initial consultation to understand your style, needs, and budget. We then create design concepts, present mood boards and 3D renderings, and guide you through implementation from furniture selection to final styling.'
      },
      {
        id: 'item-3',
        question: 'Do you work within specific budgets?',
        answer: 'Absolutely! We work with a variety of budgets and will create a design plan that maximizes your investment. During our consultation, we\'ll discuss your budget and tailor our recommendations accordingly.'
      },
      {
        id: 'item-4',
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary depending on scope and complexity. A single room refresh may take 4-6 weeks, while a full home renovation can take 3-6 months. We\'ll provide a detailed timeline during your consultation.'
      },
      {
        id: 'item-5',
        question: 'Do you handle furniture purchasing and delivery?',
        answer: 'Yes, we can manage the entire procurement process including furniture ordering, delivery coordination, and installation. We work with trusted vendors to ensure quality and timely delivery.'
      },
      {
        id: 'item-6',
        question: 'Can you work with my existing furniture?',
        answer: 'Definitely! We love incorporating your existing pieces into new designs. We\'ll assess what you have and show you how to refresh your space by rearranging, reupholstering, or adding complementary pieces.'
      }
    ],
    ctaHeading: 'Still have questions?',
    ctaDescription: 'Have questions or need assistance? Our team is here to help!',
    ctaButtonText: 'Contact us',
    defaultOpenItem: 'item-1',
  },
  argTypes: {
    // Hide controls not used in SideBySideLayout layout
    ctaHeading: { table: { disable: true } },
    ctaDescription: { table: { disable: true } },
    ctaButtonText: { table: { disable: true } },
    defaultOpenItem: { table: { disable: true } },
  },
};

export const GridLayout: Story = {
  args: {
    variant: 'grid',
    tagline: 'FAQ section',
    heading: 'Frequently asked questions',
    description: "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for?",
    contactLinkText: 'Contact us.',
    faqItems: [
      {
        id: 'item-1',
        question: 'What interior design services do you offer?',
        answer: 'We offer comprehensive interior design services including space planning, color consultation, furniture selection, lighting design, window treatments, and full-room makeovers for residential and commercial spaces.'
      },
      {
        id: 'item-2',
        question: 'How does the design process work?',
        answer: 'Our process begins with an initial consultation to understand your style, needs, and budget. We then create design concepts, present mood boards and 3D renderings, and guide you through implementation from furniture selection to final styling.'
      },
      {
        id: 'item-3',
        question: 'Do you work within specific budgets?',
        answer: 'Absolutely! We work with a variety of budgets and will create a design plan that maximizes your investment. During our consultation, we\'ll discuss your budget and tailor our recommendations accordingly.'
      },
      {
        id: 'item-4',
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary depending on scope and complexity. A single room refresh may take 4-6 weeks, while a full home renovation can take 3-6 months. We\'ll provide a detailed timeline during your consultation.'
      },
      {
        id: 'item-5',
        question: 'Do you handle furniture purchasing and delivery?',
        answer: 'Yes, we can manage the entire procurement process including furniture ordering, delivery coordination, and installation. We work with trusted vendors to ensure quality and timely delivery.'
      },
      {
        id: 'item-6',
        question: 'Can you work with my existing furniture?',
        answer: 'Definitely! We love incorporating your existing pieces into new designs. We\'ll assess what you have and show you how to refresh your space by rearranging, reupholstering, or adding complementary pieces.'
      }
    ],
    defaultOpenItem: 'item-1',
  },
  argTypes: {
    // Hide controls not used in GridLayout layout
    ctaHeading: { table: { disable: true } },
    ctaDescription: { table: { disable: true } },
    ctaButtonText: { table: { disable: true } },
    defaultOpenItem: { table: { disable: true } },
  },
};
