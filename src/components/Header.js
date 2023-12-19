import React from 'react'
import AddNewTdo from './AddNewTdo';
import User from './User';
import Calender from './Calender';
import Projects from './Projects';
function Sidebar() {
  return (
    <div className='sidebar'>
      <User />
      <AddNewTdo />
      <Calender />
      <Projects />
    </div>
  )
}

export default Sidebar