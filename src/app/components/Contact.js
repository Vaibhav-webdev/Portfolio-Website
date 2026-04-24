"use client";

import React from "react";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mjkyyeoa", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Error sending message. Try again!", response);
    }
  };
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
  return (
     <section
      id="contact"
      className="relative sm:py-18 sm:px-6 overflow-hidden"
    >

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-3xl shadow-2xl p-8 md:p-12"
      >
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Let’s 
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-12">
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-10 rounded-2xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20"
            >
              <CheckCircle className="mx-auto text-green-500 mb-4" size={60} />
              <h3 className="text-2xl text-green-600 dark:text-green-400 font-semibold">
                Sent Successfully!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Thanks for connecting 🚀
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME + SUBJECT */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input name="name" placeholder="Name" />
                <Input name="subject" placeholder="Subject" />
              </div>

              <Input name="email" placeholder="Email" type="email" />

              <textarea
                placeholder="Message"
                name="message"
                required
                className="w-full h-40 p-4 resize-none rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />

              {/* BUTTON */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium flex items-center gap-2 overflow-hidden shadow-lg hover:scale-105 transition-transform"
                >
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl" />
                  <Send className="z-10" size={18} />
                  <span className="z-10">Send Now</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

function Input({ placeholder, type = "text", name }) {
  return (
    <div className="relative group">
      <input
        type={type}
        required
        name={name}
        placeholder={placeholder}
        className="w-full p-4 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />
    </div>
  );
}
