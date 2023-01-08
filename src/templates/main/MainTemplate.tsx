import React from 'react'
import NavBar from '../../components/common/NavBar'
import CreateToDo from '../../components/main/CreateToDo'
import TodoList from '../../components/main/TodoList'
import {MainPage} from '../../containers/main/MainPageContainer'

function MainTemplate() {
  return (
    <div>
      <NavBar />
      <MainPage>
        <CreateToDo />
        <TodoList />
      </MainPage>
    </div>
  )
}

export default MainTemplate
