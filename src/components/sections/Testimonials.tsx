"use client";

import { MotionWrapper } from "../animations/MotionWrapper";
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
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-accent/10 border-y border-border/10">
      <div className="max-w-screen-xl mx-auto">
        <MotionWrapper className="mb-16">
          <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.4em] mb-4 block">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tighter">
            Executive Endorsements
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, i) => (
            <MotionWrapper key={i} delay={i * 0.1} className="relative pt-12">
              <Quote className="absolute top-0 left-0 w-8 h-8 text-primary/20" />
              <p className="text-lg text-foreground/80 font-light italic leading-relaxed mb-8">
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
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
