"use client";

import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
export function CtaSection4() {
  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Left Column - Content */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Header */}
          <div className="section-title-gap-lg flex flex-col">
            {/* Category Tag */}
            <Tagline className="text-muted-foreground">CTA Section</Tagline>
            {/* Main Title */}
            <h2 id="cta-heading" className="heading-lg text-foreground">
              Action-driving headline that creates urgency
            </h2>
            {/* Section Description */}
            <p className="text-muted-foreground text-base">
              Add one or two compelling sentences that reinforce your main value
              proposition and overcome final objections. End with a clear reason
              to act now. Align this copy with your CTA button text.
            </p>
          </div>
          {/* Email Form */}
          <form
            className="flex w-full flex-col gap-3 md:max-w-sm md:flex-row"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Email signup form"
          >
            <Input
              placeholder="Email"
              type="email"
              required
              aria-required="true"
              aria-label="Enter your email"
            />
            <Button type="submit" aria-label="Start using our service for free">
              Start for free
            </Button>
          </form>
        </div>
        {/* Right Column - Image */}
        <div className="w-full flex-1">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="CTA section image"
              fill
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
