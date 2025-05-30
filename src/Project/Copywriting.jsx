import React from 'react'
import "../assets/css/cwProject.css"
import "../assets/css/Responsive/ResponsiveCopywrite.css"
import { IoIosMail } from "react-icons/io";


const Copywriting = () => {
  return (
        <div className='project-box'>
          <div className="cwProject">
            <div className="cw-icon">
              <IoIosMail className='cwIcon'/>
            </div>
            <p>Contact me to see my work</p>
          </div>
        </div>
  )
}

export default Copywriting