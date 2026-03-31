import Image from "next/image";
import { MotionWrapper } from "../animations/MotionWrapper";
import { Badge } from "@/components/ui/badge";

export function About() {
  const skills = [
    "User Experience",
    "Brand Strategy",
    "Motion Design",
    "Product Vision",
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Image */}
        <MotionWrapper className="col-span-1 lg:col-span-5 relative order-2 lg:order-1">
          <div className="aspect-[3/4] bg-accent rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/thomas-schustereit.png"
              alt="Thomas Schustereit — Senior UI/UX Designer"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover grayscale brightness-75 contrast-125"
            />
          </div>
          {/* 12+ Years Badge */}
          <div className="absolute -bottom-6 -right-6 p-8 bg-primary/20 backdrop-blur-md border border-primary/10 rounded-xl text-primary hidden md:block">
            <span className="font-heading font-extrabold text-4xl block text-center">12+</span>
            <p className="text-[0.6rem] text-primary-foreground uppercase tracking-widest font-bold mt-2">
              Years of Excellence
            </p>
          </div>
        </MotionWrapper>

        {/* Right Side: Copy */}
        <MotionWrapper
          delay={0.2}
          className="col-span-1 lg:col-span-6 lg:col-start-7 order-1 lg:order-2"
        >
          <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-6 block">
            The Bonesy Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight mb-8 text-foreground text-balance">
            Silent Authority.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-light italic border-l-2 border-primary/40 pl-6">
            &ldquo;Luxury is the result of what we choose to leave out.&rdquo;
          </p>
          <div className="space-y-6 text-foreground/80 leading-relaxed font-light text-base md:text-lg">
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
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            {[
              "User Experience",
              "Strategic Architecture",
              "AI Agentic Integrations",
              "IT Consulting",
              "3D Design",
              "Product Vision",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-5 py-2 rounded-full bg-accent text-[0.7rem] uppercase tracking-widest text-muted-foreground hover:text-foreground font-semibold border-none"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
