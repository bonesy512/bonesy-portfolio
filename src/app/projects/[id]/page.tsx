import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-sm font-medium hover:text-primary transition-colors opacity-70 hover:opacity-100"
      >
        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Portfolio
      </Link>

      <div className="aspect-video w-full overflow-hidden rounded-xl mb-12">
        <img
          src={project.imageUrl}
          alt={project.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
        {project.title}
      </h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.categories.map((cat) => (
          <span
            key={cat}
            className="px-4 py-1.5 rounded-full bg-accent text-[0.7rem] uppercase tracking-widest text-primary font-medium"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
        <p>{project.fullDescription || project.description}</p>
        
        {project.features && project.features.length > 0 && (
          <>
            <h3 className="text-foreground mt-8 font-heading">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 mt-4 text-foreground/80">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {project.role && project.role.length > 0 && (
          <>
            <h3 className="text-foreground mt-8 font-heading">My Role</h3>
            <ul className="list-disc list-inside space-y-2 mt-4 text-foreground/80">
              {project.role.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </>
        )}

        {project.outcome && (
          <>
            <h3 className="text-foreground mt-8 font-heading">Project Outcome</h3>
            <p className="mt-4">{project.outcome}</p>
          </>
        )}

        {!project.fullDescription && !project.features && !project.role && !project.outcome && (
          <>
            <h3 className="text-foreground mt-8 font-heading">The Challenge</h3>
            <p>
              Creating a seamless experience that balances aesthetic authority with
              bulletproof usability. This project required a strict adherence to
              "The Silent Authority" design philosophy—using intentional asymmetry
              and subtracting the unnecessary to let the core value breathe.
            </p>
            <h3 className="text-foreground mt-8 font-heading">The Impact</h3>
            <p>
              A highly performant, visually distinctive platform that elevated the
              brand's market positioning and drove measurable increases in user engagement
              and conversion.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
