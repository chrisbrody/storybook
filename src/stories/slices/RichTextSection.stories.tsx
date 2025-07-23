import type { Meta, StoryObj } from '@storybook/react';
import { RichTextSection } from '../../slices/rich-text-section';

const meta: Meta<typeof RichTextSection> = {
  title: 'Slices/Rich Text Section',
  component: RichTextSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A rich text article section component featuring author info, featured image, and structured content with various text elements like headings, paragraphs, blockquotes, and lists.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default'],
      description: 'Layout variant for the rich text section',
    },
    date: {
      control: 'text',
      description: 'Publication date displayed in the metadata',
    },
    category: {
      control: 'text',
      description: 'Category displayed in the metadata',
    },
    title: {
      control: 'text',
      description: 'Main article title',
    },
    description: {
      control: 'text',
      description: 'Article description/summary',
    },
    authorName: {
      control: 'text',
      description: 'Author name',
    },
    authorRole: {
      control: 'text',
      description: 'Author role/position',
    },
    authorAvatar: {
      control: 'text',
      description: 'URL for author avatar image',
    },
    featuredImage: {
      control: 'text',
      description: 'URL for the featured article image',
    },
    content: {
      control: 'object',
      description: 'Array of content blocks with different types (paragraph, heading, blockquote, list)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    fontFamily: {
      control: { type: 'select' },
      options: ['Inter', 'Roboto', 'Open Sans', 'Playfair Display', 'Source Code Pro'],
      description: 'Font family for all text elements',
    },
  },
  args: {
    variant: 'default',
    date: 'Nov 11, 2024',
    category: 'Projects',
    title: 'Contemporary Kitchen Remodel - Minnetonka',
    description: 'A stunning transformation of a traditional kitchen into a modern, functional space that perfectly balances style and practicality for everyday living.',
    authorName: 'Eminent Interior Design',
    authorRole: 'Interior Design Studio',
    authorAvatar: 'https://github.com/shadcn.png',
    featuredImage: 'https://ui.shadcn.com/placeholder.svg',
    content: [
      {
        type: 'paragraph',
        text: 'This contemporary kitchen remodel in Minnetonka represents a complete transformation from a dated, compartmentalized space into an open, light-filled hub of the home. Our design approach focused on creating a seamless flow between cooking, dining, and entertaining areas while maximizing both functionality and aesthetic appeal.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Design Vision & Goals'
      },
      {
        type: 'paragraph',
        text: 'The homeowners came to us with a clear vision: they wanted a kitchen that would serve as the heart of their home, where family gatherings and dinner parties could unfold naturally. The existing kitchen felt cramped and disconnected from the dining and living areas.'
      },
      {
        type: 'blockquote',
        text: 'We wanted a space that felt both sophisticated and welcoming – somewhere our teenagers would want to hang out and do homework, but elegant enough for entertaining our friends.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Design Elements'
      },
      {
        type: 'paragraph',
        text: 'Our design strategy centered on several core principles that would transform this space:'
      },
      {
        type: 'list',
        items: [
          'Open floor plan connecting kitchen to dining and living areas',
          'High-end appliances integrated seamlessly into custom cabinetry',
          'Large island with seating for casual dining and homework',
          'Premium materials including quartz countertops and hardwood floors',
          'Strategic lighting design for both task and ambient illumination'
        ]
      },
      {
        type: 'paragraph',
        text: 'The result is a sophisticated yet comfortable space that has truly become the heart of the home. Natural light floods the space through enlarged windows, while the neutral color palette with warm wood accents creates an inviting atmosphere that works beautifully for both everyday family life and special occasions.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Materials & Finishes'
      },
      {
        type: 'paragraph',
        text: 'We selected materials that would stand the test of time while reflecting the homeowners\' refined taste. The white oak cabinetry provides warmth and texture, while the Calacatta marble island serves as a stunning focal point. Brushed brass hardware and fixtures add a touch of luxury without feeling ostentatious.'
      },
      {
        type: 'paragraph',
        text: 'The transformation has exceeded our clients\' expectations, creating a space that perfectly balances style, functionality, and livability. This kitchen now serves as the perfect backdrop for everything from quiet morning coffee to lively dinner parties with friends and family.'
      }
    ],
    fontFamily: 'Inter',
  },
};

export default meta;
type Story = StoryObj<typeof RichTextSection>;

export const Default: Story = {
  args: {},
};