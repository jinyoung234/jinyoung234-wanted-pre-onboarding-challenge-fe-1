import React from 'react'
import {useForm} from 'react-hook-form'
import useCreateToDo from '../queries/auth/useCreateToDo'
import {CreateToDoProps, IToDoForm, RequestCreateToDo} from '../types'

function useToDoForm() {
  const {requestCreateTodo} = useCreateToDo()
  const {register, handleSubmit, reset} = useForm<IToDoForm>()
  const isValidToDo = (todoContent: IToDoForm) => {
    const [title, content] = todoContent.todo.split(' ')
    const userTodo: RequestCreateToDo = {title, content}
    if (todoContent.todo.trim().length === 0) {
      alert('ToDo를 입력해주세요.')
      return
    }
    if (!content) {
      alert('내용을 입력해주세요.')
      return
    }
    requestCreateTodo(userTodo)
    reset()
  }
  const createToDoProps: CreateToDoProps = {
    form: {
      handleSubmit,
      isValidToDo,
    },
    input: {
      register,
    },
  }
  return {createToDoProps}
}

export default useToDoForm
