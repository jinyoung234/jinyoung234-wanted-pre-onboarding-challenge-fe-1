import React from 'react'
import NavBar from '../../components/common/NavBar'
import useToDoForm from '../../hooks/useToDoForm'
import useUser from '../../hooks/useUser'
import useGetTodos from '../../queries/auth/useGetTodos'
import {ToDoListProps} from '../../types'
import {MainPage} from '../../wrappers/main/MainPageWrapper'

function MainContainer() {
  useUser()
  const {createToDoProps} = useToDoForm()
  const {todos, isLoading, isError} = useGetTodos()
  const ToDoListProps: ToDoListProps = {
    todos,
    isLoading,
    isError,
    createToDo: {createToDoProps},
  }
  return (
    <>
      <NavBar />
      <MainPage>
        <MainPage.TodoList {...ToDoListProps} />
        <MainPage.TodoDetail />
      </MainPage>
    </>
  )
}

export default MainContainer
