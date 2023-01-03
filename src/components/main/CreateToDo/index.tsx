import React from 'react'
import {useForm} from 'react-hook-form'
import {createTodos} from '../../../api/main'
import {ToDoAddForm} from '../../../containers/common/FormContainer'
import useConnect from '../../../hooks/useConnect'

function CreateToDo() {
  const {register, handleSubmit, reset} = useForm()
  const {ref: title, ...titleRest} = register('제목')
  const {ref: content, ...contentRest} = register('내용')
  const {connectRef: connectTitleRef} = useConnect(title)
  const {connectRef: connectContentRef} = useConnect(content)
  const handleValidToDoAddForm = (data: any) => {
    const accessToken = window.localStorage.getItem('token') as string
    createTodos(accessToken, {
      title: data.제목,
      content: data.내용,
    }).then(res => {
      reset()
    })
  }
  return (
    <ToDoAddForm handleSubmit={handleSubmit(handleValidToDoAddForm)}>
      <ToDoAddForm.Input type='text' connectRef={connectTitleRef} {...titleRest} />
      <ToDoAddForm.Input type='text' connectRef={connectContentRef} {...contentRest} />
      <ToDoAddForm.Button disabledCondition={false} context='등록' />
    </ToDoAddForm>
  )
}

export default CreateToDo
