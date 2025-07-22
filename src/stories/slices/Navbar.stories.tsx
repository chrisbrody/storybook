import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../../slices/navbar";

const meta: Meta<typeof Navbar> = {
  title: "Slices/Navbar",
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive navbar component based on shadcn/ui Pro Blocks lp-navbar with customizable navigation structure and dropdown menus. Features mobile-responsive design, dropdown navigation, and flexible branding options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    siteTitle: {
      control: 'text',
      description: 'The site title or logo text to display when logo is hidden',
    },
    ctaButtonLabel: {
      control: 'text',
      description: 'Text label for the call-to-action button',
    },
    ctaButtonHref: {
      control: 'text',
      description: 'URL destination for the CTA button',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for custom styling',
    },
    showCTA: {
      control: 'boolean',
      description: 'Whether to display the call-to-action button',
    },
    showLogo: {
      control: 'boolean',
      description: 'Whether to show logo component or text-based site title',
    },
    ctaVariant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Visual style variant for the CTA button',
    },
    ctaSize: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Size variant for the CTA button',
    },
    centerMenu: {
      table: { disable: true }
    },
    leftMenu: {
      table: { disable: true }
    },
    fontFamily: {
      control: { type: 'select' },
      options: ['Inter', 'Roboto', 'Open Sans', 'Playfair Display', 'Source Code Pro'],
      description: 'Font family for navigation text and site title',
    },
  },
  args: {
    siteTitle: 'Your Site',
    ctaButtonLabel: 'Get Started',
    ctaButtonHref: '#get-started',
    className: '',
    showCTA: true,
    showLogo: true,
    ctaVariant: 'default',
    ctaSize: 'default',
    fontFamily: 'Inter',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Minimal: Story = {
  args: {
    showCTA: false,
    showLogo: true,
    siteTitle: 'Minimal Site',
  },
};


export const MenuCentered: Story = {
  args: {
    siteTitle: 'Centered Navigation',
    showLogo: true,
    showCTA: true,
    centerMenu: true,
    ctaButtonLabel: 'Get Started',
    ctaButtonHref: '#get-started',
  },
};

export const MenuLeft: Story = {
  args: {
    siteTitle: 'Left Navigation',
    showLogo: true,
    showCTA: true,
    leftMenu: true,
    ctaButtonLabel: 'Sign up',
    ctaButtonHref: '#signup',
  },
};

export const CustomStyling: Story = {
  args: {
    siteTitle: 'Custom Design',
    className: 'border-t-4 border-blue-500 bg-blue-50',
    ctaButtonLabel: 'Learn More',
    ctaButtonHref: '#learn',
    showLogo: true,
  },
};


