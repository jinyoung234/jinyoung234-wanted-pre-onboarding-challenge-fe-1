import React from 'react'
import {useForm} from 'react-hook-form'
import {useSignInMutation, useSignUpMutation} from '../queries/auth/useAuth'
import {IFormData, SignInProps, SignUpProps} from '../types'

function useAuthForm() {
  const {postSignUpMutate} = useSignUpMutation()
  const {postSignInMutate} = useSignInMutation()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormData>()
  const onSignUpValid = (userInfo: IFormData) => {
    postSignUpMutate({email: userInfo.email, password: userInfo.password})
  }
  const errorConfig = {
    errors,
    idErrorMessage: errors?.email?.message,
    pwErrorMessage: errors?.password?.message,
  }
  const signUpProps: SignUpProps = {
    form: {
      handleSubmit,
      onSignUpValid,
    },
    input: {
      register,
    },
    errorText: {
      ...errorConfig,
    },
  }
  const onSignInValid = (userInfo: IFormData) => {
    postSignInMutate({email: userInfo.email, password: userInfo.password})
  }
  const signInProps: SignInProps = {
    form: {
      handleSubmit,
      onSignInValid,
    },
    input: {
      register,
    },
    errorText: {
      ...errorConfig,
    },
  }
  return {signUpProps, signInProps}
}

export default useAuthForm
