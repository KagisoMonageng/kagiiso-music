import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Discography from './components/Discography'
import Bookings from './components/Bookings'

function App() {

  return (
    <>
    <Navigation/>

    <Hero/>

   <About/>

     {/*<Discography/>

    <Bookings/> */}
      
      
    </>
  )
}

export default App
