import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from "./components/Projects"
import ContactSection from './components/Contact'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page