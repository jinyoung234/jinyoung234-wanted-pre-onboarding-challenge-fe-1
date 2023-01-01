import React from 'react'
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

function FormContainer({children, handleSubmit}: FormContainerProps) {
  return (
    <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default FormContainer
