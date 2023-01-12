import {AxiosResponse} from 'axios'
import {IUser} from '../types'
import {client} from '../utils/axiosInstance'
import {END_POINT} from '../utils/endpoint'

async function postSignUp(userParams: IUser) {
  const {data, status}: AxiosResponse = await client.post(END_POINT.POST_SIGN_UP, userParams)
  return {data, status}
}

async function postSignIn(userParams: IUser) {
  const response = await client.post(END_POINT.POST_SIGN_IN, userParams)
  return response
}

export {postSignUp, postSignIn}
