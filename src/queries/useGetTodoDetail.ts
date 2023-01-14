import {useQuery, useQueryClient} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import React from 'react'
import {getTodosDetail} from '../api/main'
import {ResponseGetDetailToDos, ResponseToDoData} from '../types'
import {queryKey} from '../utils/queryClient'
import useGetTodos from './auth/useGetTodos'

function useGetTodoDetail() {
  const {todos} = useGetTodos()
  const initialTodo = todos[0]?.id
  const [todoId = initialTodo, setTodoId] = React.useState<string>()
  const fallback: ResponseGetDetailToDos = {data: {data: {} as ResponseToDoData}}
  const {
    data = fallback,
    isError,
    isLoading,
  } = useQuery([queryKey.TODO, todoId], () => getTodosDetail(todoId), {
    enabled: !!todos,
    onError: (errorResponse: AxiosError<{details: string}>) => {
      if (errorResponse.message === 'Network Error') alert(errorResponse.message)
      const STATUS_400_ERROR = errorResponse?.response?.status
      const ERROR_MESSAGE = errorResponse?.response?.data.details
      if (STATUS_400_ERROR) alert(ERROR_MESSAGE)
    },
  })
  const {title, content, createdAt, id} = data?.data.data as ResponseToDoData
  const todoDetail = {createdAt: createdAt?.split('T')[0], title, content, id}
  const toDoBoardProps = {
    todoDetail: {
      todoDetail,
      isError,
      isLoading,
    },
  }
  return {toDoBoardProps, setTodoId}
}

export default useGetTodoDetail
