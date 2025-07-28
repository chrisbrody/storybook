import type { Meta, StoryObj } from "@storybook/react";
import { BlogSection } from "@/slices/blog-section";

const meta: Meta<typeof BlogSection> = {
  title: "Slices/Blog Section",
  component: BlogSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A sophisticated blog section component designed for luxury interior design websites. Features customizable layout options, image controls, and comprehensive styling flexibility. Built on shadcn/ui foundations with full accessibility support and responsive design perfect for showcasing interior design projects, case studies, and design insights.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
      description: "Background color of the section",
    },
    textColor: {
      control: { type: "color" },
      description: "Main text color for headlines and content",
    },
    taglineColor: {
      control: { type: "color" },
      description: "Color for the tagline text (if not set, uses textColor with opacity)",
    },
    metaTextColor: {
      control: { type: "color" },
      description: "Color for meta text like dates and categories (if not set, uses textColor with opacity)",
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
    showImages: {
      control: { type: "boolean" },
      description: "Show/hide blog post images",
    },
    imageAspectRatio: {
      control: { type: "number", min: 0.5, max: 3, step: 0.1 },
      description: "Aspect ratio for blog post images (width/height)",
    },
    gridColumns: {
      control: { type: "select" },
      options: ["2", "3", "4"],
      description: "Number of columns in the blog grid",
    },
    cardGap: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Spacing between blog cards",
    },
    hoverEffect: {
      control: { type: "boolean" },
      description: "Enable hover effects on blog cards",
    },
    linkColor: {
      control: { type: "color" },
      description: "Color for blog post title links (if not set, uses textColor)",
    },
    hoverLinkColor: {
      control: { type: "color" },
      description: "Color for blog post title links on hover (if not set, uses linkColor)",
    },
  },
  args: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
    tagline: "Interior Design Projects",
    headline: "Latest Design Transformations & Luxury Home Projects",
    description: "Explore our portfolio of award-winning interior design projects featuring contemporary kitchens, luxury bathrooms, and complete home transformations across the Twin Cities.",
    showImages: true,
    imageAspectRatio: 4/3,
    gridColumns: "4",
    cardGap: "medium",
    hoverEffect: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  argTypes: {
    // Hide controls not used in Default layout
    posts: { table: { disable: true } },
  },
};

