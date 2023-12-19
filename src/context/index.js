import React, { createContext, useState } from 'react'
import { useTodos, useProjects } from '../hooks'
const TodoContext = createContext()
function TodoContextProvider({ children }) {
  const defaultProject = "Today"
  const [selectedProject, setSelectedProject] = useState(defaultProject)
  const todos = useTodos()
  const projects = useProjects(todos)
  const [user, setUser] = useState(null)
  const [authorize, setAuthorize] = useState(true)
  return (
    <TodoContext.Provider
      value={{
        selectedProject:selectedProject,
        setSelectedProject: setSelectedProject,
        projects: projects,
        todos: todos,
        setUser:setUser,
        user,
        authorize,
        setAuthorize
      }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContextProvider, TodoContext } 