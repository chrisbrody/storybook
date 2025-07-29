# Eminent Interior Design - Storybook Component Library

A comprehensive React-based UI component library for **Eminent Interior Design**, a luxury interior design studio. Built with Storybook for component development, documentation, and testing. All components are designed to reflect the sophisticated, premium aesthetic of high-end interior design work.

## 🏗️ Architecture

This project follows a **slice-based architecture** where components are organized as reusable slices that can be composed into larger layouts. Components are built on **shadcn/ui** foundations and styled with Tailwind CSS for consistency and best practices.

## 🎨 Design System

- **Foundation**: shadcn/ui component library
- **Styling**: Tailwind CSS with custom luxury design tokens
- **Typography**: Multiple font family options (Inter, Roboto, Open Sans, Playfair Display, Source Code Pro)
- **Theme**: Dark mode support with sophisticated color palettes
- **Content**: All examples focus on luxury interior design projects and high-end residential work

## 📦 Components Overview

### Core UI Components (`src/components/ui/`)

**With Storybook Documentation:**
- **Typography Components**: Heading, Paragraph, Display Text, Lead Text, Small Text, Caption
- **Interactive Elements**: Button, Link, Dropdown Menu
- **Content Components**: Badge, Blockquote, Quote Attribution, Inline Code
- **Form Components**: Calendar
- **Data Components**: List Typography
- **Feedback Components**: Alert
- **Interactive Components**: Slider

**Additional Components Available:**
- **Layout Components**: Card, Separator, Sheet
- **Form Components**: Input
- **Media Components**: Avatar, Aspect Ratio, Logo
- **Navigation Components**: Accordion
- **Interactive Components**: Carousel
- **Typography Extensions**: Button Typography, Button Variants, Tagline

### Slice Components (`src/slices/`)

**With Storybook Documentation:**

## 🎯 CTA Section (`cta-section/`) ✅
Versatile call-to-action component with multiple layout variants for driving conversions.

**Features:**
- Multiple layout variants (vertical, horizontal, with-image, with-form, simple, split-screen)
- Form integration for email capture and lead generation
- Customizable styling and content for luxury interior design
- Responsive design optimized for all devices

## 🏠 Header Section (`header/`) ✅
Complete website header with navigation and branding.

**Features:**
- Logo integration with tagline support
- Responsive navigation menu
- Professional header layout for luxury design studios

## 🎯 Hero Section (`hero-section/`) ✅
Primary landing section for showcasing interior design work.

**Features:**
- Multiple layout variants (default, checklist, centered, video, minimal)
- Large hero content area with customizable content
- Call-to-action integration
- Premium visual layouts for luxury branding

## 🧭 Navbar (`navbar/`) ✅
Responsive navigation component for site-wide navigation.

**Features:**
- Mobile-responsive design
- Clean, professional navigation structure
- Integration with header components

## 🏷️ Logo Section (`logo-section/`) ✅
Dedicated component for logo display and branding.

**Features:**
- Logo with tagline support
- Flexible branding layouts
- Professional presentation for design studios

## ❓ FAQ Section (`faq-section/`) ✅
Accordion-style FAQ component for client questions.

**Features:**
- Expandable question/answer format
- Interior design focused content
- Clean, accessible accordion interface

## 📝 Rich Text Section (`rich-text-section/`) ✅
Comprehensive article/blog component with multiple layout variants.

**Features:**
- **4 Layout Variants**: Default, With Carousel, With Sidebar, Article TOC
- **Rich content support**: headings, paragraphs, blockquotes, lists, inline images
- **Table of contents sidebar** with smooth scrolling navigation
- **Article TOC variant** with dedicated table of contents for long-form content
- **Before/after slider integration** for project transformations
- **6-image carousel** with luxury project photography
- **Mobile-responsive layouts** optimized for all device types
- **Ultra-luxury project imagery** reflecting high-end interior design work

## 📰 Blog Section (`blog-section/`) ✅
Flexible blog component with multiple layout variants for showcasing articles and insights.

**Features:**
- **5 Layout Variants**: Default, Minimal, Reversed, Featured, List
- **Author integration** with avatars, names, and roles
- **Customizable styling** with color controls and hover effects
- **Responsive grid layouts** with configurable columns and spacing
- **Image support** with aspect ratio controls and toggle functionality
- **Content management** with dates, categories, and descriptions
- **Enhanced Featured variant** with luxury estate content and improved layout
- **List variant** with consolidated content display and improved accessibility

**Available Slices (Components Only - No Storybook Stories Yet):**

