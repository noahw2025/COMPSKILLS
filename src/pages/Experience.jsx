import { motion } from 'framer-motion';
import experience from '../data/experience';

const Experience = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 lg:py-24">
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Experience</p>
        <h1 className="text-4xl font-semibold text-white">Experience</h1>
        <p className="text-lg leading-relaxed text-slate-300">
          Roles where I turned ideas into reliable systems—from IoT deployments to data-heavy reporting and team
          leadership.
        </p>
      </header>

      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-slate-700/60" />
        <div className="space-y-8">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="relative ml-6 rounded-2xl border border-white/5 bg-white/5 p-6 shadow-lg backdrop-blur"
            >
              <span className="absolute -left-[13px] top-6 inline-flex h-4 w-4 rounded-full bg-gradient-to-tr from-violet-500 to-sky-500 shadow-card" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-white">{item.role}</h2>
                  <p className="text-sm text-slate-300">
                    {item.company}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                </div>
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-100">
                  {item.startDate} — {item.endDate}
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {item.tech && item.tech.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
