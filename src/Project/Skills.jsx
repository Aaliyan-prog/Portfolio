import React from 'react'
import { FaCss3Alt, FaHtml5, FaPhp, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="skillboxes">
      <div className="SkillBox">
        <FaHtml5 className='skillicon'/>
      </div>
      <div className="SkillBox">
        <FaCss3Alt className='skillicon'/>
      </div>
      <div className="SkillBox">
        <TbBrandJavascript className='skillicon' />
      </div>
      <div className="SkillBox">
        <FaReact className='skillicon' />
      </div>
      <div className="SkillBox">
        <FaPhp className='skillicon' />
      </div>
      <div className="SkillBox">
        <SiMysql className='skillicon' />
      </div>
      <div className="SkillBox">
        <RiTailwindCssFill className='skillicon' />
      </div>
      <div className="SkillBox">
        <RiNextjsFill className='skillicon' />
      </div>
    </div>
  )
}

export default Skills