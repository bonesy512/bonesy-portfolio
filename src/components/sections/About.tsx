import Image from "next/image";
import { GsapWrapper } from "../animations/GsapWrapper";
import { Badge } from "@/components/ui/badge";

export function About() {
  const skills = [
    "Website Architecture",
    "Graphic Branding",
    "Social Media Marketing",
    "Agentic AI Implementation",
    "App Development",
    "Technical Consulting",
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Side: The Owner */}
        <GsapWrapper parallax={true} yOffset={50} className="col-span-1 lg:col-span-5 relative order-2 lg:order-1 perspective-1000">
          <div className="aspect-[3/4] bg-accent rounded-2xl overflow-hidden shadow-spatial preserve-3d transition-transform duration-700 hover:scale-[1.02]">
            <Image
              src="/meinasuit.jpg"
              alt="Thomas Schustereit — Founder of Bonesy Design"
              fill
              priority
              className="object-cover grayscale brightness-90 contrast-110 transition-all duration-700 hover:grayscale-0"
            />
          </div>

          <GsapWrapper delay={0.5} yOffset={20} className="absolute -bottom-8 -right-8 p-10 glass rounded-2xl shadow-spatial hidden md:block border-white/5">
            <span className="font-heading font-black text-5xl block text-center text-primary">14</span>
            <p className="text-[0.65rem] text-muted-foreground uppercase tracking-[0.2em] font-bold mt-2 text-center">
              Years of <br /> Experience
            </p>
          </GsapWrapper>
        </GsapWrapper>

        {/* Right Side: The Story */}
        <div className="col-span-1 lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
          <GsapWrapper yOffset={30}>
            <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-6 block">
              Direct Access. Proven Longevity.
            </span>
          </GsapWrapper>

          <GsapWrapper yOffset={40} delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading leading-tight mb-8 text-foreground text-balance">
              Experience is the Edge.
            </h2>
          </GsapWrapper>

          <GsapWrapper yOffset={20} delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-light italic border-l-2 border-primary/20 pl-6">
              &ldquo;I don&apos;t follow trends; I build systems that endure.&rdquo;
            </p>
          </GsapWrapper>

          <GsapWrapper yOffset={20} delay={0.3} className="space-y-6 text-foreground/70 leading-relaxed font-light text-base md:text-lg">
            <p>
              I’m Thomas Schustereit, and I’ve spent 14 years as the owner and operator of
              <strong className="text-foreground font-medium"> Bonesy Design</strong>.
              As a self-taught specialist, my expertise isn&apos;t theoretical—it has been
              honed through a decade of shipping high-impact projects in Austin and beyond.
            </p>
            <p>
              I bridge the gap between design and development. Whether I’m architecting a brand identity,
              managing social growth, or deploying Agentic AI workflows, I take a
              direct, hands-on approach to every pixel.
            </p>
            <p>
              No project managers, no bureaucracy—just a direct line to 14 years of digital mastery.
            </p>
          </GsapWrapper>

          <GsapWrapper yOffset={30} delay={0.4} className="mt-12 flex flex-wrap gap-4">
            {skills.map((skill) => (
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