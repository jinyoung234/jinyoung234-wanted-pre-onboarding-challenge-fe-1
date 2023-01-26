import {ReactNode} from 'react'

interface FormWrapperProps {
  children: ReactNode
  handleSubmit?: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}

export type {FormWrapperProps}
