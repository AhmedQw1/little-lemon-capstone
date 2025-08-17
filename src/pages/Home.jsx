import React from 'react'
import Hero from '../components/home/Hero'
import Specials from '../components/home/Specials'
import About from '../components/home/About'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Specials />
      <About />
    </div>
  )
}

export default Home