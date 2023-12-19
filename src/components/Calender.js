import React, { useContext, useState } from 'react';
import { Calendar2Date, CaretDown, CaretUp } from 'react-bootstrap-icons';
import { TodoContext } from '../context';
function Calender() {
  const  {setSelectedProject}=useContext(TodoContext) 
  const calendarItems = ['Today', 'Next 7 days', 'All'];
  const [showMenu, setShowmenu] = useState(false)
  const handleclick2 = () => {
    setShowmenu(!showMenu)
  }
  return (
    <div className='calendar'>
      <div className='header'>
        <div className='title'>
          <Calendar2Date />
          <p>Calandar</p>
        </div>
        <div className='btns'>
          <span>{showMenu ? <CaretUp onClick={handleclick2} /> :
            <CaretDown onClick={handleclick2} />}</span>
        </div>
      </div>
      {showMenu &&
        <div className='items'>
          {calendarItems.map(item => (
            <div onClick={()=>setSelectedProject(item)} className={` item ${item}`} key={item}>
              {item}
            </div>
          ))}
        </div>}
    </div>
  );
}

export default Calender;
