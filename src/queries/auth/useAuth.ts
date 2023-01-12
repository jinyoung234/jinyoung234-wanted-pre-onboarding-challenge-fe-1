import {useMutation} from '@tanstack/react-query'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {postSignUp} from '../../api/auth'
import {IUser} from '../../types'

function useSignUpMutation() {
  const navigate = useNavigate()
  const {mutate: postSignUpMutate} = useMutation((userParams: IUser) => postSignUp(userParams), {
    onSuccess: ({status}) => {
      if (status === 200) navigate('/auth/login')
    },
  })
  return {postSignUpMutate}
}

export {useSignUpMutation}
