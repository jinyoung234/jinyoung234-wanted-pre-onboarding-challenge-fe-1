import {useQuery} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import React from 'react'
import {getTodos} from '../../api/main'
import {ResponseGetToDos, ResponseToDoData} from '../../types'
import {queryKey} from '../../utils/queryClient'

function useGetTodos() {
  const fallback: ResponseGetToDos = {data: {data: [] as ResponseToDoData[]}}
  const {
    data = fallback,
    isLoading,
    isError,
  } = useQuery([queryKey.TODO], getTodos, {
    suspense: true,
    onError: (errorResponse: AxiosError) => {
      if (errorResponse.message === 'Network Error') alert(errorResponse.message)
    },
  })
  const todos = data?.data.data
  return {todos, isLoading, isError}
}

export default useGetTodos
