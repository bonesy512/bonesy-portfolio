import Link from "next/link";
import Image from "next/image";
import { MotionWrapper } from "../animations/MotionWrapper";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

export function ProjectsGallery() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-card px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <MotionWrapper>
            <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-4 block">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-foreground">
              The Exhibition
            </h2>
          </MotionWrapper>
          <div className="hidden md:block h-px flex-1 bg-border/50 mx-12 mb-4" />
          <MotionWrapper delay={0.1} className="text-left md:text-right">
            <span className="text-muted-foreground font-light text-sm uppercase tracking-widest">
              EST. 2018 — 2024
            </span>
          </MotionWrapper>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <MotionWrapper
              key={project.id}
              delay={index * 0.1}
              className={`${project.gridClass} group relative overflow-hidden rounded-xl bg-accent cursor-pointer`}
            >
              <Link href={`/projects/${project.id}`} scroll={false}>
                <div className={`${project.aspectClass} overflow-hidden w-full relative`}>
                  <Image
                    alt={project.imageAlt}
                    src={project.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-[transform,filter] duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="p-8 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-24 transition-opacity duration-500">
                    <div className="flex gap-2 mb-4">
                      {project.categories.map((cat) => (
                        <Badge
                          key={cat}
                          variant="outline"
                          className="px-3 py-1 rounded-full bg-background/50 border-primary/20 text-[0.6rem] uppercase tracking-widest text-primary font-medium"
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/70 max-w-md font-light text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
