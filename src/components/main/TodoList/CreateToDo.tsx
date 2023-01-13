import React from 'react'
import {CreateToDoProps} from '../../../types'

function CreateToDo({form: {handleSubmit, isValidToDo}, input: {register}}: CreateToDoProps) {
  return (
    <form onSubmit={handleSubmit(isValidToDo)}>
      <button>+</button>
      <input type='text' placeholder='오늘 할 ToDo를 적어주세요 :)' {...register('todo')} />
    </form>
  )
}

export default CreateToDo
