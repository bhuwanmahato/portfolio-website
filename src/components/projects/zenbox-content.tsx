import { Project } from "@/types/project";
import { ProjectContent } from "./project-content";

interface ZenboxContentProps {
  project: Project;
}

export function ZenboxContent({ project }: ZenboxContentProps) {
  return (
    <ProjectContent project={project}>
      {/* Custom sections for Zenbox */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Advanced note-taking capabilities</li>
          <li>Digital resource management</li>
          <li>Enhanced learning experience</li>
          <li>User-friendly interface</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Technical Implementation
        </h2>
        <p className="text-muted-foreground">
          Built with React and TailwindCSS, utilizing Shadcn UI components for a
          consistent and modern design. The application uses Supabase for
          backend services, providing real-time updates and secure data storage.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Design Process</h2>
        <p className="text-muted-foreground">
          The design process involved extensive user research and iterative
          prototyping using Figma. The final design focuses on simplicity and
          ease of use while maintaining powerful functionality.
        </p>
      </section>
    </ProjectContent>
  );
}
