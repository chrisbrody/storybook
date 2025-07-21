"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  siteTitle?: string;
  ctaButtonLabel?: string;
  ctaButtonHref?: string;
  className?: string;
  showCTA?: boolean;
  showLogo?: boolean;
}

const MENU_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
] as const;

const ABOUT_ITEMS = [
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Inspiring Design", href: "#inspiring-design" },
] as const;

interface NavMenuItemsProps {
  className?: string;
  onItemClick?: () => void;
}

const NavMenuItems = ({ className, onItemClick }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <a key={label} href={href} onClick={onItemClick}>
        <Button variant="ghost" className="w-full md:w-auto text-foreground">
          {label}
        </Button>
      </a>
    ))}
    
    {/* About Dropdown */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full md:w-auto text-foreground">
          About
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {ABOUT_ITEMS.map(({ label, href }) => (
          <DropdownMenuItem key={label} asChild>
            <a href={href} onClick={onItemClick} className="text-foreground">
              {label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>

    <a href="#contact" onClick={onItemClick}>
      <Button variant="ghost" className="w-full md:w-auto text-foreground">
        Contact
      </Button>
    </a>
  </div>
);

export function Navbar({
  siteTitle = "Your Site",
  ctaButtonLabel = "Get Started",
  ctaButtonHref = "#get-started",
  className = "",
  showCTA = true,
  showLogo = true,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <nav className={`bg-background sticky top-0 isolate z-50 py-3.5 md:py-4 w-full ${className}`}>
        <div className="container relative mx-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex w-full items-center justify-between">
          {showLogo ? (
            <a href="/">
              <Logo />
            </a>
          ) : (
            <a href="/" className="text-xl font-bold">
              {siteTitle}
            </a>
          )}
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          {showCTA && (
            <a href={ctaButtonHref}>
              <Button>{ctaButtonLabel}</Button>
            </a>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems onItemClick={closeMenu} />
            {showCTA && (
              <a href={ctaButtonHref}>
                <Button className="w-full" onClick={closeMenu}>
                  {ctaButtonLabel}
                </Button>
              </a>
            )}
          </div>
        )}
        </div>
      </nav>
    </div>
  );
}

export type { NavbarProps };