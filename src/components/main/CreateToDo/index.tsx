import React from 'react'
import {useForm} from 'react-hook-form'
import {createTodos} from '../../../api/main'
import {ToDoAddForm} from '../../../containers/common/FormContainer'

function CreateToDo() {
  const {register, handleSubmit, reset} = useForm()
  const handleValidToDoAddForm = (data: any) => {
    const accessToken = window.localStorage.getItem('token') as string
    createTodos(accessToken, {
      title: data.제목,
      content: data.내용,
    }).then(res => {
      reset()
    })
    window.location.href = '/'
  }
  return (
    <ToDoAddForm handleSubmit={handleSubmit(handleValidToDoAddForm)}>
      <ToDoAddForm.Input type='text' {...register('제목')} />
      <ToDoAddForm.Input type='text' {...register('내용')} />
      <ToDoAddForm.Button disabledCondition={false} context='등록' />
    </ToDoAddForm>
  )
}

export default CreateToDo
