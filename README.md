# Eminent Interior Design - Storybook Component Library

A comprehensive React-based UI component library for **Eminent Interior Design**, a luxury interior design studio. Built with Storybook for component development, documentation, and testing. All components are designed to reflect the sophisticated, premium aesthetic of high-end interior design work.

## 🆕 Recent Updates

### ✨ New CTA Section Component (Featured)
- **7 comprehensive layout variants** for maximum flexibility
- **Advanced form integration** with email capture capabilities
- **Professional interior design messaging** throughout all variants
- **Complete Storybook documentation** with interactive controls
- **Full accessibility support** with ARIA labels and keyboard navigation

### 🔧 Enhanced Components
- **Improved button variant support** across all slice components
- **Luxury interior design content** integrated throughout the library
- **Mobile-responsive optimizations** for all layout variants
- **Enhanced documentation** with usage examples and best practices

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

**With Complete Storybook Documentation:**

## 🎯 CTA Section (`cta-section/`) ✅ **FEATURED**
Versatile call-to-action component with 7 layout variants for driving conversions.

**Features:**
- **7 Layout Variants**: Default, Horizontal, Horizontal-with-paragraph, With-image, Simple, With-form, Split-screen
- **Advanced Button Controls**: Primary/secondary button variants with full shadcn/ui support
- **Luxury Interior Design Content**: Professional messaging for high-end clientele
- **Form Integration**: Email capture with validation for lead generation
- **Image Support**: Project showcase with upload capabilities
- **Responsive Design**: Optimized layouts for all devices
- **Accessibility**: Full ARIA support and keyboard navigation

**Perfect for:**
- Service introductions and portfolio showcases
- Lead generation and consultation requests
- Final conversion points and announcements
- Feature callouts with supporting visuals

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

---

## 📝 Rich Text Section Variants (Detailed)

### Variant 1: Default
**Features:**
- **Clean article layout** with featured image
- **Author information** with avatar and credentials
- **Inline images** (2) embedded within content
- **Rich content support**: headings, paragraphs, blockquotes, lists
- **Typography controls** with multiple font family options
- **Responsive design** optimized for reading

### Variant 2: With Carousel  
**Features:**
- **Split layout**: Content (left) + Image carousel (right)
- **6-image carousel** with luxury project photography
- **Mobile responsive**: Carousel moves above content on mobile
- **Project information overlays** with hover effects
- **Sticky positioning** for optimal viewing experience
- **All Default variant features** plus carousel integration

### Variant 3: With Sidebar ⭐ **NEW**
**Features:**
- **Professional article layout**: 3/4 content + 1/4 sidebar
- **Table of contents sidebar** with "On this page" navigation
- **Smooth scrolling navigation** to content sections
- **Before/after slider integration** using SliderSection component
- **Featured image** + **2 inline images** + **slider** support
- **Jump-to-section functionality** with smooth scroll behavior
- **Sticky sidebar** that follows scroll position
- **Perfect for long-form content** and detailed project case studies

**Content Types Supported:**
- Paragraphs with custom typography
- Headings (H2, H3) with anchor links
- Blockquotes for client testimonials
- Bulleted lists for project details
- Inline images for project photography
- Before/after sliders for transformations

**All Rich Text Variants Include:**
- **Ultra-luxury project imagery** reflecting 6-figure+ interior design work
- **Premium material showcases**: Calacatta marble, custom millwork, designer fixtures
- **High-end project examples**: Minnetonka kitchen remodel, Wayzata bathroom transformation
- **Professional content structure** for luxury interior design marketing
- **Mobile-optimized layouts** for all device types

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
// Simple variant for focused conversion
<CtaSection
  layout="simple"
  tagline="Luxury Interior Design"
  headline="Transform Your Space with Expert Design"
  buttonText="Schedule Consultation"
  buttonVariant="secondary"
  backgroundColor="#000000"
  textColor="#ffffff"
/>

// With-image variant for portfolio showcase
<CtaSection
  layout="with-image"
  tagline="Portfolio Showcase"
  headline="Award-Winning Kitchen Transformation"
  description="Experience sophisticated design that creates stunning, functional spaces."
  imageSrc="path/to/project-image.jpg"
  imageAlt="Luxury modern kitchen with custom millwork"
  buttonText="View Full Project"
/>

// With-form variant for lead generation
<CtaSection
  layout="with-form"
  headline="Start Your Design Journey Today"
  description="Get a personalized consultation for your luxury interior design project."
  emailPlaceholder="Enter your email"
  formButtonText="Schedule Consultation"
  showEmailForm={true}
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