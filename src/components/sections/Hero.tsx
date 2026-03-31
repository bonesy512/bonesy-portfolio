"use client";

import { MotionWrapper } from "../animations/MotionWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -right-20 top-20 w-1/2 h-[80%] opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8">
        <MotionWrapper className="col-span-1 md:col-span-8 z-10">
          <span className="inline-block text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-3">
            Thomas Schustereit
          </span>
          <span className="inline-block text-muted-foreground/60 font-heading text-[0.6875rem] uppercase tracking-[0.25em] mb-6">
            A decade of defining digital standards in Austin, TX.
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading leading-[1.05] tracking-tighter mb-8 text-foreground text-balance">
            Senior UI/UX &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Digital Strategist
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 font-light">
            I build high-stakes digital products where editorial rigor meets functional logic.
            My work is rooted in the belief that true luxury isn&apos;t an aesthetic—it&apos;s
            the absence of friction. I help founders and creative directors replace digital
            noise with strategic authority.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "group text-primary-foreground font-bold px-10 py-8 rounded-xl transition-[box-shadow,transform] hover:shadow-[0_0_30px_-5px_rgba(242,202,80,0.4)] tracking-widest uppercase inline-flex items-center gap-3"
              )}
            >
              VIEW PROJECTS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 motion-safe:transition-transform" />
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
