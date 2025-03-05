import React from 'react'

import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Service from './Components/Myservice/Service.jsx'
import Portfolio from './Components/MyPortfolio/Portfolio.jsx'
import Experience from './Components/MyExperience/Experience.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Socials from './Components/Socials/Socials.jsx'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Experience/>
    <Portfolio />
   
    <Contact/>
    <Socials/>
    </>
  );
}

export default App
