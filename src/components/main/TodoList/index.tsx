import React from 'react'
import useToDoForm from '../../../hooks/useToDoForm'
import {UserToDoList} from '../../../wrappers/main/ToDoListWrapper'

function ToDoList() {
  const {createToDoProps} = useToDoForm()
  return (
    <UserToDoList>
      <UserToDoList.CreateToDo {...createToDoProps} />
      <UserToDoList.Card />
    </UserToDoList>
  )
}

export default ToDoList
