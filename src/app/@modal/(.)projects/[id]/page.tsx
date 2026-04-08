import { redirect } from "next/navigation";

// Interceptor disabled — project cards now navigate to full-page detail views.
// Redirect any intercepted route straight to the real page.
export default async function ProjectInterceptPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  redirect(`/projects/${id}`);
}
