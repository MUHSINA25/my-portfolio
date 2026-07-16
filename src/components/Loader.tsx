import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08090f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div className="h-12 w-12 rounded-full border border-white/10 border-t-[#3b82f6]" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.05, ease: "linear" }} />
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Muhsina CT</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
