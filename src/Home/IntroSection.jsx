import React from 'react'
import { Link } from 'react-router-dom'

const IntroSection = () => {
  return (
    <div className='Intro-Section'>
      <div className="Intro">
        <h5>FullStack Web Developer</h5>
        <h1>Hello, I'm <span>Aaliyan</span></h1>
        <p>I am a fullStack Web developer with 2 years of experience in crafting responsive, scalable, clean and stunning looking websites. </p>
        <div className="Intro-Button">
          <div className='Resume-button'>
            <Link className='Links' to="/resume">Resume</Link>
          </div>
          <div className='Project-button'>
            <Link className='Links' to="/project">Projects</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection