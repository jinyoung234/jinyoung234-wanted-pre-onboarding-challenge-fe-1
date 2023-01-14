import React from 'react'
import ToDoDetail from '../../components/main/TodoBoard/ToDoDetail'
import ToDoSideBar from '../../components/main/TodoBoard/ToDoSideBar'
import {MainWrapperProps} from './type'

export const UserToDoBoard = Object.assign(ToDoBoardWrapper, {
  ToDoSideBar,
  ToDoDetail,
})

function ToDoBoardWrapper({children}: MainWrapperProps) {
  return <div>{children}</div>
}

export default ToDoBoardWrapper
