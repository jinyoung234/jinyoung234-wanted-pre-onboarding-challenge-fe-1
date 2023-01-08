import {ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabledCondition: boolean
  context: string
}

interface FnButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  context: string
  btnType: string
  index: number
  id?: string
  setSave?: React.Dispatch<React.SetStateAction<boolean>>
  setExtraData?: React.Dispatch<React.SetStateAction<object>>
}

export type {ButtonProps, FnButtonProps}
