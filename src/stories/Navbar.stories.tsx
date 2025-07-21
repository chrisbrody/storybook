import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../slices/navbar";

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
  },
  args: {
    siteTitle: 'Your Site',
    ctaButtonLabel: 'Get Started',
    ctaButtonHref: '#get-started',
    className: '',
    showCTA: true,
    showLogo: true,
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
    showLogo: false,
    siteTitle: 'Minimal Site',
  },
};

export const CustomBranding: Story = {
  args: {
    siteTitle: 'Custom Brand',
    ctaButtonLabel: 'Start Free Trial',
    ctaButtonHref: '#trial',
    className: 'bg-slate-900 text-white border-b border-slate-700',
    showLogo: false,
  },
};

export const WithLogo: Story = {
  args: {
    siteTitle: 'Brand Name',
    ctaButtonLabel: 'Contact Us',
    ctaButtonHref: '#contact',
    showLogo: true,
    showCTA: true,
  },
};

export const NoCTA: Story = {
  args: {
    showCTA: false,
    siteTitle: 'Simple Navigation',
    showLogo: true,
  },
};

export const TextOnly: Story = {
  args: {
    showLogo: false,
    siteTitle: 'Text Brand',
    ctaButtonLabel: 'Sign Up',
    ctaButtonHref: '#signup',
  },
};

export const DarkTheme: Story = {
  args: {
    siteTitle: 'Dark Mode',
    className: 'bg-gray-900 text-white border-b border-gray-700',
    ctaButtonLabel: 'Get Started',
    showLogo: false,
  },
};

export const Marketing: Story = {
  args: {
    siteTitle: 'Marketing Site',
    ctaButtonLabel: 'Start Free Trial',
    ctaButtonHref: '#trial',
    showLogo: true,
    showCTA: true,
  },
};

export const CustomStyling: Story = {
  args: {
    siteTitle: 'Custom Design',
    className: 'border-t-4 border-blue-500 bg-blue-50',
    ctaButtonLabel: 'Learn More',
    ctaButtonHref: '#learn',
    showLogo: false,
  },
};