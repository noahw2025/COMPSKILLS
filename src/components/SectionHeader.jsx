import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, copy }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4 }}
    className="max-w-3xl space-y-3"
  >
    {eyebrow && <p className="text-xs uppercase tracking-[0.28em] text-indigo-200">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{title}</h2>
    {copy && <p className="text-lg text-slate-300 leading-relaxed">{copy}</p>}
  </motion.div>
);

export default SectionHeader;
