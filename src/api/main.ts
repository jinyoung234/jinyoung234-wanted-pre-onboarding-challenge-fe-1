import {AxiosError} from 'axios'
import {RequestCreateToDo, ResponseCreateToDo} from '../types'
import {client} from '../utils/axiosInstance'
import {END_POINT} from '../utils/endpoint'
import {getStoredToken} from '../utils/localStorage'

interface IErrorMessage {
  details: string
}

const getTodosDetail = async (token: string, id: string) => {
  try {
    const response = await client.get(`${END_POINT.GET_TODOS}/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    return response.data
  } catch (error) {
    const {response} = error as unknown as AxiosError
    const {details} = response?.data as unknown as IErrorMessage
    if (response?.status === 400) alert(details)
  }
}

const deleteTodo = async (token: string, id: string) => {
  try {
    const response = await client.delete(`${END_POINT.DELETE_DELETE_TODO}${id}`, {
      headers: {
        Authorization: token,
      },
    })
    return response.data
  } catch (error) {
    const {response} = error as unknown as AxiosError
    const {details} = response?.data as unknown as IErrorMessage
    if (response?.status === 400) alert(details)
  }
}

const updateTodo = async (token: string, config: object, id: string) => {
  try {
    const response = await client.put(`${END_POINT.PUT_UPDATE_TODO}${id}`, config, {
      headers: {
        Authorization: token,
      },
    })
    return response.data
  } catch (error) {
    const {response} = error as unknown as AxiosError
    const {details} = response?.data as unknown as IErrorMessage
    if (response?.status === 400) alert(details)
  }
}

const createTodos = async (userTodo: RequestCreateToDo) => {
  const accessToken = getStoredToken()
  const {data}: ResponseCreateToDo = await client.post(END_POINT.POST_CREATE_TODO, userTodo, {
    headers: {
      Authorization: accessToken,
    },
  })
  return data
}

const getTodos = async (token: string) => {
  try {
    const response = await client.get(END_POINT.GET_TODOS, {
      headers: {
        Authorization: token,
      },
    })
    return response.data
  } catch (error) {
    const {response} = error as unknown as AxiosError
    const {details} = response?.data as unknown as IErrorMessage
    if (response?.status === 400) alert(details)
  }
}

export {getTodos, createTodos, updateTodo, deleteTodo, getTodosDetail}
