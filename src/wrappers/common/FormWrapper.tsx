import React from 'react'
import {useLocation} from 'react-router-dom'
import Button from '../../components/common/Button'
import ErrorText from '../../components/common/ErrorText'
import Input from '../../components/common/Input'
import Label from '../../components/common/Label'
import {FormWrapperProps} from './type'

export const Form = Object.assign(FormWrapper, {
  Label,
  Button,
  Input,
  ErrorText,
})

function FormWrapper({children, handleSubmit}: FormWrapperProps) {
  const {pathname} = useLocation()
  return (
    <form
      style={pathname === '/' ? {display: 'row'} : {display: 'flex', flexDirection: 'column'}}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  )
}

export default FormWrapper
