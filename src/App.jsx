import { useState } from 'react'

import Hero from './Sections/Hero'
import About from './Sections/About'
import Footer from './Sections/Footer'
import Projects from './Sections/Projects'
import Technologies from './Sections/Technologies'

function App() {

  return (
    <>
      <Hero/>
      {/* <About/> */}
      <Projects/>
      <Technologies/>
      <Footer/>

    </>
  )
}

export default App
