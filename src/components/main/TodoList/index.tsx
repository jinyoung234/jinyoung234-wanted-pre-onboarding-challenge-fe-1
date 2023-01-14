import React from 'react'
import {ToDoListProps} from '../../../types'
import {UserToDoList} from '../../../wrappers/main/ToDoListWrapper'

function ToDoList({todos, isLoading, isError, createToDo: {createToDoProps}, handleViewTodo}: ToDoListProps) {
  if (isLoading) return <div>isLoading...</div>
  if (isError) return <div>error</div>
  return (
    <UserToDoList>
      <UserToDoList.CreateToDo {...createToDoProps} />
      <>
        {todos?.map(todo => (
          <UserToDoList.Card
            handleViewTodo={handleViewTodo}
            createdAt={todo.createdAt.split('T')[0]}
            title={todo.title}
            id={todo.id}
            key={todo.id}
          />
        ))}
      </>
    </UserToDoList>
  )
}

export default ToDoList
