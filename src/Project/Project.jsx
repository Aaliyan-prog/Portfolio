import React from 'react'
import Navbar from '../Component/Navbar'
import ProjectSection from './ProjectSection'
import "../assets/css/Responsive/ResponsiveProject.css"
import "../assets/css/midResponsive/midProjectResponsive.css"
import "../assets/css/laptopResponsive/laptopProjectResponsive.css"
import "../assets/css/largeLaptop/largelapProjRespon.css"
import "../assets/css/extraLargeLaptop/extraLargeLaptopProjRespon.css"
import "../assets/css/normalDesktop/projectResponsive.css"
import "../assets/css/largeDesktop/projectDesktopResponsive.css"
import "../assets/css/largerDesktop/projectLargerDesktopResponsive.css"

const Project = () => {
  return (
    <div className='project-content'>
      <Navbar active={"project"}/>
      <div className="Project-section">
        <ProjectSection/>
      </div>
    </div>
  )
}

export default Project