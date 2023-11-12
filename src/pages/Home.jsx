import React from 'react'
import LoaderHome from '../components/loaderHome/LoaderHome'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Navbar from '../components/navbar/Navbar'
import Work from '../components/work/Work'
import Service from '../components/service/Service'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <LoaderHome/>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default Home
