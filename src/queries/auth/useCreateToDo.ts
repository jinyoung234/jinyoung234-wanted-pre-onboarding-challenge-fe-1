import {useMutation, useQueryClient} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import {createTodos} from '../../api/main'
import {RequestCreateToDo} from '../../types'
import {queryKey} from '../../utils/queryClient'

function useCreateToDo() {
  const queryClient = useQueryClient()
  const {mutate: requestCreateTodo} = useMutation((userToDo: RequestCreateToDo) => createTodos(userToDo), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey.TODO])
      alert('등록이 완료되었습니다 :)')
    },
    onError: (errorResponse: AxiosError) => {
      if (errorResponse.message === 'Network Error') alert(errorResponse.message)
    },
  })
  return {requestCreateTodo}
}

export default useCreateToDo
