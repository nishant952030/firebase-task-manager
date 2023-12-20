import React, { useContext, useState } from 'react'
import AddNewProject from './AddNewProject'
import Project from './Project'
import { Bookmark, CaretUp, PencilFill, CaretDown } from 'react-bootstrap-icons'
import EditAndNew from './EditAndNew'
import { TodoContext } from '../context'


function Projects({ setShowModal }) {
  const [showMenu, setShowmenu] = useState(false);
  const [addNew1, setAddNew1] = useState(false);
  const [forRename, setForRename] = useState("");
  const [edit, setEdit] = useState(false);
  const { projects, setProjects } = useContext(TodoContext);

  const addProject = (newproject) => {
    setProjects([...projects, newproject]);
  };

  const handleclick = () => {
    setEdit(!edit);
  };

  const handleclick2 = () => {
    setShowmenu(!showMenu);
    console.log(projects);
  };

  if (!projects) {
    // Projects data is still being fetched
    return <p>Loading projects...</p>;
  }

  return (
    <div className='projects2'>
      <div className='projects3'>
        <div className='header'>
          <div className='title'>
            <Bookmark />
            <p>Projects</p>
          </div>
        </div>
        <div className='btns'>
          <span><PencilFill onClick={handleclick} /></span>
          <span><AddNewProject addProject={addProject} addNew={addNew1} setAddNew={setAddNew1} /></span>
          <span>{showMenu ? <CaretUp onClick={handleclick2} /> : <CaretDown onClick={handleclick2} />}</span>
        </div>
      </div>
      {showMenu && (
        <div className='items2'>
          {projects.length > 0 ? (
            projects.map((project) => (
              <Project project={project} key={project.id} edit={edit} />
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </div>
      )}
      {addNew1 && (
        <EditAndNew
          projects1=""
          addProject={addProject}
          heading='Project Name'
          addNew1={addNew1}
          setAddNew={setAddNew1}
          confirmbuttonText='Confirm'
          setForRename={setForRename}
          edit={edit}
        setEdit={setEdit}
        />
      )}
      {/* ... (other components or elements) */}
    </div>
  );
}

export default Projects;
