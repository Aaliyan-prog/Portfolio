import React from 'react'
import Navbar from '../Component/Navbar'
import BEProjectSection from './BEProjectSection'

const ProjectBackendshow = () => {
  return (
    <div className='project-content'>
      <Navbar active={"project"} />
      <div className="Project-section">
        <BEProjectSection />
      </div>
    </div>
  )
}

export default ProjectBackendshow