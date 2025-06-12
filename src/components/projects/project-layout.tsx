import { Project, ProjectLink } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ProjectLayoutProps {
  project: Project;
  children?: ReactNode;
}

export function ProjectLayout({ project, children }: ProjectLayoutProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Hero Section */}
      {/* <section className="w-full">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg"
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={630}
            className="w-full rounded-lg object-cover"
          />
        ) : null}
      </section>

      <section className="w-full max-w-4xl">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            {project.links?.map((link: ProjectLink) => (
              <Link
                key={link.type}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {link.icon}
                {link.type}
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Description Section */}
      {/* <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-muted-foreground">{project.description}</p>
      </section> */}

      {/* Timeline Section */}
      {/* <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
        <p className="text-muted-foreground">{project.dates}</p>
      </section> */}

      {/* Custom Content */}
      {children}
    </div>
  );
}
