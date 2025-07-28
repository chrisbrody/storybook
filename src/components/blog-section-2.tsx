"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tagline } from "@/components/ui/tagline";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  authorImage: string;
  authorRole: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with shadcn/ui: A Complete Guide",
    description:
      "Learn how to set up and maximize your development workflow with shadcn/ui's powerful component library.",
    date: "Mar 15, 2024",
    category: "Tutorial",
    author: "John Doe",
    authorImage: "https://github.com/shadcn.png",
    authorRole: "Developer",
  },
  {
    id: 2,
    title: "Building Dark Mode with Next.js and Tailwind CSS",
    description:
      "Implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and shadcn/ui.",
    date: "Mar 12, 2024",
    category: "Development",
    author: "Jane Smith",
    authorImage: "https://github.com/shadcn.png",
    authorRole: "Designer",
  },
  {
    id: 3,
    title: "Mastering React Server Components",
    description:
      "Deep dive into React Server Components and learn how they can improve your application's performance.",
    date: "Mar 8, 2024",
    category: "Advanced",
    author: "Alice Johnson",
    authorImage: "https://github.com/shadcn.png",
    authorRole: "Developer",
  },
];

export function BlogSection2() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="blog-section-heading"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-start gap-10 md:gap-12">
          {/* Section Title */}
          <div className="section-title-gap-lg flex max-w-xl flex-col">
            {/* Tagline */}
            <Tagline>Blog Section</Tagline>
            {/* Main Heading */}
            <h1 id="blog-section-heading" className="heading-lg">
              Short and clear engaging headline for a blog
            </h1>
            {/* Description */}
            <p className="text-muted-foreground">
              Add a concise value statement that captures reader interest and
              previews content value. Focus on benefits while keeping it under
              two lines. Align with your blog categories.
            </p>
          </div>

          {/* Blog Grid */}
          <div
            className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6"
            role="list"
          >
            {BLOG_POSTS.map((post, index) => (
              <>
                <Card
                  key={post.id}
                  className="group flex cursor-pointer flex-col justify-between gap-6 rounded-none border-none bg-transparent p-0 shadow-none"
                  role="listitem"
                >
                  {/* Post Content */}
                  <CardContent className="flex flex-col gap-3 p-0">
                    {/* Post Meta */}
                    <div className="flex items-center gap-2 text-left">
                      <span className="text-muted-foreground text-sm">
                        {post.date}
                      </span>
                      <span className="text-muted-foreground text-sm">·</span>
                      <span className="text-muted-foreground text-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Post Title */}
                    <h3 className="text-base leading-normal font-semibold hover:underline">
                      {post.title}
                    </h3>

                    {/* Post Summary */}
                    <p className="text-muted-foreground text-sm leading-normal">
                      {post.description}
                    </p>
                  </CardContent>

                  {/* Author Info */}
                  <CardFooter className="flex items-center gap-2 p-0">
                    {/* Author Avatar */}
                    <Avatar className="size-10">
                      <AvatarImage src={post.authorImage} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>

                    {/* Author Details */}
                    <div className="flex flex-1 flex-col items-start gap-0">
                      <p className="text-foreground text-sm font-medium">
                        {post.author}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {post.authorRole}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
                {index < BLOG_POSTS.length - 1 && (
                  <Separator className="lg:hidden" />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
