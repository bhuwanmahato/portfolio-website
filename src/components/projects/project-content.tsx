import { Project } from "@/types/project";
import { ProjectLayout } from "./project-layout";

interface ProjectContentProps {
  project: Project;
  children?: React.ReactNode;
}

export function ProjectContent({ project, children }: ProjectContentProps) {
  return <ProjectLayout project={project}>{children}</ProjectLayout>;
}
