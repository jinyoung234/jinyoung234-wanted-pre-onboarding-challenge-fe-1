import React from 'react'
import TodoBoard from '../../components/main/TodoBoard'
import TodoList from '../../components/main/TodoList'
import {MainWrapperProps} from './type'

export const MainPage = Object.assign(MainPageWrapper, {
  TodoList,
  TodoBoard,
})

function MainPageWrapper({children}: MainWrapperProps) {
  return <div>{children}</div>
}

export default MainPageWrapper
