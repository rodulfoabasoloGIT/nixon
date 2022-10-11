import React from 'react'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import '../assets/scss/style.scss'

const layout = ({children}) => {
  return (
    // <div>layout</div>
    <>
     <Nav/>
     {children}
    <Footer/>
    </>

  )
}

export default layout