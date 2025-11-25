import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ y: -6, rotateX: 0, rotateY: 0 }}
    className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-card backdrop-blur transition"
  >
    <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-sky-400/10" />
    </div>

    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-slate-300">{project.summary}</p>
      </div>
      <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100">
        {project.tag || 'Build'}
      </span>
    </div>

    <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
      {project.highlights.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {project.tech.map((tag) => (
        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-indigo-100">
          {tag}
        </span>
      ))}
    </div>

    <div className="flex gap-3 pt-1 text-sm font-semibold">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-indigo-200 underline-offset-4 transition hover:text-white hover:underline"
        >
          <Github size={16} /> GitHub
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-indigo-200 underline-offset-4 transition hover:text-white hover:underline"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;
