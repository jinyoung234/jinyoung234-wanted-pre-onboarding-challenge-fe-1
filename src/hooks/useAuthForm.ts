import React from 'react'
import {useForm} from 'react-hook-form'
import {useSignUpMutation} from '../queries/auth/useAuth'
import {IFormData, SignUpProps} from '../types'

function useAuthForm() {
  const {postSignUpMutate} = useSignUpMutation()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormData>()
  const onSignUpValid = (userInfo: IFormData) => {
    postSignUpMutate({email: userInfo.email, password: userInfo.password})
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
      errors,
      idErrorMessage: errors?.email?.message,
      pwErrorMessage: errors?.password?.message,
    },
  }
  return {signUpProps}
}

export default useAuthForm
