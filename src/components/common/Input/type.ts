interface InputProps {
  isTodo?: boolean
  inputValue?: string
  disabled?: boolean
  isEnter?: boolean
  type: string
  id?: string
  pwRef?: React.MutableRefObject<HTMLInputElement | null>
  connectRef?: (e: HTMLInputElement) => void
}

export type {InputProps}
