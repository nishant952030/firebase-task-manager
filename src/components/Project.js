import React, { useContext } from 'react'
import { PencilFill, X, XCircle } from 'react-bootstrap-icons'
import { TodoContext } from '../context/index'
function Project({ forRename, setForRename, project, edit, setAddNew2 }) {
  const { projects, setProjects, setSelectedProject } = useContext(TodoContext)
  const handleClick = (deleteID) => {
    const newProjects = projects.filter(project => project.id !== deleteID);
    setProjects(newProjects);
  };
  return (
    <div className='project'>
      <div className='name' onClick={() => {
        setSelectedProject(project.name);
      }}>{project.name}</div>
      {edit ?
        <div className='project-button'>
          <div className='edit-delte'><span><PencilFill onClick={() => {
            setAddNew2(true);
            setForRename(project.id)
          }} /></span></div>
          <div className='cross'><span><XCircle onClick={() => {
            handleClick(project.id);
            console.log(projects)
          }} /></span></div>
        </div> : <div className='numoftodo'>{project.numOfTodos}</div>}
    </div>
  )
}

export default Project