## 🎠 Carousel Section (`carousel-section/`)
Image gallery carousel for showcasing interior design projects.

**Features:**
- **6 customizable project images** with drag-and-drop upload support
- **Project overlay information** with hover effects and project titles
- **Multiple size variants**: sm, md, lg, xl, full width options
- **Visual variants**: default, dark, minimal themes
- **Autoplay functionality** with manual controls
- **Responsive design** that works on all devices
- **Luxury project examples**: Kitchen remodels, bathroom transformations, living spaces

**Default Projects Showcased:**
- Contemporary Kitchen Remodel - Minnetonka
- Luxury Bathroom Transformation - Wayzata  
- Modern Living Space - Edina
- Custom Millwork & Built-ins - Plymouth
- Award-Winning Master Suite - Excelsior
- Sophisticated Home Office - Orono

## 🎚️ Slider Section (`slider-section/`)
Before/after transformation slider for dramatic project reveals.

**Features:**
- **Interactive before/after slider** with drag control
- **Visual transformation reveals** showing project progression
- **Premium project examples** with before/after photography
- **Smooth slider interaction** with position control
- **Project information overlay** with studio branding
- **Multiple size variants** for different layout needs
- **Responsive design** that works across all devices

**Perfect for showcasing:**
- Kitchen transformations
- Bathroom renovations
- Living space makeovers
- Any dramatic interior design transformation


## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Storybook Development
```bash
npm run storybook
```

### Build
```bash
npm run build
```

### Build Storybook
```bash
npm run build-storybook
```

## 📚 Storybook Integration

All components include comprehensive Storybook documentation with:

- **Interactive controls** for all component props
- **Multiple story variants** showing different use cases
- **Accessibility testing** with `@storybook/addon-a11y`
- **Responsive design previews** across device sizes
- **Dark mode support** with theme switching
- **File upload controls** for image customization
- **Real-time prop editing** and preview

## 🎯 Usage Examples

### CTA Section
```tsx
<CtaSection
  layout="simple"
  headline="Transform Your Space with Expert Design"
  buttonText="Schedule Consultation"
  backgroundColor="#000000"
  textColor="#ffffff"
/>
```

### Carousel Section
```tsx
<CarouselSection
  variant="default"
  size="lg"
  tagline="Project Gallery"
  heading="Luxury Interior Design Portfolio"
  description="Explore our award-winning projects..."
  autoplay={false}
/>
```

### Rich Text Section - Sidebar Variant
```tsx
<RichTextSection
  variant="with-sidebar"
  title="Contemporary Kitchen Remodel - Minnetonka"
  description="A stunning transformation..."
  beforeImage="before-photo.jpg"
  afterImage="after-photo.jpg"
  content={[
    { type: 'heading', level: 2, text: 'Design Vision', id: 'design-vision' },
    { type: 'paragraph', text: 'Our approach...' },
    { type: 'slider' },
    // ... more content
  ]}
/>
```

### Slider Section
```tsx
<SliderSection
  variant="default"
  size="lg"
  tagline="Transformation Gallery"
  heading="Before & After Reveals"
  beforeImage="kitchen-before.jpg"
  afterImage="kitchen-after.jpg"
  projectTitle="Kitchen Transformation - Minnetonka"
/>
```

## 🎨 Customization

### Typography
- **5 font families** available: Inter, Roboto, Open Sans, Playfair Display, Source Code Pro
- **Responsive typography** scales across device sizes
- **Consistent spacing** and line-height ratios

### Theming
- **Dark mode support** across all components
- **CSS custom properties** for easy theme customization
- **Tailwind CSS integration** for utility-first styling

### Content
- **Luxury interior design focus** with high-end project examples
- **Customizable imagery** with file upload support in Storybook
- **Professional copy** reflecting premium interior design services

## 🚀 Deployment

The Storybook is configured for easy deployment to static hosting services:

```bash
npm run build-storybook
# Deploy the storybook-static folder
```

## 📱 Responsive Design

All components are fully responsive with:
- **Mobile-first approach** using Tailwind CSS breakpoints
- **Flexible layouts** that adapt to screen sizes
- **Touch-friendly interactions** for mobile devices
- **Optimized performance** across all device types

## ♿ Accessibility

- **ARIA labels** and semantic HTML structure
- **Keyboard navigation** support for all interactive elements
- **Screen reader compatibility** with proper heading hierarchy
- **Color contrast compliance** for luxury design aesthetics
- **Focus management** for complex interactive components

---