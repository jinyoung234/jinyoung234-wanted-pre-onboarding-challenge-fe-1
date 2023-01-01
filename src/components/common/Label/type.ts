import {LabelHTMLAttributes} from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string
  htmlFor: string
}

export type {LabelProps}
