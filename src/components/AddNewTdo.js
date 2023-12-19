import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Modal from './Modal'
import { TodoContext } from '../context'
function AddNewTdo() {
  const { selectedProject } = useContext(TodoContext)
  const [todoProject, setTodoProject] = useState(selectedProject)
  const projects = [
    { id: 1, name: "Personal", numOfTodos: 6 },
    { id: 1, name: "Work", numOfTodos: 2 },
    { id: 1, name: "Other", numOfTodos: 0 },
  ]
  useEffect(() => {
    setTodoProject(selectedProject)
  }, [selectedProject])
  
  const [showModal,setShowmodal]=useState(false)
  return (
    <div className='addnewtodo'>
      <button type='button' className='button1' onClick={() => { setShowmodal(true)}} >Add Task</button>
      <Modal projects={projects } showEdit={true} showModal={showModal} setShowmodal={setShowmodal}/>
       
    </div>
  )
}

export default AddNewTdo