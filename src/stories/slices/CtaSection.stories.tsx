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
      options: ["vertical", "horizontal"],
      description: "Layout variant - vertical (centered) or horizontal (side-by-side)",
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