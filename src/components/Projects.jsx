import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Projects that <span className="text-gradient">solve real problems.</span>
            </>
          }
          subtitle="Full-stack builds with Spring Boot APIs, React interfaces and real security and commerce logic behind them."
        />

        <div className="mt-20 flex flex-col gap-24 lg:gap-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
