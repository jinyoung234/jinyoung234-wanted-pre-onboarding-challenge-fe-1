import React from 'react'
import {ResponseToDoData, ToDoListProps} from '../../../types'

type CardProps = Pick<ResponseToDoData, 'createdAt' | 'title' | 'id'> & Pick<ToDoListProps, 'handleViewTodo'>

function Card({handleViewTodo, createdAt, title, id}: CardProps) {
  return (
    <div onClick={() => handleViewTodo(id)}>
      <p>{createdAt}</p>
      <p>{title}</p>
    </div>
  )
}

export default Card
