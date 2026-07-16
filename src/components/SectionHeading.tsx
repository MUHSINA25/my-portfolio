import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

/** Consistent animated heading used across all sections. */
export default function SectionHeading({ eyebrow, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="inline-block rounded-full bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{subtitle}</p>
      )}
    </motion.div>
  );
}
