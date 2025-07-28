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
      options: ["vertical", "horizontal", "horizontal-with-paragraph", "with-image", "with-form", "split-screen", "simple"],
      description: "Layout variant - vertical (centered), horizontal (side-by-side), horizontal-with-paragraph (horizontal with paragraph), with-image (image + content), with-form (content + form + image), split-screen (desktop/mobile preview), or simple (clean centered design)",
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
    paragraph: {
      control: { type: "text" },
      description: "Paragraph text below the headline (horizontal-with-paragraph layout only)",
    },
    primaryButtonVariant: {
      control: { type: "select" },
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "Primary button (Get started) style variant",
    },
    secondaryButtonVariant: {
      control: { type: "select" },
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "Secondary button (Learn more) style variant",
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
    paragraph: "Add one or two compelling sentences that reinforce your main value proposition and overcome final objections.",
    primaryButtonVariant: "secondary",
    secondaryButtonVariant: "default",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonVariant: "secondary",
  },
  argTypes: {
    // Hide controls not used in vertical layout
    learnMoreColor: { table: { disable: true } },
    emailPlaceholder: { table: { disable: true } },
    formButtonText: { table: { disable: true } },
    showEmailForm: { table: { disable: true } },
    paragraph: { table: { disable: true } },
    primaryButtonVariant: { table: { disable: true } },
    secondaryButtonVariant: { table: { disable: true } },
    imageSrc: { table: { disable: true } },
    imageAlt: { table: { disable: true } },
  },
};

export const Horizontal: Story = {
  args: {
    layout: "horizontal",
    headline: "Award-Winning Interior Design for Luxury Homes",
    buttonText: "View Portfolio",
    primaryButtonVariant: "secondary",
    secondaryButtonVariant: "default",
  },
  argTypes: {
    // Hide controls not used in horizontal layout
    tagline: { table: { disable: true } },
    description: { table: { disable: true } },
    showArrow: { table: { disable: true } },
    buttonVariant: { table: { disable: true } },
    imageSrc: { table: { disable: true } },
    imageAlt: { table: { disable: true } },
    emailPlaceholder: { table: { disable: true } },
    formButtonText: { table: { disable: true } },
    showEmailForm: { table: { disable: true } },
    paragraph: { table: { disable: true } },
  },
};

export const WithImage: Story = {
  args: {
    layout: "with-image",
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
    tagline: "Luxury Interior Design",
    headline: "Transform Your Space with Award-Winning Design",
    description: "Our expert team creates stunning, functional spaces that reflect your unique style and enhance your daily life through thoughtful design and premium materials.",
    buttonText: "View Our Portfolio",
    imageSrc: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=800&fit=crop&crop=center&q=80",
    imageAlt: "Luxury modern living room with custom millwork and premium finishes",
  },
  argTypes: {
    // Hide controls not used in WithImage layout
    emailPlaceholder: { table: { disable: true } },
    formButtonText: { table: { disable: true } },
    showEmailForm: { table: { disable: true } },
    learnMoreColor: { table: { disable: true } },
    primaryButtonVariant: { table: { disable: true } },
    secondaryButtonVariant: { table: { disable: true } },
    paragraph: { table: { disable: true } },
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
  argTypes: {
    // Hide controls not used in WithForm layout
    learnMoreColor: { table: { disable: true } },
    buttonText: { table: { disable: true } },
    paragraph: { table: { disable: true } },
    primaryButtonVariant: { table: { disable: true } },
    secondaryButtonVariant: { table: { disable: true } },
  },
};

export const HorizontalWithParagraph: Story = {
  args: {
    layout: "horizontal-with-paragraph",
    backgroundColor: "#000000",
    textColor: "#ffffff",
    headline: "Transform Your Space with Expert Interior Design",
    paragraph: "Experience luxury interior design that reflects your unique style and enhances your daily life. Our award-winning team creates stunning, functional spaces.",
    buttonText: "Schedule Consultation",
    primaryButtonVariant: "secondary",
    secondaryButtonVariant: "default",
  },
  argTypes: {
    // Hide controls not used in horizontal-with-paragraph layout
    tagline: { table: { disable: true } },
    description: { table: { disable: true } },
    buttonVariant: { table: { disable: true } },
    learnMoreColor: { table: { disable: true } },
    imageSrc: { table: { disable: true } },
    imageAlt: { table: { disable: true } },
    emailPlaceholder: { table: { disable: true } },
    formButtonText: { table: { disable: true } },
    showEmailForm: { table: { disable: true } },
  },
};

export const SplitScreen: Story = {
  args: {
    layout: "split-screen",
    backgroundColor: "#000000",
    textColor: "#ffffff",
    tagline: "Eminent Interior Design",
    headline: "Transform Your Luxury Home with Expert Interior Design",
    description: "Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life.",
    buttonText: "Schedule Consultation",
    buttonVariant: "ghost",
    showArrow: true,
    imageSrc: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=600&fit=crop&crop=center&q=80",
    imageAlt: "Luxury interior design showcasing modern living space with premium finishes",
  },
  argTypes: {
    // Hide controls not used in SplitScreen layout
    learnMoreColor: { table: { disable: true } },
    emailPlaceholder: { table: { disable: true } },
    formButtonText: { table: { disable: true } },
    showEmailForm: { table: { disable: true } },
    paragraph: { table: { disable: true } },
    primaryButtonVariant: { table: { disable: true } },
    secondaryButtonVariant: { table: { disable: true } },
  },
};

export const Simple: Story = {
  args: {
    layout: "simple",
    backgroundColor: "#000000",
    textColor: "#ffffff",
    tagline: "Luxury Interior Design",
    headline: "Transform Your Space with Expert Design",
    buttonText: "Schedule Consultation",
    buttonVariant: "secondary",
    showArrow: true,
  },
  argTypes: {
    // Hide controls not used in Simple layout
    description: { table: { disable: true } },
    emailPlaceholder: { table: { disable: true } },
    formButtonText: { table: { disable: true } },
    showEmailForm: { table: { disable: true } },
    learnMoreColor: { table: { disable: true } },
    primaryButtonVariant: { table: { disable: true } },
    secondaryButtonVariant: { table: { disable: true } },
    paragraph: { table: { disable: true } },
    imageSrc: { table: { disable: true } },
    imageAlt: { table: { disable: true } },
  },
};