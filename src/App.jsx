import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative bg-gray-900 text-white h-screen overflow-hidden font-sans">
      <div className="absolute w-full h-full z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,#111827_90%)]">
        <motion.div className="absolute w-5 h-5 bg-white/60 rounded-full" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }} style={{ transformOrigin: "center", translateX: "120px" }} />
        <motion.div className="absolute w-3 h-3 bg-white/60 rounded-full" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear", delay: 3 }} style={{ transformOrigin: "center", translateX: "120px" }} />
        <motion.div className="absolute w-2 h-2 bg-white/60 rounded-full" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear", delay: 6 }} style={{ transformOrigin: "center", translateX: "120px" }} />
      </div>
      <nav className="absolute top-6 right-8 text-sm space-x-6 uppercase tracking-wider z-10">
        <a href="/research" className="hover:text-gray-400">Research</a>
        <a href="/publications" className="hover:text-gray-400">Publications</a>
        <a href="/cv" className="hover:text-gray-400">CV</a>
      </nav>
      <section className="flex items-center justify-center h-full text-center px-4 relative z-10">
        <div>
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Bharath A. B. Nair
          </motion.h1>
          <motion.p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}>
            Exploring the life of proteins — from dipeptides to proteomes — across space, time, and society.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
