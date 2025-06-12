import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";
import { ProjectContent } from "@/components/projects/project-content";

export async function generateStaticParams() {
  return DATA.projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = DATA.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
