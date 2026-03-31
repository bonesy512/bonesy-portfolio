"use client";

import { GsapWrapper } from "../animations/GsapWrapper";

const SOCIAL_LINKS = [
  { name: "X", href: "https://x.com/B0N3SYeth", active: true },
  { name: "Facebook", href: "https://www.facebook.com/ThomasSchustereit", active: true },
  { name: "Contra", href: "https://contra.com/bonesydesign", active: true },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background w-full py-20 border-t border-border/10 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-screen-2xl mx-auto gap-12">
        <GsapWrapper className="flex flex-col items-center md:items-start gap-4">
          <span className="text-2xl font-black text-foreground font-heading tracking-tighter uppercase">
            Bonesy Design
          </span>
          <p className="font-heading text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/50">
            © <span suppressHydrationWarning>{currentYear}</span> Bonesy Design. All rights reserved.
          </p>
        </GsapWrapper>

        <div className="flex gap-10 md:gap-16">
          {SOCIAL_LINKS.filter(link => link.active).map((social, i) => (
            <GsapWrapper
              key={social.name}
              delay={0.1 + i * 0.1}
              yOffset={20}
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-all duration-500 hover:-translate-y-1 block hover:scale-110"
              >
                {social.name}
              </a>
            </GsapWrapper>
          ))}
        </div>

        <GsapWrapper
          className="text-primary/40 font-heading text-[0.55rem] tracking-[0.5em] uppercase text-center md:text-right"
          delay={0.4}
        >
          Designed for Impact &amp; Authority
        </GsapWrapper>
      </div>
    </footer>
  );
}
