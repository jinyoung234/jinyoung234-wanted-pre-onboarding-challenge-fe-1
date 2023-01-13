import React from 'react'
import Card from '../../components/main/TodoList/Card'
import CreateToDo from '../../components/main/TodoList/CreateToDo'
import {ToDoListWrapperProps} from './type'

export const UserToDoList = Object.assign(ToDoListWrapper, {
  CreateToDo,
  Card,
})

function ToDoListWrapper({children}: ToDoListWrapperProps) {
  return <div>{children}</div>
}

export default ToDoListWrapper
