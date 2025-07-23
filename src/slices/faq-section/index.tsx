"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/ui/tagline";
import { cn } from "@/lib/utils";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  tagline?: string;
  heading?: string;
  description?: string;
  contactLinkText?: string;
  faqItems?: FaqItem[];
  ctaHeading?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  defaultOpenItem?: string;
  className?: string;
  fontFamily?: 'Inter' | 'Roboto' | 'Open Sans' | 'Playfair Display' | 'Source Code Pro';
  variant?: 'default' | 'sidebar' | 'side-by-side' | 'three-column';
}

export function FaqSection({
  tagline = 'FAQ section',
  heading = 'Frequently asked questions',
  description = "We've compiled the most important information to help you get the most out of your interior design experience. Can't find what you're looking for?",
  contactLinkText = 'Contact us',
  faqItems = [
    {
      id: 'item-1',
      question: 'What interior design services do you offer?',
      answer: 'We offer comprehensive interior design services including space planning, color consultation, furniture selection, lighting design, window treatments, and full-room makeovers for residential and commercial spaces.'
    },
    {
      id: 'item-2',
      question: 'How does the design process work?',
      answer: 'Our process begins with an initial consultation to understand your style, needs, and budget. We then create design concepts, present mood boards and 3D renderings, and guide you through implementation from furniture selection to final styling.'
    },
    {
      id: 'item-3',
      question: 'Do you work within specific budgets?',
      answer: 'Absolutely! We work with a variety of budgets and will create a design plan that maximizes your investment. During our consultation, we\'ll discuss your budget and tailor our recommendations accordingly.'
    },
    {
      id: 'item-4',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. A single room refresh may take 4-6 weeks, while a full home renovation can take 3-6 months. We\'ll provide a detailed timeline during your consultation.'
    },
    {
      id: 'item-5',
      question: 'Do you handle furniture purchasing and delivery?',
      answer: 'Yes, we can manage the entire procurement process including furniture ordering, delivery coordination, and installation. We work with trusted vendors to ensure quality and timely delivery.'
    },
    {
      id: 'item-6',
      question: 'Can you work with my existing furniture?',
      answer: 'Definitely! We love incorporating your existing pieces into new designs. We\'ll assess what you have and show you how to refresh your space by rearranging, reupholstering, or adding complementary pieces.'
    }
  ],
  ctaHeading = 'Still have questions?',
  ctaDescription = 'Have questions or need assistance? Our team is here to help!',
  ctaButtonText = 'Contact us',
  defaultOpenItem = 'item-1',
  className,
  fontFamily = 'Inter',
  variant = 'default',
}: FaqSectionProps = {}) {
  const fontFamilyMap = {
    'Inter': '"Inter", sans-serif',
    'Roboto': '"Roboto", sans-serif', 
    'Open Sans': '"Open Sans", sans-serif',
    'Playfair Display': '"Playfair Display", serif',
    'Source Code Pro': '"Source Code Pro", monospace',
  };

  const fontStyle = { fontFamily: fontFamilyMap[fontFamily] };

  if (variant === 'three-column') {
    return (
      <section
        className={cn("bg-background section-padding-y", className)}
        aria-labelledby="faq-heading"
      >
        <div className="container-padding-x mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex flex-col gap-6 mb-12 text-center">
            <Tagline className="w-full text-center">{tagline}</Tagline>
            <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-foreground" style={fontStyle}>
              {heading}
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto" style={fontStyle}>
              {description}{" "}
              <span className="text-black underline cursor-pointer">
                {contactLinkText}
              </span>
            </p>
          </div>

          {/* FAQ Items as Simple Rows */}
          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.id} className="flex flex-row items-start space-y-3 gap-6">
                <h3 className="text-base font-medium text-foreground w-[40%]" style={fontStyle}>
                  {item.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed !mt-0 w-[60%]" style={fontStyle}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'side-by-side') {
    return (
      <section
        className={cn("bg-background section-padding-y", className)}
        aria-labelledby="faq-heading"
      >
        <div className="container-padding-x mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - FAQ Content */}
            <div>
              {/* Section Header */}
              <div className="flex flex-col gap-6 mb-8">
                <Tagline>{tagline}</Tagline>
                <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-foreground" style={fontStyle}>
                  {heading}
                </h2>
                <p className="text-muted-foreground text-base" style={fontStyle}>
                  {description}{" "}
                  <span className="text-black underline cursor-pointer">
                    {contactLinkText}
                  </span>
                </p>
              </div>

              {/* FAQ Accordion - First Half */}
              <Accordion type="single" defaultValue={defaultOpenItem} className="space-y-4">
                {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-base font-medium pl-0 py-4 hover:no-underline" style={fontStyle}>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm pb-4" style={fontStyle}>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Column - Remaining FAQ Items and CTA */}
            <div>
              {/* CTA Card at top */}
              <div className="flex w-full flex-col gap-6 rounded-xl p-6 pr-0 mb-8 text-right">
                <div className="">
                  <Button variant="outline" aria-label="Contact support">{ctaButtonText}</Button>
                </div>
              </div>

              {/* FAQ Accordion - Second Half */}
              <Accordion type="single" className="space-y-4">
                {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-base font-medium pl-0 py-4 hover:no-underline" style={fontStyle}>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm pb-4" style={fontStyle}>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'sidebar') {
    // Group FAQ items by category for the sidebar layout
    const generalItems = faqItems.filter(item => ['item-1', 'item-2', 'item-3', 'item-4'].includes(item.id));
    const billingItems = faqItems.filter(item => ['item-5', 'item-6', 'item-7', 'item-8'].includes(item.id));
    
    return (
      <section
        className={cn("bg-background section-padding-y", className)}
        aria-labelledby="faq-heading"
      >
        <div className="container-padding-x mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Header and Navigation */}
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                {/* Section Header */}
                <div className="flex flex-col gap-6 mb-8">
                  {/* Category Tag */}
                  <Tagline>{tagline}</Tagline>
                  {/* Main Title */}
                  <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-foreground" style={fontStyle}>
                    {heading}
                  </h2>
                  {/* Section Description */}
                  <p className="text-muted-foreground text-base" style={fontStyle}>
                    {description}{" "}
                    <span className="text-black underline cursor-pointer">
                      {contactLinkText}
                    </span>
                  </p>
                </div>

                
              </div>
            </div>

            {/* Right Column - FAQ Content */}
            <div className="lg:w-2/3">
              <div className="space-y-8">
                {/* General Section */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6" style={fontStyle}>
                    General
                  </h3>
                  <Accordion type="single" defaultValue={defaultOpenItem} className="space-y-4">
                    {generalItems.map((item) => (
                      <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200">
                        <AccordionTrigger className="text-left text-base font-medium pl-0 py-4 hover:no-underline" style={fontStyle}>
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm pb-4" style={fontStyle}>
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Billing Section */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6" style={fontStyle}>
                    Billing
                  </h3>
                  <Accordion type="single" className="space-y-4">
                    {billingItems.map((item) => (
                      <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200">
                        <AccordionTrigger className="text-left text-base font-medium pl-0 py-4 hover:no-underline" style={fontStyle}>
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm pb-4" style={fontStyle}>
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default single-column layout
  return (
    <section
      className={cn("bg-background section-padding-y", className)}
      aria-labelledby="faq-heading"
    >
      <div className="container-padding-x mx-auto flex max-w-2xl flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="section-title-gap-lg flex flex-col items-center text-center">
          {/* Category Tag */}
          <Tagline>{tagline}</Tagline>
          {/* Main Title */}
          <h2 id="faq-heading" className="heading-lg text-foreground" style={fontStyle}>
            {heading}
          </h2>
          {/* Section Description */}
          <p className="text-muted-foreground" style={fontStyle}>
            {description}{" "}
            <span className="text-black underline cursor-pointer">
              {contactLinkText}
            </span>
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" defaultValue={defaultOpenItem}>
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left text-base font-medium pl-0 border-none focus:border-none hover:border-none [&[data-state=open]]:border-none" style={fontStyle}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm" style={fontStyle}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Card */}
        <div className="bg-muted/60 flex w-full flex-col items-center gap-6 rounded-xl p-6 md:p-8">
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-foreground text-2xl font-bold" style={fontStyle}>
              {ctaHeading}
            </h3>
            <p className="text-muted-foreground text-base" style={fontStyle}>
              {ctaDescription}
            </p>
          </div>
          <Button aria-label="Contact our support team">{ctaButtonText}</Button>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;