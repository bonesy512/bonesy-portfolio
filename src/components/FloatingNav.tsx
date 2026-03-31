"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Entrance animation for the nav
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Exhibition", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-screen-xl z-50 transition-all duration-700 rounded-2xl",
        isScrolled
          ? "glass shadow-spatial py-3 px-6"
          : "bg-transparent py-6 px-0"
      )}
    >
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <a
          href="#"
          className="text-xl font-heading font-black tracking-tighter text-primary hover:opacity-80 transition-opacity"
        >
          BONESY<span className="text-foreground/40 font-light">DESIGN</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/60 hover:text-primary transition-colors font-heading text-[0.65rem] uppercase tracking-[0.3em]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-xl font-bold transition-all shadow-spatial hover:scale-105 font-heading text-[0.65rem] uppercase tracking-widest px-8 h-10"
            )}
          >
            LET&apos;S TALK
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-primary p-2 focus:outline-none min-w-[48px] min-h-[48px] flex items-center justify-center glass rounded-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full mt-4 glass rounded-2xl shadow-spatial overflow-hidden border border-white/5"
          >
            <div className="flex flex-col px-8 py-12 gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading font-extrabold uppercase tracking-widest text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                variants={itemVariants}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-block text-primary font-heading text-sm uppercase tracking-[0.4em] font-bold"
              >
                START A PROJECT
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
