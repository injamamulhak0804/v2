import { useState } from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <>
      <Home/>
      <About />
      <Skill />
      <Projects />
      <Contact/>
    </>
  )
}

export default App
