"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-[background-color,border-color,padding] duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-screen-2xl mx-auto">
        <a
          href="#"
          className="text-xl font-bold tracking-tighter text-primary font-heading"
        >
          Bonesy Design
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-heading text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-xl font-semibold hover:scale-105 duration-300 motion-safe:transition-transform font-heading text-sm uppercase tracking-wider"
            )}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground font-heading text-sm uppercase tracking-widest block"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
