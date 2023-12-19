import React, { useState } from 'react'
import Todos from './Todos'
import EditTodo from './EditTodo'
import Editform from './Editform'

function Main() {
  const projects = [
    { id: 1, name: "Personal", numOfTodos: 6 },
    { id: 1, name: "Work", numOfTodos: 2 },
    { id: 1, name: "Other", numOfTodos: 0 },
  ]
  const [showModal,setShowModal]=useState(true)
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [isClicked1, setIsclicked1] = useState(false)
  const [isClicked2, setIsclicked2] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const handleClick1 = () => {
    setIsclicked1(!isClicked1)
    setIsclicked2(false)
  }
  const handleClick2 = () => {
    setIsclicked2(!isClicked2)
    setIsclicked1(false)
  }
  return (
    <div className='main'>
      <Todos setShowEdit={setShowEdit}/>
      <Editform
        projects={projects}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        heading='Edit task'
        text={text}
        setText={setText}
        day={day}
        setDay={setDay}
        time={time}
        setTime={setTime}
        handleClick1={handleClick1}
        handleClick2={handleClick2}
        setShowmodal={setShowModal}
        showModal={showModal}
        />
    </div>
  )
}
export default Main