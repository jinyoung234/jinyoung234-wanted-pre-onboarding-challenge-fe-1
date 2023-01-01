import {ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabledCondition: boolean
  context: string
}

export type {ButtonProps}
