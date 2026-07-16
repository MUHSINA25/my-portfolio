import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  loading: boolean;
}

/** Full-screen loading animation shown briefly on first load. */
export default function Loader({ loading }: LoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#0a0a12]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="relative h-16 w-16"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 border-r-fuchsia-500" />
            </motion.div>
            <motion.p
              className="text-sm font-medium tracking-[0.3em] text-slate-500 dark:text-slate-400"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              MUHSINA&nbsp;CT
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
