"use client"

import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { ModeToggle } from "./Toggle";
import { useState } from "react";
import AboutModal from "./About";
import { Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [show, setshow] = useState(false)
    const { theme, settheme, systemtheme, open, setOpen } = useAppContext()
    
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="px-4 md:px-6">
        <nav className="flex items-center justify-between backdrop-blur-md bg-white/70 dark:bg-black/40 rounded-2xl px-6 md:px-20 py-4 md:py-6">

          {/* LEFT: LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-200">
              Vaibhav
            </span>
          </div>

          {/* CENTER: DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300 font-medium">
            <li
              onClick={() => setOpen(true)}
              className="hover:text-purple-600 cursor-pointer transition"
            >
              About
            </li>
            <li className="hover:text-purple-600 transition">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="hover:text-purple-600 transition">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="hover:text-purple-600 transition">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* Desktop Socials */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://www.instagram.com/vaibhav_website_dev/" className="hover:text-purple-600 transition">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/vaibhav-shukla-74819a392" className="hover:text-purple-600 transition">
                <Linkedin />
              </a>
            </div>

            <ModeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setshow(!show)}
              className="md:hidden text-gray-700 dark:text-gray-200"
            >
              {show ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-4 mt-3 rounded-2xl bg-white dark:bg-black shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col divide-y dark:divide-gray-800">
                <li
              onClick={() => setOpen(true)} className="px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition"
            >
              About
            </li>
            <li className="px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition">
              <Link href="#portfolio">Skills</Link>
            </li>
            <li className="px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition">
              <Link href="#contact">Contact</Link>
            </li>

              {/* Mobile Socials */}
              <li className="flex gap-4 px-6 py-4">
                <Instagram />
                <Linkedin />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
