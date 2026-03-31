"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export function ProjectModal({ project }: { project: Project }) {
  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open={true} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border/20 text-foreground">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
          {/* Left: Image Panel */}
          <div className="w-full md:w-3/5 bg-accent aspect-video md:aspect-auto">
            <Image
              src={project.imageUrl}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Content Panel */}
          <div className="w-full md:w-2/5 p-8 flex flex-col overflow-y-auto overscroll-contain">
            <div className="flex gap-2 mb-6 flex-wrap">
              {project.categories.map((cat) => (
                <Badge
                  key={cat}
                  variant="outline"
                  className="px-3 py-1 rounded-full bg-accent border-primary/20 text-[0.6rem] uppercase tracking-widest text-primary font-medium"
                >
                  {cat}
                </Badge>
              ))}
            </div>

            <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">
              {project.title}
            </h2>
            <p className="text-muted-foreground font-light text-base leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex-1">
              {project.fullDescription && (
                <>
                  <h3 className="text-sm font-bold font-heading uppercase tracking-widest text-primary mb-3">
                    Project Overview
                  </h3>
                  <p className="text-sm text-foreground/80 font-light leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>
                </>
              )}

              {project.features && project.features.length > 0 && (
                <>
                  <h3 className="text-sm font-bold font-heading uppercase tracking-widest text-primary mb-3">
                    Key Features
                  </h3>
                  <ul className="text-sm text-foreground/80 font-light leading-relaxed mb-6 list-disc list-inside space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.role && project.role.length > 0 && (
                <>
                  <h3 className="text-sm font-bold font-heading uppercase tracking-widest text-primary mb-3">
                    My Role
                  </h3>
                  <ul className="text-sm text-foreground/80 font-light leading-relaxed mb-6 list-disc list-inside space-y-1">
                    {project.role.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.outcome && (
                <>
                  <h3 className="text-sm font-bold font-heading uppercase tracking-widest text-primary mb-3">
                    The Outcome
                  </h3>
                  <p className="text-sm text-foreground/80 font-light leading-relaxed">
                    {project.outcome}
                  </p>
                </>
              )}

              {!project.fullDescription && !project.features && !project.role && !project.outcome && (
                <>
                  <h3 className="text-sm font-bold font-heading uppercase tracking-widest text-primary mb-3">
                    The Objective
                  </h3>
                  <p className="text-sm text-foreground/80 font-light leading-relaxed mb-6">
                    Executing the "Silent Authority" aesthetic to create a deeply engaging UI, 
                    blending extreme minimalism with precise, intentional friction points.
                  </p>

                  <h3 className="text-sm font-bold font-heading uppercase tracking-widest text-primary mb-3">
                    The Outcome
                  </h3>
                  <p className="text-sm text-foreground/80 font-light leading-relaxed">
                    Elevated positioning, increased user trust signals, and a distinctive brand 
                    silhouette in a crowded digital landscape.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
