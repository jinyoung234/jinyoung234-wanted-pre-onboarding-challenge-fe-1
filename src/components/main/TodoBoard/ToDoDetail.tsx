import React from 'react'
import {ResponseToDoData} from '../../../types'

interface ToDoDetailProps {
  todoDetail: Pick<ResponseToDoData, 'title' | 'content' | 'createdAt'>
}

function ToDoDetail({todoDetail}: ToDoDetailProps) {
  return (
    <div>
      <p>{todoDetail.title}</p>
      <p>{todoDetail.createdAt}</p>
      <p>{todoDetail.content}</p>
    </div>
  )
}

export default ToDoDetail
