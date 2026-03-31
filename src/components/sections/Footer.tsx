import { MotionWrapper } from "../animations/MotionWrapper";

export function Footer() {
  return (
    <footer className="bg-[#1c1b1b] w-full py-16 border-t border-border/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-screen-2xl mx-auto gap-8">
        <MotionWrapper className="flex flex-col items-center md:items-start gap-4" delay={0}>
          <span className="text-xl font-bold text-foreground font-heading tracking-tighter">
            Bonesy Design
          </span>
          <p className="font-heading text-[0.6875rem] uppercase tracking-[0.1em] text-muted-foreground/70">
            © {new Date().getFullYear()} Bonesy Design. All rights reserved.
          </p>
        </MotionWrapper>

        <MotionWrapper
          className="flex gap-8 md:gap-12"
          delay={0.1}
        >
          {["LinkedIn", "Dribbble", "Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-heading text-[0.6875rem] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors"
            >
              {social}
            </a>
          ))}
        </MotionWrapper>

        <MotionWrapper
          className="text-primary font-heading text-[0.6rem] tracking-[0.3em] uppercase"
          delay={0.2}
        >
          Designed for Impact &amp; Authority
        </MotionWrapper>
      </div>
    </footer>
  );
}
