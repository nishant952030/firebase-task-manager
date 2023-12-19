import React, { useContext, useState } from 'react'
import Next7days from './Next7days'
import Todo from './Todo'
import { TodoContext } from '../context'
function Todos({setShowEdit}) {
 const {todos,selectedProject}=useContext(TodoContext)
 
  return (
    <div className='todos'>
      <div className='selected-project'>
        {selectedProject}
      </div>
      <div className='all-todos'>
        {
          selectedProject === "Next 7 Days" ?
            <Next7days todo={todos} /> :
            todos.map(todo =>
              <Todo  setShowEdit={setShowEdit} todo={todo} key={todo.id}/>
          )
       }
      </div>
    </div>
  )
}

export default Todos