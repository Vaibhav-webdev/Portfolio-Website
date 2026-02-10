"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Palette,
  Server,
  Database,
  Braces,
  Cpu,
} from "lucide-react";

const skills = [
  {
    name: "HTML",
    icon: Code,
    desc: "Writing semantic and accessible HTML with proper document structure, SEO-friendly markup, and best practices for clean and maintainable layouts."
  },
  {
    name: "CSS",
    icon: Palette,
    desc: "Creating responsive and modern layouts using Flexbox and Grid, managing layouts across devices, and adding smooth animations and transitions."
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    desc: "Building scalable UI using utility-first classes, responsive breakpoints, reusable components, and custom theming for consistent design systems."
  },
  {
    name: "JavaScript",
    icon: Braces,
    desc: "Strong understanding of ES6+ features, asynchronous programming, DOM manipulation, event handling, and integrating third-party APIs."
  },
  {
    name: "React",
    icon: Cpu,
    desc: "Developing reusable components with hooks, managing application state, handling side effects, and building scalable component-based architectures."
  },
  {
    name: "Next.js",
    icon: Cpu,
    desc: "Working with App Router, server-side rendering, API routes, performance optimization, and SEO-friendly production-ready applications."
  },
  {
    name: "Node.js",
    icon: Server,
    desc: "Building backend services using Node.js, handling authentication, business logic, and integrating databases with secure APIs."
  },
  {
    name: "Express",
    icon: Server,
    desc: "Designing RESTful APIs with Express, managing routing, middleware, validation, and following MVC architecture patterns."
  },
  {
    name: "MongoDB",
    icon: Database,
    desc: "Designing schemas, performing CRUD operations, optimizing queries with indexing, and working with Mongoose for data modeling."
  },
  {
    name: "Python",
    icon: Code,
    desc: "Using Python for scripting, basic automation, problem-solving, and understanding core programming concepts."
  },
];



const SkillsRoadmap = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const dashOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0]
  );

  return (
    <section
  ref={sectionRef}
  id="skills"
  className="relative py-20 sm:py-24 lg:py-28 px-5 sm:px-8 md:px-20 overflow-hidden"
>
  {/* TITLE */}
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
      Skills <span className="text-indigo-500">Journey</span>
    </h2>
    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500">
      A visual roadmap of my learning path
    </p>
  </div>

  <div className="relative max-w-4xl mx-auto">
    {/* SVG PATH */}
    <svg
          viewBox="0 0 300 1000"
          className="absolute left-1/2 -translate-x-1/2 h-full"
        >
          {/* Background path (light) */}
          <path
            d="M150 0 C60 140 240 280 150 420 C60 560 240 700 150 840 C60 980 240 1120 150 1260"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
          />

          {/* Animated path */}
          <motion.path
            d="M150 0 C60 140 240 280 150 420 C60 560 240 700 150 840 C60 980 240 1120 150 1260"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeDasharray="1"
            style={{
              pathLength: 1,
              strokeDashoffset: dashOffset,
            }}
          />

          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

    {/* SKILLS */}
    <div className="relative flex flex-col gap-12 sm:gap-14">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative flex ${
              isLeft ? "justify-start" : "justify-end"
            }`}
          >
            {/* CARD */}
            <div
              className="w-full sm:w-[70%] md:w-[60%] lg:w-[45%] bg-white dark:bg-neutral-900 shadow-lg rounded-xl px-5 py-4 flex items-start gap-4 hover:scale-[1.04] transition-transform"
            >
              <div className="shrink-0 p-3 rounded-full bg-indigo-500 text-white">
                <Icon size={18} />
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
                  {skill.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

  );
};

export default SkillsRoadmap;
