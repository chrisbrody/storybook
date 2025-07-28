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
    posts: {
      control: { type: "object" },
      description: "Array of blog post articles with customizable titles, descriptions, images, dates, and categories",
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
    variant: {
      control: { type: "select" },
      options: ["default", "minimal", "reversed", "featured", "list"],
      description: "Layout variant: 'default' with images and 4-column grid, 'minimal' with text-only cards and author info, 'reversed' with content-first layout and bottom images, 'featured' with two-column layout and button, 'list' with vertical list layout and side images",
    },
    buttonText: {
      control: { type: "text" },
      description: "Text for the button in featured variant",
    },
    showButton: {
      control: { type: "boolean" },
      description: "Show/hide the button in featured variant",
    },
    buttonVariant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "Button variant style",
    },
  },
  args: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
    tagline: "Interior Design Projects",
    headline: "Latest Design Transformations & Luxury Home Projects",
    description: "Explore our portfolio of award-winning interior design projects featuring contemporary kitchens, luxury bathrooms, and complete home transformations across the Twin Cities.",
    posts: [
      {
        id: 1,
        title: "Contemporary Kitchen Remodel - Minnetonka Estate",
        description: "A stunning transformation of a traditional kitchen into a modern culinary space featuring premium quartz countertops, custom cabinetry, and high-end appliances.",
        date: "Mar 15, 2024",
        category: "Kitchen Design",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format",
      },
      {
        id: 2,
        title: "Luxury Master Suite Renovation - Wayzata Residence",
        description: "Complete bedroom and bathroom transformation featuring custom millwork, marble finishes, and sophisticated lighting design for ultimate comfort.",
        date: "Mar 12, 2024",
        category: "Bedroom Design",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&auto=format",
      },
      {
        id: 3,
        title: "Award-Winning Living Space - Edina Home",
        description: "An open-concept living area showcasing contemporary furniture, custom built-ins, and curated art pieces that create an elegant entertaining space.",
        date: "Mar 8, 2024",
        category: "Living Spaces",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop&auto=format",
      },
      {
        id: 4,
        title: "Custom Home Office Design - Plymouth Executive Home",
        description: "A sophisticated home office featuring built-in shelving, premium hardwood flooring, and carefully selected furnishings for productivity and style.",
        date: "Mar 5, 2024",
        category: "Office Design",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format",
      },
    ],
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
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
    tagline: "Design Insights",
    headline: "Expert Interior Design Articles & Tips",
    description: "Discover professional insights and expert advice from our award-winning interior design team. Learn about the latest trends, material selections, and design processes that create stunning luxury homes.",
    gridColumns: "3",
    cardGap: "medium",
    hoverEffect: true,
  },
  argTypes: {
    // Hide controls not used in Minimal layout
    gridColumns: { table: { disable: true } },
    showImages: { table: { disable: true } },
    imageAspectRatio: { table: { disable: true } },
    buttonText: { table: { disable: true } },
    showButton: { table: { disable: true } },
    buttonVariant: { table: { disable: true } },
  },
};

export const Reversed: Story = {
  args: {
    variant: "reversed",
    tagline: "Design Portfolio",
    headline: "Featured Interior Design Projects & Showcase",
    description: "Browse our curated collection of luxury interior design transformations featuring award-winning projects and innovative space solutions for discerning clients.",
    gridColumns: "3",
    cardGap: "medium",
    hoverEffect: true,
    imageAspectRatio: 4/3,
  },
  argTypes: {
    // Hide controls not used in Reversed layout
    gridColumns: { table: { disable: true } },
    buttonText: { table: { disable: true } },
    showButton: { table: { disable: true } },
    buttonVariant: { table: { disable: true } },
  },
};

export const Featured: Story = {
  args: {
    variant: "featured",
    tagline: "Design Insights",
    headline: "Featured Interior Design Projects & Showcase",
    description: "Browse our curated collection of luxury interior design transformations featuring award-winning projects and innovative space solutions for discerning clients.",
    buttonText: "View portfolio",
    showButton: true,
    buttonVariant: "outline",
    showImages: true,
    imageAspectRatio: 4/3,
    hoverEffect: true,
  },
  argTypes: {
    // Hide controls not used in Featured layout
    gridColumns: { table: { disable: true } },
    cardGap: { table: { disable: true } },
  },
};

export const List: Story = {
  args: {
    variant: "list",
    tagline: "Design Insights",
    headline: "Featured Interior Design Projects & Showcase",
    description: "Browse our curated collection of luxury interior design transformations featuring award-winning projects and innovative space solutions for discerning clients.",
    showImages: true,
    hoverEffect: true,
  },
  argTypes: {
    // Hide controls not used in List layout
    gridColumns: { table: { disable: true } },
    cardGap: { table: { disable: true } },
    imageAspectRatio: { table: { disable: true } },
    showButton: { table: { disable: true } },
    buttonText: { table: { disable: true } },
    buttonVariant: { table: { disable: true } },
  },
};

