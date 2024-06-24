import React from 'react'
import Navbar from '../components/navBar'
import RingSizeGuide from '../components/pageContent/ringSizeContent'
import Footer from '../components/footer'
import Sidebar from '../components/education/sidebar'

export default function RingSizePage() {
  return (
    <div>
        <Navbar/>
        <RingSizeGuide/>
        <Footer/>
    </div>
  )
}
