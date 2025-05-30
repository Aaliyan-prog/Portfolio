import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/Project.css"
import Copywriting from './Copywriting'

const BEProjectSection = () => {
  return (
    <div className='ProjectSection'>
      <div className="left-section">
        <div className="projects-menubar">
          <h1>My Projects</h1>
          <ul className="projects-menubar-list">
            <li><Link className="menubar-Links" to="/project/coding">Coding</Link></li>
            <li><Link className="menubar-Links" to="/project/copywriting">Copywriting</Link></li>
            <li><Link className="menubar-Links" to="/project/skill">Skill</Link></li>
          </ul>
        </div>
      </div>
      <div className="right-section">
        <div className="menuContent">
          <div className="project-content">
            <Copywriting />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BEProjectSection