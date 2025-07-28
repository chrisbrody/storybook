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
      options: ["vertical", "horizontal", "with-image"],
      description: "Layout variant - vertical (centered), horizontal (side-by-side), or with-image (image + content)",
    },
    imageSrc: {
      control: { type: "file", accept: ".jpg,.jpeg,.png,.gif,.webp" },
      description: "Upload an image file for the with-image layout variant",
    },
    imageAlt: {
      control: { type: "text" },
      description: "Alt text for the image (with-image layout only)",
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
    imageSrc: undefined,
    imageAlt: "Luxury interior design showcase",
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
    imageSrc: undefined,
  },
};