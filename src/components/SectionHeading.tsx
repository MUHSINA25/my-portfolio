import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="inline-block rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-indigo-200">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-slate-400">{subtitle}</p>}
    </motion.div>
  );
}
