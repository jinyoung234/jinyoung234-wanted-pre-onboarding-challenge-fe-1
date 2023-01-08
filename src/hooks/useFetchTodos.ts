import {useCallback, useEffect, useState} from 'react'
import {useRecoilState, useRecoilValueLoadable, useSetRecoilState} from 'recoil'
import {disabledAtom, fetchTodosSelector, todosAtom} from '../atoms/main'
import {IToDoData} from '../containers/main/type'

const useFetchTodos = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [todos, setTodos] = useRecoilState<IToDoData[]>(todosAtom)
  const todosResponse = useRecoilValueLoadable(fetchTodosSelector)
  const setDisabled = useSetRecoilState(disabledAtom)
  const requestFetchTodos = useCallback((): void => {
    if (todosResponse === null || todosResponse === undefined) {
      return
    }

    switch (todosResponse.state) {
      case 'loading':
        setIsLoading(true)
        break

      case 'hasValue':
        setIsLoading(false)
        console.log(todosResponse.contents)
        setTodos(todosResponse.contents)
        break

      case 'hasError':
        setIsError(false)
        setIsLoading(false)
        break

      default:
        return
    }
  }, [setTodos, todosResponse])

  useEffect(() => {
    requestFetchTodos()
  }, [requestFetchTodos])

  useEffect(() => {
    for (let i = 0; i < todos.length; i++) {
      setDisabled(prev => {
        const copy = [...prev]
        copy.push(true)
        return copy
      })
    }
  }, [todos.length])

  return {
    isLoading,
    isError,
    todos,
  }
}

export default useFetchTodos
