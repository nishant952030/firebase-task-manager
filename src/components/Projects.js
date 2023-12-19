import React, { useContext, useState } from 'react'
import AddNewProject from './AddNewProject'
import Project from './Project'
import { Bookmark, CaretUp, PencilFill, CaretDown } from 'react-bootstrap-icons'
import EditAndNew from './EditAndNew'
import { TodoContext } from '../context'
function Projects({ setShowModal }) {
  const [showMenu, setShowmenu] = useState(false)
  const [addNew1, setAddNew1] = useState(false)
  const [addNew2, setAddNew2] = useState(false)
  const [forRename, setForRename] = useState("")
  const [edit, setEdit] = useState(false)
  const {projects,setProjects}=useContext(TodoContext)

  const handleEditName = (projectId, newName) => {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === projectId) {
          return { ...project, name: newName };
        }
        return project;
      });
    });
  };
  const addProject = (newproject) => {
    /* const newProject = { id: uuidv4(), name: 'New Project', numOfTodos: 0 }; */ // Default todos to 0
    setProjects([...projects, newproject]);
  };
  const handleclick = () => {
    setEdit(!edit)
  }
  const handleclick2 = () => {
    setShowmenu(!showMenu)
    console.log(projects)
  }
  return (
    <div className='projects2'>
      <div className='projects3'>
        <div className='header'>
          <div className='title'>
            <Bookmark />
            <p>Projects</p></div>
        </div>
        <div className='btns'>
          <span><PencilFill onClick={handleclick} /></span>
          <span><AddNewProject addProject={addProject} addNew={addNew1} setAddNew={setAddNew1} /></span>

          <span>{showMenu ? <CaretUp onClick={handleclick2} /> :
            <CaretDown onClick={handleclick2} />}</span>
        </div>
      </div>
      {showMenu &&
        <div className='items2'>
          {
            projects.map(project => {
              <Project
                project={project}
                key={project.id}
                edit={edit}
                setAddNew2={setAddNew2}
                setForRename={setForRename}
              />
            console.log(project)})
          }
        </div>}
      {addNew1 && (
        <EditAndNew
          projects1=""
          addProject={addProject}
          heading='Project Name'
          addNew1={addNew1}
          setAddNew={setAddNew1}
          confirmbuttonText='Confirm'
          setForRename={setForRename}
          
        />
      )}
      {addNew2 && (
        <EditAndNew
          handleEditName={handleEditName}
          forRename={forRename}
          projects1={Projects}
          heading='Edit Project Name'
          addNew2={addNew2}
          setAddNew={setAddNew2}
          confirmbuttonText='Rename'
        />
      )} </div>
  )
}

export default Projects