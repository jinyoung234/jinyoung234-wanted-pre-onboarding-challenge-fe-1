import {useMutation} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {postSignIn, postSignUp} from '../../api/auth'
import {IUser} from '../../types'
import {setStoredToken} from '../../utils/localStorage'

function useSignUpMutation() {
  const navigate = useNavigate()
  const {mutate: postSignUpMutate} = useMutation((userParams: IUser) => postSignUp(userParams), {
    onSuccess: () => {
      navigate('/auth/login')
    },
    onError: (errorResponse: AxiosError<{details: string}>) => {
      if (errorResponse.message === 'Network Error') alert(errorResponse.message)
      const errorMessage = errorResponse.response?.data.details
      if (errorResponse) alert(errorMessage)
    },
  })
  return {postSignUpMutate}
}

function useSignInMutation() {
  const navigate = useNavigate()
  const {mutate: postSignInMutate} = useMutation((userParams: IUser) => postSignIn(userParams), {
    onSuccess: ({data}) => {
      setStoredToken(data.token)
      navigate('/')
    },
    onError: (errorResponse: AxiosError<{details: string}>) => {
      if (errorResponse.message === 'Network Error') alert(errorResponse.message)
      const errorMessage = errorResponse.response?.data.details
      if (errorMessage) alert(errorMessage)
    },
  })
  return {postSignInMutate}
}

export {useSignUpMutation, useSignInMutation}
