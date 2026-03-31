import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectModal } from "@/components/ProjectModal";

export default async function ProjectInterceptPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return <ProjectModal project={project} />;
}
