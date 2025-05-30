import React from 'react'
import "../assets/css/Project.css"
import "../assets/css/skill.css"
import "../assets/css/Responsive/ResponsiveSkill.css"
import "../assets/css/midResponsive/midSkillResponsive.css"
import "../assets/css/laptopResponsive/laptopSkillRespon.css"
import "../assets/css/largeLaptop/largeLaptopSkillRespon.css"
import "../assets/css/extraLargeLaptop/extraLargeLaptopSkillRespon.css"
import "../assets/css/normalDesktop/skillResponsive.css"
import "../assets/css/largeDesktop/skillDesktopResponsive.css"
import "../assets/css/largerDesktop/skillLargerDesktopResponsive.css"
import Navbar from '../Component/Navbar'
import SkillSection from './SkillSection'

const Skill = () => {
  return (
    <div className='project-content'>
      <Navbar active={"project"} />
      <div className="Project-section">
        <SkillSection />
      </div>
    </div>
  )
}

export default Skill