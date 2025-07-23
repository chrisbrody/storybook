"use client";

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { type VariantProps } from "class-variance-authority";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps extends VariantProps<typeof buttonVariants> {
  siteTitle?: string;
  ctaButtonLabel?: string;
  ctaButtonHref?: string;
  className?: string;
  showCTA?: boolean;
  showLogo?: boolean;
  centerMenu?: boolean;
  leftMenu?: boolean;
  ctaVariant?: VariantProps<typeof buttonVariants>["variant"];
  ctaSize?: VariantProps<typeof buttonVariants>["size"];
  fontFamily?: 'Inter' | 'Roboto' | 'Open Sans' | 'Playfair Display' | 'Source Code Pro';
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
  fontStyle?: React.CSSProperties;
}

const NavMenuItems = ({ className, onItemClick, fontStyle }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <a key={label} href={href} onClick={onItemClick}>
        <Button variant="ghost" className="w-full md:w-auto text-foreground" style={fontStyle}>
          {label}
        </Button>
      </a>
    ))}
    
    {/* About Dropdown */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full md:w-auto text-foreground" style={fontStyle}>
          About
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {ABOUT_ITEMS.map(({ label, href }) => (
          <DropdownMenuItem key={label} asChild>
            <a href={href} onClick={onItemClick} className="text-foreground" style={fontStyle}>
              {label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>

    <a href="#contact" onClick={onItemClick}>
      <Button variant="ghost" className="w-full md:w-auto text-foreground" style={fontStyle}>
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
  centerMenu = false,
  leftMenu = false,
  ctaVariant = "default",
  ctaSize = "default",
  fontFamily = 'Inter',
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fontFamilyMap = {
    'Inter': '"Inter", sans-serif',
    'Roboto': '"Roboto", sans-serif', 
    'Open Sans': '"Open Sans", sans-serif',
    'Playfair Display': '"Playfair Display", serif',
    'Source Code Pro': '"Source Code Pro", monospace',
  };

  const fontStyle = { fontFamily: fontFamilyMap[fontFamily] };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <nav className={`bg-background sticky top-0 isolate z-50 py-3.5 md:py-4 w-full ${className}`}>
        <div className={`container relative mx-auto px-6 ${centerMenu ? 'flex items-center justify-between' : leftMenu ? 'flex items-center justify-between' : 'flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-6'}`}>
        {centerMenu ? (
          <>
            {/* Logo - always on left */}
            <div className="flex items-center">
              {showLogo ? (
                <a href="/">
                  <Logo />
                </a>
              ) : (
                <a href="/" className="text-xl font-bold" style={fontStyle}>
                  {siteTitle}
                </a>
              )}
            </div>

            {/* Desktop Navigation - centered */}
            <div className="hidden md:flex">
              <NavMenuItems fontStyle={fontStyle} />
            </div>

            {/* Mobile menu button and CTA for centered layout */}
            <div className="flex items-center">
              {/* CTA Button - hidden on mobile */}
              <div className="hidden md:flex">
                {showCTA && (
                  <a href={ctaButtonHref}>
                    <Button variant={ctaVariant} size={ctaSize}>{ctaButtonLabel}</Button>
                  </a>
                )}
              </div>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                className="flex size-9 items-center justify-center ml-2 md:hidden text-foreground"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </>
        ) : leftMenu ? (
          <>
            {/* Logo - on left */}
            <div className="flex items-center gap-6">
              {showLogo ? (
                <a href="/">
                  <Logo />
                </a>
              ) : (
                <a href="/" className="text-xl font-bold" style={fontStyle}>
                  {siteTitle}
                </a>
              )}
              
              {/* Desktop Navigation - next to logo on left */}
              <div className="hidden md:flex">
                <NavMenuItems fontStyle={fontStyle} />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <Button
                variant="ghost"
                className="flex size-9 items-center justify-center text-foreground"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>

            {/* CTA Button - on right, hidden on mobile */}
            <div className="hidden md:flex items-center">
              {showCTA && (
                <a href={ctaButtonHref}>
                  <Button variant={ctaVariant} size={ctaSize}>{ctaButtonLabel}</Button>
                </a>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full items-center justify-between">
              {showLogo ? (
                <a href="/">
                  <Logo />
                </a>
              ) : (
                <a href="/" className="text-xl font-bold" style={fontStyle}>
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
              <NavMenuItems fontStyle={fontStyle} />
              {showCTA && (
                <a href={ctaButtonHref}>
                  <Button variant={ctaVariant} size={ctaSize}>{ctaButtonLabel}</Button>
                </a>
              )}
            </div>
          </>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" 
            onClick={closeMenu}
          />
        )}
        {isMenuOpen && (
          <div className={`${
            centerMenu 
              ? "fixed inset-x-0 top-[80px] bg-background border-b shadow-lg animate-in slide-in-from-top-2 duration-300 p-6 md:hidden z-50"
              : leftMenu 
                ? "fixed inset-y-0 left-0 w-64 bg-background border-r shadow-lg animate-in slide-in-from-left-2 duration-300 p-6 md:hidden flex flex-col gap-5 z-50"
                : "fixed inset-y-0 right-0 w-64 bg-background border-l shadow-lg animate-in slide-in-from-right-2 duration-300 p-6 md:hidden flex flex-col gap-5 z-50"
          }`}>
            {/* Close button for mobile menu */}
            <div className={`flex ${centerMenu ? 'justify-center' : 'justify-end'} mb-4`}>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                aria-label="Close menu"
                className="text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <NavMenuItems onItemClick={closeMenu} fontStyle={fontStyle} />
            {showCTA && (
              <a href={ctaButtonHref}>
                <Button className="w-full" variant={ctaVariant} size={ctaSize} onClick={closeMenu}>
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