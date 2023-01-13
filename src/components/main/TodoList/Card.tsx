import React from 'react'
import {ResponseToDoData} from '../../../types'

type CardProps = Pick<ResponseToDoData, 'createdAt' | 'title'>

function Card({createdAt, title}: CardProps) {
  return (
    <div>
      <p>{createdAt}</p>
      <p>{title}</p>
    </div>
  )
}

export default Card
