import React from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import About from './Components/About'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Technologies from './Components/Technologies'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro />
      <About id="about"/>
      <Experience id="experience"/>
      <Projects id="projects"/>
      <Technologies id="technologies"/>
      <Contact id="contact"/>
    </div>
  )
}

export default App
