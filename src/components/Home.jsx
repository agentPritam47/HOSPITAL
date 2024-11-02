import React from 'react'
import Hero from './Hero'
import Info from './Info'
import Services from './Services'
import Doctors from './Doctors'
import Testimonial from './Testimonial'
import Footer from './Footer'

const Home = () => {
  return (
    <div className=' w-full overflow-x-hidden'>
      <Hero />
      <Info />
      <Services />
      <Doctors />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home