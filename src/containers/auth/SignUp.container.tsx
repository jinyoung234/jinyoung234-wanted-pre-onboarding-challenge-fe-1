import React from 'react'
import SignUpForm from '../../components/auth/SignUpForm'
import useAuthForm from '../../hooks/useAuthForm'

function SignUpContainer() {
  const {signUpProps} = useAuthForm()
  return <SignUpForm {...signUpProps} />
}

export default SignUpContainer
