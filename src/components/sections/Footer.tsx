import { MotionWrapper } from "../animations/MotionWrapper";

const SOCIAL_LINKS = [
  { name: "X", href: "https://x.com/B0N3SYeth", active: true },
  { name: "Facebook", href: "https://www.facebook.com/ThomasSchustereit", active: true },
  { name: "Contra", href: "https://contra.com/bonesydesign", active: true },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1b1b] w-full py-16 border-t border-border/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-screen-2xl mx-auto gap-8">
        <MotionWrapper className="flex flex-col items-center md:items-start gap-4" delay={0}>
          <span className="text-xl font-bold text-foreground font-heading tracking-tighter">
            Bonesy Design
          </span>
          <p className="font-heading text-[0.6875rem] uppercase tracking-[0.1em] text-muted-foreground/70">
            © <span suppressHydrationWarning>{currentYear}</span> Bonesy Design. All rights reserved.
          </p>
        </MotionWrapper>

        <MotionWrapper
          className="flex gap-8 md:gap-12"
          delay={0.1}
        >
          {SOCIAL_LINKS.filter(link => link.active).map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="font-heading text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all duration-300 hover:rotate-3"
            >
              {social.name}
            </a>
          ))}
        </MotionWrapper>

        <MotionWrapper
          className="text-primary font-heading text-[0.6rem] tracking-[0.3em] uppercase opacity-60"
          delay={0.2}
        >
          Designed for Impact &amp; Authority
        </MotionWrapper>
      </div>
    </footer>
  );
}
