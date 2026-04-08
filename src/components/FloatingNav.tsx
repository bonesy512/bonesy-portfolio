"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12"
      style={{ paddingTop: isScrolled ? "1rem" : "2rem", transition: "padding-top 0.5s ease" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled
              ? "glass shadow-spatial py-3 px-8 rounded-2xl"
              : "bg-transparent py-4 px-0"
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-heading font-black tracking-tighter text-primary hover:opacity-80 transition-opacity shrink-0"
          >
            BONESY<span className="text-foreground/40 font-light">DESIGN</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/60 hover:text-primary transition-colors font-heading text-[0.65rem] uppercase tracking-[0.3em] whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-xl font-bold shadow-spatial hover:scale-105 font-heading text-[0.65rem] uppercase tracking-widest px-8 h-10 whitespace-nowrap"
              )}
            >
              LET&apos;S TALK
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary p-2 min-w-[48px] min-h-[48px] flex items-center justify-center glass rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden max-w-7xl mx-auto mt-4 glass rounded-2xl shadow-spatial overflow-hidden border border-white/5"
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
    </motion.nav>
  );
}
