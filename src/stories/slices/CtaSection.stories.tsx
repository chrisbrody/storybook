import type { Meta, StoryObj } from "@storybook/react";
import { CtaSection } from "@/slices/cta-section";

const meta: Meta<typeof CtaSection> = {
  title: "Slices/CTA Section",
  component: CtaSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A call-to-action section component designed for luxury interior design websites. Built on shadcn/ui foundations with customizable backgrounds, text colors, and content for maximum flexibility.",
      },
    },
  },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
      description: "Background color of the section",
    },
    textColor: {
      control: { type: "color" },
      description: "Text color for headline and content",
    },
    learnMoreColor: {
      control: { type: "color" },
      description: "Color for Learn more button text and border (horizontal layout only)",
    },
    tagline: {
      control: { type: "text" },
      description: "Small tagline text above the headline",
    },
    headline: {
      control: { type: "text" },
      description: "Main headline text",
    },
    description: {
      control: { type: "text" },
      description: "Description text below the headline",
    },
    buttonText: {
      control: { type: "text" },
      description: "Text for the CTA button",
    },
    buttonVariant: {
      control: { type: "select" },
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "Button style variant",
    },
    showArrow: {
      control: { type: "boolean" },
      description: "Show arrow icon in button",
    },
    layout: {
      control: { type: "select" },
      options: ["vertical", "horizontal", "with-image", "with-form"],
      description: "Layout variant - vertical (centered), horizontal (side-by-side), with-image (image + content), or with-form (content + form + image)",
    },
    imageSrc: {
      control: { type: "file", accept: ".jpg,.jpeg,.png,.gif,.webp" },
      description: "Upload an image file for the with-image layout variant",
    },
    imageAlt: {
      control: { type: "text" },
      description: "Alt text for the image (with-image and with-form layouts)",
    },
    emailPlaceholder: {
      control: { type: "text" },
      description: "Placeholder text for email input (with-form layout only)",
    },
    formButtonText: {
      control: { type: "text" },
      description: "Text for the form submit button (with-form layout only)",
    },
    showEmailForm: {
      control: { type: "boolean" },
      description: "Show email form instead of regular button (with-form layout only)",
    },
  },
  args: {
    backgroundColor: "#000000",
    textColor: "#ffffff",
    learnMoreColor: "#ffffff",
    tagline: "Interior Design Studio",
    headline: "Transform Your Space with Expert Interior Design",
    description: "Experience luxury interior design that reflects your unique style and enhances your daily life. Our award-winning team creates stunning, functional spaces that exceed expectations.",
    buttonText: "Schedule Consultation",
    buttonVariant: "default",
    showArrow: true,
    layout: "vertical",
    imageSrc: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=center&q=80",
    imageAlt: "Luxury interior design showcase with premium materials and sophisticated styling",
    emailPlaceholder: "Email",
    formButtonText: "Start for free",
    showEmailForm: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    layout: "horizontal",
    headline: "Award-Winning Interior Design for Luxury Homes",
    buttonText: "View Portfolio",
  },
};

export const WithImage: Story = {
  args: {
    layout: "with-image",
    headline: "Transform Your Luxury Home with Expert Interior Design",
    description: "Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life.",
    buttonText: "Schedule Consultation",
    buttonVariant: "ghost",
    showArrow: true,
    imageSrc: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=800&fit=crop&crop=center&q=80",
    imageAlt: "Luxury modern living room with custom millwork and premium finishes",
  },
};

export const WithForm: Story = {
  args: {
    layout: "with-form",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    tagline: "Eminent Interior Design",
    headline: "Transform Your Luxury Home with Award-Winning Interior Design",
    description: "Experience sophisticated design that creates stunning, functional spaces reflecting your unique style. Our expert team specializes in high-end residential and commercial projects that exceed expectations.",
    emailPlaceholder: "Enter your email",
    formButtonText: "Schedule Consultation",
    buttonVariant: "default",
    showArrow: true,
    showEmailForm: true,
    imageSrc: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&crop=center&q=80",
    imageAlt: "Luxury kitchen with marble countertops and custom cabinetry",
  },
};