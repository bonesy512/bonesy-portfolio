import Link from "next/link";
import Image from "next/image";
import { GsapWrapper } from "../animations/GsapWrapper";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

export function ProjectsGallery() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <GsapWrapper yOffset={30}>
            <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-4 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-foreground">
              Selected Projects
            </h2>
          </GsapWrapper>
          <div className="hidden md:block h-px flex-1 bg-border/20 mx-12 mb-4" />
          <GsapWrapper delay={0.2} className="text-left md:text-right">
            <span className="text-muted-foreground font-light text-sm uppercase tracking-widest">
              14 Years of Execution — 2012 / 2026
            </span>
          </GsapWrapper>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <GsapWrapper
              key={project.id}
              delay={index * 0.1}
              yOffset={100}
              parallax={true}
              className={`${project.gridClass} group relative overflow-hidden rounded-2xl bg-accent cursor-pointer shadow-weightless preserve-3d transition-transform duration-700 hover:scale-[1.02] hover:-translate-y-2`}
            >
              <Link href={`/projects/${project.id}`}>
                <div className={`${project.aspectClass} overflow-hidden w-full relative`}>
                  <Image
                    alt={project.imageAlt}
                    src={project.imageUrl}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-[transform,filter] duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />

                  {/* Glassmorphism Overlay */}
                  <div className="p-8 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-all duration-500 group-hover:opacity-100">
                    <div className="flex gap-2 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.categories.map((cat) => (
                        <Badge
                          key={cat}
                          variant="outline"
                          className="px-3 py-1 rounded-full glass border-white/10 text-[0.6rem] uppercase tracking-widest text-primary font-medium"
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.title}
                    </h3>
                    <p className="text-white/60 max-w-md font-light text-sm md:text-base hidden md:block translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </GsapWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}