import React from 'react'
import {ToDoContainerProps} from './type'

export const ToDoList = Object.assign(ToDoContainer, {})

function ToDoContainer({children}: ToDoContainerProps) {
  React.useEffect(() => {
    const accessToken = window.localStorage.getItem('token')
    console.log(accessToken)
    if (accessToken === null) {
      alert('다시 로그인 해 주세요.')
      window.location.href = '/auth/login'
    }
  }, [])
  return <div>{children}</div>
}

export default ToDoContainer
