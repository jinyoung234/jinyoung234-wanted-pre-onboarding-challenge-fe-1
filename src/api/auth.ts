import {IUser} from '../types'
import {client} from '../utils/axiosInstance'
import {END_POINT} from '../utils/endpoint'

interface IResponseData {
  message: string
  token: string
}

interface IResponse {
  data: IResponseData
  status: number
}

async function postSignUp(userParams: IUser): Promise<IResponse> {
  const {data, status}: IResponse = await client.post(END_POINT.POST_SIGN_UP, userParams)
  return {data, status}
}

async function postSignIn(userParams: IUser): Promise<IResponse> {
  const {data, status}: IResponse = await client.post(END_POINT.POST_SIGN_IN, userParams)
  return {data, status}
}

export {postSignUp, postSignIn}
