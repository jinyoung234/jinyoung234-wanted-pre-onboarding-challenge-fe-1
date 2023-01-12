import React from 'react'
import {ButtonProps} from './type'

function Button({context, ...rest}: ButtonProps) {
  return <button {...rest}>{context}</button>
}

export default Button
