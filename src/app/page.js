import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from "./components/Projects"
import ContactSection from './components/Contact'

const page = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <ContactSection />
    </div>
  )
}

export default page