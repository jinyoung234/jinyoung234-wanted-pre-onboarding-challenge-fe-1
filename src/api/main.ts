import {AxiosError} from 'axios'
import {client} from '../utils/axiosInstance'
import {END_POINT} from '../utils/endpoint'

interface IErrorMessage {
  details: string
}

const createTodos = async (token: string, config: object) => {
  try {
    const response = await client.post(END_POINT.POST_CREATE_TODO, config, {
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

export {createTodos}
