"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, BookOpen, Cpu, LayoutDashboard } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import AboutModal from "./About";

const Hero = () => {
  const { open, setOpen } = useAppContext();

  const skills = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
      invertDark: true,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "Figma",
    },
  ];

  const stats = [
    {
      title: "FOCUSED",
      desc: "Learning Mindset",
      sub: "Proactive problem-solving and rapid skill acquisition.",
      icon: BookOpen,
    },
    {
      title: "MODERN",
      desc: "Tech Stack",
      sub: "Leading-edge frameworks like React, Node.js, and Express.",
      icon: Cpu,
    },
    {
      title: "CLEAN",
      desc: "UI Design",
      sub: "User-centric, pixel-perfect, and accessible designs.",
      icon: LayoutDashboard,
    },
  ];

  return (
    <>
      {/* ─── Embedded CSS for orbit + float + shimmer animations ─── */}
      <style>{`
        /* ── Orbit animation ── */
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%)
              rotate(var(--angle))
              translateX(var(--radius))
              rotate(calc(-1 * var(--angle)));
          }
          to {
            transform: translate(-50%, -50%)
              rotate(calc(var(--angle) + 360deg))
              translateX(var(--radius))
              rotate(calc(-1 * (var(--angle) + 360deg)));
          }
        }
        .orbit-item {
          position: absolute;
          top: 50%;
          left: 50%;
          animation: orbit var(--duration, 26s) linear infinite;
        }

        /* ── Float animations ── */
        @keyframes float-up {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-14px) rotate(4deg); }
        }
        @keyframes float-down {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(12px) rotate(-4deg); }
        }
        .hex-frame-float  { animation: float-up   7s ease-in-out infinite; }
        .hex-small-float  { animation: float-down 4.5s ease-in-out infinite; }
        .hex-small-float2 { animation: float-up   5.5s ease-in-out infinite; }

        /* ── Name shimmer ── */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .name-shimmer {
          background: linear-gradient(
            90deg,
            #7c3aed 0%,
            #6366f1 30%,
            #a78bfa 60%,
            #7c3aed 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        /* ── Glow pulse (dark mode blobs) ── */
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.18; filter: blur(120px); }
          50%       { opacity: 0.30; filter: blur(150px); }
        }
        .glow-blob { animation: glow-pulse 5s ease-in-out infinite; }
        .glow-blob-2 {
          animation: glow-pulse 6s ease-in-out infinite;
          animation-delay: 2.5s;
        }

        /* ── Dot-grid background ── */
        .dot-grid {
          background-image: radial-gradient(circle, #a78bfa22 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .dark .dot-grid {
          background-image: radial-gradient(circle, #7c3aed18 1px, transparent 1px);
        }

        /* ── Purple glow ring behind photo ── */
        @keyframes ring-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 0.55; }
          50%       { transform: translate(-50%, -50%) scale(1.06); opacity: 0.80; }
        }
        .photo-glow {
          animation: ring-pulse 4s ease-in-out infinite;
        }
      `}</style>

      <section className="relative overflow-hidden min-h-screen">
        {/* ── Backgrounds ── */}
        <div className="dot-grid absolute inset-0 z-0 pointer-events-none" />
        <div className="bg-indigo-50/50" />

        {/* Dark-mode glow blobs */}
        {/* <div className="glow-blob  hidden dark:block absolute -top-48 -left-48  w-[650px] h-[650px] bg-purple-600 rounded-full" />
        <div className="glow-blob-2 hidden dark:block absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-indigo-600 rounded-full" /> */}

        {/* ── Main content ── */}
        <div className="relative z-10 px-5 sm:px-8 md:px-20 lg:px-28 py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">

            {/* ════════════ LEFT ════════════ */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight"
              >
                Hi, I am <br />
                <span className="name-shimmer">Vaibhav Shukla</span>
              </motion.h1>

              {/* Sub-title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4 text-base sm:text-lg md:text-xl text-center md:text-left text-gray-600 dark:text-gray-300 flex items-center justify-center md:justify-start gap-2"
              >
                <Sparkles size={20} className="text-purple-500" />
                Building Fast &amp; Scalable Web Apps
              </motion.p>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-5 text-sm sm:text-base leading-relaxed text-gray-500 dark:text-gray-400 max-w-xl text-center md:text-left"
              >
                I build clean, fast, and scalable web applications using modern
                technologies with a strong focus on Backend and Frontend Performance.
              </motion.p>

              {/* ── CTA Buttons ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4"
              >
                {/* Primary */}
                <motion.button
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0 0 28px rgba(124,58,237,0.55)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-200 dark:shadow-purple-900/40"
                >
                  <div className="px-7 py-3 flex items-center gap-2">
                    <Link href="#projects">View Projects</Link>
                    <ArrowRight size={18} />
                  </div>
                </motion.button>

                {/* Secondary */}
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "#7c3aed" }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full border border-gray-300 dark:border-gray-600 cursor-pointer bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:border-purple-500 transition-colors"
                >
                  <div className="px-7 py-3 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Link href="#contact">Contact</Link>
                    <Mail size={18} />
                  </div>
                </motion.button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="absolute z-30 hex-small-float"
                style={{ width: "95px", height: "95px", top: "226px", left: "-18px" }}
              >
                <Image
                  src="/hex-small.png"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 4px 14px rgba(124,58,237,0.28))",
                    opacity: 0.88,
                  }}
                />
              </motion.div>

              {/* ── Stats Cards ── */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
                className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {stats.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.12 }}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 12px 32px rgba(124,58,237,0.13)",
                    }}
                    className="cursor-default bg-white/75 dark:bg-white/5 backdrop-blur-sm border border-gray-200/80 dark:border-white/10 rounded-2xl p-4 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300"
                  >
                    {/* Icon badge */}
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 dark:bg-purple-900/40 flex items-center justify-center mb-2.5">
                      <item.icon size={17} className="text-purple-200 dark:text-gray-200" />
                    </div>
                    <p className="text-xs font-bold text-gray-800 dark:text-gray-200 tracking-widest">
                      {item.title}:
                    </p>
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                      {item.desc}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">
                      {item.sub}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ════════════ RIGHT  ════════════ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex justify-center items-center mt-16 lg:mt-0"
              style={{ height: "500px" }}
            >

              {/* Purple glow behind photo */}
              <div
                className="photo-glow absolute rounded-full z-0 pointer-events-none"
                style={{
                  width: "300px",
                  height: "300px",
                  top: "50%",
                  left: "50%",
                  background:
                    "radial-gradient(circle, rgba(167,139,250,0.45) 0%, rgba(99,102,241,0.25) 50%, transparent 75%)",
                }}
              />

              {/* ── Orbiting skill icons ── */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: "460px",
                  height: "460px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {skills.map((skill, index) => {
                  const angle = (360 / skills.length) * index;
                  return (
                    <div
                      key={skill.name}
                      className="orbit-item pointer-events-auto"
                      style={{
                        "--angle": `${angle}deg`,
                        "--radius": "310px",
                        "--duration": "28s",
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        title={skill.name}
                        className="bg-white dark:bg-gray-800 rounded-full shadow-lg shadow-purple-100/60 dark:shadow-purple-900/20 border border-gray-100 dark:border-white/10 flex items-center justify-center"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <img
                          src={skill.src}
                          alt={skill.name}
                          style={{ width: "28px", height: "28px" }}
                          className={skill.invertDark ? "dark:invert" : ""}
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* ── Hexagonal crystal frame (ring) ── */}
              {/*
                SETUP: Save your hexagonal ring image as /public/hex-frame.png
                (crop the RIGHT element from Gemini_Generated_Image file)
              */}
              <div
                className="absolute z-10 w-[46vh] h-[46vh] md:w-[38vw] md:h-[38vw] hex-frame-float pointer-events-none"
              >
                <Image
                  src="/hex-frame.png"
                  alt=""
                  height={400}
                  width={400}
                  className="w-full h-full object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 4px rgba(124,58,237,0.35)) drop-shadow(0 0 18px rgba(99,102,241,0.2))",
                  }}
                />
              </div>

              {/* ── Portrait photo ── */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="relative z-20 rounded-full overflow-hidden mb-10 h-[36vh] w-[36vh] sm:h-[28vw] sm:w-[28vw]"
              >
                <Image
                  src="/logo3.png"
                  height={300}
                  width={300}
                  alt="Vaibhav Shukla"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* ── Small decorative hex — top-left ── */}
              {/*
                SETUP: Save the LEFT small hexagon as /public/hex-small.png
              */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="absolute z-30 hex-small-float"
                style={{ width: "85px", height: "85px", top: "-26px", left: "1px" }}
              >
                <Image
                  src="/hex-small.png"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 4px 14px rgba(124,58,237,0.28))",
                    opacity: 0.88,
                  }}
                />
              </motion.div>

              {/* ── Small decorative hex — bottom-right ── */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: -10 }}
                className="absolute z-30 hex-small-float2"
                style={{
                  width: "48px",
                  height: "48px",
                  bottom: "12px",
                  right: "6px",
                  animationDelay: "1.8s",
                }}
              >
                <Image
                  src="/hex-small.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 4px 12px rgba(99,102,241,0.28))",
                    opacity: 0.65,
                  }}
                />
              </motion.div>

            </motion.div>
            {/* ════════════ END RIGHT ════════════ */}

          </div>
        </div>

        <AboutModal isOpen={open} onClose={() => setOpen(false)} />
      </section>
    </>
  );
};

export default Hero;