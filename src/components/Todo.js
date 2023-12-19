import randomColor from 'randomcolor'
import React, { useState } from 'react'
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons'
function Todo({ handleDelete, todo, setShowEdit }) {
    const [hover, setHover] = useState(false)
    const [isChecked, setIsChecked] = useState(todo.checked)
    return (
        <div className='todo-container'>
            <div className='todo-container-2 ' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className='radio-text'>
                    <div>
                        {isChecked ? <span><CheckCircleFill onClick={() => { console.log(isChecked) }} className='circle' color="#bebebe" /></span> :
                            <span>
                                <Circle
                                    className='circle'
                                    color={randomColor()}
                                    onClick={() => { setIsChecked(true); }} />
                            </span>}
                    </div>
                    <div className={`todo-time-date ${isChecked ? "todo-time-date-grey" : ""}`} onClick={() => setShowEdit(true)}>
                        <p>{todo.text}</p>
                        <span className='time-and-project'>{todo.time}-{todo.projectName}</span>
                        <div className={`line ${isChecked ? "line-through" : ""}`}></div>
                    </div>
                </div>
                <div className='todo-delete'>
                    <div className='add-to-next-day'>
                        {isChecked && <span><ArrowClockwise onClick={() => setIsChecked(false)} className='arrow' /></span>}
                    </div>
                    {hover || isChecked ? <span><Trash onClick={() => { handleDelete(todo.id); console.log(todo) }} className='trash' /></span> : ""}
                </div>
            </div>
        </div>
    )
}
export default Todo