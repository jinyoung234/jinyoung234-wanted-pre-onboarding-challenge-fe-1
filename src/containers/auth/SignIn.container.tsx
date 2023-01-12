import React from 'react'
import SignInForm from '../../components/auth/SignInForm'
import useAuthForm from '../../hooks/useAuthForm'

function SignInContainer() {
  const {signInProps} = useAuthForm()
  return <SignInForm {...signInProps} />
}

export default SignInContainer
