"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import AboutModal from "./About";

const Hero = () => {
  const { open, setOpen } = useAppContext();

  const skills = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      name: "Tailwind",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="px-5 sm:px-8 md:px-20 lg:px-28 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-6xl text-center md:text-left font-bold text-gray-900 dark:text-gray-200 leading-tight"
            >
              Hi, I am <br />
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Vaibhav Shukla
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-4 text-base sm:text-lg text-center md:text-left md:text-xl text-gray-700 dark:text-gray-300 flex items-center gap-2"
            >
              <Sparkles size={20} />
              Building Fast & Scalable Web Apps
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-sm sm:text-base text-gray-600 max-w-xl text-center md:text-left dark:text-gray-400"
            >
              I build clean, fast, and scalable web applications using modern
              technologies with a strong focus on Backend and Frontend Performence.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-lg flex items-center"
              >
                <div className="px-6 py-3 gap-2 flex items-center">
                  <Link href="#projects">Views Projects</Link> <ArrowRight size={18} />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border cursor-pointer rounded-3xl flex items-center gap-2 hover:border-gray-500 transition"
              >
                <div className="px-6 py-3 gap-2 flex items-center">
                  <Link href="#contact">Contact</Link> <Mail size={18} />
                </div>
              </motion.button>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="mt-10 md:mt-12 flex flex-wrap gap-8 md:gap-10"
            >
              {[
                { title: "Focused", desc: "Learning Mindset" },
                { title: "Modern", desc: "Tech Stack" },
                { title: "Clean", desc: "UI Design" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="cursor-default"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE + ORBIT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center mt-16 lg:mt-0"
          >
            {/* ORBIT */}
            <div className="absolute w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] lg:w-[42vw] lg:h-[42vw] orbit-animate">
              {skills.map((skill, index) => {
                const angle = (360 / skills.length) * index;
                return (
                  <div
                    key={skill.name}
                    className="orbit-item"
                    style={{
                      "--angle": `${angle}deg`,
                      "--radius": "22vw",
                      "--duration": "26s",
                    }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      src={skill.src}
                      alt={skill.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white p-2 rounded-full shadow-lg"
                    />
                  </div>
                );
              })}
            </div>

            {/* USER IMAGE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-20 w-[60vw] h-[60vw] sm:w-[45vw] sm:h-[45vw] lg:w-[38vw] lg:h-[38vw] rounded-full overflow-hidden shadow-xl lg:shadow-2xl"
            >
              <img
                src="/logo3.png"
                alt="User"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AboutModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Hero;
