import {AxiosError} from 'axios'
import {IFormData} from '../components/auth/SignUpForm/type'
import {client} from '../utils/axiosInstance'
import {END_POINT} from '../utils/endpoint'

interface IErrorMessage {
  details: string
}

const getSignUp = async (obj: IFormData) => {
  try {
    const response = await client.post(END_POINT.POST_SIGN_UP, obj)
    console.log(response)
    return response
  } catch (error) {
    const {response} = error as unknown as AxiosError
    const {details} = response?.data as unknown as IErrorMessage
    if (response?.status === 409) alert(details)
  }
}

const getSignIn = async (obj: IFormData) => {
  try {
    const response = await client.post(END_POINT.POST_SIGN_IN, obj)
    console.log(response)
    return response
  } catch (error) {
    const {response} = error as unknown as AxiosError
    const {details} = response?.data as unknown as IErrorMessage
    if (response?.status === 400) alert(details)
  }
}

export {getSignUp, getSignIn}
