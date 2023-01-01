import React from 'react'
import {LabelProps} from './type'

function Label({label, ...rest}: LabelProps) {
  return <label {...rest}>{label}</label>
}

export default Label
