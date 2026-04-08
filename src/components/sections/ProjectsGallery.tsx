import Link from "next/link";
import Image from "next/image";
import { GsapWrapper } from "../animations/GsapWrapper";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <GsapWrapper
              key={project.id}
              delay={index * 0.1}
              yOffset={80}
              parallax={false}
              className={`${project.gridClass} group relative overflow-hidden rounded-2xl bg-accent cursor-pointer shadow-weightless`}
            >
              <Link href={`/projects/${project.id}`} className="block w-full h-full">
                <div className={`${project.aspectClass} overflow-hidden w-full relative`}>

                  {/* Project Image */}
                  <Image
                    alt={project.imageAlt}
                    src={project.imageUrl}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                    className="object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />

                  {/* Cinematic gradient overlay — always visible, deepens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-100 opacity-80" />

                  {/* Project number — top left */}
                  <div className="absolute top-6 left-6 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                    <span className="font-heading text-[0.6rem] uppercase tracking-[0.4em] text-white">
                      {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* View CTA — top right, slides in on hover */}
                  <div className="absolute top-6 right-6 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="flex items-center gap-2 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="font-heading text-[0.6rem] uppercase tracking-widest text-primary-foreground font-bold">
                        View Case Study
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Bottom content — reveals on hover */}
                  <div className="p-6 md:p-8 absolute inset-0 flex flex-col justify-end">
                    {/* Category badges */}
                    <div className="flex flex-wrap gap-2 mb-4 translate-y-2 opacity-70 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 text-[0.55rem] uppercase tracking-widest text-primary font-semibold"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Project title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-heading text-white leading-tight mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.title}
                    </h3>

                    {/* Description — hidden until hover */}
                    <p className="text-white/60 font-light text-sm leading-relaxed max-w-lg translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 line-clamp-2">
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