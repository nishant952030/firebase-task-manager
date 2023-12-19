import React, { useContext } from 'react'
import { useRef, useState } from 'react'
import { TodoContext } from '../context';
import Editform from './Editform';
import dayjs from 'dayjs';
const Modal = ({ showEdit, showModal, setShowmodal, setShowEdit }) => {
  const { projects,setProjects, setSelectedProject }=useContext(TodoContext)
  const modalRef = useRef()
  const [text, setText] = useState('')
  const [day,setDay]=useState(new Date())
  const [time, setTime] = useState(new Date())
  const [isClicked1,setIsclicked1]=useState(false)
  const [isClicked2, setIsclicked2] = useState(false)
  /* const [todoProject, settodoProject] = useState("") */
 /*  const projects = [
    { id: 1, name: "Personal", numOfTodos: 6 },
    { id: 1, name: "Work", numOfTodos: 2 },
    { id: 1, name: "Other", numOfTodos: 0 },
  ] */
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowmodal(false)
      setIsclicked1(false);
      setIsclicked2(false)
    }
  }
  const handleClick1 = () => {
      setIsclicked1(!isClicked1)
      setIsclicked2(false)
  }
  const handleClick2 = () => {
    setIsclicked2(!isClicked2)
    setIsclicked1(false)
  }
    return (
    showModal &&
    <div className='modal ' ref={modalRef} onClick={closeModal}>
          <Editform
            heading="Add a new Todo"
            projects={projects}
            isClicked1={isClicked1}
            isClicked2={isClicked2}
            handleClick1={handleClick1}
            handleClick2={handleClick2}
            setIsclicked1={setIsclicked1}
            setIsclicked2={setIsclicked2}
            day={day}
            setDay={setDay}
            time={time}
            setTime={setTime}
            text={text}
            setText={setText}
            newForm={true}
            setShowmodal={setShowmodal}
            showModal={showModal}
            showEdit={showEdit}
          /*   todoProject={todoProject}
            settodoProject={settodoProject} */
            setSelectedProject={setSelectedProject}

          />

    </div>
  )
}

export default Modal