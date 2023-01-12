import React from 'react'
import {UseFormRegister} from 'react-hook-form'
import {IFormData} from '../../../types'
import {InputProps} from './type'

const Input = React.forwardRef<HTMLInputElement, InputProps & ReturnType<UseFormRegister<IFormData>>>(
  ({...rest}: InputProps, ref) => {
    return (
      <>
        <input ref={ref} {...rest} />
      </>
    )
  },
)

Input.displayName = 'input'

export default Input
