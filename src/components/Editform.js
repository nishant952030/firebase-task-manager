import React, { useContext, useEffect, useState } from 'react';
import { Bell, Calendar2Day, Clock, Palette, X } from 'react-bootstrap-icons';
import DateFnsUtils from '@date-io/date-fns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MomentUtils from '@date-io/moment';
import { DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Todo from './Todo';
import { TodoContext } from '../context';
import randomColor from 'randomcolor';
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import dayjs from 'dayjs';
import { firebase } from './firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import moment from 'moment';
import { set } from 'date-fns';
function Editform({ setShowEdit,
    projects,
    showEdit,
    heading,
    isClicked1,
    isClicked2,
    todoProp,
    handleClick1,
    handleClick2,
    setIsclicked1,
    setIsclicked2,
    day, setDay,
    time, setTime,
    text, setText,
    newForm,
    setShowmodal, showModal }) {
    const calendarItems = ['Today', 'Next 7 days', 'All'];
    const {  selectedProject,setSelectedProject } = useContext(TodoContext)
    const {todoProject, settodoProject} = useState(selectedProject)
    const handleShow = () => {
        if (showModal) {
            setShowmodal(false);
            console.log("show modal")
        }
        if (showEdit) {
            setShowEdit(false)
            console.log("show edit")
        }
    }
    const handleAddTask = (e) => {
         e.preventDefault()
        if (text && !calendarItems.includes(todoProject)) {
       
       
            addDoc(collection(getFirestore(firebase), 'todos'), {
                id: uuidv4(),
                text: text,
                time: moment(day).format('hh:mm A'),
                date: moment(day).format('DD/MM/YYYY'),
                day: moment(day).format('d'),
                checked: false,
                color: randomColor(),
                projectName: selectedProject,
            });
       
            setShowmodal(false)
            setText("")
            setTime(new Date())
            setDay(new Date())
        }
    }
    useEffect(() => { 
        setSelectedProject(selectedProject)
    },[selectedProject])
    const dateStr = "2023-01-15T00:00:00.000Z";
    return (
        showEdit && (
            <div className={`container ${showEdit || showModal ? "edit-form-arrive" : ""}`}>
                <p className='heading'>{heading}</p>
                <hr />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <form>
                        <div className='text'>
                            <label className='label1'>Add title</label>
                            <input
                                className='input-title'
                                type='text'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder='To do....'
                                autoFocus
                            />
                        </div>
                        <p className='heading2'>Add due date & time</p>
                        <div className='pick-day'>
                            <div className='title'>
                                {/* <Calendar2Day /> */}
                                <p>Choose a day</p>
                            </div>
                            <DatePicker value={dayjs(dateStr)} onChange={(newDay) => setDay(newDay)} />

                        </div>
                        <div className='pick-time'>
                            <div className='title'>

                                <p>Choose time</p>
                            </div>
                            <TimePicker
                                value={time}
                                onChange={(newTime) => setTime(newTime)}
                            />
                        </div>
                        <div className='pick-project'>
                            <div className='title'>
                                {/* <Palette /> */}
                                <p>Choose Project</p>
                            </div>
                            <div className="projects">
                                {projects.length > 0 ? (
                                    projects.map((project) => (
                                        <div
                                            className={`project10 ${selectedProject === project.name ? "projects-button-color" : ""}`}
                                            key={project.id}
                                            onClick={() => setSelectedProject(project.name)
                                            }
                                        >
                                            {project.name}
                                        </div>
                                    ))
                                ) : (
                                    <p style={{ color: '#ff0000' }}>Please add a project</p>
                                )}
                            </div>
                        </div>
                    </form>
                </LocalizationProvider>
                <div className='cancel' onClick={handleShow}>
                    <X size='30px' />
                </div>
                <div className='submit'>
                    <button type='button' className='button2 button1' onClick={(e) => {
                        handleAddTask(e);
                        setShowmodal(false)
                    }}>
                        Add task
                    </button>
                </div>
            </div>
        )
    );
}

export default Editform;
