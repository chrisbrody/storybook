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
      options: ['default', 'with-carousel', 'with-sidebar'],
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
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload author avatar image (PNG, JPG, JPEG, GIF, WebP)',
    },
    featuredImage: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload featured article image (PNG, JPG, JPEG, GIF, WebP)',
    },
    content: {
      control: 'object',
      description: 'Array of content blocks with different types (paragraph, heading, blockquote, list, image)',
    },
    inlineImage1: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload inline content image 1 (PNG, JPG, JPEG, GIF, WebP)',
    },
    inlineImage2: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload inline content image 2 (PNG, JPG, JPEG, GIF, WebP)',
    },
    carouselImages: {
      control: 'object',
      description: 'Array of images for carousel variant with src and alt properties',
    },
    carouselImage1: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload carousel image 1 (PNG, JPG, JPEG, GIF, WebP)',
    },
    carouselImage2: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload carousel image 2 (PNG, JPG, JPEG, GIF, WebP)',
    },
    carouselImage3: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload carousel image 3 (PNG, JPG, JPEG, GIF, WebP)',
    },
    carouselImage4: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload carousel image 4 (PNG, JPG, JPEG, GIF, WebP)',
    },
    carouselImage5: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload carousel image 5 (PNG, JPG, JPEG, GIF, WebP)',
    },
    carouselImage6: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload carousel image 6 (PNG, JPG, JPEG, GIF, WebP)',
    },
    beforeImage: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload before transformation image (PNG, JPG, JPEG, GIF, WebP)',
    },
    afterImage: {
      control: { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp' },
      description: 'Upload after transformation image (PNG, JPG, JPEG, GIF, WebP)',
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
    featuredImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop',
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
        type: 'image',
        src: 'inline1',
        alt: 'Kitchen interior showing the completed transformation'
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
      },
      {
        type: 'image',
        src: 'inline2',
        alt: 'Detail shot of the kitchen materials and finishes'
      }
    ],
    fontFamily: 'Inter',
  },
};

export default meta;
type Story = StoryObj<typeof RichTextSection>;

export const Default: Story = {
  args: {},
  argTypes: {
    // Hide carousel-specific controls for default variant
    carouselImages: { table: { disable: true } },
    carouselImage1: { table: { disable: true } },
    carouselImage2: { table: { disable: true } },
    carouselImage3: { table: { disable: true } },
    carouselImage4: { table: { disable: true } },
    carouselImage5: { table: { disable: true } },
    carouselImage6: { table: { disable: true } },
  },
};

export const WithCarousel: Story = {
  args: {
    variant: 'with-carousel',
    date: 'Dec 15, 2024',
    category: 'Featured Projects',
    title: 'Luxury Bathroom Transformation - Wayzata',
    description: 'This luxury bathroom renovation showcases premium materials and sophisticated design elements that create a spa-like retreat in this Wayzata residence. Every detail was carefully curated to reflect timeless elegance and modern functionality.',
    content: [
      {
        type: 'paragraph',
        text: 'This Wayzata bathroom transformation represents the pinnacle of luxury residential design. Our clients desired a sophisticated retreat that would serve as a daily sanctuary while maintaining the timeless elegance befitting their historic home. The result is a masterful blend of contemporary functionality and classic luxury.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Design Philosophy',
      },
      {
        type: 'paragraph',
        text: 'Our approach centered on creating a serene, spa-like environment using the finest materials and most thoughtful design elements. The space needed to feel both grand and intimate, offering moments of quiet luxury within the busy rhythms of daily life.',
      },
      {
        type: 'image',
        src: 'inline1',
        alt: 'Before transformation - original bathroom layout',
      },
      {
        type: 'blockquote',
        text: 'We wanted a space that felt like a five-star resort spa, but completely personal to our lifestyle and aesthetic preferences.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Premium Materials Selection',
      },
      {
        type: 'list',
        items: [
          'Calacatta Gold marble for vanity countertops and accent walls',
          'Natural travertine flooring with radiant heating system',
          'Custom millwork in rich walnut with integrated storage',
          'Brushed gold fixtures and hardware throughout',
          'Floor-to-ceiling windows with automated privacy glass',
        ],
      },
      {
        type: 'paragraph',
        text: 'The transformation has created a truly exceptional space that elevates the daily ritual of self-care. Natural light floods the room through strategically placed windows, while the carefully curated material palette creates a sense of warmth and luxury that our clients enjoy every day.',
      },
      {
        type: 'image',
        src: 'inline2',
        alt: 'Calacatta Gold marble vanity with walnut millwork details',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Innovative Features',
      },
      {
        type: 'paragraph',
        text: 'Beyond aesthetic beauty, this bathroom incorporates cutting-edge technology and wellness features. The steam shower with chromotherapy lighting, heated floors, and smart mirror with integrated display create a truly modern luxury experience. Every element was selected to enhance both form and function.',
      },
    ],
  },
  argTypes: {
    // Hide featured image control for carousel variant (not used in layout)
    featuredImage: { table: { disable: true } },
  },
};

