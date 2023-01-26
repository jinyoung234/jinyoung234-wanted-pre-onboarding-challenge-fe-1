import React from 'react'
import NavBar from '../../components/common/NavBar'
import useToDoForm from '../../hooks/useToDoForm'
import useUser from '../../hooks/useUser'
import useGetTodos from '../../queries/auth/useGetTodos'
import useGetTodoDetail from '../../queries/useGetTodoDetail'
import {ToDoListProps} from '../../types'
import {MainPage} from '../../wrappers/main/MainPageWrapper'

function MainContainer() {
  useUser()
  const {createToDoProps} = useToDoForm()
  const {todos, isLoading, isError} = useGetTodos()
  const {toDoBoardProps, setTodoId} = useGetTodoDetail()
  const handleViewTodo = (todoId: string) => {
    setTodoId(todoId)
  }
  const toDoListProps: ToDoListProps = {
    todos,
    isLoading,
    isError,
    createToDo: {createToDoProps},
    handleViewTodo,
  }

  return (
    <>
      <NavBar />
      <MainPage>
        <MainPage.TodoList {...toDoListProps} />
        <MainPage.TodoBoard {...toDoBoardProps} />
      </MainPage>
    </>
  )
}

export default MainContainer
