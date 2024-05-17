import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marguee from './components/Marguee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Clients from './components/Clients'
import Cards from './components/Cards'
import Project from './components/Project'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen text-black'>
      <Navbar />
      <LandingPage />
      <Marguee />
      <About />
      <Eyes />
      <Featured />
      <Clients />
      <Cards />
      <Project />
      <Footer />
    </div>
  )
}

export default App
