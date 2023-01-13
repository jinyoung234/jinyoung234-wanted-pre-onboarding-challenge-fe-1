import React from 'react'
import TodoDetail from '../../components/main/TodoDetail'
import TodoList from '../../components/main/TodoList'
import {MainPageWrapperProps} from './type'

export const MainPage = Object.assign(MainPageWrapper, {
  TodoList,
  TodoDetail,
})

function MainPageWrapper({children}: MainPageWrapperProps) {
  return <div>{children}</div>
}

export default MainPageWrapper
