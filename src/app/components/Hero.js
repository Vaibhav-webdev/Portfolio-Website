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
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express",
      invertDark: true,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
      name: "Expo",
      invertDark: true,
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
                  className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-400 dark:shadow-purple-900/40"
                >
                  <div className="px-7 py-3 flex items-center gap-2">
                    <Link href="#projects" className="flex items-center gap-1">
                      View Projects
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.button>

                {/* Secondary */}
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "#7c3aed" }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full border border-gray-300 dark:border-gray-600 cursor-pointer bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:border-purple-500 transition-colors"
                >
                  <div className="px-7 py-3 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Link href="#contact" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                      <Mail size={18} />
                      <span>Contact</span></Link>
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {stats.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.4 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -5 }}
                    className="
        group relative overflow-hidden
        min-h-[190px]
        rounded-[22px]
        border border-gray-200/80
        dark:border-white/[0.09]
        bg-white
        dark:bg-[#0b0b10]
        p-6
        transition-all duration-500
        hover:border-purple-500/30
        dark:hover:border-purple-400/20
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]
        dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
      "
                  >
                    {/* Decorative grid */}
                    <div
                      className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
          [background-image:linear-gradient(to_right,rgba(124,58,237,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.045)_1px,transparent_1px)]
          [background-size:24px_24px]
        "
                    />

                    {/* Glow */}
                    <div
                      className="
          pointer-events-none absolute
          -right-16 -top-16
          h-32 w-32
          rounded-full
          bg-purple-500/10
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-700
        "
                    />

                    {/* Top row */}
                    <div className="relative flex items-start justify-between">
                      <div
                        className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
            border border-gray-200
            bg-gray-50
            text-gray-500
            transition-all duration-500
            group-hover:border-purple-200
            group-hover:bg-purple-50
            group-hover:text-purple-600
            dark:border-white/10
            dark:bg-white/[0.035]
            dark:text-gray-400
            dark:group-hover:border-purple-500/20
            dark:group-hover:bg-purple-500/10
            dark:group-hover:text-purple-400
          "
                      >
                        <item.icon size={18} strokeWidth={1.7} />
                      </div>

                      <span
                        className="
            text-[10px] font-semibold
            tracking-[0.2em]
            text-gray-300
            dark:text-white/15
          "
                      >
                        0{i + 1}
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="relative mt-7">
                      <p
                        className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-gray-400
            dark:text-gray-500
          "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
            mt-2
            text-xl
            font-semibold
            tracking-tight
            text-gray-900
            dark:text-white
            transition-colors duration-300
            group-hover:text-purple-600
            dark:group-hover:text-purple-400
          "
                      >
                        {item.desc}
                      </p>

                      <p
                        className="
            mt-2
            text-xs
            leading-relaxed
            text-gray-500
            dark:text-gray-400
          "
                      >
                        {item.sub}
                      </p>
                    </div>

                    {/* Bottom line */}
                    <div className="absolute bottom-0 left-6 right-6 h-px overflow-hidden bg-gray-100 dark:bg-white/[0.06]">
                      <motion.div
                        className="h-full w-0 bg-purple-500"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
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
                        className="bg-[#ffffff] dark:bg-gray-800 rounded-full shadow-lg shadow-purple-100/60 dark:shadow-purple-900/20 border border-gray-100 dark:border-white/10 flex items-center justify-center"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <img
                          src={skill.src}
                          alt={skill.name}
                          style={{ width: "30px", height: "30px" }}
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
                className="absolute z-10 w-[46vh] h-[46vh] md:w-[37vw] md:h-[37vw] hex-frame-float pointer-events-none"
              >
                <Image
                  src="/hex-frame.png"
                  alt=""
                  height={350}
                  width={350}
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
                className="relative z-20 rounded-full overflow-hidden mb-10 md:mb-18 h-[36vh] w-[36vh] sm:h-[30vw] sm:w-[30vw]"
              >
                <Image
                  src="/logo3.png"
                  height={380}
                  width={380}
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
