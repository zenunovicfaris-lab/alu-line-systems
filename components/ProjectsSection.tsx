import { getProjects } from "@/lib/projects";
import ProjectsGrid from "./ProjectsGrid";

// Server komponenta: dohvati projekte (Facebook uz statički fallback) i
// proslijedi ih klijentskom gridu koji nosi UI, lightbox i animacije.
export default async function ProjectsSection() {
  const projects = await getProjects();
  return <ProjectsGrid projects={projects} />;
}
