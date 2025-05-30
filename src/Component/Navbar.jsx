import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../assets/css/Navbar.css"
import "../assets/css/Responsive/Responsive.css"
import "../assets/css/midResponsive/midResponsive.css"
import "../assets/css/laptopResponsive/laptopResponsive.css"
import "../assets/css/largeLaptop/largeLaptopResponsive.css"
import "../assets/css/extraLargeLaptop/extraLargeLaptopRespon.css"
import "../assets/css/normalDesktop/homeResponsive.css"
import "../assets/css/largeDesktop/homedesktopResponsive.css"
import "../assets/css/largerDesktop/homeLargerDesktopResponsive.css"
import { IoMdMenu } from "react-icons/io";

const Navbar = ({ active }) => {
  const [navbarToggle, setNavbarToggle] = useState(true);

  const HandleNavbar = () => {
    setNavbarToggle(!navbarToggle);

    if(navbarToggle === false){

    }
    console.log(navbarToggle)
  }
  console.log(navbarToggle)
  
  return (
    <div className="navbar">
        <div className="name-section">
          <h1>Aaliyan.</h1>
        </div>
        <div className={navbarToggle === true ? "navbar-menu hidden" : "navbar-menu show"}>
          <ul>
          <li><Link className={active === "home" ? 'Navbar-Link active' : 'Navbar-Link'} to="/">Home</Link></li>
          <li><Link className= {active === "project" ? 'Navbar-Link active' : 'Navbar-Link'} to="/project">Project</Link></li>
          <li><Link className={active === "resume" ? 'Navbar-Link active' : 'Navbar-Link'} to="/resume">Resume</Link></li>
          <li><Link className={active === "contact" ? 'Navbar-Link active' : 'Navbar-Link'} to="/contact-Us">Contact</Link></li>
          {navbarToggle === false ? (
            <li className='menubar-icon'>
              <IoMdMenu onClick={HandleNavbar} />
            </li>
          ): (<li></li>)}
          </ul>
        </div>
        <div className="menubar" onClick={HandleNavbar}>
        <IoMdMenu />
        </div>
    </div>
  )
}

export default Navbar