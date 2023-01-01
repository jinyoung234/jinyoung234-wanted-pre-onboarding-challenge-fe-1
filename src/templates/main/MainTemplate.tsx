import React from 'react'
import NavBar from '../../components/common/NavBar'
import ToDoContainer from '../../containers/main/ToDoContainer'

function MainTemplate() {
  return (
    <div>
      <NavBar />
      <ToDoContainer>
        <div></div>
      </ToDoContainer>
    </div>
  )
}

export default MainTemplate
