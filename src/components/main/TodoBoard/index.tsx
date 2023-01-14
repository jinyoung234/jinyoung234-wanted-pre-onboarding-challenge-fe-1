import React from 'react'
import {ToDoBoardProps} from '../../../types'
import {UserToDoBoard} from '../../../wrappers/main/ToDoBoardWrapper'

function TodoBoard({todoDetail: {todoDetail, isError, isLoading}}: ToDoBoardProps) {
  const toDoDetailProps = {todoDetail}
  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error</div>
  return (
    <UserToDoBoard>
      <UserToDoBoard.ToDoSideBar />
      <UserToDoBoard.ToDoDetail {...toDoDetailProps} />
    </UserToDoBoard>
  )
}

export default TodoBoard
