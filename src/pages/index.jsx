import React from 'react'
import Home from './Home'
import About from './About'

const Index = () => {
  return (
    <>
    <section id="home" data-spy-scroll="true" className='md:max-w-[1280px] md:mx-auto text-center p-2'>
      <Home />
    </section>

  <section id="about" data-spy-scroll="true" className='p-3'>
      <About />
    </section>
    </>

  )
}

export default Index