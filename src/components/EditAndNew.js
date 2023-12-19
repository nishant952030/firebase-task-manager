import React, { useState, useRef, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../context';
import { Firestore, addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebase } from './firebase';

const EditAndNew = ({ project, handleEditName, setForRename, forRename, addNew1, setAddNew, heading, confirmbuttonText, onConfirm }) => {
   
    const { projects} = useContext(TodoContext);
    const [projectName, setProjectName] = useState("");
    const handleclick = (e) => {
        if (e.target === modalRef.current) setAddNew(false);
    };
    const modalRef = useRef();
    const addProject = async (e) => {
        e.preventDefault();
        const firestore = getFirestore(firebase);
        const projectsRef = collection(firestore, 'projects');
        projectsRef.where('name', '==', projectName).get()
            .then((snapshot) => {
                if (snapshot.empty) {
                 addDoc(projectsRef, { name: projectName });
                    return;
                } else {
                    alert('Project already exists!');
                }
                setAddNew(false);
            });
    };
    return (
        <>
            {addNew1 && (
                <div className='editnew' ref={modalRef} onClick={handleclick}>
                    <div className='container-editnew'>
                        <form>
                            <p className='editnew-heading'>{heading}</p>
                            <input
                                type='text'
                                value={projectName}
                                onChange={(e) => {
                                    setProjectName(e.target.value);
                                }}
                                placeholder='Add title....'
                            />
                            <div className='editnew-button'>
                                <button type='button' onClick={() => setAddNew(false)}>
                                    Cancel
                                </button>
                                <button
                                    type='button'
                                    onClick={(e) => {
                                        addProject(e);
                                    }}
                                >
                                    {confirmbuttonText}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditAndNew;
