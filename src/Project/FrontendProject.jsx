import React from 'react'
import projectImg from "../assets/Images/Finance-Management.png"
import ECommerceprojectImg from "../assets/Images/01-E-commerce.png"
import ECommerceproject2Img from "../assets/Images/02-E-commerce.png"

const FrontendProject = () => {
  return (
    <div className='project-box'>
      <div className="boxes">
        <div className="imgDiv">
          <img src={projectImg} alt="" />
        </div>
          <div className="project-box-content">
            <h4>Full Stack Accountant application</h4>
            <p>Accountant dashboard Created using React.js, PHP, Mysql</p>
            <div className="skillTags">
              <div className="skillTag">
                React.js
              </div>
              <div className="skillTag">
                PHP
              </div>
              <div className="skillTag">
                Mysql
              </div>
            </div>
          </div>
      </div>
      <div className="boxes">
        <div className="imgDiv">
          <img src={ECommerceprojectImg} alt="" />
        </div>
          <div className="project-box-content">
            <h4>E-commerce Website</h4>
            <p>E-commerce Website Created using React.js</p>
            <div className="skillTags">
              <div className="skillTag">
                React.js
              </div>
              <div className="skillTag">
                Firebase
              </div>
            </div>
          </div>
      </div>
      <div className="boxes">
        <div className="imgDiv">
          <img src={ECommerceproject2Img} alt="" />
        </div>
          <div className="project-box-content">
            <h4>E-commerce Website</h4>
            <p>E-commerce website created using the vanilla js, Firebase for auth</p>
            <div className="skillTags">
              <div className="skillTag">
                JS
              </div>
              <div className="skillTag">
                Firebase
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FrontendProject