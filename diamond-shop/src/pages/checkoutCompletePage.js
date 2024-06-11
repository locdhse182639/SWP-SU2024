import React from 'react'
import NavBar from '../components/navBar'
import OrderConfirmation from '../components/pageContent/checkoutComplete'
import Footer from '../components/footer'

export default function CheckoutCompletePage() {
  return (
    <div>
        <NavBar/>
        <OrderConfirmation/>
        <Footer/>
    </div>
  )
}
