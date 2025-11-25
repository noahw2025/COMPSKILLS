import { motion } from 'framer-motion';
import { Cpu, Cog, Network } from 'lucide-react';

const highlights = [
  {
    title: 'End-to-end systems',
    icon: Cog,
    description: 'Connect hardware, software, and data into reliable automation that keeps shipping.',
  },
  {
    title: 'AI & data',
    icon: Cpu,
    description: 'Python-first automations, API orchestration, and AI workflows tuned to outcomes.',
  },
  {
    title: 'Web & infrastructure',
    icon: Network,
    description: 'Modern web stacks plus IoT, blockchain, and deployment know-how for real-world use.',
  },
];

const skills = {
  Languages: ['Python', 'JavaScript', 'Java', 'C', 'HTML/CSS'],
  'Frameworks & Libraries': ['React', 'AI/ML frameworks', 'REST APIs'],
  'Tools & Platforms': ['Linux/Unix', 'Docker', 'Git', 'VS Code'],
  Focus: ['Blockchain & IoT', 'Automation', 'Data systems'],
};

const About = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 lg:py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-10"
    >
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">About</p>
        <h1 className="text-4xl font-semibold text-white">About Me</h1>
        <p className="text-lg leading-relaxed text-slate-300">
          I'm Noah Walker, a Computer Science senior in Atlanta who loves building automation that actually runs in the
          real world. I stitch together hardware, software, and data—from mining rigs and IoT deployments to AI-driven
          Python systems.
        </p>
        <p className="text-lg leading-relaxed text-slate-300">
          Looking for internships or early-career SWE roles where I can apply AI, automation, and systems thinking to
          ship resilient products.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Highlights</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map(({ title, icon: Icon, description }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/5 bg-white/5 p-5 shadow-card backdrop-blur"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-full bg-indigo-500/15 p-2 text-indigo-200">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Skills Overview</h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([group, items]) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 rounded-xl border border-white/5 bg-white/5 p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">{group}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-sm font-semibold text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  </div>
);

export default About;
