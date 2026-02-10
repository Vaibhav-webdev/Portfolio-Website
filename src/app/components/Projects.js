"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  ExternalLink,
  AlertCircle,
  Lightbulb,
  CheckCircle,
  BookOpen,
} from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website",
    subtitle: "Full-stack e-commerce platform",
    problem:
      "Small businesses need a scalable and user-friendly platform to sell products online with secure authentication and smooth user experience.",
    approach:
      "Designed a modern UI using Tailwind CSS, structured the application with Next.js, and planned backend logic with proper authentication and database schema.",
    solution:
      "Built a full-featured e-commerce website with user authentication, product listing, cart functionality, and secure data handling using MongoDB.",
    learnings:
      "Gained strong experience in full-stack development, authentication flows, database integration, and building scalable production-ready applications.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Auth.js",
      "REST API",
    ],
    github: "https://github.com/Vaibhav-webdev/Voltix",
    live: "https://voltix-theta.vercel.app/",
  },
  {
    title: "AI Powered Resume Builder",
    subtitle: "Smart resume generation using AI",
    problem:
      "Many users struggle to create professional resumes that are ATS-friendly and well-structured.",
    approach:
      "Integrated AI APIs to generate resume content dynamically and focused on clean form-based UI for better user experience.",
    solution:
      "Developed an AI-powered resume builder that generates professional resumes based on user input with customizable sections.",
    learnings:
      "Learned how to integrate third-party AI APIs, handle dynamic data, and manage application state efficiently.",
    tech: [
      "Next.js",
      "React",
      "Auth.js",
      "Tailwind CSS",
      "AI APIs",
      "JavaScript",
    ],
    github: "https://github.com/Vaibhav-webdev/Resume-Builder",
    live: "https://resume-builder-alpha-sable.vercel.app/",
  },
  {
    title: "AI Thumbnail Generator",
    subtitle: "Automated thumbnail generation tool",
    problem:
      "Content creators need eye-catching thumbnails quickly without relying on complex design tools.",
    approach:
      "Used AI image generation APIs and built a simple interface to generate and preview thumbnails instantly.",
    solution:
      "Created an AI-powered thumbnail generator that produces high-quality thumbnails based on text prompts.",
    learnings:
      "Improved understanding of API handling, async workflows, and integrating AI services into real-world applications.",
    tech: [
      "Next.js",
      "React",
      "Auth.js",
      "Tailwind CSS",
      "AI Image API",
    ],
    github: "https://github.com/Vaibhav-webdev/Thumbnail-Generator",
    live: "https://zenix-five.vercel.app/",
  },
  {
    title: "Real-Time Chat Application",
    subtitle: "Live messaging platform",
    problem:
      "Users expect real-time communication with instant message delivery and smooth interactions.",
    approach:
      "Implemented WebSocket-based communication using Socket.IO and designed a clean chat UI for real-time updates.",
    solution:
      "Built a real-time chat application supporting live messaging, user presence, and instant updates.",
    learnings:
      "Gained hands-on experience with real-time systems, WebSockets, event-based communication, and scalable backend design.",
    tech: [
      "React",
      "Auth.js",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
    ],
    github: "https://github.com/Vaibhav-webdev/Chat-Application",
    live: "https://pigio.vercel.app/",
  },
  {
  title: "Personal Portfolio Website",
  subtitle: "Thumbnail-based personal branding portfolio",
  problem:
    "Developers need a visually attractive portfolio to showcase their skills and projects in a unique and memorable way.",
  approach:
    "Designed a custom thumbnail-style UI focused on visual presentation and personal branding.",
  solution:
    "Created a personal portfolio website with a thumbnail-inspired design to showcase projects, skills, and personal identity.",
  learnings:
    "Improved UI/UX design skills, learned how to present personal projects creatively, and enhanced frontend development practices.",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
  ],
  github: "https://github.com/Vaibhav-webdev/Vaibhav-Portfolio",
  live: "https://vaibhav-webdev.github.io/Vaibhav-Portfolio/",
},
{
  title: "AI SaaS Web Application",
  subtitle: "All-in-one AI tools for content creators",
  problem:
    "Content creators need multiple tools for writing, image generation, background removal, and title creation, which are often scattered across different platforms.",
  approach:
    "Developed a SaaS-based web application integrating multiple AI-powered services into a single platform with a user-friendly interface.",
  solution:
    "Built an AI SaaS web app that provides article writing, image generation, background removal, title generation, and many other AI tools for content creators.",
  learnings:
    "Learned how to design and scale a SaaS product, integrate AI APIs, manage user workflows, and build feature-rich web applications.",
  tech: [
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "AI APIs",
    "Tailwind CSS",
  ],
  github: "https://github.com/Vaibhav-webdev/FusionAi",
  live: "https://fusionai-dusky.vercel.app/",
}

];

const ProjectsTimeline = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
  id="projects"
  ref={sectionRef}
  className="relative py-20 sm:py-24 lg:py-28 px-5 sm:px-8 md:px-20 overflow-hidden"
>
  {/* HEADER */}
  <div className="text-center mb-14 sm:mb-20">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
      Project <span className="text-indigo-500">Journey</span>
    </h2>
    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
      A case-study based overview of projects I’ve built and what I learned
      along the way.
    </p>
  </div>

  <div className="relative max-w-5xl mx-auto">
    {/* TIMELINE LINE (desktop only) */}
    <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 -translate-x-1/2" />
    <motion.div
      style={{ scaleY: lineScale }}
      className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500 via-orange-500 to-pink-500 origin-top -translate-x-1/2"
    />

    {/* PROJECTS */}
    <div className="relative flex flex-col gap-14 sm:gap-20">
      {projects.map((project, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative flex ${
              isLeft ? "md:justify-start" : "md:justify-end"
            } justify-center`}
          >
            {/* CARD */}
            <div
              className="
                w-full sm:w-[85%] md:w-[55%]
                bg-white dark:bg-neutral-900
                rounded-2xl shadow-xl
                p-5 sm:p-6
                hover:scale-[1.02]
                transition-transform
              "
            >
              {/* TITLE */}
              <h3 className="text-lg sm:text-xl font-bold">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {project.subtitle}
              </p>

              {/* CASE STUDY */}
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <p className="flex gap-2">
                  <AlertCircle size={18} className="text-red-500 shrink-0" />
                  <span>
                    <strong>Problem:</strong> {project.problem}
                  </span>
                </p>

                <p className="flex gap-2">
                  <Lightbulb size={18} className="text-yellow-500 shrink-0" />
                  <span>
                    <strong>Approach:</strong> {project.approach}
                  </span>
                </p>

                <p className="flex gap-2">
                  <CheckCircle size={18} className="text-green-500 shrink-0" />
                  <span>
                    <strong>Solution:</strong> {project.solution}
                  </span>
                </p>

                <p className="flex gap-2">
                  <BookOpen size={18} className="text-indigo-500 shrink-0" />
                  <span>
                    <strong>Learned:</strong> {project.learnings}
                  </span>
                </p>
              </div>

              {/* TECH STACK */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="mt-5 flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-1 text-xs sm:text-sm hover:underline"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-1 text-xs sm:text-sm hover:underline"
                >
                  <ExternalLink size={15} /> Live
                </a>
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

export default ProjectsTimeline;
