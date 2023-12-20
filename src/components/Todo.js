import { doc, collection, deleteDoc, getFirestore } from 'firebase/firestore'
import randomColor from 'randomcolor'
import React, { useState } from 'react'
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons'
import { firebase } from './firebase'
import { de } from 'date-fns/locale'
function Todo({ todo, setShowEdit, }) {
    const [hover, setHover] = useState(false)
    const [isChecked, setIsChecked] = useState(todo.checked)
    
    const handleDelete = async (todo) => {
      const firestore = getFirestore(firebase);
        const todocollection= doc(firestore, 'todos',todo.id);

        try {
            await deleteDoc(todocollection);
            console.log(`Document with ID ${todo.id} deleted successfully.`);
        } catch (error) {
            console.error("Error deleting document:", error);
        } finally {
            console.log("Deletion process completed.");
        }
    }

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
                    {hover || isChecked ? <span><Trash onClick={() => { handleDelete(todo); console.log(todo) }} className='trash' /></span> : ""}
                </div>
            </div>
        </div>
    )
}
export default Todo