export const WithSidebar: Story = {
  args: {
    variant: 'with-sidebar',
    date: 'Nov 11, 2024',
    category: 'Projects',
    title: 'Contemporary Kitchen Remodel - Minnetonka',  
    description: 'A stunning transformation of a traditional kitchen into a modern, functional space that perfectly balances style and practicality for everyday living.',
    content: [
      {
        type: 'paragraph',
        text: 'This contemporary kitchen remodel in Minnetonka represents a complete transformation from a dated, compartmentalized space into an open, light-filled hub of the home. Our design approach focused on creating a seamless flow between cooking, dining, and entertaining areas while maximizing both functionality and aesthetic appeal.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Design Vision & Goals',
        id: 'design-vision-goals'
      },
      {
        type: 'paragraph',
        text: 'The homeowners came to us with a clear vision: they wanted a kitchen that would serve as the heart of their home, where family gatherings and dinner parties could unfold naturally. The existing kitchen felt cramped and disconnected from the dining and living areas.'
      },
      {
        type: 'image',
        src: 'inline1',
        alt: 'Before transformation - original cramped kitchen layout'
      },
      {
        type: 'blockquote',
        text: 'We wanted a space that felt both sophisticated and welcoming – somewhere our teenagers would want to hang out and do homework, but elegant enough for entertaining our friends.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Design Elements',
        id: 'key-design-elements'
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
        type: 'slider'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Materials & Finishes',
        id: 'materials-finishes'
      },
      {
        type: 'paragraph',
        text: 'We selected materials that would stand the test of time while reflecting the homeowners\' refined taste. The white oak cabinetry provides warmth and texture, while the Calacatta marble island serves as a stunning focal point. Brushed brass hardware and fixtures add a touch of luxury without feeling ostentatious.'
      },
      {
        type: 'image',
        src: 'inline2',
        alt: 'Calacatta marble island with white oak cabinetry and brass fixtures'
      },
      {
        type: 'heading',
        level: 3,
        text: 'The Result',
        id: 'the-result'
      },
      {
        type: 'paragraph',
        text: 'The transformation has exceeded our clients\' expectations, creating a space that perfectly balances style, functionality, and livability. This kitchen now serves as the perfect backdrop for everything from quiet morning coffee to lively dinner parties with friends and family.'
      }
    ],
  },
  argTypes: {
    // Hide carousel-specific controls for sidebar variant
    carouselImages: { table: { disable: true } },
    carouselImage1: { table: { disable: true } },
    carouselImage2: { table: { disable: true } },
    carouselImage3: { table: { disable: true } },
    carouselImage4: { table: { disable: true } },
    carouselImage5: { table: { disable: true } },
    carouselImage6: { table: { disable: true } },
  },
};