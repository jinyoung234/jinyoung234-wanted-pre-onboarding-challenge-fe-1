import React from 'react'
import NavBar from '../../components/common/NavBar'
import useUser from '../../hooks/useUser'
import {MainPage} from '../../wrappers/main/MainPageWrapper'

function MainContainer() {
  useUser()
  return (
    <>
      <NavBar />
      <MainPage>
        <MainPage.TodoList />
        <MainPage.TodoDetail />
      </MainPage>
    </>
  )
}

export default MainContainer
