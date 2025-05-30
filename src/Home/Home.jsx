import React from 'react'
import Navbar from '../Component/Navbar'
import "../assets/css/Style.css"
import "../assets/css/Navbar.css"
import "../assets/css/Responsive/Responsive.css"
import "../assets/css/midResponsive/midResponsive.css"
import "../assets/css/laptopResponsive/laptopResponsive.css"
import "../assets/css/largeLaptop/largeLaptopResponsive.css"
import "../assets/css/extraLargeLaptop/extraLargeLaptopRespon.css"
import IntroSection from './IntroSection'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar active={"home"}/>
      <div className="Hero-section">
        <IntroSection/>
      </div>
    </div>
  )
}

export default Home