import React from 'react'
import {ButtonProps} from './type'

function Button({disabledCondition, context, ...rest}: ButtonProps) {
  return (
    <button disabled={disabledCondition} {...rest}>
      {context}
    </button>
  )
}

export default Button
