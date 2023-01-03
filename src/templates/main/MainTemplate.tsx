import React from 'react'
import NavBar from '../../components/common/NavBar'
import CreateToDo from '../../components/main/CreateToDo'
import {MainPage} from '../../containers/main/MainPageContainer'

function MainTemplate() {
  return (
    <div>
      <NavBar />
      <MainPage>
        <CreateToDo />
      </MainPage>
    </div>
  )
}

export default MainTemplate
