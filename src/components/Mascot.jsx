import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const float = {
  animate: {
    y: [0, -8, 0],
    scale: [1, 1.02, 1],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

const Mascot = ({ small = false }) => (
  <motion.div
    variants={float}
    animate="animate"
    className={`relative ${small ? 'h-28 w-28' : 'h-40 w-40'} rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)]`}
  >
    <div className="absolute inset-0 rounded-3xl bg-white/10 blur-2xl" aria-hidden="true" />
    <div className="relative flex h-full flex-col items-center justify-center gap-2 rounded-2xl bg-slate-900/70 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
        <span className="h-3 w-3 rounded-full bg-amber-300/90" />
        <span className="h-3 w-3 rounded-full bg-rose-400/90" />
      </div>
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/80 shadow-inner">
        <div className="absolute top-3 flex w-full justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/80" />
          <span className="h-2 w-2 rounded-full bg-white/80" />
        </div>
        <Code2 className="h-7 w-7 text-indigo-200" />
        <div className="absolute bottom-2 flex gap-1">
          <span className="h-1 w-3 rounded-full bg-emerald-300/80" />
          <span className="h-1 w-3 rounded-full bg-sky-300/80" />
        </div>
      </div>
      <div className="text-xs font-semibold text-indigo-100">Hi, I'm Noah 👋</div>
    </div>
  </motion.div>
);

export default Mascot;
