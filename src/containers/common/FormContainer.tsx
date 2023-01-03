import React from 'react'
import {useLocation} from 'react-router-dom'
import Button from '../../components/common/Button'
import ErrorText from '../../components/common/ErrorText'
import Input from '../../components/common/Input'
import Label from '../../components/common/Label'
import {FormContainerProps} from './type'

export const Form = Object.assign(FormContainer, {
  Label,
  Button,
  Input,
  ErrorText,
})

export const ToDoAddForm = Object.assign(FormContainer, {
  Button,
  Input,
})

function FormContainer({children, handleSubmit}: FormContainerProps) {
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

export default FormContainer
