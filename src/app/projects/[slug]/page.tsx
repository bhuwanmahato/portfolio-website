import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";
import { ProjectContent } from "@/components/projects/project-content";
import { ZenboxContent } from "@/components/projects/zenbox-content";
import { ThemefyContent } from "@/components/projects/themefy-content";
import { CapesContent } from "@/components/projects/capes-content";
import { MoveTogetherContent } from "@/components/projects/move-together-content";

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

  // Render specific content component based on project
  if (project.title.toLowerCase() === "zennbox") {
    return <ZenboxContent project={project} />;
  }
  if (project.title.toLowerCase() === "themefy") {
    return <ThemefyContent project={project} />;
  }
  if (project.title.toLowerCase() === "capes.app") {
    return <CapesContent project={project} />;
  }
  if (project.title.toLowerCase() === "move together") {
    return <MoveTogetherContent project={project} />;
  }

  // Default project content
  return <ProjectContent project={project} />;
}
