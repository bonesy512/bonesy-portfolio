"use client";

import { GsapWrapper } from "../animations/GsapWrapper";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Thomas doesn't just design interfaces; he architected our entire digital presence. His ability to blend high-end aesthetics with rigid functional logic is unparalleled.",
    author: "Director of Operations",
    company: "ProJob.io",
  },
  {
    quote: "The 'Silent Authority' approach is real. He stripped away the noise from our CRM and left us with a product that finally feels as premium as our service.",
    author: "Founding Partner",
    company: "Hivemind CRM",
  },
  {
    quote: "Precision and professionalism. Thomas delivered a brand identity and exhibition site that set a new standard for our industry festival.",
    author: "Executive Producer",
    company: "Austin Chicken Wing Festival",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-background border-y border-border/10 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <GsapWrapper className="mb-16">
          <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.4em] mb-4 block">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tighter">
            Executive Endorsements
          </h2>
        </GsapWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <GsapWrapper key={i} delay={i * 0.15} yOffset={40} className="relative pt-12 p-8 glass rounded-2xl shadow-weightless transition-all duration-500 hover:shadow-spatial hover:-translate-y-2">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
              <p className="text-lg text-foreground/70 font-light italic leading-relaxed mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="block text-foreground font-heading uppercase tracking-[0.2em] text-[0.7rem] font-bold">
                  {t.author}
                </span>
                <span className="block text-muted-foreground uppercase tracking-[0.15em] text-[0.6rem] mt-1">
                  {t.company}
                </span>
              </div>
            </GsapWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
