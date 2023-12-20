import React, { useContext } from 'react'
import { PencilFill, X, XCircle } from 'react-bootstrap-icons'
import { TodoContext } from '../context/index'
function Project({  project, edit }) {
  const { projects, setProjects, setSelectedProject } = useContext(TodoContext)
 /*  const handleClick = (deleteID) => {
    const newProjects = projects.filter(project => project.id !== deleteID);
    setProjects(newProjects);
  }; */
  return (
    <div className='project'>
      <div className='name' onClick={() => {
        setSelectedProject(project.name);
      }}>{project.name}</div>
      {edit ?
        <div className='project-button'>
          <div className='cross'><span><XCircle onClick={() => {
         
          }} /></span></div>
        </div> : <div className='numoftodo'>{project.numOfTodos}</div>}
    </div>
  )
}

export default Project