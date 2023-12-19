import React, { useState } from 'react'
import { Plus } from 'react-bootstrap-icons'

function AddNewProject( {setAddNew}) {
  
  return (
    <div className='addnewproject'>
      <div className='add-button'>
        <span>
          <Plus onClick={() => { setAddNew(true) }} />
        </span>
      </div>
    </div>
  )
}

export default AddNewProject