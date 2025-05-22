import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Footer from './Footer'
import Testimonail from './Testimonial'
import Faq from './Faq'
import PartnerLogo from './PartnerLogo'

const Home= () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <PartnerLogo/>
      <Testimonail/>
      <Faq />
      <Footer />
    </div>
  )
}

export default Home