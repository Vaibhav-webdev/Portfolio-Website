"use client";

import React from "react";
import { useState } from "react";
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
            alert("Error sending message. Try again!");
        }
    };
  return (
    <section
  id="contact"
  className="py-20 sm:py-24 lg:py-28 px-5 sm:px-8 md:px-20"
>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="
      max-w-5xl mx-auto
      bg-white dark:bg-neutral-900
      rounded-3xl shadow-xl
      p-6 sm:p-8 md:p-10
    "
  >
    {/* HEADER */}
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">
        Let’s <span className="text-indigo-500">Connect</span>
      </h2>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>
    </div>

    {/* CONTACT CONTENT */}
    <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT - INFO */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-500 text-white rounded-full shrink-0">
            <Mail size={18} />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Email</p>
            <p className="text-sm sm:text-base font-medium">
              vaibhavbusiness221@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-900 text-white rounded-full shrink-0">
            <Instagram size={18} />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Instagram</p>
            <p className="text-sm sm:text-base font-medium">
              https://www.instagram.com/vaibhav_website_dev/
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600 text-white rounded-full shrink-0">
            <Linkedin size={18} />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500">LinkedIn</p>
            <p className="text-sm sm:text-base font-medium">
              https://www.linkedin.com/in/vaibhav-shukla-74819a392
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT - FORM */}
      {submitted ? (
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 w-full text-center">
          {/* Success Animation */}
          <div className="flex justify-center mb-4 sm:mb-6 animate-scale">
            <CheckCircle size={52} className="text-green-600" />
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-green-700">
            Sent Successfully!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
            Thanks For Connecting With Us! 🎉
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* Name & Subject */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              className="
                w-full
                py-3 sm:py-4 px-3 sm:px-4
                bg-white
                rounded-lg shadow-lg
                text-sm sm:text-base
                focus:outline-none
              "
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="
                w-full
                py-3 sm:py-4 px-3 sm:px-4
                bg-white
                rounded-lg shadow-lg
                text-sm sm:text-base
                focus:outline-none
              "
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="
              w-full
              py-3 sm:py-4 px-3 sm:px-4
              bg-white
              rounded-lg shadow-lg
              text-sm sm:text-base
              focus:outline-none
            "
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            name="message"
            required
            className="
              w-full
              h-36 sm:h-44
              py-3 sm:py-4 px-3 sm:px-4
              bg-white
              rounded-lg shadow-lg
              resize-none
              text-sm sm:text-base
              focus:outline-none
            "
          />

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="
                mt-2 sm:mt-3
                px-5 py-3
                text-sm sm:text-base
                bg-black text-white
                rounded-lg
                hover:bg-green-700
                transition-all
              "
            >
              Send Now
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
