import Image from "next/image";
import { GsapWrapper } from "../animations/GsapWrapper";
import { Badge } from "@/components/ui/badge";

export function About() {
  const skills = [
    "User Experience",
    "Strategic Architecture",
    "AI Agentic Integrations",
    "IT Consulting",
    "3D Design",
    "Product Vision",
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Image with Spatial Depth */}
        <GsapWrapper parallax={true} yOffset={50} className="col-span-1 lg:col-span-5 relative order-2 lg:order-1 perspective-1000">
          <div className="aspect-[3/4] bg-accent rounded-2xl overflow-hidden shadow-spatial preserve-3d transition-transform duration-700 hover:scale-[1.02] hover:-rotate-y-6">
            <Image
              src="/thomas-schustereit.png"
              alt="Thomas Schustereit — Senior UI/UX Designer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover grayscale brightness-90 contrast-110 transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />
          </div>
          
          {/* 12+ Years Badge — Antigravity Floating Style */}
          <GsapWrapper delay={0.5} yOffset={20} className="absolute -bottom-8 -right-8 p-10 glass rounded-2xl shadow-spatial hidden md:block border-white/5">
            <span className="font-heading font-black text-5xl block text-center text-primary">12+</span>
            <p className="text-[0.65rem] text-muted-foreground uppercase tracking-[0.2em] font-bold mt-2 text-center">
              Years of <br/> Excellence
            </p>
          </GsapWrapper>
        </GsapWrapper>

        {/* Right Side: Copy with Staggered Entrance */}
        <div className="col-span-1 lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
          <GsapWrapper yOffset={30}>
            <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-6 block">
              The Bonesy Philosophy
            </span>
          </GsapWrapper>
          
          <GsapWrapper yOffset={40} delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading leading-tight mb-8 text-foreground text-balance">
              Silent Authority.
            </h2>
          </GsapWrapper>

          <GsapWrapper yOffset={20} delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-light italic border-l-2 border-primary/20 pl-6">
              &ldquo;Luxury is the result of what we choose to leave out.&rdquo;
            </p>
          </GsapWrapper>

          <GsapWrapper yOffset={20} delay={0.3} className="space-y-6 text-foreground/70 leading-relaxed font-light text-base md:text-lg">
            <p>
              My methodology is a collision of{" "}
              <strong className="text-foreground font-medium">Swiss typographic discipline</strong>{" "}
              and visceral digital art. I don&apos;t just &ldquo;design websites&rdquo;—I
              architect environments that command immediate trust.
            </p>
            <p>
              I specialize in high-stakes UI/UX for fintech and luxury e-commerce,
              providing the strategic foresight needed to turn complex technical
              requirements into effortless, high-performance interactions.
            </p>
          </GsapWrapper>

          <GsapWrapper yOffset={30} delay={0.4} className="mt-12 flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-6 py-2.5 rounded-full glass text-[0.7rem] uppercase tracking-widest text-muted-foreground hover:text-primary hover:border-primary/40 font-semibold transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </GsapWrapper>
        </div>
      </div>
    </section>
  );
}
