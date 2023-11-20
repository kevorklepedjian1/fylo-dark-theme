import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import CtaSection from './Components/CtaSection'
import Second from './Components/Second'
import Footer from './Components/Footer'
import Attribute from './Components/Attribute'
import FeaturesSection from './Components/FeaturesSection'
import TestimonialsSection from './Components/TestimonialsSection'

function App() {


  return (
    <>
     <Header/>
     <Hero/> 
     <FeaturesSection/>
     <Second/>
     <TestimonialsSection/>
     <CtaSection/>
     <Footer/>
     <Attribute/>
    </>
  )
}

export default App
