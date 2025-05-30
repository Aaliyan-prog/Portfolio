import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from './Home/Home'
import Project from './Project/Project'
import ProjectSection from './Project/ProjectSection'
import ProjectBackendshow from './Project/ProjectBackendshow'
import Skill from './Project/Skill'
import Resume from './Resume/Resume'
import Contact from './Contact/Contact'
import Copywriting from './Copywriting/Copywriting'

const AppOutlet = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppOutlet/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/project",
        element: <Project/>
      },
      {
        path: "/project/coding",
        element: <Project/>
      },
      {
        path: "/project/copywriting",
        element: <ProjectBackendshow/>
      },
      {
        path: "/project/skill",
        element: <Skill/>
      },
      {
        path: "/resume",
        element: <Resume/>
      },
      {
        path: "/contact-Us",
        element: <Contact/>
      },
      {
        path: "/copywriting-email/:id",
        element: <Copywriting/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App