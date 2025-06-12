import { ReactNode } from "react";

export interface ProjectLink {
  type: string;
  href: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links?: ProjectLink[];
  image?: string;
  video?: string;
}
