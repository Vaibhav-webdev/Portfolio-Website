"use client";

import React, { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

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
            Let’s{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
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