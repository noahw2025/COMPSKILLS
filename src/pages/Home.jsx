import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import Mascot from '../components/Mascot';

const Home = () => (
  <div className="relative overflow-hidden px-5 py-16 md:px-8 md:py-20 lg:py-24">
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="text-sm uppercase tracking-[0.25em] text-indigo-200">Atlanta, Georgia</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Noah Walker
          </h1>
          <p className="mt-2 text-xl text-slate-200">Software Engineer & AI/Automation Developer</p>
        </motion.div>

        <motion.p
          className="max-w-2xl text-lg leading-relaxed text-slate-300"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          I build end-to-end systems that connect hardware, software, and data. From blockchain rigs and IoT deployments
          to AI-driven Python automation, I love turning complex problems into reliable solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            View Projects <ArrowRight size={16} />
          </Link>
          <a
            href="/assets/Noah_Walker_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-indigo-300 hover:text-indigo-100"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          {[
            { label: 'GPA', value: '3.93' },
            { label: 'IoT nodes', value: '20+' },
            { label: 'Storage plotted', value: '90TB' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white/5 px-4 py-3 text-center">
              <span className="block text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs uppercase tracking-wide text-indigo-100">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex justify-center lg:justify-end"
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-sky-400/15 blur-3xl" />
        <Mascot />
      </motion.div>
    </div>
  </div>
);

export default Home;
