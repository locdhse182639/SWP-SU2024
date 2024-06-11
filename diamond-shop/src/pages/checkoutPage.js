import React from 'react'
import NavBar from '../components/navBar'
import OrderComponent from '../components/pageContent/checkoutContent'
import Footer from '../components/footer'

export default function CheckOutPage() {
  return (
    <div>
        <NavBar/>
        <OrderComponent/>
        <Footer/>
    </div>
  )
}
