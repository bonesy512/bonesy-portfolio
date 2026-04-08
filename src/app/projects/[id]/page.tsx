import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, UserCircle } from "lucide-react";
import { MotionWrapper } from "@/components/animations/MotionWrapper";
import { Badge } from "@/components/ui/badge";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <MotionWrapper delay={0}>
        <Link
          href="/#projects"
          className="mb-12 inline-flex items-center text-[0.65rem] uppercase tracking-[0.3em] font-medium hover:text-primary transition-colors opacity-60 hover:opacity-100 group"
        >
          <ArrowLeft className="mr-3 w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </MotionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        {/* Project Header & Meta */}
        <div className="space-y-10">
          <MotionWrapper delay={0.1}>
            <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.4em] mb-4 block">
              Case Study
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter leading-none mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.categories.map((cat) => (
                <Badge
                  key={cat}
                  variant="secondary"
                  className="px-4 py-1.5 rounded-full bg-accent/50 text-[0.65rem] uppercase tracking-widest text-primary font-semibold border-none"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2} className="prose prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed italic border-l-2 border-primary/20 pl-8">
              {project.description}
            </p>
          </MotionWrapper>
        </div>

        {/* Project Hero Image */}
        <MotionWrapper delay={0.3} className="aspect-video w-full overflow-hidden rounded-2xl shadow-3xl bg-accent">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
          />
        </MotionWrapper>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-12 prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed space-y-12">
          {project.fullDescription && (
            <MotionWrapper delay={0.4} className="space-y-6">
              <h3 className="text-foreground font-heading uppercase tracking-[0.2em] text-sm">Background</h3>
              <p className="text-foreground/80 font-light">{project.fullDescription}</p>
            </MotionWrapper>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.features && project.features.length > 0 && (
              <MotionWrapper delay={0.5} className="space-y-6 bg-accent/20 p-8 rounded-2xl border border-border/10">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3 className="text-foreground font-heading uppercase tracking-[0.2em] text-sm m-0">Core Deliverables</h3>
                </div>
                <ul className="list-none p-0 space-y-4 text-foreground/70 font-light">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 border-b border-border/5 pb-3">
                      <span className="text-primary mt-1 text-xs">{i + 1}.</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </MotionWrapper>
            )}

            {project.role && project.role.length > 0 && (
              <MotionWrapper delay={0.6} className="space-y-6 bg-accent/20 p-8 rounded-2xl border border-border/10">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <UserCircle className="w-5 h-5" />
                  <h3 className="text-foreground font-heading uppercase tracking-[0.2em] text-sm m-0">My Responsibility</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.role.map((r, i) => (
                    <Badge key={i} variant="outline" className="border-primary/20 text-foreground/60 text-[0.6rem] uppercase tracking-widest px-4 py-1">
                      {r}
                    </Badge>
                  ))}
                </div>
              </MotionWrapper>
            )}
          </div>

          {project.outcome && (
            <MotionWrapper delay={0.7} className="space-y-6 border-t border-border/20 pt-12">
              <h3 className="text-foreground font-heading uppercase tracking-[0.2em] text-sm">The Outcome</h3>
              <p className="text-foreground/90 font-light italic text-xl leading-relaxed">
                &ldquo;{project.outcome}&rdquo;
              </p>
            </MotionWrapper>
          )}
        </div>
      </div>

      <MotionWrapper delay={0.8} className="mt-32 pt-16 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <Link
          href="/#projects"
          className="inline-flex items-center text-[0.7rem] uppercase tracking-[0.4em] font-bold text-foreground/50 hover:text-primary transition-all group"
        >
          <ArrowLeft className="mr-4 w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          Back to Projects
        </Link>

        <Link
          href="/#contact"
          className="text-primary font-heading text-xl md:text-2xl font-black uppercase tracking-[0.4em] hover:opacity-70 transition-opacity"
        >
          START A PROJECT
        </Link>
      </MotionWrapper>
    </main>
  );
}
