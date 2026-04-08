"use client";

import { useEffect, useRef } from "react";
import { GsapWrapper } from "../animations/GsapWrapper";
import { MagneticWrapper } from "../animations/MagneticWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!floatRef.current) return;

    gsap.to(".hero-float", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-5, 5)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden preserve-3d perspective-container">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" ref={floatRef}>
        <div className="hero-float absolute -right-20 top-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="hero-float absolute left-20 bottom-40 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="hero-float absolute right-[15%] top-[25%] w-32 h-44 glass-primary rotate-12 rounded-2xl opacity-40 hidden lg:block" />
        <div className="hero-float absolute right-[10%] bottom-[30%] w-24 h-24 glass-primary -rotate-12 rounded-xl opacity-30 hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        <div className="col-span-1 md:col-span-10">
          <GsapWrapper yOffset={30} delay={0.2}>
            <span className="inline-block text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-3">
              Thomas Schustereit — Est. 2012
            </span>
          </GsapWrapper>

          <GsapWrapper yOffset={20} delay={0.3}>
            <span className="inline-block text-muted-foreground/60 font-heading text-[0.6875rem] uppercase tracking-[0.25em] mb-6">
              14 Years of Defining Digital Standards in Austin, TX.
            </span>
          </GsapWrapper>

          <GsapWrapper yOffset={40} delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold font-heading leading-[0.95] tracking-tighter mb-8 text-foreground text-balance">
              Bonesy Design: <br />Digital Architecture.
            </h1>
          </GsapWrapper>

          <GsapWrapper yOffset={20} delay={0.6}>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-light">
              I build high-stakes digital products where editorial design meets functional logic.
              From brand identities to Agentic AI integrations, I help founders replace
              noise with strategic authority.
            </p>
          </GsapWrapper>

          <GsapWrapper yOffset={30} delay={0.8} className="overflow-visible">
            <div className="flex flex-wrap gap-12 items-center mt-12">
              <MagneticWrapper>
                <a
                  href="#projects"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "default" }),
                    "group text-primary-foreground font-bold px-10 py-8 rounded-xl transition-all shadow-spatial hover:scale-105 tracking-[0.2em] uppercase inline-flex items-center gap-3 relative overflow-hidden"
                  )}
                >
                  EXPLORE PROJECTS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 motion-safe:transition-transform" />
                </a>
              </MagneticWrapper>
            </div>
          </GsapWrapper>

          <GsapWrapper yOffset={20} delay={1} className="mt-24 pt-12 border-t border-border/10">
            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground/40 mb-8 font-heading">
              Proven Digital Delivery & Partnerships
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-8 opacity-20 grayscale hover:grayscale-0 hover:opacity-50 transition-all duration-500">
              {['AUSTIN FESTIVALS', 'TECH IN', 'HIVEMIND CRM', 'PROJOB', 'JDM DETAILING'].map((client) => (
                <span key={client} className="text-xs font-heading font-black tracking-[0.2em]">
                  {client}
                </span>
              ))}
            </div>
          </GsapWrapper>
        </div>
      </div>
    </section>
  );
}