import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './projects'

const Index = () => {
  return (
    <>
    <section id="home" data-spy-scroll="true" className='md:max-w-[1280px] md:mx-auto text-center p-2'>
      <Home />
    </section>

  <section id="about" data-spy-scroll="true" className='mb-10'>
      <About />
    </section>

      <section id="projects" data-spy-scroll="true">
      <Projects />
    </section>
    
    </>

  )
}

export default Index