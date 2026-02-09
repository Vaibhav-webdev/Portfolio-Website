"use client";

import { X, Code2, Palette, Database, Sparkles, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "Next.js", icon: Layers },
  { name: "React", icon: Code2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "JavaScript", icon: Sparkles },
  { name: "MongoDB", icon: Database },
];

export default function AboutModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/90 dark:bg-black/80 backdrop-blur-xl p-5 sm:p-8 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]">
              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl" />

              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute right-5 top-5 text-black/60 dark:text-white/60 hover:text-black"
              >
                <X size={22} />
              </motion.button>

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">
                  About Me
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-black/60 dark:text-white/60">
                  Full Stack Developer • Frontend Developer • Backend Enthusiast
                </p>

              </motion.div>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-black/10 dark:bg-white/10" />

              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                className="space-y-4 text-sm sm:text-base text-black/80 dark:text-white/80 leading-relaxed"
              >
                {[
                  "I’m a Web Developer who loves crafting clean, modern, and highly responsive interfaces.",
                  "Most of my projects are created as part of my learning journey, where I explore real-world frontend concepts such as component-based development, reusable UI, responsive layouts, and smooth animations. Each project helps me strengthen my problem-solving skills and understanding of modern frontend workflows.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    {text}
                  </motion.p>
                ))}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  I primarily work with technologies like{" "}
                  <span className="font-bold">React</span> and{" "}
                  <span className="font-bold">Next.js</span>, using{" "}
                  <span className="font-bold">Tailwind CSS</span> to build clean and
                  consistent user interfaces. I pay close attention to spacing, typography,
                  hover states, and micro-interactions because these small details greatly
                  improve the overall user experience.
                </motion.p>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8"
              >
                <h3 className="mb-4 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-black dark:text-white">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.map(({ name, icon: Icon }) => (
                    <motion.div
                      key={name}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-2 rounded-full
                      border border-black/20 dark:border-white/20
                      bg-white/60 dark:bg-white/5
                      px-4 py-2 text-sm cursor-pointer
                      hover:bg-black hover:text-white
                      dark:hover:bg-white dark:hover:text-black
                      transition-colors"
                    >
                      <Icon
                        size={16}
                        className="opacity-70 group-hover:opacity-100"
                      />
                      {name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
