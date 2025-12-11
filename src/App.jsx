import { useState } from 'react'

import Hero from './Sections/Hero'
import About from './Sections/About'
import Footer from './Sections/Footer'
import Projects from './Sections/Projects'
import Technologies from './Sections/Technologies'
import Education from './Sections/Education'
import Contact from './Sections/Contact'

function App() {

  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Education/>
      <Technologies/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
