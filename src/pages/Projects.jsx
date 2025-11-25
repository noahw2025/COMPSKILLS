import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => (
  <div className="px-5 py-16 md:px-8 md:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl space-y-10">
      <SectionHeader
        eyebrow="Projects"
        title="Systems that connect code, hardware, and data."
        copy="A sample of hands-on builds combining automation, infrastructure, and AI with practical constraints like cost, uptime, and usability."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} delay={idx * 0.05} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
