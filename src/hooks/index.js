import { useState, useEffect } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { firebase } from '../components/firebase/index';

export function useTodos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(getFirestore(firebase), 'todos'), snapshot => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setTodos(data);
            console.log(data)
        });

        return () => unsubscribe();
    }, []);

    return todos;
}

export function useProjects(todos) {
    const [projects, setProjects] = useState([]);

    function calculateNumOfTodos(projectName, todos) {
        return todos ? todos.filter(todo => todo.name === projectName).length : 0;
    }

    useEffect(() => {
        const unsubscribe =
            onSnapshot(collection(getFirestore(firebase), 'projects'), snapshot => {
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                    numOfTodos: calculateNumOfTodos(doc.data().name, todos)
                
                }));
                setProjects(data);
              
                
            });
         
        return () => unsubscribe();
    }, [todos]);
    useEffect(() => {
        console.log("use project",projects);
    }, [projects]);

    return projects;
}
