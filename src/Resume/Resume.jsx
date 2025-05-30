import React from 'react'
import Navbar from '../Component/Navbar'
import "../assets/css/resume.css"
import "../assets/css/Responsive/ResponsiveResume.css"
import "../assets/css/midResponsive/midResume.css"
import "../assets/css/laptopResponsive/laptopResumeResponsive.css"
import "../assets/css/largeLaptop/largeLapResumeRespon.css"
import "../assets/css/extraLargeLaptop/extraLargeLaptopResumeRespon.css"
import "../assets/css/normalDesktop/resumeResponsive.css"
import "../assets/css/largeDesktop/resumeDesktopResponsive.css"
import "../assets/css/largerDesktop/resumeLargerDesktopResponsive.css"

const Resume = () => {
  return (
    <div className="resume">
      <Navbar active={"resume"}/>
      <div className="resumeUI">
        <div className="right-section">
          <div className="resume-content">
            <h1>Skill</h1>
            <div className="skillList">
              <ul>
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
              <ul className='second-list'>
                <li>PHP</li>
                <li>Mysql</li>
                <li>Tailwind css</li>
                <li>Next.js</li>
              </ul>
            </div>
            <h1>Work Experience</h1>
            <div className="firstSec">
              <div className="mainSec">
                <p>Webnovel</p>
                <p>2023-Present</p>
              </div>
              
              <div className="subSection">
                <p>Work as a Author at webnovel. Expert at writing novel with intricate plot, emotional stories, memorable character and rich world building no matter what the genre. </p>
              </div>
            </div>
            <div className="firstSec">
              <div className="mainSec">
                <p>Copwriter</p>
                <p>2024-Present</p>
              </div>
              
              <div className="subSection">
                <p>Specialize in writing emails that boast engagement drive conversion. whether you're looking to increase sales or retain more customers. I can help</p>
              </div>
            </div>
            <h1>Education</h1>
            <div className="firstSec">
              <div className="mainSec">
                <p>Islamia Goverment Collage</p>
                <p>2023-2025</p>
              </div>
              
              <div className="subSection">
                <p>Completed my intermediate education in Engineering Currently pursuing degree focusing on building a strong career.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skillSection">
          <div className="skill">
            <h1>Skill:</h1>
            <ul>
              <li className='language'>FullStack Web developer</li>
              <li className='language'>Copywriting</li>
              <li className='language'>Graphic design</li>
              <li className='language'>Wordpress</li>
            </ul>
            <h1>Language:</h1>
            <ul className='languageList'>
              <div className="listSeperator">
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript</li>
              </div>
              <div className="listSeperator">
                <li>PHP</li>
                <li>Mysql</li>
              </div>
            </ul>
            <h1>FrameWorks & Library</h1>
            <ul className='languageList'>
              <div className="listSeperator">
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </div>
              <div className="listSeperator">
                <li>React.js</li>
              </div>
            </ul>
            <h1>Other</h1>
            <ul>
              <li>Web Socket</li>
              <li>Parcel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume